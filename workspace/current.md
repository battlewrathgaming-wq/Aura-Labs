# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M49 - Sense Trial Glass Package
Last completed milestone: M48 / HS176 - Display Selection Shelf Acceptance
Current executor: Dev
Current focus: Package the selected Lab glass/materials for a local Sense trial without creating target adapter meaning.
Expected output: `workspace/DevHS177-sense-trial-glass-package.md`
Expected DevHS filename: `workspace/DevHS177-sense-trial-glass-package.md`

## Current State

M49 is open as a narrow Dev packaging/documentation packet.

M48 is accepted and closed.

Accepted glass definition:

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

Lab's current presentation glass is defined as a display-only, framework-neutral Instrument Readout Panel head that renders prepared readout input into a calm, bounded surface with basis, freshness, availability, gaps, warnings, detail reveal, source-owned label qualification, absence/unavailable distinction, and narrow/text-containment behavior.

Sense selected:

- Instrument Readout Panel Glass
- Availability Reason Treatment
- Long Text Detail Block
- Warning / Gap Edge
- maybe Expandable Status Card

Sense ask:

```txt
Can Lab package the glass for a local Sense trial, with these materials in mind?
```

M49 should package the selected goodies as a small local static bundle. This is not Sense adoption, a Sense mapper, a target adapter, or a runtime integration.

Library framing:

- `workspace/display-assets.md` frames the shelves.
- `workspace/display-materials/` holds reusable ingredients.
- `workspace/display-outputs/` holds composed outputs and accepted glass assets.
- `workspace/display-selection-shelf.md` is the target-readable selection menu.
- `workspace/display-schema-ledger.md` remains the catalog/index, not a backlog.

M48 created a concise selection shelf so target projects can choose desired features without Lab owning their mapper, source meaning, runtime behavior, or adoption.

M48, M47, M46, M45, M44, M43, and M42 remain accepted and closed.

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
- `workspace/display-selection-shelf.md`
- `workspace/DevHS175-display-selection-shelf.md`
- `workspace/OverseerHS176-m48-display-selection-shelf-acceptance.md`
- `workspace/OverseerHS177-m49-sense-trial-glass-package-runway.md`
- `docs/roadmap/m49-sense-trial-glass-package.md`
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
- Human direction on 2026-06-01: Sense selected the goodies; Lab should package the glass for a local Sense trial.
- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `workspace/OverseerHS176-m48-display-selection-shelf-acceptance.md`
- `docs/roadmap/m49-sense-trial-glass-package.md`
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
- `workspace/OverseerHS177-m49-sense-trial-glass-package-runway.md`
- `workspace/display-selection-shelf.md`
- `workspace/display-assets.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `docs/roadmap/m49-sense-trial-glass-package.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- `package.json`

## Ordered Runway

Dev should create:

```txt
portable-presentation-starter/packages/sense-trial-glass/
workspace/DevHS177-sense-trial-glass-package.md
```

Use `workspace/OverseerHS177-m49-sense-trial-glass-package-runway.md` as the detailed task outline.

## Acceptance Criteria

- `portable-presentation-starter/packages/sense-trial-glass/` exists.
- It contains the minimum static files needed for local inspection.
- It includes a README or manifest naming included files.
- It names the selected Sense trial materials.
- It states Sense owns mapper, source meaning, runtime behavior, copy, review, and adoption.
- It states Lab sample/example data is not Sense data.
- It states Lab display labels are not Sense state enums.
- It does not require Electron, IPC, preload, service registry, SmokeFlash, Pane Board, Wayfinder, or target project files.
- Verification passes.

## Guardrails And Non-Goals

- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not create broad package/export infrastructure beyond the local static Sense trial package.
- Do not create a React scaffold.
- Do not change current Lab renderer files.
- Do not touch Electron/preload/IPC.
- Do not touch SmokeFlash, Pane Board, Wayfinder, or service registry.
- Do not create bridge/runtime contracts.
- Do not invent new material/glass capabilities.
- Do not turn Lab example states into target state labels.
- Do not claim target adoption or target fitness.
- Keep the package as a local trial bundle, not a product promise.

## Stop Conditions

Stop and return to Human / Overseer direction if the task requires:

- target-project edits
- target adapter decisions
- runtime integration decisions
- package manager publishing
- framework selection
- new visual behavior
- bridge/runtime contract decisions
- source-project terminology decisions
- live/private/network work

## Required Verification

Run:

- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required unless visible static behavior changes enough to require visual proof.

## Handoff

Expected Dev handoff: `workspace/DevHS177-sense-trial-glass-package.md`.

## Residual Risks

- M46 did not include browser/screenshot visual proof.
- The package should not become a target adapter or adoption record.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162/M43 boundaries.
