# Presentation Glass Decision Trail

Status: pointer funnel
Subject: presentation glass / display primitives / portable head

## Current Reading

Presentation glass is Lab's reusable display/presentation layer after source meaning has already been preserved.

Glass is a prepared window, not the thing seen through it.

Target projects translate themselves; Lab makes the window worth looking through.

## Current Anchors

- `docs/statements/presentation-glass-concept-capsule.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/presentation-warm-start-package.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `docs/product-brief.md`
- `docs/boundaries.md`
- `portable-presentation-starter/`
- `workspace/display-selection-shelf.md`
- `workspace/glass-inventory-spine.md`
- `workspace/display-assets.md`

## Settled Decision Anchors

- Lab provides display primitives, presentation heads, static examples, and polish/safety floors.
- Target projects own source meaning, adapter mapping, runtime behavior, product copy, adoption, and local refinement.
- A target adopting Lab glass does not adopt Lab sample data, example meanings, state enums, tooling, roadmap, or future upgrade path.
- New windows are offers, not leashes.
- Display primitive terms should keep the display lane marker: display material, display boundary, display seam, display segment, display readout, display marker, display row, display drawer, display grid, display motion, display sizing.
- The current static starter/glass package is a local trial/offer surface, not a target adapter or bridge/runtime contract.

## Open / Unresolved

- final `lab-development/presentation-glass/` shelf split
- final clean `lab-products/presentation-glass/` shape
- React/wrapper readiness beyond current CSS/static primitive work
- security hardening standard before broader shipping
- target selection/adaptation results after Sense/Atlas trials
- long-term versioning and difference notes for future glass offers

## Not This Subject

- target project source meaning
- target-local adapters
- target state labels or enums
- Trace Impression workflow mechanics, except when used to map glass source shape
- Pane Board collaboration state

