# Trace Impression Context

Status: Minimum Lab-local pilot context

This file anchors the portable Trace Impression workflow in Aura Lab.

This is not complete Lab context. It is the minimum context needed for the first `\` pilot against the Lab presentation head bridge/import boundary.

Trace Impression maps are orientation aids. They do not create project authority, Dev authorization, target adoption, source-project meaning, or architecture approval.

## Project Purpose

Aura Lab develops portable post-bridge display mapping and presentation tooling.

Lab's role is to make bridge-shaped information easier to present, inspect, and reuse without owning target-project source meaning.

For Trace Impression, Lab provides the lens and scaffold. The project using the lens owns the trace it produces.

## Current Pilot Scope

Pilot domain:

```txt
Presentation glass / static starter / portable presentation starter.
```

Pilot seam:

```txt
Lab presentation head bridge/import boundary.
```

First pilot question:

```txt
Can a local seam trace produce a useful claimable seam card for the Lab presentation head bridge/import boundary?
```

## Main Domains And Pipelines

Minimum domains for this pilot:

- presentation glass / static starter
- portable presentation primitives
- static verification surface
- Lab documentation and accepted handoffs that define the presentation boundary

Parked for later:

- full Lab domain catalog
- Pane Board tooling traces
- SmokeFlash/workshop traces
- target-project adapter traces
- Atlas/Sense/Core local context
- runner or automation behavior

## Project-Owned Terms

For this pilot, Lab-owned presentation terms include:

- display material
- display boundary
- display seam
- display segment
- display readout
- display marker
- display row
- display drawer
- display grid
- display motion
- display sizing
- presentation glass
- portable presentation starter

These are Bridge -> Interface / presentation vocabulary only.

They do not define:

- target source meaning
- target state enums
- adapter constants
- runtime behavior
- product surfaces
- adoption requirements

## Source Folders To Prefer

For the first pilot, prefer:

- `portable-presentation-starter/`
- `scripts/`
- `src/main/`
- `src/renderer/`
- `docs/statements/`
- `docs/adr/`
- `workspace/`
- `package.json`

Use `workspace/current.md` as the current seam source.

Use `workspace/overview.md` as surrounding terrain, not primary proof.

Use accepted handoffs only when they are needed to understand the current seam or accepted state.

## Folders To Avoid Or Treat Carefully

Avoid or treat carefully:

- `workspace/complete/`
- `workspace/archive/`
- `workspace/trace-impression/history/`
- generated smoke output
- generated screenshot/capture output
- temporary files
- target-project folders outside this repository

Historical and archived files may explain how a decision was reached, but they are not active work queues.

## Live / Private Boundaries

The first pilot must not use:

- live/private/network work
- clipboard access
- operator-local private paths
- target-project runtime
- remote assets
- provider/API calls
- Electron runtime behavior unless source or verification evidence was inspected

Do not claim runtime security approval, manual validation, browser inspection, or Electron behavior unless the run explicitly inspected evidence for that layer.

## Citation / Proof Expectations

Default citation shape:

```txt
file path | symbol/section | observed fact | supports claim because
```

Supported claims require citations or explicit basis labels.

Required basis labels:

- `code-observed`
- `doc-stated`
- `accepted-state`
- `human-context`
- `inferred`
- `not-found`
- `not-mapped`
- `not-inspected`

Do not present `inferred`, `not-found`, `not-mapped`, or `not-inspected` as verified.

Missing links are findings.

Not-proven claims are findings.

If a layer was not inspected, say so.

## Usual Verification Commands

Default verification command:

```txt
npm.cmd run verify:all
```

Run additional verification only when a current packet explicitly asks for it.

## Rerun / Investigation Policy

Default:

```txt
Use the current Project-Local Operational Map as baseline.
Rerun only for material source/focus change, stale or disputed map, material source gap, Human/Overseer refresh request, or Human sync basis.
```

Project-specific rerun triggers for this pilot:

- `workspace/current.md` changes the seam focus
- presentation starter source changes materially
- accepted presentation boundary documentation changes
- the local map is disputed or stale
- a material source gap is identified
- Human or Overseer asks for refresh

Investigation mode:

```txt
Allowed only when the active packet explicitly needs repeated focused traces.
Human map sync waits for a meaningful landing.
```

## Output Paths

Project-Local Operational Map:

```txt
workspace/trace-impression/current/project-local-operational-map.md
```

Run log:

```txt
workspace/trace-impression/current/run-log.md
```

Central Human Orientation Map:

```txt
Parked for this pilot.
```

Reason:

The first useful proof should be local seam-card behavior. Human map sync should wait until a local map has enough basis.

## Local Validation Owner

Validation owner:

```txt
Human / Lab Overseer
```

Dev, specialists, and future tooling may provide evidence, but they do not accept Trace Impression output as project authority.

## Must Never Infer

Do not infer:

- target adoption
- target adapter correctness
- source-project meaning
- target-project state labels
- runtime security approval
- Electron behavior beyond cited source or verification evidence
- Atlas/Sense/Core compatibility
- package/export readiness beyond cited files
- Human vision as accepted project state
- advisory input as project authority
- architecture approval from a map
- Dev authorization from a map

## Command Boundaries

`\` local seam trace:

- project-local only
- source-cited
- produces or updates the local operational map
- no central Human map write
- no source edits
- no Dev runway
- no project authority change

`|` Human orientation sync:

- broader Human orientation view
- requires enough local basis
- must preserve basis labels
- must not promote certainty
- parked for this first pilot until a useful local map exists

Core distinction:

```txt
The map's authority comes from accuracy of display, not decision power.
```
