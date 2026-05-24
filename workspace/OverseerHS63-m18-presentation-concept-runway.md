# OverseerHS63 - M18 Presentation Concept Runway

Status: Active runway opened
Role: Overseer
Date: 2026-05-24

## Request Received

Human accepted the idea that Aura Lab has moved from "what can we build" to "should this presentation exist" and asked to send the wider set of presentation ideas through so UI/UX can work.

## Decision

Open M18 as a UI/UX concept milestone.

This is not a Dev packet. The next worker should produce concept requirements, visual direction, information hierarchy, fixture/data needs, and acceptance criteria before implementation.

## Active Milestone

M18 - Presentation Concept Pack

## Current Executor

UI/UX

## Expected Artifact

```txt
workspace/UIUXHS64-presentation-concept-pack.md
```

## Source Of Intent

Accepted state:

- Aura Lab owns portable Bridge -> Interface presentation language while preserving source meaning.
- Lab is now a proving bench for high-quality HTML information display.
- M17 protected-term discovery is accepted and warning-only.
- Human wants Lab to explore whether presentation modules should exist, not merely whether they can be built.

Human-accepted direction:

- Ship/system presentation is desirable as a neutral Lab concept.
- Atlas custom display ideas are desirable as design candidates, but Atlas meaning remains Atlas-owned.
- UI/UX should work before Dev implements.

## Concept Candidates To Review

UI/UX should review all of these and recommend the best bounded next prototype.

### Neutral Lab / Space-Ship Presentation

Ship Systems Readout:

- ship identity or system identity
- current environment
- system status lights
- sensor/contact summary
- recent activity strip
- readout basis/freshness/gaps
- selected detail drawer
- loading, stale, partial, failed, and empty states

Sensor Surface:

- contacts, signals, anomalies, routes, or unresolved objects
- uncertainty shown through calm visual treatment
- source/freshness embedded into objects where useful
- no dependence on EVE, Sense, Atlas, or Core doctrine

Activity Timeline:

- recent events and state changes
- collapses into calm summary when quiet
- supports stale/partial/unavailable states without overclaiming certainty

Status Light Grammar:

- small embedded indicators for bridge, source, cache, feed, availability, freshness, and degraded states
- color plus shape/pattern, not color alone
- visual signals should be readable, restrained, and meaningful

Tactical Detail Drawer:

- selected object or situation
- basis, age, gaps, warnings, available fields, and possible actions
- use "tactical" only as visual theme inspiration, not Lab default terminology

### Atlas-Adaptable Presentation Concepts

Evidence Stack View:

- grouped evidence and discovery-adjacent rows/cards
- provenance, expansion status, freshness, and basis
- must not merge Atlas Evidence and Discovery meanings

Actor Activity Strip:

- compact timeline of recent actor activity, expansion events, label refreshes, and watches run
- should preserve Atlas durability and action-effect boundaries

Provenance Drawer:

- "why this is here" detail surface
- source, read age, expansion path, gaps, warnings, and unresolved areas
- should remain Atlas-adaptable, not Lab-owned doctrine

Watch / Marked Split Panel:

- visually clarifies Marked as attention and Watch as active routine check
- should make the asymmetry obvious without renaming Atlas internals

Evidence Delta View:

- shows what changed since the last read
- newly expanded, unchanged, unresolved, and failed-to-expand areas
- should be explicit about basis and freshness

## UI/UX Output Requirements

The UI/UX artifact should include:

- files and context reviewed
- current-state understanding
- concept recommendation ranking
- one recommended smallest safe prototype
- visual language direction
- information hierarchy
- interaction model
- state grammar
- fixture/data shape needed
- terminology risks and safe labels
- what verification would be enough
- what should remain parked
- whether Dev should implement next

## Guardrails

- Do not implement code.
- Do not ask Dev to build until one concept is selected and bounded.
- Do not make Lab an Atlas/Sense/Core adapter.
- Do not import Atlas Evidence meaning into Lab defaults.
- Do not import Sense tactical/combat/lane meaning into Lab defaults.
- Do not use tactical wording as Lab default copy; visual theme may be tactical/ship-like.
- Do not create a durable bridge contract.
- Do not expand smoke matrices.
- Do not let terminology guardrails become the product direction.
- Do not use protected-term discovery output as automatic authority.

## Stop Conditions

UI/UX should stop and ask Human / Overseer if:

- a concept requires Atlas or Sense source-project decisions
- the concept depends on real private/live data
- the visual direction would require new product doctrine
- the smallest prototype cannot be scoped without Dev making product decisions

## Recommended Next Step

UI/UX should create:

```txt
workspace/UIUXHS64-presentation-concept-pack.md
```

Then Overseer can accept one concept into a bounded Dev runway.
