# Presentation Warm Start Package

Status: Accepted warm-start statement
Date: 2026-06-15

## Purpose

This page names the current resting shape of Aura Lab's presentation thread.

It is the "toys back in the box" reference for future pickup: what exists, how to consume it, what remains parked, and what must not be inferred.

## Working Line

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

```txt
Lab provides composable display primitives.
Projects assemble and authorize product surfaces.
```

Concept capsule:

```txt
docs/statements/presentation-glass-concept-capsule.md
```

## Current Warm Start Contents

Primary landing paths:

- `docs/statements/presentation-glass-concept-capsule.md`
- `portable-presentation-starter/`
- `portable-presentation-starter/primitives/`
- `portable-presentation-starter/packages/sense-trial-glass/`
- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md`
- `workspace/glass-inventory-spine.md`

The current warm start provides:

- a framework-neutral static Instrument Readout Panel reference
- a Sense trial glass package
- a target-readable display selection shelf
- accepted display primitive vocabulary
- CSS/token display primitives
- neutral static primitive examples
- verifier coverage for the static starter and primitive starter

## How To Consume

Start here:

```txt
portable-presentation-starter/README.md
```

Then choose the relevant shelf:

1. Use `portable-presentation-starter/primitives/` when a project needs basic display surface language:
   - display material
   - display boundary
   - display seam
   - display segment
   - display readout
   - display marker
   - display row
   - display drawer
   - display sizing
   - safe display motion
2. Use `portable-presentation-starter/examples/static/` when reviewing the current Instrument Readout Panel head.
3. Use `portable-presentation-starter/packages/sense-trial-glass/` only as the accepted local Sense trial package.
4. Use `workspace/display-selection-shelf.md` when a target asks which accepted display features it wants to try.

Target projects should:

- pick useful display primitives or glass features
- compose locally
- map through their own adapter
- preserve their own source meaning
- own runtime behavior, product copy, review, and adoption

## Visual Review Status

The current primitive examples are suitable as a warm-start reference because they:

- are static and local
- are display-only
- show a display readout assembly
- show a display row/detail assembly
- include visible marker text instead of color-only meaning
- include text wrapping pressure
- include reduced-motion support
- keep state labels as Lab display labels only
- qualify source-owned placeholder language

They have not received a dedicated screenshot/visual polish review after M51. That is acceptable for warm-start storage, but a future visible adoption or React wrapper packet should first review the examples visually.

## Meaning Boundary

Lab display primitive terms are Bridge -> Interface / presentation vocabulary only.

They do not define:

- target source meaning
- target state enums
- adapter constants
- runtime behavior
- product surfaces
- adoption requirements

CSS class names such as `.glass-boundary`, `.glass-readout`, and `.glass-marker` are implementation names inside the Lab primitive starter. They are not shared doctrine or target source terms.

## Parked

Parked until explicit future pressure:

- React wrappers
- target adapters or mappers
- package manager publishing
- target panes/modules/layouts
- topology/map/radius components with source meaning
- live/runtime shell behavior
- renderer extraction
- deeper security review beyond the current static starter floor
- broad visual smoke matrices

## Next Useful Pickup

Recommended pickup order:

1. Visual/UX review of the primitive examples.
2. Narrow CSS primitive polish if review finds readability/layout issues.
3. React wrapper planning only after CSS primitives are visually accepted.
4. Target-local adapter/composition work only inside the target project.

## Verification Floor

Before relaying or changing this warm start, run:

```txt
npm.cmd run verify:all
```

For terminology-facing changes, also run:

```txt
npm.cmd run verify:terminology
```

No Electron smoke is required unless visible runtime renderer behavior changes.
