# UIUXHS99 - HS97 View Polish Advisory

Status: Advisory accepted by Human for next runway shaping
Date: 2026-05-25
Role: UI/UX advisor

## Current Visual Assessment

`Summary / Basis / Details` feels like the right visible segmented switch. It is simple, slim, and maps to real user intent:

- Summary: what is happening?
- Basis: what is this readout based on?
- Details: inspect deeper.

The Basis rail is useful and readable. In the Basis screenshot, it now feels like a real presentation feature rather than a hidden diagnostic. It is calm, compact, and visibly tied to Lab's value: showing basis, freshness, coverage, gaps, and warnings without stronger-claim language.

The rail is in the right place now: before the state band/readout body. That placement makes the Basis view's purpose visible in the first slice.

## Label Assessment

`Freshness`, `Coverage`, and `Gaps / warnings` are acceptable Lab-visible labels for this slice. They match existing Lab vocabulary and avoid Atlas/Sense imports.

Do not promote them to durable key terms yet.

`Gaps / warnings` is accurate but visually a little heavy because of the slash. It is acceptable for now, but a polish pass may test whether the rail reads better as `Gaps` with warnings represented by a marker or count nearby.

`Basis` is doing double duty as both view tab and rail item. That is acceptable, but it is also the one place where the UI could feel repetitive. Not a blocker.

## Layout And Hierarchy Assessment

The current structure is sound:

- top identity and readout state stay stable
- segmented switch is clear and restrained
- Basis rail appears close enough to the switch to feel related
- Details view keeps the rail secondary and shifts emphasis toward inspection
- diagnostics are not becoming the main product surface

The visual risk is density similarity. The top readout status tiles, segmented switch, Basis rail tiles, and readout body all use similar boxed language. It still reads, but the next polish should make the rail feel more like an instrument strip and less like another row of cards.

## Recommended Next Move

Smallest next useful slice: polish current views.

Do not add another expressive view yet. The view axis is right, and the Basis rail is promising, but the presentation head would benefit more from one small visual refinement pass before adding more modes.

Do not pause M29 yet.

Do not start split readiness yet. The head is improving, but it needs a little more product-facing polish first.

## Acceptance Criteria For Next Slice

- Summary, Basis, and Details remain the only visible view options.
- Basis rail remains before the readout body.
- Basis view gives the rail clear priority without making Summary or Details feel broken.
- Rail styling becomes more instrument-like: less card-row, more compact status/basis strip.
- Freshness, Coverage, and Gaps / warnings remain accepted visible labels, but are not promoted to durable key terms.
- No source-project meaning is imported.
- No new bridge/runtime contract, target adapter, export path, or split work.
- Existing three screenshots still pass: summary-first, basis, details.
- Visual review confirms the first screen reads faster, not just more decorated.

## Parked Items

- another expressive view
- split readiness
- target-project adapters
- export/seeding
- durable key-term promotion for these labels
- broad visual-smoke matrix expansion
- diagnostics-first work
- Atlas/Sense-specific presentation claims
- major palette/material redesign

## Short Read

M29 is on the right track. The next move should be a restraint-and-craft pass, not a feature expansion.
