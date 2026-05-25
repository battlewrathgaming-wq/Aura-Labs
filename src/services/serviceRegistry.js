const fs = require('node:fs');
const path = require('node:path');
const { checksumPayload } = require('../util/checksum');
const { APP_NAME } = require('../constants');
const { defaultTaskRunner, TASK_CLASSIFICATIONS } = require('./taskRunner');
const { taxonomyMessage } = require('./messageTaxonomy');
const { auraTempRoot, projectRoot } = require('../util/tempPaths');

const BRIEFING_TEST_MODES = Object.freeze([
  {
    id: 'normal',
    label: 'Normal',
    status: 'populated',
    description: 'Return populated presentation data from local fixture sources.'
  },
  {
    id: 'empty',
    label: 'Empty',
    status: 'empty',
    description: 'Return an empty presentation state.'
  },
  {
    id: 'stale',
    label: 'Stale',
    status: 'stale',
    description: 'Return presentation data with an old last-read time.'
  },
  {
    id: 'failed',
    label: 'Failed',
    status: 'failed',
    description: 'Return a failed fixture-read state.'
  },
  {
    id: 'fallback',
    label: 'Fallback',
    status: 'failed',
    description: 'Return an unavailable readout with fallback display basis.'
  },
  {
    id: 'partial',
    label: 'Partial',
    status: 'partial',
    description: 'Return presentation data with one expected field omitted.'
  },
  {
    id: 'long-text',
    label: 'Long text',
    status: 'populated',
    description: 'Return populated review data with overflow-prone presentation text.'
  }
]);

const PRESENTATION_FAMILIES = Object.freeze([
  {
    id: 'briefing',
    label: 'Briefing',
    description: 'Lab project-state briefing presentation fixture.'
  },
  {
    id: 'neutral-seed',
    label: 'Neutral Sample',
    description: 'Lab-local neutral presentation fixture.'
  }
]);

class ServiceRegistry {
  constructor({ taskRunner = defaultTaskRunner } = {}) {
    this.commands = new Map();
    this.taskRunner = taskRunner;
  }

  register(command, definition) {
    if (!command || typeof command !== 'string') {
      throw new Error('Service command must be a non-empty string');
    }
    if (typeof definition?.handler !== 'function') {
      throw new Error(`Service command ${command} requires a handler`);
    }

    this.commands.set(command, {
      classification: definition.classification || TASK_CLASSIFICATIONS.READ_ONLY,
      description: definition.description || '',
      validate: definition.validate || null,
      handler: definition.handler
    });
    return this;
  }

  listCommands() {
    return Array.from(this.commands.entries())
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([command, definition]) => ({
        command,
        classification: definition.classification,
        description: definition.description
      }));
  }

  async invoke(command, payload = {}, context = {}) {
    const definition = this.commands.get(command);
    if (!definition) {
      const error = new Error(`Unknown service command: ${command}`);
      error.code = 'SERVICE_UNKNOWN_COMMAND';
      throw error;
    }

    const validation = validatePayload(definition, payload, context, command);
    if (!validation.valid) {
      throw validation.error;
    }

    if (context.asTask) {
      const taskDefinition = {
        type: command,
        classification: definition.classification,
        scopeKey: payload.scopeKey || command
      };
      const taskHandler = async (task) => {
        task.progress({ stage: 'start', message: `Running ${command}` });
        const data = await definition.handler(payload, { ...context, signal: task.signal, task });
        task.progress({ stage: 'finish', message: `Finished ${command}` });
        return normalizeServiceTaskResult(data);
      };
      if (context.detachedTask) {
        return this.taskRunner.runDetachedTask(taskDefinition, taskHandler);
      }
      return this.taskRunner.runTask(taskDefinition, taskHandler);
    }

    return definition.handler(payload, context);
  }
}

