# Warning / Gap Edge

Status: accepted
Material id: `mat-warning-gap-edge`
Schema source: `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`

## Purpose

Show gaps and warnings without turning the whole surface into an alarm.

## Slots

- `gaps`
- `warnings`
- `known fields`
- `cap marker`
- `availability note`
- `status light`
- `detail reveal`
- `narrow summary`

## States

- partial
- warning
- blocked
- missing
- capped
- unavailable

## Content Lanes

- identity / label: warning or gap marker label
- primary value: count or short warning/gap phrase
- secondary values: gap count, warning count, capped/sample note
- state / availability: muted caution/partial state
- gaps: count in primary surface, list in detail
- warnings: marker in primary surface, explanation in detail
- detail rows: gap list and warning explanation
- narrow summary: count plus detail path

## Visual Structure

```txt
[muted edge or marker] [gap/warning count] [short label] [detail affordance]
```

This material should support cards, rows, strips, and bands.

## Interaction/reveal

- Primary surface shows count or short label.
- Detail reveal holds the full explanation.
- Marker must not require color alone.

## Narrow Behavior

Keep:

1. marker
2. count
3. short label
4. detail path

Move long explanation to detail.

## Staged Material Needs

- one warning
- multiple warnings
- one gap
- multiple gaps
- capped/partial case
- long warning explanation

## Verification Minimum

- `npm.cmd run verify:all`
- non-color-only status review
- narrow marker/count review
- long warning containment review

## Risks / Parked Notes

- Warning may be display caution rather than source error.
- Project-specific severity rules remain parked.
- Avoid alarm-heavy styling unless a future packet explicitly opens it.

## Examples / Screenshots

None yet.
