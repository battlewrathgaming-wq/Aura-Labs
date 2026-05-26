const path = require('node:path');
const fs = require('node:fs');
const { app, BrowserWindow, ipcMain } = require('electron');
const { APP_NAME } = require('../constants');
const { createDefaultRegistry, registerElectronServiceHandlers } = require('../services/serviceRegistry');
const { createFrameWindow, registerFrameWindowHandlers } = require('../modules/Frame');

const registry = createDefaultRegistry();
let mainWindow = null;

if (process.env.AURA_LAB_ELECTRON_VISUAL_SMOKE === '1') {
  app.setPath('userData', smokeUserDataDir());
}

function createWindow() {
  const window = createFrameWindow(app, {
    width: 960,
    height: 640,
    minWidth: 720,
    minHeight: 480,
    title: APP_NAME,
    preload: path.join(__dirname, 'preload.js'),
    backgroundColor: '#0f1416',
    defaultAlwaysOnTop: false
  });

  mainWindow = window;
  const workshopMode = process.env.AURA_LAB_ELECTRON_VISUAL_SMOKE === '1' || process.env.AURA_LAB_WORKSHOP_MODE === '1';
  window.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'), {
    query: workshopMode
      ? {
          workshop: '1',
          material: process.env.AURA_LAB_MATERIAL_HARNESS || 'mat-authority-window-ttl-strip'
        }
      : {}
  });
  if (process.env.AURA_LAB_ELECTRON_VISUAL_SMOKE === '1') {
    runVisualSmoke(window).catch((error) => {
      writeVisualSmokeResult({
        status: 'failed',
        message: error.message,
        checked_at: new Date().toISOString()
      });
      app.quit();
    });
  }
}

