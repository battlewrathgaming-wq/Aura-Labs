# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M48 - Display Selection Shelf
Last completed milestone: M47 / HS174 - Presentation Glass Value Definition Acceptance
Current executor: Dev
Current focus: Create a target-readable selection menu from accepted Lab materials and glass assets.
Expected output: `workspace/DevHS175-display-selection-shelf.md`
Expected DevHS filename: `workspace/DevHS175-display-selection-shelf.md`

## Current State

M48 is open as a narrow Dev documentation/inventory packet.

M47 is accepted and closed.

Accepted glass definition:

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

Lab's current presentation glass is defined as a display-only, framework-neutral Instrument Readout Panel head that renders prepared readout input into a calm, bounded surface with basis, freshness, availability, gaps, warnings, detail reveal, source-owned label qualification, absence/unavailable distinction, and narrow/text-containment behavior.

Library framing:

- `workspace/display-assets.md` frames the shelves.
- `workspace/display-materials/` holds reusable ingredients.
- `workspace/display-outputs/` holds composed outputs and accepted glass assets.
- `workspace/display-schema-ledger.md` remains the catalog/index, not a backlog.

M48 should create a concise selection shelf so Sense can choose desired features without Lab/Sense cross-talk.

M46, M45, M44, M43, and M42 remain accepted and closed.

Accepted output:

- `portable-presentation-starter/`
- `portable-presentation-starter/examples/static/inspect-head.html`
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
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/OverseerHS173-m47-presentation-glass-value-definition-runway.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `workspace/OverseerHS174-m47-presentation-glass-value-definition-acceptance.md`
- `workspace/display-assets.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/OverseerHS175-m48-display-selection-shelf-runway.md`
- `docs/roadmap/m48-display-selection-shelf.md`
- `docs/roadmap/m47-presentation-glass-value-definition.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-06-01: create the selection shelf to unblock Sense and close Lab/Sense cross-talk.
- Human direction: targets should do their own mapper; Lab provides the glass.
- `workspace/display-assets.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `workspace/OverseerHS174-m47-presentation-glass-value-definition-acceptance.md`
- `docs/roadmap/m48-display-selection-shelf.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerHS175-m48-display-selection-shelf-runway.md`
- `workspace/display-assets.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `docs/roadmap/m48-display-selection-shelf.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `package.json`

## Ordered Runway

Dev should create:

```txt
workspace/display-selection-shelf.md
workspace/DevHS175-display-selection-shelf.md
```

Use `workspace/OverseerHS175-m48-display-selection-shelf-runway.md` as the detailed task outline.

The selection shelf should let a target project answer:

```txt
Which features do you want from this selection?
```

## Acceptance Criteria

- `workspace/display-selection-shelf.md` exists.
- It lists accepted glass assets with clear feature offers.
- It lists accepted material features with clear feature offers.
- It separates accepted items from pending/parked items.
- It points to canonical Lab pages/files.
- It states target responsibilities.
- It states what Lab must not imply.
- It includes a Sense-friendly selection prompt.
- It does not authorize adapters, package/export, target adoption, or Dev work in target projects.
- Verification passes.

## Guardrails And Non-Goals

- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not create package/export files.
- Do not create a React scaffold.
- Do not change current Lab renderer files.
- Do not touch Electron/preload/IPC.
- Do not touch SmokeFlash, Pane Board, Wayfinder, or service registry.
- Do not create bridge/runtime contracts.
- Do not invent new material/glass capabilities.
- Do not turn Lab example states into target state labels.
- Do not claim target adoption or target fitness.
- Keep the shelf as a menu, not a task queue.

## Stop Conditions

Stop and return to Human / Overseer direction if the task requires:

- target-project edits
- target adapter decisions
- package/export creation
- new material or glass capability design
- bridge/runtime contract decisions
- source-project terminology decisions
- React package creation
- live/private/network work

## Required Verification

Run:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required.

## Handoff

Expected Dev handoff: `workspace/DevHS175-display-selection-shelf.md`.

## Residual Risks

- M46 did not include browser/screenshot visual proof.
- The static starter should receive Human/Overseer visual review before wider target relay.
- The glass definition is not yet a package/export specification.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162/M43 boundaries.
