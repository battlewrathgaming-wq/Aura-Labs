# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M31 - Display Material Repeat Cycle
Last completed milestone: M30 / HS122 - Reduced-Motion Gate Acceptance
Current executor: Dev
Current focus: Prototype the pending Availability Reason Treatment material.
Expected artifact filename: `workspace/DevHS127-availability-reason-treatment-prototype.md`

## Current State

Aura Lab has accepted the first M31 material prototype:

- `workspace/display-materials/long-text-detail-block.md`

Long Text Detail Block is accepted as a Lab-local prototype-backed material.

Remaining M31 pending material pages:

- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`

Human `.` progressed the Overseer decision state. Open the next bounded Dev prototype for Availability Reason Treatment, the recommended second M31 material.

This is one bounded material prototype. It is not a target adapter, composed output, export/seeding step, bridge/runtime contract, or source-project semantic decision.

## Source Of Intent

Accepted source of intent:

- `workspace/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `workspace/OverseerHS127-m31-availability-reason-treatment-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the existing material harness and the accepted Long Text Detail Block / TTL Strip implementation patterns.
2. Add a Lab-local visible prototype for `mat-availability-reason-treatment`.
3. Include staged material content for:
   - no data
   - unavailable
   - blocked
   - failed
   - fallback
   - aged
   - source-owned no-scan placeholder with owner/layer qualification
4. Keep each parent surface compact with a one-line reason. Do not show fake primary values for unavailable cases.
5. Put reason, basis, owner/layer note, and fallback note in detail rows where relevant.
6. Ensure non-color-only status and restrained warning/absence styling.
7. Ensure narrow viewport containment and no horizontal overflow.
8. Ensure reduced-motion behavior remains compatible if reveal/transition behavior is touched.
9. Update focused renderer verification and create `workspace/DevHS127-availability-reason-treatment-prototype.md`.

## Acceptance Criteria

This runway is acceptable if:

- Availability Reason Treatment renders visibly in the Lab material harness or an existing Lab-local presentation path
- no data, unavailable, blocked, failed, fallback, aged, and source-owned placeholder cases are distinct
- parent surface shows a one-line reason without fake primary values
- detail reveals reason, basis, owner/layer note, and fallback note where relevant
- non-color-only status is present
- warning/absence styling is restrained and does not overstate normal absence
- narrow viewport has no horizontal overflow
- reduced-motion compatibility remains intact
- SmokeFlash/workshop remains hidden/gated support tooling
- no target-project adapter, source-project meaning, export/seeding, composed output, or bridge/runtime contract is introduced
- Dev records the result in the expected DevHS

## Guardrails And Non-Goals

Allowed:

- local renderer/CSS changes
- local material fixture/state definitions for Lab review
- focused verification updates
- Electron smoke because visible material behavior may change

Not allowed:

- target-project adapters
- source-project semantics
- export/seeding
- SmokeFlash split
- new view intent
- virtualized list helper
- composed display output work
- product settings surface
- bridge payload, IPC, preload bridge, service command, or runtime contract changes
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Overseer if:

- the prototype requires a broad material-harness refactor
- source-project meaning becomes necessary
- the change would alter bridge/runtime contracts
- SmokeFlash/workshop exposure would need to change
- verification needs a broad new visual-smoke matrix

## Required Verification

Run:

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

## Evidence

Dev should fill this:

- Files changed:
- Material prototype behavior:
- State distinction notes:
- Narrow/reduced-motion notes:
- Verification commands and results:
- Compatibility names intentionally left local:
- Parked items:

## Dev Handoff

Expected output:

```txt
workspace/DevHS127-availability-reason-treatment-prototype.md
```

The handoff must state whether the material prototype is ready for Overseer acceptance or whether more visual review is needed.

## Advisory Disposition

- Opened: HS127 Availability Reason Treatment Dev prototype.
- Accepted: Long Text Detail Block prototype.
- Deferred: Source / Basis Coverage Marker prototype.
- Deferred: Compact Value Rail prototype.
- Deferred: composed display output candidate.
- Parked: virtualized list helper until concrete list pressure exists.
- Parked: Lab fixture adapter.
- Deferred: renderer security review until closer to split/export readiness unless Human pulls it forward.
- Deferred: SmokeFlash split until export/seeding/target consumption under ADR 0001.
- Parked: target-project adapters and export/seeding under ADR 0002.

## Residual Risks

- Existing inherited naming tripwires remain.
- Pending material pages may look more final than they are; keep status visible.
- Material prototype is Lab-local until accepted.
- Absence terms such as blocked, degraded, and no scan may be source-owned by context and must remain qualified.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
