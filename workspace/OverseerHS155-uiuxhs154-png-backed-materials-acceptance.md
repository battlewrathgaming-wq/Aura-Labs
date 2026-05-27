# OverseerHS155 - UIUXHS154 PNG-Backed Materials Acceptance

Status: Accepted as advisory
Date: 2026-05-27
Role: Aura Lab Overseer

## Reviewed

- `workspace/UIUXHS154-png-backed-surface-materials-advisory.md`
- `workspace/current.md`

## Decision

Accept `UIUXHS154-png-backed-surface-materials-advisory.md` as Lab-local visual-material advisory input.

This does not open a Dev runway and does not authorize PNG-backed renderer work yet.

## Why It Fits

The advisory keeps the question narrow:

```txt
Can subtle local PNG backing make a readout surface feel cooler and more tactile while preserving calm readability?
```

It also preserves the important boundaries:

- PNGs are optional local surface ingredients.
- Text containment and readability remain primary.
- Image-off parity is required before future acceptance.
- No target-project styling, bridge/runtime contract, adapter, export, seeding, or external image dependency is implied.
- Pane Board image references remain reference material only, not product UI.

## Accepted Direction

The safest future prototype candidate is:

```txt
png-panel-plate-readout-muted
```

Scope if later opened:

- one local PNG panel plate
- one CSS-backed image-off fallback
- fixture/workshop readout surface only
- image on/off comparison
- state checks for current, updating, aged, partial, unavailable, fallback, and no data
- no target-project names
- no runtime contract changes

## Parked

- full visual theme packs
- target-project skins
- external image services
- asset generation pipelines
- product UI background art
- animated bitmap layers
- large photographic backgrounds
- bridge-fed runtime image selection
- Pane Board image references as accepted product UI

## Risks To Carry Forward

- Texture can reduce readability.
- File size can creep quietly.
- Image names can imply target-project style ownership.
- Glow or edge treatment can be mistaken for data meaning.
- Screenshots can make reference material feel more final than it is.

## Current.md Impact

Keep `workspace/current.md` idle.

Record the advisory as accepted source of intent and park the prototype candidate until Human explicitly opens a bounded implementation packet.

