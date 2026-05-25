# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M31 - Display Material Repeat Cycle
Last completed milestone: M30 / HS122 - Reduced-Motion Gate Acceptance
Current executor: Dev
Current focus: Prototype the pending Long Text Detail Block material.
Expected artifact filename: `workspace/DevHS125-long-text-detail-block-prototype.md`

## Current State

Aura Lab has accepted UIUXHS123 as advisory input for M31 and created four pending display-material pages:

- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`

Human selected Dev prototype as the next move. Start with Long Text Detail Block because HS124 identifies it as the best first future prototype candidate.

This is one bounded material prototype. It is not a target adapter, composed output, export/seeding step, bridge/runtime contract, or source-project semantic decision.

## Source Of Intent

Accepted source of intent:

- Human direction: Dev prototype
- `workspace/OverseerHS123-m31-guided-material-expansion-runway.md`
- `workspace/UIUXHS123-guided-display-material-expansion.md`
- `workspace/OverseerHS124-uiuxhs123-material-expansion-acceptance.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `workspace/complete/milestone-M30/OverseerHS122-hs121-reduced-motion-acceptance.md`
- `workspace/OverseerHS125-m31-long-text-detail-block-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/OverseerHS124-uiuxhs123-material-expansion-acceptance.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the existing material harness and TTL Strip implementation pattern.
2. Add a Lab-local visible prototype for `mat-long-text-detail-block`.
3. Include staged material content for:
   - long paragraph
   - long unbroken token
   - path-like/source-like value
   - warning explanation
   - grouped gap list
   - source-owned placeholder note with owner/layer qualification
4. Keep the parent surface compact; long content should live in detail/reveal body.
5. Ensure narrow viewport containment and no horizontal overflow.
6. Ensure reduced-motion behavior remains compatible if reveal/transition behavior is touched.
7. Update focused renderer verification and create `workspace/DevHS125-long-text-detail-block-prototype.md`.

## Acceptance Criteria

This runway is acceptable if:

- Long Text Detail Block renders visibly in the Lab material harness or an existing Lab-local presentation path
- long paragraph content is contained
- long unbroken token content is contained
- path-like/source-like values are qualified as display/sample material and do not overclaim source authority
- warning explanation and grouped gaps can live in detail
- parent surface remains compact
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
- Long content containment notes:
- Narrow/reduced-motion notes:
- Verification commands and results:
- Compatibility names intentionally left local:
- Parked items:

## Dev Handoff

Expected output:

```txt
workspace/DevHS125-long-text-detail-block-prototype.md
```

The handoff must state whether the material prototype is ready for Overseer acceptance or whether more visual review is needed.

## Advisory Disposition

- Opened: HS125 Long Text Detail Block Dev prototype.
- Deferred: Availability Reason Treatment prototype.
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
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
