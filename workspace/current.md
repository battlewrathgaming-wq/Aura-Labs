# Current Workspace Packet

Status: Active
Updated: 2026-05-26
Owner: Overseer

## Coordination State

Active milestone: M33 - Composed Display Output
Last completed milestone: M32 / HS130 - Export Boundary Review Acceptance
Current executor: UI/UX advisory
Current focus: Define the first composed Lab-local display output from accepted materials before any implementation, split, export, or target-project consumption work.
Expected artifact filename: `workspace/UIUXHS131-composed-display-output-advisory.md`

## Current State

Aura Lab has closed M31 after accepting two non-TTL material prototypes:

- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`

Both are accepted as Lab-local prototype-backed materials and are indexed in `workspace/display-schema-ledger.md`.

Remaining pending material pages are not active tasks:

- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`

M31 did not introduce target adapters, source-project semantics, export/seeding, composed output, bridge/runtime contracts, IPC/preload changes, or shared doctrine.

M32 accepted the Engineering/Security export-boundary review. The accepted recommendation is to compose a Lab-local display output before split/export work.

M33 is now opened as a UI/UX advisory packet. It should define one composed display output using accepted materials. This is not Dev implementation.

## Source Of Intent

Accepted source of intent:

- `workspace/complete/milestone-M31/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `workspace/complete/milestone-M31/DevHS127-availability-reason-treatment-prototype.md`
- `workspace/complete/milestone-M31/OverseerHS128-hs127-availability-reason-treatment-acceptance.md`
- `workspace/complete/milestone-M32/OverseerHS129-m32-export-boundary-review-runway.md`
- `workspace/complete/milestone-M32/EngineeringHS129-export-boundary-review.md`
- `workspace/complete/milestone-M32/OverseerHS130-engineeringhs129-export-boundary-acceptance.md`
- `workspace/OverseerHS131-m33-composed-display-output-runway.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/roadmap/m33-composed-display-output.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/roadmap/m33-composed-display-output.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

No Dev runway. Current executor is UI/UX advisory.

Ordered advisory runway:

1. Review HS131, M32 acceptance, the accepted material pages, and the display ledger.
2. Select accepted materials that naturally compose into one Lab-local output.
3. Define one concrete composed output name, purpose, slots, states, view intent, detail path, and narrow behavior.
4. Explain source/freshness/basis/availability language rules using Lab slim vocabulary.
5. Identify what stays Lab-local and what must not become target doctrine.
6. Create `workspace/UIUXHS131-composed-display-output-advisory.md` with acceptance criteria and later Dev verification expectations.

## Acceptance Criteria

This advisory is acceptable if:

- it composes accepted materials rather than inventing an unrelated surface
- it gives one concrete output reference, not a broad menu
- it is clear enough for a later Dev prototype packet
- it keeps source-project meaning and adapters out of Lab
- it keeps SmokeFlash/workshop tooling as support, not product
- it identifies what should be parked

## Guardrails And Non-Goals

Standing guardrails:

- Do not execute Dev work from this packet.
- Do not implement code.
- Do not treat pending material pages as active tasks without a new current packet.
- Do not export, seed, or attach Lab renderer/head to target projects without split/export readiness review.
- Do not create target adapters from Lab; source projects own adapters.
- Do not change bridge/runtime contracts without a new explicit milestone.
- Do not rename Lab or target-project terms.
- Do not run live/private/network tests.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- source-project meaning
- adapter ownership decisions
- export/seeding
- SmokeFlash split
- bridge/runtime contract changes
- live/private/network work

## Required Verification

No verification is required for the advisory artifact.

Do not run Electron smoke; this packet should not change renderer behavior.

## Evidence

- M31 accepted Long Text Detail Block in HS126.
- M31 accepted Availability Reason Treatment and closed in HS128.
- M31 verification for HS128: `npm.cmd run verify:renderer-shell`, `npm.cmd run verify:vocabulary`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, and orchestration `npm.cmd run verify:terminology` all passed.
- M32 opened by HS129 as advisory export-boundary review.
- M32 accepted EngineeringHS129 in HS130 and closed.
- M33 opened by HS131 as a composed display output advisory.

## Dev Handoff

No active Dev handoff expected. The expected artifact is advisory: `workspace/UIUXHS131-composed-display-output-advisory.md`.

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Accepted: M32 Export Boundary Review.
- Opened: M33 Composed Display Output.
- Accepted: Long Text Detail Block prototype.
- Accepted: Availability Reason Treatment prototype.
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
- Absence terms such as blocked, degraded, and no scan may be source-owned by context and must remain qualified.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
