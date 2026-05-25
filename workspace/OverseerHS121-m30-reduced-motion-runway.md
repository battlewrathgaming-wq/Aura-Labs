# Overseer HS121 - M30 Reduced-Motion Gate Runway

Status: Opened
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `docs/roadmap/display-material-repeat-cycle-candidate.md`
- `docs/roadmap/m31-composed-display-output.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/roadmap/README.md`
- `docs/index.md`
- `workspace/complete/milestone-M29/OverseerHS120-m29-close-readiness-review.md`

## Decision

Open M30 as a bounded presentation resilience gate.

The previous M30 display-material repeat-cycle candidate is deferred, not rejected. The immediate next Lab need is a small product-facing quality slice: reduced-motion support for the presentation head after M29 added view, reveal, lazy visual, row facet, and overflow behavior.

## Why This Runway

This continues the accepted M29 direction without extending M29 forever.

It keeps the project focused on visible presentation quality and avoids jumping into:

- target adapters
- export/seeding
- broad SmokeFlash tooling
- virtualized list infrastructure without concrete pressure
- another material batch before the head has a basic resilience gate

## Expected Dev Output

`workspace/DevHS121-reduced-motion-gate.md`

## Dev Runway Summary

Dev should add a small renderer-local reduced-motion gate.

The work should preserve the existing Summary / Basis / Details presentation identity while making reveal/detail/lazy/overflow behavior readable when motion is reduced.

## Verification Required

Dev should run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Shared terminology verification is only required if visible copy or durable terminology-sensitive docs change.

## Guardrails

- Do not implement target adapters.
- Do not create export/seeding readiness.
- Do not split SmokeFlash.
- Do not add a new view intent.
- Do not implement virtualized list helper.
- Do not create a Lab fixture adapter.
- Do not change bridge payloads, IPC, preload bridge, service commands, or source-project semantics.
- Do not turn reduced motion into a new product settings surface unless the existing renderer requires a tiny test hook.

## Stop Conditions

Dev should stop and return if:

- reduced-motion support requires broad renderer architecture changes
- the change needs a new product-visible settings model
- the change would alter bridge/runtime contracts
- the change requires changing SmokeFlash/workshop exposure
- verification cannot cover the behavior without a broad new smoke matrix

## Acceptance Checks For Overseer

- reduced-motion path exists and is bounded
- no product terminology drift
- no new adapter/export/split work
- visible behavior remains readable
- verification is recorded
- DevHS names intentionally left-local implementation details
