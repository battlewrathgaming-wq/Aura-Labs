# OverseerHS95 - M29 View Intent Axis Runway

Status: Active runway
Date: 2026-05-25
Role: Overseer

## Purpose

Open the second M29 slice: H03 View Intent Axis.

This runway should introduce `viewIntent` as a deliberate renderer/test concept through a small user-facing segmented view switch. It should prove the axis on one display family first and keep the same surface stable across modes.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overseer.md`
- `workspace/overview.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/DevHS93-loading-state-parity.md`
- `workspace/OverseerHS94-h02-loading-state-acceptance.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

## Roadmap Alignment

M29 outcome:

- improve the product-facing presentation head through visible renderer capabilities
- keep the test model aligned with renderer capability
- keep workshop tooling bounded and support-only

This runway advances H03 View Intent Axis.

## Accepted Source Of Intent

- Human direction to focus this phase on presentation improvements.
- Human direction that split/readiness should be reviewed when the presentation head is good enough.
- Accepted H03 UX direction recorded in `docs/roadmap/m29-presentation-head-improvement-rail.md`.
- H02 Loading State Parity accepted in `workspace/OverseerHS94-h02-loading-state-acceptance.md`.

## Current Executor

Dev.

## Expected Handoff

`workspace/DevHS95-view-intent-axis.md`

## Ordered Runway

1. Inspect the current renderer state/family model and decide the smallest family surface for H03, using one family first.
2. Add `viewIntent` as a deliberate renderer/test concept with `summary-first` as the default.
3. Add a visible segmented control for the user-facing view switch.
4. Support three user-facing view labels: `Summary`, `Basis`, and `Details`.
5. Keep the same surface stable across view modes; reorder emphasis rather than replacing the display.
6. Keep stable across all view intents: title/readout label, status band, primary state, freshness/last read, basis/source cue, warning/gap marker, detail affordance, and diagnostics access.
7. Add targeted verification/smoke coverage for the view axis on the selected family.
8. Create the expected DevHS handoff with selected family, view intent behavior, verification, smoke notes, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- `viewIntent` exists as a renderer/test concept
- `summary-first` remains the default behavior
- the visible switch exposes `Summary`, `Basis`, and `Details`
- one display family demonstrates all three view intents
- the view switch changes emphasis without changing display identity
- stable identity elements remain stable across view intents
- basis mode emphasizes basis, freshness, coverage, gaps, and warnings without stronger claim language
- Details mode improves access to gaps, warnings, and diagnostic rows without making diagnostics primary
- visual smoke or renderer verification can observe the new view axis
- no target-project adapter, source-project meaning, export/seeding, or renderer split is introduced
- SmokeFlash remains hidden/gated support tooling
- verification passes

Redirect or stop if:

- the view axis needs target-project data or target-owned terms
- the implementation requires a durable bridge/runtime contract
- the work turns into confidence-first, source-first, triage, delta, or split work
- the test update becomes a broad matrix beyond the selected family and necessary view checks
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- add `viewIntent` as a local renderer/test axis
- add visible segmented control UI
- add Summary/Basis/Details rendering emphasis for one family
- add targeted fixture/smoke/verification support
- update local vocabulary checks for accepted visible copy
- make small style changes needed for the segmented control and view emphasis

Not allowed:

- target-project adapters
- Atlas/Sense implementation
- export/seeding
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contract
- named confidence-first implementation
- source-first as a separate named product mode beyond the accepted Basis view
- attention triage or delta view
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- one-family scope is not enough to prove the axis
- view labels need key-term promotion before implementation
- source-owned meaning decisions are required
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

Run Electron smoke because visible view-axis behavior and smoke coverage are expected to change:

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
- Selected family:
- View intents supported:
- UI behavior:
- Stable identity elements:
- Smoke/test model impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS95-view-intent-axis.md
```

The handoff must state whether H03 is ready for Overseer acceptance and whether the next M29 slice should move to an expressive view, remain on H03 cleanup, or pause for UI/UX review.

## Advisory Disposition

- Accepted: H03 View Intent Axis as the second M29 runway.
- Accepted as planning labels only: `Summary`, `Basis`, `Details`.
- Deferred: key-term promotion for `Summary`, `Basis`, and `Details` until H03 acceptance.
- Deferred: H04/H05 expressive view work until H03 proves the axis.
- Deferred: H08 Presentation Readiness Split.
- Parked: T-lane workshop tooling unless needed to support presentation improvement.
- Parked: I-lane target adapter/readiness work.
