# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS102 - Details View Inspection
Current executor: Dev
Current focus: Presentation slot registry scaffold for the Lab renderer.
Expected artifact filename: `workspace/DevHS105-presentation-slot-registry.md`

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.
- HS99 Basis Rail Polish.
- HS102 Details View Inspection.

Accepted HS104 direction:

- The previously opened renderer security review is deferred until closer to split/export readiness.
- Human introduced immediate feature-enrichment scope: presentation slot registry, lazy-loaded visual slot, and virtualized list helper.
- Human also introduced production-pipeline scope: Lab-only draggable layout board and screenshot comparison index.
- Overseer accepted the feature-enrichment sequence but split it into bounded slices.
- The production-pipeline items are parked as support tooling and are not product direction.

The next executable slice is the presentation slot registry scaffold. This is a local renderer/presentation structure, not a bridge contract and not target-project meaning.

## Source Of Intent

Accepted source of intent:

- Human direction to defer renderer security review until closer to split.
- Human immediate scope: presentation slot registry, lazy-loaded visual slot, virtualized list helper.
- Human production-pipeline candidates: Lab-only draggable layout board and screenshot comparison index.
- `workspace/OverseerHS104-immediate-scope-lane-reset.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current renderer structure and identify where Briefing/readout slots are currently represented or implied.
2. Add a small renderer-local presentation slot registry scaffold that can describe Lab display slots without importing source-project meaning.
3. Wire one narrow existing surface to use or reference the registry in a way that proves the shape, preferably around the current Briefing/readout/basis/detail path.
4. Keep compatibility names, fixture ids, smoke selectors, payload fields, IPC channels, service commands, and visible labels stable unless a tiny local rename is required and covered.
5. Do not implement the lazy-loaded visual slot or virtualized list helper in this packet; only leave the registry shape compatible with those later slices.
6. Do not implement the draggable layout board, screenshot comparison index, split, target adapters, or security review in this packet.
7. Update renderer/local verification expectations if the registry changes renderer-shell assumptions.
8. Create `workspace/DevHS105-presentation-slot-registry.md`.

## Acceptance Criteria

This slice is acceptable if:

- a fresh Dev can point to a small presentation slot registry in renderer code
- the registry is Lab-local and presentation-owned, not a bridge/runtime/source-project contract
- at least one current presentation path uses or validates the registry shape
- current visible presentation behavior remains stable unless deliberately and narrowly improved
- no target-project terms, adapters, or source-project doctrine are introduced
- lazy loading and virtualization remain future work
- production pipeline tooling remains parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small verification updates
- small documentation/handoff updates
- local presentation terminology that follows Lab slim language

Not allowed:

- target-project adapters
- source-project meaning changes
- durable bridge/runtime contracts
- preload/IPC authority expansion
- dependency changes
- normal-launch SmokeFlash/workshop exposure
- lazy-loaded visual slot implementation
- virtualized list helper implementation
- draggable layout board implementation
- screenshot comparison index implementation
- renderer security review
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- the slot registry requires changing bridge payloads, IPC channels, preload surface, or service commands
- the registry would force broad renderer refactor beyond the current presentation path
- source-project terms or target-project semantics become necessary to name the slots
- SmokeFlash/workshop state must enter normal launch to make progress
- verification failures point to Electron/runtime installation rather than this slice

## Required Verification

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
```

Run Electron smoke if visible renderer behavior, layout, CSS, or smoke-targeted presentation output changes:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology verification if durable docs or visible copy change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Registry shape:
- Current path using registry:
- Compatibility names intentionally left alone:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS105-presentation-slot-registry.md
```

The handoff must state whether the registry is ready to support a later lazy-loaded visual slot and whether any blocker exists before the virtualized list helper is scoped.

## Advisory Disposition

- Accepted: HS102 Details View Inspection.
- Accepted: HS104 immediate scope lane reset.
- Accepted next: presentation slot registry scaffold.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: lazy-loaded visual slot until registry is proven.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: view-intent slot policy, detail hydration, focus/reveal controller, row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter until HS105 is accepted.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` is local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is proven only on the Briefing family.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
- Production-pipeline tooling may become necessary if Human/agent UI communication remains costly, but it should be opened as a separate Lab-only support lane.
