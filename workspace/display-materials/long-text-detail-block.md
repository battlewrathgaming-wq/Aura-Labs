# Long Text Detail Block

Status: pending
Material id: `mat-long-text-detail-block`
Schema source: `workspace/UIUXHS123-guided-display-material-expansion.md`

## Purpose

Provide a reusable detail-body treatment for fuller content: long readout basis text, warning explanations, gap lists, source paths, paragraphs, and long unbroken tokens.

## Slots

- `readout label`
- `readout basis`
- `source-owned basis`
- `detail row`
- `long text block`
- `warnings`
- `gaps`
- `availability note`
- `narrow summary`

## States

- current
- partial
- aged
- fallback
- unavailable
- blocked / source-owned placeholder

## Content Lanes

- identity / label: short heading for the detail body
- primary value: optional parent value repeated only when useful
- secondary values: row labels and short notes
- state / availability: parent state plus one reason line
- basis / source-owned placeholder: long basis and qualified owner/layer placeholders
- freshness / age: last read or fallback age when relevant
- coverage / known fields: fields present and missing
- gaps: list or grouped rows
- warnings: paragraph or row explanation
- detail rows: key/value rows, lists, paths, and long identifiers
- long text: paragraph body, warning explanation, path-like values
- narrow summary: one short line that points to fuller detail

## Interaction / Reveal

This material belongs behind a detail reveal or drawer. Parent surfaces should show only a short cue. The detail body should open predictably, preserve focus behavior, and keep long content from pushing primary state/value out of first read.

## Narrow Behavior

Narrow shells should keep a compact summary first, then stack long text below. Long unbroken tokens must wrap or break safely. The detail body should not create horizontal overflow.

## Staged Material Needs

- long paragraph
- long unbroken token
- path-like value
- warning explanation
- grouped gap list
- source-owned placeholder note

## Verification Minimum

- `npm.cmd run verify:all`
- long paragraph containment
- long-token containment
- narrow layout review
- keyboard/focus review if reveal is interactive
- reduced-motion check if reveal transition is animated

## Risks / Parked Notes

- Long copy can become product doctrine if source-owned wording is copied as Lab default.
- Detail surfaces can dominate the first read if opened by default everywhere.
- Source/basis language needs owner/layer qualification when source-owned placeholders appear.

## Examples / Screenshots

None yet.
