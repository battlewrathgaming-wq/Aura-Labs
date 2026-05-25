# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS109 - Detail Hydration
Current executor: Dev
Current focus: Focus/reveal controller for hydrated presentation slots.
Expected artifact filename: `workspace/DevHS111-focus-reveal-controller.md`

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
- HS109 Detail Hydration.

Accepted HS109 result:

- Registered slots can now expose compact row values and optional hydrated detail rows.
- Hydration is renderer-local and Lab-owned presentation behavior.
- Briefing Readout Detail proves the hydration shape.
- Hydrated detail is kept as local rendered-node metadata.
- Visible labels, compact values, view modes, and default density remain stable.
- No bridge payload, IPC, preload, service command, target adapter, source-project meaning, dependency, or SmokeFlash/workshop exposure was introduced.

The next executable slice is a focus/reveal controller. This should provide a small local way to reveal hydrated slot detail through the existing Readout Detail surface without creating a broad new surface or changing bridge meaning.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS109-detail-hydration.md`
- `workspace/OverseerHS110-hs109-detail-hydration-acceptance.md`
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
- `workspace/OverseerHS110-hs109-detail-hydration-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current presentation slot registry, view-intent policy, hydration metadata, and Readout Detail rendering path.
2. Add a small renderer-local focus/reveal controller for hydrated slot rows.
3. Use the existing Readout Detail surface as the proof path; do not create a new drawer, modal, panel, navigation surface, or view mode.
4. Keep the default readout compact. Hydrated detail should be revealed only when a row is focused, selected, or otherwise explicitly revealed through the existing surface.
5. Preserve Summary, Basis, and Details as the only visible view options.
6. Add renderer-shell verification for the controller shape and proof path.
7. Do not implement lazy visual slots, virtualization, row facets, overflow sentinel, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
8. Create `workspace/DevHS111-focus-reveal-controller.md`.

## Acceptance Criteria

This slice is acceptable if:

- hydrated slot detail can be revealed through a small renderer-local controller
- the controller is Lab-owned presentation behavior only
- the existing Briefing/readout/detail path proves the controller
- default readout density remains compact
- Summary, Basis, and Details remain the only visible view options
- no new drawer/modal/panel/navigation surface is introduced
- no bridge/runtime/source-project contract is introduced
- no target-project meaning, adapter, or adoption claim is introduced
- follow-on features remain parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small verification updates
- small CSS only if needed for existing Readout Detail reveal behavior
- small handoff updates
- Lab slim presentation language

Not allowed:

- bridge payload changes
- preload/IPC/service command changes
- source-project semantics
- target-project adapters
- durable key-term promotion for slot ids, lanes, emphasis, hydration keys, or reveal state
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

- focus/reveal requires changing bridge payloads, IPC, preload, service commands, or fixture contracts
- focus/reveal would force a broad renderer rewrite
- the default readout would become visibly denser
- the Details view would become diagnostics-first
- Summary/Basis/Details would need to become source-project doctrine or durable shared terms
- focus/reveal requires new visible modes beyond Summary, Basis, and Details
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
- Controller shape:
- Proof path:
- Compatibility names intentionally left alone:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS111-focus-reveal-controller.md
```

The handoff must state whether the controller is ready to support a later lazy-loaded visual slot.

## Advisory Disposition

- Accepted: HS109 Detail Hydration.
- Accepted next: focus/reveal controller.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: lazy-loaded visual slot until registry/policy/hydration/reveal are proven.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, hydration keys, and reveal state are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
