# DevHS144 - Pane Board Capability Stabilization

Status: Complete
Role: Dev
Date: 2026-05-26

## Request Received

Execute M38 only: stabilize Pane Board as Lab-only tooling, with predictable current-board state, Human sketch protection, separate agent proposals, explicit PNG capture, and verifier coverage.

## Files Changed

- `scripts/verify-pane-board.js`
- `src/main/labTooling/paneBoard/README.md`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/pane-board.js`
- `workspace/pane-board/README.md`
- `workspace/pane-board/current-board.json`
- `workspace/pane-board/board-events.ndjson`
- `workspace/pane-board/agent-proposals/layout-2026-05-26-pane-board-v1-smoke-proposal-9.json`
- `workspace/pane-board/screenshots/layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-8.png`
- `workspace/current.md`
- `workspace/DevHS144-pane-board-capability-stabilization.md`

## Stability Behavior Added Or Confirmed

Stable board state is now documented in `workspace/pane-board/README.md` and `src/main/labTooling/paneBoard/README.md`.

Stable state covers:

- board id, title, status, viewport, source metadata, and `updatedAt`
- pane ids, labels, notes, lock state, intent metadata, and integer grid coordinates
- review metadata and screen note text
- `basedOn` where source/proposal lineage needs it

`readPaneBoard()` now normalizes loaded JSON before returning it. Pane geometry is clamped to the active viewport grid, pane ids are kept unique during normalization, and pane notes fall back to intent notes when needed.

## Human Sketch Protection

The main fix is in the renderer snapshot path.

Before M38, after "Grab state" the renderer assigned the snapshot result back into `boardState.board`. That meant an agent-proposal snapshot could become the current in-memory board and later be saved back into `current-board.json`.

M38 removed that assignment. Snapshot creation now writes the separate reference file and leaves the current board as the current board.

Smoke confirmed `workspace/pane-board/current-board.json` remained:

```txt
status: human-sketch
source.basedOn: null
```

after an agent proposal smoke run.

## Agent Proposal Separation

Agent proposals still write under:

```txt
workspace/pane-board/agent-proposals/
```

Agent proposal snapshots still require `basedOn`. Snapshot writes use unique filenames, and `verify:pane-board` now checks that agent proposal artifacts:

- live in the agent proposal folder
- keep `status: agent-proposal`
- keep `source.createdBy: agent`
- include non-empty `source.basedOn`
- do not share filenames with Human sketches

## Screenshot / Capture Behavior

PNG capture remains explicitly triggered only by:

- the Pane Board `Export PNG` action
- the explicit `smoke:pane-board` path

No background or free-running screenshot capture was added.

The latest Pane Board smoke produced:

```txt
.tmp/pane-board-smoke/pane-board-smoke-result.json
status: passed
snapshot: workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-9.json
png: workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-8.png
based_on: layout-2026-05-26-pane-board-v1
pane_count: 5
```

## Verification

Ran:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Results:

- `verify:pane-board` passed.
- `verify:all` passed, including `verify:pane-board`.
- `smoke:pane-board` passed.

Normal Electron smoke was not required for M38 because this pass did not change shared Electron launch, shared preload, normal renderer launch, or presentation renderer files.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 59/59 resource checks.
- Existing warning-only terminology tripwires remain.

## Remaining Risks

- Pane Board still needs a Human feel test for whether the current capability loop actually feels calm and useful during live layout discussion.
- Smoke still creates durable proposal and PNG artifacts; this is useful evidence but may need later cleanup policy.
- `updatedAt` changes when the board is intentionally saved or restored by smoke; that is expected, but reviewers should not treat timestamp churn as layout intent.
- Pane Board output remains advisory layout-reference material only. It must not become product runtime state, bridge schema, CSS export, code generation, or target-project adoption authority.
