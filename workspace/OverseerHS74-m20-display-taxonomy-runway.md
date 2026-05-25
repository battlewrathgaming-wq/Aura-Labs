# OverseerHS74 - M20 Display Taxonomy Runway

Status: M20 runway opened
Role: Overseer
Date: 2026-05-25

## Request Received

Human accepted the direction that Aura Lab should first develop terminology understanding and a slot/class/type model before building more display primitives.

Human asked to push this as a runway for the UI documentor.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/README.md`
- `workspace/workshop/README.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/OverseerProposalHS72-display-elements-workshop-and-material-bench.md`
- `workspace/OverseerProposalHS72-lab-display-inventory-and-material-contract.md`
- `docs/current-state/m19-instrument-status-band-current-state.md`

## Decision

Open:

```txt
M20 - Display Vocabulary And Slot Taxonomy
```

Current executor:

```txt
UI development owner / display asset documentor
```

Expected artifact:

```txt
workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md
```

## Purpose

Build the first practical bridge from terminology to display assets.

The UI documentor should classify project-wide terms into display classes/types, identify recurring display pressures, and propose an initial Lab-owned slot vocabulary.

This is documentation/advisory work only. It should not implement code, open Dev work, create bridge contracts, or decide target-project meaning.

## Acceptance Criteria

Accept only if the artifact provides useful operating infrastructure, not just a word list.

Required:

- Terminology coverage across relevant Lab, Atlas, and Sense terms.
- Owner and layer separation for meaning-bearing terms.
- A class/type table with columns for term, owner, layer, source artifact, display class, display type, likely slot need, source meaning risk, Lab translation allowed, and notes.
- A display pressure model covering recurring needs such as state, basis, freshness/age, availability, source/provider/coverage, sample/cap/partiality, warnings/gaps, action/gate/authority, count/value/ratio, actor/object/entity, time/window/history, and diagnostics/support.
- An initial Lab-owned slot vocabulary.
- Translation/disposition rules: preserve exact, source-qualify, translate to Lab display vocabulary, keep internal/support-only, reject as Lab default, or escalate.
- Primitive implications: which display element families the slot vocabulary points toward.
- Research seeds for the next broad display-pattern research pass.
- A decision list with accepted candidate slot names, unresolved slot names, terms needing owner review, and recommended next packet.

Hard rejection conditions:

- Reject if it is only a glossary.
- Reject if it tells Dev what to build.
- Reject if it makes Lab owner of Atlas/Sense meaning.
- Reject if it does not produce a usable slot vocabulary.
- Reject if it cannot inform the display asset inventory.

## Recommended Next Packet After Acceptance

If M20 is accepted, the likely next packet is:

```txt
M21 - Display Pattern Research Sweep
```

M21 should use the M20 slot vocabulary to research existing display forms and decide which primitive families are worth targeting.

## Verification

No runtime verification is required for M20.

Expected checks before closure:

```powershell
npm.cmd run verify:all
```

Optional shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Guardrails

- Do not implement code.
- Do not edit Atlas, Sense, Core, or shared protected-word JSON.
- Do not create a durable bridge contract.
- Do not rename Lab or source-project terms.
- Do not make terminology a product direction source by itself.
- Do not create a shared Aura glossary.
- Do not turn references or terminology indexes into task queues.
- Preserve source-project ownership and layer separation.
