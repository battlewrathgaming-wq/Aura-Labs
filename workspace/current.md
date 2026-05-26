# Current Workspace Packet

Status: Active
Updated: 2026-05-26
Owner: Overseer

## Coordination State

Active milestone: M36 - Pane Board V1 Prototype
Last completed milestone: M35 / HS139 - Pane Board Layout Capture Advisory Acceptance
Current executor: Dev
Current focus: Build the first Lab-only Pane Board prototype with stateful-at-rest layout references and a "grab that state" snapshot path.
Expected output: `workspace/DevHS140-pane-board-v1-prototype.md`
Expected DevHS filename: `workspace/DevHS140-pane-board-v1-prototype.md`

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

Human opened a tooling direction: Pane Board Layout Capture. This should help bridge the gap between words and spatial intent by letting the Human sketch rough layout zones and letting agents propose alternate layouts.

M35 accepted Pane Board as a Lab-only spatial conversation tool. It is human-led, not Human-dictated: Human sketches are the strongest signal of intent, but agents may propose alternatives, flag pressure, and suggest simplifications.

M36 should boot-launch the first bounded prototype. The prototype should prove the communication loop, not a broad design platform:

```txt
move panes -> current board rests on disk -> grab that state -> compare variants
```

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
- `docs/roadmap/m36-pane-board-v1-prototype.md`
- `workspace/OverseerHS138-m35-pane-board-layout-capture-runway.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/OverseerHS139-m35-pane-board-advisory-acceptance.md`
- `workspace/OverseerHS140-m36-pane-board-v1-runway.md`
- `workspace/pane-board/README.md`
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
- `docs/roadmap/m36-pane-board-v1-prototype.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/OverseerHS139-m35-pane-board-advisory-acceptance.md`
- `workspace/OverseerHS140-m36-pane-board-v1-runway.md`
- `workspace/pane-board/README.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

Current executor is Dev.

1. Read the required sources, especially the M35 acceptance, Pane Board README, and M36 roadmap.
2. Inspect the existing Electron/main/preload/renderer structure and choose the smallest Lab-only launch path that does not pollute the clean presentation head.
3. Implement a Pane Board V1 surface with `960x640` and `720x640` presets, visible neutral panes, add/duplicate/delete, label/notes editing, lock/unlock, drag/resize, and 8px snap.
4. Persist the latest visible board to `workspace/pane-board/current-board.json` using grid-unit integers for pane `x`, `y`, `w`, and `h`.
5. Add a lightweight append-only event log at `workspace/pane-board/board-events.ndjson` for meaningful changes.
6. Add a "grab that state" path that snapshots the current board into the correct Pane Board folder without overwriting Human sketches; agent proposals must include `basedOn`.
7. Add PNG export if feasible inside the bounded slice; if it is not feasible, document the blocker and leave screenshot export as the only permitted follow-up.

## Acceptance Criteria

M36 is acceptable if:

- the tool can launch without changing the clean presentation head
- panes can be moved and resized
- pane position rests as snapped grid integers
- `workspace/pane-board/current-board.json` updates with the latest visible board state
- snapshots can be created without overwriting Human sketches
- agent proposals must reference `basedOn`
- a "grab that state" path exists as a button, command, or documented prototype action
- screenshots can be exported or the stop condition clearly explains why not
- verification names the exact commands run
- no product renderer, target adapter, bridge/runtime contract, live data, or export work is introduced

## Guardrails And Non-Goals

Standing guardrails:

- Do not treat pending material pages as active tasks without a new current packet.
- Do not export, seed, or attach Lab renderer/head to target projects without split/export readiness review.
- Do not create target adapters from Lab; source projects own adapters.
- Do not change bridge/runtime contracts without a new explicit milestone.
- Do not rename Lab or target-project terms.
- Do not run live/private/network tests.
- Do not treat Pane Board output as product runtime state.
- Do not let agents overwrite Human sketches without explicit authority.
- Do not make Pane Board part of the clean presentation head.
- Do not replace SmokeFlash.
- Do not add code generation or CSS export.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- source-project meaning
- adapter ownership decisions
- export/seeding
- SmokeFlash split
- bridge/runtime contract changes
- live/private/network work
- broad Electron restructuring
- clean presentation head dependency on Pane Board state

## Required Verification

Run:

```cmd
npm.cmd run verify:all
```

Run Electron smoke if renderer/Electron behavior changes:

```cmd
npm.cmd run smoke:electron
```

If Dev adds a Pane Board-specific verifier, run it explicitly and include it in the handoff.

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
- HS138 created the accepted Pane Board advisory and `workspace/pane-board/` scaffold.
- HS139 accepted M35 and opened M36 for a bounded Lab-only Pane Board V1 prototype.

## Dev Handoff

Dev must create:

```txt
workspace/DevHS140-pane-board-v1-prototype.md
```

Include files changed, launch path chosen, whether the clean presentation head was untouched, saved `current-board.json` shape, event log behavior, snapshot behavior, screenshot behavior or blocker, verification commands and results, and remaining risks.

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Accepted: M32 Export Boundary Review.
- Accepted: M33 Composed Display Output.
- Accepted: M34 Instrument Readout Panel Prototype.
- Accepted: HS135 housekeeping and keyword review.
- Accepted: HS136 Instrument Readout Panel code/boundary review.
- Accepted: M35 Pane Board Layout Capture.
- Opened: M36 Pane Board V1 Prototype.
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
