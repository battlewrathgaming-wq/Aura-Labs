# Current Workspace Packet

Status: Active
Updated: 2026-05-26
Owner: Overseer

## Coordination State

Active milestone: M35 - Pane Board Layout Capture
Last completed milestone: M34 / HS134 - Instrument Readout Panel Prototype Acceptance
Current executor: Specialist advisory
Current focus: Define the Lab-only Pane Board as human-led, agent-cooperative layout reference tooling.
Expected output: `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
Expected artifact filename: `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`

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

M34 accepted the Lab-local Instrument Readout Panel prototype.

The prototype remains workshop-gated and support-tooling bounded under ADR 0001. It is not export/seeding, not a target adapter, and not a bridge/runtime contract.

Next possible directions:

- UI/UX visual review of the accepted Instrument Readout Panel prototype
- small prototype polish if Human has visual notes
- split/export readiness review if target consumption becomes immediate
- another material/output only if there is a clear product-facing reason
- park Lab until target-project feedback arrives

Human has opened a tooling direction: Pane Board Layout Capture. This should help bridge the gap between words and spatial intent by letting the Human sketch rough layout zones and letting agents propose alternate layouts.

M35 is advisory only. It should define the tool and cooperation contract before any Dev implementation.

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
- `workspace/complete/milestone-M34/DevHS133-instrument-readout-panel-prototype.md`
- `workspace/complete/milestone-M34/OverseerHS134-hs133-instrument-readout-panel-acceptance.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/complete/milestone-M34/OverseerHS133-m34-instrument-readout-panel-prototype-runway.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/roadmap/m33-composed-display-output.md`
- `docs/roadmap/m34-instrument-readout-panel-prototype.md`
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `workspace/OverseerHS138-m35-pane-board-layout-capture-runway.md`
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
- `docs/roadmap/m35-pane-board-layout-capture.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

No Dev runway. Current executor is Specialist advisory.

Ordered advisory runway:

1. Review HS138, M35 roadmap, current Lab boundaries, critical terms, and the protected-term working index.
2. Define Pane Board as Lab-only tooling for advisory spatial layout reference.
3. Define Human sketch, agent proposal, and accepted layout states.
4. Define V1 feature scope: viewport presets, neutral panes, drag/resize, 8px snap, JSON save, PNG capture, reset, load proposal.
5. Define the JSON shape and proposed `workspace/layout-captures/` path model.
6. Define agent write rules: agents may create proposals but may not overwrite Human sketches without explicit authority.
7. Create `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`.

## Acceptance Criteria

This advisory is acceptable if:

- Pane Board is clearly Lab-only tooling
- Human authority and agent cooperation are both explicit
- JSON/PNG outputs are advisory spatial layout references only
- Human sketch, agent proposal, and accepted layout states are separated
- V1 is small enough for a bounded Dev prototype
- target-project/product/runtime boundaries are preserved
- unclear terms are routed through the protected-term advisory model

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
- Do not treat Pane Board output as product runtime state.
- Do not let agents overwrite Human sketches without explicit authority.

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

Do not run Electron smoke; this packet should not change runtime behavior.

## Evidence

- M31 accepted Long Text Detail Block in HS126.
- M31 accepted Availability Reason Treatment and closed in HS128.
- M31 verification for HS128: `npm.cmd run verify:renderer-shell`, `npm.cmd run verify:vocabulary`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, and orchestration `npm.cmd run verify:terminology` all passed.
- M32 opened by HS129 as advisory export-boundary review.
- M32 accepted EngineeringHS129 in HS130 and closed.
- M33 opened by HS131 as a composed display output advisory.
- M33 accepted UIUXHS131 in HS132 and closed.
- M34 opened by HS133 as a bounded Dev prototype for the Instrument Readout Panel.
- DevHS133 completed the Lab-local `output-instrument-readout-panel` prototype with staged `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, `NO DATA`, and source-owned placeholder cases.
- HS133 verification passed: `npm.cmd run verify:renderer-shell`, `npm.cmd run verify:vocabulary`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, and orchestration `npm.cmd run verify:terminology`.
- HS133 Electron smoke reported `.tmp/electron-visual-smoke/visual-smoke-result.json` with `status: passed`, `blocking_failures: []`, output state captures, Summary/Basis/Details output captures, and narrow source-owned placeholder capture.
- M34 accepted HS133 in HS134 and closed.
- HS135 paused for housekeeping and keyword review after M34.
- HS136 completed a bounded code/boundary review of the Instrument Readout Panel prototype.
- HS137 accepted that review; no blockers were found and UI/UX visual polish can proceed if Human opens it.
- M35 opened by HS138 as a Pane Board tooling advisory.

## Dev Handoff

No active Dev handoff expected. The expected artifact is advisory:

```txt
workspace/ToolingHS138-pane-board-layout-capture-advisory.md
```

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Accepted: M32 Export Boundary Review.
- Accepted: M33 Composed Display Output.
- Accepted: M34 Instrument Readout Panel Prototype.
- Accepted: HS135 housekeeping and keyword review.
- Accepted: HS136 Instrument Readout Panel code/boundary review.
- Opened: M35 Pane Board Layout Capture.
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