function createDefaultRegistry(options = {}) {
  const registry = new ServiceRegistry(options);
  registry
    .register('seed.health', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return seed runtime health and registered command count',
      handler: (_payload, context = {}) => ({
        ok: true,
        app: context.appName || 'Aura Lab',
        commands: registry.listCommands().length
      })
    })
    .register('seed.readiness', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return seed runtime readiness, path status, and diagnostics',
      handler: (_payload, context = {}) => buildSeedReadiness(registry, context)
    })
    .register('aura.projectBriefing', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return provisional Aura Lab project briefing data from local workspace files',
      handler: (payload = {}) => buildProjectBriefing(payload)
    })
    .register('aura.presentationFixture', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return Lab-local presentation fixture data by family and state',
      handler: (payload = {}) => buildPresentationFixture(payload)
    })
    .register('util.checksum', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return a stable checksum for a JSON-compatible payload',
      validate: (payload) => {
        if (!payload || typeof payload !== 'object' || !Object.hasOwn(payload, 'value')) {
          return 'util.checksum requires a value field';
        }
        return true;
      },
      handler: (payload) => ({
        checksum: checksumPayload(payload.value)
      })
    })
    .register('task.list', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Return recent task history',
      handler: (payload) => registry.taskRunner.listTasks({ limit: payload?.limit || 20 })
    })
    .register('task.cancel', {
      classification: TASK_CLASSIFICATIONS.READ_ONLY,
      description: 'Request cancellation for a running task',
      handler: (payload) => registry.taskRunner.cancelTask(payload.task_id, payload.reason || 'User requested cancellation')
    });

  return registry;
}

function buildPresentationFixture(payload = {}) {
  const family = normalizePresentationFamily(payload.family);
  const state = normalizeBriefingMode(payload.state || payload.mode || payload.fixtureState);
  if (family === 'neutral-seed') {
    return buildNeutralSeedFixture(state);
  }
  return decoratePresentationFixture(buildProjectBriefing({ mode: state }), {
    family: 'briefing',
    familyLabel: 'Briefing',
    state,
    attentionTitle: 'Needs Attention',
    fieldLabels: briefingFieldLabels()
  });
}

function decoratePresentationFixture(fixture, {
  family,
  familyLabel,
  state,
  attentionTitle,
  fieldLabels
}) {
  return {
    ...fixture,
    family,
    family_label: familyLabel,
    state,
    mode: fixture.mode || state,
    attention_title: attentionTitle,
    field_labels: fieldLabels,
    available_families: PRESENTATION_FAMILIES,
    available_states: BRIEFING_TEST_MODES
  };
}

function normalizePresentationFamily(value) {
  const family = typeof value === 'string' ? value.trim().toLowerCase() : 'briefing';
  return PRESENTATION_FAMILIES.some((entry) => entry.id === family) ? family : 'briefing';
}

function validatePayload(definition, payload, context, command) {
  if (typeof definition.validate !== 'function') {
    return { valid: true };
  }

  const result = definition.validate(payload, context);
  if (result === true || result === undefined || result === null) {
    return { valid: true };
  }

  const message = typeof result === 'string'
    ? result
    : result?.message || `Validation failed for ${command}`;
  const error = new Error(message);
  error.code = result?.code || 'VALIDATION_FAILED';
  error.taxonomy = taxonomyMessage(error.code, message, {
    source: 'service.registry',
    category: 'validation',
    severity: 'warning',
    actionable: true
  });
  return { valid: false, error };
}

function normalizeServiceTaskResult(result) {
  if (result && typeof result === 'object' && Object.hasOwn(result, 'status')) {
    return {
      status: result.status,
      data: Object.hasOwn(result, 'data') ? result.data : result
    };
  }
  return { status: 'succeeded', data: result };
}

