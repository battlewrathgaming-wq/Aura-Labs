# M41 - Portable Presentation Starter Kit Contents

Status: Complete
Owner: Aura Lab Overseer

## Purpose

Define what Aura Lab needs to solve before preparing a portable presentation starter kit for target-project adoption.

M41 is not an implementation milestone. It should turn the accepted portability readiness advisory into a clear contents and boundary specification so later Dev work can extract or build the right thing without guessing.

## Outcome

Aura Lab has an accepted starter-kit contents specification that names:

- what the starter kit is for
- what travels as neutral presentation structure
- what stays Lab-only
- what target projects must adapt locally
- what display input shape examples should use
- what static reference should exist before optional React scaffolding
- what verification and review are enough before extraction

## In Scope

- accept and disposition `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`
- define the neutral starter-kit purpose and contents
- define a small display input example shape for presentation only
- identify seed candidates from accepted materials and the Instrument Readout Panel output
- define the static reference target
- define optional React scaffold posture as secondary/example-only
- list exclusions: SmokeFlash, Pane Board, Wayfinder, Electron/preload, Lab fixtures, target adapters, source-project semantics
- define verification expectations and future extraction prerequisites

## Out Of Scope

- implementation
- renderer extraction
- React package creation
- target-project adapters
- Sense or Atlas file edits
- bridge/runtime contract creation
- source-project doctrine
- security review execution
- SmokeFlash split execution

## Acceptance Criteria

M41 is complete when:

- HS159 is accepted, adapted, or rejected with clear rationale
- a starter-kit contents/spec artifact exists and is reviewable
- the artifact clearly separates neutral starter contents, Lab-only tooling, target-owned adapters, and deferred export blockers
- the artifact names the smallest useful display input example shape without calling it a bridge contract
- the artifact names the static reference target and optional React scaffold posture
- the artifact lists exact exclusions and target ownership boundaries
- the artifact gives a bounded next Dev runway candidate only after the contents are clear
- no implementation, target adapter, export/seeding, or shared doctrine is introduced

## Verification Expectation

For the M41 advisory/spec packet:

- no runtime verification is required unless code or renderer files change
- run `npm.cmd run verify:all` if project docs or workspace state are updated
- run `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration` if terminology, protected words, or portable copy rules change

## Dependencies

- `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`

## Closure

Closed accepted in HS161.

Accepted artifact:

- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`

Next recommended step: a bounded Lab-local static reference for the portable presentation starter. React scaffold, renderer export, SmokeFlash split execution, and target adapters remain deferred.
