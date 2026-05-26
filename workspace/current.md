# Current Workspace Packet

Status: Active
Updated: 2026-05-26
Owner: Overseer

## Coordination State

Active milestone: M38 - Pane Board Capability Stabilization
Last completed milestone: M37 / HS143 - Pane Board Split Acceptance
Current executor: Dev
Current focus: Stabilize Pane Board as a Lab-only spatial communication tool before adding more expressive tooling.
Expected output: `workspace/DevHS144-pane-board-capability-stabilization.md`
Expected DevHS filename: `workspace/DevHS144-pane-board-capability-stabilization.md`

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

M36 accepted the first bounded prototype. The prototype proves the communication loop, not a broad design platform:

```txt
move panes -> current board rests on disk -> grab that state -> compare variants
```

The biggest follow-on concern is portability. Pane Board should help Lab form reusable presentation elements and layout references that can travel through project-owned adoption, not one-off local screens or hidden product doctrine.

M37 accepted the first in-repo Pane Board split.

Pane Board is now behind a clearer Lab-only tooling boundary:

- main-process Pane Board behavior lives under `src/main/labTooling/paneBoard/`
- normal launch lazy-loads Pane Board only when `AURA_LAB_PANE_BOARD=1`
- the shared preload exposes `auraPaneBoard` only in Pane Board mode
- boundary READMEs and the local prompt firewall point agents away from treating Pane Board as the portable presentation offer

This is not a full separate app/package split. It is an accepted stabilization step so future tooling work has a clearer place to live.

M38 is now open to make Pane Board dependable enough to use as a shared Human-agent visual intent surface.

The focus is the capability loop:

```txt
Human arranges panes -> board rests on disk -> Human says "grab that state" -> agent reads state -> agent writes a separate proposal -> Human compares
```