function buildSeedReadiness(registry, context = {}) {
  const warnings = [];
  const root = projectRoot();
  let tempRoot = null;
  let tempReady = false;

  try {
    tempRoot = auraTempRoot();
    tempReady = true;
  } catch (error) {
    warnings.push(taxonomyMessage('RUNTIME_PATHS_INVALID', error.message, {
      source: 'seed.readiness'
    }));
  }

  return {
    ok: warnings.length === 0,
    app: {
      name: context.appName || APP_NAME,
      version: context.appVersion || null
    },
    paths: {
      project_root: root,
      temp_root: tempRoot,
      temp_ready: tempReady
    },
    services: {
      command_count: registry.listCommands().length
    },
    warnings
  };
}

function buildProjectBriefing(payload = {}) {
  const mode = normalizeBriefingMode(payload.mode || payload.fixtureState);
  const root = projectRoot();
  const now = new Date();
  const currentPath = path.join(root, 'workspace', 'current.md');
  const packagePath = path.join(root, 'package.json');
  const readoutStatePath = path.join(root, 'docs', 'current-state', 'm11-presentation-state-readout-current-state.md');
  const sources = [];
  const warnings = [];

  if (mode === 'failed') {
    return attachModeMetadata(failedBriefing('Fixture failed bridge read', 'test-mode'), mode);
  }

  if (mode === 'fallback') {
    return attachModeMetadata(fallbackBriefing(), mode);
  }

  let currentText = '';
  try {
    currentText = readRequired(currentPath, sources);
  } catch (error) {
    return attachModeMetadata(failedBriefing(error.message, 'workspace/current.md'), mode);
  }

  let projectName = APP_NAME;
  let projectDescription = APP_NAME;
  try {
    const packageText = readOptional(packagePath, sources, warnings);
    if (packageText) {
      const parsedPackage = JSON.parse(packageText);
      projectName = displayNameFromPackage(parsedPackage.name) || APP_NAME;
      projectDescription = parsedPackage.description || projectName;
    }
  } catch (error) {
    warnings.push(missingSource('package.json', error.message));
  }

  readOptional(readoutStatePath, sources, warnings);

  const fields = {
    project_name: projectName,
    project_description: projectDescription,
    active_milestone: matchLine(currentText, 'Active milestone'),
    current_packet_path: 'workspace/current.md',
    current_executor: matchLine(currentText, 'Current executor'),
    current_focus: matchLine(currentText, 'Current focus'),
    expected_output: packetValue(matchLine(currentText, 'Expected output') || matchLine(currentText, 'Expected DevHS filename')),
    previous_accepted_handshake: matchLine(currentText, 'Previous accepted handshake'),
    sequence: matchLine(currentText, 'Sequence')
  };

  if (mode === 'long-text') {
    applyLongTextFixture(fields, sources, now);
  }

  const missing = Object.entries(fields)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (mode === 'empty') {
    return attachModeMetadata({
      view_status: 'empty',
      certainty: 'No presentation data available from fixture input.',
      action_posture: actionPostureForStatus('empty', {}),
      attention_items: [],
      attention_empty_copy: 'No attention items shown.',
      fields: {},
      source_labels: sources.map((source) => source.label),
      sources,
      missing_fields: Object.keys(fields),
      warnings: [],
      last_read_at: now.toISOString()
    }, mode);
  }

  if (mode === 'partial' && !missing.includes('expected_output')) {
    fields.expected_output = null;
    missing.push('expected_output');
  }
  const attentionItems = mode === 'partial' ? null : buildAttentionItems(currentText, fields);
  if (mode === 'partial' && !missing.includes('attention_items')) {
    missing.push('attention_items');
  }

  const lastReadAt = mode === 'stale'
    ? new Date(now.getTime() - 11 * 60 * 1000)
    : now;
  const stale = now.getTime() - lastReadAt.getTime() > 10 * 60 * 1000;
  const viewStatus = stale ? 'stale' : missing.length > 0 || warnings.length > 0 ? 'partial' : 'populated';

  return attachModeMetadata({
    view_status: viewStatus,
    certainty: certaintyForStatus(viewStatus),
    action_posture: actionPostureForStatus(viewStatus, fields),
    attention_items: attentionItems,
    attention_empty_copy: 'No attention items shown.',
    fields,
    source_labels: sources.map((source) => source.label),
    sources,
    missing_fields: missing,
    warnings,
    last_read_at: lastReadAt.toISOString()
  }, mode);
}

