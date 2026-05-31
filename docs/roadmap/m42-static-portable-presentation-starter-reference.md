# M42 - Static Portable Presentation Starter Reference

Status: Active candidate
Owner: Aura Lab Overseer

## Purpose

Create the first Lab-local static reference for the portable presentation starter.

M42 should prove the accepted starter contents in a small framework-neutral form before React scaffolding, renderer export, target adapters, or SmokeFlash split execution.

## Outcome

Aura Lab has a separate static HTML/CSS/JS reference that renders one Instrument Readout Panel from neutral example data.

The static reference should show that the presentation grammar can travel without the current Lab renderer, Electron shell, preload/IPC, SmokeFlash, Pane Board, Wayfinder, Lab fixture registry, or target-project adapter code.

## In Scope

- create a Lab-local static starter reference folder
- include a README explaining scope, boundaries, and Sense caution feedback
- include neutral example data for the Instrument Readout Panel
- render one selected panel at a time from static data
- include a small manual state selector if useful
- include one detail reveal
- include CSS custom properties for conservative replaceable styling primitives
- demonstrate multiple display example states from data
- qualify source-owned placeholder examples through `sourceOwned` or equivalent copy
- verify the static reference with existing project checks and a small local static-reference check if needed

## Out Of Scope

- React scaffold
- renderer export/seeding
- copying the current renderer wholesale
- SmokeFlash split execution
- Pane Board or Wayfinder code
- Electron shell/preload/IPC
- Lab service registry / fixture selector controls
- target-project adapters
- Sense or Atlas file edits
- bridge/runtime contracts
- source-project semantics
- security review execution

## Acceptance Criteria

M42 is complete when:

- the static reference exists separately from the current renderer
- the static reference can be opened as plain HTML or otherwise inspected without Electron
- the reference renders one Instrument Readout Panel from neutral example data
- the example data clearly says it is display-example input, not a bridge/runtime contract
- `state`, `availability`, `NO DATA`, and `UNAVAILABLE` are documented as display example fields/labels, not target enums or states
- Sense-owned placeholders such as `blocked`, `no-scan`, and `degraded` are qualified if they appear
- the reference does not include SmokeFlash, Pane Board, Wayfinder, Electron/preload, Lab service registry, target adapters, or source-project semantics
- React remains deferred
- verification passes

## Verification Expectation

Minimum:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

If a new static-reference verifier is added:

- include it in `verify:all` or name its standalone command in the Dev handoff

Manual/browser inspection is useful but not required unless Human explicitly asks for it.

## Dependencies

- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