The qualitative value matters. Pane Board should help code represent visible intent, shape, hierarchy, pressure, and "that feels right" without turning UI direction into long chat-only instructions.

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
- `docs/roadmap/m37-pane-board-split-stabilization.md`
- `workspace/OverseerHS138-m35-pane-board-layout-capture-runway.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/OverseerHS139-m35-pane-board-advisory-acceptance.md`
- `workspace/OverseerHS140-m36-pane-board-v1-runway.md`
- `workspace/DevHS140-pane-board-v1-prototype.md`
- `workspace/OverseerHS141-m36-pane-board-v1-acceptance.md`
- `workspace/OverseerHS142-m37-pane-board-split-runway.md`
- `workspace/DevHS142-pane-board-split-stabilization.md`
- `workspace/OverseerHS143-m37-pane-board-split-acceptance.md`
- `docs/roadmap/m38-pane-board-capability-stabilization.md`
- `workspace/OverseerHS144-m38-pane-board-capability-stabilization-runway.md`
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
- `docs/roadmap/m37-pane-board-split-stabilization.md`
- `workspace/ToolingHS138-pane-board-layout-capture-advisory.md`
- `workspace/OverseerHS139-m35-pane-board-advisory-acceptance.md`
- `workspace/OverseerHS140-m36-pane-board-v1-runway.md`
- `workspace/DevHS140-pane-board-v1-prototype.md`
- `workspace/OverseerHS141-m36-pane-board-v1-acceptance.md`
- `workspace/OverseerHS142-m37-pane-board-split-runway.md`
- `workspace/DevHS142-pane-board-split-stabilization.md`
- `workspace/OverseerHS143-m37-pane-board-split-acceptance.md`
- `docs/roadmap/m38-pane-board-capability-stabilization.md`
- `workspace/OverseerHS144-m38-pane-board-capability-stabilization-runway.md`
- `workspace/pane-board/README.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Dev Runway

Current executor is Dev.

1. Inspect the current Pane Board launch, save/load, proposal, and screenshot paths without changing the product renderer.
2. Define "stable board state" in the Pane Board docs and verifier scope. Include coordinates, labels, notes, lock state, status, review metadata, `basedOn`, and update timestamps where useful.
3. Harden save/load so current board state round-trips predictably and remains grid-aligned.
4. Harden Human sketch versus agent proposal separation so proposals write separately, include `basedOn`, and cannot overwrite Human sketches by default.
5. Keep PNG capture gated by explicit smoke or user/tool action. Do not add background or free-running capture.
6. Update `verify:pane-board` so it checks the stable-state and overwrite-boundary expectations.
7. Create the expected DevHS with files changed, behavior changed, verification run, remaining risks, and any Human feel-test needs.

## Acceptance Criteria

M38 is acceptable if:

- Pane Board launches through its Lab-only command.
- normal presentation launch remains independent of Pane Board state.
- board state rests at `workspace/pane-board/current-board.json`.
- save/load preserves pane coordinates as grid-aligned integers.
- labels, notes, lock state, status, and review fields survive reload.
- agent proposals are separate files under `workspace/pane-board/agent-proposals/`.
- agent proposals include `basedOn`.
- agent proposal paths cannot overwrite Human sketches by default.
- PNG capture is explicitly triggered, named, and inspectable.
- `verify:pane-board` checks the stable-state and proposal-boundary expectations.
- DevHS names any remaining Human feel-test needs.

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
- Do not add Pane Board feature expansion or polish beyond M38 stability needs.
- Do not make screenshots automatic background output.
- Do not treat coordinates as exact UI specs.

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
- Pane Board smoke breakage caused by the split
- Human sketch protection requiring a larger storage model decision
- screenshot capture requiring live/private/desktop-wide capture beyond the Pane Board window

## Required Verification

Run:

```cmd
npm.cmd run verify:pane-board
npm.cmd run verify:all
npm.cmd run smoke:pane-board
```

Run normal Electron smoke if shared Electron launch, preload, normal renderer launch, or presentation renderer files changed:

```cmd
npm.cmd run smoke:electron
```

Then run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```cmd
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
- DevHS140 completed the first Lab-only Pane Board V1 prototype as a separate `AURA_LAB_PANE_BOARD=1` Electron sidecar path with current-board persistence, append-only event log, snapshot/grab-state behavior, PNG export, and an on-screen note surface.
- HS140 verification passed: `npm.cmd run verify:pane-board`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, `npm.cmd run smoke:pane-board`, and orchestration `npm.cmd run verify:terminology`.
- HS140 Pane Board smoke reported `.tmp/pane-board-smoke/pane-board-smoke-result.json` with `status: passed`, `based_on: layout-2026-05-26-pane-board-v1`, generated agent proposal, and generated PNG. The sandboxed run hit GUI capture errors before the approved outside-sandbox rerun passed.
- HS140 Human feel notes: good proof of concept; local launch feels too table/editor-like; future work should split/stabilize into a calmer Etch A Sketch-like Lab-only sketchbench before it gains product gravity.
- HS141 accepted M36 after Overseer reran verification and smoke. Portability is the key follow-on concern: Pane Board-derived elements must remain reusable presentation references, not one-off local screens.
- M37 opened by HS142 to split and stabilize Pane Board as Lab-only tooling before further feature work.
- DevHS142 completed an in-repo Lab-only tooling split for Pane Board. Main-process Pane Board window, IPC, persistence, snapshot, PNG export, and smoke helpers now live under `src/main/labTooling/paneBoard/paneBoard.js`; normal launch lazy-loads that module only when `AURA_LAB_PANE_BOARD=1`.
- HS142 also gated the shared preload's `auraPaneBoard` API behind `AURA_LAB_PANE_BOARD=1`, updated `workspace/pane-board/README.md` with the portable-presentation-offer vs Lab-only-tooling boundary note, and left the clean presentation renderer files unchanged.
- HS142 verification passed after the nested boundary update: `npm.cmd run verify:pane-board`, `npm.cmd run verify:all`, `npm.cmd run smoke:electron`, `npm.cmd run smoke:pane-board`, and orchestration `npm.cmd run verify:terminology`.
- HS142 normal Electron smoke passed in the sandbox on the final run. Earlier pre-nested Electron smoke failed inside the sandbox with `UnknownVizError` and passed when rerun through the approved outside-sandbox GUI smoke path. Pane Board smoke passed and produced `.tmp/pane-board-smoke/pane-board-smoke-result.json` with `status: passed`, `snapshot: workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-7.json`, and `png: workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-6.png`.
- HS143 accepted M37 after Overseer review and verification. The accepted boundary is an in-repo Lab-only tooling split, not a full separate app/package split. Latest Pane Board smoke record references `workspace\pane-board\agent-proposals\layout-2026-05-26-pane-board-v1-smoke-proposal-8.json` and `workspace\pane-board\screenshots\layout-2026-05-26-pane-board-v1-smoke-proposal-pane-board-smoke-7.png`.
- M38 opened by HS144 to stabilize Pane Board's launch, stable-at-rest state, Human sketch protection, agent proposal separation, and gated capture behavior before adding more expressive tooling.

## Dev Handoff

Dev handoff expected:

```txt
workspace/DevHS144-pane-board-capability-stabilization.md
```

## Advisory Disposition

- Accepted: M31 Display Material Repeat Cycle.
- Accepted: M32 Export Boundary Review.
- Accepted: M33 Composed Display Output.
- Accepted: M34 Instrument Readout Panel Prototype.
- Accepted: HS135 housekeeping and keyword review.
- Accepted: HS136 Instrument Readout Panel code/boundary review.
- Accepted: M35 Pane Board Layout Capture.
- Accepted: M36 Pane Board V1 Prototype.
- Accepted: M37 Pane Board Split Stabilization.
- Opened: M38 Pane Board Capability Stabilization.
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
- Pane Board is useful only if it keeps supporting portable display-element formation rather than one-off local layout work.
