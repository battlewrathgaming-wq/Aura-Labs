const state = {
  frame: {
    alwaysOnTop: false
  },
  briefingMode: 'normal',
  briefingModes: []
};

async function boot() {
  await bootFrame();
  renderBriefing({
    view_status: 'loading',
    certainty: 'Reported by bridge',
    fields: {},
    source_labels: [],
    last_read_at: null
  });
  const services = await window.aura.listServices();
  const readinessPromise = window.aura.invokeService('seed.readiness');
  const briefingPromise = loadBriefing('normal');
  const readiness = await readinessPromise;
  const briefing = await briefingPromise;

  renderBriefing(briefing);
  setupBriefingModeControl(briefing);

  document.querySelector('#health').textContent = readiness.ok ? 'Ready' : 'Blocked';
  document.querySelector('#commands').textContent = String(services.length);

  const list = document.querySelector('#service-list');
  list.textContent = '';
  for (const service of services) {
    const item = document.createElement('li');
    const command = document.createElement('strong');
    command.textContent = service.command;
    const classification = document.createElement('span');
    classification.textContent = service.classification;
    item.append(command, classification);
    list.appendChild(item);
  }
}

async function loadBriefing(mode) {
  state.briefingMode = mode || 'normal';
  return window.aura.invokeService('aura.projectBriefing', {
    mode: state.briefingMode
  });
}

function setupBriefingModeControl(briefing) {
  const select = document.querySelector('#briefing-mode');
  state.briefingModes = briefing?.available_modes || [];
  if (state.briefingModes.length > 0) {
    select.textContent = '';
    for (const mode of state.briefingModes) {
      const option = document.createElement('option');
      option.value = mode.id;
      option.textContent = mode.label;
      select.appendChild(option);
    }
  }
  select.value = briefing?.mode || state.briefingMode;
  select.addEventListener('change', async () => {
    select.disabled = true;
    renderBriefing({
      view_status: 'loading',
      certainty: 'Reported by bridge',
      fields: {},
      source_labels: [],
      last_read_at: null,
      mode: select.value,
      available_modes: state.briefingModes
    });
    try {
      renderBriefing(await loadBriefing(select.value));
    } finally {
      select.disabled = false;
    }
  });
}

function renderBriefing(briefing) {
  const status = briefing?.view_status || 'failed';
  const fields = briefing?.fields || {};
  const stateCopy = statusCopy(status, briefing);
  document.querySelector('#briefing-title').textContent = stateCopy.title;
  document.querySelector('#briefing-summary').textContent = stateCopy.summary;
  document.querySelector('#view-status').textContent = stateCopy.label;
  document.querySelector('#freshness').textContent = freshnessCopy(briefing);
  document.querySelector('.bridge-state').dataset.status = status;
  document.querySelector('#action-posture-label').textContent = actionPostureLabel(briefing, status);
  document.querySelector('#action-posture-detail').textContent = actionPostureDetail(briefing, stateCopy);
  document.querySelector('#certainty').textContent = briefing?.certainty || stateCopy.certainty;
  document.querySelector('#sources').textContent = sourceCopy(briefing);
  document.querySelector('#briefing-mode-note').textContent = modeNoteCopy(briefing);
  renderAttention(briefing, status);

  for (const item of document.querySelectorAll('[data-field]')) {
    const key = item.dataset.field;
    item.textContent = valueCopy(fields[key], status);
    item.classList.toggle('muted-value', !fields[key]);
  }
}

function renderAttention(briefing, status) {
  const list = document.querySelector('#attention-list');
  const count = document.querySelector('#attention-count');
  list.textContent = '';

  if (status === 'loading') {
    count.textContent = 'Reading';
    appendAttentionLine(list, 'Reading project attention items.', 'muted-value');
    return;
  }

  const items = briefing?.attention_items;
  if (items === null || items === undefined) {
    const copy = status === 'failed' ? 'Unavailable' : 'Not provided';
    count.textContent = copy;
    appendAttentionLine(list, copy, 'muted-value');
    return;
  }

  if (!Array.isArray(items) || items.length === 0) {
    count.textContent = 'None reported';
    appendAttentionLine(list, briefing?.attention_empty_copy || 'No attention items reported.', 'muted-value');
    return;
  }

  const visible = items.slice(0, 3);
  count.textContent = `${visible.length} item${visible.length === 1 ? '' : 's'}`;
  for (const item of visible) {
    const li = document.createElement('li');
    const label = document.createElement('strong');
    label.textContent = item.label || 'Attention';
    const text = document.createElement('span');
    text.textContent = item.text || 'Not provided';
    const source = document.createElement('small');
    source.textContent = item.source ? `Source: ${item.source}` : 'Source: Not provided';
    li.append(label, text, source);
    list.appendChild(li);
  }
}

