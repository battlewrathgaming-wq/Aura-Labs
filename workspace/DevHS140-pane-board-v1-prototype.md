# DevHS140 - Pane Board V1 Prototype

Status: Complete
Role: Dev
Date: 2026-05-26

## Request Received

Execute HS140 only: build the first Lab-only Pane Board prototype with stateful-at-rest layout references, append-only events, a "grab that state" snapshot path, and screenshot export where feasible.

## Files Changed

- `package.json`
- `scripts/verify-all.js`
- `scripts/verify-pane-board.js`
- `scripts/pane-board-smoke.ps1`
- `src/main/main.js`
- `src/main/preload.js`
- `src/renderer/pane-board/index.html`
- `src/renderer/pane-board/pane-board.css`
- `src/renderer/pane-board/pane-board.js`
- `workspace/pane-board/current-board.json`
- `workspace/pane-board/board-events.ndjson`
- `workspace/pane-board/agent-proposals/*.json`
- `workspace/pane-board/screenshots/*.png`
- `workspace/current.md`
- `workspace/DevHS140-pane-board-v1-prototype.md`

## Launch Path Chosen

Pane Board launches as a Lab-only Electron sidecar mode:

```cmd
npm.cmd run pane-board
```

That script sets `AURA_LAB_PANE_BOARD=1` and loads:

```txt
src/renderer/pane-board/index.html
```

This reuses the inherited Electron/Frame shell and preload boundary, but it does not load through the clean presentation head renderer.

## Clean Presentation Head

The clean presentation head was not made dependent on Pane Board state.

No Pane Board UI was added to:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`

Normal launch remains the existing presentation renderer. Normal Electron smoke passed after the Pane Board work.

## Prototype Behavior

Pane Board V1 includes:

- `960x640` and `720x640` presets
- visible neutral panes on an 8px grid
- add pane
- duplicate pane
- delete pane
- label editing
- role / importance / anchor / relationship / notes editing
- lock / unlock
- drag with Pointer Events
- resize with Pointer Events
- on-screen `Screen note` text area for quick Human/agent messages
- autosave to disk
- "Grab state" snapshot path
- PNG export path

The drag implementation was adjusted after Human testing so active pane movement updates the current DOM node in place instead of redrawing the node during the pointer gesture.

## Saved `current-board.json` Shape

The active board rests at:

```txt
workspace/pane-board/current-board.json
```

Current shape:

- `id`
- `title`
- `status`
- `viewport` with `preset`, `width`, `height`, and `grid`
- `source` with `createdBy`, `basedOn`, `project`, and `context`
- `panes[]`
- `review`
- `screenNote`
- `updatedAt`

Pane geometry is stored as grid-unit integers:

```json
"grid": {
  "x": 3,
  "y": 15,
  "w": 68,
  "h": 30
}
```

With the accepted 8px grid, `x: 3` means 24px. The current board contains Human local-test edits, including the added/duplicated panes and the note "This is amazing."

## Event Log Behavior

Meaningful changes append to:

```txt
workspace/pane-board/board-events.ndjson
```

Observed event types include:

- `board-created`
- `board-saved`
- `snapshot-created`
- `png-exported`

Observed board save reasons include:

- `pane-deleted`
- `pane-duplicated`
- `pane-added`
- `pane-moved`
- `pane-unlocked`
- `screen-note-edited`
- `pane-board-smoke-save`
- `pane-board-smoke-restore`

## Snapshot Behavior

The "Grab state" path snapshots the current board into the correct Pane Board folder.

Agent proposals are written under:

```txt
workspace/pane-board/agent-proposals/
```

Agent proposals must include `basedOn`; the main-process handler rejects an agent proposal without it.

Snapshot file writes use unique filenames and do not overwrite Human sketches.

## Screenshot Behavior

Pane Board supports PNG export through Electron `capturePage`.

Verified generated screenshot examples under:

```txt
workspace/pane-board/screenshots/
```

A manual print-screen capture was also created during Human testing:

```txt
workspace/pane-board/screenshots/pane-board-print-screen-2026-05-26.png
```

Screenshots remain advisory visual references only.

## Human Feel Notes

Human feedback during V1:

- Pane Board is a good proof of concept.
- The local launch still feels too table/editor-like.
- A future version should feel more like an Etch A Sketch for layout intent: calm, tactile, cooperative, and not a rigid product-layout editor.
- Pane Board should split into a separate Lab-only tooling app/folder sooner rather than later if it continues, so tooling does not become braided into the shipping presentation product.
- SmokeFlash remains useful as diagnostics, but Pane Board should become a steadier collaboration platform.

## Compatibility Boundaries Preserved

No changes were made to:

- target projects
- target adapters
- bridge/runtime contracts
- source-project meaning
- clean presentation head dependency on Pane Board state
- code generation
- CSS export
- SmokeFlash replacement
- product runtime dashboard behavior

Pane Board state is advisory layout reference material only.

## Verification

Ran:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:electron
npm.cmd run smoke:pane-board
```

Results:

- `verify:pane-board` passed.
- `verify:all` passed and now includes `verify:pane-board`.
- `smoke:electron` passed for the normal presentation renderer.
- `smoke:pane-board` initially failed in the sandbox with GUI capture errors (`launch-failed` / `UnknownVizError`), then passed when rerun outside the sandbox using the approved `npm.cmd run smoke:pane-board` prefix.
- `.tmp/pane-board-smoke/pane-board-smoke-result.json` reported `status: passed`, `based_on: layout-2026-05-26-pane-board-v1`, `pane_count: 5`, and emitted an agent proposal plus PNG.

Shared terminology verification was run because visible copy and workspace artifacts changed:

```cmd
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 59/59 resource checks.
- Existing inherited warning-only tripwires remain.

No lingering Electron process was reported by the final process check.

## Remaining Risks

- Pane Board is currently a Lab-only sidecar mode inside the same Electron app; future work should split/stabilize it before it grows into serious tooling.
- The first UI is functional but feels too much like a form/editor; a later pass should make the board-first sketch interaction primary.
- Screenshot capture can fail inside the sandbox; the Pane Board smoke path passed outside the sandbox.
- Smoke-generated proposal/PNG artifacts are useful proof but should be cleaned or archived by Overseer if they become noisy.
- Saved layout JSON must remain advisory and must not become product runtime state, component API, bridge contract, or implementation authority.
