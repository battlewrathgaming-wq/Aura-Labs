# OverseerHS80 - M23 Display Use Case Capture Runway

Date: 2026-05-25
Role: Overseer
Milestone: M23 - Display Use Case Capture
Status: Active runway

## Decision

Open M23 as a use-case capture and comparison milestone.

M21 identified display types. M22 created material pressure. M23 should now capture real project presentation use cases so Lab can compare which display methods fit actual surfaces before building tooling or new primitives.

## Source Of Intent

Accepted input:

- Human direction to do use-case capture before test build.
- Human direction to create a landing-zone table so other projects can contextualize Lab display work against applicable tasks.
- Human direction that each known current presentation should offer three unique display methods where useful.
- Human authorization for advisory cross-project `request_display` pointers.
- M20 slot taxonomy: `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- M21 display type library: `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- M22 display material bench: `workspace/reference/display-material-bench-2026-05-25.md`
- Request schema: `workspace/request_display.md`

## Current Executor

UI development owner / display asset documentor.

This is not a Dev implementation packet.

## Expected Artifact

```txt
workspace/DisplayUseCaseCaptureHS80-request-display-map.md
```

## Ordered Runway

1. Read the request schema, M20 slot taxonomy, M21 display type library, M22 material bench, Lab critical terms, and the display asset documentation owner contract.
2. Define the use-case capture purpose: map real or known current presentation surfaces to candidate Lab display methods without taking source-project ownership.
3. Build a use-case comparison table. Include Lab-known surfaces first, then any Atlas/Sense/Core entries that arrive through `request_display`.
4. For each row, capture project owner, surface/use case, current presentation, user goal, source terms to preserve, terms to qualify, known fields, state/freshness/basis/gap needs, applicable M20 slots, applicable M21 display types, applicable M22 material sets, and three candidate display methods.
5. For each row, include a recommended disposition: near-term Lab candidate, needs target review, needs material, needs inventory entry, parked, or not suitable.
6. Include the `request_display` workflow and explain how other projects should submit advisory requests.
7. Recommend the next packet after M23: likely Display Inventory Scaffold, SmokeFlash feasibility, or first material-backed primitive selection.

## request_display Pointer Deployment

Advisory pointers may be deployed to Atlas and Sense workspace roots.

Pointer files should:

- reference `F:\Projects\AURA- Lab\workspace\request_display.md`
- state that requests are advisory only
- preserve the target project's authority over internal -> Bridge meaning
- say Lab owns only Bridge -> Interface presentation suggestions after source meaning is preserved
- avoid changing the target project's active runway
- avoid requiring target-project implementation

Do not edit Atlas or Sense source code.

## Required Use-Case Table Columns

Include at least:

- request id
- project / owner
- current presentation or use case
- current display shape
- user goal
- source terms to preserve
- terms to avoid or qualify
- known displayable fields
- gaps / unknowns
- state cases
- freshness / age needs
- basis / source needs
- warning / gap needs
- layout constraints
- interaction needs
- applicable M20 slots
- applicable M21 display types
- applicable M22 material sets
- candidate display method A
- candidate display method B
- candidate display method C
- risks
- disposition
- recommended next action

## Acceptance Criteria

M23 can be accepted if the artifact:

- defines a usable use-case comparison table
- uses `request_display` as an advisory intake shape
- maps use cases to M20 slots, M21 display types, and M22 material sets
- offers three distinct display methods per suitable known presentation
- makes clear which project owns source meaning
- preserves Atlas/Sense/Core terms rather than making them Lab defaults
- gives future inventory, SmokeFlash, or primitive-selection work a better target
- records any cross-project pointers deployed and keeps them advisory

Reject or redirect if the artifact:

- becomes a target adoption plan
- becomes a bridge contract or payload schema
- asks Dev to implement
- treats Lab as owner of Atlas/Sense/Core meaning
- skips slot/type/material mapping
- gives only one display option where comparison is possible
- turns request intake into a hidden backlog

## Guardrails

- Do not implement code.
- Do not edit target-project source files.
- Do not rewrite target-project current runways.
- Do not define Atlas, Sense, Core, or source-project meaning.
- Do not create shared Aura doctrine.
- Do not make `request_display` a runtime schema.
- Do not build SmokeFlash in M23.
- Do not require live/private/network/GUI/Electron smoke.
- Do not treat archived docs as active task queues.

## Stop Conditions

Stop and return to Human / Overseer if:

- a use case requires source-project meaning decisions Lab cannot make
- target-project current files would need substantive runway changes
- a request implies backend, bridge, IPC, payload, or persistence changes
- a request cannot preserve owner/layer terms
- the work becomes a build queue rather than comparison capture
- cross-project pointer deployment would disrupt an active target packet

## Verification

Required after writing the artifact:

```powershell
npm.cmd run verify:all
```

Advisory shared terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

No Electron smoke is required because M23 is documentation/intake only.

## Support

Support files:

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/request_display.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/OverseerHS79-m22-acceptance.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Handoff

Expected handoff should include:

- files and references reviewed
- use-case capture purpose
- request_display schema usage notes
- cross-project pointer deployment notes
- use-case comparison table
- three candidate display methods per suitable use case
- slot/type/material mapping
- risks and parked items
- recommended next packet
- verification results

## Parked Until After M23

- Display inventory scaffold
- SmokeFlash HTML harness
- cannibalizing Sense log-reader shape for Lab-local staged ingest
- repeat implementation cycle
- target-project adoption packets
