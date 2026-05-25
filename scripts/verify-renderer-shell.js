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
  assert(main.includes('AURA_LAB_WORKSHOP_MODE'), 'main process should expose explicit workshop mode flag');
  assert(main.includes('AURA_LAB_MATERIAL_HARNESS'), 'main process should expose explicit material harness flag');
  assert(main.includes("material: process.env.AURA_LAB_MATERIAL_HARNESS || 'mat-authority-window-ttl-strip'"), 'main process should pass material harness only through workshop query');
  assert(main.includes('capturePage'), 'visual smoke should capture renderer screenshots');
  assert(main.includes('visual-smoke-result.json'), 'visual smoke should write a result artifact');
  assert(main.includes("['normal', 'empty', 'stale', 'failed', 'partial', 'long-text']"), 'visual smoke should exercise briefing states');
  assert(main.includes("['normal', 'empty', 'failed', 'long-text']"), 'visual smoke should exercise neutral seed states');
  assert(main.includes('family-neutral-seed-state-${state}.png'), 'visual smoke should capture neutral seed state screenshots');
  assert(main.includes('family-briefing-state-partial-narrow.png'), 'visual smoke should capture narrow briefing partial state');
  assert(main.includes('families_checked'), 'visual smoke should report checked families');
  assert(main.includes('states_checked'), 'visual smoke should report checked states');
  assert(main.includes('viewports_checked'), 'visual smoke should report checked viewports');
  assert(main.includes('visual_structure'), 'visual smoke should capture prototype visual structure');
  assert(main.includes('readout_label'), 'visual smoke should capture Bridge State Readout label');
  assert(main.includes('source_drawer_visible'), 'visual smoke should capture Readout Detail drawer presence');
  assert(main.includes('scrollWidth > node.clientWidth'), 'visual smoke should check horizontal text overflow');
  assert(main.includes('visualSmokeBlockingFailures'), 'visual smoke should evaluate review-blocking observations before reporting pass');
  assert(main.includes('blocking_failures'), 'visual smoke result should report blocking failures');
  assert(main.includes('SELECTED_FAMILY_MISMATCH'), 'visual smoke should block selected family mismatch');
  assert(main.includes('SELECTED_STATE_MISMATCH'), 'visual smoke should block selected state mismatch');
  assert(main.includes('HORIZONTAL_OVERFLOW'), 'visual smoke should block horizontal overflow');
  assert(packageJson.includes('"smoke:electron"'), 'package should expose project-local Electron smoke script');
  assert(smokeScript.includes('AURA_LAB_ELECTRON_VISUAL_SMOKE'), 'Electron smoke wrapper should set explicit smoke flag');
  assert(smokeScript.includes('AURA_LAB_WORKSHOP_MODE'), 'Electron smoke wrapper should set explicit workshop flag');
  assert(smokeScript.includes('AURA_LAB_MATERIAL_HARNESS'), 'Electron smoke wrapper should set explicit material harness flag');
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
  assert(html.includes('data-workshop="false"'), 'normal renderer launch should default workshop mode off');
  assert(html.includes('workshop-only'), 'renderer should mark workshop controls separately from offered surface');
  assert(html.includes('pin-window'), 'renderer should include always-on-top control');
  assert(html.includes('system-surface'), 'renderer should include visual prototype surface class');
  assert(html.includes('coordination-facts'), 'renderer should include grouped coordination facts class');
  assert(html.includes('secondary-surface'), 'renderer should mark diagnostics as secondary visual surfaces');
  assert(html.includes('briefing-title'), 'renderer should include project briefing title target');
  assert(html.includes('action-posture'), 'renderer should include action posture target');
  assert(html.includes('trust-strip'), 'renderer should include top trust strip');
  assert(html.includes('state-readout'), 'renderer should include Bridge State Readout strip');
  assert(html.includes('instrument-status-band'), 'renderer should mark state readout as Instrument Status Band prototype');
  assert(html.includes('Bridge State Readout'), 'renderer should label the readout as Bridge State Readout');
  assert(html.includes('state-primary-value'), 'renderer should include primary value slot for the instrument band');
  assert(html.includes('state-basis'), 'renderer should include basis slot for the instrument band');
  assert(html.includes('state-marker'), 'renderer should include gap and warning marker slot for the instrument band');
  assert(html.includes('state-pips'), 'renderer should include state pips');
  assert(html.includes('source-detail-drawer'), 'renderer should include readout detail drawer compatibility target');
  assert(html.includes('Readout Detail'), 'renderer should label visible drawer as Readout Detail');
  assert(!html.includes('Source Detail'), 'renderer should not keep stale visible Source Detail label');
  assert(html.includes('attention-panel'), 'renderer should include needs attention panel');
  assert(html.includes('attention-list'), 'renderer should include attention list target');
  assert(html.includes('view-status'), 'renderer should include bridge state target');
  assert(html.includes('freshness'), 'renderer should include freshness target');
  assert(html.includes('briefing-mode'), 'renderer should include bridge test mode control');
  assert(html.includes('presentation-family'), 'renderer should include presentation family control');
  assert(html.includes('Presentation family'), 'renderer should label family control as presentation family');
  assert(html.includes('Review state'), 'renderer should label state control as review state');
  assert(html.includes('briefing-mode-note'), 'renderer should include bridge test mode note target');
  assert(html.includes('material-harness'), 'renderer should include isolated material harness surface');
  assert(html.includes('mat-authority-window-ttl-strip') || app.includes('mat-authority-window-ttl-strip'), 'renderer should support the authority window TTL material id');
  assert(html.includes('Authority Window TTL Strip'), 'renderer should label the material harness');
  assert(html.includes('ttl-detail-toggle'), 'renderer should include material detail reveal control');
  assert(html.includes('service-diagnostics'), 'renderer should demote registered services');
  assert(html.includes('data-field="current_executor"'), 'renderer should include current executor field');
  assert(html.includes('service-list'), 'renderer should include service list target');
  assert(app.includes('seed.readiness'), 'renderer should request seed readiness through services');
  assert(app.includes('setupWorkshopMode'), 'renderer should gate workshop mode from query params');
  assert(app.includes('document.body.dataset.workshop'), 'renderer should expose workshop mode through body data only');
  assert(app.includes('setupMaterialHarness'), 'renderer should initialize the material harness only in workshop mode');
  assert(app.includes('authorityWindowStates'), 'renderer should define staged authority window material states');
  assert(app.includes('renderAuthorityWindowMaterial'), 'renderer should render staged authority window material');
  assert(app.includes('toggleMaterialDetail'), 'renderer should support material detail reveal');
  assert(app.includes('aura.presentationFixture'), 'renderer should request family fixtures through services');
  assert(app.includes('loadBriefing'), 'renderer should load briefing through bridge helper');
  assert(app.includes('setupFixtureControls'), 'renderer should setup family/state controls');
  assert(app.includes('presentationFamily'), 'renderer should track presentation family separately');
  assert(app.includes('actionPostureLabel'), 'renderer should render action posture');
  assert(app.includes('actionPostureDetail'), 'renderer should render action posture detail');
  assert(app.includes('renderBridgeStateReadout'), 'renderer should render Bridge State Readout');
  assert(app.includes('primaryValueCopy'), 'renderer should derive Instrument Status Band primary value');
  assert(app.includes('bandMarkerCopy'), 'renderer should derive Instrument Status Band marker copy');
  assert(app.includes('bandMarkerTone'), 'renderer should derive non-color-only marker tone');
  assert(app.includes('renderSourceDrawer'), 'renderer should render readout detail drawer through existing compatibility function');
  assert(app.includes('Fallback basis active'), 'renderer should expose fallback marker copy');
  assert(app.includes('Band marker'), 'Readout Detail should include band marker detail');
  assert(app.includes('UPDATING'), 'renderer should map loading state to updating language');
  assert(app.includes('NO DATA'), 'renderer should map empty state to no-data language');
  assert(app.includes('Last successful read'), 'renderer should map stale state to age language');
  assert(app.includes('renderAttention'), 'renderer should render attention items');
  assert(app.includes('No attention items shown'), 'renderer should include empty attention copy');
  assert(app.includes('Not provided'), 'renderer should include missing attention copy');
  assert(app.includes('state: state.briefingMode'), 'renderer should invoke review state through bridge payload');
  assert(app.includes("stateSelect.addEventListener('change'"), 'renderer should repopulate fixture when review state changes');
  assert(app.includes("familySelect.addEventListener('change'"), 'renderer should repopulate fixture when family changes');
  assert(app.includes('loading'), 'renderer should handle loading state');
  assert(app.includes('empty'), 'renderer should handle empty state');
  assert(app.includes('populated'), 'renderer should handle populated state');
  assert(app.includes('stale'), 'renderer should handle stale state');
  assert(app.includes('failed'), 'renderer should handle failed state');
  assert(app.includes('partial'), 'renderer should handle partial state');
  assert(app.includes('fallback'), 'renderer should handle fallback tone');
  assert(app.includes('Read from source'), 'renderer should include source basis language');
  assert(app.includes('Not provided'), 'renderer should include missing optional value language');
  assert(app.includes('Unavailable'), 'renderer should include unavailable value language');
  assert(main.includes('action_posture'), 'visual smoke should capture action posture');
  assert(main.includes('attention_items'), 'visual smoke should capture attention items');
  assert(main.includes('material_harness_visible'), 'visual smoke should capture workshop material harness visibility');
  assert(main.includes('material_state'), 'visual smoke should capture material state');
  assert(main.includes('material_reason'), 'visual smoke should capture material reason');
  assert(main.includes('material-authority-window-ttl-strip-state-${state}.png'), 'visual smoke should capture each material state');
  assert(main.includes('SELECTED_MATERIAL_STATE_MISMATCH'), 'visual smoke should block material state mismatch');
  assert(main.includes('MATERIAL_STATE_COPY_MISSING'), 'visual smoke should block missing material state copy');
  assert(app.includes('window.auraWindow.setAlwaysOnTop'), 'renderer should toggle always-on-top through Frame bridge');
  assert(!app.includes('innerHTML'), 'renderer should not use innerHTML in the seed shell');
  assert(app.includes('textContent'), 'renderer should render dynamic service data as textContent');
  for (const materialState of ['idle', 'active-window', 'captured', 'timeout', 'cooldown', 'blocked', 'manual-path']) {
    assert(app.includes(`id: '${materialState}'`), `renderer should define material state ${materialState}`);
  }
  assert(app.includes("chip: 'TTL 00:03'"), 'renderer should show active-window TTL timing');
  assert(app.includes("chip: 'Next in 00:05'"), 'renderer should show cooldown timing');
  assert(app.includes("marker: 'ON'"), 'renderer should include non-color-only active material marker');
  assert(app.includes('materialState.detail.length > 0'), 'renderer should hide material detail control when no detail exists');

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
