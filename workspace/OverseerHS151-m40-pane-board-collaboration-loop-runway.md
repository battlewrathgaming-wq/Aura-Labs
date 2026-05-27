# OverseerHS151 - M40 Pane Board Collaboration Loop Runway

Status: Active runway
Date: 2026-05-27
Role: Aura Lab Overseer
Milestone: M40 - Pane Board Collaboration Loop
Current executor: Dev
Expected DevHS: `workspace/DevHS151-pane-board-collaboration-loop.md`

## Source Of Intent

Human opened the next Pane Board tooling push after the Shape See proof of concept:

```txt
Make Pane Board easier for Human and Labs to use as a shared Shape See surface, without expanding the portable presentation offer or source-project adoption.
```

Accepted direction:

- collaboration loop first
- visual/material semantics later
- tooling only
- keep clean presentation candidate protected

Relevant accepted boundaries:

- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `docs/adr/0003-shared-visual-thinking-surfaces.md`
- `workspace/overseer.md`
- `workspace/pane-board/README.md`
- `workspace/pane-board/concepts/numbered-spatial-handles-workflow.md`
- `workspace/pane-board/concepts/source-numbered-map-handoff.md`

## Current State Understanding

M39 made Pane Board safe enough for supervised use by fixing ownership/view-state confusion:

- no-lineage `agent-proposal` current-board saves are blocked
- Human sketch ownership is visible
- Refresh from disk exists
- Back to sketch exists
- current board remains Human-owned unless explicitly changed

The next barrier is usability: the Human and Labs need a light board-local conversation loop so shape work does not rely on chat scroll.

## Ordered Runway

1. Reload the current Pane Board implementation and document any pre-existing local dirty files before editing.
2. Add a low-friction redraw path for current-board changes. Prefer auto-redraw/revision watching if stable; otherwise implement an explicit redraw button/path and explain why.
3. Add board-native Human and Labs note lanes that are visibly separate and persist in board state without overwriting each other.
4. Add a board-local command inbox for short spatial instructions. It must read as board guidance only, not Dev authorization or product authority.
5. Add a capture helper that can save a named resting record with current board JSON, optional screenshot when already supported, source artifact, and Human signal. It must not overwrite Human sketches or agent proposals unexpectedly.
6. Update Pane Board verification for new state fields, note/command persistence, ownership boundaries, and capture behavior.
7. Create `workspace/DevHS151-pane-board-collaboration-loop.md` with files changed, behavior added, verification results, remaining risks, and any Human/Overseer decisions needed.

## Acceptance Criteria

- Human can change or load board state and get an updated visible board without stale confusion.
- Human notes and Labs notes are separate, visible, and persisted.
- Board commands are persisted as board-local guidance and are not treated as executable project instructions.
- Capture produces a reviewable named state or record and preserves ownership/provenance.
- Existing Human sketch protection and agent proposal separation remain intact.
- Pane Board remains Lab-only tooling.
- Clean presentation renderer/head has no dependency on Pane Board collaboration fields.
- No source-project terms, bridge contracts, adapters, generated UI, or product renderer behavior are introduced.
- Verification and Pane Board smoke pass.

## Guardrails And Non-Goals

- Do not touch Atlas, Sense, Core, or shared orchestration files.
- Do not create source adapters.
- Do not create extraction automation.
- Do not generate product UI from Pane Board.
- Do not add target-project styling.
- Do not add bridge/runtime contracts.
- Do not make Pane Board part of the clean presentation head.
- Do not treat Pane Board materials or numbered handles as final components.
- Do not add layer controls, material controls, pattern metadata, compare workbench, or accept/park/reject workflow in this slice.
- Do not add live/private/network behavior.
- Do not run destructive or git history rewriting actions.

## Stop Conditions

Stop and return to Overseer/Human if:

- auto-watch/redraw requires a larger persistence model replacement
- capture requires desktop-wide or private screenshot access beyond the Pane Board window
- Human sketch protection conflicts with the requested capture helper
- the work needs shared preload/normal renderer changes outside the Pane Board gate
- the implementation would make the clean presentation head depend on Pane Board state
- the board command inbox starts acting like a task runner
- existing dirty files contain unrelated work that cannot be safely separated

## Required Verification

Run:

```powershell
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Then from `F:\Projects\Docs\Aura-Project-Orchestration` run:

```powershell
npm.cmd run verify:terminology
```

Run normal Electron smoke only if shared launch, preload, normal renderer, or clean presentation-head behavior changes:

```powershell
npm.cmd run smoke:electron
```

## Evidence

Dev should append:

- files changed
- pre-existing dirty files observed before editing
- behavior added
- capture output paths, if generated
- verification commands and results
- whether normal Electron smoke was required

## Dev Handoff

Dev should create `workspace/DevHS151-pane-board-collaboration-loop.md` and include:

- summary of the collaboration loop
- how Human/Labs notes are stored
- how board commands are stored and bounded
- how redraw works
- how capture works
- files changed
- verification results
- remaining risks or parked follow-ups

## Advisory Disposition

Accepted into M40:

- auto-redraw / revision check or low-friction redraw path
- board-native Human/Labs notes
- board command inbox
- capture helper

Parked:

- layer controls
- material controls
- pattern metadata
- compare workbench
- accept/park/reject workflow
- generated UI
- source adapters
- target-project adoption
