# M49 - Sense Trial Glass Package

Status: Active
Owner: Aura Lab Overseer

## Purpose

Create the smallest clean Lab-local package shape for Sense to trial the selected presentation glass.

Sense selected:

- Instrument Readout Panel Glass
- Availability Reason Treatment
- Long Text Detail Block
- Warning / Gap Edge
- Expandable Status Card as optional inspiration, not a required package feature

The practical ask:

```txt
Can Lab package the glass for a local Sense trial, with these materials in mind?
```

## Outcome

Aura Lab provides a small static handoff bundle that Sense can copy or inspect locally.

The bundle should make clear:

- what files travel
- how to open or inspect the static head
- which selected material behaviors are represented
- what Sense must provide itself
- what the package must not imply

## In Scope

- a Lab-local static package folder for the Sense trial glass
- copied or referenced static starter files needed to render the Instrument Readout Panel Glass
- package README
- manifest or contents note
- selected-material notes
- verification that the package remains display-only and local
- handoff language for Sense

Suggested package location:

```txt
portable-presentation-starter/packages/sense-trial-glass/
```

## Out Of Scope

- target-project edits
- target adapters or mappers
- Sense runtime integration
- bridge/runtime contracts
- React scaffold
- Electron/preload/IPC changes
- current Lab renderer changes
- SmokeFlash, Pane Board, Wayfinder, or service registry changes
- new material/glass behavior
- target adoption or target fitness claims

## Acceptance Criteria

M49 is complete when:

- a Sense trial glass package folder exists
- it contains the minimum static files needed for local inspection
- it includes a README or manifest naming included files
- it names the selected Sense trial materials
- it clearly states Sense owns mapper, meaning, runtime behavior, copy, review, and adoption
- it clearly states Lab sample/example data is not Sense data
- it does not require Electron, IPC, preload, service registry, SmokeFlash, Pane Board, Wayfinder, or target project files
- verification passes

## Verification Expectation

Required:

- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required unless Dev changes visible static behavior enough to require it.

## Dependencies

- `workspace/display-selection-shelf.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/warning-gap-edge.md`
- `workspace/display-materials/expandable-status-card.md`
- `portable-presentation-starter/`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
