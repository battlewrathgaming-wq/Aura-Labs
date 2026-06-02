# M50 - Glass Primitive React Readiness Map

Status: Complete
Owner: Overseer

## Purpose

Scope how Lab's accepted glass primitive vocabulary should become a future warm-start presentation shelf without hardening target-project surfaces too early.

This milestone is advisory/specification work only. It should answer what should be mapped, what should stay meaning-light, what might later become React-friendly primitives, and what must remain target-owned.

## Source Direction

Human direction:

- UI is becoming a likely stall point for multiple projects.
- Lab should reduce repeated cold-start display work.
- Lab should provide launch materials that projects can select from, not final project panes.
- Projects assemble and authorize product surfaces.
- React may be useful as a warm-start format, but it must not become a forced product shape.

Accepted working line:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

## Scope

In scope:

- the accepted glass primitive spine:
  - Material
  - Boundary
  - Seam
  - Segment
  - Readout
  - Marker
  - Row
  - Drawer
  - Grid / Topology
  - Motion / Attention
  - Sizing
- which primitives are best treated as CSS/tokens
- which primitives merit thin React wrappers later
- which examples should stay example-only
- what target projects must compose and own locally
- Atlas/Sense use-context differences as context only
- a recommended first future primitive starter set
- acceptance standards for a later implementation packet

Out of scope:

- code implementation
- React scaffold creation
- target adapters or mappers
- target-project panes/modules
- bridge/runtime contracts
- package/export mechanics
- renderer extraction
- target adoption or fitness claims
- Atlas/Sense/Core terminology decisions

## Expected Advisory Output

Expected artifact:

```txt
workspace/UIUXHS180-glass-primitive-react-readiness-map.md
```

The artifact should include:

- files reviewed
- current state understanding
- primitive readiness table
- React warm-start boundary
- props/input philosophy
- CSS/token strategy
- example composition policy
- Atlas/Sense use-context differences, clearly marked context-only
- first starter contents recommendation
- exclusions
- risks
- suggested first Dev packet if accepted
- acceptance criteria for a later primitive starter
- parked items

## Acceptance Criteria

M50 can be accepted when the advisory artifact:

- maps every accepted primitive from `workspace/glass-inventory-spine.md`
- classifies each primitive as CSS/token-only, React-wrapper candidate, example-only, or project-composed
- names what Lab should provide without owning source meaning
- names what projects must compose or authorize themselves
- identifies the smallest useful future starter set
- prevents React from becoming a target product contract
- preserves Atlas/Sense ownership boundaries
- gives Dev enough shape for a later bounded implementation packet, if accepted

## Verification

This is an advisory/state packet.

After state files are updated, run:

```txt
npm.cmd run verify:all
```

Run shared terminology verification if project terminology or shared-facing wording changed:

```txt
npm.cmd run verify:terminology
```

No Electron smoke or browser screenshot is required unless implementation starts, which this milestone does not authorize.

## Acceptance

Accepted by:

```txt
workspace/OverseerHS181-m50-glass-primitive-react-readiness-map-acceptance.md
```

Accepted recommendation:

```txt
CSS/tokens first; optional thin React wrappers later.
```
