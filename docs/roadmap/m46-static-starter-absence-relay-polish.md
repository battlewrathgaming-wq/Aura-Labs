# M46 - Static Starter Absence And Relay Polish

Status: Active
Owner: Aura Lab Overseer

## Purpose

Implement the bounded static starter polish recommended by `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`.

M46 should make the static starter clearer under target-shaped pressure without turning Lab examples into target contracts or source-project state meanings.

## Outcome

The framework-neutral static starter better demonstrates:

- generic display absence
- unavailable current read
- source-owned reason-first placeholders
- source-owned visible-label pass-through with owner/layer qualification
- compact inspection where `Coverage` / `Known fields` can move behind `Readout Detail`
- the distinction between Lab demo scaffolding and the offered presentation head

## In Scope

- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- optionally `portable-presentation-starter/examples/static/index.html`
- optionally one no-selector static inspection page in the same folder
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- Dev handoff artifact

## Out Of Scope

- target projects
- target adapters
- current Lab renderer changes
- Electron/preload/IPC
- SmokeFlash
- Pane Board
- Wayfinder
- Lab service registry
- bridge/runtime contracts
- source-project meaning or state normalization
- React package/scaffold
- renderer export/seeding
- live, private, or network work

## Acceptance Criteria

M46 is complete when:

- `NO DATA` and `UNAVAILABLE` are visibly and textually distinct.
- At least one reason-first absence example exists for generic display absence.
- At least one source-owned absence/unavailability example exists with owner/layer qualification.
- At least one degraded/partial source-owned placeholder example exists without becoming a Lab state.
- At least one source-owned label is shown primary or near-primary while qualified.
- At least one compact example moves `Coverage` / `Known fields` behind `Readout Detail`.
- Lab demo scaffolding vs offered head is clarified through a no-selector inspection page or explicit relay note.
- Existing safety-floor README language remains intact.
- Existing local JSON fallback behavior remains intact.
- Text is still rendered as text.
- No external URL, privileged runtime, target adapter, or bridge/runtime contract is introduced.
- React remains absent.

## Verification Expectation

Required:

- `node --check portable-presentation-starter\examples\static\instrument-readout-panel.js`
- `node --check scripts\verify-static-starter.js`
- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

Browser or screenshot evidence is optional only if the Dev packet explicitly produces it and names the evidence.

## Dependencies

- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/`
