const GRID = 8;
const boardState = {
  board: null,
  selectedId: null,
  drag: null,
  saveTimer: null
};

boot().catch((error) => showMessage(error.message));

async function boot() {
  await bootFrame();
  wireControls();
  boardState.board = await window.auraPaneBoard.load();
  boardState.selectedId = boardState.board.panes[0]?.id || null;
  renderBoard();
}

async function bootFrame() {
  if (!window.auraWindow) {
    return;
  }
  const frame = await window.auraWindow.getState();
  renderFrame(frame);
  document.querySelector('#pin-window').addEventListener('click', async () => {
    renderFrame(await window.auraWindow.setAlwaysOnTop(document.querySelector('#pin-window').classList.contains('active') !== true));
  });
  document.querySelector('#minimize-window').addEventListener('click', () => window.auraWindow.minimize());
  document.querySelector('#close-window').addEventListener('click', () => window.auraWindow.close());
}

function renderFrame(frame) {
  const pin = document.querySelector('#pin-window');
  pin.classList.toggle('active', frame?.alwaysOnTop === true);
  pin.textContent = frame?.alwaysOnTop ? 'Pinned' : 'Pin';
}

function wireControls() {
  document.querySelector('#board-title').addEventListener('input', (event) => {
    boardState.board.title = event.target.value;
    scheduleSave('title-edited');
    renderMeta();
  });
  document.querySelector('#viewport-preset').addEventListener('change', (event) => {
    setViewport(event.target.value);
  });
  document.querySelector('#board-status').addEventListener('change', (event) => {
    const previousStatus = boardState.board.status || 'human-sketch';
    if (event.target.value === 'agent-proposal' && !boardState.board.source?.basedOn) {
      event.target.value = previousStatus;
      showMessage('Use Grab state with Based on to create an agent proposal.');
      return;
    }
    boardState.board.status = event.target.value;
    boardState.board.source.createdBy = event.target.value === 'agent-proposal' ? 'agent' : 'human';
    if (event.target.value !== 'agent-proposal') {
      boardState.board.source.basedOn = null;
    }
    scheduleSave('status-edited');
    renderMeta();
  });
  document.querySelector('#screen-note-text').addEventListener('input', (event) => {
    boardState.board.screenNote = event.target.value;
    boardState.board.review.agentNotes = event.target.value;
    scheduleSave('screen-note-edited');
  });
  document.querySelector('#add-pane').addEventListener('click', addPane);
  document.querySelector('#duplicate-pane').addEventListener('click', duplicatePane);
  document.querySelector('#delete-pane').addEventListener('click', deletePane);
  for (const selector of ['#pane-label', '#pane-role', '#pane-importance', '#pane-anchor', '#pane-relationship', '#pane-notes']) {
    document.querySelector(selector).addEventListener('input', updateSelectedPaneFromEditor);
  }
  document.querySelector('#lock-pane').addEventListener('click', toggleSelectedPaneLock);
  for (const button of document.querySelectorAll('.nudge-pane')) {
    button.addEventListener('click', () => nudgeSelectedPane(Number(button.dataset.dx), Number(button.dataset.dy)));
  }
  document.querySelector('#grab-state').addEventListener('click', grabState);
  document.querySelector('#export-png').addEventListener('click', exportPng);
  document.querySelector('#refresh-board').addEventListener('click', refreshBoard);
  document.querySelector('#return-sketch').addEventListener('click', returnToSketch);
}

function setViewport(preset) {
  boardState.board.viewport = {
    preset: preset === '720x640' ? '720x640' : '960x640',
    width: preset === '720x640' ? 720 : 960,
    height: 640,
    grid: GRID
  };
  clampPanesToBoard();
  scheduleSave('viewport-edited');
  renderBoard();
}

function renderBoard() {
  if (!boardState.board) {
    return;
  }
  document.querySelector('#board-title').value = boardState.board.title || '';
  document.querySelector('#viewport-preset').value = boardState.board.viewport?.preset || '960x640';
  document.querySelector('#board-status').value = boardState.board.status || 'human-sketch';
  document.querySelector('#screen-note-text').value = boardState.board.screenNote || boardState.board.review?.agentNotes || '';

  const canvas = document.querySelector('#board-canvas');
  canvas.style.width = `${boardState.board.viewport.width}px`;
  canvas.style.height = `${boardState.board.viewport.height}px`;
  canvas.textContent = '';
  for (const pane of boardState.board.panes) {
    canvas.appendChild(renderPane(pane));
  }
  renderEditor();
  renderMeta();
}

