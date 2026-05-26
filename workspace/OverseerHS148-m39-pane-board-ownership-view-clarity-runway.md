# OverseerHS148 - M39 Pane Board Ownership And View Clarity Runway

Status: Active runway
Date: 2026-05-26
Role: Overseer
Milestone: M39 - Pane Board Ownership And View Clarity
Current executor: Dev
Expected DevHS: `workspace/DevHS148-pane-board-ownership-view-clarity.md`

## Purpose

Fix the ownership and view-state confusion found by the post-M38 bug hunt.

Pane Board proved the Human/agent spatial loop. Now it must stop allowing states where the tool can misrepresent who owns the visible board or whether an agent proposal has lineage.

## Source Of Intent

Accepted:

- `workspace/OverseerHS145-m38-pane-board-capability-acceptance.md`
- `workspace/OverseerHS146-pane-board-feel-test-acceptance.md`
- `workspace/OverseerHS147-pane-board-bug-hunt-acceptance.md`
- `docs/roadmap/m39-pane-board-ownership-view-clarity.md`

## Read First

- `AGENTS.md`
- `workspace/current.md`
- `workspace/pane-board/README.md`
- `src/main/labTooling/README.md`
- `src/main/labTooling/paneBoard/README.md`
- `src/main/labTooling/paneBoard/paneBoard.js`
- `src/renderer/pane-board/README.md`
- `src/renderer/pane-board/pane-board.js`
- `scripts/verify-pane-board.js`
- `docs/roadmap/m39-pane-board-ownership-view-clarity.md`
- `package.json`

## Ordered Dev Runway

1. Inspect the current board load/save/status controls and reproduce or reason through the invalid state: `status: agent-proposal`, `source.createdBy: agent`, `source.basedOn: null`.
2. Update validation/verification so invalid current-board ownership states fail.
3. Guard the UI so direct status changes to `agent-proposal` require lineage or are prevented with clear behavior.
4. Add a simple Refresh / Redraw control that reloads board state from disk without relaunching.
5. Add a visible ownership/status chip or banner so the user can tell whether the visible board is Human sketch, agent proposal, accepted, parked, rejected, or working view.
6. Add a minimal recovery path back to the Human sketch / current working board after proposal-like state is viewed.
7. Create the expected DevHS with files changed, behavior changed, verification run, and remaining risks.

## Guardrails And Non-Goals

- Do not edit Atlas, Sense, Core, or orchestration docs.
- Do not touch product renderer files unless a shared-launch defect is discovered. Stop first if that happens.
- Do not create target adapters.
- Do not change bridge/runtime contracts.
- Do not add code generation or CSS export.
- Do not implement a full compare workbench.
- Do not implement full accept/park/reject workflow unless a tiny piece is required to avoid ownership confusion.
- Do not implement note lanes or intent lamps yet.
- Do not delete existing board artifacts.
- Do not treat Pane Board output as product authority.

## Stop Conditions

Stop and return to Overseer if:

- preserving Human sketch state requires a larger storage model decision
- fixing proposal viewing requires replacing the current persistence model
- a requested fix becomes product renderer work
- existing Human-authored board artifacts would need to be discarded
- `smoke:pane-board` fails after reasonable local fixes

## Required Verification

Run:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Run normal Electron smoke only if shared Electron launch, shared preload, normal renderer launch, or presentation renderer files change:

```cmd
npm.cmd run smoke:electron
```

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
npm.cmd run verify:terminology
```

## Acceptance Criteria

M39 is acceptable if:

- `verify:pane-board` fails for `agent-proposal` current boards that lack `source.basedOn`.
- UI does not allow creating an agent-proposal current board without lineage.
- visible UI makes current board ownership/status obvious.
- user/tool can refresh from disk without relaunching.
- viewing or loading proposal-like state does not silently overwrite the Human sketch.
- there is a clear path back to the Human sketch / current working board.
- existing Pane Board smoke still passes.
- no product renderer files are changed.

## Dev Handoff Requirements

Create:

```txt
workspace/DevHS148-pane-board-ownership-view-clarity.md
```

Include:

- files changed
- ownership validation changes
- UI clarity/recovery changes
- verification commands and results
- whether current-board was corrected or preserved
- remaining risks
