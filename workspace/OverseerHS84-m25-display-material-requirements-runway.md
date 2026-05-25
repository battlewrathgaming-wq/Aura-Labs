# OverseerHS84 - M25 Display Material Requirements Runway

Date: 2026-05-25
Role: Overseer
Milestone: M25 - Display Material Requirements
Status: Active runway

## Decision

Open M25 as a UI/UX-led material requirements and prototype-readiness packet.

The goal is to get Aura Lab back on track: not feature delivery for Atlas/Sense, but capturing which individual display materials Lab needs to make next.

## Source Of Intent

Accepted input:

- Human correction that Lab is not doing feature delivery here.
- Human direction that the current need is requirements capture for individual display materials.
- Human direction that UX should outline and carry the work far enough toward prototype readiness in one complete output.
- M24 advisory comparison artifact.
- M24 Human fitness notes.
- M20 slot taxonomy.
- M21 display type library.
- M22 material bench.

## Current Executor

UI/UX advisor / display material designer.

This is not a Dev implementation packet.

## Expected Artifact

```txt
workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md
```

## Required Reading

- `AGENTS.md`
- `workspace/current.md`
- `workspace/OverseerHS83-m24-acceptance.md`
- `workspace/DisplayResponseComparisonHS82-active-display-requests.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`

## Ordered Runway

1. Read the required files and summarize the current state.
2. Extract material needs from M24 recommendations and Human fitness notes.
3. Create a material requirements table, one row per needed display material, not per source-project feature.
4. Map each material requirement back to M20 slots, M21 display types, and M22 material sets.
5. For each material, name required states, copy/text pressure, layout/narrow pressure, interaction/reveal pressure, source-meaning risk, and what the material must prove.
6. Rate prototype readiness: ready, needs more material, needs source-project decision, parked.
7. Recommend first, second, and third prototype material candidates.
8. List product-specific or too-complex items that should remain parked.
9. Suggest future SmokeFlash/staged-ingest needs, but do not build them.

## Required Output Shape

The artifact should include:

- files reviewed
- current state understanding
- requirement extraction method
- material requirements table with:
  - material requirement id
  - material name
  - source pressure/request
  - user/display problem
  - relevant M20 slots
  - relevant M21 display types
  - relevant M22 material sets
  - required states
  - copy/text pressure
  - layout/narrow pressure
  - interaction/reveal pressure
  - terminology/source-meaning risk
  - what it must prove
  - prototype-readiness rating
  - parked/product-specific notes
- recommended first prototype material set
- recommended second/third candidates
- what remains parked
- suggested future SmokeFlash/staged-ingest needs
- acceptance criteria for the material requirements artifact

## Acceptance Criteria

M25 can be accepted if the artifact:

- is requirements capture, not feature delivery
- derives material needs from M24 and Human fitness notes
- identifies individual display materials Lab needs to make
- maps material needs to M20 slots, M21 display types, and M22 material sets
- names what each material must prove
- separates reusable Lab material from Atlas/Sense-specific product work
- recommends first, second, and third prototype candidates
- names what remains parked
- keeps future SmokeFlash/staged-ingest as suggested needs only
- does not authorize Dev implementation

Reject or redirect if the artifact:

- becomes an Atlas or Sense implementation plan
- builds a feature spec for target projects
- opens Dev work
- treats source-project terms as Lab defaults
- skips slot/type/material mapping
- produces only inspiration or visual taste notes
- turns SmokeFlash into the active task
- revives parked target-project complexity as immediate work

## Guardrails

- Advisory / requirements only.
- Do not implement code.
- Do not create Dev runways.
- Do not edit Atlas or Sense.
- Do not create source-project adoption records.
- Do not refactor the display request workflow in M25.
- Do not build SmokeFlash.
- Do not define bridge, IPC, payload, schema, persistence, runtime, or provider behavior.
- Keep source-project terms source-owned.
- Use Lab product-agnostic vocabulary for Lab materials.

## Stop Conditions

Stop and return to Human / Overseer if:

- material requirements cannot be separated from source-project product decisions
- the work needs live target-project behavior or private data
- the work would require implementation to evaluate
- the packet starts refactoring workflow instead of capturing material needs
- the packet starts deciding Atlas/Sense adoption

## Verification

Required after writing the artifact:

```powershell
npm.cmd run verify:all
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

No Electron smoke is required for this documentation/requirements packet.

## Parked

- Workflow refactor until after M25 or Human explicitly opens it.
- SmokeFlash implementation.
- Target-project Dev work.
- Target-project adoption records.
- Atlas connected-system/radius visualization.
- Broad display inventory scaffold unless Human prioritizes it.
