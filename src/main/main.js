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
    backgroundColor: '#f5f7f8',
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

  const modes = ['normal', 'empty', 'stale', 'failed', 'partial'];
  const observations = [];
  observations.push(await captureMode(window, 'normal', path.join(smokeDir, 'mode-normal.png')));

  for (const mode of modes.slice(1)) {
    await selectMode(window, mode);
    observations.push(await captureMode(window, mode, path.join(smokeDir, `mode-${mode}.png`)));
  }

  window.setSize(720, 640);
  await delay(250);
  const narrow = await captureMode(window, 'partial', path.join(smokeDir, 'narrow-partial.png'));

  writeVisualSmokeResult({
    status: 'passed',
    checked_at: new Date().toISOString(),
    smoke_dir: smokeDir,
    modes_checked: modes,
    observations,
    narrow,
    screenshots: [
      'mode-normal.png',
      'mode-empty.png',
      'mode-stale.png',
      'mode-failed.png',
      'mode-partial.png',
      'narrow-partial.png'
    ]
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

async function selectMode(window, mode) {
  await window.webContents.executeJavaScript(`
    (async () => {
      const select = document.querySelector('#briefing-mode');
      select.value = ${JSON.stringify(mode)};
      select.dispatchEvent(new Event('change', { bubbles: true }));
      await new Promise((resolve) => setTimeout(resolve, 350));
    })();
  `);
}

async function captureMode(window, mode, outputPath) {
  const image = await window.webContents.capturePage();
  fs.writeFileSync(outputPath, image.toPNG());
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
        .filter((node) => node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1)
        .map((node) => ({
          tag: node.tagName.toLowerCase(),
          id: node.id || null,
          text: node.textContent.trim().slice(0, 80)
        }));
      const briefing = box('.briefing');
      const diagnostics = box('.diagnostics');
      return {
        requested_mode: ${JSON.stringify(mode)},
        selected_mode: document.querySelector('#briefing-mode')?.value || null,
        title: text('#briefing-title'),
        action_posture: text('#action-posture-label'),
        attention_count: text('#attention-count'),
        attention_items: Array.from(document.querySelectorAll('#attention-list li')).map((node) => node.textContent.trim()),
        status: text('#view-status'),
        certainty: text('#certainty'),
        freshness: text('#freshness'),
        sources: text('#sources'),
        mode_note: text('#briefing-mode-note'),
        frame_controls_visible: ['#pin-window', '#minimize-window', '#close-window'].every((selector) => {
          const node = document.querySelector(selector);
          return node && node.getBoundingClientRect().width > 0 && node.getBoundingClientRect().height > 0;
        }),
        briefing_before_diagnostics: Boolean(briefing && diagnostics && briefing.top < diagnostics.top),
        overflowing
      };
    })();
  `);
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
