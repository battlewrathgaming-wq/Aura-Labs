const path = require('node:path');
const fs = require('node:fs');
const { createFrameWindow } = require('../../../modules/Frame');

const PANE_BOARD_ROOT = path.join(process.cwd(), 'workspace', 'pane-board');

function isPaneBoardMode() {
  return process.env.AURA_LAB_PANE_BOARD === '1';
}

function isPaneBoardSmokeMode() {
  return process.env.AURA_LAB_PANE_BOARD_SMOKE === '1';
}

function createPaneBoardWindow({ app, preload, setMainWindow, waitForLoad, delay }) {
  const window = createFrameWindow(app, {
    width: 960,
    height: 640,
    minWidth: 720,
    minHeight: 640,
    title: 'Aura Lab Pane Board',
    preload,
    backgroundColor: '#101416',
    defaultAlwaysOnTop: false
  });

  setMainWindow(window);
  window.webContents.on('render-process-gone', (_event, details) => {
    if (isPaneBoardSmokeMode()) {
      writePaneBoardSmokeResult({
        status: 'failed',
        message: `Pane Board renderer exited: ${details.reason}`,
        checked_at: new Date().toISOString(),
        details
      });
    }
  });
  window.loadFile(path.join(__dirname, '..', '..', '..', 'renderer', 'pane-board', 'index.html')).catch((error) => {
    if (isPaneBoardSmokeMode()) {
      writePaneBoardSmokeResult({
        status: 'failed',
        message: error.message,
        checked_at: new Date().toISOString()
      });
    }
    app.quit();
  });
  if (isPaneBoardSmokeMode()) {
    runPaneBoardSmoke({ app, window, waitForLoad, delay }).catch((error) => {
      writePaneBoardSmokeResult({
        status: 'failed',
        message: error.message,
        checked_at: new Date().toISOString()
      });
      app.quit();
    });
  }
  return window;
}

function registerPaneBoardHandlers(ipcMain, getWindow) {
  ipcMain.handle('aura:pane-board:load', () => readPaneBoard());
  ipcMain.handle('aura:pane-board:revision', () => paneBoardRevision());
  ipcMain.handle('aura:pane-board:save', (_event, request = {}) => writePaneBoard(request.board, request.reason));
  ipcMain.handle('aura:pane-board:snapshot', (_event, request = {}) => snapshotPaneBoard(request));
  ipcMain.handle('aura:pane-board:export-png', (_event, request = {}) => exportPaneBoardPng(getWindow(), request));
  ipcMain.handle('aura:pane-board:capture', (_event, request = {}) => capturePaneBoard(getWindow(), request));
}

async function runPaneBoardSmoke({ app, window, waitForLoad, delay }) {
  await waitForLoad(window);
  await delay(350);
  const board = readPaneBoard();
  const smokeBoard = {
    ...board,
    title: 'Pane Board V1 smoke sketch',
    source: {
      ...(board.source || {}),
      basedOn: board.id
    },
    panes: board.panes.map((pane, index) => index === 0
      ? {
          ...pane,
          grid: {
            ...pane.grid,
            x: pane.grid.x + 1,
            y: pane.grid.y + 1
          }
        }
      : pane)
  };
  const saved = writePaneBoard(smokeBoard, 'pane-board-smoke-save');
  const snapshot = snapshotPaneBoard({
    board: saved,
    status: 'agent-proposal',
    title: 'Pane Board V1 smoke proposal',
    basedOn: board.id
  });
  await window.webContents.executeJavaScript(`
    window.auraPaneBoard.load().then((board) => {
      document.querySelector('#board-title').value = board.title;
    });
  `);
  const png = await exportPaneBoardPng(window, { board: snapshot.board, title: 'pane-board-smoke' });
  const capture = await capturePaneBoard(window, {
    board: saved,
    title: 'Pane Board V1 smoke resting capture',
    sourceArtifact: 'pane-board-smoke',
    humanSignal: 'Smoke capture checks board-local resting state.',
    includeScreenshot: true
  });
  writePaneBoard(board, 'pane-board-smoke-restore');
  const result = {
    status: 'passed',
    message: 'Pane Board smoke passed.',
    checked_at: new Date().toISOString(),
    current_board: path.relative(process.cwd(), paneBoardPaths().current),
    snapshot: path.relative(process.cwd(), snapshot.path),
    png: path.relative(process.cwd(), png.path),
    capture: path.relative(process.cwd(), capture.path),
    capture_screenshot: capture.capture.screenshot,
    board_id: snapshot.board.id,
    based_on: snapshot.board.source.basedOn,
    pane_count: snapshot.board.panes.length
  };
  writePaneBoardSmokeResult(result);
  app.quit();
}

