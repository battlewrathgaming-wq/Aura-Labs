# Overseer HS127 - M31 Availability Reason Treatment Runway

Status: Opened
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `workspace/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`

## Decision

Open the next M31 Dev prototype for `mat-availability-reason-treatment`.

HS126 accepted the first non-TTL M31 material prototype. M31 requires at least two non-TTL material prototypes accepted, adapted, or parked with clear rationale. Availability Reason Treatment is the recommended second prototype because it clarifies absence and limited-availability states without collapsing them into alarm-heavy styling.

## Expected Dev Output

`workspace/DevHS127-availability-reason-treatment-prototype.md`

## Dev Runway Summary

Dev should add a Lab-local visible prototype for Availability Reason Treatment.

The prototype should prove that no data, unavailable, blocked, failed, fallback, aged, and source-owned no-scan placeholder cases can stay visually distinct while remaining compact, readable, and non-alarmist.

## Verification Required

Dev should run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification if visible copy, material pages, ledger rows, or terminology-sensitive docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Guardrails

- Do not implement target adapters.
- Do not create export/seeding readiness.
- Do not split SmokeFlash.
- Do not add a new view intent.
- Do not implement virtualized list helper.
- Do not create composed display output work.
- Do not change bridge payloads, IPC, preload bridge, service commands, or source-project semantics.
- Keep material labels Lab-slim and product-agnostic.
- Keep source-owned placeholder examples clearly qualified by owner/layer.

## Stop Conditions

Dev should stop and return if:

- the prototype requires a broad material-harness refactor
- source-project meaning becomes necessary
- bridge/runtime contracts would need to change
- SmokeFlash/workshop exposure would need to change
- verification requires broad visual-smoke matrix expansion

## Acceptance Checks For Overseer

- Availability Reason Treatment renders visibly in the Lab material harness or an existing Lab-local presentation path.
- No data, unavailable, blocked, failed, fallback, aged, and source-owned placeholder cases are distinct.
- The parent surface shows a one-line reason without fake primary values.
- Detail reveals reason, basis, owner/layer note, and fallback note where relevant.
- Non-color-only status is present.
- Narrow viewport keeps state and reason visible without horizontal overflow.
- Warning styling is restrained and does not overstate normal absence.
- Reduced-motion compatibility remains intact.
- No target adapter/export/contract work is introduced.
