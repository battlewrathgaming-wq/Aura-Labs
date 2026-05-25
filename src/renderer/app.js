const state = {
  frame: {
    alwaysOnTop: false
  },
  workshopMode: false,
  materialHarness: null,
  presentationFamily: 'briefing',
  presentationFamilies: [],
  briefingMode: 'normal',
  briefingModes: [],
  viewIntent: 'summary-first'
};

const presentationSlotRegistry = {
  briefingReadoutDetail: {
    owner: 'lab-presentation',
    surface: 'briefing',
    region: 'readout-detail',
    slots: [
      {
        id: 'readout-age',
        label: 'Readout age',
        lane: 'freshness',
        viewIntent: slotViewIntentPolicy({ details: { emphasis: 'primary' } }),
        value: ({ readoutState }) => readoutState.ageLabel
      },
      {
        id: 'state-summary',
        label: 'State summary',
        lane: 'state',
        viewIntent: slotViewIntentPolicy(),
        value: ({ readoutState }) => readoutState.summary
      },
      {
        id: 'readout-basis',
        label: 'Readout basis',
        lane: 'basis',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'primary' },
          details: { emphasis: 'primary' }
        }),
        value: ({ readoutState }) => readoutState.basis
      },
      {
        id: 'known-fields',
        label: 'Known fields',
        lane: 'coverage',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'support' },
          details: { emphasis: 'support' }
        }),
        value: ({ briefing, status }) => knownFieldCopy(briefing, status)
      },
      {
        id: 'band-marker',
        label: 'Band marker',
        lane: 'warnings',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'support' },
          details: { emphasis: 'primary' }
        }),
        value: ({ readoutState }) => readoutState.marker
      },
      {
        id: 'source-paths',
        label: 'Source paths',
        lane: 'coverage',
        viewIntent: slotViewIntentPolicy({
          summary: { emphasis: 'quiet' },
          basis: { emphasis: 'support' },
          details: { emphasis: 'support' }
        }),
        value: ({ briefing }) => sourceCopy(briefing)
      }
    ]
  }
};

function slotViewIntentPolicy(overrides = {}) {
  return {
    'summary-first': { available: true, order: 10, emphasis: overrides.summary?.emphasis || 'quiet' },
    basis: { available: true, order: 10, emphasis: overrides.basis?.emphasis || 'quiet' },
    details: { available: true, order: 10, emphasis: overrides.details?.emphasis || 'inspect' }
  };
}

