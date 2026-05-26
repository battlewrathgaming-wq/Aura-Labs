# Pane Board Main Tooling

Status: Lab-only main-process tooling

This folder contains the main-process side of Pane Board.

It is not the portable presentation offer. If you are looking for product-facing presentation code, go the other way:

```txt
src/main/main.js
src/renderer/index.html
src/renderer/app.js
src/renderer/styles.css
```

## Owned Here

- Pane Board window launch helper
- Pane Board IPC handlers
- `workspace/pane-board/current-board.json` persistence
- `workspace/pane-board/board-events.ndjson` append log
- snapshot routing
- agent proposal `basedOn` enforcement
- PNG export
- Pane Board smoke result writing

## Stable State

The current board should round-trip as explainable layout-reference JSON. Save/load must preserve board status, source metadata, review metadata, screen note text, pane labels, pane notes, pane lock state, and integer grid coordinates clamped to the active viewport.

Agent proposals are copies written under `workspace/pane-board/agent-proposals/`. They require `basedOn` and use unique filenames. Creating a proposal must not replace the current Human sketch in memory or on disk.

## Not Owned Here

- presentation materials
- product renderer behavior
- bridge/runtime contracts
- target adapters
- export or seeding
- product CSS generation

Saved board data is layout conversation reference only.
