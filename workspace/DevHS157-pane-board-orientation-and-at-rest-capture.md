# DevHS157 - Pane Board Orientation And At-Rest Capture

Status: Complete pending Overseer review
Date: 2026-05-28
Role: Lab Dev

## Scope

Implemented the bounded Lab-only Pane Board orientation and at-rest capture slice.

This work stays inside Pane Board tooling. It does not touch the clean presentation head, product renderer, bridge/runtime contracts, target-project adapters, background automation, image generation, or source-project styling.

## Files Changed

- `src/renderer/pane-board/index.html`
- `src/renderer/pane-board/pane-board.js`
- `src/renderer/pane-board/pane-board.css`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `scripts/verify-pane-board.js`
- `workspace/DevHS157-pane-board-orientation-and-at-rest-capture.md`

## Orientation Cues Implemented

- Added a compact saved/resting status chip near the board title.
  - Shows `Loading...`, `Changed`, `Saving...`, or `Saved HH:MM:SS`.
  - Reflects Pane Board save/rest state only, not product data state.
- Added a compact last-change line.
  - Uses best-effort Lab/tooling-local labels such as Human moved a pane, Human changed material on a pane, or Labs/disk changed board state.
  - Does not claim product authority or source ownership.
- Added a changed-pane cue.
  - Changed panes receive a brief soft edge glow.
  - The cue clears after roughly 2.2 seconds.
  - It does not move panes, jitter panes, or loop.
  - Reduced-motion preference removes transition behavior.

## Capture Behavior

- Explicit capture/grab/export controls remain the only capture path.
- No screenshot-on-edit behavior was added.
- Before PNG export or resting capture, live-only cues are put into stable capture mode:
  - save/last-change orientation rail is hidden from capture
  - selection and changed-pane edge cues are hidden from capture
- Stable board content remains visible:
  - board title
  - board status
  - layout id
  - viewport/grid
  - updated timestamp
  - pane IDs/labels/coordinates
  - material cues
- Resting capture metadata now records board title, board timestamp, viewport, and pane count in addition to the existing board id/status/author/basedOn fields.

## Transient Cues Controlled

- No jitter.
- No continuous motion.
- No looping pulse.
- No screenshot-on-edit.
- No product-state meaning attached to the glow.
- Changed-pane cue is live-only and cleared for stable capture/export.

## Cleanup

- Pre-existing tree before edits was clean.
- No Human sketch or accepted/reference artifact was changed.
- No smoke/generated artifact has been intentionally kept as reference material.
- Required smoke generated disposable agent proposal, capture JSON, and PNG screenshot artifacts. Those were deleted.
- Smoke-only `current-board.json` timestamp and `board-events.ndjson` entries were restored/removed after verification.

## Verification

- `npm.cmd run verify:pane-board` - passed before handoff creation.
- `npm.cmd run verify:all` - passed.
- `npm.cmd run smoke:pane-board` - passed.
  - Smoke result: `.tmp/pane-board-smoke/pane-board-smoke-result.json`
  - Status: `passed`
  - Snapshot path reported: `workspace\pane-board\agent-proposals\layout-2026-05-28-pane-board-v1-smoke-proposal.json`
  - PNG path reported: `workspace\pane-board\screenshots\layout-2026-05-28-pane-board-v1-smoke-proposal-pane-board-smoke.png`
  - Capture path reported: `workspace\pane-board\captures\layout-2026-05-28-pane-board-v1-smoke-resting-capture.json`
  - These generated smoke files were classified as disposable and removed after the smoke pass.
- `npm.cmd run verify:pane-board` - passed again after smoke cleanup.
- `git status --short` after cleanup showed only intentional implementation and handoff files.

## Remaining Risks

- The quiet glow/save-chip behavior has not yet been manually inspected in the running Electron Pane Board.
- A real material-bearing pane visual proof is still pending from HS156.
- Last-change attribution is intentionally best-effort and local to Pane Board action paths. External disk redraws are labeled as Labs/disk changes without stronger authority claims.
