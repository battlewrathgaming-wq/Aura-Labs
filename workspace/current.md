# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M20 - Display Vocabulary And Slot Taxonomy
Last completed milestone: M19 - Instrument Status Band Prototype
Current executor: UI development owner / display asset documentor
Current focus: classify terminology into display classes/types and derive a Lab slot vocabulary
Expected artifact filename: `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`

## Current State

Aura Lab is active for a documentation/advisory milestone after accepting and closing M19.

Housekeeping note:

- The active workspace root has been cleaned.
- Completed M13-M17 handoffs are in `workspace/complete/`.
- Atlas/Sense relay advisories are in `workspace/archive/cross-project-relay/`.
- `workspace/reference/` is accepted as reference-only input.
- No target-project adoption work is open in Lab.
- Remote Atlas/Sense read access is allowed under `workspace/LabRemoteConsumerConformanceHS66.md`.

Accepted state:

- M00 through M19 are complete.
- Bridge State Readout remains the accepted Lab presentation feature.
- M18 accepted `Instrument Status Band` as the next smallest safe presentation prototype.
- The visible readout drawer now uses `Readout Detail`.
- The visible neutral fixture family label now uses `Neutral Sample`.
- Internal compatibility names, payload fields, service commands, screenshot names, and source-owned terms remain unchanged by design.
- Local vocabulary and renderer verification now protect the accepted visible labels.
- The shared terminology check remains advisory and is not the product direction.
- Shared protected-word lookup files now exist for owner-aware discovery.
- Lab vocabulary verification now reports warning-only protected-term discovery candidates.
- The Instrument Status Band prototype is accepted as Lab advisory presentation-pattern input.
- Sense conformance is already handled; Sense may now read M19 as advisory input through Sense authority.
- The display asset documentation owner contract is active.
- M20 is open to develop terminology-to-slot understanding before more primitive development.

## Purpose

M20 develops the understanding layer needed before future display primitive work:

```txt
Display Vocabulary And Slot Taxonomy
```

The goal is to classify project-wide terminology into display classes/types, identify recurring display pressures, and propose a robust Lab-owned slot vocabulary.

This is advisory/documentation work only. It is not implementation, a bridge contract, a shared glossary, target adoption, or product doctrine.

## Latest Accepted Work

- M16 Dev handoff: `workspace/complete/milestone-M16/DevHS58-readout-naming-polish.md`
- M16 Overseer acceptance: `workspace/complete/milestone-M16/OverseerHS59-m16-acceptance.md`
- M15 UI/UX source: `workspace/complete/milestone-M15/UIUXHS56-post-m14-presentation-quality-and-naming-review.md`
- M15 runway: `workspace/complete/milestone-M15/OverseerHS57-m15-acceptance-m16-runway.md`
- M17 scope proposal: `workspace/complete/milestone-M17/OverseerHS60-protected-term-guardrail-scope.md`
- M17 Dev handoff: `workspace/complete/milestone-M17/DevHS61-protected-term-discovery-guardrail.md`
- M17 Overseer acceptance: `workspace/complete/milestone-M17/OverseerHS62-m17-acceptance.md`
- M18 runway: `workspace/complete/milestone-M18/OverseerHS63-m18-presentation-concept-runway.md`
- M18 UI/UX concept pack: `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- Current Overseer runway: `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- Remote consumer conformance: `workspace/LabRemoteConsumerConformanceHS66.md`
- Accepted UI developer advisory: `workspace/UIDevHS69-instrument-status-band-implementation-advisory.md`
- Overseer advisory review: `workspace/OverseerHS70-uidevhs69-advisory-review.md`
- M19 Dev handoff: `workspace/DevHS68-instrument-status-band-prototype.md`
- M19 Overseer acceptance: `workspace/OverseerHS71-m19-acceptance.md`
- Display asset documentation owner contract: `workspace/display-asset-documentation-owner-contract.md`
- M20 runway: `workspace/OverseerHS74-m20-display-taxonomy-runway.md`

## Source Of Intent

Accepted source of intent:

