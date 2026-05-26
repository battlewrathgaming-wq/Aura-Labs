# M37 - Pane Board Split Stabilization

Status: Complete

## Outcome

Split Pane Board into a clearer Lab-only tooling boundary so future tooling work does not become removal work for the portable presentation offer.

## Why This Is Milestone-Sized

M36 proved Pane Board is valuable. That makes it likely to attract more tooling work.

If Pane Board remains braided through the main presentation app, every useful tooling feature increases future cleanup before the presentation head can travel to Atlas, Sense, or other projects. M37 exists to pay that boundary cost early.

## Goal

Create a cleaner split between:

- the portable presentation offer
- Lab-only tooling, including Pane Board

The split does not need to create a separate repository or package unless that is the smallest safe implementation. It does need to make ownership and launch paths obvious from disk.

## Scope

M37 should:

- move Pane Board main-process helpers out of the general `src/main/main.js` body where practical
- keep normal launch independent of Pane Board state and code paths
- keep Pane Board behind an explicit Lab-only launch command
- keep Pane Board state under `workspace/pane-board/`
- keep `verify:pane-board` and `smoke:pane-board`
- document the resulting boundary
- keep the presentation offer portable

## Non-Goals

- no Pane Board feature expansion
- no board interaction polish
- no target-project adapters
- no export/seeding
- no bridge/runtime contract changes
- no source-project semantics
- no SmokeFlash replacement
- no code generation or CSS export
- no new design platform scope

## Acceptance Criteria

M37 is acceptable if:

- normal presentation launch still works without Pane Board state
- Pane Board launch still works through an explicit Lab-only command
- Pane Board persistence/snapshot/PNG behavior remains intact
- Pane Board implementation has a clearer module or folder boundary
- the clean presentation head does not import Pane Board renderer code
- verification passes for both normal presentation and Pane Board paths
- documentation names what is portable and what is Lab-only tooling
- no new presentation feature work is introduced

## Verification

Required:

- `npm.cmd run verify:all`
- `npm.cmd run smoke:electron`
- `npm.cmd run smoke:pane-board`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`
