# Table Row Detail Drawer

Status: accepted
Material id: `mat-table-row-detail-drawer`
Schema source: `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`

## Purpose

Show dense rows with compact state/facet information while raw values, long identifiers, basis, warnings, and action/effect notes stay in a detail drawer.

## Slots

- `source-owned label`
- `primary value`
- `secondary value`
- `state label`
- `status light`
- `authority note`
- `effect note`
- `source-owned basis`
- `detail row`
- `long text block`
- `warnings`
- `gaps`
- `narrow summary`

## States

- available
- selected
- partial
- cached
- expanded
- failed
- blocked
- unavailable
- empty

## Content Lanes

- identity / label: row label or item id
- primary value: main row value
- secondary values: selected, cached, expanded, warning count
- state / availability: row status chip with text
- basis: drawer row
- freshness / age: optional row age
- coverage / known fields: present and missing row fields
- gaps: row marker and drawer list
- warnings: row marker and drawer explanation
- detail rows: raw value, basis, warning, action/effect note
- long text: drawer only
- narrow summary: row label, state, primary value, one facet

## Visual Structure

Row:

```txt
[state chip] [row label / primary value] [facet chips] [gap/warning marker] [detail affordance]
```

Drawer:

```txt
Readout Detail
- Basis
- Raw value / long identifier
- Known fields
- Gaps
- Warnings
- Action/effect note, if supplied
```

## Interaction/reveal

- Row selection and row detail are separate presentation states.
- Action readiness belongs in a distinct row/footer area.
- Sorting, filtering, selecting, and actions remain target-owned.

## Narrow Behavior

Priority order:

1. state chip
2. row label / primary value
3. one facet
4. warning/gap marker
5. detail affordance

Raw identifiers move to detail in narrow layout.

## Staged Material Needs

- 6 to 10 mixed rows
- selected/cached/expanded facets
- failed/blocked/unavailable rows
- long unbroken token
- drawer with basis, warning, and action/effect note

## Verification Minimum

- `npm.cmd run verify:all`
- dense, empty, partial, blocked, and warning row review
- long-token containment review
- narrow row collapse review
- keyboard/focus review if drawers are interactive

## Risks / Parked Notes

- Dense rows can become diagnostic-first.
- Raw fields can overtake the human read.
- Source-project sorting, filtering, selection, and action behavior are parked.

## Examples / Screenshots

None yet.
