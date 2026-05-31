# Current Workspace Packet

Status: Active
Updated: 2026-05-31
Owner: Overseer

## Coordination State

Active milestone: M41 - Portable Presentation Starter Kit Contents
Last completed milestone: M40 / HS152 - Pane Board Collaboration Loop Acceptance
Current executor: Specialist / Engineering Architecture
Current focus: Define the portable presentation starter-kit contents before any renderer extraction, SmokeFlash split, React scaffold, or target adapter work.
Expected output: `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
Expected DevHS filename: None.

## Current State

HS159 is accepted as advisory input.

Aura Lab has proven useful post-bridge presentation grammar and accepted material/output references, but the current renderer is not ready to travel as a starter kit. SmokeFlash/workshop behavior, fixture assumptions, Electron/preload details, and Lab-only tooling must stay out of any portable starter.

The accepted heading is:

```txt
define neutral starter contents
-> split Lab-only harness when extraction is ready
-> extract clean static reference
-> optionally add React example scaffold
```

Sense may continue its adapter work locally. Lab does not need Sense details yet. The future meeting point is:

```txt
target-owned adapter output -> Lab neutral starter input -> presentation frame
```

M41 should develop what Lab needs to solve before stepping into implementation.

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-05-31: prepare the Lab presentation head/starter so Atlas and Sense do not rebuild from ground zero.
- `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`
- `workspace/OverseerHS160-hs159-seed-readiness-acceptance.md`
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
- `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`
- `workspace/OverseerHS160-hs159-seed-readiness-acceptance.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-schema-ledger.md`
- `package.json`

## Ordered Runway

1. Review HS159 and accepted M41 roadmap scope.
2. Define the starter-kit purpose in plain Lab language: what problem it solves and what it does not solve.
3. Inventory the smallest seed contents from accepted materials/output references:
   - display input example shape
   - state grammar
   - vocabulary/copy rules
   - styling primitives or CSS/token expectations
   - static reference target
   - optional React scaffold posture
   - verification/review notes
4. Define exact exclusions:
   - SmokeFlash/material harness
   - Pane Board
   - Wayfinder
   - Electron shell behavior
   - preload/IPC
   - Lab fixture service registry
   - target adapters
   - source-project semantics
   - bridge/runtime contracts
5. Define target adoption boundaries:
   - what Lab provides
   - what Sense/Atlas provide
   - what adapter output may look like without becoming a contract
6. Recommend the next bounded packet after M41:
   - static seed reference extraction
   - SmokeFlash split readiness
   - React example scaffold
   - or defer

## Acceptance Criteria

The M41 artifact is acceptable if it:

- defines the starter kit as a portable presentation starter, not a target renderer or doctrine layer
- clearly separates neutral starter contents, Lab-only tooling, target-owned adapters, and export blockers
- names the smallest useful display input example shape without calling it a bridge contract
- names which accepted materials/output references are included or deferred
- defines the static reference target before optional React scaffold work
- treats React as an optional secondary scaffold/example, not canonical Lab truth
- lists exact exclusions and target ownership boundaries
- gives a concrete next-packet recommendation
- does not authorize implementation, export/seeding, target adapters, source-project semantics, or shared bridge/runtime contracts

## Guardrails And Non-Goals

- Do not implement code.
- Do not create a Dev runway.
- Do not edit Atlas or Sense.
- Do not create a target adapter.
- Do not create a shared bridge/runtime contract.
- Do not promote Lab fixture schemas as target contracts.
- Do not make React the canonical seed unless the artifact gives a strong reason and Human accepts it later.
- Do not include Pane Board, SmokeFlash, Wayfinder, Electron/preload, Lab service registry, or workshop controls in the portable seed.
- Preserve Lab slim/product-agnostic language.
- Preserve target-project authority over internal meaning, state semantics, and adoption.

## Stop Conditions

Stop and return to Human / Overseer direction if the work requires:

- implementation
- renderer extraction
- React package creation
- SmokeFlash split execution
- security review execution
- target-project files or adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- changing accepted material/output semantics

## Required Verification

No runtime verification is required for advisory/spec-only work unless code or renderer files change.

If workspace/docs files are updated, run:

```txt
npm.cmd run verify:all
```

If terminology, protected words, or portable copy rules change, also run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

## Evidence

- HS159 landed as advisory input under `workspace/EngineeringHS159-portable-presentation-seed-kit-readiness-advisory.md`.
- HS160 accepted HS159 and opened M41.

## Handoff

Pending `workspace/StarterKitSpecHS160-portable-presentation-contents.md`.

## Advisory Disposition

- Accepted: HS159 Portable Presentation Starter Kit Readiness Advisory.
- Opened: M41 Portable Presentation Starter Kit Contents.
- Deferred: renderer extraction.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: React scaffold implementation.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- `workspace/overview.md` is stale around recent Pane Board and M41 state and should be refreshed during a later housekeeping pass.
- Current Lab renderer remains unsuitable for direct export until SmokeFlash/workshop coupling is split.
- Starter input examples may be mistaken for bridge contracts unless the M41 artifact is explicit.
- React may become too heavy if treated as canonical instead of optional example scaffold.
