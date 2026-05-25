# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M28 - Authority Window TTL Strip Prototype
Current executor: Dev
Current focus: implement H02 Loading State Parity as the first bounded presentation-head improvement
Expected artifact filename: `workspace/DevHS93-loading-state-parity.md`

## Current State

Aura Lab has accepted and closed M28.

Accepted result:

- `mat-authority-window-ttl-strip` now has a Lab-local visible material prototype.
- Supported staged states: `idle`, `active-window`, `captured`, `timeout`, `cooldown`, `blocked`, `manual-path`.
- The strip uses a compact state marker, stable TTL/cooldown chip, short reason line, structured detail reveal, and narrow layout handling.
- Normal launch remains clean from visible workshop controls.
- No target-project adapter, target-project data, bridge/runtime field, IPC channel, or export/seeding work was introduced.

Accepted controls still stand:

- ADR 0001: SmokeFlash split is a promotion gate, not an immediate block for Lab-local material work.
- ADR 0002: target projects own their adapters.
- SmokeFlash remains hidden/gated Lab workshop tooling.
- Normal launch must not depend on SmokeFlash/workshop state.
- SmokeFlash fields must not enter a slim envelope, bridge contract, product navigation, or shared renderer data model.

## Latest Accepted Artifacts

- `workspace/DevHS91-authority-window-ttl-strip-prototype.md`
- `workspace/OverseerHS92-m28-acceptance.md`

## Verification Notes

M28 acceptance verification rerun by Overseer:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

All passed.

Shared terminology check rerun from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Passed 53/53 checks with 24 existing advisory warnings.

Electron smoke result:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- all seven staged material states checked
- narrow cooldown material screenshot captured
- no Electron process remained afterward

## Residual Risks

- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
- TTL/cooldown values are staged presentation values, not runtime behavior.
- Material state names are Lab staging labels, not bridge/runtime contract values.
- No combined output reference is accepted yet; M28 accepted an individual material prototype.

## M29 Purpose

M29 opens the Presentation Head Improvement Rail.

The first runway is H02 Loading State Parity. Dev should make loading a first-class presentation state and update the renderer/test model enough that loading is directly observable.

This is a presentation-head improvement, not a renderer split or target-project integration.

## Source Of Intent

Accepted source of intent:

- Human direction to focus this phase on presentation improvements.
- Human direction to review split/readiness only when the presentation head is good enough.
- Human confirmation that the H-lane Presentation Head Milestones are the active line.
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/OverseerHS93-m29-loading-state-parity-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overseer.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `src/main/main.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`

## Ordered Runway

1. Inspect the existing presentation state model, fixture/test modes, renderer state copy, and visual smoke capture path.
2. Add loading as a first-class presentation state for the existing presentation head.
3. Keep the default populated/empty/stale/failed/partial/long-text behavior stable.
4. Make loading visually intentional: calm pending state, clear basis/readout age language, no false unavailable or failed implication, no target-project terms.
5. Add or update fixture/test mode support so loading can be selected and checked like the other states.
6. Update renderer shell and smoke checks so loading is part of the active test model.
7. Create the expected DevHS handoff with files changed, loading-state behavior, verification, smoke result notes, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- loading is selectable or reachable as a first-class presentation state
- loading is visually distinct from empty, failed, stale, and partial
- loading copy uses Lab-owned slim language and does not overstate source availability
- loading keeps the normal presentation head stable
- visual smoke or renderer verification can observe loading directly
- no target-project adapter, source-project meaning, export/seeding, or renderer split is introduced
- SmokeFlash remains hidden/gated support tooling
- verification passes

Redirect or stop if:

- loading requires a durable bridge/runtime contract decision
- loading requires target-project data or target-owned terms
- the change turns into `viewIntent`, confidence view, source-first view, or renderer split work
- the test update becomes a broad smoke matrix rather than loading coverage
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- add loading fixture/test mode
- add loading renderer copy and visual treatment
- add targeted smoke/verification coverage
- update local vocabulary checks for accepted visible copy
- make small style changes needed for loading clarity

Not allowed:

- target-project adapters
- Atlas/Sense implementation
- export/seeding
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contract
- `viewIntent` axis implementation
- confidence/source/triage/delta view implementation
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- loading cannot be represented without changing source-owned meaning
- a bridge/runtime contract decision is required
- normal launch cannot stay clean
- SmokeFlash/workshop state becomes product navigation
- verification requires live/private/network data
- Electron runtime/install issues become the main work

## Required Verification

Always run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke because visible state behavior and smoke coverage are expected to change:

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
- Loading state behavior:
- Normal launch impact:
- Smoke/test model impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Handoff

Expected output:

```txt
workspace/DevHS93-loading-state-parity.md
```

The handoff must state whether loading is ready for Overseer acceptance and whether the next M29 slice should remain H02 cleanup, move to H03 `viewIntent`, or pause for UI/UX review.

## Parked Items

- SmokeFlash split before export/seeding.
- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Target-project adapters.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Connected-system/radius visualization until source-owned relation meaning exists.
