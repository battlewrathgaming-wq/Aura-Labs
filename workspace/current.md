# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS114 - Lazy-Loaded Visual Slot
Current executor: Dev
Current focus: Row facets for registered presentation rows.
Expected artifact filename: `workspace/DevHS116-row-facets.md`

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
- HS112 Focus/Reveal Controller Correction.
- HS114 Lazy-Loaded Visual Slot.

Accepted HS114 result:

- One registered slot can declare an optional lazy visual treatment.
- The existing Briefing Readout Detail `band-marker` slot proves the `marker-signal` lazy treatment.
- The default row remains useful before enhancement loads.
- Lazy visual state is renderer-local data/CSS only.
- No dependency, route, module/bundle split, bridge payload, IPC channel, preload bridge, service command, target adapter, source-project meaning, new surface, or SmokeFlash/workshop exposure was introduced.

The next executable slice is row facets. This should add small renderer-local row-side markers for existing registered rows so state, basis, gap, warning, or action cues can be expressed consistently without making the row dense.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS114-lazy-loaded-visual-slot.md`
- `workspace/OverseerHS115-hs114-lazy-loaded-visual-slot-acceptance.md`
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
- `workspace/OverseerHS115-hs114-lazy-loaded-visual-slot-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current presentation slot registry, view-intent policy, hydration, focus/reveal, lazy visual slot, and Readout Detail rendering path.
2. Add a small renderer-local row facet shape for registered slots.
3. Apply facets to one or more existing Briefing Readout Detail slots without changing visible labels or source meaning.
4. Keep facets compact and secondary; they should support scanning without making the default row dense.
5. Use the existing Readout Detail surface as the proof path; do not create a new drawer, modal, panel, navigation surface, view mode, dependency, route, or build split.
6. Add renderer-shell verification for the facet shape and proof path.
7. Run Electron smoke if visible behavior, CSS, or smoke-targeted output changes.
8. Do not implement overflow sentinel, virtualization, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
9. Create `workspace/DevHS116-row-facets.md`.

## Acceptance Criteria

This slice is acceptable if:

- registered slots can declare compact row facets
- facets are renderer-local and optional presentation markers
- the existing Briefing/readout/detail path proves facets
- default rows remain compact and readable
- Summary, Basis, and Details remain the only visible view options
- no new drawer/modal/panel/navigation surface is introduced
- no dependency, route, bundle split, bridge/runtime contract, or source-project meaning is introduced
- no target-project adapter or adoption claim is introduced
- overflow sentinel and virtualization remain parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small CSS for compact row facets
- small verification updates
- small handoff updates
- Lab slim presentation language

Not allowed:

- bridge payload changes
- preload/IPC/service command changes
- source-project semantics
- target-project adapters
- new dependency or build tool change
- actual renderer bundle splitting
- durable key-term promotion for facet names
- overflow sentinel implementation
- virtualized list helper implementation
- reduced-motion gate implementation
- Lab fixture adapter implementation
- new drawer/modal/navigation surface
- production tooling implementation
- renderer security review
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- row facets require source-project semantics or bridge payload changes
- facets make the default row visibly dense or noisy
- facets require a new surface rather than the existing Readout Detail path
- implementation requires a dependency, route, module/bundle split, IPC, preload, service command, or fixture contract change
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
- Facet shape:
- Proof path:
- Density/readability note:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS116-row-facets.md
```

The handoff must state whether row facets are ready to support later overflow sentinel or virtualized list work.

## Advisory Disposition

- Accepted: HS114 Lazy-Loaded Visual Slot.
- Accepted next: row facets.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: overflow sentinel until row facets are proven.
- Parked: virtualized list helper until row/facet/list pressure is clearer.
- Parked: reduced-motion gate and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, hydration keys, reveal state, lazy slot state, and facet names are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
