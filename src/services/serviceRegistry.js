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
    description: 'Read the current workspace briefing from local files.'
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
    description: 'Return current briefing data with an old last-read time.'
  },
  {
    id: 'failed',
    label: 'Failed',
    status: 'failed',
    description: 'Return a failed bridge-read state.'
  },
  {
    id: 'partial',
    label: 'Partial',
    status: 'partial',
    description: 'Return current briefing data with one expected field omitted.'
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
  const uiuxPath = path.join(root, 'workspace', 'UIUXHS11-m01-feature-requirements.md');
  const sources = [];
  const warnings = [];

  if (mode === 'failed') {
    return attachModeMetadata(failedBriefing('Fixture failed bridge read', 'test-mode'), mode);
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

  readOptional(uiuxPath, sources, warnings);

  const fields = {
    project_name: projectName,
    project_description: projectDescription,
    active_milestone: matchLine(currentText, 'Active milestone'),
    current_packet_path: 'workspace/current.md',
    current_executor: matchLine(currentText, 'Current executor'),
    current_focus: matchLine(currentText, 'Current focus'),
    expected_output: matchLine(currentText, 'Expected output') || matchLine(currentText, 'Expected DevHS filename'),
    previous_accepted_handshake: matchLine(currentText, 'Previous accepted handshake'),
    sequence: matchLine(currentText, 'Sequence')
  };

  const missing = Object.entries(fields)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (mode === 'empty') {
    return attachModeMetadata({
      view_status: 'empty',
      certainty: 'No presentation data available from fixture input.',
      action_posture: actionPostureForStatus('empty', {}),
      attention_items: [],
      attention_empty_copy: 'No attention items reported.',
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
    attention_empty_copy: 'No attention items reported.',
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
    available_modes: BRIEFING_TEST_MODES
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
    return 'Partial view; available facts are source-labeled.';
  }
  return 'Verified from local workspace sources.';
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
  BRIEFING_TEST_MODES
};