async function runVisualSmoke(window) {
  await waitForLoad(window);
  await delay(250);

  const smokeDir = visualSmokeDir();
  fs.mkdirSync(smokeDir, { recursive: true });

  const briefingStates = ['loading', 'normal', 'empty', 'stale', 'failed', 'partial', 'long-text'];
  const neutralSeedStates = ['loading', 'normal', 'empty', 'failed', 'long-text'];
  const observations = [];

  for (const state of briefingStates) {
    await selectFixture(window, 'briefing', state);
    observations.push(await captureFixture(
      window,
      'briefing',
      state,
      'desktop',
      path.join(smokeDir, `family-briefing-state-${state}.png`)
    ));
  }

  for (const state of neutralSeedStates) {
    await selectFixture(window, 'neutral-seed', state);
    observations.push(await captureFixture(
      window,
      'neutral-seed',
      state,
      'desktop',
      path.join(smokeDir, `family-neutral-seed-state-${state}.png`)
    ));
  }

  window.setSize(720, 640);
  await selectFixture(window, 'briefing', 'partial');
  await delay(250);
  const narrowBriefing = await captureFixture(
    window,
    'briefing',
    'partial',
    'narrow',
    path.join(smokeDir, 'family-briefing-state-partial-narrow.png')
  );
  await selectFixture(window, 'neutral-seed', 'long-text');
  await delay(250);
  const narrowNeutralSeed = await captureFixture(
    window,
    'neutral-seed',
    'long-text',
    'narrow',
    path.join(smokeDir, 'family-neutral-seed-state-long-text-narrow.png')
  );
  observations.push(narrowBriefing, narrowNeutralSeed);

  window.setSize(960, 640);
  await selectFixture(window, 'briefing', 'partial');
  const briefingViewIntents = ['summary-first', 'basis', 'details'];
  for (const intent of briefingViewIntents) {
    await selectViewIntent(window, intent);
    observations.push(await captureViewIntent(
      window,
      'briefing',
      'partial',
      intent,
      'desktop',
      path.join(smokeDir, `family-briefing-state-partial-view-${intent}.png`)
    ));
  }

  window.setSize(960, 640);
  const materialStates = ['idle', 'active-window', 'captured', 'timeout', 'cooldown', 'blocked', 'manual-path'];
  for (const state of materialStates) {
    await selectMaterialState(window, state);
    observations.push(await captureMaterialState(
      window,
      state,
      'desktop',
      path.join(smokeDir, `material-authority-window-ttl-strip-state-${state}.png`)
    ));
  }

  window.setSize(560, 640);
  await selectMaterialState(window, 'cooldown');
  observations.push(await captureMaterialState(
    window,
    'cooldown',
    'narrow',
    path.join(smokeDir, 'material-authority-window-ttl-strip-state-cooldown-narrow.png')
  ));

  const longTextStates = ['long-paragraph', 'long-token', 'path-like-value', 'warning-explanation', 'grouped-gaps', 'source-placeholder'];
  await loadMaterialHarness(window, 'mat-long-text-detail-block');
  window.setSize(960, 640);
  for (const state of longTextStates) {
    await selectLongTextMaterialState(window, state);
    observations.push(await captureLongTextMaterialState(
      window,
      state,
      'desktop',
      path.join(smokeDir, `material-long-text-detail-block-state-${state}.png`)
    ));
  }

  window.setSize(560, 640);
  await selectLongTextMaterialState(window, 'long-token');
  observations.push(await captureLongTextMaterialState(
    window,
    'long-token',
    'narrow',
    path.join(smokeDir, 'material-long-text-detail-block-state-long-token-narrow.png')
  ));

  const availabilityStates = ['no-data', 'unavailable', 'blocked', 'failed', 'fallback', 'aged', 'source-no-scan'];
  await loadMaterialHarness(window, 'mat-availability-reason-treatment');
  window.setSize(960, 640);
  for (const state of availabilityStates) {
    await selectAvailabilityMaterialState(window, state);
    observations.push(await captureAvailabilityMaterialState(
      window,
      state,
      'desktop',
      path.join(smokeDir, `material-availability-reason-treatment-state-${state}.png`)
    ));
  }

  window.setSize(560, 640);
  await selectAvailabilityMaterialState(window, 'source-no-scan');
  observations.push(await captureAvailabilityMaterialState(
    window,
    'source-no-scan',
    'narrow',
    path.join(smokeDir, 'material-availability-reason-treatment-state-source-no-scan-narrow.png')
  ));

  const instrumentReadoutStates = ['current', 'updating', 'aged', 'partial', 'unavailable', 'fallback', 'no-data', 'source-owned-placeholder'];
  await loadMaterialHarness(window, 'output-instrument-readout-panel');
  window.setSize(960, 640);
  await selectViewIntent(window, 'summary-first');
  for (const state of instrumentReadoutStates) {
    await selectInstrumentReadoutPanelState(window, state);
    observations.push(await captureInstrumentReadoutPanelState(
      window,
      state,
      'summary-first',
      'desktop',
      path.join(smokeDir, `output-instrument-readout-panel-state-${state}.png`)
    ));
  }

  const outputViewIntents = ['summary-first', 'basis', 'details'];
  for (const intent of outputViewIntents) {
    await selectViewIntent(window, intent);
    await selectInstrumentReadoutPanelState(window, 'partial');
    observations.push(await captureInstrumentReadoutPanelState(
      window,
      'partial',
      intent,
      'desktop',
      path.join(smokeDir, `output-instrument-readout-panel-state-partial-view-${intent}.png`)
    ));
  }

  window.setSize(560, 640);
  await selectViewIntent(window, 'summary-first');
  await selectInstrumentReadoutPanelState(window, 'source-owned-placeholder');
  observations.push(await captureInstrumentReadoutPanelState(
    window,
    'source-owned-placeholder',
    'summary-first',
    'narrow',
    path.join(smokeDir, 'output-instrument-readout-panel-state-source-owned-placeholder-narrow.png')
  ));

  const screenshots = observations.map((observation) => observation.screenshot);
  const blockingFailures = visualSmokeBlockingFailures(observations);
  const smokePassed = blockingFailures.length === 0;

  writeVisualSmokeResult({
    status: smokePassed ? 'passed' : 'failed',
    message: smokePassed
      ? 'Electron visual smoke passed.'
      : 'Electron visual smoke found review-blocking selection or overflow issues.',
    checked_at: new Date().toISOString(),
    smoke_dir: smokeDir,
    families_checked: ['briefing', 'neutral-seed'],
    states_checked: {
      briefing: briefingStates,
      'neutral-seed': neutralSeedStates,
      'mat-authority-window-ttl-strip': materialStates,
      'mat-long-text-detail-block': longTextStates,
      'mat-availability-reason-treatment': availabilityStates,
      'output-instrument-readout-panel': instrumentReadoutStates
    },
    view_intents_checked: {
      briefing: briefingViewIntents,
      'output-instrument-readout-panel': outputViewIntents
    },
    modes_checked: briefingStates,
    viewports_checked: ['desktop', 'narrow'],
    blocking_failures: blockingFailures,
    observations,
    screenshots
  });
  app.quit();
}

