# OverseerHS07: Visual Smoke Runway

Date: 2026-05-23
Role: Overseer
Project: Aura Lab
Milestone: M00 - Aura Lab Boot
Sequence: HS07
Status: Dev runway written

## Human Direction

The Human clarified that visual smoke is needed because this is a visual prototype.

## Clarification

"Close M00" means close milestone M00: accept the milestone, archive active handshakes under `workspace/complete/milestone-M00/`, and park or open the next milestone. It is not the next action now because the Human asked for visual smoke first.

## Decision

Write a bounded Dev packet for GUI/Electron visual smoke.

## Scope

Dev should:

- run `npm.cmd run verify:all`
- launch the app with `npm.cmd start`
- inspect the first viewport
- verify the briefing appears before diagnostics
- verify the bridge test mode selector is present and quiet
- exercise Normal, Empty, Stale, Failed, and Partial modes through the UI
- record visible findings and cleanup

## Non-Goals

- no bridge contract
- no product expansion
- no git
- no network
- no durable docs
- no Aura Core seed-readiness implementation

## State Updates

Updated:

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS07-visual-smoke-runway.md`

## Next Packet

Current executor: Dev

Expected output:

```txt
workspace/DevHS07-visual-smoke.md
```
