# ADR 0003 - Shared Visual Thinking Surfaces

Date: 2026-05-27
Status: Accepted

## Context

Aura Lab began as a project for high-quality, portable HTML presentation modules for bridge-fed information.

Recent Pane Board work revealed an additional Lab value:

```txt
Aura Lab can help the Human and agents think together visually before product UI is specified.
```

The Pane Board, numbered handles, meaning-geometry handoffs, screenshots, and shape notes let the Human express spatial intent without translating every visual instinct into long-form technical language.

This is especially useful because:

- the Human owns vision, priority, and acceptance
- agents can reason about spatial relationships, grouping, pressure, and alternatives
- source projects keep ownership of meaning
- Lab can explore presentation shape without creating target-project doctrine
- sketches can be saved as discussion memory without becoming implementation authority

## Decision

Treat shared visual thinking surfaces as part of Aura Lab's accepted direction.

Aura Lab may build and maintain Lab-local tools and notes that help the Human and agents explore:

- spatial intent
- display relationships
- visual hierarchy
- shape pressure
- source-owned meaning maps
- numbered handles
- screenshots and coordinate guides
- human liked/adapted/parked/rejected signals
- agent proposals and alternate arrangements

This direction supports the presentation product, but it is not itself a product adoption claim.

## North Star

Aura Lab builds shared visual thinking surfaces for bridge-fed information.

The goal is to make presentation work visible, collaborative, and alive before it becomes code.

## Boundary

Shared visual thinking surfaces are:

- Lab-local exploration tools
- conversation surfaces
- spatial reasoning aids
- design memory
- pre-runway support

They are not:

- Dev runways
- product authority
- source-project meaning
- bridge contracts
- renderer input contracts
- target-project adapters
- final UI specifications
- source-project adoption decisions

## Dev Boundary

Do not treat this ADR as permission to implement new tooling, renderer features, adapters, or product UI.

Dev may only act on this direction when `workspace/current.md` opens a bounded executable packet.

If a Dev packet references this ADR, it must still define:

- the exact tool or presentation surface being changed
- files in scope
- guardrails
- stop conditions
- verification commands
- expected handoff

This ADR is direction and boundary, not a task queue.

## Source Meaning Boundary

Numbered handles and Pane Board shapes do not own meaning.

Source projects own their own terms, lane meaning, data meaning, runtime behavior, bridge output, and adoption choices.

Lab may arrange source-owned handles only after the source project has provided or accepted the meaning map.

Shared spelling does not imply shared meaning.

## Consequences

Accepted:

- Pane Board can remain a Lab-local spatial conversation tool.
- Shape notes and concept notes can capture useful visual reasoning.
- Numbered handles can be used as slim spatial placeholders.
- Agent proposals may explore alternate arrangements without overwriting Human sketches.
- Human qualitative feedback is valid design input.

Required:

- keep source meaning anchored to source-project artifacts
- keep Lab tools separate from the clean presentation offer
- keep sketches advisory until explicitly accepted
- keep implementation behind normal runway controls
- preserve screenshots and JSON as design memory, not product contracts

## Non-Goals

- Do not turn Pane Board into a production draggable dashboard.
- Do not create a universal UI doctrine from Lab sketches.
- Do not make Lab owner of Atlas, Sense, or Core meanings.
- Do not add target adapters from this ADR.
- Do not treat concept notes as hidden backlog.
- Do not let tooling replace the main Lab purpose: high-quality presentation of bridge-fed information.

## Related Decisions

- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

