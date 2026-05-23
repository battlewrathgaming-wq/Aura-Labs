# OverseerHS05: Bridge Test Modes Runway

Date: 2026-05-23
Role: Overseer
Project: Aura Lab
Milestone: M00 - Aura Lab Boot
Sequence: HS05
Status: Dev runway written

## Human Direction

The Human chose bridge next, with a light scope:

```txt
We don't need complex data presentation, just enough to populate the UI in different test modes.
```

## Source Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS04-briefing-slice-acceptance.md`
- `src/services/serviceRegistry.js`
- `src/renderer/app.js`
- `scripts/verify-services.js`

## Decision

Write a bounded Dev packet for lightweight bridge test modes.

The packet should not define a durable bridge contract or expand product data modeling. It should make the existing fixture/test mode concept explicit, discoverable, renderer-selectable, and verified.

## Accepted Direction

Dev should support:

- normal/populated
- empty
- stale
- failed
- partial

The modes should populate the existing UI through the same bridge/rendering path used by the normal project briefing.

## Non-Goals

- no complex data presentation
- no durable bridge contract
- no persistence
- no editing
- no automation controls
- no network or GUI smoke
- no Aura Core seed-readiness implementation

## State Updates

Updated:

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS05-bridge-test-modes-runway.md`

## Next Packet

Current executor: Dev

Expected output:

```txt
workspace/DevHS05-bridge-test-modes.md
```

Required verification:

```powershell
npm.cmd run verify:all
```
