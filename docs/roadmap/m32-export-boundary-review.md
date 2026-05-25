# M32 - Export Boundary Review

Status: Complete

## Outcome

Decide what must split, harden, or remain Lab-local before any Lab renderer/head or display material is offered for target-project consumption.

## Likely Runways

- Review SmokeFlash placement against ADR 0001.
- Identify which presentation parts can travel cleanly.
- Identify which harness/workshop parts must stay Lab-only.
- Reconfirm that target projects own adapters under ADR 0002.
- Produce an export-readiness recommendation.

## Acceptance Criteria

M32 is complete when:

- SmokeFlash split requirements are explicit
- the offered presentation surface is separated from workshop tooling in decision language
- target-owned adapter boundaries are reaffirmed
- export/seeding is either authorized for a later packet or remains parked with clear reasons
- no target-project implementation is started from Lab

## Non-Goals

- performing the split unless a later Dev runway explicitly opens it
- target-project adoption
- shared runtime contract creation
- broad Core extraction

## Dependencies

- accepted composed output or strong enough material surface to justify export review
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

## Activation

Activated by HS129 after M31 accepted two non-TTL Lab-local material prototypes. M32 is advisory and does not authorize split/export implementation.

## Closure

Closed accepted in HS130. Primary accepted recommendation: open a composed display output milestone before split/export work.
