# DevHS91 - Authority Window TTL Strip Prototype

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M28 only: refine the Lab-local `mat-authority-window-ttl-strip` workshop harness into the smallest polished material prototype, keep normal launch clean, verify all staged states, update Evidence, and leave this handoff.

Human/Overseer taste nudge applied inside M28 bounds: calm instrument-panel feel, compact state, stable timer chip, short reason, and detail only when needed.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/DevHS91-authority-window-ttl-strip-prototype.md`

## What Was Implemented

Refined the workshop-only TTL strip from a static row into a compact Lab-local material prototype:

- fixed-width timing/cooldown chip with tabular numeric treatment
- short state label and short reason line
- non-color-only state marker text (`ID`, `ON`, `OK`, `TO`, `CD`, `BL`, `MP`)
- calmer instrument-panel styling in place of the dashed workshop alert treatment
- structured detail rows for authority note, availability, warnings, blocked basis, cooldown, manual path, and reason
- detail affordance remains wired and hides if a future state has no detail rows
- narrow layout collapses strip and detail rows into readable single-column flow

The prototype remains Lab-local staged material. It does not add a bridge contract, target-project adapter, product navigation path, IPC channel, network access, or source-project semantics.

## Material States Supported

- `idle`: no active window; ready when an authority interval is supplied
- `active-window`: visible `TTL 00:03`; bounded interval copy
- `captured`: display-only handoff marker
- `timeout`: window closed; TTL elapsed detail
- `cooldown`: visible `Next in 00:05`; next eligible interval copy
- `blocked`: authority path unavailable with visible blocked basis
- `manual-path`: shortcut unavailable with manual route detail

## Normal Launch Impact

Normal launch remains clean:

- `body data-workshop="false"` remains the default.
- Workshop controls and the material harness remain `.workshop-only`.
- No normal-launch route or data model was added for SmokeFlash/material states.
- No bridge/runtime payload fields were added.

## Workshop Launch Impact

Workshop/smoke launch still uses explicit workshop flags and now can stage/review every TTL-strip state. The material harness is visible only in workshop mode and remains static Lab staging data.

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
- `verify:vocabulary` passed with 35 warning-only protected-term discovery candidates.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke captured all staged material states and one narrow cooldown view:
  - `material-authority-window-ttl-strip-state-idle.png`
  - `material-authority-window-ttl-strip-state-active-window.png`
  - `material-authority-window-ttl-strip-state-captured.png`
  - `material-authority-window-ttl-strip-state-timeout.png`
  - `material-authority-window-ttl-strip-state-cooldown.png`
  - `material-authority-window-ttl-strip-state-blocked.png`
  - `material-authority-window-ttl-strip-state-manual-path.png`
  - `material-authority-window-ttl-strip-state-cooldown-narrow.png`

Also ran shared terminology check because visible UI copy changed:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 existing advisory warnings remain for inherited/internal `trust-strip` and `certainty` surfaces.

Process cleanup check:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Result: no Electron process output remained after smoke.

## Ready For Acceptance

Ready for Overseer acceptance as an M28 Lab-local prototype.

A combined output reference should not be added yet unless Overseer wants a later library/index entry for accepted prototype outputs. This packet produced the first visible material prototype, not an exportable/seeding-ready renderer head.

## Residual Risks

- SmokeFlash/material harness code still lives in the offered renderer bundle; ADR 0001 accepts this for Lab-local material work only.
- Split SmokeFlash before export/seeding or target-project adoption.
- TTL/cooldown timing is staged/static, not runtime timing behavior.
- State labels remain Lab staging labels, not bridge/runtime contract values.
