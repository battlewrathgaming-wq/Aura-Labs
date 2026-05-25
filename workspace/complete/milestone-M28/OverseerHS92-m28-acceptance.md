# OverseerHS92 - M28 Acceptance

Status: Accepted
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/DevHS91-authority-window-ttl-strip-prototype.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`
- `.tmp/electron-visual-smoke/visual-smoke-result.json`

## Acceptance Decision

M28 is accepted.

The Dev handoff delivered the first Lab-local visible material prototype for `mat-authority-window-ttl-strip`. The result is still workshop-staged, but it is now a useful display material candidate rather than only a placeholder harness.

## Accepted Result

Accepted as Lab-local material work:

- staged states: `idle`, `active-window`, `captured`, `timeout`, `cooldown`, `blocked`, `manual-path`
- calm compact strip treatment with a stable TTL/cooldown chip
- non-color-only state marker
- short state reason line
- structured detail reveal for basis, timing, warnings, and manual path notes
- narrow layout handling
- targeted renderer and Electron smoke coverage for the material states

The normal launch remains clean:

- `body data-workshop="false"` remains the default
- workshop controls and material harness remain `.workshop-only`
- no product navigation through SmokeFlash was added
- no bridge/runtime fields, IPC channels, target adapters, or target-project data were added

## Verification Rerun

Overseer reran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

All passed.

Shared terminology check rerun from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Passed 53/53 checks with 24 existing advisory warnings.

Electron smoke result:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- all seven staged material states checked
- `material-authority-window-ttl-strip-state-cooldown-narrow.png` captured for narrow review
- `Get-Process electron -ErrorAction SilentlyContinue` returned no process output afterward

## Residual Risks

- SmokeFlash/material harness code remains inside the renderer bundle under ADR 0001's Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
- TTL/cooldown values are staged presentation values, not runtime behavior.
- Material state names are Lab staging labels, not bridge/runtime contract values.
- No combined output reference is accepted yet; this is an individual material prototype.

## Next Suitable Moves

Good next choices:

- open a second material prototype runway from the accepted material library
- ask UI/UX to review the TTL strip as a material before a second prototype
- create a later combined output reference only after at least one composition is accepted
- keep Lab idle while source projects continue request/adoption work

Do not treat this acceptance as export readiness, target adoption, or adapter authorization.
