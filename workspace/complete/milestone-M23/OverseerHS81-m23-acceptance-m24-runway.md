# OverseerHS81 - M23 Acceptance And M24 Runway

Date: 2026-05-25
Role: Overseer
Status: Accepted M23; opens M24

## Decision

Accept and close M23 - Display Use Case Capture.

Open M24 - Active Display Request Advisory Comparison.

## M23 Acceptance

Accepted artifact:

- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`

Accepted state:

- Atlas has 3 active `request_display` entries.
- Sense has 1 active `request_display` entry.
- Both projects are under the five-active-request cap.
- Sense inventory-only rows remain parked and are not active Lab requests.
- The capture maps active requests to M20 slots, M21 display types, and M22 material sets.
- Each active request has three candidate display methods.
- Source-project meaning remains owned by Atlas or Sense.
- Lab output remains advisory Bridge -> Interface comparison only.

## Files Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/request_display.md`
- `workspace/display-request-cooperation-contract.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\known-workflows\display_request.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\workflow-maps\display-request-space-to-state.md`

## Verification Accepted

M23 verification recorded in `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing Lab internal/compatibility `trust` and `certainty` surfaces.

No Electron smoke was required because M23 was documentation/intake work.

## M24 Purpose

M24 should answer the active requests with an advisory comparison pack.

It should compare Bridge -> Interface display methods for the four active requests without choosing source-project implementation, renaming project terms, or creating Dev authorization.

Active requests:

1. `atlas.overview.right-rail-status-stack`
2. `atlas.discovery.queue-review-possible-leads`
3. `atlas.watch.state-display`
4. `sense.clipboard-window`

## Current Executor

UI/UX advisor or UI development owner / display asset documentor.

This is not a Dev implementation packet.

## Expected Artifact

```txt
workspace/DisplayResponseComparisonHS82-active-display-requests.md
```

## Source Of Intent

Accepted input:

- Human direction to avoid double work by keeping canonical requests source-owned and Lab outputs recorded once.
- Human direction that requests can now proceed after Sense is caught up.
- M23 capture artifact.
- Central display request workflow context.
- Lab request cooperation contract.
- M20 slot taxonomy.
- M21 display type library.
- M22 material bench.

## Ordered Runway

1. Read `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`, `workspace/request_display.md`, `workspace/display-request-cooperation-contract.md`, M20, M21, M22, and the central display request workflow.
2. For each active request, restate the source-project owner, scope boundary, source terms to preserve, non-goals, and adoption authority.
3. Compare the three candidate display methods already named in M23. Refine method names or split a method only if needed for clarity.
4. For each method, describe first-read hierarchy, state/basis/freshness/gap treatment, interaction/reveal behavior, narrow behavior, terminology risks, and verification expectations if later adopted.
5. Recommend one method per request, or recommend split/merge/park/return-to-project if the request needs source-project decisions before design.
6. Provide a response/adoption handoff table that source projects can use locally: request id, recommended method, source-project review needed, adoption state suggestion, and implementation-packet-ready only if appropriate.
7. Do not create target-project runways, source-project adoption records, or Dev tasks.

## Acceptance Criteria

M24 can be accepted if the artifact:

- covers all four active requests
- preserves Atlas and Sense source meanings
- keeps Lab advice Bridge -> Interface only
- compares three display methods per request or explains why one should be split/parked
- gives a clear recommendation or decision needed per request
- records risks and non-goals
- includes enough handoff shape for Atlas/Sense to accept, adapt, reject, or park locally
- does not authorize Dev work
- does not turn Lab vocabulary into target-project terms
- does not treat archived or inventory-only rows as active requests

Reject or redirect if the artifact:

- becomes a target implementation plan
- creates source-project Dev instructions
- renames Atlas or Sense terms
- treats Lab material sets as target vocabulary
- introduces new backend, bridge, IPC, payload, schema, persistence, runtime, or provider requirements
- expands beyond the four active requests

## Guardrails

- Advisory only.
- No code.
- No target-project edits.
- No Dev runway.
- No Electron smoke.
- No live/private/network access.
- Do not create source-project adoption records.
- Do not update shared protected-word JSON.
- Do not turn request intake into a backlog.
- Do not treat Lab as owner of Atlas/Sense meaning.
- Do not import Atlas Evidence doctrine into Sense.
- Do not import Sense tactical/lane semantics into Atlas.

## Stop Conditions

Stop and return to Human / Overseer if:

- a request needs source-project meaning decisions before display comparison can proceed
- a proposed method requires new source data, bridge fields, runtime behavior, or backend changes
- the work starts selecting target implementation instead of advisory comparison
- more active requests arrive and the packet would exceed manageable scope
- target-project current.md would need editing

## Verification

Required after writing the M24 artifact:

```powershell
npm.cmd run verify:all
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

No Electron smoke is required for advisory documentation.

## Parked

- SmokeFlash HTML harness.
- Display inventory scaffold.
- Durable archived request/response folder.
- Target-project adoption records.
- Target-project implementation runways.
- Sense inventory candidates not submitted as active requests.
