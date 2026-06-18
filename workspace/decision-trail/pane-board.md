# Pane Board Decision Trail

Status: pointer funnel
Subject: Pane Board / Shape See internal spatial collaboration tooling

## Current Reading

Pane Board is Lab-local internal tooling for Human/agent spatial layout conversation.

It helps turn vague spatial intent into visible, stateful board references without treating those references as product UI or implementation authority.

Short version: Pane Board is the shadow puppet show; saved layouts, notes, and captures are the shadows Lab may keep as reference material.

## Current Anchors

- `workspace/pane-board/`
- `lab-development/pane-board/`
- `workspace/bug-catchment.md`
- `docs/adr/0003-shared-visual-thinking-surfaces.md`
- `docs/adr/0004-automation-role-and-context-boundaries.md`
- `docs/product-brief.md`
- `docs/boundaries.md`

## Settled Decision Anchors

- Pane Board is Lab-only tooling unless explicitly promoted later.
- Pane Board is not a shippable Lab product by default.
- Board layouts are spatial reference material, not product runtime state.
- Human sketches, agent proposals, and accepted layouts need clear ownership/provenance.
- Board-native notes and commands are advisory collaboration channels, not Dev authorization.
- Generated screenshots/captures are review artifacts, not product direction by themselves.
- Active board state and session captures must not be shipped as product defaults.

## Open / Unresolved

- stability and cleanup policy for continued internal use
- possible externalized tool shape, only if explicitly opened later
- capture cleanup policy and generated-output retention rules
- bug-catchment items around provenance and event-log noise
- future visual/material cue guidance

## Not This Subject

- Presentation Glass product packaging
- Trace Impression source maps
- target-project UI adoption
- source-project adapter behavior
- product runtime draggable dashboards