function appendAttentionLine(list, text, className) {
  const li = document.createElement('li');
  li.textContent = text;
  if (className) {
    li.classList.add(className);
  }
  list.appendChild(li);
}

function modeNoteCopy(briefing) {
  const modes = briefing?.available_modes || state.briefingModes || [];
  const mode = modes.find((entry) => entry.id === briefing?.mode);
  return mode?.description || 'Development-only UI state preview';
}

function actionPostureLabel(briefing, status) {
  if (status === 'loading') {
    return 'Reading project state';
  }
  return briefing?.action_posture?.label || statusCopy(status, briefing).certainty;
}

function actionPostureDetail(briefing, stateCopy) {
  return briefing?.action_posture?.detail || stateCopy.summary;
}

function statusCopy(status, briefing) {
  const projectName = briefing?.fields?.project_name || 'Aura Lab';
  const copy = {
    loading: {
      label: 'Loading',
      title: 'Reading project state',
      summary: 'Reading project state through the local service bridge.',
      certainty: 'Reported by bridge'
    },
    empty: {
      label: 'Empty',
      title: 'No current project packet found',
      summary: 'The bridge responded, but no presentation data is available yet.',
      certainty: 'No presentation data available.'
    },
    populated: {
      label: 'Populated',
      title: projectName,
      summary: briefing?.fields?.current_focus || briefing?.fields?.project_description || 'Project briefing is available from local workspace sources.',
      certainty: 'Verified from source'
    },
    stale: {
      label: 'Stale',
      title: projectName,
      summary: 'Showing last successful read. The current packet may have changed.',
      certainty: 'Showing last successful read'
    },
    failed: {
      label: 'Failed',
      title: 'Project briefing unavailable',
      summary: briefing?.error?.message || 'The bridge could not read the required project packet.',
      certainty: 'Unavailable'
    },
    partial: {
      label: 'Partial',
      title: projectName,
      summary: missingCopy(briefing),
      certainty: 'Partial view'
    }
  };
  return copy[status] || copy.failed;
}

function freshnessCopy(briefing) {
  if (!briefing?.last_read_at) {
    return 'Last read pending';
  }
  const readAt = new Date(briefing.last_read_at);
  if (Number.isNaN(readAt.getTime())) {
    return 'Last read unavailable';
  }
  return `Last read ${readAt.toLocaleString()}`;
}

function sourceCopy(briefing) {
  const labels = briefing?.source_labels || [];
  return labels.length > 0 ? labels.join(', ') : 'Not provided';
}

function missingCopy(briefing) {
  const missing = briefing?.missing_fields || [];
  if (missing.length === 0) {
    return 'Partial view; one or more optional sources were unavailable.';
  }
  return `Partial view; missing ${missing.join(', ')}.`;
}

function valueCopy(value, status) {
  if (value) {
    return value;
  }
  if (status === 'failed') {
    return 'Unavailable';
  }
  if (status === 'loading') {
    return 'Reading';
  }
  return 'Not provided';
}

async function bootFrame() {
  if (!window.auraWindow) {
    return;
  }
  state.frame = await window.auraWindow.getState();
  renderFrameState();
  document.querySelector('#pin-window').addEventListener('click', toggleAlwaysOnTop);
  document.querySelector('#minimize-window').addEventListener('click', () => window.auraWindow.minimize());
  document.querySelector('#close-window').addEventListener('click', () => window.auraWindow.close());
}

async function toggleAlwaysOnTop() {
  const pin = document.querySelector('#pin-window');
  pin.disabled = true;
  try {
    state.frame = await window.auraWindow.setAlwaysOnTop(!state.frame.alwaysOnTop);
    renderFrameState();
  } finally {
    pin.disabled = false;
  }
}

function renderFrameState() {
  const pin = document.querySelector('#pin-window');
  pin.classList.toggle('active', state.frame.alwaysOnTop === true);
  pin.textContent = state.frame.alwaysOnTop ? 'Pinned' : 'Pin';
}

boot().catch((error) => {
  renderBriefing({
    view_status: 'failed',
    certainty: 'Unavailable',
    fields: {},
    source_labels: ['service bridge'],
    error: {
      message: error.message
    },
    last_read_at: new Date().toISOString()
  });
  document.querySelector('#health').textContent = error.message;
});
