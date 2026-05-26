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
  viewIntent: 'summary-first',
  reducedMotion: 'no-preference'
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
        rowFacets: slotRowFacets({
          render: ({ readoutState }) => [
            { type: 'freshness', tone: readoutState.tone, label: 'Freshness facet' }
          ]
        }),
        value: ({ readoutState }) => readoutState.ageLabel,
        hydration: slotHydration({
          detail: ({ readoutState }) => [
            ['Freshness', readoutState.ageLabel],
            ['Inspection use', 'Shows when this readout basis was last updated.']
          ]
        })
      },
      {
        id: 'state-summary',
        label: 'State summary',
        lane: 'state',
        viewIntent: slotViewIntentPolicy(),
        rowFacets: slotRowFacets({
          render: ({ readoutState }) => [
            { type: 'state', tone: readoutState.tone, label: 'State facet' }
          ]
        }),
        value: ({ readoutState }) => readoutState.summary,
        hydration: slotHydration({
          detail: ({ readoutState }) => [
            ['Readout state', readoutState.label],
            ['Summary', readoutState.summary]
          ]
        })
      },
      {
        id: 'readout-basis',
        label: 'Readout basis',
        lane: 'basis',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'primary' },
          details: { emphasis: 'primary' }
        }),
        rowFacets: slotRowFacets({
          render: ({ readoutState }) => [
            { type: 'basis', tone: readoutState.tone, label: 'Basis facet' }
          ]
        }),
        value: ({ readoutState }) => readoutState.basis,
        hydration: slotHydration({
          detail: ({ readoutState }) => [
            ['Basis', readoutState.basis],
            ['Use', 'Explains what the visible readout is based on.']
          ]
        })
      },
      {
        id: 'known-fields',
        label: 'Known fields',
        lane: 'coverage',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'support' },
          details: { emphasis: 'support' }
        }),
        rowFacets: slotRowFacets({
          render: ({ briefing, status }) => [
            {
              type: 'coverage',
              tone: status === 'loading' ? 'pending' : Object.values(briefing?.fields || {}).some(Boolean) ? 'clear' : 'attention',
              label: 'Coverage facet'
            }
          ]
        }),
        value: ({ briefing, status }) => knownFieldCopy(briefing, status),
        hydration: slotHydration({
          detail: ({ briefing, status }) => [
            ['Known fields', knownFieldCopy(briefing, status)],
            ['Coverage note', sourceCopy(briefing)]
          ]
        })
      },
      {
        id: 'band-marker',
        label: 'Band marker',
        lane: 'warnings',
        viewIntent: slotViewIntentPolicy({
          basis: { emphasis: 'support' },
          details: { emphasis: 'primary' }
        }),
        rowFacets: slotRowFacets({
          render: ({ readoutState }) => [
            { type: 'marker', tone: readoutState.markerTone, label: 'Marker facet' }
          ]
        }),
        value: ({ readoutState }) => readoutState.marker,
        hydration: slotHydration({
          detail: ({ readoutState }) => [
            ['Marker', readoutState.marker],
            ['Marker tone', readoutState.markerTone]
          ]
        }),
        lazyVisual: slotLazyVisual({
          treatment: 'marker-signal',
          render: ({ readoutState }) => ({
            label: 'Marker signal',
            tone: readoutState.markerTone,
            values: [
              readoutState.markerTone,
              readoutState.tone,
              readoutState.availableSources === readoutState.totalSources ? 'covered' : 'gapped'
            ]
          })
        })
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
        rowFacets: slotRowFacets({
          render: ({ readoutState }) => [
            { type: 'source-path', tone: readoutState.availableSources > 0 ? 'clear' : 'pending', label: 'Source path facet' }
          ]
        }),
        overflowSentinel: slotOverflowSentinel({
          evaluate: ({ briefing }) => {
            const sourceLabels = briefing?.source_labels || [];
            const copy = sourceCopy(briefing);
            if (sourceLabels.length > 1 || copy.length > 56) {
              return {
                kind: 'constrained',
                tone: sourceLabels.length > 0 ? 'clear' : 'pending',
                label: 'Constrained row content',
                basis: 'source-paths'
              };
            }
            return null;
          }
        }),
        value: ({ briefing }) => sourceCopy(briefing),
        hydration: slotHydration({
          detail: ({ briefing }) => [
            ['Source paths', sourceCopy(briefing)],
            ['Display scope', 'Source labels are shown only as readout context.']
          ]
        })
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

function slotHydration({ detail = () => [] } = {}) {
  return {
    compact: true,
    detail
  };
}

function slotRowFacets({ render = () => [] } = {}) {
  return {
    localOnly: true,
    render
  };
}

function slotOverflowSentinel({ evaluate = () => null } = {}) {
  return {
    localOnly: true,
    evaluate
  };
}

function slotLazyVisual({ treatment, render } = {}) {
  return {
    localOnly: true,
    treatment,
    load: (context) => Promise.resolve().then(() => render(context))
  };
}

async function boot() {
  await bootFrame();
  setupWorkshopMode();
  setupReducedMotionGate();
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
  const material = materialHarnessDefinition(state.materialHarness);
  const stateSelect = document.querySelector('#material-state');
  if (state.workshopMode && material && stateSelect?.value) {
    material.render(stateSelect.value);
  }
}

function setupReducedMotionGate() {
  const motionQuery = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const setMotionPreference = (matches) => {
    state.reducedMotion = matches ? 'reduce' : 'no-preference';
    document.body.dataset.reducedMotion = state.reducedMotion;
  };
  setMotionPreference(Boolean(motionQuery?.matches));
  motionQuery?.addEventListener?.('change', (event) => setMotionPreference(event.matches));
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
  const material = materialHarnessDefinition(state.materialHarness);
  if (!state.workshopMode || !material) {
    harness.hidden = true;
    return;
  }
  harness.hidden = false;
  harness.dataset.material = material.id;
  document.querySelector('#material-harness-title').textContent = material.title;
  for (const prototype of document.querySelectorAll('.material-prototype')) {
    prototype.hidden = prototype.id !== material.elementId;
  }
  const stateSelect = document.querySelector('#material-state');
  stateSelect.textContent = '';
  for (const materialState of material.states()) {
    const option = document.createElement('option');
    option.value = materialState.id;
    option.textContent = materialState.label;
    stateSelect.appendChild(option);
  }
  stateSelect.addEventListener('change', () => material.render(stateSelect.value));
  document.querySelector('#ttl-detail-toggle').addEventListener('click', toggleMaterialDetail);
  document.querySelector('#long-text-detail-toggle').addEventListener('click', toggleLongTextDetail);
  document.querySelector('#availability-detail-toggle').addEventListener('click', toggleAvailabilityDetail);
  document.querySelector('#instrument-readout-detail-toggle').addEventListener('click', toggleInstrumentReadoutDetail);
  material.render(material.states()[0].id);
}

function materialHarnessDefinition(materialId) {
  const definitions = {
    'mat-authority-window-ttl-strip': {
      id: 'mat-authority-window-ttl-strip',
      title: 'Authority Window TTL Strip',
      elementId: 'authority-window-ttl-strip',
      states: authorityWindowStates,
      render: renderAuthorityWindowMaterial
    },
    'mat-long-text-detail-block': {
      id: 'mat-long-text-detail-block',
      title: 'Long Text Detail Block',
      elementId: 'long-text-detail-block',
      states: longTextDetailBlockStates,
      render: renderLongTextDetailBlock
    },
    'mat-availability-reason-treatment': {
      id: 'mat-availability-reason-treatment',
      title: 'Availability Reason Treatment',
      elementId: 'availability-reason-treatment',
      states: availabilityReasonTreatmentStates,
      render: renderAvailabilityReasonTreatment
    },
    'output-instrument-readout-panel': {
      id: 'output-instrument-readout-panel',
      title: 'Instrument Readout Panel',
      elementId: 'instrument-readout-panel-output',
      states: instrumentReadoutPanelStates,
      render: renderInstrumentReadoutPanel
    }
  };
  return definitions[materialId] || null;
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

function longTextDetailBlockStates() {
  return [
    {
      id: 'long-paragraph',
      label: 'Long paragraph',
      tone: 'current',
      marker: 'LP',
      cue: 'Extended paragraph is held in detail.',
      detail: [
        {
          label: 'Long paragraph',
          type: 'paragraph',
          value: 'This Lab-local material keeps a compact parent cue while a fuller readout basis can continue for several clauses, naming freshness, coverage, warnings, and display limits without forcing the first-read surface to become a wall of text.'
        },
        {
          label: 'Warning explanation',
          type: 'paragraph',
          value: 'Warning copy remains explanatory rather than alarm-heavy; it describes why the display needs attention without claiming source authority or creating product doctrine.'
        }
      ]
    },
    {
      id: 'long-token',
      label: 'Long token',
      tone: 'partial',
      marker: 'TK',
      cue: 'Unbroken sample token wraps inside detail.',
      detail: [
        {
          label: 'Long unbroken token',
          type: 'code',
          value: 'SAMPLE_DISPLAY_TOKEN_7F3A2C9D0B4E6A8C1F5D2B9E0A4C7F1D_SOURCE_LAYER_PLACEHOLDER_ONLY_FOR_CONTAINMENT_REVIEW'
        },
        {
          label: 'Containment note',
          type: 'paragraph',
          value: 'The token is staged display material for wrap pressure only.'
        }
      ]
    },
    {
      id: 'path-like-value',
      label: 'Path-like value',
      tone: 'aged',
      marker: 'PV',
      cue: 'Display sample path is qualified in detail.',
      detail: [
        {
          label: 'Path-like value',
          type: 'code',
          value: 'display-sample://source-project-owned/layer/readout-basis/long-text-detail-block/example-path-with-many-segments'
        },
        {
          label: 'Owner / layer note',
          type: 'paragraph',
          value: 'This is display sample material. A real path-like value would be owned by the source project and shown here only as Bridge -> Interface presentation.'
        }
      ]
    },
    {
      id: 'warning-explanation',
      label: 'Warning explanation',
      tone: 'fallback',
      marker: 'WX',
      cue: 'Long warning explanation stays behind detail.',
      detail: [
        {
          label: 'Warning explanation',
          type: 'paragraph',
          value: 'The readout can explain a warning in complete language while the parent row stays compact; this avoids turning a small warning cue into a dominant product surface.'
        },
        {
          label: 'Availability note',
          type: 'paragraph',
          value: 'The display can show fallback or limited availability without implying the source has no data unless the source project says so.'
        }
      ]
    },
    {
      id: 'grouped-gaps',
      label: 'Grouped gaps',
      tone: 'partial',
      marker: 'GG',
      cue: 'Gap groups live in detail rows.',
      detail: [
        {
          label: 'Missing display fields',
          type: 'list',
          values: ['freshness detail omitted in sample', 'coverage count omitted in sample', 'secondary basis omitted in sample']
        },
        {
          label: 'Deferred detail',
          type: 'list',
          values: ['warning text can be expanded', 'source path can be qualified', 'long token can wrap safely']
        }
      ]
    },
    {
      id: 'source-placeholder',
      label: 'Source-owned placeholder',
      tone: 'blocked',
      marker: 'SP',
      cue: 'Owner and layer qualification stay visible.',
      detail: [
        {
          label: 'Source-owned placeholder',
          type: 'paragraph',
          value: 'Placeholder owner: source project. Layer shown here: Lab display sample. The placeholder demonstrates containment only and does not define source-project meaning.'
        },
        {
          label: 'Readout basis note',
          type: 'paragraph',
          value: 'Lab may present the basis clearly after the bridge, but the source project owns what it emits and what the emitted value means.'
        }
      ]
    }
  ];
}

function renderLongTextDetailBlock(stateId) {
  const materialState = longTextDetailBlockStates().find((entry) => entry.id === stateId) || longTextDetailBlockStates()[0];
  const block = document.querySelector('#long-text-detail-block');
  block.dataset.state = materialState.id;
  block.dataset.tone = materialState.tone;
  document.querySelector('#long-text-marker').textContent = materialState.marker;
  document.querySelector('#long-text-state').textContent = materialState.label;
  document.querySelector('#long-text-cue').textContent = materialState.cue;
  const detail = document.querySelector('#long-text-detail');
  detail.textContent = '';
  for (const entry of materialState.detail) {
    detail.appendChild(longTextDetailRow(entry));
  }
  detail.hidden = true;
  document.querySelector('#long-text-detail-toggle').setAttribute('aria-expanded', 'false');
}

function longTextDetailRow(entry) {
  const row = document.createElement('section');
  row.className = 'long-text-detail-row';
  row.dataset.detailType = entry.type || 'paragraph';
  const label = document.createElement('span');
  label.textContent = entry.label;
  row.appendChild(label);
  if (entry.type === 'list') {
    const list = document.createElement('ul');
    for (const valueText of entry.values || []) {
      const item = document.createElement('li');
      item.textContent = valueText;
      list.appendChild(item);
    }
    row.appendChild(list);
    return row;
  }
  const value = document.createElement(entry.type === 'code' ? 'code' : 'p');
  value.textContent = entry.value || 'Not provided';
  row.appendChild(value);
  return row;
}

function toggleLongTextDetail() {
  const detail = document.querySelector('#long-text-detail');
  const button = document.querySelector('#long-text-detail-toggle');
  detail.hidden = !detail.hidden;
  button.setAttribute('aria-expanded', detail.hidden ? 'false' : 'true');
}

function availabilityReasonTreatmentStates() {
  return [
    {
      id: 'no-data',
      label: 'No data',
      tone: 'quiet',
      marker: 'ND',
      reason: 'No presentable data is available.',
      detail: [
        ['Reason', 'The display received no fields suitable for this material.'],
        ['Readout basis', 'No presentation payload available.'],
        ['Owner / layer note', 'Lab is showing display availability only; source projects own what they emit.']
      ]
    },
    {
      id: 'unavailable',
      label: 'Unavailable',
      tone: 'unavailable',
      marker: 'UN',
      reason: 'Current read is unavailable.',
      detail: [
        ['Reason', 'The current read cannot be shown.'],
        ['Readout basis', 'Unavailable current read.'],
        ['Owner / layer note', 'This is a Lab display state, not a source-project absence claim.']
      ]
    },
    {
      id: 'blocked',
      label: 'Blocked',
      tone: 'blocked',
      marker: 'BL',
      reason: 'Source-owned gate is blocked.',
      detail: [
        ['Reason', 'Required source-owned authority or access is blocked.'],
        ['Basis', 'Blocked is preserved as a source-owned placeholder when supplied.'],
        ['Owner / layer note', 'Source project owns the block reason; Lab presents it after the bridge.']
      ]
    },
    {
      id: 'failed',
      label: 'Failed',
      tone: 'failed',
      marker: 'FL',
      reason: 'Read attempt failed.',
      detail: [
        ['Reason', 'The read attempt failed before presentable content could be produced.'],
        ['Basis', 'Failure is about the current read path, not proof that source data is absent.'],
        ['Warning', 'Use restrained styling unless the source project marks the failure as urgent.']
      ]
    },
    {
      id: 'fallback',
      label: 'Fallback',
      tone: 'fallback',
      marker: 'FB',
      reason: 'Showing fallback basis.',
      detail: [
        ['Reason', 'Current read is limited; fallback basis is visible.'],
        ['Fallback note', 'Previous or alternate display basis may be shown only when clearly labeled.'],
        ['Readout basis', 'Fallback presentation path.']
      ]
    },
    {
      id: 'aged',
      label: 'Aged',
      tone: 'aged',
      marker: 'AG',
      reason: 'Showing older readout basis.',
      detail: [
        ['Reason', 'Current display is based on an older readout.'],
        ['Readout age', 'Last successful read is older than the preferred window.'],
        ['Basis', 'Aged display is still distinct from failed, blocked, or unavailable.']
      ]
    },
    {
      id: 'source-no-scan',
      label: 'Source-owned no scan',
      tone: 'source-owned',
      marker: 'NS',
      reason: 'Source-owned no-scan placeholder.',
      detail: [
        ['Reason', 'No-scan wording is source-owned when supplied by a source project.'],
        ['Owner / layer note', 'Owner: source project. Layer shown here: Lab Bridge -> Interface display.'],
        ['Fallback note', 'Do not replace source-owned no-scan meaning with generic unavailable or failed copy.']
      ]
    }
  ];
}

function renderAvailabilityReasonTreatment(stateId) {
  const materialState = availabilityReasonTreatmentStates().find((entry) => entry.id === stateId) || availabilityReasonTreatmentStates()[0];
  const block = document.querySelector('#availability-reason-treatment');
  block.dataset.state = materialState.id;
  block.dataset.tone = materialState.tone;
  document.querySelector('#availability-marker').textContent = materialState.marker;
  document.querySelector('#availability-state').textContent = materialState.label;
  document.querySelector('#availability-reason').textContent = materialState.reason;
  const detail = document.querySelector('#availability-detail');
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
  detail.hidden = true;
  document.querySelector('#availability-detail-toggle').setAttribute('aria-expanded', 'false');
}

function toggleAvailabilityDetail() {
  const detail = document.querySelector('#availability-detail');
  const button = document.querySelector('#availability-detail-toggle');
  detail.hidden = !detail.hidden;
  button.setAttribute('aria-expanded', detail.hidden ? 'false' : 'true');
}

function instrumentReadoutPanelStates() {
  return [
    {
      id: 'current',
      label: 'CURRENT',
      tone: 'current',
      marker: 'CU',
      readoutLabel: 'Bridge feed readout',
      value: '42 active display fields',
      age: 'Last read now',
      basis: 'Current local readout basis',
      warning: 'No gaps or warnings',
      availability: 'Available from current readout basis.',
      detail: [
        ['Basis', 'Current local readout basis.'],
        ['Availability', 'Available for display.'],
        ['Freshness', 'Last read now.'],
        ['Known fields / coverage note', 'Display coverage: primary value, freshness, basis, gaps, and warnings are present.']
      ]
    },
    {
      id: 'updating',
      label: 'UPDATING',
      tone: 'updating',
      marker: 'UP',
      readoutLabel: 'Bridge feed readout',
      value: 'Reading local bridge',
      age: 'Updating now',
      basis: 'Awaiting refreshed basis',
      warning: 'Updating',
      availability: 'Current display is being refreshed.',
      detail: [
        ['Basis', 'Existing panel shell while the current read is pending.'],
        ['Availability', 'Readout is temporarily updating, not failed.'],
        ['Freshness', 'Refresh in progress.'],
        ['Known fields / coverage note', 'Known fields will be re-evaluated when the read completes.']
      ]
    },
    {
      id: 'aged',
      label: 'AGED',
      tone: 'aged',
      marker: 'AG',
      readoutLabel: 'Bridge feed readout',
      value: 'Last successful value shown',
      age: 'Last successful read 28 min ago',
      basis: 'Older successful readout basis',
      warning: '1 warning',
      availability: 'Showing older readout basis.',
      detail: [
        ['Basis', 'Older successful readout basis.'],
        ['Availability', 'Current basis is aged but still presentable.'],
        ['Freshness', 'Last successful read 28 min ago.'],
        ['Warnings', 'Current readout may have changed since this basis was captured.']
      ]
    },
    {
      id: 'partial',
      label: 'PARTIAL',
      tone: 'partial',
      marker: 'PA',
      readoutLabel: 'Bridge feed readout',
      value: '18 of 24 display fields',
      age: 'Last read 4 min ago',
      basis: 'Partial local readout basis',
      warning: '2 gaps / 1 warning',
      availability: 'Partial readout; available fields remain visible.',
      detail: [
        ['Basis', 'Partial local readout basis.'],
        ['Availability', 'Presentable fields are available; missing fields remain explicit.'],
        ['Freshness', 'Last read 4 min ago.'],
        ['Known fields / coverage note', 'Known fields: label, value, readout age, and basis. Coverage gap: secondary detail omitted.'],
        ['Gaps', 'secondary_readout_context, extended_basis_note'],
        ['Warnings', 'Gap count remains visible when detail is closed.'],
        ['Long text example', 'Partial readout detail can include a longer explanation of what is present without turning the compact parent panel into a paragraph-heavy surface.']
      ]
    },
    {
      id: 'unavailable',
      label: 'UNAVAILABLE',
      tone: 'unavailable',
      marker: 'UN',
      readoutLabel: 'Bridge feed readout',
      value: 'Current read unavailable',
      age: 'Last attempt now',
      basis: 'Unavailable current read',
      warning: 'Unavailable',
      availability: 'Current read cannot be shown.',
      detail: [
        ['Basis', 'Unavailable current read.'],
        ['Availability', 'Unavailable current read is distinct from no data and failed read attempts.'],
        ['Freshness', 'Last attempt now.'],
        ['Warnings', 'No current value is presented.']
      ]
    },
    {
      id: 'fallback',
      label: 'FALLBACK',
      tone: 'fallback',
      marker: 'FB',
      readoutLabel: 'Bridge feed readout',
      value: 'Fallback value shown',
      age: 'Fallback basis from prior read',
      basis: 'Fallback presentation basis',
      warning: 'Fallback basis active',
      availability: 'Showing fallback basis.',
      detail: [
        ['Basis', 'Fallback presentation basis.'],
        ['Availability', 'Fallback is visible and does not pretend to be current.'],
        ['Freshness', 'Fallback basis from prior read.'],
        ['Fallback basis', 'Previous display basis held for continuity.'],
        ['Warnings', 'Fallback basis is marked in the compact parent panel.']
      ]
    },
    {
      id: 'no-data',
      label: 'NO DATA',
      tone: 'no-data',
      marker: 'ND',
      readoutLabel: 'Bridge feed readout',
      value: 'No presentable data',
      age: 'No data returned',
      basis: 'No presentation payload available',
      warning: 'No data',
      availability: 'No presentable display fields are available.',
      detail: [
        ['Basis', 'No presentation payload available.'],
        ['Availability', 'No data means no presentable display fields, not proof of upstream absence.'],
        ['Freshness', 'No data returned.'],
        ['Known fields / coverage note', 'Known fields: none for this display sample.']
      ]
    },
    {
      id: 'source-owned-placeholder',
      label: 'PARTIAL',
      tone: 'source-owned',
      marker: 'SO',
      readoutLabel: 'Source-owned placeholder readout',
      value: 'Source-owned no-scan placeholder',
      age: 'Last read 6 min ago',
      basis: 'Source-owned placeholder basis',
      warning: '1 gap / source-owned placeholder',
      availability: 'Source-owned no-scan placeholder; owner and layer are qualified.',
      detail: [
        ['Basis', 'Source-owned placeholder basis presented by Lab after the bridge.'],
        ['Availability', 'Source-owned no-scan placeholder remains distinct from unavailable, failed, fallback, and no data.'],
        ['Freshness', 'Last read 6 min ago.'],
        ['Known fields / coverage note', 'Known fields: placeholder label and readout age only.'],
        ['Gaps', 'Primary source-owned value is not replaced by Lab copy.'],
        ['Warnings', 'Layer-qualified source-owned placeholder.'],
        ['Source-owned note', 'Owner: source project. Layer shown here: Lab Bridge -> Interface display.'],
        ['Long text example', 'SOURCE_OWNED_PLACEHOLDER_TOKEN_WITH_A_LONG_UNBROKEN_SEGMENT_FOR_CONTAINMENT_REVIEW_7F3A2C9D0B4E6A8C1F5D2B9E0A4C7F1D']
      ]
    }
  ];
}

function renderInstrumentReadoutPanel(stateId) {
  const panelState = instrumentReadoutPanelStates().find((entry) => entry.id === stateId) || instrumentReadoutPanelStates()[0];
  const panel = document.querySelector('#instrument-readout-panel-output');
  panel.dataset.state = panelState.id;
  panel.dataset.tone = panelState.tone;
  panel.dataset.viewIntent = state.viewIntent;
  document.querySelector('#instrument-readout-light').textContent = panelState.marker;
  document.querySelector('#instrument-readout-label').textContent = panelState.readoutLabel;
  document.querySelector('#instrument-readout-state').textContent = panelState.label;
  document.querySelector('#instrument-readout-value').textContent = panelState.value;
  document.querySelector('#instrument-readout-age').textContent = panelState.age;
  document.querySelector('#instrument-readout-basis').textContent = panelState.basis;
  document.querySelector('#instrument-readout-marker').textContent = panelState.warning;
  document.querySelector('#instrument-readout-availability').textContent = panelState.availability;

  const detail = document.querySelector('#instrument-readout-detail');
  detail.textContent = '';
  for (const [labelText, valueText] of instrumentReadoutDetailRows(panelState)) {
    const row = document.createElement('div');
    const label = document.createElement('span');
    const value = document.createElement('strong');
    label.textContent = labelText;
    value.textContent = valueText;
    row.append(label, value);
    detail.appendChild(row);
  }
  detail.hidden = true;
  document.querySelector('#instrument-readout-detail-toggle').setAttribute('aria-expanded', 'false');
}

function instrumentReadoutDetailRows(panelState) {
  const viewNote = {
    'summary-first': 'Summary keeps state, primary value, freshness, basis cue, warning/gap marker, and detail affordance visible.',
    basis: 'Basis keeps readout basis and freshness visible while the primary value remains present.',
    details: 'Details keeps the readout label and state visible while rows receive emphasis.'
  };
  return [
    ...panelState.detail,
    ['View intent', viewNote[state.viewIntent] || viewNote['summary-first']]
  ];
}

function toggleInstrumentReadoutDetail() {
  const detail = document.querySelector('#instrument-readout-detail');
  const button = document.querySelector('#instrument-readout-detail-toggle');
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
    const context = { briefing, readoutState, status };
    appendSourceDetail(list, slot.label, slot.value(context), slot, slotDetailHydration(slot, context));
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

function slotDetailHydration(slot, context) {
  const detailRows = slot.hydration?.detail?.(context) || [];
  return {
    compact: slot.hydration?.compact !== false,
    detailRows,
    context
  };
}

function appendSourceDetail(list, labelText, valueText, slot = {}, hydration = { compact: true, detailRows: [] }) {
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
  item.dataset.presentationHydration = hydration.compact ? 'compact' : 'expanded';
  item.dataset.presentationDetailCount = String(hydration.detailRows.length);
  if (hydration.detailRows.length > 0) {
    item.dataset.presentationDetail = hydration.detailRows.map(([label, value]) => `${label}: ${value}`).join(' | ');
  }
  const rowFacets = slotRowFacetValues(slot, hydration.context);
  item.dataset.presentationFacetCount = String(rowFacets.length);
  if (rowFacets.length > 0) {
    item.dataset.presentationFacets = rowFacets.map((facet) => `${facet.type}:${facet.tone}`).join('|');
    appendSlotRowFacets(item, rowFacets);
  }
  const overflowSentinel = slotOverflowSentinelValue(slot, hydration.context, valueText, hydration);
  item.dataset.presentationOverflow = overflowSentinel?.kind || 'none';
  if (overflowSentinel) {
    item.dataset.presentationOverflowBasis = overflowSentinel.basis;
    appendSlotOverflowSentinel(item, overflowSentinel);
  }
  const label = document.createElement('span');
  const value = document.createElement('strong');
  label.textContent = labelText;
  value.textContent = valueText || 'Not provided';
  item.append(label, value);
  setupLazySlotVisual(item, slot, hydration.context);
  setupSlotRevealController(item, hydration);
  list.appendChild(item);
}

function slotRowFacetValues(slot, context) {
  if (!slot.rowFacets?.localOnly || typeof slot.rowFacets.render !== 'function') {
    return [];
  }
  return slot.rowFacets.render(context)
    .filter(Boolean)
    .slice(0, 3)
    .map((facet) => ({
      type: facet.type || 'state',
      tone: facet.tone || 'neutral',
      label: facet.label || 'Row facet'
    }));
}

function slotOverflowSentinelValue(slot, context, valueText, hydration) {
  if (!slot.overflowSentinel?.localOnly || typeof slot.overflowSentinel.evaluate !== 'function') {
    return null;
  }
  const sentinel = slot.overflowSentinel.evaluate({ ...context, valueText, hydration });
  if (!sentinel) {
    return null;
  }
  return {
    kind: sentinel.kind || 'constrained',
    tone: sentinel.tone || 'neutral',
    label: sentinel.label || 'Constrained row content',
    basis: sentinel.basis || 'row-content'
  };
}

function appendSlotOverflowSentinel(item, sentinel) {
  const marker = document.createElement('span');
  marker.className = 'slot-overflow-sentinel';
  marker.dataset.overflowKind = sentinel.kind;
  marker.dataset.tone = sentinel.tone;
  marker.setAttribute('role', 'img');
  marker.setAttribute('aria-label', sentinel.label);
  marker.title = sentinel.label;
  item.appendChild(marker);
}

function appendSlotRowFacets(item, facets) {
  const rail = document.createElement('span');
  rail.className = 'slot-row-facets';
  rail.setAttribute('aria-label', facets.map((facet) => facet.label).join(', '));
  for (const facet of facets) {
    const marker = document.createElement('i');
    marker.dataset.facetType = facet.type;
    marker.dataset.tone = facet.tone;
    marker.textContent = facet.type;
    rail.appendChild(marker);
  }
  item.appendChild(rail);
}

function setupLazySlotVisual(item, slot, context) {
  if (!slot.lazyVisual?.localOnly || typeof slot.lazyVisual.load !== 'function') {
    return;
  }
  item.dataset.presentationLazyVisual = 'pending';
  item.dataset.presentationLazyTreatment = slot.lazyVisual.treatment || 'local';
  slot.lazyVisual.load(context).then((visual) => {
    if (!item.isConnected) {
      return;
    }
    const visualNode = document.createElement('div');
    visualNode.className = 'slot-lazy-visual';
    visualNode.dataset.tone = visual?.tone || 'neutral';
    visualNode.setAttribute('aria-label', visual?.label || 'Local visual treatment');
    for (const valueText of visual?.values || []) {
      const pip = document.createElement('i');
      pip.textContent = valueText || 'Not provided';
      visualNode.appendChild(pip);
    }
    item.appendChild(visualNode);
    item.dataset.presentationLazyVisual = 'loaded';
  }).catch(() => {
    if (item.isConnected) {
      item.dataset.presentationLazyVisual = 'unavailable';
    }
  });
}

function setupSlotRevealController(item, hydration) {
  if (hydration.detailRows.length === 0) {
    return;
  }
  item.tabIndex = 0;
  item.setAttribute('aria-expanded', 'false');
  item.dataset.presentationReveal = 'closed';

  const detail = document.createElement('dl');
  detail.className = 'slot-reveal';
  detail.hidden = true;
  for (const [labelText, valueText] of hydration.detailRows) {
    const row = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = labelText;
    description.textContent = valueText || 'Not provided';
    row.append(term, description);
    detail.appendChild(row);
  }
  item.appendChild(detail);

  const setOpen = (open) => {
    detail.hidden = !open;
    item.dataset.presentationReveal = open ? 'open' : 'closed';
    item.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  let closedBeforePointer = true;
  item.addEventListener('pointerdown', () => {
    closedBeforePointer = item.dataset.presentationReveal !== 'open';
  });
  item.addEventListener('focus', () => setOpen(true));
  item.addEventListener('click', () => {
    if (closedBeforePointer) {
      setOpen(true);
      return;
    }
    setOpen(item.dataset.presentationReveal !== 'open');
  });
  item.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setOpen(item.dataset.presentationReveal !== 'open');
    }
  });
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
