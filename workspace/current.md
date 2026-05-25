# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M32 - Export Boundary Review
Last completed milestone: M31 / HS128 - Display Material Repeat Cycle Closure
Current executor: Specialist - Engineering / Security advisory
Current focus: Review the current Lab renderer boundary before any future export, seeding, split, or target-project consumption decision.
Expected artifact filename: `workspace/EngineeringHS129-export-boundary-review.md`

## Current State

Aura Lab has closed M31 after accepting two non-TTL material prototypes:

- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`

Both are accepted as Lab-local prototype-backed materials and are indexed in `workspace/display-schema-ledger.md`.

Remaining pending material pages are not active tasks:

- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`

M31 did not introduce target adapters, source-project semantics, export/seeding, composed output, bridge/runtime contracts, IPC/preload changes, or shared doctrine.

M32 is now opened as an advisory export-boundary review. It should clarify what is clean presentation-head candidate material, what is Lab-only SmokeFlash/workshop/material-harness support, and what must split or remain parked before any target-project consumption.

This is not Dev implementation.

## Source Of Intent

Accepted source of intent:

- `workspace/complete/milestone-M31/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `workspace/complete/milestone-M31/DevHS127-availability-reason-treatment-prototype.md`
- `workspace/complete/milestone-M31/OverseerHS128-hs127-availability-reason-treatment-acceptance.md`
- `workspace/OverseerHS129-m32-export-boundary-review-runway.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/m32-export-boundary-review.md`
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
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

No Dev runway. Current executor is Engineering / Security advisory.

Ordered advisory runway:

1. Review HS129, ADR 0001, ADR 0002, the accepted material pages, and current renderer/smoke files.
2. Identify clean presentation-head candidate surfaces versus Lab-only SmokeFlash/workshop/material harness/tooling.
3. Identify export-as-is risks in DOM, CSS, renderer state, smoke paths, query/env gates, naming, or material harness accumulation.
4. Reaffirm that target projects own adapters and source meaning.
5. Recommend the next milestone direction: continue Lab-local material prototyping, open clean-head split, compose display output first, or park export/seeding.
6. Create `workspace/EngineeringHS129-export-boundary-review.md` with findings, risks, stop conditions, and next-decision recommendation.

## Acceptance Criteria

This advisory is acceptable if:

- it is grounded in current disk state
- it distinguishes clean presentation surface from Lab-only tooling
- it preserves ADR 0001 and ADR 0002
- it does not authorize implementation or export
- it gives Human / Overseer a concrete next decision
- it keeps verification/tooling as support, not product direction

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

If the reviewer runs optional local orientation checks, use:

```powershell
npm.cmd run verify:all
```

Do not run Electron smoke unless visual/runtime behavior changes, which this advisory packet should not do.

## Evidence

- M31 accepted Long Text Detail Block in HS126.
- M31 accepted Availability Reason Treatment and closed in HS128.
- M31 verification for HS128: `npm.cmd run verify:renderer-shell`, `npm.cmd run verify:vocabulary`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, and orchestration `npm.cmd run verify:terminology` all passed.
- M32 opened by HS129 as advisory export-boundary review.

## Dev Handoff

No active Dev handoff expected. The expected artifact is advisory: `workspace/EngineeringHS129-export-boundary-review.md`.

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Opened: M32 Export Boundary Review.
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
