# M29 - Presentation Head Improvement Rail

Status: Candidate

## Outcome

Improve Aura Lab's product-facing presentation head through visible renderer capabilities, while keeping workshop tooling bounded and support-only.

M29 should advance the H-lane direction from the candidate bank. The likely arc is:

1. make loading a first-class presentation state
2. add `viewIntent` as a render axis after family and state
3. prove one alternate view intent, such as confidence-first or source-first
4. close with a review of whether the renderer is good enough to justify split/readiness work

## Why This Is Milestone-Sized

M28 proved one material prototype. The next useful outcome is not another isolated widget; it is a stronger presentation model that can keep improving without the smoke/test model falling behind.

M29 is milestone-sized because it changes what the renderer can express and what verification must understand.

## Likely Runways

- Add loading state parity to the renderer and smoke model.
- Add `viewIntent` as a deliberate presentation axis.
- Keep `summary-first` as the default view intent.
- Prototype one expressive view intent, likely confidence-first or source-first.
- Capture any new presentation test axis created by the work.
- Review split readiness at close without starting export/seeding by default.

## Supporting Work

Display material proving still matters, but it is support for the presentation head rather than the main road.

Use accepted material pages when they help pressure the renderer. Do not make every material its own milestone.

## Acceptance Criteria

M29 is complete when:

- loading is represented as a first-class presentation state or explicitly deferred with reason
- `viewIntent` is added as a renderer/test concept or explicitly deferred with reason
- at least one alternate view intent is scoped, prototyped, or parked with clear rationale
- verification covers any new state or view axis introduced
- SmokeFlash remains hidden/gated workshop tooling
- no target-project adapter, source-project meaning, or export/seeding work is introduced
- the close review answers whether to split, continue presentation improvements, or compose outputs next

## Non-Goals

- target-project adoption
- target-project adapters
- export/seeding
- broad SmokeFlash split unless close review explicitly opens it later
- broad visual-smoke matrix
- durable bridge/runtime contracts
- turning support tooling into product direction

## Dependencies

- `docs/roadmap/future-candidate-bank.md`
- H02 Loading State Parity
- H03 View Intent Axis
- H04 Confidence View or H05 Source-First View
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/OverseerHS92-m28-acceptance.md`

## Verification Shape

Use the normal Lab verification set for code work:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke when visible layout, state, view-axis, material harness behavior, or capture flow changes:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology verification when visible copy or durable docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```
