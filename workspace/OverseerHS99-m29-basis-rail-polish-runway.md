# OverseerHS99 - M29 Basis Rail Polish Runway

Status: Active runway
Date: 2026-05-25
Role: Overseer

## Purpose

Open the next M29 slice after HS97 acceptance and UI/UX review.

This runway should polish the existing Briefing `Basis` rail so it reads more like an instrument strip and less like another row of cards. This is a restraint-and-craft pass, not a feature expansion.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS98-hs97-basis-view-acceptance.md`
- `workspace/UIUXHS99-hs97-view-polish-advisory.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`

## Roadmap Alignment

M29 outcome:

- improve the product-facing presentation head through visible renderer capabilities
- keep the test model aligned with renderer capability
- keep workshop tooling bounded and support-only

This runway continues M29 by polishing the accepted expressive Basis view before adding another view or reviewing split readiness.

## Accepted Source Of Intent

- Human direction to focus this phase on presentation improvements.
- Human direction to review split/readiness only when the presentation head is good enough.
- Accepted HS97 result in `workspace/OverseerHS98-hs97-basis-view-acceptance.md`.
- Human-provided UI/UX advisory accepted into `workspace/UIUXHS99-hs97-view-polish-advisory.md`.

## Current Executor

Dev.

## Expected Handoff

`workspace/DevHS99-basis-rail-polish.md`

## Ordered Runway

1. Inspect the current Briefing Summary / Basis / Details implementation and HS97 smoke screenshots.
2. Keep `Summary`, `Basis`, and `Details` as the only visible view options.
3. Keep the Basis rail before the readout body.
4. Refine the Basis rail styling so it reads as a compact instrument/status strip rather than another card row.
5. Keep `Freshness`, `Coverage`, and `Gaps / warnings` visible for this slice; do not promote them to durable key terms.
6. Keep Summary and Details stable; the polish should not turn into a new view, new content model, or major palette redesign.
7. Preserve current renderer/smoke checks and update them only if the markup or expected visual target changes.
8. Create `workspace/DevHS99-basis-rail-polish.md` with files changed, polish summary, verification, screenshot notes, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- Summary, Basis, and Details remain the only visible view options
- the Basis rail remains before the readout body
- the Basis view gives the rail clear priority without making Summary or Details feel broken
- the rail reads more like a compact instrument/status strip and less like another row of cards
- the first screen reads faster, not just more decorated
- `Freshness`, `Coverage`, and `Gaps / warnings` remain visible labels, but are not promoted to durable key terms
- no source-project meaning is imported
- no new bridge/runtime contract, target adapter, export path, renderer split, IPC channel, network path, or dependency is introduced
- existing targeted screenshots still pass: `summary-first`, `basis`, and `details`
- verification passes

Redirect or stop if:

- useful polish requires changing view labels
- the work turns into another expressive view
- the rail polish requires target-project terms or source-owned meaning
- the work becomes a major palette/material redesign
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- small HTML/CSS changes for the Basis rail
- small renderer changes only if needed to support the polish
- targeted verification/smoke updates if markup changes
- minor copy adjustment only if it stays inside accepted Lab slim language

Not allowed:

- new visible view labels
- another expressive view
- target-project adapters
- Atlas/Sense implementation
- export/seeding
- renderer split
- broad visual-smoke matrix
- durable bridge/runtime contract
- durable key-term promotion
- diagnostics-first work
- major palette/material redesign
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- the rail cannot be made more instrument-like without changing accepted structure
- view labels need to change
- source-owned meaning decisions are required
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

Run Electron smoke because visible layout/styling is expected to change:

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
- Polish applied:
- View labels preserved:
- Rail placement:
- Screenshot/smoke notes:
- Verification run:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS99-basis-rail-polish.md
```

The handoff must state whether the polish is ready for Overseer acceptance and whether the next M29 move should continue presentation-head improvement, pause for UI/UX review, or review split readiness.

## Advisory Disposition

- Accepted: UI/UX recommendation to polish current views before adding another expressive view.
- Accepted: keep `Summary`, `Basis`, and `Details` as current visible view labels.
- Accepted: keep `Freshness`, `Coverage`, and `Gaps / warnings` visible for this slice.
- Deferred: durable key-term promotion for current view and rail labels.
- Deferred: split-readiness review.
- Parked: another expressive view.
- Parked: target-project adapters and adoption work.
