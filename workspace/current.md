# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS105 - Presentation Slot Registry
Current executor: Dev
Current focus: View-intent slot policy for the Lab renderer.
Expected artifact filename: `workspace/DevHS107-view-intent-slot-policy.md`

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.
- HS99 Basis Rail Polish.
- HS102 Details View Inspection.
- HS105 Presentation Slot Registry.

Accepted HS105 result:

- A renderer-local `presentationSlotRegistry` now exists in `src/renderer/app.js`.
- The first registered group is `briefingReadoutDetail`.
- Existing Briefing Readout Detail rows are rendered through the registry.
- Rows now receive local `data-presentation-slot` and `data-presentation-lane` markers.
- Visible labels and behavior remained stable.
- No bridge payload, IPC, preload, service command, target adapter, source-project meaning, dependency, or SmokeFlash/workshop exposure was introduced.

Accepted HS105 follow-on direction:

- The next feature-enrichment candidates are view-intent slot policy, detail hydration, focus/reveal controller, row facets, virtualized list helper, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- These are staged candidates only.
- The next bounded slice is view-intent slot policy.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS104-immediate-scope-lane-reset.md`
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS105-presentation-slot-registry.md`
- `workspace/OverseerHS106-hs105-presentation-slot-registry-acceptance.md`
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
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/OverseerHS106-hs105-presentation-slot-registry-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current `viewIntent` handling and `presentationSlotRegistry` in `src/renderer/app.js`.
2. Define a small renderer-local policy shape for how registered slots participate in `summary-first`, `basis`, and `details`.
3. Apply the policy to the existing `briefingReadoutDetail` slot group without changing visible labels or source meaning.
4. Keep the same surface identity across views; the policy should adjust emphasis/availability/order only where the current UI already supports it.
5. Add renderer-shell verification for the policy shape and the existing view-intent axis.
6. Do not implement detail hydration, focus/reveal controller, lazy visual slots, virtualization, row facets, overflow sentinel, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
7. Create `workspace/DevHS107-view-intent-slot-policy.md`.

## Acceptance Criteria

This slice is acceptable if:

- registered slots can declare a small view-intent policy
- the policy is renderer-local and Lab-owned presentation behavior
- Summary, Basis, and Details remain the only visible view options
- the current Briefing/readout/detail path proves the policy shape
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
- durable key-term promotion for slot ids or lanes
- detail hydration implementation
- focus/reveal controller implementation
- lazy-loaded visual slot implementation
- virtualized list helper implementation
- row facets implementation
- overflow sentinel implementation
- reduced-motion gate implementation
- Lab fixture adapter implementation
- production tooling implementation
- renderer security review
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- the view-intent policy requires changing bridge payloads, IPC, preload, service commands, or fixture contracts
- the policy would force a broad renderer rewrite
- Summary/Basis/Details would need to become source-project doctrine or durable shared terms
- the policy requires new visible modes beyond Summary, Basis, and Details
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
- Policy shape:
- Slot group using policy:
- Compatibility names intentionally left alone:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS107-view-intent-slot-policy.md
```

The handoff must state whether the policy is ready to support detail hydration and a future focus/reveal controller.

## Advisory Disposition

- Accepted: HS105 Presentation Slot Registry.
- Accepted next: view-intent slot policy.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: detail hydration until policy is proven.
- Parked: focus/reveal controller until policy is proven.
- Parked: lazy-loaded visual slot until registry/policy are proven.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids and lanes are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
