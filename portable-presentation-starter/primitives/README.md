# Glass Primitive CSS Starter

Status: Lab-local primitive starter

## Purpose

This folder is the first CSS/token shelf for Lab glass primitives.

It maps back to:

```txt
workspace/glass-inventory-spine.md
```

Accepted line:

```txt
CSS/tokens first; optional thin React wrappers later.
```

Working line:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

## Files

- `glass-tokens.css` - surface, ink, line, state, spacing, typography, density, sizing, and motion tokens.
- `glass-primitives.css` - meaning-light primitive classes for display material, display boundary, display seam, display segment, display readout, display marker, display drawer, display row, display sizing, and safe display motion.
- `examples/primitive-readout.html` - neutral CSS-only display readout assembly.
- `examples/primitive-row-drawer.html` - neutral display row/detail assembly.

## Primitive Coverage

Included first-layer Lab UI/display primitives:

- display material
- display boundary
- display seam
- display segment
- display readout
- display marker
- display drawer
- display row
- display sizing
- safe display motion / reduced-motion

These are Bridge -> Interface / presentation vocabulary only. They do not define target source meaning, target state enums, adapter constants, runtime behavior, product surfaces, or adoption requirements.

## Example Policy

Examples are display examples only.

They are not:

- target panes
- target adapters or mappers
- bridge/runtime contracts
- target payloads
- target state enums
- source-project meaning
- React components

State labels such as `CURRENT`, `PARTIAL`, and `UNAVAILABLE` are Lab display labels only. Source-owned labels must be shown with owner/layer qualification.

## Target Responsibilities

Target projects own:

- mapper behavior
- source meaning
- runtime behavior
- product copy
- terminology decisions
- final layout
- review
- adoption

## Safety Floor

This starter is display-only and local. It uses static HTML/CSS only.

Do not add:

- remote assets
- network calls
- local storage
- clipboard APIs
- screenshot or capture behavior
- filesystem writes
- privileged runtime APIs
- React / JSX
- package publishing

Color, glow, display material, and display motion must not be the only carriers of meaning. Markers need visible text or labels. Any motion class must have reduced-motion behavior.