function renderPane(pane) {
  const node = document.createElement('article');
  node.className = 'pane-node';
  node.dataset.paneId = pane.id;
  node.dataset.selected = pane.id === boardState.selectedId ? 'true' : 'false';
  node.dataset.locked = pane.locked ? 'true' : 'false';
  node.style.left = `${pane.grid.x * GRID}px`;
  node.style.top = `${pane.grid.y * GRID}px`;
  node.style.width = `${pane.grid.w * GRID}px`;
  node.style.height = `${pane.grid.h * GRID}px`;
  node.tabIndex = 0;

  const label = document.createElement('strong');
  label.textContent = pane.label || pane.id;
  const notes = document.createElement('p');
  notes.textContent = pane.notes || pane.intent?.notes || '';
  const meta = document.createElement('small');
  meta.textContent = `${pane.id} / ${pane.grid.x},${pane.grid.y} / ${pane.grid.w}x${pane.grid.h}`;
  const handle = document.createElement('i');
  handle.className = 'resize-handle';
  handle.setAttribute('aria-hidden', 'true');

  node.append(label, notes, meta, handle);
  node.addEventListener('pointerdown', (event) => startPointer(event, pane, event.target === handle ? 'resize' : 'move'));
  node.addEventListener('focus', () => selectPane(pane.id));
  node.addEventListener('click', () => selectPane(pane.id));
  return node;
}

function renderEditor() {
  const pane = selectedPane();
  const disabled = !pane;
  for (const selector of ['#pane-label', '#pane-role', '#pane-importance', '#pane-anchor', '#pane-relationship', '#pane-notes', '#lock-pane', '#duplicate-pane', '#delete-pane']) {
    document.querySelector(selector).disabled = disabled;
  }
  for (const button of document.querySelectorAll('.nudge-pane')) {
    button.disabled = disabled || pane?.locked === true;
  }
  if (!pane) {
    return;
  }
  document.querySelector('#pane-label').value = pane.label || '';
  document.querySelector('#pane-role').value = pane.role || pane.intent?.role || '';
  document.querySelector('#pane-importance').value = pane.importance || pane.intent?.importance || 'supporting';
  document.querySelector('#pane-anchor').value = pane.intent?.anchor || '';
  document.querySelector('#pane-relationship').value = pane.intent?.relationship || '';
  document.querySelector('#pane-notes').value = pane.notes || pane.intent?.notes || '';
  document.querySelector('#lock-pane').textContent = pane.locked ? 'Unlock' : 'Lock';
}

function renderMeta() {
  const meta = document.querySelector('#board-meta');
  const board = boardState.board;
  meta.textContent = '';
  for (const value of [
    board.title,
    board.status,
    board.id,
    board.viewport.preset,
    `${board.panes.length} panes`,
    `grid ${board.viewport.grid}px`
  ]) {
    const chip = document.createElement('span');
    chip.textContent = value;
    meta.appendChild(chip);
  }
  renderOwnershipBanner();
}

function renderOwnershipBanner() {
  const banner = document.querySelector('#ownership-banner');
  const board = boardState.board;
  const owner = board.source?.createdBy === 'agent' ? 'agent' : 'human';
  const basedOn = board.source?.basedOn ? ` / based on ${board.source.basedOn}` : '';
  banner.dataset.status = board.status || 'human-sketch';
  banner.textContent = `${statusLabel(board.status)} / ${owner}${basedOn}`;
}

function statusLabel(status) {
  const labels = {
    'human-sketch': 'Human sketch',
    'agent-proposal': 'Agent proposal',
    'human-accepted': 'Accepted',
    superseded: 'Superseded',
    parked: 'Parked',
    rejected: 'Rejected'
  };
  return labels[status] || 'Working view';
}

function selectPane(id) {
  boardState.selectedId = id;
  updateSelectionAttrs();
  renderEditor();
}

function selectedPane() {
  return boardState.board?.panes.find((pane) => pane.id === boardState.selectedId) || null;
}

