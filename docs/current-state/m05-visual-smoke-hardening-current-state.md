# M05 Visual Smoke Hardening Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M05 - Visual Smoke Hardening.

The accepted visual prototype now has a project-local Electron smoke wrapper and a dedicated long-text review mode. This hardens the post-bridge presentation proving bench by making visual smoke easier to run consistently and by testing whether the accepted display mapping holds under longer content pressure.

## Accepted Capabilities

- `npm.cmd run smoke:electron` runs a project-local Electron visual smoke wrapper.
- `scripts/electron-visual-smoke.ps1` derives the project root from its script path.
- Smoke output remains under project-local `.tmp`.
- The wrapper sets Aura Lab visual smoke environment variables.
- The wrapper validates `.tmp\electron-visual-smoke\visual-smoke-result.json`.
- The wrapper fails when Electron exits nonzero, the result JSON is missing, or the result status is not `passed`.
- A development/review `long-text` bridge test mode is available.
- Existing normal, empty, stale, failed, and partial modes remain available.
- Visual smoke captures normal, empty, stale, failed, partial, long-text, and narrow partial screenshots.
- Long-text and narrow partial captures report no horizontal overflow.
- The direct visual smoke launch path remains supported.
- No Electron process remains after smoke exits.

## Verification

Accepted commands:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Get-Process electron -ErrorAction SilentlyContinue
```

Accepted results:

```txt
verify:all passed
smoke:electron passed
direct visual smoke passed
Get-Process electron returned no process output
```

Accepted smoke artifact:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
status: passed
modes_checked: normal, empty, stale, failed, partial, long-text
screenshots: mode-normal.png, mode-empty.png, mode-stale.png, mode-failed.png, mode-partial.png, mode-long-text.png, narrow-partial.png
long-text overflowing: []
narrow partial overflowing: []
```

## Boundaries

- This hardens Aura Lab presentation verification only.
- `aura.projectBriefing` remains provisional.
- Long-text mode is development/review scoped fixture data.
- No durable bridge/data contract was defined.
- No UI redesign was performed.
- No target-project adapter work was performed.
- No reusable component library was extracted.
- Atlas, Sense, and Aura Core have not adopted this smoke wrapper or visual grammar.
- Generated `.tmp` smoke artifacts remain local generated artifacts.
