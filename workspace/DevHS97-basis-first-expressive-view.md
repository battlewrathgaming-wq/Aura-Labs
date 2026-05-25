# DevHS97 - Basis-First Expressive View

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 HS97 only: improve the Briefing family `Basis` view using the accepted Summary / Basis / Details switch, keep Summary as default, preserve Details behavior, verify, update Evidence, and leave this handoff.

## Selected Family

Selected family: `briefing`.

Reason: Briefing already carries accepted basis, freshness, coverage, gap, warning, detail, and diagnostics cues. This keeps the expressive view bounded to one family and avoids new source meaning or target adapter work.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/DevHS97-basis-first-expressive-view.md`

## View Behavior Changed

Added a compact basis-focus rail to the existing Briefing surface. The rail carries:

- Basis
- Freshness
- Coverage
- Gaps / warnings

The rail is present across the existing surface so the display identity stays stable, but the `Basis` view gives it stronger visual priority through border, background, and text emphasis. Summary remains the default overview. Details still opens and emphasizes Readout Detail without making diagnostics primary.

This is a presentation emphasis change only. It does not create a new page, new product mode, target adapter, source-project meaning, bridge/runtime contract, IPC channel, network path, dependency, export, seeding, or renderer split.

Acceptance-review correction: the rail was moved ahead of the state band so the targeted Basis screenshot shows the focus structure in the first visible slice instead of below the fold.

## Stable Identity Elements

Kept stable across Summary, Basis, and Details:

- title
- readout label
- status band
- primary state
- freshness / last read cue
- basis cue
- warning/gap marker
- detail affordance
- diagnostics access

## Copy Changes

Visible copy added:

- `Basis`
- `Freshness`
- `Coverage`
- `Gaps / warnings`

No stronger-claim wording was added. The existing Summary / Basis / Details labels are unchanged and not promoted to durable key terms in this handoff.

## Smoke/Test Model Impact

Renderer shell verification now asserts:

- basis-focus rail exists
- Freshness / Coverage / Gaps / warnings labels exist
- smoke blocks missing basis-focus copy

Electron smoke still uses the targeted Briefing partial view-intent pass and now records:

- `basis_focus_visible`
- `basis_focus_basis`
- `basis_focus_freshness`
- `basis_focus_coverage`
- `basis_focus_marker`

Targeted screenshots remain:

- `family-briefing-state-partial-view-summary-first.png`
- `family-briefing-state-partial-view-basis.png`
- `family-briefing-state-partial-view-details.png`

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:all` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke recorded basis-focus values in Summary, Basis, and Details, with Basis selected and captured.
- After the acceptance-review placement correction, smoke was rerun and passed again with the focus rail visible in `family-briefing-state-partial-view-basis.png`.

Process cleanup check:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Result: no Electron process output remained after smoke.

Shared terminology check was required because visible/documentation wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 existing advisory warnings remain for inherited naming surfaces.

## Ready For Acceptance

The expressive Basis view is ready for Overseer acceptance.

Recommended next M29 move: continue presentation-head improvement only if Human/Overseer wants another bounded expressive slice. A short UI/UX review of the Summary / Basis / Details screenshots would also be reasonable before further view work. I do not recommend split readiness yet from this slice alone.

## Residual Risks

- The expressive Basis work is proven only on the Briefing family.
- `viewIntent` remains local renderer/test state, not a durable bridge/runtime contract.
- Summary / Basis / Details remain accepted visible labels for this slice, not durable key terms.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
