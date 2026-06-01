# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M47 - Presentation Glass Value Definition
Last completed milestone: M46 / HS172 - Static Starter Absence And Relay Polish Acceptance
Current executor: UI/UX advisor / Engineering advisor / presentation specialist
Current focus: Define what Lab's current presentation glass is before opening packaging or target-relay work.
Expected output: `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
Expected DevHS filename: None.

## Current State

M47 is open as a broad advisory/spec runway.

M46 is accepted and closed.

The static starter now has:

- distinct generic display absence and unavailable current-read examples
- qualified source-owned no-observation/no-scan, blocked, and degraded examples
- a near-primary source-owned label pattern
- compact inspection treatment where `Coverage` / `Known fields` can move behind `Readout Detail`
- a no-selector `inspect-head.html` inspection shape
- verifier checks for these safety distinctions

M45, M44, M43, and M42 remain accepted and closed.

Current guiding lesson:

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

The next question is not package format yet. It is what the glass actually is: what Lab improved beyond the inherited/base Electron presentation layer, what travels as reusable presentation utility, what remains Lab demo scaffolding, and what target projects must provide themselves.

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
- `docs/roadmap/m47-presentation-glass-value-definition.md`
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

M46 did not produce browser or screenshot proof. Human/Overseer visual review of `index.html` and `inspect-head.html` remains useful before wider target relay, but M47 may proceed as definition work.

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-06-01: define the glass before packaging.
- Human direction: the inherited/base layer can be a point of reference, not the owner of the answer.
- Human direction: targets should do their own mapper; Lab provides the glass.
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
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/OverseerHS173-m47-presentation-glass-value-definition-runway.md`
- `docs/roadmap/m47-presentation-glass-value-definition.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
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
- `workspace/OverseerHS173-m47-presentation-glass-value-definition-runway.md`
- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m47-presentation-glass-value-definition.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `package.json`

## Ordered Runway

Create:

```txt
workspace/GlassDefinitionHS173-presentation-glass-value-definition.md
```

The artifact should answer:

```txt
What is Lab's current presentation glass, what did it improve over a base presentation layer, and what should target projects receive or provide themselves?
```

Use `workspace/OverseerHS173-m47-presentation-glass-value-definition-runway.md` as the detailed task outline.

## Acceptance Criteria

- Artifact states the request it answered.
- Artifact lists files reviewed.
- Artifact defines "presentation glass" in Lab-owned terms.
- Artifact compares Lab glass to the inherited/base Electron presentation layer without making the base layer the owner.
- Artifact identifies reusable presentation improvements Lab has produced.
- Artifact identifies current files/surfaces that embody those improvements.
- Artifact separates reusable glass from Lab demo scaffolding.
- Artifact states what target projects must provide themselves.
- Artifact states what Lab must not imply or force.
- Artifact identifies likely future bundle/package questions.
- Artifact says what is ready for Sense/Atlas trial and what remains unknown.
- Artifact recommends whether the next step should be packaging spec, visual review, target relay, or park.
- No implementation is performed.

## Guardrails And Non-Goals

- Advisory/spec only.
- Do not implement code.
- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not create a React scaffold.
- Do not change current Lab renderer files.
- Do not touch Electron/preload/IPC.
- Do not touch SmokeFlash, Pane Board, Wayfinder, or service registry.
- Do not create bridge/runtime contracts.
- Do not turn Lab example states into target state labels.
- Do not make Core the owner of Lab's presentation glass.
- Do not claim target adoption or target fitness.
- Do not claim browser/screenshot visual acceptance unless actually produced.

## Stop Conditions

Stop and return to Human / Overseer direction if the task requires:

- implementation
- package/export creation
- target-project files
- target adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- React package creation
- live/private/network work

## Required Verification

No live/browser verification required for the advisory artifact.

Overseer may run after receipt:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

## Handoff

Expected advisory handoff: `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`.

## Residual Risks

- M46 did not include browser/screenshot visual proof.
- The static starter should receive Human/Overseer visual review before wider target relay.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162/M43 boundaries.
- React may become too heavy if treated as canonical instead of optional example scaffold.
