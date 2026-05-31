(function () {
  const fallbackData = {
    meta: {
      boundary:
        'Display example input only. This fallback mirrors example-readouts.json and is not a bridge contract, runtime contract, target payload requirement, target enum set, or source-project state model.'
    },
    readouts: [
      {
        id: 'current',
        label: 'Local Readout Availability',
        state: { id: 'current', label: 'CURRENT', marker: 'OK' },
        primaryValue: '7 display fields ready',
        ageLabel: 'Last read 42s ago',
        basis: 'Based on the most recent neutral display example input.',
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
        basis: 'Based on an in-progress display refresh.',
        availability: {
          status: 'pending',
          reason: 'New display input is being read; previous visible fields remain secondary.'
        },
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
        basis: 'Based on the last successful neutral display example input.',
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
        basis: 'Based on neutral display example input with some omitted fields.',
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
        absenceLabel: 'No current value',
        ageLabel: 'Last attempt now',
        basis: 'No current display input was available.',
        availability: { status: 'unavailable', reason: 'The current read could not provide presentable display fields.' },
        coverage: { summary: 'No current display fields are available.', knownFields: [] },
        gaps: ['Current value is unavailable.', 'Coverage cannot be shown for this read.'],
        warnings: ['Unavailable is a display label here, not a source-project state.'],
        detail: {
          summary: 'Unavailable readout avoids showing a fake primary value.',
          rows: [
            { label: 'Availability', value: 'The current read could not provide presentable display fields.' },
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
        basis: 'Based on a previous neutral display example input because the current read is unavailable.',
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
        basis: 'Neutral display example input returned no presentable fields.',
        availability: { status: 'no-data', reason: 'No presentable display fields were returned.' },
        coverage: { summary: 'No known fields are present in this display example.', knownFields: [] },
        gaps: ['No value, detail, or coverage fields are present.'],
        warnings: ['NO DATA is not proof of upstream absence.'],
        detail: {
          summary: 'No-data readout avoids overstating source meaning.',
          rows: [
            { label: 'Availability', value: 'No presentable display fields were returned.' },
            { label: 'Freshness', value: 'Last read 12s ago.' },
            {
              label: 'Boundary',
              value: 'NO DATA means no presentable display fields in this example, not proof of upstream absence.'
            }
          ]
        }
      },
      {
        id: 'source-owned-placeholder',
        label: 'Local Readout Availability',
        state: { id: 'source-owned-placeholder', label: 'UNAVAILABLE', marker: 'SRC' },
        primaryValue: '',
        absenceLabel: 'Source-owned placeholder',
        ageLabel: 'Last read 1m ago',
        basis: 'Display example includes qualified source-owned placeholders.',
        availability: {
          status: 'source-owned-placeholder',
          reason: 'Source-owned placeholders are shown only with owner/layer qualification.'
        },
        coverage: {
          summary: 'Placeholder examples: blocked, no-scan, degraded.',
          knownFields: ['sourceOwned', 'availability', 'detail']
        },
        gaps: ['No target adapter meaning is inferred by Lab.'],
        warnings: ['Do not map Lab NO DATA over source-owned blocked, no-scan, or degraded placeholders.'],
        sourceOwned: {
          owner: 'Sense example placeholder',
          layer: 'source-owned display input example',
          terms: ['blocked', 'no-scan', 'degraded'],
          qualification:
            'These words are present only as source-owned placeholders. Lab does not define their source-project meaning.'
        },
        detail: {
          summary: 'Qualified source-owned placeholder example.',
          rows: [
            { label: 'Source-owned terms', value: 'blocked, no-scan, degraded.' },
            { label: 'Owner/layer', value: 'Sense example placeholder; source-owned display input example.' },
            {
              label: 'Qualification',
              value:
                'These words are present only as source-owned placeholders. Lab does not define their source-project meaning.'
            },
            {
              label: 'Boundary',
              value:
                'This example does not create a Sense bridge contract, runtime contract, target adapter, or source state mapping.'
            }
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
    'source-owned-placeholder': 'state-source-owned-placeholder'
  };

  const root = document.getElementById('readout-root');
  const select = document.getElementById('readout-select');
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

    fillSelector();
    render(readouts[0]);
    select.addEventListener('change', () => {
      const next = readouts.find((readout) => readout.id === select.value) || readouts[0];
      render(next);
    });
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
    const primary = withText(
      el('p', `primary-value ${readout.primaryValue ? '' : 'absent'}`),
      readout.primaryValue || readout.absenceLabel || readout.state.label
    );
    const meta = el('div', 'meta-grid');
    meta.append(
      row('Age', readout.ageLabel, 'meta'),
      row('Basis', readout.basis, 'meta'),
      row('Coverage', readout.coverage.summary, 'meta')
    );
    if (readout.fallbackBasis) {
      meta.append(row('Fallback', readout.fallbackBasis, 'meta'));
    }
    body.append(primary, meta);

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

