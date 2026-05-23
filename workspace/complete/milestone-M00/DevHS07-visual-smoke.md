# DevHS07: Visual Smoke

Date: 2026-05-23
Role: Dev
Project: Aura Lab
Milestone: M00 - Aura Lab Boot
Sequence: HS07
Source packet: workspace/current.md
Status: Complete, pending Overseer review

## Source Read

- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `docs/README.md`
- `workspace/UIUXHS01-presentation-layer-intent.md`
- `workspace/DevHS02-presentation-briefing-slice.md`
- `workspace/DevHS03-briefing-verification-stability.md`
- `workspace/DevHS05-bridge-test-modes.md`
- `workspace/OverseerHS06-bridge-test-modes-acceptance.md`
- `package.json`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`

## Confirmations

- cwd: `F:\Projects\AURA- Lab`
- project root: `F:\Projects\AURA- Lab`
- git: no `.git` directory found; no git assumptions made
- workspace files: required workspace files present
- active milestone: M00 - Aura Lab Boot
- current executor: Dev
- expected handshake: `workspace/DevHS07-visual-smoke.md`
- required verification: `npm.cmd run verify:all`, `npm.cmd start`

## Files Changed

- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS07-visual-smoke.md`

## Sibling Smoke Pattern Checked

Checked existing smoke patterns in sibling projects, especially:

- `F:\Projects\AURA-Sense\scripts\electron-visual-smoke.ps1`
- `F:\Projects\AURA-Atlas\scripts\electron-visual-smoke.ps1`

Reusable pattern observed: explicit smoke env flag, project-local `.tmp\electron-visual-smoke` artifacts, screenshot/result capture, isolated user data, no live network requirement, and clean Electron exit.

## Implemented

- Added an explicit Aura Lab visual smoke path behind `AURA_LAB_ELECTRON_VISUAL_SMOKE=1`.
- Smoke captures screenshots and `visual-smoke-result.json` under `.tmp\electron-visual-smoke`.
- Smoke exercises Normal, Empty, Stale, Failed, and Partial bridge modes through the real renderer selector.
- Smoke captures a narrower Partial layout after resizing the Electron window.
- Smoke uses isolated smoke `userData` under the local `.tmp` artifact folder.
- Updated renderer shell verification to cover the smoke flag and artifact hooks.

## Verification

Baseline command:

```powershell
npm.cmd run verify:all
```

Result: Passed.

```txt
core utilities verified
services verified
HTTP client verified
SDE source bundle utility verified
Frame module verified
renderer shell verified
all checks verified
```

Initial launch command:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Result: Failed because Aura Lab has no local `node_modules\.bin\electron`.

Successful launch command:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; $env:Path='F:\Projects\AURA-Sense\node_modules\.bin;' + $env:Path; npm.cmd start
```

Result: Passed. The command ran from the Aura Lab root and used the Aura Lab app entrypoint with an already-installed sibling Electron binary.

Final verification after fixing the smoke harness:

```powershell
npm.cmd run verify:all
```

Result: Passed.

## Visual Smoke Output

Result artifact:

- `.tmp\electron-visual-smoke\visual-smoke-result.json`

Screenshots:

- `.tmp\electron-visual-smoke\mode-normal.png`
- `.tmp\electron-visual-smoke\mode-empty.png`
- `.tmp\electron-visual-smoke\mode-stale.png`
- `.tmp\electron-visual-smoke\mode-failed.png`
- `.tmp\electron-visual-smoke\mode-partial.png`
- `.tmp\electron-visual-smoke\narrow-partial.png`

Observed:

- app launched and exited cleanly
- Frame controls visible
- briefing appears before diagnostics
- bridge test mode selector is visible, quiet, and development-scoped
- Normal, Empty, Stale, Failed, and Partial modes all update through the UI selector
- mode title, status, certainty, freshness, source language, and mode note change coherently
- narrow Partial layout remains readable

The smoke artifact flagged the long `h1` as overflowing, but screenshot review showed the title wrapping inside its container with no visible overlap or awkward spill.

## Checks Not Run

- No network checks.
- No dependency installation.
- No destructive cleanup.
- No git actions.

## Process Cleanup

The successful smoke run exited on its own. `Get-Process | Where-Object { $_.ProcessName -like '*electron*' }` returned no Electron process.

## Remaining Risk

- Aura Lab does not currently have local `node_modules`, so plain `npm.cmd start` cannot launch until dependencies are installed or an Electron binary is otherwise available.
- The live smoke used the already-installed AURA-Sense Electron binary as a local runtime workaround.
- The long briefing title is visually acceptable in the captured viewport, but it remains large and wraps across multiple lines.

## Recommended Next Action

Overseer should decide whether this visual smoke is sufficient for M00 acceptance or whether Aura Lab should add a project-local `smoke:electron` script/dependency setup in a future packet.
