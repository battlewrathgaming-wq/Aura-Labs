# OverseerHS90 - M27 Acceptance

Date: 2026-05-25
Project: Aura Lab
Milestone: M27 - SmokeFlash Boundary Review And Conditional Harness
Status: Accepted

## Files Reviewed

- `workspace/current.md`
- `workspace/DevHS89-smokeflash-boundary-review.md`
- `workspace/OverseerHS88-smokeflash-boundary-lessons.md`
- `src/main/main.js`
- `scripts/electron-visual-smoke.ps1`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`

## Acceptance Decision

M27 is accepted as a Lab-local boundary review and hardening pass.

Accepted outcome:

```txt
harden
```

The existing in-app smoke path was already gated by the Electron smoke environment flag. Dev added explicit workshop/material-harness gating so normal launch stays free of visible workshop controls, while the Electron smoke path can expose the Lab-only material harness.

This does not make SmokeFlash part of the offered presentation layer. SmokeFlash remains Lab workshop tooling.

## Accepted Changes

- Normal renderer launch defaults to `data-workshop="false"`.
- Workshop-only controls are hidden from normal presentation launch.
- Electron smoke launch sets explicit workshop and material-harness flags.
- The main process passes workshop query parameters only when workshop/smoke mode is active.
- A static Lab-only `mat-authority-window-ttl-strip` material harness exists for workshop launch.
- Visual smoke captures whether the material harness is visible and names its current state/chip.
- Renderer verification asserts the workshop gate and material harness hooks.

## Boundary Assessment

Current state is acceptable for Lab-local work:

- Product navigation is not driven by SmokeFlash.
- SmokeFlash does not add IPC channels, service commands, target adapters, network access, or bridge/runtime contracts.
- Normal launch does not expose rough workshop controls.

Remaining concern:

- The offered renderer still contains hidden workshop DOM/JS.

That is acceptable for Lab-local hardening, but not ideal for a future seeded/exportable renderer. Before exporting or seeding the frontend renderer into another project, Lab should split SmokeFlash/material harness code into a separate Lab-only harness entry.

## Verification Rerun By Overseer

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

Shared check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Results:

- `verify:renderer-shell` passed.
- `verify:all` passed.
- `verify:vocabulary` passed with warning-only discovery candidates.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke output showed `material_harness_visible: true`, `material_state: Idle`, and no overflow.
- `Get-Process electron -ErrorAction SilentlyContinue` returned no process output.
- Shared terminology check passed resource checks. Existing advisory warnings remain in inherited renderer/service internals.

## Residual Risk

- Smoke currently confirms the material harness is visible and the default material state renders. It does not visually iterate every material state.
- A future material-prototype packet should add targeted material-state review if the TTL strip becomes the active feature.
- A future export/seeding packet should split SmokeFlash into a separate Lab-only harness entry before treating the renderer as clean product surface.

## Next Best Move

Lab can choose between:

- open a small `mat-authority-window-ttl-strip` prototype packet
- open a renderer split packet before export/seeding
- park while Human/UX research continues

Recommended if feature delivery resumes:

```txt
mat-authority-window-ttl-strip prototype
```

