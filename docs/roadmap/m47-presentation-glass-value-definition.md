# M47 - Presentation Glass Value Definition

Status: Active
Owner: Aura Lab Overseer

## Purpose

Define what Aura Lab's current presentation glass actually is before Lab tries to package it.

M47 should answer what Lab improved beyond the inherited/base Electron presentation layer, what is reusable, what is still demo scaffolding, and what target projects must provide themselves.

## Outcome

Aura Lab receives a broad but bounded advisory artifact that defines the current glass as a product offering candidate:

- what the glass is
- what value it adds over a base/Core-like Electron presentation layer
- which files or surfaces currently embody it
- which parts are reusable presentation utility
- which parts are Lab demo scaffolding
- what targets must map or own themselves
- what future packaging may need
- what is ready for Sense/Atlas trial vs still unknown

## In Scope

- static starter head definition
- current `portable-presentation-starter/` files and static examples
- M43 handoff standard
- M46 absence/unavailable/source-owned polish
- base/Core-like Electron presentation as a comparison point only
- target-owned mapper boundary
- reusable presentation value and limits
- future package-shape questions

## Out Of Scope

- implementation
- target projects
- target adapters or mappers
- React scaffold
- current Lab renderer changes
- Electron/preload/IPC changes
- SmokeFlash, Pane Board, Wayfinder, or service registry changes
- bridge/runtime contracts
- Core ownership claims
- source-project state or terminology decisions

## Acceptance Criteria

M47 is complete when the advisory artifact:

- states the request it answered
- lists files reviewed
- defines "presentation glass" in Lab-owned terms
- compares Lab glass to the inherited/base Electron presentation layer without making Core the owner
- identifies the reusable presentation improvements Lab has produced
- identifies the current files/surfaces that embody those improvements
- separates reusable glass from Lab demo scaffolding
- states what targets must provide themselves
- states what Lab must not imply or force
- identifies the likely future bundle/package questions
- says what is ready for Sense/Atlas trial and what remains unknown
- recommends whether the next step should be packaging spec, visual review, target relay, or park

## Verification Expectation

Documentation/advisory only:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, network, or target-project testing is required.

## Dependencies

- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/`
