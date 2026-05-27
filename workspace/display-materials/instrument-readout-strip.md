# Instrument Readout Strip

Status: pending
Material id: `mat-instrument-readout-strip`
Schema source: Human/UIUX presentation scouting feedback, 2026-05-27

## Purpose

Show one compact readout in a horizontal strip: label, primary value, state marker, basis, freshness, and one warning or gap edge.

This material helps a user understand what the readout says now and whether it can be used casually, cautiously, or not at all.

## Slots

- `readout label`
- `primary value`
- `state marker`
- `readout basis`
- `readout age`
- `freshness`
- `warning-gap edge`
- `detail reveal`
- `narrow summary`

## States

- current
- updating
- aged
- partial
- unavailable
- blocked
- empty

## Content Lanes

- identity / label: short display label
- primary value: one dominant value or absence phrase
- state / availability: text state plus marker
- basis: compact basis cue
- freshness / age: last read or age cue
- gaps: count or edge marker when active
- warnings: short edge label when active
- detail rows: basis, freshness, gaps, warnings
- narrow summary: label, value, state, one age/basis cue

## Visual Structure

```txt
[label] [primary value] [state marker] [basis] [freshness] [gap/warning edge]
```

The strip should read as one instrument, not a row of unrelated chips.

## Interaction / Reveal

- The strip should work without interaction.
- Detail reveal may show why the basis, age, gap, or warning marker is present.
- The reveal must remain secondary to the first read.

## Narrow Behavior

Keep:

1. label
2. primary value
3. state marker
4. one basis or age cue
5. active warning/gap marker

Move longer basis, freshness explanation, and warning text to detail.

## Staged Material Needs

- current readout
- updating readout
- aged readout
- partial readout with gap edge
- unavailable readout
- long label
- long primary value

## Verification Minimum

- `npm.cmd run verify:all`
- state marker is not color-only
- long label and value containment review
- narrow strip review
- warning/gap edge remains readable without becoming the primary value

## Risks / Parked Notes

- A strip can become too dense if basis and freshness compete with the primary value.
- State markers must not imply source-project certainty or complete coverage.
- Live update animation remains parked until a separate motion material exists.

## Examples / Screenshots

None yet.

