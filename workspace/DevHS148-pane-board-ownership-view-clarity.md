# DevHS148 - Pane Board Ownership View Clarity

Status: Complete
Date: 2026-05-26
Role: Dev
Milestone: M39 - Pane Board Ownership And View Clarity

## Summary

M39 tightened Pane Board ownership and view-state clarity inside the Lab-only Pane Board sidecar.

The current board can no longer be saved as an `agent-proposal` without lineage, the UI prevents the direct no-lineage State dropdown path, and the board now has visible ownership/status treatment plus simple Refresh and Back to sketch controls.

No product renderer files were changed.

## Files Changed

- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/index.html`
- `src/renderer/pane-board/pane-board.js`
- `src/renderer/pane-board/pane-board.css`
- `scripts/verify-pane-board.js`
- `workspace/pane-board/current-board.json`
- `workspace/pane-board/board-events.ndjson`
- `workspace/pane-board/agent-proposals/layout-2026-05-26-pane-board-v1-smoke-proposal-11.json`
- `workspace/pane-board/screenshots/layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-10.png`

## Ownership Validation Changes

- Added main-process current-board ownership validation in `paneBoard.js`.
- Saving a current board as `status: agent-proposal` now requires:
  - `source.createdBy: agent`
  - non-empty `source.basedOn`
- Existing snapshot behavior still requires `basedOn` for agent proposals.
- `verify:pane-board` now fails if `workspace/pane-board/current-board.json` is an agent proposal without `source.basedOn`.
- `workspace/pane-board/current-board.json` was corrected from the invalid bug-hunt state back to:
  - `status: human-sketch`
  - `source.createdBy: human`
  - `source.basedOn: null`

## UI Clarity And Recovery Changes

- Preserved Pane Board identity:
  - window/document identity: `Aura Lab Pane Board`
  - compact in-window identity: `Aura Lab / Pane Board`
  - tool surface label: `Layout Intent Board`
- Added a visible ownership/status banner showing status, owner, and `basedOn` when present.
- Guarded the State dropdown so direct selection of `agent-proposal` without lineage is prevented with the message:
  - `Use Grab state with Based on to create an agent proposal.`
- Agent proposal snapshots auto-fill `Based on` from the current board id when the field is empty.
- Added `Refresh`, which reloads `current-board.json` from disk without relaunching.
- Added `Back to sketch`, which restores the visible/current board to Human sketch ownership.
- Save errors are now surfaced in the UI instead of silently continuing after a rejected save.

## Verification

Passed:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Pane Board smoke result:

```txt
.tmp/pane-board-smoke/pane-board-smoke-result.json
status: passed
snapshot: workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-11.json
png: workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-10.png
based_on: layout-2026-05-26-pane-board-v1
pane_count: 5
```

Negative ownership check:

```cmd
npm.cmd run verify:pane-board
```

Temporarily setting current-board to `status: agent-proposal`, `source.createdBy: agent`, and `source.basedOn: null` failed as expected:

```txt
Error: current-board agent proposal should include basedOn
```

The board was restored afterward and `npm.cmd run verify:pane-board` passed again.

Orchestration terminology verification passed from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

Result:

```txt
Terminology verification: 59/59 resource checks passed.
```

Warnings were existing Lab tripwire / authority-status warnings, not new M39 blockers.

Not run:

```cmd
npm.cmd run smoke:electron
```

Reason: M39 did not change shared Electron launch, shared preload, normal renderer launch, or presentation renderer files.

## Remaining Risks

- Pane Board still has only a minimal recovery path, not full saved-state navigation.
- Proposal viewing remains bounded by the current persistence model; a fuller compare/view model is still future work.
- The State dropdown still exposes proposal-like labels for transparency, but unsafe no-lineage agent proposal saves are now blocked.
- The smoke run appended expected local event-log entries and produced a new smoke proposal/PNG artifact.
