# OverseerHS93 - M29 Loading State Parity Runway

Status: Active runway
Date: 2026-05-25
Role: Overseer

## Purpose

Open M29 - Presentation Head Improvement Rail with the smallest bounded presentation-head improvement: make loading a first-class presentation state.

This is the first runway inside M29. It should improve the renderer model and verification model without starting renderer split, export, target adapters, or broad SmokeFlash/tooling work.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overseer.md`
- `workspace/overview.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/OverseerHS92-m28-acceptance.md`

## Roadmap Alignment

M29 outcome:

- improve the product-facing presentation head through visible renderer capabilities
- keep workshop tooling bounded and support-only
- keep the test model aligned with renderer capability

This runway advances H02 Loading State Parity.

## Accepted Source Of Intent

- Human direction to spend this phase on presentation improvements.
- Human direction that split/readiness should be reviewed when the presentation head is good enough.
- Human confirmation that the H-lane Presentation Head Milestones are the active line.
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`

## Current Executor

Dev.

## Expected Handoff

`workspace/DevHS93-loading-state-parity.md`

## Ordered Runway

1. Inspect the existing presentation state model, fixture/test modes, renderer state copy, and visual smoke capture path.
2. Add loading as a first-class presentation state for the existing presentation head.
3. Keep the default populated/empty/stale/failed/partial/long-text behavior stable.
4. Make loading visually intentional: calm pending state, clear basis/readout age language, no false unavailable or failed implication, no target-project terms.
5. Add or update fixture/test mode support so loading can be selected and checked like the other states.
6. Update renderer shell and smoke checks so loading is part of the active test model.
7. Create the expected DevHS handoff with files changed, loading-state behavior, verification, smoke result notes, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- loading is selectable or reachable as a first-class presentation state
- loading is visually distinct from empty, failed, stale, and partial
- loading copy uses Lab-owned slim language and does not overstate source availability
- loading keeps the normal presentation head stable
- visual smoke or renderer verification can observe loading directly
- no target-project adapter, source-project meaning, export/seeding, or renderer split is introduced
- SmokeFlash remains hidden/gated support tooling
- verification passes

Redirect or stop if:

- loading requires a durable bridge/runtime contract decision
- loading requires target-project data or target-owned terms
- the change turns into `viewIntent`, confidence view, source-first view, or renderer split work
- the test update becomes a broad smoke matrix rather than loading coverage
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- add loading fixture/test mode
- add loading renderer copy and visual treatment
- add targeted smoke/verification coverage
- update local vocabulary checks for accepted visible copy
- make small style changes needed for loading clarity

Not allowed:

- target-project adapters
- Atlas/Sense implementation
- export/seeding
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contract
- `viewIntent` axis implementation
- confidence/source/triage/delta view implementation
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- loading cannot be represented without changing source-owned meaning
- a bridge/runtime contract decision is required
- normal launch cannot stay clean
- SmokeFlash/workshop state becomes product navigation
- verification requires live/private/network data
- Electron runtime/install issues become the main work

## Required Verification

Always run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke because visible state behavior and smoke coverage are expected to change:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology check if visible or documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Loading state behavior:
- Normal launch impact:
- Smoke/test model impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS93-loading-state-parity.md
```

The handoff must state whether loading is ready for Overseer acceptance and whether the next M29 slice should remain H02 cleanup, move to H03 `viewIntent`, or pause for UI/UX review.

## Advisory Disposition

- Accepted: H02 Loading State Parity as the first M29 runway.
- Deferred: H03 `viewIntent` axis.
- Deferred: H04 Confidence View and H05 Source-First View.
- Deferred: H08 Presentation Readiness Split.
- Parked: T-lane workshop tooling unless needed to support presentation improvement.
- Parked: I-lane target adapter/readiness work.
