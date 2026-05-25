# OverseerHS101 - M29 Next Slice And Renderer Security Sequence

Status: Accepted direction
Date: 2026-05-25
Role: Overseer

## Purpose

Record Human direction after HS99.

The next M29 move should be:

1. one more bounded presentation-head slice
2. then a security review of the renderer

This is sequence direction only. It does not open Dev implementation yet because the next presentation slice still needs a concrete scope.

## Current State Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/OverseerHS100-hs99-basis-rail-polish-acceptance.md`

## Accepted Direction

M29 should not go directly to split-readiness review yet.

M29 should not open target-project adapters, export/seeding, or integration work.

M29 should take one more bounded product-facing presentation slice first.

After that slice is accepted, Lab should run a security review on the renderer before considering split/readiness or broader consumption.

## Next Slice Requirements

The next presentation slice must be:

- visible in the HTML/CSS/JS presentation head
- small enough for normal renderer verification and Electron smoke
- useful enough to improve the product-facing readout experience
- bounded to Lab presentation behavior
- free of target-project adapter work
- free of source-project meaning decisions
- free of durable bridge/runtime contract work
- free of export/seeding work

The slice should not be opened as a Dev runway until the specific presentation behavior is chosen.

## Renderer Security Review Placement

The renderer security review is sequenced after the next bounded presentation slice.

It should review the current renderer surface, including:

- renderer/preload boundary assumptions
- DOM insertion and text handling
- local fixture/service data display paths
- SmokeFlash/workshop gating
- normal launch isolation from workshop controls
- Electron window and shell assumptions
- any renderer risks introduced by the final M29 presentation slice

The security review should be advisory/review first. It should not bundle implementation unless the review produces a small, accepted fix runway.

## Parked Until After Next Slice

- renderer security review
- split-readiness review
- export/seeding
- target-project adapters
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contracts

## Decision Needed Before Dev

Human / Overseer still needs to choose the next bounded presentation slice.

Candidate shapes include:

- one more Summary/Basis/Details polish focused on first-screen read speed
- a small Details-view presentation improvement
- a compact status/action strip improvement
- a focused empty/failed/partial state presentation improvement

Do not ask Dev to choose product direction.
