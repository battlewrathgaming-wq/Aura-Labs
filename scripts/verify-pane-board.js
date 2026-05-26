const fs = require('node:fs');
const path = require('node:path');
const { projectRoot } = require('../src/util/tempPaths');

function main() {
  const root = projectRoot();
  const main = read(path.join(root, 'src', 'main', 'main.js'));
  const paneBoardMain = read(path.join(root, 'src', 'main', 'labTooling', 'paneBoard', 'paneBoard.js'));
  const labToolingReadme = read(path.join(root, 'src', 'main', 'labTooling', 'README.md'));
  const paneBoardMainReadme = read(path.join(root, 'src', 'main', 'labTooling', 'paneBoard', 'README.md'));
  const paneBoardRendererReadme = read(path.join(root, 'src', 'renderer', 'pane-board', 'README.md'));
  const preload = read(path.join(root, 'src', 'main', 'preload.js'));
  const html = read(path.join(root, 'src', 'renderer', 'pane-board', 'index.html'));
  const app = read(path.join(root, 'src', 'renderer', 'pane-board', 'pane-board.js'));
  const styles = read(path.join(root, 'src', 'renderer', 'pane-board', 'pane-board.css'));
  const packageJson = read(path.join(root, 'package.json'));
  const smokeScript = read(path.join(root, 'scripts', 'pane-board-smoke.ps1'));
  const current = JSON.parse(read(path.join(root, 'workspace', 'pane-board', 'current-board.json')));

  assert(main.includes('AURA_LAB_PANE_BOARD'), 'main process should gate Pane Board behind an explicit Lab-only flag');
  assert(main.includes('AURA_LAB_PANE_BOARD_SMOKE'), 'main process should expose an explicit Pane Board smoke flag');
  assert(main.includes("require('./labTooling/paneBoard/paneBoard')"), 'main process should load Pane Board through the Lab-only tooling boundary');
  assert(!main.includes("renderer', 'pane-board', 'index.html'"), 'normal main process body should not own the Pane Board renderer path');
  assert(!main.includes('board-events.ndjson'), 'normal main process body should not own Pane Board persistence details');
  assert(paneBoardMain.includes("renderer', 'pane-board', 'index.html'"), 'Pane Board module should load a separate renderer entry');
  assert(paneBoardMain.includes('aura:pane-board:load'), 'Pane Board module should expose load IPC');
  assert(paneBoardMain.includes('aura:pane-board:save'), 'Pane Board module should expose save IPC');
  assert(paneBoardMain.includes('aura:pane-board:snapshot'), 'Pane Board module should expose snapshot IPC');
  assert(paneBoardMain.includes('aura:pane-board:export-png'), 'Pane Board module should expose PNG export IPC');
  assert(paneBoardMain.includes('board-events.ndjson'), 'Pane Board module should append an event log');
  assert(paneBoardMain.includes('Agent proposals must include basedOn.'), 'agent proposals should require basedOn');
  assert(paneBoardMain.includes('capturePage'), 'Pane Board module should export PNG through Electron capturePage');
  assert(paneBoardMain.includes('pane-board-smoke-result.json'), 'Pane Board smoke should write a result artifact');
  assert(paneBoardMain.includes('return normalizePaneBoard(JSON.parse'), 'Pane Board load should normalize current-board state');
  assert(paneBoardMain.includes('maxGridW') && paneBoardMain.includes('maxGridH'), 'Pane Board normalization should clamp panes to the active viewport grid');
  assert(paneBoardMain.includes('uniquePaneId'), 'Pane Board normalization should keep pane ids unique');
  assert(paneBoardMain.includes('uniqueLayoutPath(targetDir, snapshot.id)'), 'Pane Board snapshots should use unique layout paths');
  assert(packageJson.includes('"smoke:pane-board"'), 'package should expose Pane Board smoke');
  assert(smokeScript.includes('AURA_LAB_PANE_BOARD'), 'Pane Board smoke should set explicit Pane Board flag');
  assert(smokeScript.includes('AURA_LAB_PANE_BOARD_SMOKE'), 'Pane Board smoke should set explicit Pane Board smoke flag');
  assert(labToolingReadme.includes('not part of the portable presentation head'), 'Lab tooling README should mark tooling as outside the portable presentation head');
  assert(labToolingReadme.includes('src/main/labTooling/paneBoard/paneBoard.js'), 'Lab tooling README should point to the nested Pane Board module');
  assert(paneBoardMainReadme.includes('go the other way'), 'Pane Board main tooling README should point away from tooling for product-facing code');
  assert(paneBoardRendererReadme.includes('This renderer is not the portable presentation offer'), 'Pane Board renderer README should mark renderer as Lab-only tooling');
  assert(preload.includes("process.env.AURA_LAB_PANE_BOARD === '1'"), 'preload should gate the Pane Board API behind the Pane Board launch flag');
  assert(preload.includes('auraPaneBoard'), 'preload should expose a narrow Pane Board API for Pane Board mode');
  assert(preload.includes('ipcRenderer.invoke'), 'Pane Board API should stay behind IPC');
  assert(html.includes('board-canvas'), 'Pane Board should include a visible canvas');
  assert(html.includes('960 x 640'), 'Pane Board should expose the 960x640 preset');
  assert(html.includes('720 x 640'), 'Pane Board should expose the 720x640 preset');
  assert(html.includes('grab-state'), 'Pane Board should include a grab state action');
  assert(html.includes('snapshot-based-on'), 'Pane Board should include basedOn input for proposals');
  assert(html.includes('screen-note-text'), 'Pane Board should include an on-screen note surface');
  assert(app.includes('Pointer Events') || app.includes('pointerdown'), 'Pane Board should use pointer events for drag/resize');
  assert(app.includes('resize-handle'), 'Pane Board should include resize behavior');
  assert(app.includes('GRID = 8'), 'Pane Board should use an 8px snap grid');
  assert(app.includes('auraPaneBoard.save'), 'Pane Board should save the current board');
  assert(app.includes('auraPaneBoard.snapshot'), 'Pane Board should snapshot current board');
  assert(app.includes('auraPaneBoard.exportPng'), 'Pane Board should export PNG');
  assert(!app.includes('boardState.board = result.board'), 'snapshot creation should not replace the current board with a proposal');
  assert(app.includes('screen-note-edited'), 'Pane Board should persist on-screen note edits');
  assert(!app.includes('innerHTML'), 'Pane Board renderer should avoid innerHTML');
  assert(styles.includes('.board-canvas'), 'Pane Board styles should render the board canvas');
  assert(styles.includes('.screen-note'), 'Pane Board styles should render the screen note surface');
  assert(styles.includes('8px 8px'), 'Pane Board styles should show the 8px grid');
  assert(styles.includes('.resize-handle'), 'Pane Board styles should include resize handle treatment');
  assert(current.viewport.grid === 8, 'current board should store grid size 8');
  assert(['960x640', '720x640'].includes(current.viewport.preset), 'current board should use an accepted viewport preset');
  assert(Array.isArray(current.panes) && current.panes.length > 0, 'current board should include panes');
  assert(['human-sketch', 'agent-proposal', 'human-accepted', 'superseded', 'parked', 'rejected'].includes(current.status), 'current board should use an accepted board status');
  assert(current.source && current.source.project === 'Aura Lab', 'current board should keep source metadata');
  assert(Object.prototype.hasOwnProperty.call(current.source, 'basedOn'), 'current board source should include basedOn');
  assert(current.review && typeof current.review.humanIntent === 'string', 'current board should preserve review humanIntent');
  assert(typeof current.review.agentNotes === 'string', 'current board should preserve review agentNotes');
  assert(typeof current.review.acceptedByHuman === 'boolean', 'current board should preserve review acceptedByHuman');
  assert(typeof current.screenNote === 'string', 'current board should include screen note text');
  assert(typeof current.updatedAt === 'string' && !Number.isNaN(Date.parse(current.updatedAt)), 'current board should include a parseable updatedAt');
  const maxGridW = Math.floor(current.viewport.width / current.viewport.grid);
  const maxGridH = Math.floor(current.viewport.height / current.viewport.grid);
  const paneIds = new Set();
  for (const pane of current.panes) {
    assert(pane.grid && Number.isInteger(pane.grid.x) && Number.isInteger(pane.grid.y) && Number.isInteger(pane.grid.w) && Number.isInteger(pane.grid.h), `pane ${pane.id} should use integer grid units`);
    assert(!paneIds.has(pane.id), `pane id ${pane.id} should be unique`);
    paneIds.add(pane.id);
    assert(pane.grid.x >= 0 && pane.grid.y >= 0, `pane ${pane.id} should not use negative grid coordinates`);
    assert(pane.grid.w >= 4 && pane.grid.h >= 4, `pane ${pane.id} should keep minimum grid size`);
    assert(pane.grid.x + pane.grid.w <= maxGridW, `pane ${pane.id} should fit within viewport width`);
    assert(pane.grid.y + pane.grid.h <= maxGridH, `pane ${pane.id} should fit within viewport height`);
    assert(typeof pane.label === 'string' && pane.label.length > 0, `pane ${pane.id} should preserve label`);
    assert(typeof pane.notes === 'string', `pane ${pane.id} should preserve notes`);
    assert(typeof pane.locked === 'boolean', `pane ${pane.id} should preserve lock state`);
    assert(pane.intent && typeof pane.intent.notes === 'string', `pane ${pane.id} should preserve intent notes`);
  }
  verifyAgentProposalBoundary(root);

  console.log('Pane Board verified');
}

