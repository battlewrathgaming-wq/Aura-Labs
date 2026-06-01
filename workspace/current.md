# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M45 - Static Starter Presentation Pressure Polish
Last completed milestone: M44 / HS169 - Static Starter Safety Floor Acceptance
Current executor: UI/UX advisor
Current focus: Translate Sense relay pressure into a bounded static starter polish specification before any Dev packet.
Expected output: `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
Expected DevHS filename: None.

## Current State

M45 is open as a UI/UX advisory/spec runway.

M44 is accepted and closed.

M43 is accepted and closed.

M42 remains accepted, closed, and manually visually reviewed.

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

The static starter now carries the M43 safety floor directly in its README and verifier.

Sense relay pressure extract is accepted as Lab-facing presentation pressure, not Sense adoption or implementation authority.

M45 should define whether the head needs small polish/example refinements before wider target relay.

After M45 closes, recommended next options:

- target relay/adoption review using the M43 handoff standard
- optional React example scaffold after static reference acceptance and visual review
- static starter Dev polish if UI/UX recommends a bounded implementation packet
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
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
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
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `portable-presentation-starter/README.md`
- `package.json`

## Ordered Runway

UI/UX advisor should create:

```txt
workspace/UIUXHS170-static-starter-presentation-pressure-polish.md
```

The artifact must answer:

```txt
What bounded polish, examples, or inspection-shape changes should Lab make before wider target relay, based on the Sense presentation pressure extract?
```

Use `workspace/OverseerHS170-m45-static-starter-presentation-pressure-polish-runway.md` as the detailed task outline.

## Acceptance Criteria

- UI/UX artifact states what request it answered.
- UI/UX artifact separates Lab-facing presentation pressure from Sense authority.
- UI/UX artifact defines required-before-relay, optional, and parked polish.
- UI/UX artifact gives concrete example/copy/visual guidance for absence, unavailable, source-owned label pass-through, and `Coverage` / `Known fields` density.
- UI/UX artifact says whether React remains parked.
- UI/UX artifact recommends whether Dev should implement now, wait, split, or do nothing.
- No implementation is performed.

## Guardrails And Non-Goals

- Do not implement code in this UI/UX packet.
- Do not claim automated screenshot/browser visual acceptance unless that evidence is actually produced.
- Do not open React scaffold work unless Human explicitly chooses that lane.
- Do not export/seed the current renderer.
- Do not create target adapters from Lab.
- Do not create bridge/runtime contracts.
- Do not promote Lab example input as target contracts.
- Preserve Lab slim/product-agnostic language.
- Preserve target-project authority over internal meaning, state semantics, adapters, and adoption.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- implementation
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

No live/browser verification required for the UI/UX artifact.

Overseer may run after receipt:

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
- Verification passed during M42 acceptance: `npm.cmd run verify:static-starter`, `npm.cmd run verify:all`, and orchestration `npm.cmd run verify:terminology`.
- Housekeeping verification after HS165 passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.
- M43 documentation verification passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.
- M44 acceptance verification passed: `node --check scripts\verify-static-starter.js`, `npm.cmd run verify:static-starter`, `npm.cmd run verify:all`, and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.

## Handoff

Expected UI/UX handoff: `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`.

## Advisory Disposition

- Accepted and closed: M41 Portable Presentation Starter Kit Contents.
- Accepted: Sense starter-kit caution feedback.
- Accepted and closed: M42 Static Portable Presentation Starter Reference.
- Accepted: manual/static visual review.
- Accepted and closed: M43 Presentation Head Handoff Standard.
- Accepted advisory input: SecEngHS167 safety-floor review.
- Accepted and closed: M44 Static Starter Safety Floor Corrections.
- Accepted advisory input: HS168 Sense relay presentation pressure extract.
- Deferred: React scaffold implementation.
- Deferred: renderer extraction/export.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- Automated browser/screenshot visual acceptance has not been completed for the static starter reference.
- The static starter is baseline-fit but visually plain; spacing, detail density, and source-owned placeholder treatment are deferred polish.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162 boundaries.
- React may become too heavy if treated as canonical instead of optional example scaffold.
