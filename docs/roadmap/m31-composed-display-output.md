# M31 - Composed Display Output

Status: Candidate

## Outcome

Combine accepted individual materials into one reusable display output reference.

This milestone should prove how Lab materials work together as a larger presentation surface while remaining product-agnostic and post-bridge.

## Likely Runways

- Select accepted materials that naturally compose.
- Define the output purpose, slots, states, and interaction path.
- Build or specify a bounded composed display reference.
- Verify layout, text containment, state clarity, and detail behavior.
- Record the output in `workspace/display-outputs/` only after acceptance.

## Acceptance Criteria

M31 is complete when:

- the composed output uses accepted materials rather than inventing a new broad surface
- the output has a clear display use
- state and detail behavior remain readable
- the output stays target-agnostic
- target-project adoption remains a separate source-project decision

## Non-Goals

- Atlas/Sense implementation
- target adapters
- source-project term ownership
- export/seeding
- broad renderer split unless it becomes a blocker

## Dependencies

- accepted individual materials from M26/M28 or a future material-repeat cycle
- a clear Human or UI/UX reason to compose them
- `workspace/display-outputs/` structure