function waitForLoad(window) {
  if (!window.webContents.isLoading()) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    window.webContents.once('did-finish-load', resolve);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function selectFixture(window, family, state) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const familySelect = document.querySelector('#presentation-family');
      const stateSelect = document.querySelector('#briefing-mode');
      familySelect.value = ${JSON.stringify(family)};
      stateSelect.value = ${JSON.stringify(state)};
      stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 350));
    })();
  `);
}

async function captureFixture(window, family, state, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const box = (selector) => {
        const node = document.querySelector(selector);
        if (!node) return null;
        const rect = node.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right };
      };
      const overflowing = Array.from(document.querySelectorAll('dd, strong, button, select, h1, p, span'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      const briefing = box('.briefing');
      const diagnostics = box('.diagnostics');
      const diagnosticsVisible = Boolean(diagnostics && diagnostics.bottom > diagnostics.top && diagnostics.right > diagnostics.left);
      return {
        family: ${JSON.stringify(family)},
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_family: ${JSON.stringify(family)},
        requested_state: ${JSON.stringify(state)},
        selected_family: document.querySelector('#presentation-family')?.value || null,
        selected_state: document.querySelector('#briefing-mode')?.value || null,
        selected_mode: document.querySelector('#briefing-mode')?.value || null,
        title: text('#briefing-title'),
        action_posture: text('#action-posture-label'),
        attention_count: text('#attention-count'),
        attention_items: Array.from(document.querySelectorAll('#attention-list li')).map((node) => node.textContent.trim()),
        status: text('#view-status'),
        readout_label: text('#state-label'),
        band_primary_value: text('#state-primary-value'),
        readout_summary: text('#state-summary'),
        readout_age: text('#state-age'),
        readout_basis: text('#state-basis'),
        band_marker: text('#state-marker'),
        source_coverage: text('#state-source-count'),
        source_drawer_visible: Boolean(document.querySelector('#source-detail-drawer')),
        source_detail_state: text('#source-detail-state'),
        certainty: text('#certainty'),
        freshness: text('#freshness'),
        sources: text('#sources'),
        mode_note: text('#briefing-mode-note'),
        material_harness_visible: Boolean(document.querySelector('#material-harness') && document.body.dataset.workshop === 'true'),
        material_state: text('#ttl-state'),
        material_chip: text('#ttl-chip'),
        visual_structure: {
          system_surface: Boolean(document.querySelector('.system-surface')),
          coordination_facts: Boolean(document.querySelector('.coordination-facts')),
          secondary_surfaces: document.querySelectorAll('.secondary-surface').length
        },
        frame_controls_visible: ['#pin-window', '#minimize-window', '#close-window'].every((selector) => {
          const node = document.querySelector(selector);
          return node && node.getBoundingClientRect().width > 0 && node.getBoundingClientRect().height > 0;
        }),
        diagnostics_visible: diagnosticsVisible,
        diagnostics_secondary: Boolean(briefing && diagnostics && briefing.top < diagnostics.top),
        briefing_before_diagnostics: Boolean(briefing && diagnostics && briefing.top < diagnostics.top),
        overflowing
      };
    })();
  `);
}

async function selectViewIntent(window, intent) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const button = document.querySelector(${JSON.stringify(`[data-view-intent-option="${intent}"]`)});
      if (!button) return;
      button.click();
      document.querySelector('.briefing')?.scrollIntoView({ block: 'start' });
      await new Promise((resolve) => setTimeout(resolve, 180));
    })();
  `);
}

async function captureViewIntent(window, family, state, intent, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const box = (selector) => {
        const node = document.querySelector(selector);
        if (!node) return null;
        const rect = node.getBoundingClientRect();
        return { top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right };
      };
      const overflowing = Array.from(document.querySelectorAll('dd, strong, button, select, h1, p, span'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      const briefing = box('.briefing');
      const diagnostics = box('.diagnostics');
      return {
        family: ${JSON.stringify(family)},
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_family: ${JSON.stringify(family)},
        requested_state: ${JSON.stringify(state)},
        requested_view_intent: ${JSON.stringify(intent)},
        selected_family: document.querySelector('#presentation-family')?.value || null,
        selected_state: document.querySelector('#briefing-mode')?.value || null,
        selected_view_intent: document.body.dataset.viewIntent || null,
        title: text('#briefing-title'),
        readout_label: text('#state-label'),
        band_primary_value: text('#state-primary-value'),
        readout_age: text('#state-age'),
        readout_basis: text('#state-basis'),
        band_marker: text('#state-marker'),
        source_coverage: text('#state-source-count'),
        basis_focus_visible: Boolean(document.querySelector('#basis-focus')),
        basis_focus_basis: text('#basis-focus-basis'),
        basis_focus_freshness: text('#basis-focus-freshness'),
        basis_focus_coverage: text('#basis-focus-coverage'),
        basis_focus_marker: text('#basis-focus-marker'),
        source_drawer_visible: Boolean(document.querySelector('#source-detail-drawer')),
        source_drawer_open: Boolean(document.querySelector('#source-detail-drawer')?.open),
        diagnostics_visible: Boolean(document.querySelector('.diagnostics')),
        diagnostics_secondary: Boolean(briefing && diagnostics && briefing.top < diagnostics.top),
        view_switch_labels: Array.from(document.querySelectorAll('[data-view-intent-option]')).map((node) => node.textContent.trim()),
        overflowing
      };
    })();
  `);
}

