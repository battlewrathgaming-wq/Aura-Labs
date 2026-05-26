# DevHS133 - Instrument Readout Panel Prototype

Status: Complete
Role: Dev
Date: 2026-05-26

## Request Received

Execute HS133 only: prototype the accepted `output-instrument-readout-panel` composed display as Lab-local, fixture-fed presentation work using the existing workshop/material harness path.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS133-instrument-readout-panel-prototype.md`

## Prototype Path And Behavior

Added `output-instrument-readout-panel` as a workshop-only output prototype in the existing material harness. Normal launch remains free of visible workshop controls.

The compact parent panel includes:

- readout label
- non-color-only state marker
- state label
- primary value or absence state
- readout age
- readout basis cue
- warning/gap marker
- availability reason
- `Readout Detail` reveal

The detail reveal includes basis, availability, freshness, known fields / coverage note, gaps, warnings, fallback basis, source-owned note, and long text examples where relevant.

## State Distinction Notes

Staged states:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`
- source-owned placeholder case

Availability language stays distinct:

- `NO DATA` means no presentable display fields, not proof of upstream absence.
- `UNAVAILABLE` names an unavailable current read.
- `FALLBACK` names fallback basis and does not pretend to be current.
- `PARTIAL` keeps available fields visible while gaps remain explicit.
- Source-owned no-scan placeholder is qualified with owner/layer language.

## Detail Reveal Notes

`Readout Detail` is a button with `aria-expanded` and `aria-controls`. Electron smoke opens it for output captures and verifies detail rows are present.

Long paragraph and long unbroken token examples are rendered as text and styled with wrapping containment.

## Narrow And Reduced-Motion Notes

Narrow layout stacks the panel lanes and detail rows. Electron smoke captured the source-owned placeholder at narrow width with `overflowing: []`.

The output prototype adds no new animation. Existing reduced-motion gates remain intact.

## Compatibility Boundaries Preserved

No changes were made to:

- bridge payloads
- IPC channels
- preload bridge
- service commands
- source-project meaning
- target adapters
- export/seeding shape
- SmokeFlash split timing
- normal launch workshop hiding
- Summary/Basis/Details view options

The output id, staged states, DOM ids, and smoke observations are Lab-local prototype/workshop names only. They are not a bridge/runtime contract.

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
- Smoke captured all `output-instrument-readout-panel` states, Summary/Basis/Details captures for `partial`, and narrow `source-owned-placeholder`.
- Output observations reported detail open, compact basis/freshness/warning copy present, and `overflowing: []`.
- No lingering Electron process was reported after smoke.

Shared terminology verification was required because visible copy and handoff/current wording changed:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 53/53 resource checks.
- Existing inherited advisory warnings remain.

## Residual Risks

- The prototype remains Lab-local and uses the existing workshop harness under ADR 0001; SmokeFlash split remains required before export/seeding/target consumption.
- The output states are presentation states only and must not be treated as shared source enums or runtime payload contract.
- Source-owned placeholder wording remains illustrative and qualified; target projects still own emitted meaning and adapters.
- Existing inherited terminology tripwires remain.
