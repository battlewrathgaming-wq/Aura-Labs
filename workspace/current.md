# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M28 - Authority Window TTL Strip Prototype
Last completed milestone: M27 - SmokeFlash Boundary Review And Conditional Harness
Current executor: Dev
Current focus: build the first Lab-local visible material prototype for `mat-authority-window-ttl-strip`
Expected artifact filename: `workspace/DevHS91-authority-window-ttl-strip-prototype.md`

## Current State

Aura Lab has accepted and closed M27.

Accepted controls:

- ADR 0001: SmokeFlash split is a promotion gate, not an immediate block for Lab-local material work.
- ADR 0002: target projects own their adapters.
- SmokeFlash remains hidden/gated Lab workshop tooling.
- Normal launch must not depend on SmokeFlash/workshop state.
- SmokeFlash fields must not enter a slim envelope, bridge contract, product navigation, or shared renderer data model.

M28 opens feature delivery for the first accepted display material:

```txt
mat-authority-window-ttl-strip
```

This is a Lab-local prototype to mature the presentation surface. It is not export/seeding, not target adoption, and not a target-project adapter.

## Purpose

Turn the accepted material page into a polished Lab-local presentation prototype that demonstrates:

- bounded active interval / TTL display
- visible state and availability
- stable compact strip layout
- detail reveal for basis, warnings, manual path, and reason
- narrow layout behavior
- non-color-only state communication

The prototype may use the hardened SmokeFlash workshop path to stage and review states, but the offered normal presentation launch must remain clean.

## Source Of Intent

Accepted source of intent:

- Human direction to move forward with ADR controls in place.
- Human direction that feature delivery should be pilot-driven.
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`
- `workspace/DevHS89-smokeflash-boundary-review.md`
- `workspace/OverseerHS90-m27-acceptance.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `src/main/main.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`

## Ordered Runway

1. Inspect the existing M27 material harness for `mat-authority-window-ttl-strip`.
2. Refine it from a static harness into the smallest polished Lab-local material prototype.
3. Support these staged states: idle, active-window, captured, timeout, cooldown, blocked, manual-path.
4. Ensure the strip has stable layout, non-color-only state, visible TTL/cooldown where relevant, and a useful detail reveal.
5. Add targeted smoke observation for material states if small; at minimum, verify default state plus direct renderer coverage for all staged states.
6. Keep normal launch clean: no visible workshop controls, no product navigation through SmokeFlash, no bridge/runtime contract changes.
7. Update verification guards only as needed.
8. Create the expected DevHS handoff with files changed, states supported, verification, screenshots/result notes, and residual risks.

## Implementation Bounds

Allowed:

- refine existing workshop-only material harness UI
- add small renderer helpers for state rendering
- add lightweight verification for supported material states
- add or refine CSS for the TTL strip
- use static staged Lab material

Not allowed:

- target-project data
- live/private/network access
- Atlas/Sense adapters
- export/seeding work
- durable bridge/runtime contract
- broad SmokeFlash workbench
- broad visual-smoke matrix
- new dependencies
- product navigation through SmokeFlash
- shared renderer data model for material harness state

## Acceptance Criteria

M28 is acceptable if:

- `mat-authority-window-ttl-strip` is visibly improved beyond the M27 static harness
- all required staged states render intentionally
- active/cooldown timing is visible and stable
- blocked/manual/timeout states communicate reason without looking like hidden background capture
- detail reveal works and does not render as a dead control
- narrow layout remains readable
- normal launch remains free of visible workshop controls
- no target-project meaning or adapter work is introduced
- verification passes

Reject or redirect if:

- SmokeFlash starts becoming product navigation
- normal launch depends on workshop state
- material state becomes a bridge/runtime contract
- the work turns into a renderer split/export task
- target-project data or target-owned terms are needed
- visual smoke expands beyond the small material need

## Guardrails

- The presentation layer is the thing Lab offers.
- SmokeFlash is workshop tooling.
- This packet may use SmokeFlash because ADR 0001 permits Lab-local material work before split.
- Split SmokeFlash before export/seeding.
- Target projects own adapters under ADR 0002.
- Use slim Lab language for Lab-owned defaults.
- Preserve source-owned terms only when referenced as source-owned examples.

## Stop Conditions

Stop and return to Human / Overseer if:

- the prototype requires target-project meaning decisions
- the prototype needs target-project data
- normal launch cannot stay clean
- material harness state needs to become shared renderer data
- a renderer split becomes required before the prototype can proceed
- Electron runtime/install problems become the main work
- verification requires live/private/network data

## Required Verification

Always run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke because UI and smoke/workshop behavior are expected to change:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology check if visible or documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Material states supported:
- Normal launch impact:
- Workshop launch impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Handoff

Expected output:

```txt
workspace/DevHS91-authority-window-ttl-strip-prototype.md
```

The handoff must state whether the prototype is ready for Overseer acceptance and whether a combined output reference should be added later.

## Parked Items

- SmokeFlash split before export/seeding.
- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Target-project adapters.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Connected-system/radius visualization until source-owned relation meaning exists.
