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
  window.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'));
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

  const briefingStates = ['normal', 'empty', 'stale', 'failed', 'partial', 'long-text'];
  const neutralSeedStates = ['normal', 'empty', 'failed', 'long-text'];
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
      'neutral-seed': neutralSeedStates
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
        readout_summary: text('#state-summary'),
        readout_age: text('#state-age'),
        source_coverage: text('#state-source-count'),
        source_drawer_visible: Boolean(document.querySelector('#source-detail-drawer')),
        source_detail_state: text('#source-detail-state'),
        certainty: text('#certainty'),
        freshness: text('#freshness'),
        sources: text('#sources'),
        mode_note: text('#briefing-mode-note'),
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

function visualSmokeBlockingFailures(observations) {
  return observations.flatMap((observation) => {
    const failures = [];
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
