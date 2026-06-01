# M48 - Display Selection Shelf

Status: Complete
Owner: Aura Lab Overseer

## Purpose

Create a concise target-readable selection shelf from accepted Lab materials and glass assets.

M48 should let Sense, Atlas, or the Human read one menu and choose which presentation features they want to trial without rereading the full Lab history.

## Outcome

Aura Lab has a selection surface that answers:

```txt
Which features do you want from this selection?
```

The shelf should summarize accepted Lab presentation assets, point to canonical pages/files, name what each item offers, and state what targets must provide themselves.

## In Scope

- accepted display materials
- accepted display glass assets
- `workspace/display-assets.md`
- `workspace/display-materials/`
- `workspace/display-outputs/`
- `workspace/display-schema-ledger.md`
- target-readable summary rows
- status: accepted / pending / parked where useful
- source/target boundary notes

## Out Of Scope

- target projects
- target adapters or mappers
- package/export creation
- React scaffold
- current Lab renderer changes
- Electron/preload/IPC changes
- SmokeFlash, Pane Board, Wayfinder, or service registry changes
- bridge/runtime contracts
- source-project state or terminology decisions
- new material/glass invention

## Acceptance Criteria

M48 is complete when:

- a concise target-readable selection shelf exists
- accepted glass assets are listed with what they offer
- accepted materials are listed with what they offer
- pending/parked items are either omitted or clearly separated
- each row points to canonical Lab pages/files
- target responsibilities are clear
- Lab non-ownership of target meaning/adapters/adoption is clear
- the shelf does not authorize Dev, target adoption, package/export, or adapters
- verification passes

## Verification Expectation

Required:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required.

## Dependencies

- `workspace/display-assets.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `docs/statements/presentation-head-handoff-standard.md`

## Closure

Accepted by `workspace/OverseerHS176-m48-display-selection-shelf-acceptance.md`.

Accepted outputs:

- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md`
- `workspace/DevHS175-display-selection-shelf.md`

M48 produced the target-readable selection shelf and preserved the target-owned mapper/adoption boundary.
