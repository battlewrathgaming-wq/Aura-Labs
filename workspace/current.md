# Current Workspace Packet

Status: Active
Updated: 2026-05-26
Owner: Overseer

## Coordination State

Active milestone: M34 - Instrument Readout Panel Prototype
Last completed milestone: M33 / HS132 - Composed Display Output Acceptance
Current executor: Dev
Current focus: Prototype the accepted Instrument Readout Panel as Lab-local, fixture-fed presentation work.
Expected artifact filename: `workspace/DevHS133-instrument-readout-panel-prototype.md`

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

M33 accepted the first composed display output:

- `workspace/display-outputs/instrument-readout-panel.md`

M34 is now opened as a bounded Dev prototype for that accepted output. This remains Lab-local work only.

## Source Of Intent

Accepted source of intent:

- `workspace/complete/milestone-M31/OverseerHS126-hs125-long-text-detail-block-acceptance.md`
- `workspace/complete/milestone-M31/DevHS127-availability-reason-treatment-prototype.md`
- `workspace/complete/milestone-M31/OverseerHS128-hs127-availability-reason-treatment-acceptance.md`
- `workspace/complete/milestone-M32/OverseerHS129-m32-export-boundary-review-runway.md`
- `workspace/complete/milestone-M32/EngineeringHS129-export-boundary-review.md`
- `workspace/complete/milestone-M32/OverseerHS130-engineeringhs129-export-boundary-acceptance.md`
- `workspace/complete/milestone-M33/UIUXHS131-composed-display-output-advisory.md`
- `workspace/complete/milestone-M33/OverseerHS132-uiuxhs131-composed-output-acceptance.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/OverseerHS133-m34-instrument-readout-panel-prototype-runway.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/roadmap/m33-composed-display-output.md`
- `docs/roadmap/m34-instrument-readout-panel-prototype.md`
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
- `docs/roadmap/m34-instrument-readout-panel-prototype.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

Current executor is Dev.

Ordered Dev runway:

1. Inspect the accepted Instrument Readout Panel output and current renderer/workshop/material harness patterns.
2. Add a Lab-local visible prototype for `output-instrument-readout-panel`.
3. Include staged panel states for `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`.
4. Include at least one source-owned placeholder case with explicit owner/layer qualification.
5. Keep the parent panel compact with state, primary value/absence, age, basis cue, warning/gap marker, and availability reason when needed.
6. Add one `Readout Detail` reveal with basis, availability, freshness, known fields/coverage note, gaps, warnings, fallback basis, source-owned note, and long text examples where relevant.
7. Preserve Summary/Basis/Details behavior where practical; do not add a new view mode.
8. Ensure long text and long unbroken tokens do not overflow.
9. Ensure narrow viewport containment and reduced-motion compatibility.
10. Update focused renderer verification and Electron smoke only as needed.
11. Create `workspace/DevHS133-instrument-readout-panel-prototype.md`.

## Acceptance Criteria

This advisory is acceptable if:

- Instrument Readout Panel renders visibly in a Lab-local prototype path
- all required states are distinct
- availability reason does not collapse no data, unavailable, failed, fallback, partial, or source-owned placeholders
- warning/gap marker remains visible with detail closed
- long text detail content wraps safely
- basis and freshness remain visible in Summary and Basis view intent
- detail reveal is keyboard reachable
- narrow layout has no horizontal overflow
- reduced-motion compatibility remains intact
- normal launch remains free of visible workshop controls
- no export, split, target adapter, source-project meaning, bridge/runtime contract, IPC/preload expansion, or broad renderer refactor is introduced

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

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification if visible copy or terminology-sensitive docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

- M31 accepted Long Text Detail Block in HS126.
- M31 accepted Availability Reason Treatment and closed in HS128.
- M31 verification for HS128: `npm.cmd run verify:renderer-shell`, `npm.cmd run verify:vocabulary`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, and orchestration `npm.cmd run verify:terminology` all passed.
- M32 opened by HS129 as advisory export-boundary review.
- M32 accepted EngineeringHS129 in HS130 and closed.
- M33 opened by HS131 as a composed display output advisory.
- M33 accepted UIUXHS131 in HS132 and closed.
- M34 opened by HS133 as a bounded Dev prototype for the Instrument Readout Panel.

## Dev Handoff

Expected Dev handoff:

```txt
workspace/DevHS133-instrument-readout-panel-prototype.md
```

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Accepted: M32 Export Boundary Review.
- Accepted: M33 Composed Display Output.
- Opened: M34 Instrument Readout Panel Prototype.
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