function writePaneBoardSmokeResult(result) {
  const dir = path.join(process.cwd(), '.tmp', 'pane-board-smoke');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'pane-board-smoke-result.json'), `${JSON.stringify(result, null, 2)}\n`, 'utf8');
}

function paneBoardPaths() {
  return {
    root: PANE_BOARD_ROOT,
    current: path.join(PANE_BOARD_ROOT, 'current-board.json'),
    events: path.join(PANE_BOARD_ROOT, 'board-events.ndjson'),
    human: path.join(PANE_BOARD_ROOT, 'human-sketches'),
    agent: path.join(PANE_BOARD_ROOT, 'agent-proposals'),
    accepted: path.join(PANE_BOARD_ROOT, 'accepted-layouts'),
    captures: path.join(PANE_BOARD_ROOT, 'captures'),
    screenshots: path.join(PANE_BOARD_ROOT, 'screenshots'),
    materials: path.join(PANE_BOARD_ROOT, 'materials')
  };
}

function ensurePaneBoardDirs() {
  const paths = paneBoardPaths();
  for (const dir of [paths.root, paths.human, paths.agent, paths.accepted, paths.captures, paths.screenshots, paths.materials]) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return paths;
}

function paneBoardRevision() {
  const paths = ensurePaneBoardDirs();
  if (!fs.existsSync(paths.current)) {
    return {
      exists: false,
      path: path.relative(process.cwd(), paths.current),
      mtimeMs: 0,
      size: 0
    };
  }
  const stat = fs.statSync(paths.current);
  return {
    exists: true,
    path: path.relative(process.cwd(), paths.current),
    mtimeMs: stat.mtimeMs,
    size: stat.size
  };
}

function readPaneBoard() {
  const paths = ensurePaneBoardDirs();
  if (fs.existsSync(paths.current)) {
    return normalizePaneBoard(JSON.parse(fs.readFileSync(paths.current, 'utf8')));
  }
  const board = defaultPaneBoard();
  writePaneBoard(board, 'create-default');
  return board;
}

function writePaneBoard(board, reason = 'save') {
  const paths = ensurePaneBoardDirs();
  const cleanBoard = normalizePaneBoard(board);
  validatePaneBoardOwnership(cleanBoard);
  fs.writeFileSync(paths.current, `${JSON.stringify(cleanBoard, null, 2)}\n`, 'utf8');
  appendPaneBoardEvent({
    type: 'board-saved',
    reason,
    boardId: cleanBoard.id,
    paneCount: cleanBoard.panes.length,
    status: cleanBoard.status
  });
  return cleanBoard;
}

function snapshotPaneBoard({ board, status, title, basedOn } = {}) {
  const paths = ensurePaneBoardDirs();
  const cleanBoard = normalizePaneBoard(board || readPaneBoard());
  const nextStatus = paneBoardStatus(status);
  if (nextStatus === 'agent-proposal' && !basedOn && !cleanBoard.source?.basedOn) {
    const error = new Error('Agent proposals must include basedOn.');
    error.code = 'PANE_BOARD_BASED_ON_REQUIRED';
    throw error;
  }
  const snapshot = {
    ...cleanBoard,
    id: layoutId(title || cleanBoard.title || nextStatus),
    title: String(title || cleanBoard.title || 'Pane Board snapshot').slice(0, 120),
    status: nextStatus,
    source: {
      ...(cleanBoard.source || {}),
      createdBy: nextStatus === 'agent-proposal' ? 'agent' : nextStatus === 'human-sketch' ? 'human' : cleanBoard.source?.createdBy || 'human',
      basedOn: basedOn || cleanBoard.source?.basedOn || null,
      project: 'Aura Lab',
      context: 'layout intent reference'
    },
    updatedAt: new Date().toISOString()
  };
  const targetDir = paneBoardSnapshotDir(paths, nextStatus);
  const targetPath = uniqueLayoutPath(targetDir, snapshot.id);
  fs.writeFileSync(targetPath, `${JSON.stringify(snapshot, null, 2)}\n`, 'utf8');
  appendPaneBoardEvent({
    type: 'snapshot-created',
    status: nextStatus,
    boardId: snapshot.id,
    basedOn: snapshot.source.basedOn,
    path: path.relative(PANE_BOARD_ROOT, targetPath)
  });
  return {
    board: snapshot,
    path: targetPath
  };
}

