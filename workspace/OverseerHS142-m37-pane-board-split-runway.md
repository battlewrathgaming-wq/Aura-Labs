# OverseerHS142 - M37 Pane Board Split Stabilization Runway

Status: Active runway
Role: Overseer
Milestone: M37 - Pane Board Split Stabilization
Date: 2026-05-26

## Purpose

Open a bounded Dev sprint to split and stabilize Pane Board as Lab-only tooling before it gains more features.

The Human authorized this direction because any tooling braided into the presentation offer becomes future removal work. M37 should protect portability first.

## Source Of Intent

Accepted:

- `workspace/OverseerHS141-m36-pane-board-v1-acceptance.md`
- `workspace/DevHS140-pane-board-v1-prototype.md`
- `workspace/pane-board/README.md`
- `docs/roadmap/m36-pane-board-v1-prototype.md`
- `docs/roadmap/m37-pane-board-split-stabilization.md`
- Human direction: split Pane Board now, then stabilize it in a sprint, so Lab can later help Atlas and Sense without carrying tooling into the presentation offer.

## Current Executor

Dev.

## Expected DevHS

`workspace/DevHS142-pane-board-split-stabilization.md`

## Ordered Runway

1. Read M36 acceptance, M37 roadmap, current packet, Pane Board README, and ADR 0001 / ADR 0002.
2. Inspect the current Pane Board implementation and identify which code is Lab-only tooling versus presentation-offer code.
3. Move or extract Pane Board main-process helpers into a clearer Lab-only module/folder boundary without broad Electron restructuring.
4. Keep `npm.cmd run pane-board`, `npm.cmd run smoke:pane-board`, and `npm.cmd run verify:pane-board` working.
5. Ensure normal launch does not require Pane Board state, Pane Board renderer files, or Pane Board persistence.
6. Add or update a short boundary note documenting what is portable presentation offer and what is Lab-only tooling.
7. Do not add new Pane Board features except tiny changes required by the split.

## Guardrails And Non-Goals

- Do not change Atlas, Sense, or Core.
- Do not create target adapters.
- Do not export, seed, or attach Lab renderer/head to target projects.
- Do not alter bridge/runtime contracts.
- Do not add live data.
- Do not replace SmokeFlash.
- Do not add board interaction polish beyond split-required fixes.
- Do not add code generation or CSS export.
- Do not let Pane Board state become presentation runtime state.
- Do not make the clean presentation head import Pane Board renderer code.

## Stop Conditions

Stop and return to Overseer if:

- a clean split requires broad Electron restructuring
- normal launch would need to depend on Pane Board modules or workspace state
- Pane Board smoke cannot be kept working
- target-project semantics or adapter decisions appear necessary
- verification cannot run

## Required Verification

Run:

```cmd
npm.cmd run verify:all
npm.cmd run smoke:electron
npm.cmd run smoke:pane-board
```

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

If GUI smoke fails only inside sandbox but passes with the approved GUI smoke path, document both.

## Evidence

Dev must create `workspace/DevHS142-pane-board-split-stabilization.md` with:

- files changed
- boundary chosen
- what moved out of general app code
- what remains shared and why
- normal launch result
- Pane Board launch/smoke result
- verification commands and results
- residual risks

