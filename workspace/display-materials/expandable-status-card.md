# Expandable Status Card

Status: accepted
Material id: `mat-expandable-status-card`
Schema source: `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`

## Purpose

Show a compact status card with first-read label/value/state and an attached detail reveal for basis, age, gaps, warnings, and source-owned notes.

## Slots

- `source-owned label`
- `primary value`
- `secondary value`
- `state label`
- `status light`
- `readout age`
- `readout basis`
- `source-owned basis`
- `availability note`
- `warnings`
- `gaps`
- `detail reveal`
- `detail row`
- `narrow summary`

## States

- current
- partial
- stale
- not-loaded
- unavailable
- blocked
- empty
- fallback

## Content Lanes

- identity / label: card title or source-owned label
- primary value: count, short state, or displayable value
- secondary values: age, count, or availability cue
- state / availability: text state plus status light/chip
- basis: one-line cue in card, longer basis in detail
- freshness / age: last read, stale/not-loaded, fallback age
- gaps: count marker in card, list in detail
- warnings: muted marker in card, explanation in detail
- detail rows: basis, availability, gaps, warnings, source-owned note
- narrow summary: label, state, value, one age/basis cue

## Visual Structure

Closed:

```txt
[label]                         [state chip]
[primary value]
[age or basis cue]              [gap/warning marker]
[detail affordance / route hint if supplied]
```

Open:

```txt
Readout Detail
- Basis
- Availability
- Gaps
- Warnings
- Source-owned note
```

## Interaction/reveal

- Detail reveal is separate from route/navigation.
- Route hints are neutral placeholders unless source-owned routes exist.
- Open detail must not bury neighboring cards in narrow stacks.

## Narrow Behavior

Priority order:

1. label
2. state chip/status light
3. primary value
4. readout age or availability cue
5. warning/gap marker
6. detail affordance

## Staged Material Needs

- four-card set with mixed availability
- long source-owned label
- stale/not-loaded state
- warning/gap marker
- route/reveal split placeholder

## Verification Minimum

- `npm.cmd run verify:all`
- closed/open/warning/unavailable/narrow visual review
- keyboard/focus review if reveal is interactive
- text containment review for long label, basis, and warning

## Risks / Parked Notes

- Card parity can imply equal meaning across unlike source-owned concepts.
- Detail can become product doctrine if copied too heavily.
- Target-project routes and adoption are parked.

## Examples / Screenshots

None yet.