function validatePaneBoardOwnership(board) {
  if (board?.status === 'agent-proposal') {
    if (board.source?.createdBy !== 'agent') {
      const error = new Error('Agent proposal boards must be agent-authored.');
      error.code = 'PANE_BOARD_AGENT_AUTHOR_REQUIRED';
      throw error;
    }
    if (typeof board.source?.basedOn !== 'string' || board.source.basedOn.length === 0) {
      const error = new Error('Current board cannot be an agent proposal without basedOn.');
      error.code = 'PANE_BOARD_CURRENT_BASED_ON_REQUIRED';
      throw error;
    }
  }
}

async function exportPaneBoardPng(window, { board, title } = {}) {
  const paths = ensurePaneBoardDirs();
  if (!window || window.isDestroyed()) {
    throw new Error('Pane Board window is not available for PNG export.');
  }
  const cleanBoard = normalizePaneBoard(board || readPaneBoard());
  const image = await window.webContents.capturePage();
  const fileBase = slug(`${cleanBoard.id}-${title || 'pane-board'}`) || cleanBoard.id;
  const outputPath = uniquePngPath(paths.screenshots, fileBase);
  fs.writeFileSync(outputPath, image.toPNG());
  appendPaneBoardEvent({
    type: 'png-exported',
    boardId: cleanBoard.id,
    path: path.relative(PANE_BOARD_ROOT, outputPath)
  });
  return {
    path: outputPath
  };
}

async function capturePaneBoard(window, { board, title, sourceArtifact, humanSignal, includeScreenshot } = {}) {
  const paths = ensurePaneBoardDirs();
  const cleanBoard = normalizePaneBoard(board || readPaneBoard());
  validatePaneBoardOwnership(cleanBoard);
  const captureTitle = String(title || cleanBoard.title || 'Pane Board resting capture').slice(0, 120);
  const capture = {
    id: layoutId(captureTitle),
    title: captureTitle,
    kind: 'pane-board-resting-capture',
    createdAt: new Date().toISOString(),
    source: {
      boardId: cleanBoard.id,
      boardTitle: cleanBoard.title,
      boardStatus: cleanBoard.status,
      createdBy: cleanBoard.source?.createdBy || 'human',
      basedOn: cleanBoard.source?.basedOn || null,
      boardUpdatedAt: cleanBoard.updatedAt,
      viewport: cleanBoard.viewport?.preset || '',
      paneCount: cleanBoard.panes.length,
      sourceArtifact: String(sourceArtifact || '').slice(0, 260),
      humanSignal: String(humanSignal || '').slice(0, 500),
      scope: 'board-local layout guidance'
    },
    board: cleanBoard,
    screenshot: null
  };
  if (includeScreenshot === true) {
    const png = await exportPaneBoardPng(window, { board: cleanBoard, title: `${captureTitle}-capture` });
    capture.screenshot = path.relative(PANE_BOARD_ROOT, png.path);
  }
  const targetPath = uniqueLayoutPath(paths.captures, capture.id);
  fs.writeFileSync(targetPath, `${JSON.stringify(capture, null, 2)}\n`, 'utf8');
  appendPaneBoardEvent({
    type: 'capture-created',
    boardId: cleanBoard.id,
    captureId: capture.id,
    path: path.relative(PANE_BOARD_ROOT, targetPath),
    screenshot: capture.screenshot
  });
  return {
    capture,
    path: targetPath
  };
}

function appendPaneBoardEvent(event) {
  const paths = ensurePaneBoardDirs();
  const entry = {
    at: new Date().toISOString(),
    ...event
  };
  fs.appendFileSync(paths.events, `${JSON.stringify(entry)}\n`, 'utf8');
}

function paneBoardSnapshotDir(paths, status) {
  if (status === 'agent-proposal') {
    return paths.agent;
  }
  if (status === 'human-accepted') {
    return paths.accepted;
  }
  return paths.human;
}

