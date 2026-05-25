# OverseerHS131 - M33 Composed Display Output Runway

Status: Active runway
Role: Overseer
Date: 2026-05-26

## Purpose

Open M33 as a UI/UX advisory milestone to define the first composed Lab display output from accepted materials.

This is not implementation. It should produce an adoption-ready display-output definition that can later become a Dev prototype if Human / Overseer accepts it.

## Expected Next Artifact

`workspace/UIUXHS131-composed-display-output-advisory.md`

## Read First

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m33-composed-display-output.md`
- `workspace/complete/milestone-M32/EngineeringHS129-export-boundary-review.md`
- `workspace/complete/milestone-M32/OverseerHS130-engineeringhs129-export-boundary-acceptance.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/warning-gap-edge.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-outputs/README.md` if present

## Task

Produce a composed display output advisory.

Define one product-agnostic Lab-local output that combines accepted materials into a coherent display reference.

Recommended starting point:

An `Instrument Readout Panel` or similarly slim Lab-owned output that combines:

- status / state band behavior
- availability reason treatment
- long text detail handling
- warning/gap edge treatment
- optional compact value rail only if needed from accepted/pending material analysis

The output should describe what it displays, how the materials fit together, and why it is useful as a reusable Lab display reference.

## Required Output

Include:

- files reviewed
- current-state understanding
- selected accepted materials and why
- composed output name
- purpose
- slots
- states
- view intent / reading order
- interaction and detail reveal path
- narrow / constrained behavior
- source/freshness/basis/availability language rules
- what remains Lab-local
- what must not become target doctrine
- what should be implemented first if accepted
- verification expectations for a later Dev prototype
- risks and parked alternatives
- acceptance criteria

## Guardrails

- Advisory only.
- Do not implement code.
- Do not create a Dev runway.
- Do not edit renderer/source files.
- Do not export, seed, split, package, or attach Lab renderer/head to target projects.
- Do not create target adapters.
- Do not define a durable bridge/runtime contract.
- Do not import Atlas/Sense doctrine.
- Do not promote pending materials as accepted unless Human / Overseer later accepts them.
- Use Lab slim vocabulary for Lab-owned defaults.
- Treat verification/smoke as support only.

## Acceptance Criteria

This advisory is acceptable if:

- it composes accepted materials rather than inventing an unrelated surface
- it gives one concrete output reference, not a broad menu
- it is clear enough for a later Dev prototype packet
- it keeps source-project meaning and adapters out of Lab
- it keeps SmokeFlash/workshop tooling as support, not product
- it identifies what should be parked
