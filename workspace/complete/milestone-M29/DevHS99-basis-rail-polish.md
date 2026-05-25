# DevHS99 - Basis Rail Polish

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 HS99 only: polish the Briefing `Basis` rail so it reads as a compact instrument/status strip rather than another card row, while preserving the accepted Summary / Basis / Details structure.

## Files Changed

- `src/renderer/styles.css`
- `workspace/current.md`
- `workspace/DevHS99-basis-rail-polish.md`

## Polish Summary

The Basis rail remains in the same location before the readout body and keeps the same visible labels:

- `Basis`
- `Freshness`
- `Coverage`
- `Gaps / warnings`

The polish is CSS-only. It flattens the inner cells into one joined strip with slim separators, tighter padding, a steadier grid texture, calmer border radius, and restrained Basis-mode emphasis. The rail now reads less like four nested cards and more like a compact status/basis instrument.

No bridge data shape, renderer state axis, source-project meaning, IPC channel, dependency, target adapter, export path, or renderer split was introduced.

## View Stability

- `Summary`, `Basis`, and `Details` remain the only visible view options.
- `summary-first` remains the default behavior.
- Summary and Details behavior were not changed.
- The Basis rail remains before the Bridge State Readout body.
- `Freshness`, `Coverage`, and `Gaps / warnings` remain visible labels for this slice and were not promoted to durable key terms.

## Screenshot Notes

Electron smoke refreshed the targeted Briefing partial view screenshots:

- `family-briefing-state-partial-view-summary-first.png`
- `family-briefing-state-partial-view-basis.png`
- `family-briefing-state-partial-view-details.png`

The `basis` screenshot shows the rail as a joined strip with separators and compact status rhythm. Smoke still records the basis-focus fields across the targeted view pass.

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `verify:all` passed.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke recorded `basis_focus_visible: true` and populated basis/freshness/coverage/marker values for Summary, Basis, and Details.

Shared terminology check was required because durable handoff/current wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The Basis rail polish is ready for Overseer acceptance.

Recommended next M29 move: pause for a short UI/UX screenshot review of the refined Summary / Basis / Details set. Continue presentation-head improvement after that review if the Human and Overseer want one more bounded slice. I do not recommend split readiness from HS99 alone.

## Residual Risks

- HS99 remains proven only on the Briefing family.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- Summary / Basis / Details and the rail labels remain accepted visible labels for this slice, not durable key terms.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
