# DevHS89 - SmokeFlash Boundary Review

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M27: inspect whether the existing in-app SmokeFlash / Electron smoke harness is isolated from the offered presentation layer, choose `keep`, `harden`, `split`, or `stop`, implement only the smallest safe hardening if suitable, verify, update evidence, and leave this handoff.

## Boundary Outcome

Outcome: `harden`.

The smoke runner was already gated by `AURA_LAB_ELECTRON_VISUAL_SMOKE` and wrote project-local artifacts under `.tmp`. The entanglement risk was the visible fixture/review controls in the normal renderer surface. A full split was not necessary for M27 because the boundary can be hardened cheaply with explicit workshop query/env gating and CSS hiding.

Follow-up assurance review after Human clarified that the offered product is the frontend renderer to be joined with other seeded products: current build is not the high-risk case where SmokeFlash has become product navigation or the core data model, but the shared renderer bundle still carrying workshop DOM/JS is a medium assurance concern. Before seeding/exporting the frontend renderer, split SmokeFlash/material harness code into a separate Lab-only harness entry so the offered renderer is structurally free of workshop code rather than merely hiding it.

## Product Assurance Review

Reviewed the current build for the high-risk extraction case:

- Product navigation is not driven by SmokeFlash.
- Smoke/workshop activation is through env/query gating, not normal launch.
- The material harness uses local renderer state only: `workshopMode`, `materialHarness`, and static staged material entries.
- The harness did not add IPC channels, service commands, file writes, network access, target adapters, or bridge contracts.
- The existing `aura.presentationFixture` path remains the Lab fixture service and is not a SmokeFlash product data model.

Assurance classification:

```txt
Medium concern, not high-risk entanglement.
```

Reason:

The harness is not the product navigation or data model, so extraction should be a focused split rather than a design/architecture review. However, because the frontend renderer is the offered product surface, hidden workshop DOM/JS in the same bundle is not strong enough for product assurance before reuse by other products.

## Files Changed

- `src/main/main.js`
- `scripts/electron-visual-smoke.ps1`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/DevHS89-smokeflash-boundary-review.md`

## Normal Launch Impact

Normal `npm start` does not set smoke/workshop flags.

Normal renderer launch now:

- loads without workshop query params
- starts with `body data-workshop="false"`
- hides `.workshop-only` controls from the offered presentation surface
- keeps the existing presentation readout path intact

No normal-launch IPC channel, service command, payload field, or package entry point was renamed.

## SmokeFlash / Workshop Launch Impact

`npm.cmd run smoke:electron` now sets:

```powershell
AURA_LAB_ELECTRON_VISUAL_SMOKE=1
AURA_LAB_WORKSHOP_MODE=1
AURA_LAB_MATERIAL_HARNESS=mat-authority-window-ttl-strip
```

The main process passes workshop query params only when smoke/workshop mode is active. In that mode, rough review controls and the material harness are visible as workshop tooling.

## Material Support Added

Added one static Lab-only material harness for:

```txt
mat-authority-window-ttl-strip
```

The harness is staged/static only and includes:

- idle
- active-window
- captured
- timeout
- cooldown
- blocked
- manual-path

It includes a compact detail reveal for authority note, availability, manual path, warnings, and reason text. It does not use target data, live/private/network data, Atlas/Sense adapters, or a durable bridge contract.

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Results:

- `verify:renderer-shell` passed.
- `verify:all` passed.
- `verify:vocabulary` passed with 35 warning-only protected-term discovery candidates.
- `smoke:electron` passed.
- Smoke result reported `status: passed` and `blocking_failures: []`.
- Smoke observations reported `material_harness_visible: true`, `material_state: Idle`, and no overflow.
- `Get-Process electron -ErrorAction SilentlyContinue` returned no process output.

Shared advisory check:

```powershell
npm.cmd run verify:terminology
```

from:

```txt
F:\Projects\Docs\Aura-Project-Orchestration
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing inherited compatibility/internal `trust-strip` and `certainty` surfaces.

## Remaining Boundary Risks

- This hardening isolates workshop UI by env/query gating and CSS hiding, not by a separate packaged executable.
- The material harness is intentionally rough workshop tooling; it should not be treated as the offered presentation surface.
- The static material states are Lab staging data only and must not become bridge/runtime contracts.
- The offered renderer still contains hidden workshop DOM/JS. This is acceptable only as Lab-local hardening, not as the final seeded/exportable frontend renderer boundary.
- A future broader SmokeFlash workbench should be a separate packet if Lab wants stronger route or process separation.

## Recommended Next Overseer Move

Accept M27 as a Lab-local boundary review and hardening pass if the current milestone is judged complete.

Recommended follow-up before seeding/exporting the frontend renderer:

```txt
Split SmokeFlash/material harness out of the offered renderer bundle.
```

That follow-up should remove workshop DOM/JS/material states from `src/renderer/index.html` and `src/renderer/app.js`, create a separate Lab-only harness entry, and point smoke/workshop launch at that harness. Do not broaden it into a full workbench or target-project adapter.
