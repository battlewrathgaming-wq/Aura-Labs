# OverseerHS139 - M35 Pane Board Advisory Acceptance

Status: Accepted
Role: Overseer
Milestone: M35 - Pane Board Layout Capture
Date: 2026-05-26

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `workspace/OverseerHS138-m35-pane-board-layout-capture-runway.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/pane-board/README.md`
- `workspace/pane-board/human-sketches/README.md`
- `workspace/pane-board/agent-proposals/README.md`
- `workspace/pane-board/accepted-layouts/README.md`
- `workspace/pane-board/screenshots/README.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

## Acceptance Summary

M35 is accepted.

Pane Board is accepted as a Lab-only spatial conversation tool. Its purpose is to help the Human sketch layout intent and let agents propose alternate arrangements without treating the sketch as product authority.

The accepted model is human-led, not Human-dictated. Human sketches are the strongest signal of intent, but they are not immutable specifications. Agents may propose alternatives, flag pressure, and suggest simplifications. Human acceptance decides what becomes a current reference.

## Accepted Contract

The accepted workflow is:

```txt
Human sketch
-> agent proposal
-> Human review
-> accept / adapt / reject / keep both
-> later fixed UI bake through a separate Dev runway
```

Accepted does not mean only one surviving layout. Pane Board may keep multiple useful layouts alive at once:

- `human-sketch`
- `agent-proposal`
- `human-accepted`
- `superseded`
- `parked`
- `rejected`

The board is a bench for comparison, not a forced pipeline.

## Accepted Refinements

M35 acceptance adds these refinements for M36:

- Pane Board should be stateful at rest.
- `workspace/pane-board/current-board.json` should hold the latest visible board state.
- A lightweight append-only event log should preserve meaningful changes.
- Snapped pane position should be stored as grid integers, not fragile raw pixels.
- Human placement should be treated as expressive, not precise.
- Pane records should include intent hints where useful, such as role, importance, anchor, relationship, and notes.
- "Can you grab that state?" should mean snapshot the current board into a named layout reference and, where supported, export a PNG.

## Boundaries Preserved

M35 did not authorize:

- product renderer changes
- clean presentation head changes
- target-project adapters
- bridge/runtime contract changes
- live data
- export/seeding
- SmokeFlash replacement
- draggable production dashboard
- code generation

## Verification

No runtime verification was required for the advisory artifact.

Prior to acceptance, the M35 advisory landing was verified with:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

Both passed. Existing warning-only terminology tripwires remained inherited and were not introduced by M35.

## Decision

Close M35 as accepted and open M36 for a bounded Lab-only Pane Board V1 prototype.

