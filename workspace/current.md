# Current Workspace Packet

Status: Waiting
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: None
Last completed milestone: M20 - Display Vocabulary And Slot Taxonomy
Current executor: Human / Overseer
Current focus: waiting for Human / Overseer direction after M20 closure
Expected artifact filename: None

## Current State

Aura Lab is waiting after accepting and closing M20.

Housekeeping note:

- The active workspace root has been cleaned.
- Completed M13-M17 handoffs are in `workspace/complete/`.
- Atlas/Sense relay advisories are in `workspace/archive/cross-project-relay/`.
- `workspace/reference/` is accepted as reference-only input.
- No target-project adoption work is open in Lab.
- Remote Atlas/Sense read access is allowed under `workspace/LabRemoteConsumerConformanceHS66.md`.

Accepted state:

- M00 through M20 are complete.
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
- M20 accepted `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`.
- The initial Lab display slot vocabulary is accepted as display asset vocabulary, not bridge fields or target-project contracts.

## Purpose

M20 developed the understanding layer needed before future display primitive work:

```txt
Display Vocabulary And Slot Taxonomy
```

The accepted result classifies project-wide terminology into display classes/types, identifies recurring display pressures, and proposes a Lab-owned slot vocabulary.

This remains advisory/documentation work only. It is not implementation, a bridge contract, a shared glossary, target adoption, or product doctrine.

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
- M20 UI documentor artifact: `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- M20 Overseer acceptance: `workspace/OverseerHS75-m20-acceptance.md`

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

No active runway.

Do not execute Dev work from this packet.

Next valid moves:

1. Human / Overseer may open `M21 - Display Material Bench`.
2. Human / Overseer may open a broad display-pattern research sweep.
3. Human / Overseer may open display inventory scaffold work.
4. Human / Overseer may park Lab while target projects continue local adoption work.

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

Latest accepted verification:

```powershell
npm.cmd run verify:all
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Support

M20 support:

- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/OverseerHS75-m20-acceptance.md`

## Handoff

Accepted artifact:

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