function uniqueLayoutPath(dir, id) {
  let candidate = path.join(dir, `${slug(id)}.json`);
  let index = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(dir, `${slug(id)}-${index}.json`);
    index += 1;
  }
  return candidate;
}

function uniquePngPath(dir, id) {
  let candidate = path.join(dir, `${slug(id)}.png`);
  let index = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(dir, `${slug(id)}-${index}.png`);
    index += 1;
  }
  return candidate;
}

function defaultPaneBoard() {
  return {
    id: layoutId('pane-board-v1'),
    title: 'Pane Board V1 working sketch',
    status: 'human-sketch',
    viewport: {
      preset: '960x640',
      width: 960,
      height: 640,
      grid: 8
    },
    source: {
      createdBy: 'human',
      basedOn: null,
      project: 'Aura Lab',
      context: 'layout intent sketch'
    },
    panes: [
      pane('status-band', 'Status band', 3, 3, 114, 9, 'summary', 'primary', 'top', 'above primary readout', 'Glanceable first-read state.'),
      pane('primary-readout', 'Primary readout', 3, 15, 68, 30, 'readout', 'primary', 'left', 'beside notes', 'Main shape under discussion.'),
      pane('detail-drawer', 'Detail drawer', 3, 49, 68, 24, 'detail', 'supporting', 'bottom-left', 'below primary readout', 'Longer explanation and comparison space.'),
      pane('notes', 'Notes', 75, 15, 42, 58, 'notes', 'supporting', 'right', 'beside primary readout', 'Soft intent, questions, and alternate relationship notes.')
    ],
    review: {
      humanIntent: 'Use this board to describe spatial intent without turning it into product UI.',
      agentNotes: '',
      acceptedByHuman: false
    },
    collaboration: {
      notes: {
        human: '',
        labs: ''
      },
      commands: []
    },
    screenNote: 'Dev note: this board is a cooperative spatial sketch surface. Treat positions as intent, not instruction.',
    updatedAt: new Date().toISOString()
  };
}

function pane(id, label, x, y, w, h, role, importance, anchor, relationship, notes) {
  return {
    id,
    label,
    grid: { x, y, w, h },
    role,
    importance,
    locked: false,
    intent: {
      role,
      importance,
      anchor,
      relationship,
      notes
    },
    notes
  };
}

function normalizePaneBoard(board) {
  const source = board?.source || {};
  const viewport = board?.viewport || {};
  const grid = Number.isInteger(viewport.grid) && viewport.grid > 0 ? viewport.grid : 8;
  const width = viewport.preset === '720x640' ? 720 : 960;
  const height = 640;
  const maxGridW = Math.floor(width / grid);
  const maxGridH = Math.floor(height / grid);
  const seenPaneIds = new Set();
  return {
    id: String(board?.id || layoutId(board?.title || 'pane-board')).slice(0, 96),
    title: String(board?.title || 'Pane Board V1 working sketch').slice(0, 120),
    status: paneBoardStatus(board?.status),
    viewport: {
      preset: width === 720 ? '720x640' : '960x640',
      width,
      height,
      grid
    },
    source: {
      createdBy: source.createdBy === 'agent' ? 'agent' : 'human',
      basedOn: source.basedOn ? String(source.basedOn).slice(0, 160) : null,
      project: 'Aura Lab',
      context: String(source.context || 'layout intent sketch').slice(0, 120)
    },
    panes: Array.isArray(board?.panes)
      ? board.panes.map((entry, index) => normalizePane(entry, index, maxGridW, maxGridH, seenPaneIds))
      : [],
    review: {
      humanIntent: String(board?.review?.humanIntent || '').slice(0, 1000),
      agentNotes: String(board?.review?.agentNotes || '').slice(0, 1000),
      acceptedByHuman: board?.review?.acceptedByHuman === true
    },
    collaboration: normalizeCollaboration(board?.collaboration),
    screenNote: String(board?.screenNote || board?.review?.agentNotes || '').slice(0, 1000),
    updatedAt: new Date().toISOString()
  };
}

function normalizeCollaboration(collaboration = {}) {
  const notes = collaboration.notes || {};
  return {
    notes: {
      human: String(notes.human || '').slice(0, 1200),
      labs: String(notes.labs || '').slice(0, 1200)
    },
    commands: Array.isArray(collaboration.commands)
      ? collaboration.commands.slice(-24).map((command, index) => normalizeBoardCommand(command, index))
      : []
  };
}

