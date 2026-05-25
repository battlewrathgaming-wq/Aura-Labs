# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M23 - Display Use Case Capture
Last completed milestone: M22 - Display Material Bench
Current executor: Human / source-project owners, then UI development owner / display asset documentor
Current focus: gather scoped `request_display` entries, then map them to three candidate display methods
Expected artifact filename: `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`

## Current State

Aura Lab has accepted and closed M22. M23 is now open to capture display use cases before test-build or SmokeFlash work.

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
- M21 accepted `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`.
- M21 accepted the display type library as advisory display-planning input, not implementation, bridge contract, target adoption, or source-project meaning.
- M22 was opened as `Display Material Bench` and is now accepted.
- SmokeFlash is accepted as a later light harness candidate, not active M22 work.
- M22 accepted `workspace/reference/display-material-bench-2026-05-25.md`.
- M22 accepted Material Set Formation, including `Material class`, as authoring structure for future expansion.
- M23 is open as `Display Use Case Capture`.
- `workspace/request_display.md` is the advisory request schema for other projects to ask Lab for Bridge -> Interface display suggestions.
- `workspace/display-request-cooperation-contract.md` is the cooperative advisory contract for request limits, scope, product attachment, and archive expectations.

## Purpose

M23 develops the use-case layer before future display primitive work:

```txt
Display Use Case Capture
```

The goal is to map known presentation surfaces and incoming `request_display` entries to Lab display slots, display types, material sets, and three candidate display methods.

This is advisory/documentation work only. It is not implementation, a bridge contract, runtime fixture doctrine, target adoption, source-project semantics, or product doctrine.

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
- M21 runway: `workspace/OverseerHS76-m21-display-type-library-runway.md`
- M21 UI documentor artifact: `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- M21 Overseer acceptance: `workspace/OverseerHS77-m21-acceptance.md`
- M22 runway: `workspace/OverseerHS78-m22-display-material-bench-runway.md`
- M22 material artifact: `workspace/reference/display-material-bench-2026-05-25.md`
- M22 Overseer acceptance: `workspace/OverseerHS79-m22-acceptance.md`
- M23 request schema: `workspace/request_display.md`
- M23 runway: `workspace/OverseerHS80-m23-display-use-case-capture-runway.md`
- M23 cooperation contract: `workspace/display-request-cooperation-contract.md`

## Source Of Intent

Accepted source of intent:

- Human direction that Lab should ask whether a presentation should exist before building it.
- M18 UI/UX recommendation to build `Instrument Status Band` first.
- Reference folder accepted as inspiration only.
- UIDevHS69 accepted as practical M19 advisory input, subordinate to this current packet.
- Human direction to use terminology understanding as the starting point for what needs to be displayed.
- Human direction to develop a robust primitive slot vocabulary before tailoring display elements to product visions.
- Human direction to expand the type-to-display library before entering a repeat cycle.
- Human direction that the next step is most likely a research task.
- Human direction that display material means hard content used to test display types.
- Human agreement to create display material before a lightweight SmokeFlash harness.
- Human direction to do use-case capture before test build.
- Human direction to include a display request schema and request workflow.
- Human authorization for advisory cross-project `request_display` pointers.
- Human direction to cap active requests at five per project.
- Human direction to include limited scope and product attachment so requests can act as internal display checklists.
- `workspace/display-asset-documentation-owner-contract.md`

Accepted references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- `workspace/complete/milestone-M18/OverseerHS63-m18-presentation-concept-runway.md`
- `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/OverseerHS77-m21-acceptance.md`
- `workspace/OverseerHS78-m22-display-material-bench-runway.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/OverseerHS79-m22-acceptance.md`
- `workspace/request_display.md`
- `workspace/OverseerHS80-m23-display-use-case-capture-runway.md`
- `workspace/display-request-cooperation-contract.md`
- `workspace/OverseerHS75-m20-acceptance.md`
- `workspace/workshop/README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Ordered Runway

1. Human / source-project owners gather scoped `request_display` entries using the request schema and cooperation contract.
2. Keep each project to five active requests unless Human / Overseer explicitly overrides the cap.
3. Read `workspace/request_display.md`, `workspace/display-request-cooperation-contract.md`, M20 slot taxonomy, M21 display type library, M22 material bench, Lab critical terms, and the display asset documentation owner contract.
4. Define the use-case capture purpose: map real or known current presentation surfaces to candidate Lab display methods without taking source-project ownership.
5. Build a use-case comparison table covering Lab-known surfaces first, then Atlas/Sense/other-project entries that arrive through `request_display`.
6. For each row, capture project owner, product attachment, limited scope, surface/use case, current presentation, user goal, source terms to preserve, terms to qualify, known fields, state/freshness/basis/gap needs, applicable M20 slots, applicable M21 display types, applicable M22 material sets, and three candidate display methods.
7. Give each row a disposition: near-term Lab candidate, needs target review, needs material, needs inventory entry, parked, or not suitable.
8. Record advisory cross-project `request_display` pointer deployment without changing target-project active runways.
9. Recommend the next packet after M23: likely Display Inventory Scaffold, SmokeFlash feasibility, or first material-backed primitive selection.