function startPointer(event, pane, mode) {
  boardState.selectedId = pane.id;
  updateSelectionAttrs();
  renderEditor();
  if (pane.locked) {
    return;
  }
  event.preventDefault();
  event.currentTarget.setPointerCapture(event.pointerId);
  boardState.drag = {
    id: pane.id,
    mode,
    startX: event.clientX,
    startY: event.clientY,
    grid: { ...pane.grid }
  };
  event.currentTarget.addEventListener('pointermove', movePointer);
  event.currentTarget.addEventListener('pointerup', endPointer, { once: true });
}

function movePointer(event) {
  const drag = boardState.drag;
  if (!drag) {
    return;
  }
  const pane = boardState.board.panes.find((entry) => entry.id === drag.id);
  if (!pane) {
    return;
  }
  const dx = Math.round((event.clientX - drag.startX) / GRID);
  const dy = Math.round((event.clientY - drag.startY) / GRID);
  if (drag.mode === 'resize') {
    pane.grid.w = Math.max(4, drag.grid.w + dx);
    pane.grid.h = Math.max(4, drag.grid.h + dy);
  } else {
    pane.grid.x = Math.max(0, drag.grid.x + dx);
    pane.grid.y = Math.max(0, drag.grid.y + dy);
  }
  clampPane(pane);
  positionPaneNode(pane);
  renderEditor();
}

function endPointer(event) {
  event.currentTarget.removeEventListener('pointermove', movePointer);
  boardState.drag = null;
  scheduleSave('pane-moved');
}

function updateSelectedPaneFromEditor() {
  const pane = selectedPane();
  if (!pane) {
    return;
  }
  pane.label = document.querySelector('#pane-label').value;
  pane.role = document.querySelector('#pane-role').value;
  pane.importance = document.querySelector('#pane-importance').value;
  pane.intent = {
    ...(pane.intent || {}),
    role: pane.role,
    importance: pane.importance,
    anchor: document.querySelector('#pane-anchor').value,
    relationship: document.querySelector('#pane-relationship').value,
    notes: document.querySelector('#pane-notes').value
  };
  pane.notes = document.querySelector('#pane-notes').value;
  scheduleSave('pane-edited');
  renderCanvas();
  renderMeta();
}

function renderCanvas() {
  const canvas = document.querySelector('#board-canvas');
  canvas.textContent = '';
  for (const pane of boardState.board.panes) {
    canvas.appendChild(renderPane(pane));
  }
}

function positionPaneNode(pane) {
  const node = document.querySelector(`[data-pane-id="${pane.id}"]`);
  if (!node) {
    return;
  }
  node.style.left = `${pane.grid.x * GRID}px`;
  node.style.top = `${pane.grid.y * GRID}px`;
  node.style.width = `${pane.grid.w * GRID}px`;
  node.style.height = `${pane.grid.h * GRID}px`;
  const meta = node.querySelector('small');
  if (meta) {
    meta.textContent = `${pane.id} / ${pane.grid.x},${pane.grid.y} / ${pane.grid.w}x${pane.grid.h}`;
  }
}

function updateSelectionAttrs() {
  for (const node of document.querySelectorAll('.pane-node')) {
    node.dataset.selected = node.dataset.paneId === boardState.selectedId ? 'true' : 'false';
  }
}

function toggleSelectedPaneLock() {
  const pane = selectedPane();
  if (!pane) {
    return;
  }
  pane.locked = !pane.locked;
  scheduleSave(pane.locked ? 'pane-locked' : 'pane-unlocked');
  renderBoard();
}

function nudgeSelectedPane(dx, dy) {
  const pane = selectedPane();
  if (!pane || pane.locked) {
    return;
  }
  pane.grid.x += dx;
  pane.grid.y += dy;
  clampPane(pane);
  positionPaneNode(pane);
  renderEditor();
  scheduleSave('pane-nudged');
}

function addPane() {
  const index = boardState.board.panes.length + 1;
  const pane = {
    id: uniquePaneId(`pane-${index}`),
    label: `Pane ${index}`,
    grid: { x: 6 + index, y: 6 + index, w: 28, h: 14 },
    role: 'surface',
    importance: 'supporting',
    locked: false,
    intent: {
      role: 'surface',
      importance: 'supporting',
      anchor: '',
      relationship: '',
      notes: ''
    },
    notes: ''
  };
  boardState.board.panes.push(pane);
  boardState.selectedId = pane.id;
  scheduleSave('pane-added');
  renderBoard();
}