function normalizeBriefingMode(value) {
  const mode = typeof value === 'string' ? value.trim().toLowerCase() : 'normal';
  return BRIEFING_TEST_MODES.some((entry) => entry.id === mode) ? mode : 'normal';
}

function attachModeMetadata(briefing, mode) {
  return {
    ...briefing,
    mode,
    available_modes: BRIEFING_TEST_MODES,
    available_states: BRIEFING_TEST_MODES,
    available_families: PRESENTATION_FAMILIES
  };
}

function buildNeutralSeedFixture(state) {
  const now = new Date();
  if (state === 'failed') {
    return decoratePresentationFixture({
      view_status: 'failed',
      title: 'Neutral sample unavailable',
      summary: 'Required sample data is unavailable for this presentation review state.',
      certainty: 'Unavailable; required sample could not be read.',
      action_posture: {
        label: 'Unavailable',
        detail: 'Presentation fixture returned an unavailable sample state.'
      },
      attention_items: null,
      attention_empty_copy: 'Unavailable',
      fields: {},
      source_labels: ['neutral sample fixture'],
      sources: [{ label: 'neutral sample fixture', available: false }],
      missing_fields: [],
      warnings: [],
      error: {
        source: 'neutral sample fixture',
        message: 'Required sample unavailable.'
      },
      last_read_at: now.toISOString()
    }, neutralSeedMetadata(state));
  }

  if (state === 'fallback') {
    return decoratePresentationFixture({
      view_status: 'failed',
      title: 'Neutral sample fallback',
      summary: 'Showing fallback display basis for the neutral presentation sample.',
      fallback_note: 'Fallback display basis available.',
      certainty: 'Fallback presentation path.',
      action_posture: {
        label: 'Fallback',
        detail: 'Presentation fixture returned fallback display basis.'
      },
      attention_items: [
        {
          label: 'Fallback basis',
          text: 'Fallback display basis available.',
          source: 'neutral fixture'
        }
      ],
      attention_empty_copy: 'No sample items shown.',
      fields: neutralSeedFields(state),
      source_labels: ['neutral sample fallback basis'],
      sources: [{ label: 'neutral sample fallback basis', available: true, modified_at: now.toISOString() }],
      missing_fields: ['live_sample'],
      warnings: [{ message: 'Primary sample unavailable; fallback display basis shown.' }],
      last_read_at: new Date(now.getTime() - 9 * 60 * 1000).toISOString()
    }, neutralSeedMetadata(state));
  }

  const fields = neutralSeedFields(state);
  const sources = neutralSeedSources(state, now);
  const missing = [];
  let viewStatus = 'populated';
  let attentionItems = neutralSeedItems(fields);
  let certainty = fields.current_focus;
  let title = fields.project_name;
  let summary = fields.previous_accepted_handshake;
  let emptyCopy = 'No sample items shown.';

  if (state === 'empty') {
    viewStatus = 'empty';
    attentionItems = [];
    title = 'No sample items shown';
    summary = 'The fixture returned an intentional empty presentation state.';
    certainty = 'No sample data available from fixture input.';
  }

  if (state === 'partial') {
    viewStatus = 'partial';
    fields.expected_output = null;
    missing.push('presentation_boundary');
    certainty = 'Partial sample; available display slots are source-labeled.';
  }

  const lastReadAt = state === 'stale'
    ? new Date(now.getTime() - 11 * 60 * 1000)
    : now;
  if (state === 'stale') {
    viewStatus = 'stale';
    fields.current_executor = 'Showing prior fixture generation; sample may have changed.';
    certainty = 'Showing previous fixture generation; sample may have changed.';
  }

  return decoratePresentationFixture({
    view_status: viewStatus,
    title,
    summary,
    certainty,
    action_posture: {
      label: 'Presentation fixture',
      detail: fields.expected_output || summary
    },
    attention_items: attentionItems,
    attention_empty_copy: emptyCopy,
    fields,
    source_labels: sources.map((source) => source.label),
    sources,
    missing_fields: missing,
    warnings: [],
    last_read_at: lastReadAt.toISOString()
  }, neutralSeedMetadata(state));
}

