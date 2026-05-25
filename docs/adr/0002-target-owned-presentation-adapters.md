# ADR 0002 - Target-Owned Presentation Adapters

Date: 2026-05-25
Status: Accepted

## Context

Aura Lab develops portable post-bridge presentation materials and may later offer a clean renderer/head for other Aura projects to adopt.

Atlas, Sense, and future target projects own their internal meaning, source terms, runtime behavior, data authority, and bridge emission. Lab owns only Bridge -> Interface presentation language and display mechanics after source meaning is preserved.

M27 also clarified that Lab workshop tooling such as SmokeFlash must be split before renderer export/seeding.

## Decision

Target projects must develop and own their own adapters.

Lab may provide:

- reusable display materials
- presentation grammar
- clean renderer/head candidates
- examples of how source-owned terms can be preserved in a display
- advisory comparison of possible Bridge -> Interface treatments

Lab must not provide or own:

- Atlas/Sense internal -> Bridge mappings
- target-project adapter implementations as Lab authority
- source-project data semantics
- target runtime behavior
- target navigation or product doctrine
- target acceptance/adoption decisions

## Adapter Boundary

The target-owned adapter is the layer that connects:

```txt
source-project bridge output -> clean Lab presentation head
```

The adapter should translate target-owned bridge output into the clean presentation head's expected display input while preserving the source project's meaning.

The adapter belongs in the target project unless Human explicitly opens a different ownership packet.

## Why

This keeps Lab portable without becoming a source-project authority.

It also prevents accidental doctrine drift:

- Atlas keeps Evidence, Discovery, Watch, Marked, provenance, storage, and renderer semantics.
- Sense keeps Combat Witness, Passive Telemetry, Threat Intel, Clipboard Acquisition, Live IO, sample/freshness states, and lane semantics.
- Lab keeps slim product-agnostic display language for Lab-owned defaults.

Shared spelling does not imply shared meaning.

## Consequences

Before a target project adopts Lab presentation work:

1. Lab must provide a clean presentation head or material pattern.
2. SmokeFlash/workshop tooling must be absent from the exported renderer/head.
3. The target project must create its own adapter or adoption layer.
4. The target project must review and accept the result locally.
5. Implementation must happen through the target project's own executable packet.

Lab may advise, compare, or prototype with neutral material, but the target project owns final meaning and adoption.

## Non-Goals

- Do not create a universal Aura adapter.
- Do not create a shared bridge contract from Lab material schemas.
- Do not make Lab the owner of Atlas or Sense terms.
- Do not treat Lab request or response artifacts as implementation authorization.
- Do not make Central Orchestration the owner of target-project display meaning.

## Related Decisions

- `docs/adr/0001-smokeflash-split-timing.md`