function duplicatePane() {
  const pane = selectedPane();
  if (!pane) {
    return;
  }
  const copy = structuredClone(pane);
  copy.id = uniquePaneId(`${pane.id}-copy`);
  copy.label = `${pane.label} copy`;
  copy.grid = { ...pane.grid, x: pane.grid.x + 2, y: pane.grid.y + 2 };
  copy.locked = false;
  clampPane(copy);
  boardState.board.panes.push(copy);
  boardState.selectedId = copy.id;
  scheduleSave('pane-duplicated');
  renderBoard();
}

function deletePane() {
  const pane = selectedPane();
  if (!pane) {
    return;
  }
  boardState.board.panes = boardState.board.panes.filter((entry) => entry.id !== pane.id);
  boardState.selectedId = boardState.board.panes[0]?.id || null;
  scheduleSave('pane-deleted');
  renderBoard();
}

async function scheduleSave(reason) {
  clearTimeout(boardState.saveTimer);
  boardState.saveTimer = setTimeout(async () => {
    try {
      boardState.board = await window.auraPaneBoard.save(boardState.board, reason);
      showMessage('Saved current board.');
      renderBoard();
    } catch (error) {
      showMessage(error.message);
      renderBoard();
    }
  }, 120);
}

async function grabState() {
  clearTimeout(boardState.saveTimer);
  boardState.board = await window.auraPaneBoard.save(boardState.board, 'before-snapshot');
  const status = document.querySelector('#snapshot-status').value;
  const title = document.querySelector('#snapshot-title').value || boardState.board.title;
  const basedOnInput = document.querySelector('#snapshot-based-on');
  const basedOn = basedOnInput.value || (status === 'agent-proposal' ? boardState.board.id : '');
  basedOnInput.value = basedOn;
  try {
    const result = await window.auraPaneBoard.snapshot({ board: boardState.board, status, title, basedOn });
    showMessage(`Grabbed ${relativePath(result.path)}.`);
    renderBoard();
  } catch (error) {
    showMessage(error.message);
  }
}

async function exportPng() {
  clearTimeout(boardState.saveTimer);
  boardState.board = await window.auraPaneBoard.save(boardState.board, 'before-png-export');
  const result = await window.auraPaneBoard.exportPng({ board: boardState.board, title: boardState.board.title });
  showMessage(`PNG saved ${relativePath(result.path)}.`);
}

async function refreshBoard() {
  clearTimeout(boardState.saveTimer);
  boardState.board = await window.auraPaneBoard.load();
  boardState.selectedId = boardState.board.panes[0]?.id || null;
  renderBoard();
  showMessage('Refreshed from disk.');
}

async function returnToSketch() {
  clearTimeout(boardState.saveTimer);
  boardState.board.status = 'human-sketch';
  boardState.board.source = {
    ...(boardState.board.source || {}),
    createdBy: 'human',
    basedOn: null,
    project: 'Aura Lab',
    context: 'layout intent sketch'
  };
  boardState.board = await window.auraPaneBoard.save(boardState.board, 'return-to-human-sketch');
  renderBoard();
  showMessage('Returned current board to Human sketch.');
}

function clampPanesToBoard() {
  for (const pane of boardState.board.panes) {
    clampPane(pane);
  }
}

function clampPane(pane) {
  const maxW = Math.floor(boardState.board.viewport.width / GRID);
  const maxH = Math.floor(boardState.board.viewport.height / GRID);
  pane.grid.w = Math.min(Math.max(4, pane.grid.w), maxW);
  pane.grid.h = Math.min(Math.max(4, pane.grid.h), maxH);
  pane.grid.x = Math.min(Math.max(0, pane.grid.x), maxW - pane.grid.w);
  pane.grid.y = Math.min(Math.max(0, pane.grid.y), maxH - pane.grid.h);
}

function uniquePaneId(seed) {
  let id = slug(seed);
  let count = 2;
  while (boardState.board.panes.some((pane) => pane.id === id)) {
    id = `${slug(seed)}-${count}`;
    count += 1;
  }
  return id;
}

function slug(value) {
  return String(value || 'pane')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48) || 'pane';
}

function relativePath(value) {
  return String(value || '').replace(/^.*workspace[\\/]/, 'workspace/');
}

function showMessage(message) {
  document.querySelector('#board-message').textContent = message;
}
