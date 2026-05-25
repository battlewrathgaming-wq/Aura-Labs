# OverseerHS89 - M27 SmokeFlash Boundary Runway

Date: 2026-05-25
Project: Aura Lab
Milestone: M27 - SmokeFlash Boundary Review And Conditional Harness
Status: Runway opened

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS88-smokeflash-boundary-lessons.md`
- `package.json`
- `src/main/main.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `workspace/critical/critical-assets.md`

## Decision

M27 is opened for Dev as a conditional boundary review and small implementation packet.

The key question is whether SmokeFlash/workshop tooling is harmlessly isolated from the offered presentation layer, or whether it should be cloned/split so normal presentation launch stays clean.

## Expected Dev Output

```txt
workspace/DevHS89-smokeflash-boundary-review.md
```

## Allowed Outcomes

- `keep`: existing smoke path is isolated enough; document why.
- `harden`: existing path is isolated enough and can cheaply support one `mat-authority-window-ttl-strip` harness path.
- `split`: cloning/splitting a Lab-only harness is cheap and clearly improves the product boundary.
- `stop`: hardening or splitting would pull broad Electron/runtime refactor.

## Current Technical Observation

The existing smoke path appears to be gated by:

```txt
AURA_LAB_ELECTRON_VISUAL_SMOKE
```

in:

```txt
src/main/main.js
scripts/electron-visual-smoke.ps1
```

Dev must verify whether that gate is enough and whether renderer controls/state still blur the normal presentation surface.

## Verification

Required:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Required if smoke/UI/launch code changes:

```powershell
npm.cmd run smoke:electron
```

Required if visible or documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Guardrail

The presentation layer is the thing Lab offers. SmokeFlash is only the workbench used to pressure it.

Do not turn this into broad tooling renovation.
