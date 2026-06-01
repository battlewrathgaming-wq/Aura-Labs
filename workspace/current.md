# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M46 - Static Starter Absence And Relay Polish
Last completed milestone: M45 / HS171 - Static Starter Presentation Pressure Polish Acceptance
Current executor: Dev
Current focus: Implement the bounded static-starter polish recommended by UIUXHS170 before wider target relay.
Expected output: `workspace/DevHS171-static-starter-absence-relay-polish.md`
Expected DevHS filename: `workspace/DevHS171-static-starter-absence-relay-polish.md`

## Current State

M46 is open as a narrow Dev implementation runway.

M45 is accepted and closed. `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md` recommends one small static-starter polish packet before wider target relay.

M44, M43, and M42 remain accepted and closed.

Accepted output:

- `portable-presentation-starter/`
- `scripts/verify-static-starter.js`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `workspace/DevHS168-static-starter-safety-floor-corrections.md`
- `workspace/OverseerHS169-m44-static-starter-safety-floor-acceptance.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `workspace/OverseerHS170-m45-static-starter-presentation-pressure-polish-runway.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `workspace/OverseerHS171-m46-static-starter-absence-relay-polish-runway.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`

The static starter reference is a Lab-local, framework-neutral proof:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It stays separate from the current renderer and excludes React, target adapters, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, and the Lab service registry.

Manual visual review is accepted in HS165 from Human-opened page inspection and screenshots.

No automated browser, screenshot, or Electron smoke visual acceptance is claimed. Dev reported blocked local inspection and the Human observed blank local window behavior during review; treat that as an environment/tooling caveat, not a blocker for the manual static visual baseline.

The M43 handoff standard defines the lightweight polish floor and safety floor Lab should use before deciding what head package is fit to offer.

SecEngHS167 reviewed the static starter and returned `ready after small docs/verifier fix`. M44 applied and accepted that fix.

Sense relay pressure extract is accepted as Lab-facing presentation pressure, not Sense adoption or implementation authority.

M45 accepted UI/UX guidance that the static starter should distinguish absence/unavailable/source-owned label handling more clearly before wider target relay.

After M46 closes, recommended next options:

- target relay/adoption review using the M43 handoff standard
- optional React example scaffold after static reference acceptance and visual review
- further static starter visual polish only if review identifies concrete pressure
- park Lab until Sense/Atlas adapter work produces useful feedback

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-05-31: proceed to the stable proof point after M41.
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`
- `workspace/OverseerHS163-m42-static-starter-reference-runway.md`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `workspace/DevHS168-static-starter-safety-floor-corrections.md`
- `workspace/OverseerHS169-m44-static-starter-safety-floor-acceptance.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `workspace/OverseerHS170-m45-static-starter-presentation-pressure-polish-runway.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `workspace/OverseerHS171-m46-static-starter-absence-relay-polish-runway.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `workspace/OverseerHS171-m46-static-starter-absence-relay-polish-runway.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `portable-presentation-starter/README.md`
- `package.json`

## Ordered Runway

Dev should create:

```txt
workspace/DevHS171-static-starter-absence-relay-polish.md
```

Use `workspace/OverseerHS171-m46-static-starter-absence-relay-polish-runway.md` as the detailed task outline.

Implement only the bounded static-starter polish:

- distinguish `NO DATA` from `UNAVAILABLE`
- add reason-first absence examples
- add qualified source-owned placeholder examples
- show one source-owned label primary or near-primary while qualified
- add one compact inspection treatment where `Coverage` / `Known fields` moves behind `Readout Detail`
- clarify Lab demo scaffolding vs offered head
- update static starter verification

## Acceptance Criteria

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

## Guardrails And Non-Goals

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

## Stop Conditions

Stop and return to Human / Overseer direction if the task requires:

- implementation outside the static starter folder or verifier/README scope
- React package creation
- renderer extraction/export
- SmokeFlash split execution
- security review execution
- target-project files or adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- changing accepted material/output semantics
- live/private/network work

## Required Verification

Run:

- `node --check portable-presentation-starter\examples\static\instrument-readout-panel.js`
- `node --check scripts\verify-static-starter.js`
- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

## Evidence

- HS163 opened M42.
- DevHS163 completed the static starter reference.
- Overseer tightened `scripts/verify-static-starter.js`.
- HS164 accepted M42.
- HS165 accepted Human manual visual review of the static starter.
- HS166 accepted M43 presentation head handoff standard.
- HS167 completed expert safety-floor review with verdict: ready after small docs/verifier fix.
- HS168 opened M44 for the small correction packet.
- DevHS168 completed the static starter safety-floor corrections.
- HS169 accepted M44.
- HS168 Sense relay pressure extract landed as Lab-facing presentation pressure.
- HS170 opened M45 for UI/UX polish specification.
- UIUXHS170 completed M45 and recommended one bounded Dev packet.
- HS171 accepted M45 and opened M46.
- Verification passed during M42 acceptance: `npm.cmd run verify:static-starter`, `npm.cmd run verify:all`, and orchestration `npm.cmd run verify:terminology`.
- Housekeeping verification after HS165 passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.
- M43 documentation verification passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.
- M44 acceptance verification passed: `node --check scripts\verify-static-starter.js`, `npm.cmd run verify:static-starter`, `npm.cmd run verify:all`, and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.

## Handoff

Expected Dev handoff: `workspace/DevHS171-static-starter-absence-relay-polish.md`.

## Advisory Disposition

- Accepted and closed: M41 Portable Presentation Starter Kit Contents.
- Accepted: Sense starter-kit caution feedback.
- Accepted and closed: M42 Static Portable Presentation Starter Reference.
- Accepted: manual/static visual review.
- Accepted and closed: M43 Presentation Head Handoff Standard.
- Accepted advisory input: SecEngHS167 safety-floor review.
- Accepted and closed: M44 Static Starter Safety Floor Corrections.
- Accepted advisory input: HS168 Sense relay presentation pressure extract.
- Accepted and closed: M45 Static Starter Presentation Pressure Polish.
- Accepted into M46: UIUXHS170 recommendation for bounded static-starter polish.
- Deferred: React scaffold implementation.
- Deferred: renderer extraction/export.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- Automated browser/screenshot visual acceptance has not been completed for the static starter reference.
- The static starter is baseline-fit but still visually plain; M46 should address only the bounded absence/unavailable/source-owned-label pressure.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162/M43 boundaries.
- React may become too heavy if treated as canonical instead of optional example scaffold.
