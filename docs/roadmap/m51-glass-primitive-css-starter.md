# M51 - Glass Primitive CSS Starter

Status: Complete
Owner: Overseer

## Purpose

Create the first Lab-local CSS/token primitive starter for the accepted glass inventory spine.

This milestone turns M50's accepted readiness map into a small, concrete shelf of reusable surface language. It should provide portable CSS tokens, primitive classes, and neutral examples without creating React components, target panes, target adapters, bridge/runtime contracts, or package publishing.

## Source Direction

Accepted M50 direction:

```txt
CSS/tokens first; optional thin React wrappers later.
```

Working line:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

## Scope

In scope:

- create a Lab-local primitive starter folder
- define CSS custom properties and primitive classes for:
  - material
  - boundary
  - seam
  - segment
  - readout
  - marker
  - drawer
  - sizing
  - safe motion / reduced-motion
- add one neutral CSS-only readout example
- optionally add one neutral row/drawer example if it remains small
- add README boundary notes
- update verification so the primitive starter shape is checked

Out of scope:

- React components
- package manager publishing
- target adapters or mapper helpers
- target panes/modules/layouts
- Atlas/Sense-specific surfaces
- topology/map/radius components beyond neutral background tokens
- Electron/preload/IPC work
- renderer extraction
- SmokeFlash, Pane Board, Wayfinder, or service registry work
- bridge/runtime contracts

## Expected Dev Output

Expected handoff:

```txt
workspace/DevHS182-glass-primitive-css-starter.md
```

Expected implementation target:

```txt
portable-presentation-starter/primitives/
```

Suggested files:

- `README.md`
- `glass-tokens.css`
- `glass-primitives.css`
- `examples/primitive-readout.html`
- optional `examples/primitive-row-drawer.html`

Verification should cover:

- required primitive starter files exist
- no React/JSX/package publishing assumptions
- no target adapter/mapper language in implementation files
- no remote/network/runtime dependency
- reduced-motion coverage for motion classes
- neutral examples clearly say they are display examples only

## Acceptance Criteria

M51 can be accepted when:

- `portable-presentation-starter/primitives/` exists.
- The primitive starter maps back to `workspace/glass-inventory-spine.md`.
- CSS/tokens exist before any framework wrappers.
- The starter includes material, boundary, seam, segment, readout, marker, drawer, sizing, and safe-motion primitives.
- Examples are neutral and clearly non-contractual.
- Source-owned labels are qualified if shown.
- State labels are display labels only, not target enums.
- Text containment and narrow behavior are represented.
- Reduced-motion behavior exists for any motion class.
- Target projects are told they own mapper, meaning, runtime, product copy, and adoption.
- No target project files are touched.
- No target adapters, bridge/runtime contracts, or React components are created.
- Verification passes.

## Verification

Run:

```txt
npm.cmd run verify:all
npm.cmd run verify:terminology
```

No Electron smoke is required unless Dev changes visible runtime renderer behavior. Primitive example HTML can remain static/local.

## Acceptance

Accepted by:

```txt
workspace/OverseerHS183-m51-glass-primitive-css-starter-acceptance.md
```

Accepted output:

```txt
portable-presentation-starter/primitives/
```