function neutralSeedMetadata(state) {
  return {
    family: 'neutral-seed',
    familyLabel: 'Neutral Sample',
    state,
    attentionTitle: 'Sample slots',
    fieldLabels: neutralSeedFieldLabels()
  };
}

function neutralSeedFields(state) {
  const long = state === 'long-text';
  return {
    project_name: long
      ? 'Neutral presentation sample with extended display title for containment review'
      : 'Neutral presentation sample',
    project_description: 'Fixture-backed presentation test data.',
    active_milestone: long
      ? 'Secondary sample value with extra wording to pressure repeated rows without target terms'
      : 'Secondary sample value',
    current_packet_path: long
      ? 'presentation fixture source layer with deliberately long neutral label'
      : 'presentation fixture source layer',
    current_executor: long
      ? 'Last generated from deterministic Lab-local fixture data for display review'
      : 'Last generated from fixture data',
    current_focus: long
      ? 'Display basis: fixture-backed sample for typography, source labeling, and containment review only.'
      : 'Display basis: fixture-backed sample.',
    expected_output: long
      ? 'Presentation boundary: sample data exercises display mapping only and does not define product meaning or an upstream bridge contract.'
      : 'Presentation boundary: display mapping only.',
    previous_accepted_handshake: long
      ? 'Display note: this neutral family uses generic sample slots to keep basis, freshness, and availability copy visible under longer text pressure.'
      : 'Display note: generic sample slot.',
    sequence: state === 'long-text' ? 'Neutral long-text review state' : `Neutral ${state} review state`
  };
}

function neutralSeedSources(state, now) {
  return [
    {
      label: state === 'long-text'
        ? 'Lab-local neutral fixture source layer with long source label'
        : 'Lab-local neutral fixture source layer',
      available: state !== 'failed',
      modified_at: now.toISOString()
    }
  ];
}

function neutralSeedItems(fields) {
  return [
    {
      label: 'Primary sample',
      text: fields.project_name,
      source: 'neutral fixture'
    },
    {
      label: 'Secondary sample',
      text: fields.active_milestone,
      source: 'neutral fixture'
    },
    {
      label: 'Display note',
      text: fields.previous_accepted_handshake,
      source: 'neutral fixture'
    }
  ];
}

function briefingFieldLabels() {
  return {
    project_name: 'Project',
    active_milestone: 'Active milestone',
    current_packet_path: 'Current packet',
    current_executor: 'Executor',
    current_focus: 'Focus',
    expected_output: 'Expected output',
    previous_accepted_handshake: 'Previous handshake',
    sequence: 'Sequence'
  };
}

function neutralSeedFieldLabels() {
  return {
    project_name: 'Primary sample',
    active_milestone: 'Secondary sample',
    current_packet_path: 'Source layer',
    current_executor: 'Freshness basis',
    current_focus: 'Display basis',
    expected_output: 'Presentation boundary',
    previous_accepted_handshake: 'Display note',
    sequence: 'Review token'
  };
}

function readRequired(filePath, sources) {
  const text = fs.readFileSync(filePath, 'utf8');
  sources.push(sourceInfo(filePath, true));
  return text;
}

function readOptional(filePath, sources, warnings) {
  try {
    const text = fs.readFileSync(filePath, 'utf8');
    sources.push(sourceInfo(filePath, true));
    return text;
  } catch (error) {
    const label = relativeSourceLabel(filePath);
    sources.push({ label, available: false });
    warnings.push(missingSource(label, error.message));
    return '';
  }
}

