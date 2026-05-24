const {
  knownCodes,
  taxonomyMessage,
  validateTaxonomyMessage
} = require('../src/services/messageTaxonomy');
const {
  ServiceRegistry,
  createDefaultRegistry,
  BRIEFING_TEST_MODES
} = require('../src/services/serviceRegistry');
const {
  TaskRunner,
  TASK_CLASSIFICATIONS,
  TASK_STATES
} = require('../src/services/taskRunner');

async function main() {
  verifyTaxonomy();
  await verifyTaskRunner();
  await verifyRegistry();
  console.log('services verified');
}

function verifyTaxonomy() {
  assert(knownCodes().includes('TASK_LOCKED'), 'taxonomy should include task lock code');
  assert(knownCodes().includes('HTTP_INVALID_JSON'), 'taxonomy should include invalid JSON code');
  const message = taxonomyMessage('partial_result', 'Fixture partial result', { source: 'verify' });
  assert(validateTaxonomyMessage(message), 'taxonomy message should validate');
  assert(message.code === 'PARTIAL_RESULT', 'taxonomy should normalize codes');
  assert(message.severity === 'info', 'partial result should be info severity');
}

async function verifyTaskRunner() {
  const runner = new TaskRunner({ historyLimit: 30 });

  const readOnly = await runner.runTask({
    type: 'summary.fixture',
    classification: TASK_CLASSIFICATIONS.READ_ONLY,
    scopeKey: 'same-scope'
  }, async ({ progress, warn }) => {
    progress({ stage: 'summary', message: 'building summary', current: 1, total: 2 });
    warn({ severity: 'info', code: 'PARTIAL_RESULT', message: 'fixture sample' });
    return { status: TASK_STATES.SUCCEEDED, data: { ok: true } };
  });
  assert(readOnly.status === TASK_STATES.SUCCEEDED, 'read-only task should succeed');
  assert(readOnly.progress.length === 1, 'progress event should be recorded');
  assert(readOnly.warnings[0].code === 'PARTIAL_RESULT', 'warning should be recorded');

  let releaseLocal;
  const firstLocal = runner.runTask({
    type: 'local.fixture',
    classification: TASK_CLASSIFICATIONS.LOCAL_MUTATION,
    scopeKey: 'artifact:1'
  }, () => new Promise((resolve) => {
    releaseLocal = () => resolve({ status: TASK_STATES.SUCCEEDED, data: { changed: 1 } });
  }));

  const lockedLocal = await runner.runTask({
    type: 'local.fixture',
    classification: TASK_CLASSIFICATIONS.LOCAL_MUTATION,
    scopeKey: 'artifact:1'
  }, async () => ({ status: TASK_STATES.SUCCEEDED }));
  assert(lockedLocal.status === TASK_STATES.FAILED, 'overlapping mutation task should fail');
  assert(lockedLocal.error.code === 'TASK_LOCKED', 'overlap should produce task lock error');

  releaseLocal();
  await firstLocal;

  let releaseExclusive;
  const exclusive = runner.runTask({
    type: 'exclusive.fixture',
    classification: TASK_CLASSIFICATIONS.EXCLUSIVE
  }, () => new Promise((resolve) => {
    releaseExclusive = () => resolve({ data: { ok: true } });
  }));

  const blocked = await runner.runTask({
    type: 'external.fixture',
    classification: TASK_CLASSIFICATIONS.EXTERNAL_IO,
    scopeKey: 'remote:1'
  }, async () => ({ data: { ok: true } }));
  assert(blocked.status === TASK_STATES.FAILED, 'exclusive task should block external IO');
  releaseExclusive();
  await exclusive;

  let releaseExternalMutation;
  const externalMutation = runner.runTask({
    type: 'external.mutation.fixture',
    classification: TASK_CLASSIFICATIONS.EXTERNAL_MUTATION,
    scopeKey: 'artifact:2'
  }, () => new Promise((resolve) => {
    releaseExternalMutation = () => resolve({ data: { changed: true } });
  }));

  const blockedLocalMutation = await runner.runTask({
    type: 'local.fixture',
    classification: TASK_CLASSIFICATIONS.LOCAL_MUTATION,
    scopeKey: 'artifact:2'
  }, async () => ({ data: { changed: true } }));
  assert(blockedLocalMutation.status === TASK_STATES.FAILED, 'external mutation should block local mutation on the same scope');
  releaseExternalMutation();
  await externalMutation;

  assert(runner.listTasks().length >= 4, 'task history should include recent tasks');
}

