# M35 - Pane Board Layout Capture

Status: Active

## Outcome

Define a Lab-only Pane Board tool for capturing Human spatial intent as an advisory layout reference.

Pane Board should bridge the gap between words and layout intention. It lets the Human place rough zones, lets agents propose alternate arrangements, and preserves JSON/PNG layout references for review before any fixed UI is baked.

## Why This Is Milestone-Sized

Aura Lab has accepted a composed output and visible prototype. The next bottleneck is not a lack of display code; it is communicating visual arrangement and hierarchy efficiently between Human, UI/UX, Engineering, and Dev.

Pane Board is tooling, not product renderer scope. It improves how Lab stages future presentation work without making the product surface draggable or runtime-customizable.

## Core Contract

```txt
human sketch -> agent proposals -> human acceptance -> later fixed UI bake
```

Pane Board output is an advisory spatial reference.

It is not:

- pixel-perfect product specification
- runtime dashboard state
- target-project adoption
- bridge/runtime contract
- component API
- Dev implementation authorization

## Likely Runways

- Produce a tooling advisory/spec for the Pane Board.
- Define layout JSON shape, proposal folders, accepted folders, and screenshot reference expectations.
- Define human-led / agent-cooperative write rules.
- Keep the tool separate from the clean presentation head.
- Keep neutral pane IDs and no target-project terms.
- Only after advisory acceptance, open a bounded Dev prototype.

## Acceptance Criteria

M35 is complete when:

- Pane Board purpose and authority model are accepted
- Human sketch, agent proposal, and accepted layout states are clearly separated
- saved JSON/PNG are defined as advisory layout references only
- agents may propose layouts but may not overwrite Human sketches without authority
- the proposed V1 scope is small enough to build
- no product renderer, bridge, adapter, target-project, export, or split work is authorized

## Non-Goals

- product renderer implementation
- runtime user-customizable dashboard
- target-project UI
- bridge/runtime contract
- live data or project adapters
- SmokeFlash replacement
- clean-head export/split
- broad design tool platform

## Dependencies

- accepted Instrument Readout Panel prototype
- ADR 0001 and ADR 0002
- local workspace authority and critical-term rules
