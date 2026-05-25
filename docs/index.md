# Aura Lab Documentation

Aura Lab exists to keep the presentation layer honest while the code changes.

The authoritative implementation truth lives in `docs/current-state/`. Workspace handoffs record agent transactions and should not be rewritten as product docs during normal cleanup.

## Project Summary

Aura Lab is a portable post-bridge display mapping and presentation tooling bench.

It receives bridge-shaped or fixture-backed data and proves whether Aura can render that data in the desired desktop style with stable typography, containment, trust/freshness language, state handling, diagnostics, and visual smoke evidence.

Aura Lab is not:

- Atlas evidence doctrine
- Sense tactical doctrine
- Aura Core ownership of reusable rigging
- a durable upstream bridge contract
- a source-of-truth data model
- a target-product adapter
- a shared component library yet

## Documentation Roles

| Folder | Role |
| --- | --- |
| `current-state/` | Accepted implementation truth and milestone state. |
| `statements/` | Durable project boundary statements broader than one implementation slice. |
| `contracts/` | Stable post-bridge presentation or bridge-facing contracts, only after acceptance. |
| `testing/` | Durable verification strategy, only when broader than one milestone handoff. |
| `adr/` | Accepted architecture decisions. |
| `failures/` | Reusable failure classes worth preserving. |
| `roadmap/` | Future-facing milestone direction when a roadmap earns durable form. |
| `audits/` | Reviews or dated assessments if Aura Lab explicitly keeps them outside workspace handshakes. |
| `terms/` | Plain-language vocabulary, only when project terms become stable. |
| `schemas/` | Stable data shapes, only after Lab or Core accepts a schema boundary. |
| `research/` | Non-authoritative investigation notes. |
| `templates/` | Reusable document templates. |

Folders not listed here should not be created casually. Keep the docs surface small until the project earns more durable truth.

## Core Rules To Preserve

- Lab owns everything past the bridge: display mapping, presentation state handling, style pressure, and verification.
- Lab fixtures are test material, not product doctrine.
- `aura.projectBriefing` is provisional unless a later accepted contract says otherwise.
- Needs Attention is a Lab briefing fixture, not a shared Aura semantic.
- The renderer presents; it does not own truth.
- Source, freshness, certainty, and bridge state are presentation affordances until accepted elsewhere.
- Atlas, Sense, and Core adoption must happen through target-owned packets.
- Visual smoke evidence matters because presentation quality must be observable, not assumed.

## When To Update Docs

Update docs when the meaning changes:

- accepted project boundary
- accepted current implementation state
- stable presentation state grammar
- stable post-bridge contract
- stable verification strategy
- reusable failure lesson
- milestone direction that should outlive a handoff

Do not create docs just because normal implementation changed. For normal code slices, verification and the workspace handoff are enough unless the change alters boundary, contract, testing, or durable project meaning.

## Current Navigation

Start here:

- `README.md`
- `docs/README.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `workspace/overview.md`

For current work, use `workspace/current.md` as the executable packet.

## Deprecated Gap Workflow

Aura Lab does not use the deprecated gap task-file workflow. Treat any archived gap-style records as historical context only unless `workspace/current.md` explicitly references them.
