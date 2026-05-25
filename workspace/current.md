# Current Workspace Packet

Status: Idle
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS97 - Basis-First Expressive View
Current executor: Human / Overseer
Current focus: HS97 accepted; awaiting direction on another bounded presentation-head slice, UI/UX review, or split-readiness review.
Expected artifact filename: No active artifact expected.

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.

Accepted HS97 result:

- The Briefing family now has a compact basis-focus rail.
- The rail surfaces `Basis`, `Freshness`, `Coverage`, and `Gaps / warnings`.
- The rail sits before the state band so the `Basis` view shows its focus structure in the first visible slice.
- `Basis` gives the rail stronger visual priority while keeping Summary and Details stable.
- `summary-first` remains the default behavior.
- Details still emphasizes the Readout Detail path without making diagnostics primary.
- Smoke captures `summary-first`, `basis`, and `details` on `briefing` / `partial`.
- No target-project adapter, source-project meaning, export/seeding, renderer split, durable bridge/runtime contract, IPC channel, network path, or dependency was introduced.

## Source Of Intent

Accepted source of intent:

- Human direction to focus this phase on presentation improvements.
- Human direction to review split/readiness only when the presentation head is good enough.
- Human confirmation that the H-lane Presentation Head Milestones are the active line.
- Accepted H03 UX direction: `Summary / Basis / Details`, segmented switch, same surface, reordered emphasis.
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/OverseerHS95-m29-view-intent-axis-runway.md`
- `workspace/DevHS95-view-intent-axis.md`
- `workspace/OverseerHS96-h03-view-intent-acceptance.md`
- `workspace/OverseerHS97-m29-basis-first-expressive-view-runway.md`
- `workspace/DevHS97-basis-first-expressive-view.md`
- `workspace/OverseerHS98-hs97-basis-view-acceptance.md`

## Latest Accepted Artifacts

- `workspace/DevHS97-basis-first-expressive-view.md`
- `workspace/OverseerHS98-hs97-basis-view-acceptance.md`

## Verification Notes

HS97 acceptance verification rerun by Overseer:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

All passed.

Shared terminology check rerun from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Passed 53/53 checks with the existing 24 advisory warnings.

Electron smoke result:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- `view_intents_checked.briefing`: `summary-first`, `basis`, `details`
- `basis_focus_visible`: true in targeted view observations
- screenshot reviewed: `family-briefing-state-partial-view-basis.png`
- no Electron process remained afterward

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` is local renderer/test state only, not a durable bridge/runtime contract.
- HS97 is proven only on the Briefing family.
- `Summary`, `Basis`, and `Details` remain accepted visible labels for this slice, not durable key terms.
- The new focus labels are Lab-visible presentation labels, not source-project terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.

## Recommended Next Choices

- Short UI/UX review of H03/HS97 screenshots.
- Another bounded presentation-head slice if Human wants to keep improving the renderer this week.
- Split-readiness review only when the presentation head feels good enough to consider export/seeding.

## Parked Items

- Target-project adapters and adoption work.
- Export/seeding.
- Renderer split.
- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Durable bridge/runtime contracts.
