# OverseerHS140 - M36 Pane Board V1 Prototype Runway

Status: Active runway
Role: Overseer
Milestone: M36 - Pane Board V1 Prototype
Date: 2026-05-26

## Purpose

Open a bounded Dev runway for the first Lab-only Pane Board prototype.

The prototype should prove that the Human can sketch layout intent, the board can rest on disk, and agents can create or reason about named layout references without treating them as product UI.

## Source Of Intent

Accepted:

- `workspace/OverseerHS139-m35-pane-board-advisory-acceptance.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/pane-board/README.md`
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `docs/roadmap/m36-pane-board-v1-prototype.md`
- Human refinement: Pane Board should be stateful at rest; "Can you grab that state?" should snapshot the current board.

## Current Executor

Dev.

## Expected DevHS

`workspace/DevHS140-pane-board-v1-prototype.md`

## Ordered Runway

1. Read the required sources, especially the M35 acceptance, Pane Board README, and M36 roadmap.
2. Inspect the existing Electron/main/preload/renderer structure and choose the smallest Lab-only launch path that does not pollute the clean presentation head.
3. Implement a Pane Board V1 surface with `960x640` and `720x640` presets, visible neutral panes, add/duplicate/delete, label/notes editing, lock/unlock, drag/resize, and 8px snap.
4. Persist the latest visible board to `workspace/pane-board/current-board.json` using grid-unit integers for pane `x`, `y`, `w`, and `h`.
5. Add a lightweight append-only event log at `workspace/pane-board/board-events.ndjson` for meaningful changes.
6. Add a "grab that state" path that snapshots the current board into the correct Pane Board folder without overwriting Human sketches; agent proposals must include `basedOn`.
7. Add PNG export if feasible inside the bounded slice; if it is not feasible, document the blocker and leave screenshot export as the only permitted follow-up.

## Guardrails And Non-Goals

- Do not change target projects.
- Do not create target adapters.
- Do not alter bridge/runtime contracts.
- Do not make Pane Board part of the clean presentation head.
- Do not replace SmokeFlash.
- Do not create live data or project adapter paths.
- Do not add code generation or CSS export.
- Do not let agent proposals overwrite Human sketches.
- Do not treat accepted layouts as product UI or implementation specs.
- Do not broaden into a general design platform.

## Stop Conditions

Stop and return to Overseer if:

- a separate Lab-only launch path requires broad Electron restructuring
- screenshot export requires unsafe filesystem or private-state access
- implementation would touch target-project semantics
- bridge/runtime contract changes appear necessary
- the clean presentation head would need to depend on Pane Board state
- verification cannot run

## Required Verification

Run:

```cmd
npm.cmd run verify:all
```

Run Electron smoke if renderer/Electron behavior changes:

```cmd
npm.cmd run smoke:electron
```

If Dev adds a Pane Board-specific verifier, run it explicitly and include it in the handoff.

## Evidence

Dev must update this section or cite equivalent evidence in `workspace/DevHS140-pane-board-v1-prototype.md` with:

- files changed
- launch path chosen
- whether the clean presentation head was untouched
- saved `current-board.json` shape
- event log behavior
- snapshot behavior
- screenshot behavior or documented blocker
- verification commands and results

## Dev Handoff

Dev must create:

```txt
workspace/DevHS140-pane-board-v1-prototype.md
```

Include remaining risks, any parked screenshot/export work, and whether a Human manual feel check is needed.

