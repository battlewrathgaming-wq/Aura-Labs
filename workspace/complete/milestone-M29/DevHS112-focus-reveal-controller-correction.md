# DevHS112 - Focus Reveal Controller Correction

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute HS112 only: correct first-click behavior in the hydrated slot focus/reveal controller without broadening the surface.

## Files Changed

- `src/renderer/app.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS112-focus-reveal-controller-correction.md`

## Interaction Correction

Updated `setupSlotRevealController(...)` so pointer activation records whether the row was closed before focus runs.

The click handler now behaves as follows:

- if the row was closed before pointer activation, click opens it and leaves it open
- if the row was already open before pointer activation, click toggles it closed

This avoids the focus-open followed by click-close problem from HS111.

## First-Click Behavior

First mouse click on a closed hydrated row now reveals detail and leaves it open.

The default row state remains compact and closed.

## Keyboard Behavior

Preserved:

- focus opens hydrated detail
- `Enter` toggles intentionally
- `Space` toggles intentionally
- `aria-expanded` and `data-presentation-reveal` continue to reflect local reveal state

## Compatibility

No changes were made to:

- visible view labels: `Summary`, `Basis`, `Details`
- visible Readout Detail labels
- fixture ids
- smoke selectors
- bridge payload fields
- IPC channels
- preload bridge
- service commands
- workshop/SmokeFlash gates

No new drawer, modal, panel, navigation surface, or view mode was introduced.

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
- Details view observations retained `source_drawer_open: true`, `diagnostics_secondary: true`, and no horizontal overflow.

Shared terminology check was required because workspace handoff/current wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 53/53 resource checks.
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The corrected focus/reveal controller is ready for Overseer acceptance.

It remains ready to support a later lazy-loaded visual slot because the registered slot path now has registry, view policy, hydration metadata, and corrected local reveal behavior.

## Residual Risks

- Correction is proven through the Briefing Readout Detail group.
- Reveal state remains local renderer implementation detail, not a durable key term.
- Lazy visual slots, virtualization, row facets, overflow sentinel, reduced-motion gate, and fixture adapter remain parked.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
