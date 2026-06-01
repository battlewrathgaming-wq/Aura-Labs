# OverseerHS175 - M48 Display Selection Shelf Runway

Status: Open
Role: Aura Lab Overseer
Date: 2026-06-01
Milestone: M48 - Display Selection Shelf

## Request

Create a concise target-readable menu from accepted Lab materials and glass assets so Sense can choose which presentation features to trial without more Lab/Sense cross-talk.

This is a Dev documentation/inventory packet, not an adapter or package packet.

## Decision

Open M48 as a narrow Dev packet.

Executor:

- Dev

Expected handoff:

- `workspace/DevHS175-display-selection-shelf.md`

Primary output:

- `workspace/display-selection-shelf.md`

## Read First

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-assets.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `workspace/OverseerHS174-m47-presentation-glass-value-definition-acceptance.md`
- `docs/roadmap/m48-display-selection-shelf.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

Inspect as needed:

- accepted material pages in `workspace/display-materials/`
- accepted output/glass pages in `workspace/display-outputs/`
- `portable-presentation-starter/README.md`

## Task

Create:

```txt
workspace/display-selection-shelf.md
```

The shelf should be a target-readable selection menu, not a full history.

It should let a target project or Human answer:

```txt
Which features do you want from this selection?
```

## Required Shelf Shape

Include:

1. Purpose.
2. How to use this shelf.
3. Core boundary:
   - targets translate themselves
   - Lab makes the window worth looking through
4. Accepted glass assets table.
5. Accepted material features table.
6. Optional/pending features table or clearly parked section.
7. For each listed accepted item:
   - name
   - what it offers
   - canonical page/file
   - likely target use
   - target must provide
   - must not imply
8. Recommended Sense selection prompt:
   - choose desired features
   - preserve Sense-owned meaning
   - name any missing package shape instead of shaping Lab from Sense
9. Recommended Atlas selection prompt, if useful but clearly not active adoption.
10. Boundaries / non-goals.

## Files In Scope

- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md` only if a pointer is useful
- `workspace/display-schema-ledger.md` only if adding the shelf as catalog/reference is useful
- `workspace/current.md`
- `workspace/overview.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m48-display-selection-shelf.md`
- `workspace/DevHS175-display-selection-shelf.md`

## Guardrails

- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not create package/export files.
- Do not create a React scaffold.
- Do not change current Lab renderer files.
- Do not touch Electron/preload/IPC.
- Do not touch SmokeFlash, Pane Board, Wayfinder, or service registry.
- Do not create bridge/runtime contracts.
- Do not invent new material/glass capabilities.
- Do not turn Lab example states into target state labels.
- Do not claim target adoption or target fitness.
- Keep the shelf as a menu, not a task queue.

## Acceptance Criteria

The packet is acceptable if:

- `workspace/display-selection-shelf.md` exists.
- It lists accepted glass assets with clear feature offers.
- It lists accepted material features with clear feature offers.
- It separates accepted items from pending/parked items.
- It points to canonical Lab pages/files.
- It states target responsibilities.
- It states what Lab must not imply.
- It includes a Sense-friendly selection prompt.
- It does not authorize adapters, package/export, target adoption, or Dev work in target projects.
- Verification passes.

## Required Verification

Run:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required.

## Expected Handoff Contents

`workspace/DevHS175-display-selection-shelf.md` should include:

- files changed
- what the selection shelf contains
- accepted glass/materials included
- pending/parked handling
- boundaries preserved
- verification commands and results
- any recommended next relay wording for Sense
