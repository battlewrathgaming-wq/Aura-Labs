# M33 - Composed Display Output

Status: Complete

## Outcome

Define the first reusable Lab composed display output from accepted materials.

This milestone should turn accepted ingredients into one coherent output reference without treating the current SmokeFlash/material harness as the product surface.

## Why This Is Milestone-Sized

M31 accepted multiple individual material prototypes. M32 found that export/split readiness would be clearer after Lab has an accepted combined output reference.

M33 should answer what a reusable Lab display actually looks like when materials work together.

## Likely Runways

- Select accepted materials that naturally compose.
- Define the output purpose, slots, states, view intent, interaction path, and narrow behavior.
- Use accepted materials instead of inventing a broad new surface.
- Identify which parts remain Lab-local support versus product-facing display structure.
- Record the output in `workspace/display-outputs/` only after acceptance.

## Acceptance Criteria

M33 is complete when:

- one composed display output is accepted, adapted, or parked with clear rationale
- the output uses accepted material pages as ingredients
- the output has a clear Lab-local display use
- state, basis, freshness, availability, gaps/warnings, and detail behavior remain readable
- the output stays target-agnostic
- target-project adoption remains a separate source-project decision
- no target adapter, export/seeding, SmokeFlash split, or bridge/runtime contract is introduced

## Non-Goals

- implementation before output shape acceptance
- Atlas/Sense implementation
- target adapters
- source-project term ownership
- export/seeding
- SmokeFlash split
- broad renderer security review

## Dependencies

- M31 accepted material prototypes
- M32 export-boundary review
- `workspace/display-materials/`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/`

## Closure

Closed accepted in HS132.

Accepted output:

- `workspace/display-outputs/instrument-readout-panel.md`

Next recommended step: a bounded Lab-local Dev prototype for the Instrument Readout Panel, with no export, split, target adapter, or bridge/runtime contract work.