function normalizeBoardCommand(command, index) {
  const text = String(command?.text || '').slice(0, 220);
  return {
    id: String(command?.id || `board-guidance-${index + 1}`).slice(0, 80),
    text,
    createdBy: command?.createdBy === 'labs' ? 'labs' : 'human',
    scope: 'board-only',
    status: command?.status === 'done' ? 'done' : command?.status === 'parked' ? 'parked' : 'open',
    createdAt: typeof command?.createdAt === 'string' && !Number.isNaN(Date.parse(command.createdAt))
      ? command.createdAt
      : new Date().toISOString()
  };
}

function normalizePane(entry, index, maxGridW = 120, maxGridH = 80, seenPaneIds = new Set()) {
  const grid = entry?.grid || {};
  const id = uniquePaneId(slug(entry?.id || entry?.label || `pane-${index + 1}`) || `pane-${index + 1}`, seenPaneIds);
  const role = String(entry?.role || entry?.intent?.role || 'surface').slice(0, 48);
  const importance = String(entry?.importance || entry?.intent?.importance || 'supporting').slice(0, 48);
  const w = clampInt(grid.w, 4, maxGridW);
  const h = clampInt(grid.h, 4, maxGridH);
  const pane = {
    id,
    label: String(entry?.label || id).slice(0, 80),
    grid: {
      x: clampInt(grid.x, 0, maxGridW - w),
      y: clampInt(grid.y, 0, maxGridH - h),
      w,
      h
    },
    role,
    importance,
    locked: entry?.locked === true,
    intent: {
      role,
      importance,
      anchor: String(entry?.intent?.anchor || '').slice(0, 80),
      relationship: String(entry?.intent?.relationship || '').slice(0, 160),
      notes: String(entry?.intent?.notes || entry?.notes || '').slice(0, 1000)
    },
    notes: String(entry?.notes || entry?.intent?.notes || '').slice(0, 1000)
  };
  const material = normalizePaneMaterial(entry?.material);
  if (material) {
    pane.material = material;
  }
  return pane;
}

function normalizePaneMaterial(material) {
  if (!material || material.type !== 'image') {
    return null;
  }
  const normalizedPath = normalizeMaterialPath(material.path);
  if (!normalizedPath) {
    return null;
  }
  const fit = ['contain', 'cover', 'tile'].includes(material.fit) ? material.fit : 'cover';
  return {
    type: 'image',
    path: normalizedPath,
    fit,
    opacity: clampNumber(material.opacity, 0.05, 1, 0.35),
    role: String(material.role || 'imagination-paint').slice(0, 80)
  };
}

function normalizeMaterialPath(value) {
  const raw = String(value || '').replace(/\\/g, '/').trim();
  if (!raw || raw.includes('\0') || raw.includes(':') || raw.startsWith('/') || raw.startsWith('..')) {
    return null;
  }
  const normalized = path.posix.normalize(raw);
  if (normalized !== raw || normalized.includes('../') || !normalized.startsWith('materials/')) {
    return null;
  }
  if (!/\.png$/i.test(normalized)) {
    return null;
  }
  return normalized.slice(0, 220);
}

function uniquePaneId(id, seenPaneIds) {
  let candidate = id;
  let index = 2;
  while (seenPaneIds.has(candidate)) {
    candidate = `${id}-${index}`;
    index += 1;
  }
  seenPaneIds.add(candidate);
  return candidate;
}

function paneBoardStatus(status) {
  const allowed = ['human-sketch', 'agent-proposal', 'human-accepted', 'superseded', 'parked', 'rejected'];
  return allowed.includes(status) ? status : 'human-sketch';
}

function layoutId(title) {
  return `layout-${new Date().toISOString().slice(0, 10)}-${slug(title || 'pane-board')}`;
}

function slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function clampInt(value, min, max) {
  const number = Number.parseInt(value, 10);
  if (!Number.isFinite(number)) {
    return min;
  }
  return Math.max(min, Math.min(max, number));
}

function clampNumber(value, min, max, fallback) {
  const number = Number.parseFloat(value);
  if (!Number.isFinite(number)) {
    return fallback;
  }
  return Math.max(min, Math.min(max, number));
}

module.exports = {
  createPaneBoardWindow,
  isPaneBoardMode,
  isPaneBoardSmokeMode,
  registerPaneBoardHandlers
};
