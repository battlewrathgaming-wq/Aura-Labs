# Source / Basis Coverage Marker

Status: pending
Material id: `mat-source-basis-coverage-marker`
Schema source: `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md`

## Purpose

Show compact coverage or basis completeness without implying that display coverage is source authority.

## Slots

- `status light`
- `source coverage`
- `known fields`
- `readout basis`
- `source-owned basis`
- `gaps`
- `warnings`
- `cap marker`
- `detail reveal`
- `narrow summary`

## States

- full
- partial
- missing
- unavailable
- capped
- warning

## Content Lanes

- identity / label: coverage label or compact legend
- primary value: count or short coverage phrase
- secondary values: known fields, unavailable items, capped count
- state / availability: full/partial/missing/capped treatment
- basis / source-owned placeholder: basis present or owner/layer placeholder
- freshness / age: optional last read when coverage is time-sensitive
- coverage / known fields: available count and known/missing field list
- gaps: missing basis or fields
- warnings: coverage caveat or capped/sample caution
- detail rows: coverage breakdown
- long text: owner/layer note only when needed
- narrow summary: compact count plus state

## Interaction / Reveal

The compact marker should show count/state and use detail reveal for the breakdown. Pips, chips, or short rails are acceptable if labels/counts make the meaning non-color-only.

## Narrow Behavior

Reduce to count plus short label, such as `2/3` plus `Partial`, with detail available nearby. Avoid decorative unlabeled pips in narrow shells.

## Staged Material Needs

- full coverage
- partial coverage
- missing coverage
- unavailable coverage
- capped coverage
- warning coverage note

## Verification Minimum

- `npm.cmd run verify:all`
- non-color-only marker
- label/count visible in narrow shell
- detail breakdown available
- copy check for source/basis authority overclaim

## Risks / Parked Notes

- `source` can imply authority if not display-scoped.
- Coverage can be mistaken for completeness of upstream meaning.
- Pips can become decorative if not labeled or counted.

## Examples / Screenshots

None yet.
