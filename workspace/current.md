# Current Workspace Packet

Status: Active
Updated: 2026-05-31
Owner: Overseer

## Coordination State

Active milestone: M42 - Static Portable Presentation Starter Reference
Last completed milestone: M41 / HS161 - Portable Presentation Starter Kit Contents Acceptance
Current executor: Dev
Current focus: Build the first Lab-local static presentation starter reference from the accepted M41 specification.
Expected output: Static starter reference files plus Dev handoff.
Expected DevHS filename: `workspace/DevHS163-static-portable-presentation-starter-reference.md`

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

Sense reviewed the Lab starter-kit language as downstream adapter pressure input and returned "usable with cautions." Lab accepted the cautions in `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`.

M42 should now create the smallest static reference that proves the starter concept without moving into React, target adapters, renderer export, or SmokeFlash split execution.

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-05-31: proceed to the stable proof point after M41.
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`
- `workspace/OverseerHS163-m42-static-starter-reference-runway.md`
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
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
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `package.json`

## Ordered Dev Runway

1. Choose a Lab-local static starter location that is separate from the current renderer. Prefer a clearly named folder such as `portable-presentation-starter/` unless existing project structure suggests a better place.
2. Create a README for the static starter that states:
   - purpose and scope
   - example input is display-example input only, not a bridge/runtime contract
   - target projects own adapters and adoption
   - Sense caution boundaries from HS162
   - React is deferred
3. Create neutral example data for one Instrument Readout Panel family:
   - one selected panel at a time
   - multiple display example states from data
   - basis, age/freshness, availability, coverage, gaps, warnings, detail rows
   - `sourceOwned` or equivalent qualification when source-owned placeholder terms appear
4. Create static HTML/CSS/JS that renders the Instrument Readout Panel from the example data:
   - state marker/chip/light with non-color-only marker
   - primary value or absence state
   - readout age/freshness
   - readout basis
   - gaps/warnings marker
   - availability reason line when needed
   - one Readout Detail reveal
   - narrow-friendly layout and long-token wrapping
   - reduced-motion handling if any motion is used
5. Add a small verification check if useful to prove the static files exist and do not reference excluded Lab tooling. Include it in `verify:all` only if it is straightforward and local.
6. Run required verification.
7. Create the expected DevHS with:
   - files changed
   - how to inspect the static reference
   - verification commands/results
   - exclusions intentionally preserved
   - any remaining risks or next recommendations

## Acceptance Criteria

The Dev output is acceptable if:

- the static reference exists separately from the current renderer
- it can be opened as plain HTML or otherwise inspected without Electron
- it renders one Instrument Readout Panel from neutral example data
- the example data clearly states it is display-example input, not a bridge/runtime contract
- `state`, `availability`, `NO DATA`, and `UNAVAILABLE` are documented as display example fields/labels, not target enums or states
- Sense-owned placeholders such as `blocked`, `no-scan`, and `degraded` are qualified if they appear
- the reference does not include SmokeFlash, Pane Board, Wayfinder, Electron/preload, Lab service registry, target adapters, or source-project semantics
- React remains deferred
- verification passes

## Guardrails And Non-Goals

- Do not create a React scaffold.
- Do not export/seed the current renderer.
- Do not copy the current renderer wholesale.
- Do not execute SmokeFlash split work.
- Do not edit Atlas or Sense.
- Do not create target adapters.
- Do not create bridge/runtime contracts.
- Do not promote Lab fixture schemas as target contracts.
- Do not include Pane Board, SmokeFlash, Wayfinder, Electron/preload, Lab service registry, or workshop controls in the portable starter.
- Preserve Lab slim/product-agnostic language.
- Preserve target-project authority over internal meaning, state semantics, adapters, and adoption.

## Stop Conditions

Stop and return to Human / Overseer direction if the work requires:

- React package creation
- renderer extraction from current app code
- SmokeFlash split execution
- security review execution
- target-project files or adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- changing accepted material/output semantics
- live/private/network work

## Required Verification

Run:

```txt
npm.cmd run verify:all
```

Run from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

If a new static-reference verifier is added, include it in the DevHS and preferably in `verify:all`.

## Evidence

Pending Dev work.

## Dev Handoff

Pending `workspace/DevHS163-static-portable-presentation-starter-reference.md`.

## Advisory Disposition

- Accepted and closed: M41 Portable Presentation Starter Kit Contents.
- Accepted: Sense starter-kit caution feedback.
- Opened: M42 Static Portable Presentation Starter Reference.
- Deferred: React scaffold implementation.
- Deferred: renderer extraction/export.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- `workspace/overview.md` remains stale around recent Pane Board and M41/M42 state and should be refreshed during a later housekeeping pass.
- Starter input examples may be mistaken for bridge contracts unless the static reference keeps the M41/HS162 boundaries visible.
- React may become too heavy if treated as canonical instead of optional example scaffold.