function verifyAgentProposalBoundary(root) {
  const proposalDir = path.join(root, 'workspace', 'pane-board', 'agent-proposals');
  const humanDir = path.join(root, 'workspace', 'pane-board', 'human-sketches');
  const proposals = fs.existsSync(proposalDir)
    ? fs.readdirSync(proposalDir).filter((entry) => entry.endsWith('.json'))
    : [];
  assert(proposals.length > 0, 'Pane Board should have inspectable agent proposal artifacts');
  for (const filename of proposals) {
    const proposal = JSON.parse(read(path.join(proposalDir, filename)));
    assert(proposal.status === 'agent-proposal', `agent proposal ${filename} should keep agent-proposal status`);
    assert(proposal.source?.createdBy === 'agent', `agent proposal ${filename} should be agent-authored`);
    assert(typeof proposal.source?.basedOn === 'string' && proposal.source.basedOn.length > 0, `agent proposal ${filename} should include basedOn`);
  }
  const proposalNames = new Set(proposals);
  const humanSketches = fs.existsSync(humanDir)
    ? fs.readdirSync(humanDir).filter((entry) => entry.endsWith('.json'))
    : [];
  for (const filename of humanSketches) {
    assert(!proposalNames.has(filename), `agent proposal should not share a filename with human sketch ${filename}`);
  }
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
