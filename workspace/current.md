# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS116 - Row Facets
Current executor: Dev
Current focus: Overflow sentinel for registered presentation rows.
Expected artifact filename: `workspace/DevHS118-overflow-sentinel.md`

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
- HS116 Row Facets.

Accepted HS116 result:

- Existing Briefing Readout Detail slots can declare compact row facets.
- Facets are renderer-local and optional presentation markers.
- Facets render inside existing Readout Detail rows as a slim side rail.
- Facets do not change visible labels, bridge meaning, source-project semantics, dependencies, routes, IPC, preload, or split/export behavior.
- Default rows remain compact and readable.

The next executable slice is overflow sentinel. This should add a small renderer-local signal when a registered row has clipped, long, or constrained detail, without making rows dense and without implementing virtualization.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS116-row-facets.md`
- `workspace/OverseerHS117-hs116-row-facets-acceptance.md`
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
- `workspace/OverseerHS117-hs116-row-facets-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current registered slot rows, hydration, focus/reveal, lazy visual slot, row facets, and Readout Detail rendering path.
2. Add a small renderer-local overflow sentinel shape for registered rows.
3. Apply the sentinel to the existing Briefing Readout Detail path without changing visible labels or source meaning.
4. Keep the sentinel compact and honest; it should indicate constrained or long row content without adding a new surface.
5. Do not implement virtualization, list windowing, or broad overflow diagnostics.
6. Add renderer-shell verification for the sentinel shape and proof path.
7. Run Electron smoke if visible behavior, CSS, or smoke-targeted output changes.
8. Do not implement virtualized list helper, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
9. Create `workspace/DevHS118-overflow-sentinel.md`.

## Acceptance Criteria

This slice is acceptable if:

- registered rows can carry a compact overflow/constrained-content sentinel
- the sentinel is renderer-local and optional presentation behavior
- the existing Briefing/readout/detail path proves the sentinel
- default rows remain compact and readable
- Summary, Basis, and Details remain the only visible view options
- no new drawer/modal/panel/navigation surface is introduced
- no dependency, route, bundle split, bridge/runtime contract, or source-project meaning is introduced
- no target-project adapter or adoption claim is introduced
- virtualization remains parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small CSS for compact overflow markers
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
- durable key-term promotion for sentinel names
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

- overflow sentinel requires source-project semantics or bridge payload changes
- sentinel makes the default row visibly dense or noisy
- sentinel requires a new surface rather than the existing Readout Detail path
- implementation requires virtualization, dependency, route, module/bundle split, IPC, preload, service command, or fixture contract change
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
- Sentinel shape:
- Proof path:
- Density/readability note:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS118-overflow-sentinel.md
```

The handoff must state whether overflow sentinel is ready to support later virtualized list work.

## Advisory Disposition

- Accepted: HS116 Row Facets.
- Accepted next: overflow sentinel.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: virtualized list helper until overflow/list pressure is clearer.
- Parked: reduced-motion gate and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, hydration keys, reveal state, lazy slot state, facet names, and sentinel names are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
