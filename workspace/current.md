# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS107 - View-Intent Slot Policy
Current executor: Dev
Current focus: Detail hydration for registered presentation slots.
Expected artifact filename: `workspace/DevHS109-detail-hydration.md`

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.
- HS99 Basis Rail Polish.
- HS102 Details View Inspection.
- HS105 Presentation Slot Registry.
- HS107 View-Intent Slot Policy.

Accepted HS107 result:

- The renderer-local `presentationSlotRegistry` now supports slot-level view-intent policy.
- Slots can declare participation for `summary-first`, `basis`, and `details`.
- The policy supports `available`, `order`, and `emphasis`.
- The existing Briefing Readout Detail path resolves slots with active `state.viewIntent`.
- Rendered rows carry local `data-presentation-slot`, `data-presentation-lane`, and `data-presentation-emphasis` markers.
- Visible labels and behavior remained stable.
- No bridge payload, IPC, preload, service command, target adapter, source-project meaning, dependency, or SmokeFlash/workshop exposure was introduced.

The next executable slice is detail hydration. This should let registered slots carry compact and expanded detail content without changing the bridge contract or turning the default readout dense.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS107-view-intent-slot-policy.md`
- `workspace/OverseerHS108-hs107-view-intent-slot-policy-acceptance.md`
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
- `workspace/OverseerHS108-hs107-view-intent-slot-policy-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current `presentationSlotRegistry`, `slotViewIntentPolicy(...)`, `presentationSlots(...)`, and Readout Detail rendering path.
2. Add a small renderer-local detail hydration shape for registered slots, such as compact value plus optional expanded/detail text or rows.
3. Apply the hydration shape to the existing `briefingReadoutDetail` group without changing visible labels or source meaning.
4. Use the existing Readout Detail surface as the proof path; do not create a new drawer, modal, panel, or navigation surface.
5. Keep Summary, Basis, and Details stable. Detail hydration may make existing Details inspection richer, but should not add a new visible view mode.
6. Add renderer-shell verification for the hydration shape and proof path.
7. Do not implement focus/reveal controller, lazy visual slots, virtualization, row facets, overflow sentinel, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
8. Create `workspace/DevHS109-detail-hydration.md`.

## Acceptance Criteria

This slice is acceptable if:

- registered slots can declare compact and hydrated detail content
- hydration is renderer-local and Lab-owned presentation behavior
- the existing Briefing/readout/detail path proves the hydration shape
- Summary, Basis, and Details remain the only visible view options
- default readout density does not increase
- visible copy remains stable unless a tiny Lab-slim wording adjustment is justified
- no bridge/runtime/source-project contract is introduced
- no target-project meaning, adapter, or adoption claim is introduced
- follow-on features remain parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small verification updates
- small handoff updates
- Lab slim presentation language

Not allowed:

- bridge payload changes
- preload/IPC/service command changes
- source-project semantics
- target-project adapters
- durable key-term promotion for slot ids, lanes, emphasis, or hydration keys
- focus/reveal controller implementation
- lazy-loaded visual slot implementation
- virtualized list helper implementation
- row facets implementation
- overflow sentinel implementation
- reduced-motion gate implementation
- Lab fixture adapter implementation
- new drawer/modal/navigation surface
- production tooling implementation
- renderer security review
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- detail hydration requires changing bridge payloads, IPC, preload, service commands, or fixture contracts
- hydration would force a broad renderer rewrite
- the Details view would need to become diagnostics-first
- Summary/Basis/Details would need to become source-project doctrine or durable shared terms
- hydration requires new visible modes beyond Summary, Basis, and Details
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
- Hydration shape:
- Slot group using hydration:
- Compatibility names intentionally left alone:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS109-detail-hydration.md
```

The handoff must state whether hydration is ready to support a future focus/reveal controller.

## Advisory Disposition

- Accepted: HS107 View-Intent Slot Policy.
- Accepted next: detail hydration.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: focus/reveal controller until hydration is proven.
- Parked: lazy-loaded visual slot until registry/policy/hydration are proven.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, and hydration keys are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
