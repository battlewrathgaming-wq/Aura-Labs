# OverseerHS173 - M47 Presentation Glass Value Definition Runway

Status: Open
Role: Aura Lab Overseer
Date: 2026-06-01
Milestone: M47 - Presentation Glass Value Definition

## Request

Define what Aura Lab's current "glass" is before opening packaging or target-relay work.

The Human is feeling out the ask. Both current target projects are Electron-based, so the useful question is not yet "what package format should Lab ship?" but:

```txt
What reusable presentation value did Lab improve beyond the base presentation layer?
```

## Decision

Open M47 as a broad advisory/spec packet.

This is not a Dev implementation packet. It is the definition step before any bundle/package work.

Executor:

- UI/UX advisor, Engineering advisor, or presentation specialist

Expected artifact:

- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`

## Read First

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m47-presentation-glass-value-definition.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `package.json`

Inspect as needed:

- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- inherited/base Electron renderer files only as comparison context, if useful

## Task

Create:

```txt
workspace/GlassDefinitionHS173-presentation-glass-value-definition.md
```

Answer the broad ask:

```txt
What is Lab's current presentation glass, what did it improve over a base presentation layer, and what should target projects receive or provide themselves?
```

Use Core/base Electron as a point of comparison only. Do not make Core the owner of the answer.

## Required Output

The artifact should include:

1. Files reviewed.
2. Short current-state understanding.
3. Definition of "presentation glass" in Lab-owned terms.
4. Base/Core-like Electron presentation comparison.
5. Reusable presentation improvements Lab has produced.
6. Current files/surfaces that embody the glass.
7. What is reusable utility vs Lab demo scaffolding.
8. What target projects must provide themselves.
9. What Lab must not imply or force.
10. Likely future bundle/package questions.
11. What is ready for Sense/Atlas trial.
12. What remains unknown until target pressure arrives.
13. Risks.
14. Recommended next step: packaging spec, visual review, target relay, or park.

## Guardrails

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

## Acceptance Criteria

The artifact is acceptable if it:

- answers the request in analysis form, not as a prompt dump
- defines the glass before defining packaging
- identifies what Lab improved beyond the base layer
- distinguishes reusable glass from demo scaffolding
- preserves target-owned mapper/source meaning boundaries
- states target projects translate themselves
- keeps Lab responsible for making the window worth looking through
- recommends a clear next move without opening Dev by itself

## Verification

Run after the artifact is created:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`
