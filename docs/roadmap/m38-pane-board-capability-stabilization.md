# M38 - Pane Board Capability Stabilization

Status: Active

## Outcome

Make Pane Board dependable as a Lab-only spatial communication tool before adding more expressive tooling.

## Why This Is Milestone-Sized

Pane Board is becoming important because it lets the Human and agents share visual intent without turning every UI discussion into a long prose negotiation.

Before it grows, Lab needs confidence that the board can launch reliably, rest on disk, preserve Human intent, and let agents create separate proposals from the same shared state.

## Goal

Stabilize the basic capability loop:

```txt
Human arranges panes -> board rests on disk -> Human says "grab that state" -> agent reads state -> agent writes a separate proposal -> Human compares
```

This is qualitative and technical work. The point is not just that the Electron path works. The point is that the tool helps code represent spatial intent, hierarchy, pressure, and shape language.

## Scope

M38 should:

- harden Pane Board launch and runtime stability
- define what "stable board state" means in local docs or verifier output
- prove save/load keeps pane coordinates, labels, notes, lock state, and status stable
- protect Human sketches from accidental agent overwrite
- keep agent proposals separate and explicitly tied to `basedOn`
- keep screenshot capture gated like a shutter, not an uncontrolled stream
- make board state easy for agents to inspect from disk
- preserve the M37 Lab-only tooling boundary

## Non-Goals

- no product renderer work
- no clean presentation offer changes
- no target-project adapters
- no bridge/runtime contract changes
- no live/private/network tests
- no code generation or CSS export
- no runtime draggable dashboard
- no SmokeFlash replacement
- no broad screenshot matrix
- no visual design-system expansion

## Acceptance Criteria

M38 is acceptable if:

- `npm.cmd run pane-board` launches the Lab-only board path
- normal presentation launch remains independent of Pane Board state
- current board state rests at `workspace/pane-board/current-board.json`
- save/load preserves pane positions as grid-aligned integers
- pane labels, notes, lock state, status, and review fields survive reload
- agent proposals write into `workspace/pane-board/agent-proposals/`
- agent proposals cannot overwrite Human sketches by default
- proposals include `basedOn`
- PNG capture is explicitly triggered by smoke or user/tool action
- generated capture artifacts are named and inspectable
- verification names the stable-state checks
- no target-project or product renderer semantics are introduced

## Verification

Required:

- `npm.cmd run verify:pane-board`
- `npm.cmd run verify:all`
- `npm.cmd run smoke:pane-board`

Run normal Electron smoke if the implementation touches shared Electron launch, preload, normal renderer launch, or presentation renderer files:

- `npm.cmd run smoke:electron`

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

- `npm.cmd run verify:terminology`
