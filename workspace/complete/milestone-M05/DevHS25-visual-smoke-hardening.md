# DevHS25: Visual Smoke Hardening

Date: 2026-05-24
Role: Dev
Project: Aura Lab
Milestone: M05 - Visual Smoke Hardening
Sequence: HS25
Status: Complete; ready for Overseer review

## Scope Executed

Executed only the ordered Dev runway in `workspace/current.md`.

Added a project-local Electron visual smoke wrapper and a dedicated development/review long-text visual smoke mode. Preserved the accepted M04 visual prototype, existing bridge behavior, existing modes, direct smoke command, and provisional `aura.projectBriefing` boundary.

No UI redesign, framework migration, target-project adapter work, durable bridge contract, live/private/destructive action, or cross-project edit was performed.

## Files Changed

- `package.json`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `workspace/current.md`
- `workspace/DevHS25-visual-smoke-hardening.md`

Generated but not tracked as handoff source:

- `.tmp\electron-visual-smoke\visual-smoke-result.json`
- `.tmp\electron-visual-smoke\mode-normal.png`
- `.tmp\electron-visual-smoke\mode-empty.png`
- `.tmp\electron-visual-smoke\mode-stale.png`
- `.tmp\electron-visual-smoke\mode-failed.png`
- `.tmp\electron-visual-smoke\mode-partial.png`
- `.tmp\electron-visual-smoke\mode-long-text.png`
- `.tmp\electron-visual-smoke\narrow-partial.png`

## Wrapper Behavior

Added:

```txt
scripts/electron-visual-smoke.ps1
```

Added npm entrypoint:

```powershell
npm.cmd run smoke:electron
```

The wrapper:

- derives the project root from `scripts\`
- creates project-local `.tmp`, `.tmp\cache`, `.tmp\electron-visual-smoke`, and `.tmp\electron-visual-smoke\user-data`
- removes only the previous `visual-smoke-result.json` before launch so stale success cannot mask a failed run
- sets `AURA_LAB_ELECTRON_VISUAL_SMOKE=1`
- sets `AURA_LAB_VISUAL_SMOKE_DIR` under the project-local `.tmp`
- sets `npm_config_cache` under `.tmp\cache\npm`
- runs `npm.cmd start`
- fails if Electron exits nonzero
- fails if `.tmp\electron-visual-smoke\visual-smoke-result.json` is missing
- fails if the result JSON status is not `passed`

## Long-Text Mode

Added `long-text` to `BRIEFING_TEST_MODES`.

Long-text mode:

- remains development/review scoped
- returns a populated briefing
- stresses title, current focus, expected output, previous accepted handshake, active milestone, source labels, and attention items
- keeps Needs Attention capped to three visible items
- does not change product semantics
- does not define a durable bridge/data contract

Existing modes retained:

- normal
- empty
- stale
- failed
- partial

Legacy `fixtureState: partial` compatibility remains verified.

## Visual Smoke Coverage

Updated Electron visual smoke to capture:

- `mode-normal.png`
- `mode-empty.png`
- `mode-stale.png`
- `mode-failed.png`
- `mode-partial.png`
- `mode-long-text.png`
- `narrow-partial.png`

The harness explicitly re-selects `partial` before narrow capture so `narrow-partial.png` remains a true partial-state capture after the new long-text mode runs.

## Verification

Command:

```powershell
npm.cmd run verify:all
```

Result: passed.

Command:

```powershell
npm.cmd run smoke:electron
```

Result: passed.

Command:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Result: passed.

Process cleanup:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Result: no Electron process output after smoke exit.

## Smoke Artifact

Result artifact:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
```

Final observed result:

- `status`: `passed`
- `modes_checked`: normal, empty, stale, failed, partial, long-text
- long-text screenshot present: `mode-long-text.png`
- narrow partial screenshot present: `narrow-partial.png`
- long-text `overflowing`: `[]`
- narrow partial `selected_mode`: `partial`
- narrow partial `overflowing`: `[]`
- `frame_controls_visible`: `true`
- `briefing_before_diagnostics`: `true`
- `visual_structure.system_surface`: `true`
- `visual_structure.coordination_facts`: `true`
- `visual_structure.secondary_surfaces`: `2`

## Static And Service Verification Updates

Updated service verification to assert:

- `long-text` exists in available modes
- long-text mode echoes `mode: long-text`
- long-text mode is populated
- long-text title, focus, expected output, source labels, and capped attention items are present

Updated renderer/static verification to assert:

- `smoke:electron` package script exists
- `scripts/electron-visual-smoke.ps1` exists and sets Aura Lab smoke environment
- wrapper validates `visual-smoke-result.json`
- wrapper keeps artifacts under `.tmp`
- wrapper derives project paths instead of hardcoding drive paths
- visual smoke captures `mode-long-text.png`
- visual smoke mode list includes normal, empty, stale, failed, partial, and long-text

## Checks Not Run

No unrequested checks were run.

No live, private, destructive, network, package-install, git write, or cross-project mutation action was needed.

## Git / Workspace Notes

Git exists in `F:\Projects\AURA- Lab`.

Observed initial state for this packet:

```txt
## main...origin/main
 M workspace/current.md
 M workspace/overview.md
?? workspace/OverseerHS25-visual-smoke-hardening-runway.md
```

Those inherited workspace changes were preserved. No files were staged or committed.

## Remaining Risks Or Questions

- Human-directed visual polish remains deferred.
- Reusable kit extraction remains deferred.
- Target-project adapters remain deferred.
- Durable bridge/data contract remains deferred.
- Framework choice remains deferred.
- Aura Core transfer remains deferred.
- Overseer should review HS25 evidence and decide whether M05 can close.