async function selectMaterialState(window, state) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const stateSelect = document.querySelector('#material-state');
      if (!stateSelect) return;
      stateSelect.value = ${JSON.stringify(state)};
      stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 180));
    })();
  `);
}

async function loadMaterialHarness(window, material) {
  await window.webContents.executeJavaScript(`
    (() => {
      state.materialHarness = ${JSON.stringify(material)};
      setupMaterialHarness();
    })();
  `);
  await delay(250);
}

async function selectLongTextMaterialState(window, state) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const stateSelect = document.querySelector('#material-state');
      if (!stateSelect) return;
      stateSelect.value = ${JSON.stringify(state)};
      stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
      const detailToggle = document.querySelector('#long-text-detail-toggle');
      if (detailToggle && detailToggle.getAttribute('aria-expanded') !== 'true') {
        detailToggle.click();
      }
      await new Promise((resolve) => setTimeout(resolve, 180));
    })();
  `);
}

async function selectAvailabilityMaterialState(window, state) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const stateSelect = document.querySelector('#material-state');
      if (!stateSelect) return;
      stateSelect.value = ${JSON.stringify(state)};
      stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
      const detailToggle = document.querySelector('#availability-detail-toggle');
      if (detailToggle && detailToggle.getAttribute('aria-expanded') !== 'true') {
        detailToggle.click();
      }
      await new Promise((resolve) => setTimeout(resolve, 180));
    })();
  `);
}

async function selectInstrumentReadoutPanelState(window, state) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const stateSelect = document.querySelector('#material-state');
      if (!stateSelect) return;
      stateSelect.value = ${JSON.stringify(state)};
      stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
      const detailToggle = document.querySelector('#instrument-readout-detail-toggle');
      if (detailToggle && detailToggle.getAttribute('aria-expanded') !== 'true') {
        detailToggle.click();
      }
      await new Promise((resolve) => setTimeout(resolve, 180));
    })();
  `);
}

async function captureMaterialState(window, state, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const overflowing = Array.from(document.querySelectorAll('#material-harness strong, #material-harness button, #material-harness select, #material-harness span'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      return {
        family: 'material',
        material_id: 'mat-authority-window-ttl-strip',
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_material_state: ${JSON.stringify(state)},
        selected_material_state: document.querySelector('#material-state')?.value || null,
        material_harness_visible: Boolean(document.querySelector('#material-harness') && document.body.dataset.workshop === 'true'),
        material_state: text('#ttl-state'),
        material_chip: text('#ttl-chip'),
        material_reason: text('#ttl-reason'),
        material_marker: text('#ttl-light'),
        material_detail_control_visible: Boolean(document.querySelector('#ttl-detail-toggle') && !document.querySelector('#ttl-detail-toggle').hidden),
        material_detail_rows: document.querySelectorAll('#ttl-detail div').length,
        overflowing
      };
    })();
  `);
}

async function captureLongTextMaterialState(window, state, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const overflowing = Array.from(document.querySelectorAll('#long-text-detail-block strong, #long-text-detail-block button, #long-text-detail-block span, #long-text-detail-block p, #long-text-detail-block code, #long-text-detail-block li'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      return {
        family: 'material',
        material_id: 'mat-long-text-detail-block',
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_material_state: ${JSON.stringify(state)},
        selected_material_state: document.querySelector('#material-state')?.value || null,
        material_harness_visible: Boolean(document.querySelector('#material-harness') && document.body.dataset.workshop === 'true'),
        material_state: text('#long-text-state'),
        material_chip: text('#long-text-cue'),
        material_reason: text('#material-harness-title'),
        material_marker: text('#long-text-marker'),
        material_detail_control_visible: Boolean(document.querySelector('#long-text-detail-toggle') && !document.querySelector('#long-text-detail-toggle').hidden),
        material_detail_rows: document.querySelectorAll('#long-text-detail .long-text-detail-row').length,
        long_text_detail_open: Boolean(!document.querySelector('#long-text-detail')?.hidden),
        overflowing
      };
    })();
  `);
}

