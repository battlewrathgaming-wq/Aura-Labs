# Post-Bridge Presentation Boundary

Status: Accepted project boundary
Date: 2026-05-24

## Statement

Aura Lab is focused on portable post-bridge display mapping and presentation tooling.

It does not primarily decide what content Aura products should present. It proves whether bridge-shaped data can be rendered into the desired Aura desktop style with stable typography, containment, state handling, trust/freshness language, diagnostics, and visual smoke evidence.

## Owned Boundary

Aura Lab owns the proving bench for everything past the bridge:

- display mapping from bridge-shaped or fixture-backed data into UI surfaces
- presentation state grammar for populated, loading, empty, stale, failed, partial, and long-text conditions
- source, freshness, certainty, and bridge-state language as UI affordances
- typography, spacing, containment, and surface treatment pressure tests
- deterministic fixture modes for review
- visual smoke evidence, including screenshots, result JSON, overflow checks, and process cleanup
- shell/runtime hygiene only where it makes presentation verification reliable

## Bridge Authority Rule

Individual Aura projects own their internal source-to-Bridge mappings.

That means Atlas, Sense, Core, or another target project decides how its own backend/domain/service state becomes bridge-facing data. Aura Lab does not override those internal mappings.

Bridge-to-Interface presentation should be preserved across projects unless:

- the target project identifies a real conflict with its doctrine, product meaning, or safety boundary
- the Human explicitly overrides the presentation language
- the wording would incorrectly imply source truth, durable schema authority, target-project ownership, Atlas evidence doctrine, Sense tactical doctrine, or Aura Core ownership

When Bridge-to-Interface terminology conflicts or Human override is given, Aura Lab owns the user-facing terminology decision for the shared presentation layer.

This ownership applies to UI language, state labels, display affordances, and presentation-facing terminology. It does not make Aura Lab the owner of target project domain truth, internal service contracts, source semantics, or upstream bridge schemas.

## Not Owned

Aura Lab does not own:

- source-of-truth product semantics
- Atlas evidence doctrine
- Sense tactical doctrine
- Aura Core reusable rigging ownership
- target-project adapter behavior
- durable upstream bridge contracts
- final shared component library structure

## Fixture Rule

Lab fixtures are allowed to be practical and concrete, but they remain test material.

`aura.projectBriefing`, Needs Attention, coordination facts, and Lab briefing copy should be treated as display fixtures unless a later accepted artifact promotes a specific boundary. They should not be copied into Atlas, Sense, or Core as product meaning.

## Transportable Candidate Rule

Lab may identify transportable presentation candidates, but it should describe them as structure rather than meaning.

Safer candidates include:

- state slots
- source/freshness/certainty slots
- long-text and narrow-layout stress fixtures
- visual smoke result shape
- diagnostic demotion patterns
- shell verification expectations

Unsafe candidates include:

- Lab-specific copy
- Needs Attention semantics
- target-like evidence or tactical labels
- target-project source authority
- bridge schema claims not accepted by Core or a target project

## Adoption Rule

Atlas, Sense, and Aura Core adoption must happen through their own project authority.

Aura Lab can prove mechanics. Target projects decide whether those mechanics fit their doctrine, language, data boundaries, and user intent.

When a target project accepts a Lab presentation pattern, that project remains authoritative for internal-to-Bridge mapping. Aura Lab remains authoritative for shared Bridge-to-Interface terminology unless the target project records a conflict or the Human overrides the wording.
