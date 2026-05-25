# Compact Value Rail

Status: pending
Material id: `mat-compact-value-rail`
Schema source: `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md`

## Purpose

Display a small set of labeled values in a stable rail: counts, age, coverage, warning count, capped sample note, or short secondary values.

## Slots

- `readout label`
- `primary value`
- `secondary value`
- `readout age`
- `source coverage`
- `known fields`
- `sample note`
- `cap marker`
- `warnings`
- `gaps`
- `narrow summary`

## States

- current
- aged
- partial
- capped
- warning
- fallback
- unavailable

## Content Lanes

- identity / label: rail label or parent label
- primary value: main count/value
- secondary values: small labeled metrics
- state / availability: optional chip or state facet
- basis / source-owned placeholder: short basis/cap note
- freshness / age: last read or aged marker
- coverage / known fields: available/expected count
- gaps: missing count or unavailable value
- warnings: warning count or marker
- detail rows: value meanings and owner/layer notes
- long text: not primary; detail only
- narrow summary: top two values plus age/warning if relevant

## Interaction / Reveal

The rail should be scannable without interaction. Detail reveal can explain units, capped values, or source-owned placeholders. It should not become a sortable table or product control.

## Narrow Behavior

Stack into two-column pairs or a one-line summary. Labels and units must remain adjacent to values. Values should not shift layout as numbers change.

## Staged Material Needs

- three to five mixed values
- age value
- coverage value
- capped value
- warning count
- unavailable value

## Verification Minimum

- `npm.cmd run verify:all`
- stable rail dimensions
- label/unit containment
- narrow stacking
- capped/sample wording qualification
- reduced-motion fallback if numeric transitions are used

## Risks / Parked Notes

- Mixed values can imply equal authority if labels are weak.
- Counts can imply completeness unless coverage/cap is nearby.
- Numeric motion can become distracting without reduced-motion fallback.

## Examples / Screenshots

None yet.
