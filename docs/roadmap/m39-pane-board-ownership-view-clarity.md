# M39 - Pane Board Ownership And View Clarity

Status: Complete

## Outcome

Make Pane Board safer for regular Lab collaboration by preventing ownership confusion and separating the current working board from saved sketches/proposals.

## Why This Is Milestone-Sized

M38 stabilized the core loop. HS146 proved the Human/agent spatial communication model. The bug hunt then found the real barrier: the tool can still confuse "current board," "viewed proposal," and "agent-owned state."

Before adding compare, accept/park/save, note lanes, or richer visual affordances, Pane Board must stop lying about ownership.

## Goal

Protect the Human sketch and make view state explicit.

The user should be able to understand:

- what is the current working board
- whether the visible board is a Human sketch, agent proposal, accepted reference, parked item, or rejected item
- whether a proposal has valid lineage
- how to return to the Human sketch after viewing a proposal

## Scope

M39 should:

- make `verify:pane-board` fail when `current-board.json` is `agent-proposal` without `source.basedOn`
- prevent or guard direct status changes to `agent-proposal` without lineage
- add a simple Refresh / Redraw control
- add a visible ownership/status chip or banner
- add a minimal "return to current sketch" or equivalent recovery path after viewing proposal-like state
- keep saved proposal files separate from current-board state
- preserve Human sketch protection from M38

## Non-Goals

- no product renderer work
- no target-project adapters
- no bridge/runtime contract changes
- no code generation
- no CSS export
- no broad visual design expansion
- no full compare workbench
- no full accept/park/reject workflow unless a tiny piece is required to avoid ownership confusion
- no one-way note lane implementation yet
- no intent lamps yet

## Acceptance Criteria

M39 is acceptable if:

- `verify:pane-board` fails for `agent-proposal` current boards that lack `source.basedOn`
- UI does not allow creating an agent-proposal current board without lineage
- visible UI makes current board ownership/status obvious
- user/tool can refresh from disk without relaunching
- viewing or loading proposal-like state does not silently overwrite the Human sketch
- there is a clear path back to the Human sketch / current working board
- existing Pane Board smoke still passes
- no product renderer files are changed

## Verification

Required:

- `npm.cmd run verify:pane-board`
- `npm.cmd run verify:all`
- `npm.cmd run smoke:pane-board`

Run normal Electron smoke only if shared Electron launch, shared preload, normal renderer launch, or presentation renderer files change:

- `npm.cmd run smoke:electron`

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

- `npm.cmd run verify:terminology`
