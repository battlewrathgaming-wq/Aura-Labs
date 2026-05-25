# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS112 - Focus/Reveal Controller Correction
Current executor: Dev
Current focus: Lazy-loaded visual slot proof for the Lab renderer.
Expected artifact filename: `workspace/DevHS114-lazy-loaded-visual-slot.md`

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

Accepted HS112 result:

- Hydrated Readout Detail rows can reveal local detail through the existing row.
- First mouse click on a closed hydrated row opens and leaves it open.
- Focus reveal still works.
- `Enter` / `Space` keyboard toggle still works.
- Default readout density remains compact.
- No new drawer, modal, panel, navigation surface, view mode, bridge payload, IPC channel, preload bridge, service command, source-project meaning, target adapter, dependency, or SmokeFlash/workshop exposure was introduced.

The next executable slice is a lazy-loaded visual slot proof. This should add one deferred visual treatment to one registered slot path without changing bridge meaning or turning the renderer into a bundle-splitting/export task.

## Source Of Intent

Accepted source of intent:

- Human direction to hammer in the presentation feature set.
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS112-focus-reveal-controller-correction.md`
- `workspace/OverseerHS113-hs112-focus-reveal-acceptance.md`
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
- `workspace/OverseerHS113-hs112-focus-reveal-acceptance.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the current presentation slot registry, view-intent policy, hydration metadata, focus/reveal controller, and Readout Detail rendering path.
2. Add a small renderer-local lazy visual slot mechanism for one existing registered slot.
3. Use the existing Briefing Readout Detail path as the proof path; do not create a new drawer, modal, panel, navigation surface, view mode, route, dependency, or build split.
4. Keep default rendering compact and usable before the visual slot loads.
5. Ensure the lazy slot loads only as local presentation enhancement and does not change bridge payload, source meaning, or required content.
6. Add renderer-shell verification for the lazy slot mechanism and proof path.
7. Run Electron smoke if visible behavior, CSS, or smoke-targeted output changes.
8. Do not implement virtualization, row facets, overflow sentinel, reduced-motion gate, fixture adapter, draggable layout board, screenshot comparison index, split, adapters, or security review.
9. Create `workspace/DevHS114-lazy-loaded-visual-slot.md`.

## Acceptance Criteria

This slice is acceptable if:

- one registered slot can declare or use a lazy-loaded visual treatment
- the visual treatment is renderer-local and optional presentation enhancement
- the existing Briefing/readout/detail path proves the lazy slot
- the default row remains useful before lazy enhancement loads
- Summary, Basis, and Details remain the only visible view options
- no new drawer/modal/panel/navigation surface is introduced
- no dependency, route, bundle split, bridge/runtime contract, or source-project meaning is introduced
- no target-project adapter or adoption claim is introduced
- follow-on features remain parked
- verification commands and results are recorded in the DevHS

## Guardrails And Non-Goals

Allowed:

- renderer-local code changes
- small CSS for the existing Readout Detail slot enhancement
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
- durable key-term promotion for lazy slot state
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

- lazy loading requires a dependency, route, module/bundle split, IPC, preload, service command, or fixture contract change
- the default readout becomes dependent on lazy-loaded content
- the lazy slot requires source-project semantics
- the proof requires a new surface rather than the existing Readout Detail path
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
- Lazy slot shape:
- Proof path:
- Fallback/default behavior:
- Commands run:
- Results:
- Remaining risks:

## Dev Handoff

Expected output:

```txt
workspace/DevHS114-lazy-loaded-visual-slot.md
```

The handoff must state whether the lazy slot proof is ready to support later row facets or overflow sentinel work.

## Advisory Disposition

- Accepted: HS112 Focus/Reveal Controller Correction.
- Accepted next: lazy-loaded visual slot.
- Deferred: renderer security review until closer to split/export readiness.
- Parked: virtualized list helper until registry/list pressure is clearer.
- Parked: row facets, overflow sentinel, reduced-motion gate, and Lab fixture adapter.
- Parked: Lab-only draggable layout board and screenshot comparison index as support tooling.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` remains local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is still proven only on the Briefing family.
- Slot ids, lanes, emphasis, hydration keys, reveal state, and lazy slot state are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