function sourceInfo(filePath, available) {
  const stat = fs.statSync(filePath);
  return {
    label: relativeSourceLabel(filePath),
    available,
    modified_at: stat.mtime.toISOString()
  };
}

function relativeSourceLabel(filePath) {
  return path.relative(projectRoot(), filePath).replace(/\\/g, '/');
}

function matchLine(text, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`^${escaped}:\\s*(.+)$`, 'm'));
  return match ? match[1].trim().replace(/^`|`$/g, '') : null;
}

function packetValue(value) {
  if (!value) {
    return null;
  }
  const normalized = String(value).trim();
  if (normalized.toLowerCase() === 'none') {
    return null;
  }
  return normalized;
}

function displayNameFromPackage(name) {
  if (!name || typeof name !== 'string') {
    return null;
  }
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(' ');
}

function missingSource(label, message) {
  return taxonomyMessage('PARTIAL_RESULT', `${label}: ${message}`, {
    source: 'aura.projectBriefing',
    category: 'source',
    severity: 'info',
    actionable: false
  });
}

function failedBriefing(message, source) {
  return {
    view_status: 'failed',
    certainty: 'Unavailable; required source could not be read.',
    action_posture: actionPostureForStatus('failed', {}),
    attention_items: null,
    attention_empty_copy: 'Unavailable',
    fields: {},
    source_labels: [source],
    sources: [{ label: source, available: false }],
    missing_fields: [],
    warnings: [],
    error: {
      source,
      message
    },
    last_read_at: new Date().toISOString()
  };
}

function fallbackBriefing() {
  const now = new Date();
  return {
    view_status: 'failed',
    title: 'Project briefing fallback',
    summary: 'Showing fallback display basis for the project briefing readout.',
    fallback_note: 'Fallback display basis available.',
    certainty: 'Fallback presentation path.',
    action_posture: {
      label: 'Fallback',
      detail: 'Project briefing is using fallback display basis.'
    },
    attention_items: [
      {
        label: 'Fallback basis',
        text: 'Fallback display basis available.',
        source: 'test-mode'
      }
    ],
    attention_empty_copy: 'No attention items shown.',
    fields: {
      project_name: APP_NAME,
      project_description: 'Fallback presentation fixture.',
      active_milestone: 'Fallback review state',
      current_packet_path: 'workspace/current.md',
      current_executor: 'Fallback display basis',
      current_focus: 'Review fallback state treatment for the Instrument Status Band.',
      expected_output: null,
      previous_accepted_handshake: null,
      sequence: 'Fallback review state'
    },
    source_labels: ['fallback display basis'],
    sources: [{ label: 'fallback display basis', available: true, modified_at: now.toISOString() }],
    missing_fields: ['current_packet_read'],
    warnings: [{ message: 'Current packet read unavailable; fallback display basis shown.' }],
    last_read_at: new Date(now.getTime() - 9 * 60 * 1000).toISOString()
  };
}

function buildAttentionItems(currentText, fields = {}) {
  const items = [];
  if (fields.current_focus) {
    items.push({
      label: 'Current focus',
      text: fields.current_focus,
      source: 'workspace/current.md'
    });
  }
  if (fields.expected_output) {
    items.push({
      label: 'Expected handoff',
      text: fields.expected_output,
      source: 'workspace/current.md'
    });
  }
  const deferred = firstBulletAfterHeading(currentText, 'Deferred');
  if (deferred) {
    items.push({
      label: 'Deferred',
      text: deferred,
      source: 'workspace/current.md'
    });
  }
  return items.slice(0, 3);
}

