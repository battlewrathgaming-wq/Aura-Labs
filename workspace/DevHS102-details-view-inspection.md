# DevHS102 - Details View Inspection

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 HS102 only: improve the Briefing `Details` view as a calm inspection surface before the renderer security review.

## Files Changed

- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS102-details-view-inspection.md`

## Details Behavior Changed

The `Details` view now brings the existing Readout Detail drawer directly into the first Details flow, before the Bridge State Readout band. The drawer gets a restrained inspection treatment: stronger but calm border, a slim header band, grid texture, highlighted readout/timing/basis/marker rows, and clearer gap/warning lines.

This uses the existing labels and data:

- `Readout Detail`
- `Readout age`
- `State summary`
- `Readout basis`
- `Known fields`
- `Band marker`
- `Source paths`

No new content model, source-project meaning, bridge/runtime contract, IPC channel, dependency, target adapter, export path, or renderer split was introduced.

## Summary / Basis Stability

- `Summary`, `Basis`, and `Details` remain the only visible view options.
- Summary remains the default overview.
- Basis rail placement and HS99 polish are preserved.
- Diagnostics remain secondary and are not promoted into the Details view.
- Workshop-only controls and the material harness remain support surfaces and are ordered after the product-facing Details flow in Details mode.

## Smoke / Screenshot Notes

Targeted view smoke still captures:

- `family-briefing-state-partial-view-summary-first.png`
- `family-briefing-state-partial-view-basis.png`
- `family-briefing-state-partial-view-details.png`

The Details screenshot now shows the Readout Detail inspection surface in the first visible slice. Visual smoke also resets targeted view screenshots to the Briefing surface before capture, so material/workshop scroll state does not leak into Summary / Basis / Details screenshots.

Smoke now records and blocks for the Details inspection path:

- drawer visible
- drawer open
- diagnostics still secondary

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
- Details view smoke recorded `source_drawer_open: true`, `diagnostics_secondary: true`, and no horizontal overflow.

Shared terminology check was required because durable handoff/current wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The Details view inspection slice is ready for Overseer acceptance.

Recommended next M29 move: renderer security review, as sequenced by HS101, after Overseer accepts this slice.

## Residual Risks

- HS102 remains proven only on the Briefing family.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- The current view and drawer labels remain accepted visible labels for this slice, not durable key terms.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
