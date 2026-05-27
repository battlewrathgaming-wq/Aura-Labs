# Freshness / Basis Rail

Status: pending
Material id: `mat-freshness-basis-rail`
Schema source: Human/UIUX presentation scouting feedback, 2026-05-27

## Purpose

Keep basis and last-read information visible beside or above a main readout without making support information louder than the readout itself.

This material helps a user understand where the readout came from and how old it is.

## Slots

- `basis label`
- `last read`
- `freshness state`
- `availability state`
- `coverage count`
- `gap marker`
- `warning marker`
- `detail reveal`
- `narrow summary`

## States

- current
- aged
- unknown
- partial
- unavailable
- blocked

## Content Lanes

- identity / label: basis or freshness label
- primary value: age, last-read cue, or basis phrase
- secondary values: coverage count, availability cue
- state / availability: current/aged/unknown/blocked
- basis: compact display basis
- freshness / age: last read or age cue
- coverage / known fields: optional count
- gaps: marker when basis is incomplete
- warnings: muted marker when active
- detail rows: basis explanation, age detail, coverage detail
- narrow summary: one age/basis cue plus marker

## Visual Structure

```txt
[basis] [last read / age] [coverage] [gap/warning marker]
```

The rail may be horizontal or vertical. It should feel attached to the readout it qualifies.

## Interaction / Reveal

- Rail labels should be readable without opening detail.
- Detail reveal may explain source-owned basis, age, coverage, or warning context.
- Avoid deep lineage or proof-style language.

## Narrow Behavior

Collapse to one compact cue:

```txt
[basis or age] [marker]
```

Keep detail reachable nearby.

## Staged Material Needs

- current basis
- aged basis
- unknown basis
- partial coverage
- unavailable basis
- blocked basis

## Verification Minimum

- `npm.cmd run verify:all`
- rail stays visually secondary to the main readout
- age/basis labels remain non-color-only
- narrow cue remains understandable
- copy review for source/basis overclaim

## Risks / Parked Notes

- Basis can sound like source authority if not display-scoped.
- Multi-provider comparison and deep lineage remain parked.
- This material overlaps with Source / Basis Coverage Marker; use this rail when the emphasis is persistent support context, not only coverage completeness.

## Examples / Screenshots

None yet.

