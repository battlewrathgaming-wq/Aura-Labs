# M36 - Pane Board V1 Prototype

Status: Complete

## Outcome

Build the first Lab-only Pane Board prototype so the Human and agents can share spatial layout intent through a stateful-at-rest board, snapshots, and reviewable layout references.

## Why This Is Milestone-Sized

M35 proved the concept and cooperation model. The next useful step is to make the loop real:

```txt
move panes -> current board rests on disk -> grab that state -> compare variants
```

The prototype should prove the communication workflow, not a complete design platform.

## Core Contract

Pane Board V1 is a separate Lab-only tool.

It is not:

- product renderer scope
- clean presentation head work
- target-project UI
- bridge/runtime contract
- SmokeFlash replacement
- draggable production dashboard
- export/seeding

## Prototype Scope

V1 should support:

- separate Lab-only Electron entry or clearly gated Lab-only launch path
- `960x640` and `720x640` viewport presets
- visible neutral panes
- add, duplicate, delete panes
- drag and resize with Pointer Events
- 8px snap grid
- grid-unit persistence for `x`, `y`, `w`, and `h`
- edit pane label and notes
- lock / unlock pane
- autosave latest board to `workspace/pane-board/current-board.json`
- append meaningful changes to `workspace/pane-board/board-events.ndjson`
- snapshot current board into Human sketch, agent proposal, or accepted layout paths
- PNG export with visible metadata

## Stateful-At-Rest Model

The active board should rest in:

```txt
workspace/pane-board/current-board.json
```

Meaningful moments should append to:

```txt
workspace/pane-board/board-events.ndjson
```

Snapshots should be copied into:

```txt
workspace/pane-board/human-sketches/
workspace/pane-board/agent-proposals/
workspace/pane-board/accepted-layouts/
workspace/pane-board/screenshots/
```

## Acceptance Criteria

M36 is acceptable when:

- the tool can launch without changing the clean presentation head
- panes can be moved and resized
- pane position rests as snapped grid integers
- `current-board.json` updates with the latest visible board state
- snapshots can be created without overwriting Human sketches
- agent proposals must reference `basedOn`
- a "grab that state" path exists as a button, command, or documented prototype action
- screenshots can be exported or the stop condition clearly explains why not
- verification names the exact commands run
- no product renderer, target adapter, bridge/runtime contract, live data, or export work is introduced

## Verification

Required:

- `npm.cmd run verify:all`

If renderer/Electron code changes:

- `npm.cmd run smoke:electron`

If a separate Pane Board verification script is added, include it in `verify:all` or name it explicitly in the Dev handoff.
