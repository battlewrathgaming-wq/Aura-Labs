# DevHS151 - Pane Board Collaboration Loop

Status: Complete
Date: 2026-05-27
Role: Dev
Milestone: M40 - Pane Board Collaboration Loop

## Summary

Implemented the bounded Pane Board collaboration loop for the Lab-only Pane Board sidecar.

The board now has low-friction redraw from disk, separate Human and Labs note lanes, board-local guidance commands, and a resting capture helper that writes named capture records without overwriting Human sketches or agent proposals.

No product renderer files were changed.

## Pre-Existing Dirty Files

None.

Before editing, `git status --short` returned no modified or untracked files.

## Files Changed

- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/main/preload.js`
- `src/renderer/pane-board/index.html`
- `src/renderer/pane-board/pane-board.js`
- `src/renderer/pane-board/pane-board.css`
- `scripts/verify-pane-board.js`
- `workspace/pane-board/README.md`
- `workspace/pane-board/current-board.json`
- `workspace/pane-board/board-events.ndjson`
- `workspace/pane-board/agent-proposals/layout-2026-05-27-pane-board-v1-smoke-proposal.json`
- `workspace/pane-board/captures/layout-2026-05-27-pane-board-v1-smoke-resting-capture.json`
- `workspace/pane-board/screenshots/layout-2026-05-27-pane-board-v1-smoke-proposal-pane-board-smoke.png`
- `workspace/pane-board/screenshots/layout-2026-05-26-pane-board-v1-pane-board-v1-smoke-resting-capture-capture.png`
- `workspace/current.md`

## Redraw

Added a gated Pane Board revision IPC path:

- `aura:pane-board:revision`
- `window.auraPaneBoard.revision()`

The renderer polls the current-board file revision every 1800ms. If the board is not dirty and no save is pending, an external `current-board.json` change triggers a reload and shows:

```txt
Redrew from disk change.
```

The existing `Refresh` button remains as the explicit manual fallback.

## Human And Labs Notes

Board state now includes:

```json
"collaboration": {
  "notes": {
    "human": "",
    "labs": ""
  },
  "commands": []
}
```

The UI renders these as separate visible lanes:

- `Human note`
- `Labs note`

Each lane persists independently through current-board save/load normalization.

## Board Commands

Added a board-local guidance inbox. Commands are stored under:

```json
"collaboration": {
  "commands": [
    {
      "id": "board-guidance-...",
      "text": "...",
      "createdBy": "human",
      "scope": "board-only",
      "status": "open",
      "createdAt": "..."
    }
  ]
}
```

The command inbox is explicitly board guidance only. It does not execute work, create Dev authorization, or define product authority.

## Capture

Added a gated Pane Board capture IPC path:

- `aura:pane-board:capture`
- `window.auraPaneBoard.capture()`

The capture helper:

- saves the current board before capture
- writes a named JSON record under `workspace/pane-board/captures/`
- preserves board JSON, board status, ownership, `basedOn`, source artifact, Human signal, and board-local scope
- optionally writes a PNG using the existing Pane Board window capture path
- appends a `capture-created` event to `workspace/pane-board/board-events.ndjson`

Smoke capture output:

```txt
workspace\pane-board\captures\layout-2026-05-27-pane-board-v1-smoke-resting-capture.json
workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-pane-board-v1-smoke-resting-capture-capture.png
```

## Verification

Passed:

```powershell
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
npm.cmd run verify:pane-board
npm.cmd run smoke:electron
```

Pane Board smoke result:

```txt
.tmp\pane-board-smoke\pane-board-smoke-result.json
status: passed
snapshot: workspace\pane-board\agent-proposals\layout-2026-05-27-pane-board-v1-smoke-proposal.json
png: workspace\pane-board\screenshots\layout-2026-05-27-pane-board-v1-smoke-proposal-pane-board-smoke.png
capture: workspace\pane-board\captures\layout-2026-05-27-pane-board-v1-smoke-resting-capture.json
capture_screenshot: screenshots\layout-2026-05-26-pane-board-v1-pane-board-v1-smoke-resting-capture-capture.png
based_on: layout-2026-05-26-pane-board-v1
pane_count: 5
```

Normal Electron smoke result:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
status: passed
blocking_failures: []
```

Normal Electron smoke was required because `src/main/preload.js` changed, even though the new Pane Board APIs remain gated behind `AURA_LAB_PANE_BOARD`.

Passed from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Result:

```txt
Terminology verification: 59/59 resource checks passed.
```

Warnings were the existing Lab tripwire / authority-status warnings, not M40 blockers.

## Remaining Risks

- Auto-redraw intentionally avoids reloading while local edits are dirty or save is pending; a larger multi-view storage model would be needed for conflict resolution.
- Commands are plain board-local guidance entries only; they do not have routing, assignment, or execution semantics.
- Capture records are review memory, not product specs or renderer contracts.
- Compare workbench, layer/material controls, pattern metadata, and full accept/park/reject workflow remain parked by M40.
