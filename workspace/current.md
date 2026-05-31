# Current Workspace Packet

Status: Idle
Updated: 2026-05-31
Owner: Overseer

## Coordination State

Active milestone: None
Last completed milestone: M41 / HS161 - Portable Presentation Starter Kit Contents Acceptance
Current executor: Human / Overseer
Current focus: Await Human / Overseer direction after accepting the starter-kit contents specification.
Expected output: Human direction or next Overseer runway artifact.
Expected DevHS filename: None.

## Current State

M41 is accepted and closed.

Accepted artifact:

- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`

Accepted direction:

```txt
portable presentation starter contents
-> Lab-local static reference
-> review
-> optional React example later
```

The starter should remain a portable presentation starter, not a target renderer, source-project adapter, bridge/runtime contract, or shared doctrine layer.

Recommended next packet, if Human chooses to proceed:

```txt
Static Portable Presentation Starter Reference
```

That packet should create a separate Lab-local static HTML/CSS/JS reference from the accepted starter spec. It should avoid copying the current renderer wholesale and should exclude SmokeFlash, Electron, Pane Board, Wayfinder, target adapters, and source-project semantics.

React remains optional and deferred until the static reference is accepted.

Sense may continue adapter work locally. Lab does not need Sense details until both sides have useful boundary artifacts to compare.

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-05-31: prepare the Lab presentation head/starter so Atlas and Sense do not rebuild from ground zero.
- `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`
- `workspace/OverseerHS160-hs159-seed-readiness-acceptance.md`
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `docs/roadmap/m41-portable-presentation-seed-kit-contents.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`

Read first:

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m41-portable-presentation-seed-kit-contents.md`
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Runway

No active runway.

## Acceptance Criteria

No active acceptance criteria while idle.

## Guardrails And Non-Goals

- Do not implement code without a new current packet.
- Do not open React scaffold work before static reference acceptance unless Human explicitly changes course.
- Do not export/seed the current renderer.
- Do not create target adapters from Lab.
- Do not create a shared bridge/runtime contract.
- Do not promote Lab fixture schemas as target contracts.
- Do not include Pane Board, SmokeFlash, Wayfinder, Electron/preload, Lab service registry, or workshop controls in the portable starter.
- Preserve Lab slim/product-agnostic language.
- Preserve target-project authority over internal meaning, state semantics, adapters, and adoption.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- implementation without a new current packet
- renderer extraction
- React package creation
- SmokeFlash split execution
- security review execution
- target-project files or adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- changing accepted material/output semantics

## Required Verification

No active verification while idle.

## Evidence

- HS159 landed as advisory input under `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`.
- HS160 accepted HS159 and opened M41.
- HS160 produced `workspace/StarterKitSpecHS160-portable-presentation-contents.md`.
- HS161 accepted the starter-kit contents specification and closed M41.

## Handoff

No active handoff while idle.

## Advisory Disposition

- Accepted: HS159 Portable Presentation Starter Kit Readiness Advisory.
- Accepted and closed: M41 Portable Presentation Starter Kit Contents.
- Recommended next: Static Portable Presentation Starter Reference.
- Deferred: renderer extraction.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: React scaffold implementation.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- `workspace/overview.md` is stale around recent Pane Board and M41 state and should be refreshed during a later housekeeping pass.
- Current Lab renderer remains unsuitable for direct export until SmokeFlash/workshop coupling is split.
- Starter input examples may be mistaken for bridge contracts unless future implementation keeps the M41 boundaries visible.
- React may become too heavy if treated as canonical instead of optional example scaffold.
