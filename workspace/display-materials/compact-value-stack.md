# Compact Value Stack

Status: pending
Material id: `mat-compact-value-stack`
Schema source: Human/UIUX presentation scouting feedback, 2026-05-27

## Purpose

Show three to five related values as a small stack with one dominant value and quieter supporting values.

This material helps a user understand that several facts belong together, but one matters most.

## Slots

- `parent label`
- `primary value`
- `support value`
- `derived value`
- `value label`
- `state marker`
- `freshness marker`
- `basis cue`
- `gap marker`
- `narrow summary`

## States

- current
- aged
- partial
- capped
- unavailable
- warning

## Content Lanes

- identity / label: parent label or group label
- primary value: dominant value at the top or left
- secondary values: two to four supporting values
- state / availability: per-stack or per-value marker
- basis: optional compact cue
- freshness / age: optional shared age or per-value cue
- gaps: missing value marker
- warnings: stack-level or value-level marker
- detail rows: value meanings and caveats
- narrow summary: primary value plus one or two support values

## Visual Structure

```txt
[parent label]
[primary value]
[support value] [support value] [derived/quiet value]
```

The stack should avoid a flat row when one value clearly gives meaning to the rest.

## Interaction / Reveal

- The stack should be scannable without interaction.
- Detail reveal may explain derived values, capped values, or missing values.
- Do not make it sortable or table-like by default.

## Narrow Behavior

Preserve the parent/primary relationship. Collapse lower-priority support values before separating the primary value from its parent label.

## Staged Material Needs

- one primary plus two support values
- one primary plus four support values
- derived value
- missing support value
- capped support value
- long value label

## Verification Minimum

- `npm.cmd run verify:all`
- primary/support hierarchy review
- label/value containment review
- narrow stacking review
- non-color-only state markers

## Risks / Parked Notes

- Mixed values can imply equal authority if hierarchy is weak.
- Derived values can become too loud if styled like source values.
- This material differs from Compact Value Rail: use the stack when parent/child meaning is important; use the rail when values are peer-like and linear.

## Examples / Screenshots

None yet.

