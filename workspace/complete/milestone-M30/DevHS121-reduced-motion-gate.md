# DevHS121 - Reduced-Motion Gate

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute HS121 only: add a bounded reduced-motion gate for the presentation head after M29, preserving Summary / Basis / Details and keeping reveal/detail/lazy/overflow behavior readable without broadening into export, adapters, SmokeFlash split, virtualized lists, fixture adapters, or new view modes.

## Files Changed

- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS121-reduced-motion-gate.md`

## Motion Inventory

Current motion-like presentation behavior was limited and local:

- Instrument Status Band sweep animation.
- Updating-state light pulse.
- Readout Detail focus/reveal state.
- Lazy visual slot pending/loaded treatment.
- Row facet markers.
- Overflow sentinel marker.

Reveal/detail, lazy visual, row facet, and overflow sentinel behavior were already mostly static; this slice makes that expectation explicit under the reduced-motion gate.

## Reduced-Motion Behavior

Added `setupReducedMotionGate()` in the renderer.

The gate:

- reads `window.matchMedia('(prefers-reduced-motion: reduce)')`
- stores only local renderer state as `state.reducedMotion`
- writes only local body metadata as `body[data-reduced-motion]`
- listens for preference changes when supported

CSS now:

- keeps the existing browser `@media (prefers-reduced-motion: reduce)` path
- stops repeated animation loops under the reduced-motion preference
- quiets the Instrument Status Band sweep and updating pulse
- leaves reveal/detail, lazy visual, row facet, and overflow sentinel surfaces static and readable
- avoids any new visible copy, setting, control, route, dependency, or view mode

## Compatibility Boundaries

No changes were made to:

- Summary / Basis / Details visible view options
- bridge payloads
- IPC channels
- preload bridge
- service commands
- fixture contracts
- source-project meaning
- target adapters
- SmokeFlash/workshop exposure
- export/seeding shape

The names `reducedMotion`, `setupReducedMotionGate`, `data-reduced-motion`, `reduce`, and `no-preference` are intentionally local renderer implementation hooks, not durable key terms.

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
- No lingering Electron process was reported after smoke.

Shared terminology check was run because workspace handoff/current wording changed:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 53/53 resource checks.
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The reduced-motion gate is ready for Overseer acceptance.

No additional visual review is required by this slice beyond the required Electron smoke, though a future UI/UX pass may still tune visual taste if Human asks.

## Parked Items

- Export/seeding.
- Target adapters.
- SmokeFlash split.
- Virtualized list helper.
- Lab fixture adapter.
- New view intent.
- Product settings surface.
- Renderer security review.

## Residual Risks

- Reduced-motion support is proven through static verification and normal Electron smoke, not a new broad reduced-motion smoke matrix.
- M30 behavior is still proven primarily through the Lab Briefing/readout family.
- Existing inherited naming tripwires remain.