## Acceptance Criteria

M23 can be accepted if the artifact:

- defines a usable use-case comparison table
- uses `request_display` as an advisory intake shape
- follows the cooperative request cap of five active requests per project unless Human / Overseer overrides it
- includes limited scope and product attachment for captured requests
- maps use cases to M20 slots, M21 display types, and M22 material sets
- offers three distinct display methods per suitable known presentation
- makes clear which project owns source meaning
- preserves target-project terms rather than making them Lab defaults
- gives future inventory, SmokeFlash, or primitive-selection work a better target
- records any cross-project pointers deployed and keeps them advisory

Reject or redirect if the artifact:

- becomes a target adoption plan
- becomes a bridge contract or payload schema
- asks Dev to implement
- treats Lab as owner of target-project meaning
- skips slot/type/material mapping
- gives only one display option where comparison is possible
- turns request intake into a hidden backlog
- omits scope boundaries for active requests

## Concept Candidates

The concept candidate list is complete for M18 and lives in `workspace/complete/milestone-M18/`.

M19 accepted only `Instrument Status Band`.

All other concepts remain parked unless Human / Overseer explicitly opens them later.

## Guardrails

- This is a use-case/documentation packet, not Dev implementation.
- Do not implement a full Ship/System face.
- Do not implement Atlas or Sense adapters.
- Do not make Lab an Atlas, Sense, or Core adapter.
- Do not define Atlas or Sense source-project meaning.
- Do not use domain-heavy wording as Lab default copy.
- Do not turn protected-term discovery into the product direction.
- Do not create a durable bridge contract.
- Do not create runtime fixture doctrine.
- Do not make `request_display` a runtime schema.
- Do not exceed five active requests per project without explicit Human / Overseer direction.
- Do not expand visual smoke matrices.
- Do not require live/private/network data.
- Do not add a theme system, color editor, external UI framework, or broad reference-library feature.
- Do not rename IPC channels, service commands, payload fields, screenshot names, or compatibility ids unless the packet becomes impossible without it.
- Do not treat inspiration images or websites as requirements.
- Do not use archived docs or reference folders as active task queues.
- Do not create a hidden backlog; every recommended display type needs a disposition.
- Do not implement SmokeFlash in M23.
- Do not promote the repeat cycle until the material bench and inventory scaffold are accepted.

## Stop Conditions

Stop and return to Human / Overseer if the work would:

- require source-project meaning decisions
- turn terminology indexes into product direction
- turn display classes into a durable bridge contract
- turn display material into runtime fixtures or payload contracts
- turn `request_display` into runtime schema or target adoption
- turn scoped requests into an unbounded active queue
- instruct Dev to implement
- rename source-project terms
- create a shared Aura glossary
- make terminology risk unbounded through Lab display language
- require target-project files to be changed
- require live/private/network access as a prerequisite
- produce only an inspiration gallery without slot mapping and disposition
- turn SmokeFlash tooling into the M23 product
- disrupt target-project active runways while deploying advisory pointers

## Verification

Latest accepted local verification:

```powershell
npm.cmd run verify:all
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Support

M23 support:

- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/OverseerHS75-m20-acceptance.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/OverseerHS77-m21-acceptance.md`
- `workspace/OverseerHS78-m22-display-material-bench-runway.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/OverseerHS79-m22-acceptance.md`
- `workspace/request_display.md`
- `workspace/display-request-cooperation-contract.md`
- `workspace/OverseerHS80-m23-display-use-case-capture-runway.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`

## Handoff

Expected artifact:

```txt
workspace/DisplayUseCaseCaptureHS80-request-display-map.md
```

The artifact should include files reviewed, use-case capture purpose, request workflow notes, active request count per project, pointer deployment notes, use-case comparison table, three candidate display methods per suitable use case, limited scope, product attachment, slot/type/material mapping, risks, parked items, verification results, and recommended next packet.

## Reference Folder

`workspace/reference/` is available for inspiration only.

Do not convert references into requirements unless this packet already names them.

## Parked Items

- SmokeFlash HTML harness until M23 and inventory shape are accepted or Human prioritizes tooling.
- Cannibalizing Sense log-reader shape for Lab-local staged ingest until a later tooling packet.
- Repeat implementation cycle until the use-case capture, material bench, and inventory scaffold are accepted.
- Support panel label polish.
- Deeper compatibility-name cleanup.
- Lab protected-term discovery false-positive refinement.
- Atlas-local protected-term checker.
- Sense-local protected-term checker.
- Completed current-state doc vocabulary cleanup.
- Broad visual-smoke matrix expansion.
- Cross-project adoption decisions.
- Full face concepts beyond the Instrument Status Band.
