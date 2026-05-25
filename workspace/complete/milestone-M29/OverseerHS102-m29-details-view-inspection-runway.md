# OverseerHS102 - M29 Details View Inspection Runway

Status: Active runway
Date: 2026-05-25
Role: Overseer

## Purpose

Open the final bounded presentation-head slice before renderer security review.

This runway should improve the existing Briefing `Details` view so it reads as a calm inspection surface for readout detail, gaps, warnings, and supporting rows. Summary and Basis are already accepted and should remain stable.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS100-hs99-basis-rail-polish-acceptance.md`
- `workspace/OverseerHS101-m29-next-slice-security-sequence.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`

## Roadmap Alignment

M29 outcome:

- improve the product-facing presentation head through visible renderer capabilities
- keep the test model aligned with renderer capability
- keep workshop tooling bounded and support-only

This runway completes the accepted sequence from HS101: one more bounded presentation-head slice before the renderer security review.

## Accepted Source Of Intent

- Human direction to do one bounded presentation slice, then a renderer security review.
- Accepted HS99 Basis rail polish in `workspace/OverseerHS100-hs99-basis-rail-polish-acceptance.md`.
- Accepted sequence record in `workspace/OverseerHS101-m29-next-slice-security-sequence.md`.
- M29 roadmap direction to improve the presentation head without target adapters or export/seeding work.

## Current Executor

Dev.

## Expected Handoff

`workspace/DevHS102-details-view-inspection.md`

## Ordered Runway

1. Inspect the current Briefing Summary / Basis / Details implementation and smoke screenshots.
2. Keep `Summary`, `Basis`, and `Details` as the only visible view options.
3. Keep Summary and Basis behavior stable except for tiny supporting style adjustments if needed.
4. Improve the Details view so the Readout Detail path, gaps, warnings, timing, and supporting rows read as an intentional inspection surface.
5. Keep diagnostics secondary; Details must not become a diagnostics-first view.
6. Keep existing Lab slim labels unless a minor copy adjustment is needed for clarity.
7. Preserve or update targeted smoke so `summary-first`, `basis`, and `details` still pass on Briefing partial.
8. Create `workspace/DevHS102-details-view-inspection.md` with files changed, behavior summary, screenshot notes, verification, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- Summary, Basis, and Details remain the only visible view options
- Details view visibly improves inspection of readout detail, gaps, warnings, timing, and supporting rows
- Details does not become a diagnostics-first surface
- Summary remains the default overview
- Basis rail remains before the readout body and keeps its accepted polish
- the first Details screenshot reads as an intentional inspection mode, not just the same surface with a highlighted drawer
- no source-project meaning is imported
- no new bridge/runtime contract, target adapter, export path, renderer split, IPC channel, network path, or dependency is introduced
- targeted screenshots still pass: `summary-first`, `basis`, and `details`
- verification passes

Redirect or stop if:

- useful Details work requires changing view labels
- the work turns into a new content model or another named expressive view
- the work requires target-project terms or source-owned meaning
- the work becomes a major redesign
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- small HTML/CSS/JS changes for Details view hierarchy
- small copy adjustment only if it stays inside accepted Lab slim language
- targeted renderer/smoke updates if structure changes
- style adjustments needed to keep Summary, Basis, and Details coherent

Not allowed:

- new visible view labels
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
- renderer security review in this packet

## Stop Conditions

Stop and return to Human / Overseer if:

- Details cannot be improved without changing accepted view structure
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

Run Electron smoke because visible Details behavior is expected to change:

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
- Details behavior changed:
- Summary/Basis stability:
- Screenshot/smoke notes:
- Verification run:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS102-details-view-inspection.md
```

The handoff must state whether the Details view slice is ready for Overseer acceptance and whether the next M29 move should be the renderer security review.

## Advisory Disposition

- Accepted: one final bounded presentation-head slice before renderer security review.
- Accepted: Details view inspection improvement as the selected slice.
- Deferred: renderer security review until this slice is accepted.
- Deferred: split-readiness review.
- Parked: target-project adapters and adoption work.