async function captureAvailabilityMaterialState(window, state, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const overflowing = Array.from(document.querySelectorAll('#availability-reason-treatment strong, #availability-reason-treatment button, #availability-reason-treatment span'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      return {
        family: 'material',
        material_id: 'mat-availability-reason-treatment',
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_material_state: ${JSON.stringify(state)},
        selected_material_state: document.querySelector('#material-state')?.value || null,
        material_harness_visible: Boolean(document.querySelector('#material-harness') && document.body.dataset.workshop === 'true'),
        material_state: text('#availability-state'),
        material_chip: text('#availability-reason'),
        material_reason: text('#material-harness-title'),
        material_marker: text('#availability-marker'),
        material_detail_control_visible: Boolean(document.querySelector('#availability-detail-toggle') && !document.querySelector('#availability-detail-toggle').hidden),
        material_detail_rows: document.querySelectorAll('#availability-detail div').length,
        availability_detail_open: Boolean(!document.querySelector('#availability-detail')?.hidden),
        overflowing
      };
    })();
  `);
}

async function captureInstrumentReadoutPanelState(window, state, intent, viewport, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
  const screenshot = path.basename(outputPath);
  return window.webContents.executeJavaScript(`
    (() => {
      const text = (selector) => document.querySelector(selector)?.textContent?.trim() || '';
      const overflowing = Array.from(document.querySelectorAll('#instrument-readout-panel-output strong, #instrument-readout-panel-output button, #instrument-readout-panel-output span, #instrument-readout-panel-output p'))
        .filter((node) => node.scrollWidth > node.clientWidth + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      return {
        family: 'output',
        material_id: 'output-instrument-readout-panel',
        state: ${JSON.stringify(state)},
        viewport: ${JSON.stringify(viewport)},
        screenshot: ${JSON.stringify(screenshot)},
        requested_material_state: ${JSON.stringify(state)},
        selected_material_state: document.querySelector('#material-state')?.value || null,
        requested_view_intent: ${JSON.stringify(intent)},
        selected_view_intent: document.body.dataset.viewIntent || null,
        material_harness_visible: Boolean(document.querySelector('#material-harness') && document.body.dataset.workshop === 'true'),
        material_state: text('#instrument-readout-state'),
        material_chip: text('#instrument-readout-value'),
        material_reason: text('#instrument-readout-availability'),
        material_marker: text('#instrument-readout-light'),
        output_readout_label: text('#instrument-readout-label'),
        output_readout_age: text('#instrument-readout-age'),
        output_readout_basis: text('#instrument-readout-basis'),
        output_warning_marker: text('#instrument-readout-marker'),
        output_detail_control_visible: Boolean(document.querySelector('#instrument-readout-detail-toggle') && !document.querySelector('#instrument-readout-detail-toggle').hidden),
        output_detail_open: Boolean(!document.querySelector('#instrument-readout-detail')?.hidden),
        output_detail_rows: document.querySelectorAll('#instrument-readout-detail div').length,
        view_switch_labels: Array.from(document.querySelectorAll('[data-view-intent-option]')).map((node) => node.textContent.trim()),
        overflowing
      };
    })();
  `);
}

function visualSmokeBlockingFailures(observations) {
  return observations.flatMap((observation) => {
    const failures = [];
    if (observation.requested_material_state && observation.selected_material_state !== observation.requested_material_state) {
      failures.push({
        code: 'SELECTED_MATERIAL_STATE_MISMATCH',
        screenshot: observation.screenshot,
        requested_material_state: observation.requested_material_state,
        selected_material_state: observation.selected_material_state
      });
    }
    if (observation.requested_material_state && observation.material_harness_visible !== true) {
      failures.push({
        code: 'MATERIAL_HARNESS_NOT_VISIBLE',
        screenshot: observation.screenshot,
        requested_material_state: observation.requested_material_state
      });
    }
    if (observation.requested_material_state && (!observation.material_state || !observation.material_chip || !observation.material_reason)) {
      failures.push({
        code: 'MATERIAL_STATE_COPY_MISSING',
        screenshot: observation.screenshot,
        requested_material_state: observation.requested_material_state
      });
    }
    if (observation.requested_view_intent && observation.selected_view_intent !== observation.requested_view_intent) {
      failures.push({
        code: 'SELECTED_VIEW_INTENT_MISMATCH',
        screenshot: observation.screenshot,
        requested_view_intent: observation.requested_view_intent,
        selected_view_intent: observation.selected_view_intent
      });
    }
    if (observation.material_id === 'output-instrument-readout-panel' && (!observation.output_readout_label || !observation.output_readout_age || !observation.output_readout_basis || !observation.output_warning_marker)) {
      failures.push({
        code: 'OUTPUT_PANEL_COMPACT_COPY_MISSING',
        screenshot: observation.screenshot,
        requested_material_state: observation.requested_material_state
      });
    }
    if (observation.material_id === 'output-instrument-readout-panel' && (!observation.output_detail_control_visible || !observation.output_detail_open || observation.output_detail_rows < 4)) {
      failures.push({
        code: 'OUTPUT_PANEL_DETAIL_MISSING',
        screenshot: observation.screenshot,
        requested_material_state: observation.requested_material_state,
        output_detail_rows: observation.output_detail_rows
      });
    }
    if (observation.family !== 'output' && observation.requested_view_intent && !['Summary', 'Basis', 'Details'].every((label) => observation.view_switch_labels?.includes(label))) {
      failures.push({
        code: 'VIEW_INTENT_LABELS_MISSING',
        screenshot: observation.screenshot,
        labels: observation.view_switch_labels || []
      });
    }
    if (observation.family !== 'output' && observation.requested_view_intent && (!observation.title || !observation.readout_label || !observation.band_primary_value || !observation.readout_age || !observation.readout_basis || !observation.band_marker || !observation.source_coverage)) {
      failures.push({
        code: 'VIEW_INTENT_STABLE_COPY_MISSING',
        screenshot: observation.screenshot,
        requested_view_intent: observation.requested_view_intent
      });
    }
    if (observation.family !== 'output' && observation.requested_view_intent === 'basis' && (!observation.basis_focus_visible || !observation.basis_focus_basis || !observation.basis_focus_freshness || !observation.basis_focus_coverage || !observation.basis_focus_marker)) {
      failures.push({
        code: 'BASIS_FOCUS_COPY_MISSING',
        screenshot: observation.screenshot
      });
    }
    if (observation.family !== 'output' && observation.requested_view_intent === 'details' && (!observation.source_drawer_visible || !observation.source_drawer_open || observation.diagnostics_secondary !== true)) {
      failures.push({
        code: 'DETAILS_INSPECTION_PATH_MISSING',
        screenshot: observation.screenshot,
        source_drawer_visible: observation.source_drawer_visible,
        source_drawer_open: observation.source_drawer_open,
        diagnostics_secondary: observation.diagnostics_secondary
      });
    }
    if (observation.selected_family !== observation.requested_family) {
      failures.push({
        code: 'SELECTED_FAMILY_MISMATCH',
        screenshot: observation.screenshot,
        requested_family: observation.requested_family,
        selected_family: observation.selected_family
      });
    }
    if (observation.selected_state !== observation.requested_state) {
      failures.push({
        code: 'SELECTED_STATE_MISMATCH',
        screenshot: observation.screenshot,
        requested_state: observation.requested_state,
        selected_state: observation.selected_state
      });
    }
    if (Array.isArray(observation.overflowing) && observation.overflowing.length > 0) {
      failures.push({
        code: 'HORIZONTAL_OVERFLOW',
        screenshot: observation.screenshot,
        viewport: observation.viewport,
        overflowing: observation.overflowing
      });
    }
    return failures;
  });
}

function visualSmokeDir() {
  return process.env.AURA_LAB_VISUAL_SMOKE_DIR || path.join(process.cwd(), '.tmp', 'electron-visual-smoke');
}

function smokeUserDataDir() {
  return path.join(visualSmokeDir(), 'user-data');
}

function writeVisualSmokeResult(result) {
  const smokeDir = visualSmokeDir();
  fs.mkdirSync(smokeDir, { recursive: true });
  fs.writeFileSync(
    path.join(smokeDir, 'visual-smoke-result.json'),
    `${JSON.stringify(result, null, 2)}\n`,
    'utf8'
  );
}

app.whenReady().then(() => {
  registerElectronServiceHandlers(ipcMain, registry, () => ({ appName: APP_NAME }));
  registerFrameWindowHandlers(ipcMain, app, () => mainWindow);
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
