# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M05 - Visual Smoke Hardening
Roadmap source: M04 closure residual risks
Sequence: HS25
Previous accepted handshake: `workspace/complete/milestone-M04/OverseerHS24-m04-closure.md`
Current executor: Dev
Current focus: add a project-local Electron smoke wrapper and dedicated long-text visual smoke mode
Expected DevHS filename: `workspace/DevHS25-visual-smoke-hardening.md`
Archive target on milestone completion: `workspace/complete/milestone-M05/`

## Purpose

This is the only active executable work packet for Aura Lab.

M04 accepted the one-screen Aura Lab visual prototype. Its two concrete residual risks were:

- no project-local `smoke:electron` wrapper
- no dedicated long-text visual smoke mode

This packet asks Dev to harden verification around the accepted visual prototype. It does not ask for new product UI, visual redesign, target-project adapter work, reusable kit extraction, or a bridge contract.

## Source Of Intent

Accepted:

- `workspace/complete/milestone-M04/OverseerHS24-m04-closure.md`: M04 accepted, with smoke wrapper and long-text mode deferred.
- `docs/current-state/m04-visual-prototype-current-state.md`: accepted current visual prototype state.
- `workspace/complete/milestone-M04/DevHS23-aura-lab-visual-prototype.md`: accepted implementation and verification handoff.

Deferred:

- human-directed visual polish
- reusable kit extraction
- Atlas/Sense/Core adapter work
- durable bridge/data contract
- framework or stack choice
- Aura Core transfer

Rejected:

- broadening this packet into visual redesign
- changing product semantics
- adding target-project adoption claims

Escalated: None.

Promoted into durable docs: None yet.

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `workspace/complete/milestone-M04/OverseerHS24-m04-closure.md`
- `workspace/complete/milestone-M04/DevHS23-aura-lab-visual-prototype.md`
- `package.json`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Optional read-only reference:

- `F:\Projects\AURA-Atlas\scripts\electron-visual-smoke.ps1`
- `F:\Projects\AURA-Sense\scripts\electron-visual-smoke.ps1` if present

Do not edit any project outside Aura Lab.

## Ordered Dev Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, current branch/state, and required files. Read all required sources before editing.
2. Add a project-local Electron visual smoke wrapper:
   - expected script path: `scripts/electron-visual-smoke.ps1`
   - it should set project-local `.tmp` smoke/cache paths as needed
   - it should set `AURA_LAB_ELECTRON_VISUAL_SMOKE=1`
   - it should set `AURA_LAB_VISUAL_SMOKE_DIR` under `F:\Projects\AURA- Lab\.tmp`
   - it should run the app through the existing local Electron start path
   - it should fail if `.tmp\electron-visual-smoke\visual-smoke-result.json` is missing or reports non-passed status
3. Add `npm.cmd run smoke:electron` support in `package.json` that runs the wrapper.
4. Add a dedicated `long-text` visual smoke/test mode:
   - keep existing normal, empty, stale, failed, and partial modes
   - long-text mode must remain development/review scoped
   - long-text data should stress title, focus, sources, attention items, and coordination facts without changing product semantics
   - it must not require a durable bridge contract
5. Update visual smoke capture to include long-text mode and continue capturing narrow partial.
6. Update verification:
   - service verification should check long-text briefing mode shape
   - renderer/static verification should check wrapper/script availability and long-text smoke coverage
   - keep existing bridge/test-mode assertions passing
7. Run required verification, update Evidence / Dev Handoff below, and create `workspace/DevHS25-visual-smoke-hardening.md`.

## Guardrails And Non-Goals

- Do not redesign the UI.
- Do not change accepted visual prototype semantics.
- Do not add target-project adapter work.
- Do not add a UI framework or stack.
- Do not define a durable bridge/data contract.
- Do not remove existing visual smoke command support.
- Do not stage `.tmp`, `node_modules`, screenshots, result JSON, cache, or generated artifacts.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- long-text mode requires a broader data-contract decision
- wrapper implementation requires changing the app launch model beyond local smoke
- Electron smoke fails after reasonable local fixes
- process cleanup is uncertain
- external project edits or live/private/destructive actions become necessary

## Required Verification

Run:

```powershell
npm.cmd run verify:all
```

Run the new wrapper:

```powershell
npm.cmd run smoke:electron
```

Also ensure the currently accepted direct smoke command still works unless the wrapper intentionally replaces it and Overseer accepts that:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Expected evidence:

