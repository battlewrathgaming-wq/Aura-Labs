(function () {
  const fallbackData = {
    meta: {
      boundary:
        'Display example input only. This fallback mirrors the static examples enough to inspect the head when local JSON fetches are blocked.'
    },
    readouts: [
      {
        id: 'current',
        label: 'Local Readout Availability',
        state: { id: 'current', label: 'CURRENT', marker: 'OK' },
        primaryValue: '7 display fields ready',
        ageLabel: 'Last read 42s ago',
        basis: 'Most recent neutral display example input.',
        availability: { status: 'available', reason: 'Current display fields are available.' },
        coverage: {
          summary: 'Known fields: label, value, state, age, basis, coverage, warnings, gaps.',
          knownFields: ['label', 'primaryValue', 'state', 'ageLabel', 'basis', 'coverage', 'detail']
        },
        gaps: [],
        warnings: [],
        detail: {
          summary: 'Current readout with full display coverage.',
          rows: [
            { label: 'Basis', value: 'Most recent neutral display example input.' },
            { label: 'Freshness', value: 'Last read 42s ago.' },
            { label: 'Coverage', value: 'All expected display example fields are present.' },
            {
              label: 'Long token',
              value: 'neutral-display-input-current-readout-token-5d4f8ab8cae34c899c0214b8d71a9e55-without-natural-breaks'
            }
          ]
        }
      },
      {
        id: 'updating',
        label: 'Local Readout Availability',
        state: { id: 'updating', label: 'UPDATING', marker: '...' },
        primaryValue: 'Reading display fields',
        ageLabel: 'Read in progress',
        basis: 'In-progress display refresh.',
        availability: { status: 'pending', reason: 'New display input is being read; previous visible fields remain secondary.' },
        coverage: { summary: 'Coverage is pending until the read completes.', knownFields: ['label', 'state', 'ageLabel'] },
        gaps: ['Primary value may change after the read completes.'],
        warnings: [],
        detail: {
          summary: 'Updating readout with visible pending posture.',
          rows: [
            { label: 'Basis', value: 'In-progress display refresh.' },
            { label: 'Freshness', value: 'Read in progress.' },
            { label: 'Gap', value: 'Final value and coverage are not available until the read completes.' }
          ]
        }
      },
      {
        id: 'aged',
        label: 'Local Readout Availability',
        state: { id: 'aged', label: 'AGED', marker: 'AGE' },
        primaryValue: '7 display fields from prior read',
        ageLabel: 'Last read 48m ago',
        basis: 'Last successful neutral display example input.',
        availability: { status: 'aged', reason: 'Current input is not newer than the visible readout.' },
        coverage: {
          summary: 'Known fields came from the prior successful display read.',
          knownFields: ['label', 'primaryValue', 'state', 'basis']
        },
        gaps: ['Fresh current input is not available.'],
        warnings: ['Readout age may matter before use.'],
        detail: {
          summary: 'Aged readout keeps prior basis and freshness visible.',
          rows: [
            { label: 'Basis', value: 'Last successful neutral display example input.' },
            { label: 'Freshness', value: 'Last read 48m ago.' },
            { label: 'Warning', value: 'The readout is intentionally labeled AGED rather than presented as current.' }
          ]
        }
      },
      {
        id: 'partial',
        label: 'Local Readout Availability',
        state: { id: 'partial', label: 'PARTIAL', marker: 'PART' },
        primaryValue: '4 of 7 display fields ready',
        ageLabel: 'Last read 3m ago',
        basis: 'Neutral display example input with some omitted fields.',
        availability: { status: 'limited', reason: 'Available fields are shown; missing fields remain visible as gaps.' },
        coverage: { summary: 'Known fields: label, state, age, basis.', knownFields: ['label', 'state', 'ageLabel', 'basis'] },
        gaps: ['Primary detail text is incomplete.', 'Coverage list is shorter than expected.'],
        warnings: ['Partial display basis; do not infer complete coverage.'],
        detail: {
          summary: 'Partial readout with gaps and warnings visible.',
          rows: [
            { label: 'Basis', value: 'Neutral display example input with omitted fields.' },
            { label: 'Coverage', value: 'Known fields: label, state, age, basis.' },
            { label: 'Gap', value: 'Primary detail text is incomplete.' },
            { label: 'Warning', value: 'Partial display basis; do not infer complete coverage from the fields shown.' }
          ]
        }
      },
      {
        id: 'unavailable',
        label: 'Local Readout Availability',
        state: { id: 'unavailable', label: 'UNAVAILABLE', marker: 'UNAV' },
        primaryValue: '',
        absenceLabel: 'Current read unavailable',
        ageLabel: 'Last attempt now',
        basis: 'A current display value cannot be provided for a named availability reason.',
        availability: {
          status: 'unavailable',
          reason: 'Current read unavailable: the attempt did not provide presentable display fields.'
        },
        coverage: { summary: 'No current display fields are available from this attempt.', knownFields: [] },
        gaps: ['Current value is unavailable.', 'Coverage cannot be shown for this read.'],
        warnings: ['UNAVAILABLE is a display label here, not a source-project state.'],
        detail: {
          summary: 'Unavailable readout names the current attempt and avoids showing a fake value.',
          rows: [
            { label: 'Availability', value: 'Current read unavailable: the attempt did not provide presentable display fields.' },
            { label: 'Freshness', value: 'Last attempt now.' },
            { label: 'Boundary', value: 'UNAVAILABLE is a Lab display example label, not a target enum or source state.' }
          ]
        }
      },
      {
        id: 'fallback',
        label: 'Local Readout Availability',
        state: { id: 'fallback', label: 'FALLBACK', marker: 'FB' },
        primaryValue: 'Prior display value',
        ageLabel: 'Fallback read 2h ago',
        basis: 'Previous neutral display example input because the current read is unavailable.',
        fallbackBasis: 'Previous successful display read.',
        availability: { status: 'fallback', reason: 'Showing fallback basis; this is not presented as current.' },
        coverage: {
          summary: 'Fallback fields remain visible with their basis named.',
          knownFields: ['label', 'primaryValue', 'fallbackBasis']
        },
        gaps: ['Current display input is unavailable.'],
        warnings: ['Fallback value must not be read as current.'],
        detail: {
          summary: 'Fallback readout names its basis.',
          rows: [
            { label: 'Fallback basis', value: 'Previous successful display read.' },
            { label: 'Freshness', value: 'Fallback read 2h ago.' },
            { label: 'Warning', value: 'Fallback value must not be read as current.' }
          ]
        }
      },
      {
        id: 'no-data',
        label: 'Local Readout Availability',
        state: { id: 'no-data', label: 'NO DATA', marker: 'NONE' },
        primaryValue: '',
        absenceLabel: 'No presentable fields',
        ageLabel: 'Last read 12s ago',
        basis: 'Display input returned no presentable fields.',
        availability: {
          status: 'display-absence',
          reason: 'No presentable fields: display input returned nothing the panel can show.'
        },
        coverage: { summary: 'No known fields are present in this display example.', knownFields: [] },
        gaps: ['No primary value, detail value, or coverage fields are present.'],
        warnings: ['NO DATA is display absence only, not proof of upstream absence.'],
        detail: {
          summary: 'Reason-first generic display absence.',
          rows: [
            { label: 'Availability', value: 'No presentable fields: display input returned nothing the panel can show.' },
            { label: 'Freshness', value: 'Last read 12s ago.' },
            {
              label: 'Boundary',
              value: 'NO DATA means no presentable display fields in this example, not proof of upstream absence.'
            }
          ]
        }
      },
      {
        id: 'source-no-observation',
        label: 'Source-Owned Observation Placeholder',
        state: { id: 'source-no-observation', label: 'NO DATA', marker: 'SRC' },
        primaryValue: '',
        absenceLabel: 'No observation',
        ageLabel: 'Last read 1m ago',
        basis: 'Qualified source-owned no-observation placeholder.',
        availability: {
          status: 'source-owned-absence',
          reason: 'No observation: source-owned placeholder shown with owner/layer qualification.'
        },
        coverage: {
          summary: 'Source-owned placeholder and qualification are present.',
          knownFields: ['sourceOwned', 'availability', 'detail']
        },
        gaps: ['Lab does not infer whether an upstream event exists.'],
        warnings: ['Do not map Lab NO DATA over source-owned no observation or no-scan placeholders.'],
        sourceOwned: {
          owner: 'Sense example placeholder',
          layer: 'source-owned display input example',
          terms: ['no observation', 'no-scan'],
          visibleLabel: 'No observation',
          qualification:
            'No observation and no-scan are present only as source-owned placeholders. Lab does not define their source-project meaning.'
        },
        detail: {
          summary: 'Source-owned no-observation placeholder with visible qualification.',
          rows: [
            { label: 'Source-owned label', value: 'No observation.' },
            { label: 'Owner/layer', value: 'Sense example placeholder; source-owned display input example.' },
            {
              label: 'Qualification',
              value:
                'No observation and no-scan are present only as source-owned placeholders. Lab does not define their source-project meaning.'
            },
            {
              label: 'Boundary',
              value:
                'This example does not create a Sense bridge contract, runtime contract, target adapter, or source state mapping.'
            }
          ]
        }
      },
      {
        id: 'source-blocked',
        label: 'Source-Owned Availability Placeholder',
        state: { id: 'source-blocked', label: 'UNAVAILABLE', marker: 'BLOCK' },
        primaryValue: '',
        absenceLabel: 'Source-owned blocked',
        ageLabel: 'Last attempt now',
        basis: 'Qualified source-owned blocked placeholder.',
        availability: {
          status: 'source-owned-unavailable',
          reason: 'Source-owned blocked: an owner/layer-qualified placeholder explains why no current value is shown.'
        },
        coverage: {
          summary: 'Blocked placeholder, availability reason, and qualification are present.',
          knownFields: ['sourceOwned', 'availability', 'detail']
        },
        gaps: ['Current display value is unavailable under the qualified source-owned placeholder.'],
        warnings: ['Blocked is source-owned here; it is not a Lab state or generic no-data label.'],
        sourceOwned: {
          owner: 'Sense example placeholder',
          layer: 'source-owned display input example',
          terms: ['blocked'],
          visibleLabel: 'Source-owned blocked',
          qualification: 'Blocked is present only as a source-owned placeholder. Lab does not define its source-project meaning.'
        },
        detail: {
          summary: 'Source-owned blocked placeholder kept distinct from generic NO DATA.',
          rows: [
            { label: 'Source-owned label', value: 'Source-owned blocked.' },
            { label: 'Owner/layer', value: 'Sense example placeholder; source-owned display input example.' },
            {
              label: 'Qualification',
              value: 'Blocked is present only as a source-owned placeholder. Lab does not define its source-project meaning.'
            },
            { label: 'Boundary', value: 'This example does not normalize blocked into a Lab state or target enum.' }
          ]
        }
      },
      {
        id: 'source-degraded',
        label: 'Source-Owned Limited Read',
        state: { id: 'source-degraded', label: 'PARTIAL', marker: 'DEG' },
        primaryValue: 'Degraded source read',
        ageLabel: 'Last read 4m ago',
        basis: 'Qualified source-owned degraded placeholder with presentable fields.',
        availability: {
          status: 'source-owned-limited',
          reason: 'Degraded source read: some fields remain presentable while gaps stay visible.'
        },
        coverage: {
          summary: 'Coverage is intentionally available in Readout Detail for this compact example.',
          knownFields: ['sourceOwned', 'primaryValue', 'ageLabel', 'basis', 'warnings']
        },
        displayPolicy: { compactMeta: true, coverageInDetailOnly: true },
        gaps: ['Some fields are withheld from the compact surface.', 'Coverage / Known fields are behind Readout Detail.'],
        warnings: ['Degraded is source-owned here; PARTIAL remains the Lab display label.'],
        sourceOwned: {
          owner: 'Sense example placeholder',
          layer: 'source-owned display input example',
          terms: ['degraded'],
          visibleLabel: 'Degraded source read',
          qualification: 'Degraded is present only as a source-owned placeholder. Lab does not define its source-project meaning.'
        },
        detail: {
          summary: 'Compact inspection example: coverage moves behind Readout Detail.',
          rows: [
            { label: 'Source-owned label', value: 'Degraded source read.' },
            { label: 'Owner/layer', value: 'Sense example placeholder; source-owned display input example.' },
            { label: 'Coverage', value: 'Known fields are available here instead of the main panel meta lane.' },
            {
              label: 'Qualification',
              value: 'Degraded is present only as a source-owned placeholder. Lab does not define its source-project meaning.'
            },
            { label: 'Boundary', value: 'This example keeps degraded source-owned and does not make it a Lab state.' }
          ]
        }
      }
    ]
  };

  const stateToneClass = {
    current: 'state-current',
    updating: 'state-updating',
    aged: 'state-aged',
    partial: 'state-partial',
    unavailable: 'state-unavailable',
    fallback: 'state-fallback',
    'no-data': 'state-no-data',
    'source-no-observation': 'state-source-owned-absence',
    'source-blocked': 'state-source-owned-unavailable',
    'source-degraded': 'state-source-owned-limited'
  };

  const root = document.getElementById('readout-root');
  const select = document.getElementById('readout-select');
  const selectedReadoutId = document.body.dataset.readoutId || null;
  let readouts = fallbackData.readouts;

  init();

  async function init() {
    try {
      const response = await fetch('./example-readouts.json', { cache: 'no-store' });
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json.readouts) && json.readouts.length > 0) {
          readouts = json.readouts;
        }
      }
    } catch (error) {
      // Plain file opening may block JSON fetches; fallback data keeps the reference inspectable.
    }

    if (select) {
      fillSelector();
      select.addEventListener('change', () => {
        const next = readouts.find((readout) => readout.id === select.value) || readouts[0];
        render(next);
      });
    }

    const selected = readouts.find((readout) => readout.id === selectedReadoutId) || readouts[0];
    if (select) select.value = selected.id;
    render(selected);
  }

  function fillSelector() {
    select.replaceChildren(
      ...readouts.map((readout) => {
        const option = document.createElement('option');
        option.value = readout.id;
        option.textContent = `${readout.state.label} - ${readout.label}`;
        return option;
      })
    );
  }

  function render(readout) {
    const panel = el('article', `readout-panel ${stateToneClass[readout.state.id] || ''}`);
    panel.setAttribute('aria-labelledby', 'readout-title');

    const top = el('div', 'readout-top');
    const labelWrap = el('div', 'readout-label');
    labelWrap.append(
      withText(el('h2'), readout.label, { id: 'readout-title' }),
      withText(el('p', 'readout-basis'), readout.basis)
    );

    const chip = el('div', 'state-chip');
    chip.append(withText(el('span', 'state-mark'), readout.state.marker), withText(el('span'), readout.state.label));
    top.append(labelWrap, chip);

    const body = el('div', 'readout-body');
    const primaryStack = el('div', 'primary-stack');
    primaryStack.append(
      withText(
        el('p', `primary-value ${readout.primaryValue ? '' : 'absent'}`),
        readout.primaryValue || readout.absenceLabel || readout.state.label
      )
    );
    if (readout.sourceOwned) {
      primaryStack.append(
        withText(
          el('p', 'source-owned-inline'),
          `Source-owned placeholder - ${readout.sourceOwned.owner}; ${readout.sourceOwned.layer}`
        )
      );
    }

    const meta = el('div', 'meta-grid');
    meta.append(row('Age', readout.ageLabel, 'meta'), row('Basis', readout.basis, 'meta'));
    if (!readout.displayPolicy || !readout.displayPolicy.coverageInDetailOnly) {
      meta.append(row('Coverage', readout.coverage.summary, 'meta'));
    }
    if (readout.fallbackBasis) {
      meta.append(row('Fallback', readout.fallbackBasis, 'meta'));
    }
    body.append(primaryStack, meta);

    const availability = withText(
      el('p', 'availability-line'),
      `${readout.availability.reason} (${readout.availability.status})`
    );

    const edge = el('div', 'edge-row');
    edge.append(
      withText(el('span', 'edge-pill gap'), `Gaps ${readout.gaps.length}`),
      withText(el('span', 'edge-pill warning'), `Warnings ${readout.warnings.length}`)
    );

    const detailWrap = el('div', 'detail-wrap');
    const detailId = `detail-${readout.id}`;
    const toggle = withText(el('button', 'detail-toggle'), 'Readout Detail');
    toggle.type = 'button';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', detailId);

    const detail = el('div', 'detail-body');
    detail.id = detailId;
    detail.hidden = true;
    detail.append(withText(el('p', 'detail-summary'), readout.detail.summary));
    detail.append(...detailRows(readout));

    if (readout.sourceOwned) {
      const sourceNote = el('div', 'source-note');
      sourceNote.append(
        withText(el('strong'), 'Source-owned placeholder qualification'),
        textNode(`${readout.sourceOwned.owner}; ${readout.sourceOwned.layer}. ${readout.sourceOwned.qualification}`)
      );
      detail.append(sourceNote);
    }

    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      detail.hidden = isOpen;
    });

    detailWrap.append(toggle, detail);
    panel.append(top, body, availability, edge, detailWrap);
    root.replaceChildren(panel);
  }

  function detailRows(readout) {
    const rows = [
      row('Availability', readout.availability.reason, 'detail'),
      row('Freshness', readout.ageLabel, 'detail'),
      row('Coverage', readout.coverage.summary, 'detail'),
      row('Known fields', readout.coverage.knownFields.length ? readout.coverage.knownFields.join(', ') : 'None shown', 'detail')
    ];

    for (const gap of readout.gaps) rows.push(row('Gap', gap, 'detail'));
    for (const warning of readout.warnings) rows.push(row('Warning', warning, 'detail'));
    for (const item of readout.detail.rows) rows.push(row(item.label, item.value, 'detail'));

    return rows;
  }

  function row(label, value, kind) {
    const node = el('div', `${kind}-row`);
    node.append(withText(el('div', `${kind}-label`), label), withText(el('div', `${kind}-value`), value));
    return node;
  }

  function el(tag, className) {
    const node = document.createElement(tag);
    if (className) node.className = className.trim();
    return node;
  }

  function withText(node, value, attributes) {
    if (attributes) {
      for (const [key, attrValue] of Object.entries(attributes)) {
        node.setAttribute(key, attrValue);
      }
    }
    node.textContent = value;
    return node;
  }

  function textNode(value) {
    return document.createTextNode(value);
  }
})();
