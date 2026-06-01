# OverseerHS171 - M46 Static Starter Absence And Relay Polish Runway

Status: Open
Role: Aura Lab Overseer
Date: 2026-06-01
Milestone: M46 - Static Starter Absence And Relay Polish

## Request

`workspace/UIUXHS170-static-starter-presentation-pressure-polish.md` completed M45 and recommended one small static-starter Dev packet before wider target relay.

Open that bounded implementation packet without widening into React, target adapters, the current renderer, or tooling surfaces.

## Decision

Accepted:

- M45 is complete.
- `UIUXHS170` is accepted as the polish specification for the next packet.
- M46 opens as a narrow Dev runway.

Executor:

- Dev

Expected handoff:

- `workspace/DevHS171-static-starter-absence-relay-polish.md`

## Read First

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `portable-presentation-starter/README.md`
- `package.json`

Inspect as needed:

- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/index.html`
- `scripts/verify-static-starter.js`

## Task

Implement the bounded static-starter polish from `UIUXHS170`.

Focus only on the static starter reference:

1. Make `NO DATA` and `UNAVAILABLE` visibly and textually distinct.
2. Add or revise reason-first absence examples:
   - generic display absence / no presentable fields
   - source-owned no-observation placeholder
   - source-owned blocked or authority-off placeholder
   - degraded / partial source-owned placeholder
   - unavailable current read
3. Add one example where a source-owned visible label is primary or near-primary while owner/layer qualification remains visible.
4. Add one compact inspection treatment where `Coverage` / `Known fields` moves behind `Readout Detail`.
5. Clarify Lab demo scaffolding vs offered head through either:
   - a no-selector inspection page in the static examples folder, or
   - explicit relay/scaffolding copy in the static starter README and/or page.
6. Update the static starter verifier so the new safety distinctions are checked.

## Files In Scope

- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/index.html`
- optional static inspection page in `portable-presentation-starter/examples/static/`
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`

## Guardrails

- Do not edit target projects.
- Do not create target adapters.
- Do not change the current Lab renderer.
- Do not touch Electron/preload/IPC.
- Do not touch SmokeFlash, Pane Board, Wayfinder, or the Lab service registry.
- Do not create bridge/runtime contracts.
- Do not treat source-owned labels as Lab states.
- Do not normalize source-project meanings.
- Do not create a React scaffold or package.
- Do not add live, private, or network behavior.
- Do not claim browser/screenshot evidence unless it is actually produced and named.

## Acceptance Criteria

The packet is acceptable when:

- `NO DATA` and `UNAVAILABLE` are visibly and textually distinct.
- At least one reason-first absence example exists for generic display absence.
- At least one source-owned absence/unavailability example exists with owner/layer qualification.
- At least one degraded/partial source-owned placeholder example exists without becoming a Lab state.
- At least one source-owned label is shown primary or near-primary while qualified.
- At least one compact example moves `Coverage` / `Known fields` behind `Readout Detail`.
- Lab demo scaffolding vs offered head is clarified through a no-selector inspection page or explicit relay note.
- Existing safety-floor README language remains intact.
- Existing local JSON fallback behavior remains intact.
- Text is still rendered as text.
- No external URL, privileged runtime, target adapter, or bridge/runtime contract is introduced.
- React remains absent.
- Verification passes.

## Required Verification

Run:

- `node --check portable-presentation-starter\examples\static\instrument-readout-panel.js`
- `node --check scripts\verify-static-starter.js`
- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

If browser/screenshot evidence is not produced, say so plainly in the Dev handoff.

## Expected Handoff Contents

`workspace/DevHS171-static-starter-absence-relay-polish.md` should include:

- files changed
- what changed for `NO DATA` vs `UNAVAILABLE`
- source-owned placeholder examples added or revised
- compact inspection treatment added
- scaffolding/offered-head clarification
- compatibility and boundaries intentionally preserved
- verification commands and results
- any remaining risks or recommended next review