- `verify:all` passes.
- `smoke:electron` passes.
- direct visual smoke still passes, or any replacement is explicitly justified.
- visual smoke covers normal, empty, stale, failed, partial, long-text, and narrow partial.
- long-text capture reports no horizontal overflow.
- no Electron process remains after smoke.

## Evidence

Dev updates this section before handoff.

Verification run:

```txt
npm.cmd run verify:all
Result: passed.

npm.cmd run smoke:electron
Result: passed. Wrapper launched local Electron smoke and validated .tmp\electron-visual-smoke\visual-smoke-result.json.

$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Result: passed. Direct visual smoke path remains supported.

Get-Process electron -ErrorAction SilentlyContinue
Result: no Electron process output after smoke exit.
```

Files changed:

```txt
package.json
scripts/electron-visual-smoke.ps1
scripts/verify-renderer-shell.js
scripts/verify-services.js
src/main/main.js
src/services/serviceRegistry.js
workspace/current.md
workspace/DevHS25-visual-smoke-hardening.md
```

Findings:

```txt
Added project-local Electron smoke wrapper and npm smoke:electron script.
Added development/review scoped long-text project briefing mode without removing normal, empty, stale, failed, or partial.
Visual smoke now captures normal, empty, stale, failed, partial, long-text, and narrow partial.
Final visual-smoke-result.json status: passed. Long-text and narrow partial reported overflowing: [].
Wrapper validates that visual-smoke-result.json exists and reports status passed.
```

Deferrals:

```txt
Human-directed visual polish, reusable kit extraction, target-project adapters, durable bridge contract, framework choice, and Aura Core transfer remain deferred.
```

## Dev Handoff

Dev must complete this section before returning:

Summary of implementation:

Added HS25 verification hardening for Aura Lab: a project-local Electron smoke wrapper, npm script entrypoint, dedicated long-text bridge review mode, long-text visual smoke capture, and focused static/service verification.

Exact files changed:

- `package.json`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `workspace/current.md`
- `workspace/DevHS25-visual-smoke-hardening.md`

Wrapper behavior:

- `npm.cmd run smoke:electron` runs `scripts/electron-visual-smoke.ps1`.
- The wrapper derives the project root from its script path.
- It creates project-local `.tmp`, `.tmp\cache`, `.tmp\electron-visual-smoke`, and `.tmp\electron-visual-smoke\user-data`.
- It sets `AURA_LAB_ELECTRON_VISUAL_SMOKE=1`.
- It sets `AURA_LAB_VISUAL_SMOKE_DIR` under project-local `.tmp`.
- It sets `npm_config_cache` under project-local `.tmp\cache\npm`.
- It runs `npm.cmd start`.
- It fails if `visual-smoke-result.json` is missing, if Electron exits nonzero, or if result status is not `passed`.

Long-text mode data and state behavior:

- Added `long-text` to the development/review `BRIEFING_TEST_MODES`.
- Long-text mode remains populated and provisional; it does not define a durable bridge contract.
- The fixture stresses title, current focus, expected output, previous handshake, milestone, source labels, and attention items.
- Existing normal, empty, stale, failed, partial, and legacy `fixtureState: partial` behavior remains covered.

Verification commands and results:

- `npm.cmd run verify:all` passed.
- `npm.cmd run smoke:electron` passed.
- `$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start` passed.
- `Get-Process electron -ErrorAction SilentlyContinue` returned no Electron process output after smoke exit.

Visual smoke result path and screenshot notes:

- Result: `.tmp\electron-visual-smoke\visual-smoke-result.json`
- Screenshots: `mode-normal.png`, `mode-empty.png`, `mode-stale.png`, `mode-failed.png`, `mode-partial.png`, `mode-long-text.png`, `narrow-partial.png`
- Final result covered modes: normal, empty, stale, failed, partial, long-text.
- Final result kept narrow capture on selected partial.
- Long-text observation reported `overflowing: []`.
- Narrow partial observation reported `overflowing: []`.

Process cleanup result:

- Electron smoke exited cleanly through both wrapper and direct command.
- No `electron` process remained in the process check.

Remaining risks or recommended Overseer action:

- Human-directed visual polish, reusable kit extraction, target-project adapters, durable bridge contract, framework choice, and Aura Core transfer remain deferred.
- Overseer should review HS25 for acceptance and decide whether M05 can close.

Expected handoff file:

```txt
workspace/DevHS25-visual-smoke-hardening.md
```
