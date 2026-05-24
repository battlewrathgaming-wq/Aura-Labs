# M09 Packaging Review Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M09 - Packaging Review.

The M08 family/state proof is classified for future use. Aura Lab has proven portable post-bridge presentation mechanics, but only a subset is safe to carry forward as Core-neutral candidate structure. Lab fixture content remains Lab-local, and Atlas/Sense/Core adoption remains target-owned.

## Lab-Local

These belong to Aura Lab unless a later project-owned packet promotes or adapts them:

- `aura.projectBriefing`
- `aura.presentationFixture`
- Briefing fixture content
- Neutral Seed fixture content
- Needs Attention
- coordination facts derived from `workspace/current.md`
- Lab-specific copy for action posture, expected handoff, deferred items, and milestone state
- exact Aura Lab visual styling details
- `.tmp` smoke screenshots and result JSON artifacts
- current implementation file layout
- current development/review selector copy as implemented

## Core-Neutral Candidates

These are candidates for future Aura Core or shared rigging review. They are not Core-owned yet:

- separate `family` and `state` axes
- presentation-family fixture registry concept
- state grammar as presentation affordance:
  - normal
  - empty
  - stale
  - failed
  - partial
  - long-text
- source, freshness, and certainty slots in the primary reading path
- visible but secondary diagnostics
- renderer/presenter does not own source truth
- family-aware visual smoke result shape:
  - `families_checked`
  - `states_checked`
  - `viewports_checked`
  - `screenshots`
  - `observations`
- screenshot naming that includes family, state, and viewport
- long-text and narrow viewport pressure coverage
- smoke wrapper pattern that keeps artifacts project-local and validates result JSON
- copy safety checks for fixture families

Core-neutral candidacy means the structure may be worth transferring later through a Core-owned packet. It does not mean Aura Core has accepted it.

## Target-Adaptable Only After Target-Owned Review

These may be useful for Atlas, Sense, or another target product only after that target project owns the review:

- Tactical HUD family
- Operator Workbench family
- target-style display families
- action-effect language
- preflight language
- evidence-like source boundaries
- tactical lane language
- operator/workbench language
- target-specific density rules
- target-specific trust/certainty copy
- target-specific stale/partial/failed semantics

Aura Lab can provide proof mechanics. Target projects must decide doctrine, terminology, adoption, and user meaning.

## Do-Not-Port

These should not be copied into Core or target projects:

- Lab fixture copy as product direction
- Needs Attention as shared Aura doctrine
- Lab coordination facts as target UX model
- `aura.projectBriefing` as a durable bridge contract
- `aura.presentationFixture` as a durable bridge contract
- Neutral Seed as Aura Core ownership, doctrine, architecture, or contract
- Atlas evidence doctrine inferred from Lab
- Sense tactical doctrine inferred from Lab
- generated screenshots or `.tmp` smoke artifacts as source assets
- exact Lab selectors or labels when a target project needs different language

## Next Recommended Direction

The packaging review recommends pausing further Lab implementation until Human / Overseer chooses one of these paths:

- prepare a Core-owned transfer prompt for neutral presentation rigging candidates
- request UI/UX review of the implemented Briefing + Neutral Seed screenshots
- add small hardening for Neutral Seed stale/partial smoke screenshots
- request target-owned Atlas/Sense review later
- park Aura Lab with the family/state proof accepted

## Boundary

This review is classification only.

It does not authorize:

- Dev implementation
- target-project adoption
- Aura Core transfer
- durable bridge/data contracts
- shared component library extraction
- framework migration
