# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M26 - Guided Display Material Production
Last completed milestone: M25 - Display Material Requirements
Current executor: UI/UX advisor / display material designer
Current focus: produce individual reusable Lab display material schemas from accepted M25 requirements
Expected artifact filename: `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`

## Current State

Aura Lab has accepted and closed M25. M25 translated the M24 request/fitness signals into reusable material requirements, with `mat-authority-window-ttl-strip`, `mat-expandable-status-card`, and `mat-table-row-detail-drawer` as the first three prototype candidates.

Human direction now opens a guided runway for UI/UX to pick up the accepted requests as individual Lab materials to produce. This is a Lab material-schema production packet, not Dev implementation and not Atlas/Sense feature delivery.

Slim Lab language is already accepted through the critical terminology contract. Do not make terminology a separate workstream in this packet. Use Lab-owned product-agnostic vocabulary for Lab defaults, preserve source-project terms when referenced, and stop only if a material cannot be described without importing Atlas/Sense/Core meaning.

## Purpose

Create individual material schemas that can become the reusable ingredients for future Lab prototypes.

Each schema should answer:

- what the material is for
- what display slots it needs
- what states it must handle
- what content lanes it expects
- what interaction or reveal behavior it needs
- what narrow-layout behavior it needs
- what fixture/staged-ingest shape would pressure it later
- what verification would be enough when Dev eventually implements it

The output should make it easy for a later Human-piloted feature delivery packet to choose one material and build it without redoing M20-M25 reasoning.

## Source Of Intent

Accepted source of intent:

- Human direction that Lab should make high-quality portable HTML presentation features for bridge-fed information.
- Human direction that Lab feature delivery should be pilot-driven, not ceremony-driven.
- Human direction to work through backlog feature ideas as they develop.
- Human direction that this next step is a guided UI/UX runway for requests as individual materials to produce.
- Human confirmation that slim language is already the posture, so terminology should be handled as a guardrail rather than a separate concern.
- M20 accepted `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`.
- M21 accepted `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`.
- M22 accepted `workspace/reference/display-material-bench-2026-05-25.md`.
- M23 accepted `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`.
- M24 accepted `workspace/DisplayResponseComparisonHS82-active-display-requests.md`.
- M25 accepted `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md`.
- `workspace/display-schema-ledger.md` tracks material ingredients and combined output references.
- `workspace/display-asset-documentation-owner-contract.md` governs display documentation ownership.

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/display-schema-ledger.md`
- `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md`
- `workspace/DisplayResponseComparisonHS82-active-display-requests.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`

## Ordered Runway

1. Confirm the M25 first-three candidate order: `mat-authority-window-ttl-strip`, `mat-expandable-status-card`, then `mat-table-row-detail-drawer`.
2. For each of those three materials, create an individual material schema section with purpose, fit, slots, state set, content lanes, visual structure, interaction/reveal behavior, narrow behavior, fixture/staged-ingest needs, risks, and minimum future verification.
3. Include a lighter follow-on section for `mat-compact-status-plus-drawer` and `mat-warning-gap-edge` as near-next candidates, without fully expanding them unless the artifact remains clear and bounded.
4. Record which M25 requirements are intentionally parked, including `mat-connected-system-radius`, and why.
5. Update `workspace/display-schema-ledger.md` only if the artifact produces accepted/pending schema rows worth tracking. Do not duplicate full schema bodies in the ledger.
6. Leave a concise acceptance checklist for Human / Overseer review.

## Acceptance Criteria

The UI/UX artifact is acceptable if it:

- produces individual material schemas, not feature specs for Atlas or Sense
- preserves the accepted first-three candidate order unless it explains a Human-fit reason to adjust it
- uses Lab slim vocabulary for Lab-owned default language
- preserves source-project terms as source-owned examples only
- maps each material back to M20 slots, M21 display types, M22 material content, and M25 requirements
- makes each material small enough for later Dev implementation
- names future fixture/staged-ingest needs without turning them into bridge contracts
- names minimum verification without expanding visual-smoke matrices
- updates or recommends ledger rows only for resting-state outputs
- parks product-specific, source-meaning, or high-complexity work

Reject or redirect if the artifact:

- becomes an Atlas or Sense implementation plan
- asks UI/UX to decide source-project meaning
- turns Lab material schemas into shared Aura doctrine
- turns staged ingest into a runtime payload contract
- creates a hidden request backlog
- makes terminology cleanup the main work
- starts SmokeFlash or Dev implementation

## Guardrails

- Advisory/material-schema work only.
- Do not implement code.
- Do not create a Dev runway.
- Do not edit Atlas, Sense, Core, or Orchestration.
- Do not define target-project adoption.
- Do not rename source-project terms.
- Do not create a durable bridge contract, IPC contract, payload contract, or runtime fixture doctrine.
- Do not broaden visual smoke.
- Do not require live/private/network data.
- Do not use archived docs or reference folders as task queues.
- Do not make request handling or workflow refactor the active work.
- Do not turn slim-language verification into the product direction.

## Stop Conditions

Stop and return to Human / Overseer if the work would:

- require Atlas or Sense product decisions
- require target-project files to change
- require a new terminology authority decision
- require implementation or visual smoke to judge the artifact
- require live/private/network data
- turn a material into a source-project feature specification
- produce only inspiration/taste notes without a material schema
- exceed the first-three material scope without a clear reason

## Verification

Documentation-only UI/UX work should run local verification after artifact edits:

```powershell
npm.cmd run verify:all
```

Shared terminology check is recommended if visible terminology or critical vocabulary is changed:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Electron smoke is not required for this packet because no UI code or CSS should change.

## Evidence

UI/UX should fill this after work:

- Files changed:
- Material schemas produced:
- Ledger rows added or intentionally deferred:
- Verification run:
- Remaining risks:

## Handoff

Expected output:

```txt
workspace/DisplayMaterialSchemasHS86-guided-material-production.md
```

The handoff should state whether the material schemas are ready for Human-piloted feature delivery, which single material is the best first prototype, and what remains parked.

## Parked Items

- Workflow/pipeline refactor.
- SmokeFlash HTML harness and staged-ingest implementation.
- Dev feature delivery.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Full route/reveal architecture.
- Connected-system/radius visualization until source-owned relation meaning exists.
