# OverseerHS25: Visual Smoke Hardening Runway

Date: 2026-05-24
Role: Overseer
Project: Aura Lab
Milestone: M05 - Visual Smoke Hardening
Sequence: HS25
Status: Dev runway written

## Source Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `workspace/complete/milestone-M04/OverseerHS24-m04-closure.md`
- `workspace/complete/milestone-M04/DevHS23-aura-lab-visual-prototype.md`
- `package.json`

## Decision

Opened M05 as a small Dev hardening milestone.

Reasoning:

M04 already accepted the visual prototype and left two concrete verification risks:

- no project-local `smoke:electron` wrapper
- no dedicated long-text visual smoke mode

Those are the best next progress step because they reduce future agent noise, make verification easier to run, and improve confidence in text containment without expanding product direction.

## Packet Written

Updated `workspace/current.md` with an active Dev runway.

Expected Dev handoff:

```txt
workspace/DevHS25-visual-smoke-hardening.md
```

The packet asks Dev to:

- add `scripts/electron-visual-smoke.ps1`
- add `npm.cmd run smoke:electron`
- add a development/review `long-text` mode
- include long-text in visual smoke
- keep existing modes and direct smoke behavior
- update verification

## Guardrails

No visual redesign, target-project adapter work, durable bridge contract, framework choice, external project edits, live/private/destructive actions, or generated artifact staging is authorized.

## Required Verification

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

## Human Questions

None required before Dev can execute.

## Residual Risk

If long-text mode starts forcing schema decisions, Dev must stop and report rather than turning the test fixture into a durable bridge contract.
