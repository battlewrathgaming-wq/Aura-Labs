# M31 - Display Material Repeat Cycle

Status: Active

## Outcome

Use the accepted display-material library and gathered UI/UX references to produce a small batch of reusable Lab display materials without turning each material into a separate milestone.

M31 should build breadth after M29/M30 hardened the presentation head. The goal is visible presentation material, not support tooling, target adapters, export readiness, or shared doctrine.

## Why This Is Milestone-Sized

Lab now has:

- accepted material pages
- a material ledger
- a visible TTL Strip prototype
- presentation-head support for view intent, detail reveal, row facets, overflow, lazy visual treatment, and reduced motion

The next useful outcome is to expand the material library through guided UI/UX shaping first, then choose the strongest candidates for implementation.

## Likely Runways

- Start with a guided UI/UX expansion pass over gathered suggestions and references.
- Promote strong candidates into pending material pages and ledger rows.
- Use `mat-expandable-status-card` as a likely near prototype, but do not force it before the guided pass lands.
- Use `mat-warning-gap-edge` as a support pattern where warnings/gaps need compact treatment.
- Keep each Dev packet bounded to one material or one closely related pair.
- Update canonical material pages and ledger only when acceptance changes their status or examples.
- Park weak or unclear candidates without forcing them into implementation.

## Acceptance Criteria

M31 is complete when:

- at least two non-TTL material prototypes have been accepted, adapted, or parked with clear rationale
- each accepted prototype remains tied to its canonical material page
- the ledger can direct a future worker to the material without rereading milestone history
- acceptance criteria remain consistent across the batch
- workshop tooling stays support-only
- no target-project adapter, source-project meaning, export/seeding, or bridge/runtime contract is introduced

## Non-Goals

- target-project adapter work
- composed display output work unless explicitly opened after material acceptance
- export/seeding
- SmokeFlash split
- broad workflow refactor
- broad visual-smoke matrix
- source-project terminology or semantics

## Dependencies

- M29 accepted proving-bench rules
- M30 reduced-motion gate
- stable material library structure
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/`
