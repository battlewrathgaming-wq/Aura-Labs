# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M30 - Presentation Resilience Gate
Last completed milestone: M29 / HS120 - M29 Close Readiness Review
Current executor: Dev
Current focus: Add a bounded reduced-motion gate for the presentation head.
Expected artifact filename: `workspace/DevHS121-reduced-motion-gate.md`

## Current State

Aura Lab has closed M29 and is opening a small product-facing quality milestone.

M29 added the presentation-head behaviors that make a resilience gate worthwhile:

- loading state parity
- Summary / Basis / Details view intent
- basis/details emphasis
- presentation slot registry and view-intent slot policy
- detail hydration
- focus/reveal controller
- lazy visual slot
- row facets
- overflow sentinel

M30 should make this head safer and clearer when motion should be reduced. This is presentation quality work, not export readiness or support-tooling expansion.

## Source Of Intent

Accepted source of intent:

- Human direction to keep hammering the presentation feature set
- `workspace/complete/milestone-M29/OverseerHS120-m29-close-readiness-review.md`
- `docs/roadmap/m30-presentation-resilience-gate.md`
- `docs/roadmap/future-candidate-bank.md` H17 Reduced-Motion Gate
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/OverseerHS121-m30-reduced-motion-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/complete/milestone-M29/OverseerHS120-m29-close-readiness-review.md`
- `docs/roadmap/m30-presentation-resilience-gate.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inventory current motion-like behavior in the renderer: transitions, reveal/detail behavior, lazy visual slot behavior, focus/reveal state, row facets, and overflow sentinel styling.
2. Add a small renderer-local reduced-motion gate that respects browser/user reduced-motion preference where practical.
3. Ensure Summary / Basis / Details remain stable and readable when motion is reduced.
4. Ensure reveal/detail/lazy/overflow behavior remains comprehensible without relying on animation.
5. Add focused verification to the existing renderer-shell or local verification path for the reduced-motion gate.
6. Create `workspace/DevHS121-reduced-motion-gate.md` with files changed, behavior changed, compatibility boundaries, verification results, and parked items.
7. Do not broaden into export, adapters, SmokeFlash split, virtualized lists, fixture adapter, or new view modes.

## Acceptance Criteria

This runway is acceptable if:

- reduced-motion handling exists for relevant presentation behaviors
- the gate does not create new visible product language unless strictly needed
- Summary / Basis / Details remain stable and readable
- reveal/detail/lazy/overflow behavior remains readable without animation
- verification covers the reduced-motion path
- SmokeFlash remains hidden/gated support tooling
- no target-project adapter, source-project meaning, export/seeding, or bridge/runtime contract is introduced
- Dev records the result in the expected DevHS

## Guardrails And Non-Goals

Allowed:

- small renderer/CSS changes
- focused verification updates
- Electron smoke because visible layout/interaction behavior may change
- local implementation names when needed

Not allowed:

- target-project adapters
- source-project semantics
- export/seeding
- SmokeFlash split
- new view intent
- virtualized list helper
- Lab fixture adapter
- broad animation redesign
- product settings surface unless unavoidable and very small
- bridge payload, IPC, preload bridge, service command, or runtime contract changes
- live/private/network work
- destructive or git history operations

## Stop Conditions

Stop and return to Overseer if:

- reduced-motion support requires broad renderer architecture changes
- a new product-visible settings model seems necessary
- the change would alter bridge/runtime contracts
- SmokeFlash/workshop exposure would need to change
- verification needs a broad new visual-smoke matrix

## Required Verification

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification only if visible copy or durable terminology-sensitive docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this:

- Files changed:
- Reduced-motion behavior:
- Verification commands and results:
- Compatibility names intentionally left local:
- Parked items:

## Dev Handoff

Expected output:

```txt
workspace/DevHS121-reduced-motion-gate.md
```

The handoff must state whether the reduced-motion gate is ready for Overseer acceptance or whether more visual review is needed.

## Advisory Disposition

- Opened: M30 Presentation Resilience Gate.
- Deferred: display-material repeat cycle candidate.
- Parked: virtualized list helper until concrete list pressure exists.
- Parked: Lab fixture adapter.
- Deferred: renderer security review until closer to split/export readiness unless Human pulls it forward.
- Deferred: SmokeFlash split until export/seeding/target consumption under ADR 0001.
- Parked: target-project adapters and export/seeding under ADR 0002.

## Residual Risks

- Existing inherited naming tripwires remain.
- M29 capabilities are still proven primarily through the Lab Briefing/readout family.
- `viewIntent`, slot ids, lanes, emphasis, hydration keys, reveal state, lazy slot state, facet names, sentinel names, and any reduced-motion hook names are local renderer implementation details, not durable key terms.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
