# M30 - Presentation Resilience Gate

Status: Complete

## Outcome

Add a small presentation resilience gate to the Lab renderer so the presentation head remains readable when motion should be reduced.

This is a product-facing quality slice, not a workshop/tooling milestone. It follows M29 because the presentation head now has enough view, slot, reveal, lazy, facet, and overflow behavior that reduced-motion support can be meaningful and bounded.

## Why This Is Milestone-Sized

M29 added multiple renderer-local presentation behaviors. M30 should make those behaviors safer before Lab expands into more expressive motion, export readiness, or broader material cycles.

The milestone is intentionally small:

- respect reduced-motion preference
- keep Summary / Basis / Details comprehensible without animation
- keep reveal, detail, lazy visual, facets, and overflow behavior readable
- verify the gate without broadening into a visual-smoke matrix

## Likely Runway

- Inventory current transitions, reveal behavior, lazy visual behavior, and any motion-like UI treatment.
- Add a renderer-local reduced-motion gate using browser/user preference where practical.
- Ensure the presentation remains readable when motion is reduced.
- Add focused verification to the renderer shell or existing verification path.
- Run normal Lab verification and Electron smoke because visible CSS/interaction behavior may change.

## Acceptance Criteria

M30 is complete when:

- reduced-motion handling exists for relevant presentation behaviors
- the gate does not create new visible product language unless needed
- Summary / Basis / Details remain stable and readable
- reveal/detail/lazy/overflow behavior remains comprehensible without animation
- verification covers the reduced-motion path
- SmokeFlash remains hidden/gated support tooling
- no target-project adapter, source-project meaning, export/seeding, or bridge/runtime contract is introduced

## Non-Goals

- broad animation redesign
- new expressive view intent
- virtualized list helper
- Lab fixture adapter
- renderer split/export
- target-project adapters
- source-project terminology or semantics
- broad visual-smoke matrix

## Dependencies

- M29 close/readiness review
- H17 Reduced-Motion Gate from the future candidate bank
- ADR 0001 SmokeFlash split timing
- ADR 0002 target-owned presentation adapters
