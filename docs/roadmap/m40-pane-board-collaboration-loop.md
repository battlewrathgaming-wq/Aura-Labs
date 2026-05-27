# M40 - Pane Board Collaboration Loop

Status: Active candidate
Owner: Aura Lab Overseer

## Purpose

Make Pane Board easier for the Human and Labs to use as a shared Shape See surface without expanding the portable presentation offer or source-project adoption.

M40 is tooling work. It improves the Lab-only spatial conversation tool so the Human can sketch, agents can respond, and useful board states can rest on disk with less chat friction.

## Outcome

Human and Labs can keep a light board-local conversation around a Pane Board state:

```txt
Human changes board -> board redraws -> notes/commands sit on the board -> capture creates a named resting record
```

## In Scope

- auto-redraw or revision check for `current-board.json`
- separate Human and Labs note lanes on the board
- board-local command inbox for small instructions such as `snap this`, `try wider #02`, or `compare A/B`
- capture helper that saves current board JSON, optional screenshot, short name, source artifact, and Human signal
- verification updates for the bounded collaboration loop

## Out Of Scope

- source adapters
- extraction automation
- generated UI
- target-project styling
- bridge/runtime contracts
- product renderer dependencies
- treating Pane Board materials as final components
- layer controls
- material controls
- pattern metadata
- compare workbench
- accept/park/reject workflow

## Acceptance Criteria

- Pane Board refreshes/redraws when the current board changes on disk, or exposes an explicit low-friction redraw path if automatic revision checking is not stable enough.
- Human and Labs notes are visibly separate and persist in board state.
- Board command inbox is clearly board-local and does not imply Dev or product authority.
- Capture helper creates a reviewable resting record without overwriting Human sketches or agent proposals unexpectedly.
- The clean presentation renderer/head has no dependency on Pane Board state or collaboration fields.
- Verification covers the new collaboration fields and ownership boundaries.
- Pane Board smoke still passes.

## Verification Expectation

- `npm.cmd run verify:pane-board`
- `npm.cmd run verify:all`
- `npm.cmd run smoke:pane-board`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

Run normal Electron smoke only if shared launch, preload, normal renderer, or clean presentation-head behavior changes:

- `npm.cmd run smoke:electron`