function applyLongTextFixture(fields, sources, now) {
  fields.project_name = 'Aura Lab visual smoke long-text briefing surface validation';
  fields.active_milestone = 'M08 - Fixture-Backed Presentation Family Prototype with intentionally extended milestone copy for containment review';
  fields.current_focus = 'Implement the first bounded fixture-backed presentation family prototype while keeping Briefing behavior, source language, state grammar, diagnostics hierarchy, and narrow-window text containment intact.';
  fields.expected_output = 'workspace/DevHS30-fixture-backed-presentation-family-prototype.md with family and state behavior, visual smoke notes, screenshot notes, process cleanup, and residual risk captured for Overseer review.';
  fields.previous_accepted_handshake = 'workspace/complete/milestone-M07/OverseerHS30-m07-closure-and-m08-runway.md plus accepted family-spec and post-bridge presentation boundary notes.';
  fields.sequence = 'HS30 long-text review fixture';
  sources.push({
    label: 'workspace/current.md plus long-text visual smoke fixture source label for overflow review',
    available: true,
    modified_at: now.toISOString()
  });
}

function firstBulletAfterHeading(text, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = text.match(new RegExp(`^${escaped}:\\s*\\n\\s*\\n?((?:- .+\\n?)+)`, 'm'));
  if (!match) {
    return null;
  }
  const bullet = match[1].split(/\r?\n/).find((line) => line.trim().startsWith('- '));
  return bullet ? bullet.trim().replace(/^- /, '') : null;
}

function actionPostureForStatus(status, fields = {}) {
  if (status === 'failed') {
    return {
      label: 'Unavailable',
      detail: 'Project state needs a successful bridge read.'
    };
  }
  if (status === 'empty') {
    return {
      label: 'Human direction needed',
      detail: 'No presentable project packet was returned.'
    };
  }
  const executor = String(fields.current_executor || '').toLowerCase();
  const expected = String(fields.expected_output || '');
  if (executor.includes('dev') || expected.startsWith('DevHS')) {
    return {
      label: 'Dev runway ready',
      detail: fields.current_focus || 'Current packet is ready for Dev execution.'
    };
  }
  if (executor.includes('human') || executor.includes('overseer')) {
    return {
      label: 'Human direction needed',
      detail: fields.current_focus || 'Project is waiting for review or direction.'
    };
  }
  if (executor.includes('ui/ux') || executor.includes('specialist')) {
    return {
      label: 'Specialist review ready',
      detail: fields.current_focus || 'Current packet is ready for specialist review.'
    };
  }
  if (fields.previous_accepted_handshake) {
    return {
      label: 'Accepted current state',
      detail: `Latest accepted: ${fields.previous_accepted_handshake}`
    };
  }
  return {
    label: 'Pending acceptance',
    detail: fields.current_focus || 'Project state is available for review.'
  };
}

function certaintyForStatus(status) {
  if (status === 'stale') {
    return 'Showing last successful read; source may have changed.';
  }
  if (status === 'partial') {
    return 'Partial readout; available fields include source labels.';
  }
  return 'Read from local workspace sources.';
}

function registerElectronServiceHandlers(ipcMain, registry, contextProvider = () => ({})) {
  if (!ipcMain?.handle) {
    throw new Error('registerElectronServiceHandlers requires ipcMain.handle');
  }
  if (!registry?.invoke || !registry?.listCommands) {
    throw new Error('registerElectronServiceHandlers requires a ServiceRegistry');
  }

  ipcMain.handle('aura:service:list', () => registry.listCommands());
  ipcMain.handle('aura:service:invoke', async (_event, request = {}) => registry.invoke(
    request.command,
    request.payload || {},
    {
      ...contextProvider(),
      asTask: request.asTask === true,
      detachedTask: request.detachedTask === true || request.background === true
    }
  ));
}

module.exports = {
  ServiceRegistry,
  createDefaultRegistry,
  registerElectronServiceHandlers,
  normalizeServiceTaskResult,
  validatePayload,
  buildSeedReadiness,
  buildProjectBriefing,
  buildPresentationFixture,
  PRESENTATION_FAMILIES,
  BRIEFING_TEST_MODES
};