async function verifyRegistry() {
  const registry = createDefaultRegistry({
    taskRunner: new TaskRunner()
  });
  const commands = registry.listCommands();
  assert(commands.some((entry) => entry.command === 'seed.health'), 'default registry should include seed health');
  assert(commands.some((entry) => entry.command === 'aura.projectBriefing'), 'default registry should include project briefing');
  assertModeList(BRIEFING_TEST_MODES);

  const health = await registry.invoke('seed.health', {}, { appName: 'Fixture App' });
  assert(health.ok === true, 'seed health should return ok');
  assert(health.app === 'Fixture App', 'seed health should use context app name');

  const readiness = await registry.invoke('seed.readiness', {}, { appName: 'Fixture App', appVersion: 'test' });
  assert(readiness.ok === true, 'seed readiness should return ok');
  assert(readiness.app.name === 'Fixture App', 'seed readiness should use context app name');
  assert(readiness.paths.project_root, 'seed readiness should include project root');
  assert(readiness.paths.temp_ready === true, 'seed readiness should confirm temp path readiness');

  const briefing = await registry.invoke('aura.projectBriefing', { mode: 'normal' });
  assert(briefing.view_status === 'populated', 'project briefing should return populated data from workspace/current.md');
  assert(briefing.mode === 'normal', 'project briefing should echo normal mode');
  assertModeList(briefing.available_modes);
  assert(briefing.fields.project_name === 'Aura Lab', 'project briefing should expose compact project display name');
  assert(briefing.action_posture.label === 'Dev runway ready', 'project briefing should derive Dev runway action posture');
  assert(Array.isArray(briefing.attention_items), 'project briefing should expose attention items');
  assert(briefing.attention_items.length > 0 && briefing.attention_items.length <= 3, 'project briefing should expose one to three attention items');
  assert(briefing.attention_items.some((item) => item.label === 'Current focus'), 'project briefing should include current focus attention item');
  assert(typeof briefing.fields.current_executor === 'string' && briefing.fields.current_executor.length > 0, 'project briefing should include current executor');
  assert(typeof briefing.fields.expected_output === 'string' && briefing.fields.expected_output.length > 0, 'project briefing should include expected output');
  assert(briefing.fields.current_packet_path === 'workspace/current.md', 'project briefing should identify current packet path');
  assert(briefing.source_labels.includes('workspace/current.md'), 'project briefing should label current packet source');
  assert(briefing.source_labels.includes('docs/current-state/m01-project-state-briefing-current-state.md'), 'project briefing should label accepted M01 current-state source');
  assert(briefing.certainty === 'Verified from local workspace sources.', 'project briefing should include certainty language');
  assert(typeof briefing.last_read_at === 'string' && briefing.last_read_at.length > 0, 'project briefing should include last read time');

  const legacyFixtureBriefing = await registry.invoke('aura.projectBriefing', { fixtureState: 'partial' });
  assert(legacyFixtureBriefing.view_status === 'partial', 'project briefing should preserve legacy fixture state compatibility');

  const partialBriefing = await registry.invoke('aura.projectBriefing', { mode: 'partial' });
  assert(partialBriefing.view_status === 'partial', 'project briefing should expose partial fixture state');
  assert(partialBriefing.mode === 'partial', 'partial briefing should echo mode');
  assert(partialBriefing.missing_fields.includes('expected_output'), 'partial briefing should identify missing field');
  assert(partialBriefing.missing_fields.includes('attention_items'), 'partial briefing should identify missing attention items');
  assert(partialBriefing.attention_items === null, 'partial briefing should not provide blank attention data');
  assert(partialBriefing.certainty === 'Partial view; available facts are source-labeled.', 'partial briefing should include partial certainty language');

  const longTextBriefing = await registry.invoke('aura.projectBriefing', { mode: 'long-text' });
  assert(longTextBriefing.view_status === 'populated', 'project briefing should expose long-text populated fixture state');
  assert(longTextBriefing.mode === 'long-text', 'long-text briefing should echo mode');
  assert(longTextBriefing.fields.project_name.includes('long-text'), 'long-text briefing should stress title text');
  assert(longTextBriefing.fields.current_focus.length > 140, 'long-text briefing should stress focus text');
  assert(longTextBriefing.fields.expected_output.length > 120, 'long-text briefing should stress expected output text');
  assert(longTextBriefing.source_labels.some((label) => label.includes('long-text visual smoke fixture')), 'long-text briefing should stress source labels');
  assert(Array.isArray(longTextBriefing.attention_items) && longTextBriefing.attention_items.length === 3, 'long-text briefing should keep attention list capped at three items');

  const emptyBriefing = await registry.invoke('aura.projectBriefing', { mode: 'empty' });
  assert(emptyBriefing.view_status === 'empty', 'project briefing should expose empty fixture state');
  assert(emptyBriefing.mode === 'empty', 'empty briefing should echo mode');
  assert(emptyBriefing.action_posture.label === 'Human direction needed', 'empty briefing should expose action posture');
  assert(Array.isArray(emptyBriefing.attention_items) && emptyBriefing.attention_items.length === 0, 'empty briefing should expose empty attention list');
  assert(emptyBriefing.attention_empty_copy === 'No attention items reported.', 'empty briefing should expose intentional empty attention copy');
  assert(emptyBriefing.certainty === 'No presentation data available from fixture input.', 'empty briefing should include empty certainty language');

  const staleBriefing = await registry.invoke('aura.projectBriefing', { mode: 'stale' });
  assert(staleBriefing.view_status === 'stale', 'project briefing should expose stale fixture state');
  assert(staleBriefing.mode === 'stale', 'stale briefing should echo mode');
  assert(Array.isArray(staleBriefing.attention_items), 'stale briefing should preserve attention items');
  assert(staleBriefing.certainty === 'Showing last successful read; source may have changed.', 'stale briefing should include stale certainty language');

  const failedBriefing = await registry.invoke('aura.projectBriefing', { mode: 'failed' });
  assert(failedBriefing.view_status === 'failed', 'project briefing should expose failed fixture state');
  assert(failedBriefing.mode === 'failed', 'failed briefing should echo mode');
  assert(failedBriefing.action_posture.label === 'Unavailable', 'failed briefing should expose unavailable action posture');
  assert(failedBriefing.attention_items === null, 'failed briefing should expose unavailable attention data');
  assert(failedBriefing.certainty === 'Unavailable; required source could not be read.', 'failed briefing should include failed certainty language');

  const fallbackBriefing = await registry.invoke('aura.projectBriefing', { mode: 'unknown' });
  assert(fallbackBriefing.mode === 'normal', 'unknown briefing mode should fall back to normal');

  const checksum = await registry.invoke('util.checksum', { value: { b: 2, a: 1 } });
  assert(typeof checksum.checksum === 'string' && checksum.checksum.length === 64, 'checksum command should return sha256');

  await assertRejects(
    () => registry.invoke('util.checksum', {}),
    'VALIDATION_FAILED',
    'checksum command should validate payload'
  );

  const taskWrapped = await registry.invoke('seed.health', {}, { asTask: true });
  assert(taskWrapped.status === TASK_STATES.SUCCEEDED, 'asTask registry call should return succeeded task');
  assert(taskWrapped.result.ok === true, 'asTask result should include command data');

  registry.register('fixture.partial', {
    classification: TASK_CLASSIFICATIONS.READ_ONLY,
    description: 'Return a partial task result',
    handler: () => ({ status: TASK_STATES.PARTIAL, data: { count: 1 } })
  });
  const partialTask = await registry.invoke('fixture.partial', {}, { asTask: true });
  assert(partialTask.status === TASK_STATES.PARTIAL, 'asTask registry call should preserve partial status');
  assert(partialTask.result.count === 1, 'partial task should preserve data payload');

  const custom = new ServiceRegistry();
  custom.register('fixture.echo', {
    description: 'Echo payload',
    handler: (payload) => payload
  });
  const echoed = await custom.invoke('fixture.echo', { ok: true });
  assert(echoed.ok === true, 'custom registry should invoke registered command');
}

function assertModeList(modes) {
  assert(Array.isArray(modes), 'project briefing should expose available modes');
  for (const mode of ['normal', 'empty', 'stale', 'failed', 'partial', 'long-text']) {
    assert(modes.some((entry) => entry.id === mode), `project briefing should expose ${mode} mode`);
  }
}

async function assertRejects(fn, expectedCode, message) {
  try {
    await fn();
  } catch (error) {
    assert(error.code === expectedCode, `${message}: expected ${expectedCode}, got ${error.code || error.message}`);
    return;
  }
  throw new Error(message);
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