- Human direction that Lab should ask whether a presentation should exist before building it.
- M18 UI/UX recommendation to build `Instrument Status Band` first.
- Reference folder accepted as inspiration only.
- UIDevHS69 accepted as practical M19 advisory input, subordinate to this current packet.
- Human direction to use terminology understanding as the starting point for what needs to be displayed.
- Human direction to develop a robust primitive slot vocabulary before tailoring display elements to product visions.
- `workspace/display-asset-documentation-owner-contract.md`

Accepted references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- `workspace/complete/milestone-M18/OverseerHS63-m18-presentation-concept-runway.md`
- `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Ordered Runway

This is not a Dev runway. Do not implement code.

1. Read this packet and the display asset documentation owner contract.
2. Read the Lab critical terminology files and the project-wide terminology folder.
3. Build a class/type table for relevant Lab, Atlas, and Sense terms.
4. Derive recurring display pressures from those terms.
5. Propose an initial Lab-owned slot vocabulary for display assets.
6. Define translation/disposition rules for source terms becoming Lab display needs.
7. Identify primitive/display-element families implied by the slot vocabulary.
8. Prepare the next research pass by naming display types worth studying.
9. End with accepted candidate slot names, unresolved slot names, terms needing owner review, and recommended next packet.
10. Create `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`.

## Acceptance Criteria

Artifact must be accepted only if it provides:

1. Terminology coverage across relevant Lab, Atlas, and Sense terms.
2. Owner/layer separation for each meaningful term.
3. A class/type table with term, owner, layer, source artifact, display class, display type, likely slot need, source meaning risk, Lab translation allowed, and notes.
4. A display pressure model.
5. An initial Lab-owned slot vocabulary.
6. Translation/disposition rules.
7. Primitive implications.
8. Research seeds for existing display types and slots.
9. A usable structure short enough to inform the display asset inventory.
10. A decision list.

Reject if it is only a glossary, tells Dev what to build, makes Lab owner of Atlas/Sense meaning, fails to produce a usable slot vocabulary, or cannot inform the display asset inventory.

## Concept Candidates

The concept candidate list is complete for M18 and lives in `workspace/complete/milestone-M18/`.

M19 accepted only `Instrument Status Band`.

All other concepts remain parked unless Human / Overseer explicitly opens them later.

## Guardrails

- Do not implement a full Ship/System face.
- Do not implement Atlas or Sense adapters.
- Do not make Lab an Atlas, Sense, or Core adapter.
- Do not define Atlas or Sense source-project meaning.
- Do not use domain-heavy wording as Lab default copy.
- Do not turn protected-term discovery into the product direction.
- Do not create a durable bridge contract.
- Do not expand visual smoke matrices.
- Do not require live/private/network data.
- Do not add a theme system, color editor, external UI framework, or broad reference-library feature.
- Do not rename IPC channels, service commands, payload fields, screenshot names, or compatibility ids unless the packet becomes impossible without it.

## Stop Conditions

Stop and return to Human / Overseer if the work would:

- require source-project meaning decisions
- turn terminology indexes into product direction
- turn display classes into a durable bridge contract
- instruct Dev to implement
- rename source-project terms
- create a shared Aura glossary
- make terminology risk unbounded through Lab display language

## Verification

Required before closure:

```powershell
npm.cmd run verify:all
```

Optional shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Support

M20 should record:

- files reviewed
- terminology sources used
- table structure
- display pressure categories
- proposed slot vocabulary
- translation/disposition rules
- primitive implications
- research seeds
- unresolved owner questions
- verification/support commands run

## Handoff

Expected artifact:

```txt
workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md
```

## Reference Folder

`workspace/reference/` is available for inspiration only.

Do not convert references into requirements unless this packet already names them.

## Parked Items

- Support panel label polish.
- Deeper compatibility-name cleanup.
- Lab protected-term discovery false-positive refinement.
- Atlas-local protected-term checker.
- Sense-local protected-term checker.
- Completed current-state doc vocabulary cleanup.
- Broad visual-smoke matrix expansion.
- Cross-project adoption decisions.
- Full face concepts beyond the Instrument Status Band.
