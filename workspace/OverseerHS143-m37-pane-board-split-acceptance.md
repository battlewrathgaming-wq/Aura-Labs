# OverseerHS143 - M37 Pane Board Split Acceptance

Status: Accepted
Date: 2026-05-26
Role: Overseer
Milestone: M37 - Pane Board Split Stabilization

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m37-pane-board-split-stabilization.md`
- `workspace/OverseerHS142-m37-pane-board-split-runway.md`
- `workspace/DevHS142-pane-board-split-stabilization.md`
- `workspace/pane-board/README.md`
- `workspace/prompts.md`
- `src/main/main.js`
- `src/main/preload.js`
- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/README.md`
- `scripts/verify-pane-board.js`

## Acceptance Decision

M37 is accepted.

The Dev pass created a clearer in-repo Lab-only tooling boundary for Pane Board without turning the tool into product renderer scope, target-project UI, a bridge/runtime contract, or export/seeding work.

This is not a full separate app/package split. That remains a larger future decision. For M37, the accepted outcome is the first structural split inside the same repo:

- Pane Board main-process behavior moved out of the general `src/main/main.js` body.
- Pane Board IPC, persistence, snapshot, PNG export, and smoke helpers now live under `src/main/labTooling/paneBoard/paneBoard.js`.
- Normal launch lazy-loads Pane Board only when `AURA_LAB_PANE_BOARD=1`.
- The shared preload exposes `window.auraPaneBoard` only when `AURA_LAB_PANE_BOARD=1`.
- The clean presentation renderer files remain separate from Pane Board renderer files.
- Boundary README files now point agents in the correct direction from both sides.

## Accepted Boundary

Portable presentation offer:

- normal renderer entry
- presentation material/output work
- bridge-fed display behavior when explicitly opened by a future packet

Lab-only tooling:

- Pane Board renderer
- Pane Board main-process module
- Pane Board persistence under `workspace/pane-board/`
- Pane Board snapshots and PNG exports
- Pane Board smoke and tooling verification

Pane Board remains a spatial communication tool. Its JSON, coordinates, screenshots, and proposals are advisory reference material only.

## Prompt / Firewall Disposition

The local prompt addition in `workspace/prompts.md` is accepted as a useful cold-agent firewall.

It correctly frames Pane Board as Lab-only tooling and warns workers away from:

- product renderer work
- target-project adapters
- bridge/runtime contract changes
- code generation for product UI
- treating coordinates or screenshots as authority

## Verification Reviewed

Overseer accepted Dev's named verification and reran the required checks.

Passed:

```cmd
npm.cmd run verify:all
npm.cmd run smoke:electron
npm.cmd run smoke:pane-board
```

Passed from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

Latest Pane Board smoke record:

- `.tmp/pane-board-smoke/pane-board-smoke-result.json`
- status: `passed`
- latest snapshot: `workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-8.json`
- latest PNG: `workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-7.png`

## Residual Risks

- Pane Board is still in-repo. A full app/package split remains parked until the presentation head is mature enough to justify that cost.
- A small main-process launch gate remains in `src/main/main.js`, but it is explicit and lazy-loaded.
- A gated preload branch remains in the shared preload, but `auraPaneBoard` is unavailable in normal presentation mode.
- Smoke creates persistent workspace artifacts by design. This is useful run record, but future policy may decide how much generated smoke history should be retained.

## Next Direction

M37 can close.

Recommended next choices:

- pause for Human / Overseer direction
- run a small portability / dual-reading review of Pane Board outputs
- define a smoke-output retention policy for Pane Board
- open a later Lab-only tooling packet if the Human wants the board to become a stronger near-time communication surface

Do not open presentation-offer implementation or target-project adapter work from this acceptance alone.
