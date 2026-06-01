# M45 - Static Starter Presentation Pressure Polish

Status: Active
Owner: Aura Lab Overseer

## Purpose

Translate Sense relay pressure into a bounded UI/UX polish specification for the static starter head.

M45 should decide what small presentation refinements would make the head clearer under target-shaped content before Dev is asked to change anything.

## Outcome

Aura Lab receives a UI/UX advisory artifact that turns the Sense pressure extract into specific, bounded polish recommendations.

The output should preserve target-project authority and avoid turning Sense-shaped pressure into Sense adoption, target implementation, or Lab ownership of Sense meaning.

## In Scope

- review the static starter as a presentation head
- use `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md` as Lab-facing pressure input
- propose clearer distinction between `NO DATA` and `UNAVAILABLE`
- propose reason-first absence examples
- propose source-owned visible-label examples with qualification
- propose compact/detail-mode handling for `Coverage` / `Known fields`
- propose a no-selector/no-reference-scaffold inspection view or note
- classify recommendations as required before relay, useful polish, optional example, or parked
- define acceptance criteria for a future Dev packet if one is warranted

## Out Of Scope

- implementation
- React scaffold
- target adapters
- Sense adoption decision
- Sense state or terminology changes
- bridge/runtime contracts
- current Lab renderer changes
- SmokeFlash, Pane Board, Wayfinder, or service registry changes
- automated browser/screenshot evidence

## Acceptance Criteria

M45 is complete when the UI/UX artifact:

- states what request it answered
- lists files reviewed
- summarizes the Sense pressure without importing Sense authority
- names the minimal polish set, if any, needed before wider target relay
- separates required polish from optional polish and parked ideas
- defines concrete example/state additions or copy treatments
- says whether React remains parked
- says whether Dev should implement now, wait for more target pressure, or split the work
- includes acceptance criteria for any future Dev packet

## Verification Expectation

Documentation/advisory only:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

No browser, screenshot, Electron, live, private, or target-project testing is required.

## Dependencies

- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/`
