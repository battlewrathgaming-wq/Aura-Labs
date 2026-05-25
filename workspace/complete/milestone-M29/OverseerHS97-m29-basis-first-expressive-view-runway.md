# OverseerHS97 - M29 Basis-First Expressive View Runway

Status: Active runway
Date: 2026-05-25
Role: Overseer

## Purpose

Open the next M29 slice after H03 View Intent Axis.

This runway should use the accepted `Summary / Basis / Details` view switch to make the `Basis` view meaningfully more useful on the existing Briefing family. The goal is a visible presentation improvement, not a new contract or target-project adapter.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overseer.md`
- `workspace/overview.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/OverseerHS95-m29-view-intent-axis-runway.md`
- `workspace/DevHS95-view-intent-axis.md`
- `workspace/OverseerHS96-h03-view-intent-acceptance.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

## Roadmap Alignment

M29 outcome:

- improve the product-facing presentation head through visible renderer capabilities
- keep the test model aligned with renderer capability
- keep workshop tooling bounded and support-only

This runway advances the first expressive view work after H03. It uses the accepted `Basis` view rather than opening a separate stronger-claim view.

## Accepted Source Of Intent

- Human direction to focus this week on presentation improvements.
- Human direction to review split/readiness only when the presentation head is good enough.
- Accepted H03 UX direction: use `Summary`, `Basis`, and `Details`; keep the same surface stable; reorder emphasis instead of replacing the whole display.
- Accepted H03 result in `workspace/OverseerHS96-h03-view-intent-acceptance.md`.
- Roadmap M29 requirement to prove at least one alternate view intent or park it with clear rationale.

## Current Executor

Dev.

## Expected Handoff

`workspace/DevHS97-basis-first-expressive-view.md`

## Ordered Runway

1. Inspect the accepted H03 implementation and smoke model for the Briefing family.
2. Keep the visible view labels stable: `Summary`, `Basis`, and `Details`.
3. Keep `summary-first` as the default behavior.
4. Improve the Briefing family `Basis` view so basis, freshness, coverage, gaps, and warnings have a clearer visual hierarchy than H03.
5. Keep stable across the three views: title/readout label, status band, primary state, freshness/last read cue, basis cue, warning/gap marker, detail affordance, and diagnostics access.
6. Preserve Summary and Details behavior unless a tiny supporting adjustment is required to keep the surface coherent.
7. Add targeted renderer/smoke coverage proving the improved `Basis` view is visible and does not regress Summary or Details identity.
8. Create the expected DevHS handoff with files changed, behavior summary, verification, smoke evidence, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- the Briefing family `Basis` view is visibly more useful than the accepted H03 version
- the view remains a presentation emphasis change, not a new page or separate product mode
- basis, freshness, coverage, gaps, and warnings are easier to scan
- Summary remains the default and still reads as the primary overview
- Details still opens/emphasizes the Readout Detail path without making diagnostics primary
- stable identity elements remain present across all three views
- visible copy stays in Lab slim language and avoids stronger claim wording
- targeted renderer verification or smoke can observe the improved Basis view
- no target-project adapter, source-project meaning, export/seeding, renderer split, durable bridge/runtime contract, IPC channel, network path, or dependency is introduced
- SmokeFlash remains hidden/gated support tooling
- verification passes

Redirect or stop if:

- making the Basis view useful requires source-project data or source-owned terms
- Dev needs to rename or promote view labels as critical/key terms
- the work turns into a broad multi-family view matrix
- a bridge/runtime contract decision is required
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- improve `Basis` view layout and hierarchy for the Briefing family
- make small HTML/CSS/JS changes needed for the improved presentation
- refine local fixture/render metadata only as needed to demonstrate the view
- update targeted renderer/smoke checks for the changed presentation
- update local vocabulary checks if visible copy changes

Not allowed:

- new visible view labels
- target-project adapters
- Atlas/Sense implementation
- export/seeding
- renderer split
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contract
- source-project meaning decisions
- attention triage view
- comparison/delta view
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- the Briefing family cannot carry the expressive Basis work cleanly
- the work needs target-project terms or source-owned meaning
- the view labels need key-term promotion before implementation
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

Run Electron smoke because visible view behavior is expected to change:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology check if visible copy or durable documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Selected family:
- View behavior changed:
- Stable identity elements:
- Copy changes:
- Smoke/test model impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS97-basis-first-expressive-view.md
```

The handoff must state whether the expressive Basis view is ready for Overseer acceptance and whether the next M29 move should continue presentation-head improvement, pause for UI/UX review, or review split readiness.

## Advisory Disposition

- Accepted: H03 View Intent Axis as the basis for this runway.
- Accepted: `Summary`, `Basis`, and `Details` as H03 visible labels for this slice.
- Accepted: use Basis view to express basis/freshness/coverage/gaps/warnings rather than opening a separate stronger-claim view.
- Deferred: key-term promotion for `Summary`, `Basis`, and `Details`.
- Deferred: H08 Presentation Readiness Split.
- Parked: target-project adapters and adoption work.
- Parked: T-lane workshop tooling unless needed to support presentation improvement.