async function boot() {
  await bootFrame();
  setupWorkshopMode();
  setupViewIntentControl();
  renderBriefing({
    view_status: 'loading',
    certainty: 'Bridge read pending',
    fields: {},
    source_labels: [],
    last_read_at: null
  });
  const services = await window.aura.listServices();
  const readinessPromise = window.aura.invokeService('seed.readiness');
  const briefingPromise = loadBriefing('briefing', 'normal');
  const readiness = await readinessPromise;
  const briefing = await briefingPromise;

  renderBriefing(briefing);
  setupFixtureControls(briefing);
  setupMaterialHarness();

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

function setupViewIntentControl() {
  for (const button of document.querySelectorAll('[data-view-intent-option]')) {
    button.addEventListener('click', () => setViewIntent(button.dataset.viewIntentOption));
  }
  setViewIntent(state.viewIntent);
}

function setViewIntent(intent) {
  const nextIntent = ['summary-first', 'basis', 'details'].includes(intent) ? intent : 'summary-first';
  state.viewIntent = nextIntent;
  document.body.dataset.viewIntent = nextIntent;
  const readout = document.querySelector('#state-readout');
  if (readout) {
    readout.dataset.viewIntent = nextIntent;
  }
  const sourceDrawer = document.querySelector('#source-detail-drawer');
  if (sourceDrawer && nextIntent === 'details') {
    sourceDrawer.open = true;
  }
  for (const button of document.querySelectorAll('[data-view-intent-option]')) {
    button.setAttribute('aria-pressed', button.dataset.viewIntentOption === nextIntent ? 'true' : 'false');
  }
}

function setupWorkshopMode() {
  const params = new URLSearchParams(window.location.search);
  state.workshopMode = params.get('workshop') === '1';
  state.materialHarness = params.get('material');
  document.body.dataset.workshop = state.workshopMode ? 'true' : 'false';
}

async function loadBriefing(family, mode) {
  state.presentationFamily = family || state.presentationFamily || 'briefing';
  state.briefingMode = mode || 'normal';
  return window.aura.invokeService('aura.presentationFixture', {
    family: state.presentationFamily,
    state: state.briefingMode
  });
}

function setupFixtureControls(briefing) {
  const familySelect = document.querySelector('#presentation-family');
  const stateSelect = document.querySelector('#briefing-mode');
  state.presentationFamilies = briefing?.available_families || [];
  state.briefingModes = briefing?.available_states || briefing?.available_modes || [];
  if (state.presentationFamilies.length > 0) {
    familySelect.textContent = '';
    for (const family of state.presentationFamilies) {
      const option = document.createElement('option');
      option.value = family.id;
      option.textContent = family.label;
      familySelect.appendChild(option);
    }
  }
  if (state.briefingModes.length > 0) {
    stateSelect.textContent = '';
    for (const mode of state.briefingModes) {
      const option = document.createElement('option');
      option.value = mode.id;
      option.textContent = mode.label;
      stateSelect.appendChild(option);
    }
  }
  familySelect.value = briefing?.family || state.presentationFamily;
  stateSelect.value = briefing?.state || briefing?.mode || state.briefingMode;

  familySelect.addEventListener('change', () => loadSelectedFixture());
  stateSelect.addEventListener('change', () => loadSelectedFixture());
}

function setupMaterialHarness() {
  const harness = document.querySelector('#material-harness');
  if (!state.workshopMode || state.materialHarness !== 'mat-authority-window-ttl-strip') {
    harness.hidden = true;
    return;
  }
  harness.hidden = false;
  const stateSelect = document.querySelector('#material-state');
  stateSelect.textContent = '';
  for (const materialState of authorityWindowStates()) {
    const option = document.createElement('option');
    option.value = materialState.id;
    option.textContent = materialState.label;
    stateSelect.appendChild(option);
  }
  stateSelect.addEventListener('change', () => renderAuthorityWindowMaterial(stateSelect.value));
  document.querySelector('#ttl-detail-toggle').addEventListener('click', toggleMaterialDetail);
  renderAuthorityWindowMaterial('idle');
}

function authorityWindowStates() {
  return [
    {
      id: 'idle',
      label: 'Idle',
      tone: 'quiet',
      marker: 'ID',
      chip: 'No active window',
      reason: 'Ready when an authority interval is supplied.',
      detail: [
        ['Authority note', 'No active interval is open.'],
        ['Availability', 'Idle.'],
        ['Manual path', 'Available only if the source project supplies one.']
      ]
    },
    {
      id: 'active-window',
      label: 'Active window',
      tone: 'open',
      marker: 'ON',
      chip: 'TTL 00:03',
      reason: 'Bounded interval is open.',
      detail: [
        ['Authority note', 'Short active interval.'],
        ['Warning', 'Do not imply background behavior.'],
        ['Next', 'Capture or timeout.']
      ]
    },
    {
      id: 'captured',
      label: 'Captured',
      tone: 'settled',
      marker: 'OK',
      chip: 'Handoff shown',
      reason: 'Display-only handoff marker is present.',
      detail: [
        ['Effect note', 'Captured marker is display-only.'],
        ['Readout age', 'Just read.'],
        ['Detail path', 'Source project owns action meaning.']
      ]
    },
    {
      id: 'timeout',
      label: 'Timeout',
      tone: 'closed',
      marker: 'TO',
      chip: 'Window closed',
      reason: 'Interval ended without capture.',
      detail: [
        ['Reason', 'TTL elapsed.'],
        ['Availability', 'No active interval.'],
        ['Manual path', 'Remains available if provided.']
      ]
    },
    {
      id: 'cooldown',
      label: 'Cooldown',
      tone: 'waiting',
      marker: 'CD',
      chip: 'Next in 00:05',
      reason: 'Waiting for next eligible interval.',
      detail: [
        ['Cooldown note', 'Next eligible moment is staged.'],
        ['Availability', 'Waiting.'],
        ['Warning', 'Timer is display material only.']
      ]
    },
    {
      id: 'blocked',
      label: 'Blocked',
      tone: 'blocked',
      marker: 'BL',
      chip: 'Authority blocked',
      reason: 'Required authority path is unavailable.',
      detail: [
        ['Blocked basis', 'Required authority unavailable.'],
        ['Gaps', 'No active interval.'],
        ['Manual path', 'Check source-owned path.']
      ]
    },
    {
      id: 'manual-path',
      label: 'Manual path',
      tone: 'manual',
      marker: 'MP',
      chip: 'Use manual route',
      reason: 'Shortcut unavailable; manual path remains visible.',
      detail: [
        ['Availability note', 'Shortcut unavailable.'],
        ['Manual path', 'Source-owned manual route.'],
        ['Warning', 'No automatic capture implied.']
      ]
    }
  ];
}

function renderAuthorityWindowMaterial(stateId) {
  const materialState = authorityWindowStates().find((entry) => entry.id === stateId) || authorityWindowStates()[0];
  const strip = document.querySelector('#authority-window-ttl-strip');
  strip.dataset.state = materialState.id;
  strip.dataset.tone = materialState.tone;
  document.querySelector('#ttl-light').textContent = materialState.marker;
  document.querySelector('#ttl-state').textContent = materialState.label;
  document.querySelector('#ttl-chip').textContent = materialState.chip;
  document.querySelector('#ttl-reason').textContent = materialState.reason;
  const detail = document.querySelector('#ttl-detail');
  detail.textContent = '';
  for (const [labelText, valueText] of materialState.detail) {
    const row = document.createElement('div');
    const label = document.createElement('span');
    const value = document.createElement('strong');
    label.textContent = labelText;
    value.textContent = valueText;
    row.append(label, value);
    detail.appendChild(row);
  }
  const button = document.querySelector('#ttl-detail-toggle');
  const hasDetail = materialState.detail.length > 0;
  button.hidden = !hasDetail;
  if (!hasDetail) {
    detail.hidden = true;
    button.setAttribute('aria-expanded', 'false');
  }
}

function toggleMaterialDetail() {
  const detail = document.querySelector('#ttl-detail');
  const button = document.querySelector('#ttl-detail-toggle');
  detail.hidden = !detail.hidden;
  button.setAttribute('aria-expanded', detail.hidden ? 'false' : 'true');
}

async function loadSelectedFixture() {
  const familySelect = document.querySelector('#presentation-family');
  const stateSelect = document.querySelector('#briefing-mode');
  familySelect.disabled = true;
  stateSelect.disabled = true;
  renderBriefing({
    view_status: 'loading',
    certainty: 'Bridge read pending',
    fields: {},
    source_labels: [],
    last_read_at: null,
    family: familySelect.value,
    family_label: selectedOptionText(familySelect),
    state: stateSelect.value,
    mode: stateSelect.value,
    available_families: state.presentationFamilies,
    available_states: state.briefingModes,
    available_modes: state.briefingModes
  });
  try {
    renderBriefing(await loadBriefing(familySelect.value, stateSelect.value));
  } finally {
    familySelect.disabled = false;
    stateSelect.disabled = false;
  }
}

function selectedOptionText(select) {
  return select.options[select.selectedIndex]?.textContent || '';
}

function renderBriefing(briefing) {
  const status = briefing?.view_status || 'failed';
  const fields = briefing?.fields || {};
  const stateCopy = statusCopy(status, briefing);
  state.presentationFamily = briefing?.family || state.presentationFamily || 'briefing';
  state.briefingMode = briefing?.state || briefing?.mode || state.briefingMode || 'normal';
  document.body.dataset.family = state.presentationFamily;
  document.querySelector('#family-label').textContent = briefing?.family_label || 'Briefing';
  document.querySelector('#briefing-title').textContent = stateCopy.title;
  document.querySelector('#briefing-summary').textContent = stateCopy.summary;
  document.querySelector('#view-status').textContent = stateCopy.label;
  document.querySelector('#freshness').textContent = freshnessCopy(briefing);
  document.querySelector('.bridge-state').dataset.status = status;
  document.querySelector('#action-posture-label').textContent = actionPostureLabel(briefing, status);
  document.querySelector('#action-posture-detail').textContent = actionPostureDetail(briefing, stateCopy);
  const readout = bridgeStateReadout(briefing, status, stateCopy);
  renderBridgeStateReadout(readout);
  renderBasisFocus(readout);
  renderSourceDrawer(briefing, readout, status);
  document.querySelector('#certainty').textContent = readout.basis;
  document.querySelector('#sources').textContent = readout.sourceDisplay;
  document.querySelector('#briefing-mode-note').textContent = modeNoteCopy(briefing);
  syncControlValue('#presentation-family', state.presentationFamily);
  syncControlValue('#briefing-mode', state.briefingMode);
  renderFieldLabels(briefing);
  renderAttention(briefing, status);

  for (const item of document.querySelectorAll('[data-field]')) {
    const key = item.dataset.field;
    item.textContent = valueCopy(fields[key], status);
    item.classList.toggle('muted-value', !fields[key]);
  }
}

function renderBasisFocus(readoutState) {
  document.querySelector('#basis-focus-basis').textContent = readoutState.basis;
  document.querySelector('#basis-focus-freshness').textContent = readoutState.ageLabel;
  document.querySelector('#basis-focus-coverage').textContent = readoutState.sourceDisplay;
  document.querySelector('#basis-focus-marker').textContent = readoutState.marker;
}

function renderBridgeStateReadout(readoutState) {
  const readout = document.querySelector('#state-readout');
  readout.dataset.tone = readoutState.tone;
  readout.dataset.marker = readoutState.markerTone;
  document.querySelector('#state-label').textContent = readoutState.label;
  document.querySelector('#state-primary-value').textContent = readoutState.primaryValue;
  document.querySelector('#state-summary').textContent = readoutState.summary;
  document.querySelector('#state-age').textContent = readoutState.ageLabel;
  document.querySelector('#state-source-count').textContent = readoutState.sourceDisplay;
  document.querySelector('#state-basis').textContent = readoutState.basis;
  document.querySelector('#state-marker').textContent = readoutState.marker;

  const pipList = document.querySelector('#state-pips');
  pipList.textContent = '';
  for (let index = 0; index < readoutState.totalSources; index += 1) {
    const pip = document.createElement('span');
    pip.className = 'state-pip';
    pip.dataset.active = index < readoutState.availableSources ? 'true' : 'false';
    pipList.appendChild(pip);
  }
}

function renderSourceDrawer(briefing, readoutState, status) {
  document.querySelector('#source-detail-state').textContent = readoutState.label;

  const list = document.querySelector('#source-detail-list');
  list.textContent = '';
  for (const slot of presentationSlots('briefingReadoutDetail', state.viewIntent)) {
    appendSourceDetail(list, slot.label, slot.value({ briefing, readoutState, status }), slot);
  }

  const gaps = document.querySelector('#source-gap-list');
  gaps.textContent = '';
  const lines = detailLines(briefing, readoutState, status);
  for (const line of lines) {
    const item = document.createElement('p');
    item.textContent = line;
    gaps.appendChild(item);
  }
}

function presentationSlots(registryId, viewIntent = state.viewIntent) {
  return (presentationSlotRegistry[registryId]?.slots || [])
    .map((slot) => ({
      ...slot,
      activePolicy: slot.viewIntent?.[viewIntent] || slot.viewIntent?.['summary-first'] || { available: true, order: 10, emphasis: 'quiet' }
    }))
    .filter((slot) => slot.activePolicy.available !== false)
    .sort((left, right) => left.activePolicy.order - right.activePolicy.order);
}

function appendSourceDetail(list, labelText, valueText, slot = {}) {
  const item = document.createElement('div');
  if (slot.id) {
    item.dataset.presentationSlot = slot.id;
  }
  if (slot.lane) {
    item.dataset.presentationLane = slot.lane;
  }
  if (slot.activePolicy?.emphasis) {
    item.dataset.presentationEmphasis = slot.activePolicy.emphasis;
  }
  const label = document.createElement('span');
  const value = document.createElement('strong');
  label.textContent = labelText;
  value.textContent = valueText || 'Not provided';
  item.append(label, value);
  list.appendChild(item);
}

function bridgeStateReadout(briefing, status, stateCopy) {
  const labels = briefing?.source_labels || [];
  const sources = briefing?.sources || [];
  const totalSources = Math.max(labels.length, sources.length, 1);
  const availableSources = status === 'loading' || status === 'empty'
    ? 0
    : sources.length > 0
      ? sources.filter((source) => source?.available !== false).length
      : labels.length;
  const sourceDisplay = `${Math.min(availableSources, totalSources)}/${totalSources} sources`;
  const ageLabel = readoutAgeCopy(briefing, status);
  const gaps = briefing?.missing_fields || [];
  const warnings = briefing?.warnings || [];
  const hasFallback = Boolean(briefing?.fallback_note);
  const toneByStatus = {
    loading: 'updating',
    populated: 'current',
    stale: 'aged',
    partial: 'partial',
    failed: hasFallback ? 'fallback' : 'unavailable',
    empty: 'no-data'
  };
  const tone = toneByStatus[status] || 'unavailable';
  const copy = {
    current: {
      label: 'CURRENT',
      summary: 'Current bridge read is ready for display.',
      basis: 'Current local sources available.'
    },
    updating: {
      label: 'UPDATING',
      summary: 'Updating from the local bridge.',
      basis: 'Awaiting first bridge response.'
    },
    aged: {
      label: 'AGED',
      summary: 'Showing the last successful bridge read.',
      basis: 'Last successful local source read.'
    },
    partial: {
      label: 'PARTIAL',
      summary: gaps.length > 0 ? `Readout returned with ${gaps.length} gap${gaps.length === 1 ? '' : 's'}.` : 'Readout returned with limited detail.',
      basis: 'Available fields are still displayed.'
    },
    unavailable: {
      label: 'UNAVAILABLE',
      summary: 'Current bridge read is unavailable.',
      basis: 'Bridge read unavailable.'
    },
    fallback: {
      label: 'FALLBACK',
      summary: briefing?.fallback_note || 'Using fallback display posture.',
      basis: 'Fallback presentation path.'
    },
    'no-data': {
      label: 'NO DATA',
      summary: 'Bridge responded with no presentable data.',
      basis: 'No presentation payload available.'
    }
  };
  return {
    ...copy[tone],
    tone,
    primaryValue: primaryValueCopy(briefing, status, stateCopy, copy[tone]),
    ageLabel,
    sourceDisplay,
    marker: bandMarkerCopy({ tone, gaps, warnings, briefing, status }),
    markerTone: bandMarkerTone({ tone, gaps, warnings, briefing, status }),
    totalSources,
    availableSources: Math.min(availableSources, totalSources),
    stateSummary: stateCopy.summary
  };
}

function primaryValueCopy(briefing, status, stateCopy, readoutCopy) {
  if (status === 'loading') {
    return 'Reading local bridge';
  }
  return briefing?.primary_value || stateCopy.title || readoutCopy.label;
}

function bandMarkerCopy({ tone, gaps, warnings, briefing, status }) {
  if (status === 'empty') {
    return warnings.length > 0
      ? `${warnings.length} warning${warnings.length === 1 ? '' : 's'}`
      : 'No data';
  }
  const parts = [];
  if (gaps.length > 0) {
    parts.push(`${gaps.length} gap${gaps.length === 1 ? '' : 's'}`);
  }
  if (warnings.length > 0) {
    parts.push(`${warnings.length} warning${warnings.length === 1 ? '' : 's'}`);
  }
  if (parts.length > 0) {
    return parts.join(' / ');
  }
  if (tone === 'fallback') {
    return 'Fallback basis active';
  }
  if (status === 'failed' || briefing?.error?.message) {
    return 'Unavailable';
  }
  if (status === 'loading') {
    return 'Updating';
  }
  return 'No gaps or warnings';
}

function bandMarkerTone({ tone, gaps, warnings, briefing, status }) {
  if (status === 'loading' || tone === 'updating') {
    return 'pending';
  }
  if (tone === 'fallback') {
    return 'fallback';
  }
  if (status === 'failed' || briefing?.error?.message) {
    return 'unavailable';
  }
  if (gaps.length > 0 || warnings.length > 0 || tone === 'aged' || tone === 'partial') {
    return 'attention';
  }
  return 'clear';
}

function readoutAgeCopy(briefing, status) {
  if (status === 'loading') {
    return 'Updating now';
  }
  if (status === 'empty') {
    return 'No data returned';
  }
  if (!briefing?.last_read_at) {
    return 'Last read unknown';
  }
  const readAt = new Date(briefing.last_read_at);
  if (Number.isNaN(readAt.getTime())) {
    return 'Last read unavailable';
  }
  const ageMs = Date.now() - readAt.getTime();
  const minutes = Math.max(0, Math.round(ageMs / 60000));
  if (status === 'stale') {
    return `Last successful read ${minutes} min ago`;
  }
  if (status === 'failed') {
    return minutes <= 0 ? 'Last attempt now' : `Last attempt ${minutes} min ago`;
  }
  return minutes <= 0 ? 'Last read now' : `Last read ${minutes} min ago`;
}

function knownFieldCopy(briefing, status) {
  if (status === 'loading') {
    return 'Acquiring fields';
  }
  const count = Object.values(briefing?.fields || {}).filter(Boolean).length;
  return count > 0 ? `${count} fields` : 'No fields';
}

function detailLines(briefing, readoutState, status) {
  const lines = [];
  const missing = briefing?.missing_fields || [];
  const warnings = briefing?.warnings || [];
  if (missing.length > 0) {
    lines.push(`Gaps: ${missing.join(', ')}`);
  }
  if (warnings.length > 0) {
    lines.push(`Warnings: ${warnings.map((warning) => warning.message || warning.code || 'Warning').join('; ')}`);
  }
  if (briefing?.error?.message) {
    lines.push(`Failure note: ${briefing.error.message}`);
  }
  if (readoutState.tone === 'fallback') {
    lines.push(`Fallback note: ${readoutState.summary}`);
  }
  if (status === 'empty') {
    lines.push('No data: no presentable fields were returned.');
  }
  if (status === 'loading') {
    lines.push('Updating: waiting for the first local response.');
  }
  if (lines.length === 0) {
    lines.push('No gaps or warnings shown.');
  }
  return lines;
}

function syncControlValue(selector, value) {
  const select = document.querySelector(selector);
  if (select && value && Array.from(select.options).some((option) => option.value === value)) {
    select.value = value;
  }
}

function renderFieldLabels(briefing) {
  const labels = briefing?.field_labels || {};
  for (const item of document.querySelectorAll('[data-field]')) {
    const key = item.dataset.field;
    const label = item.parentElement?.querySelector('dt');
    if (label && labels[key]) {
      label.textContent = labels[key];
    }
  }
}

function renderAttention(briefing, status) {
  const list = document.querySelector('#attention-list');
  const count = document.querySelector('#attention-count');
  document.querySelector('#attention-title').textContent = briefing?.attention_title || 'Needs Attention';
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
    count.textContent = 'None shown';
    appendAttentionLine(list, briefing?.attention_empty_copy || 'No attention items shown.', 'muted-value');
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
  const modes = briefing?.available_states || briefing?.available_modes || state.briefingModes || [];
  const mode = modes.find((entry) => entry.id === (briefing?.state || briefing?.mode));
  const family = briefing?.available_families?.find((entry) => entry.id === briefing?.family);
  if (family && mode) {
    return `${family.label}; ${mode.description}`;
  }
  return mode?.description || 'Development-only UI state preview';
}

function actionPostureLabel(briefing, status) {
  if (status === 'loading') {
    return briefing?.action_posture?.label || 'Reading presentation state';
  }
  return briefing?.action_posture?.label || statusCopy(status, briefing).certainty;
}

function actionPostureDetail(briefing, stateCopy) {
  return briefing?.action_posture?.detail || stateCopy.summary;
}

function statusCopy(status, briefing) {
  const projectName = briefing?.fields?.project_name || 'Aura Lab';
  if (briefing?.title || briefing?.summary) {
    const fallback = statusCopyByStatus(status, projectName, briefing);
    return {
      ...fallback,
      title: briefing.title || fallback.title,
      summary: briefing.summary || fallback.summary
    };
  }
  return statusCopyByStatus(status, projectName, briefing);
}

function statusCopyByStatus(status, projectName, briefing) {
  const copy = {
    loading: {
      label: 'Loading',
      title: 'Reading project state',
      summary: 'Reading project state through the local service bridge.',
      certainty: 'Bridge read pending'
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
      certainty: 'Read from source'
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
