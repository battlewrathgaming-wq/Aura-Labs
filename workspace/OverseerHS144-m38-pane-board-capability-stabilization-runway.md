# OverseerHS144 - M38 Pane Board Capability Stabilization Runway

Status: Active runway
Date: 2026-05-26
Role: Overseer
Milestone: M38 - Pane Board Capability Stabilization
Current executor: Dev
Expected DevHS: `workspace/DevHS144-pane-board-capability-stabilization.md`

## Purpose

Stabilize Pane Board as a Lab-only spatial communication tool before adding more expressive tooling.

The Human value is qualitative as well as technical: Pane Board should let code answer to visible intent. It should help the Human and agents see shape, hierarchy, pressure, grouping, and "that feels right" without turning the interface conversation into forty chat bullets.

## Source Of Intent

Accepted:

- `workspace/OverseerHS141-m36-pane-board-v1-acceptance.md`
- `workspace/OverseerHS143-m37-pane-board-split-acceptance.md`
- `workspace/pane-board/README.md`
- `docs/roadmap/m38-pane-board-capability-stabilization.md`
- Human direction after M37: focus on Pane Board capability, stable state, controlled screenshot capture, and qualitative visual communication.

## Read First

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/pane-board/README.md`
- `workspace/prompts.md`
- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/renderer/pane-board/README.md`
- `docs/roadmap/m36-pane-board-v1-prototype.md`
- `docs/roadmap/m37-pane-board-split-stabilization.md`
- `docs/roadmap/m38-pane-board-capability-stabilization.md`
- `package.json`

## Ordered Dev Runway

1. Inspect the current Pane Board launch, save/load, proposal, and screenshot paths without changing the product renderer.
2. Define "stable board state" in the Pane Board docs and verifier scope. Include coordinates, labels, notes, lock state, status, review metadata, `basedOn`, and update timestamps where useful.
3. Harden save/load so current board state round-trips predictably and remains grid-aligned.
4. Harden Human sketch versus agent proposal separation so proposals write separately, include `basedOn`, and cannot overwrite Human sketches by default.
5. Keep PNG capture gated by explicit smoke or user/tool action. Do not add background or free-running capture.
6. Update `verify:pane-board` so it checks the stable-state and overwrite-boundary expectations.
7. Create the expected DevHS with files changed, behavior changed, verification run, remaining risks, and any Human feel-test needs.

## Guardrails And Non-Goals

- Do not edit Atlas, Sense, Core, or orchestration docs.
- Do not change the clean presentation renderer unless required by a discovered shared-launch defect. If this happens, stop and explain first.
- Do not add target adapters.
- Do not change bridge/runtime contracts.
- Do not add product navigation through Pane Board.
- Do not add code generation or CSS export.
- Do not make Pane Board output product runtime state.
- Do not make screenshots automatic background output.
- Do not broaden into visual design-system work.
- Do not treat coordinates as exact UI specs.
- Do not overwrite Human sketches from agent proposal code paths.

## Stop Conditions

Stop and return to Overseer if:

- normal presentation launch begins depending on Pane Board files or state
- preserving Human sketches requires a larger storage model decision
- screenshot capture requires live/private/desktop-wide capture beyond the Pane Board window
- save/load stability requires broad Electron restructuring
- a requested fix becomes product renderer work
- the current board or existing Human-authored state would need to be discarded
- `smoke:pane-board` fails after reasonable local fixes

## Required Verification

Run:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Run normal Electron smoke if shared Electron launch, preload, normal renderer launch, or presentation renderer files changed:

```cmd
npm.cmd run smoke:electron
```

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

## Acceptance Criteria

M38 is acceptable if:

- Pane Board launches through its Lab-only command.
- normal presentation launch remains independent of Pane Board state.
- board state rests at `workspace/pane-board/current-board.json`.
- save/load preserves pane coordinates as grid-aligned integers.
- labels, notes, lock state, status, and review fields survive reload.
- agent proposals are separate files under `workspace/pane-board/agent-proposals/`.
- agent proposals include `basedOn`.
- agent proposal paths cannot overwrite Human sketches by default.
- PNG capture is explicitly triggered, named, and inspectable.
- `verify:pane-board` checks the stable-state and proposal-boundary expectations.
- DevHS names any remaining Human feel-test needs.

## Dev Handoff Requirements

Create:

```txt
workspace/DevHS144-pane-board-capability-stabilization.md
```

Include:

- files changed
- stability behavior added or confirmed
- how Human sketch protection works
- how agent proposal separation works
- screenshot/capture behavior
- verification commands and results
- remaining risks
- any recommended Human feel test
