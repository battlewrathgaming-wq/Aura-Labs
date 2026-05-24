const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

function main() {
  const root = projectRoot();
  const main = read(path.join(root, 'src', 'main', 'main.js'));
  const frame = read(path.join(root, 'src', 'modules', 'Frame', 'windowShell.js'));
  const preload = read(path.join(root, 'src', 'main', 'preload.js'));
  const html = read(path.join(root, 'src', 'renderer', 'index.html'));
  const app = read(path.join(root, 'src', 'renderer', 'app.js'));
  const packageJson = read(path.join(root, 'package.json'));
  const smokeScript = read(path.join(root, 'scripts', 'electron-visual-smoke.ps1'));

  assert(main.includes("require('../modules/Frame')"), 'main process should create windows through Frame module');
  assert(main.includes('BrowserWindow'), 'main process should import BrowserWindow for activation checks');
  assert(main.includes('AURA_LAB_ELECTRON_VISUAL_SMOKE'), 'main process should expose explicit visual smoke flag');
  assert(main.includes('capturePage'), 'visual smoke should capture renderer screenshots');
  assert(main.includes('visual-smoke-result.json'), 'visual smoke should write a result artifact');
  assert(main.includes("'normal', 'empty', 'stale', 'failed', 'partial', 'long-text'"), 'visual smoke should exercise bridge test modes');
  assert(main.includes('mode-long-text.png'), 'visual smoke should capture long-text mode');
  assert(main.includes('visual_structure'), 'visual smoke should capture prototype visual structure');
  assert(main.includes('scrollWidth > node.clientWidth'), 'visual smoke should check horizontal text overflow');
  assert(packageJson.includes('"smoke:electron"'), 'package should expose project-local Electron smoke script');
  assert(smokeScript.includes('AURA_LAB_ELECTRON_VISUAL_SMOKE'), 'Electron smoke wrapper should set explicit smoke flag');
  assert(smokeScript.includes('AURA_LAB_VISUAL_SMOKE_DIR'), 'Electron smoke wrapper should set explicit smoke output dir');
  assert(smokeScript.includes('visual-smoke-result.json'), 'Electron smoke wrapper should validate result artifact');
  assert(smokeScript.includes('.tmp'), 'Electron smoke wrapper should keep artifacts under project .tmp');
  assert(!smokeScript.includes('F:'), 'Electron smoke wrapper should derive project paths instead of hardcoding drive paths');
  assert(frame.includes('frame: false'), 'Frame module should create frameless windows');
  assert(frame.includes('state.bounds && state.bounds.x !== null && state.bounds.y !== null'), 'Frame module should guard null bounds before assigning coordinates');
  assert(frame.includes('contextIsolation: true'), 'Frame module should enable context isolation');
  assert(frame.includes('nodeIntegration: false'), 'Frame module should disable node integration');
  assert(preload.includes('contextBridge.exposeInMainWorld'), 'preload should expose a narrow bridge');
  assert(preload.includes('aura:service:invoke'), 'preload should invoke service channel');
  assert(preload.includes('auraWindow'), 'preload should expose Frame window bridge');
  assert(preload.includes('aura:window:set-always-on-top'), 'preload should expose always-on-top IPC');
  assert(html.includes('frame-chrome'), 'renderer should include Frame chrome');
  assert(html.includes('pin-window'), 'renderer should include always-on-top control');
  assert(html.includes('system-surface'), 'renderer should include visual prototype surface class');
  assert(html.includes('coordination-facts'), 'renderer should include grouped coordination facts class');
  assert(html.includes('secondary-surface'), 'renderer should mark diagnostics as secondary visual surfaces');
  assert(html.includes('briefing-title'), 'renderer should include project briefing title target');
  assert(html.includes('action-posture'), 'renderer should include action posture target');
  assert(html.includes('trust-strip'), 'renderer should include top trust strip');
  assert(html.includes('attention-panel'), 'renderer should include needs attention panel');
  assert(html.includes('attention-list'), 'renderer should include attention list target');
  assert(html.includes('view-status'), 'renderer should include bridge state target');
  assert(html.includes('freshness'), 'renderer should include freshness target');
  assert(html.includes('briefing-mode'), 'renderer should include bridge test mode control');
  assert(html.includes('briefing-mode-note'), 'renderer should include bridge test mode note target');
  assert(html.includes('service-diagnostics'), 'renderer should demote registered services');
  assert(html.includes('data-field="current_executor"'), 'renderer should include current executor field');
  assert(html.includes('service-list'), 'renderer should include service list target');
  assert(app.includes('seed.readiness'), 'renderer should request seed readiness through services');
  assert(app.includes('aura.projectBriefing'), 'renderer should request project briefing through services');
  assert(app.includes('loadBriefing'), 'renderer should load briefing through bridge helper');
  assert(app.includes('setupBriefingModeControl'), 'renderer should setup bridge test mode control');
  assert(app.includes('actionPostureLabel'), 'renderer should render action posture');
  assert(app.includes('actionPostureDetail'), 'renderer should render action posture detail');
  assert(app.includes('renderAttention'), 'renderer should render attention items');
  assert(app.includes('No attention items reported'), 'renderer should include empty attention copy');
  assert(app.includes('Not provided'), 'renderer should include missing attention copy');
  assert(app.includes("mode: state.briefingMode"), 'renderer should invoke briefing modes through bridge payload');
  assert(app.includes("select.addEventListener('change'"), 'renderer should repopulate briefing when mode changes');
  assert(app.includes('loading'), 'renderer should handle loading state');
  assert(app.includes('empty'), 'renderer should handle empty state');
  assert(app.includes('populated'), 'renderer should handle populated state');
  assert(app.includes('stale'), 'renderer should handle stale state');
  assert(app.includes('failed'), 'renderer should handle failed state');
  assert(app.includes('partial'), 'renderer should handle partial state');
  assert(app.includes('Verified from source'), 'renderer should include source certainty language');
  assert(app.includes('Not provided'), 'renderer should include missing optional value language');
  assert(app.includes('Unavailable'), 'renderer should include unavailable value language');
  assert(main.includes('action_posture'), 'visual smoke should capture action posture');
  assert(main.includes('attention_items'), 'visual smoke should capture attention items');
  assert(app.includes('window.auraWindow.setAlwaysOnTop'), 'renderer should toggle always-on-top through Frame bridge');
  assert(!app.includes('innerHTML'), 'renderer should not use innerHTML in the seed shell');
  assert(app.includes('textContent'), 'renderer should render dynamic service data as textContent');

  console.log('renderer shell verified');
}

function read(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

main();
