# Progressive Detail Drawer

Status: pending
Material id: `mat-progressive-detail-drawer`
Schema source: Human/UIUX presentation scouting feedback, 2026-05-27

## Purpose

Let a compact readout stay calm while still giving the user a nearby way to inspect basis, freshness, known fields, gaps, warnings, long text, or diagnostics.

This material helps a user understand that the summary is enough for the first read, but detail is available when needed.

## Slots

- `summary label`
- `summary value`
- `state marker`
- `detail affordance`
- `basis row`
- `freshness row`
- `known fields row`
- `gaps row`
- `warnings row`
- `long text block`
- `diagnostic row`
- `narrow summary`

## States

- closed
- open
- current
- aged
- partial
- unavailable
- blocked
- warning

## Content Lanes

- identity / label: summary label or source-owned display label
- primary value: compact summary
- state / availability: state marker in closed surface
- basis: row in drawer
- freshness / age: row in drawer
- coverage / known fields: row in drawer
- gaps: marker in closed surface, list in drawer
- warnings: marker in closed surface, explanation in drawer
- detail rows: structured support rows
- long text: controlled body block inside drawer
- narrow summary: closed summary plus one active marker

## Visual Structure

Closed:

```txt
[summary label] [summary value] [state marker] [detail affordance]
```

Open:

```txt
Readout detail
- Basis
- Freshness
- Known fields
- Gaps
- Warnings
- Notes or long text
```

## Interaction / Reveal

- The drawer must be clearly separate from navigation or source-project actions.
- One drawer open at a time is preferred for dense layouts.
- Keyboard and focus behavior matter if this becomes interactive.

## Narrow Behavior

Closed state should stay compact. Open drawer may stack rows vertically, with long text contained and scroll-free when possible.

## Staged Material Needs

- closed summary
- open detail
- long warning
- long basis text
- partial with gaps
- unavailable with reason
- narrow open drawer

## Verification Minimum

- `npm.cmd run verify:all`
- closed/open visual review
- focus/keyboard review if interactive
- long text containment review
- narrow drawer review

## Risks / Parked Notes

- Nested drawers are parked.
- Editable diagnostics are parked.
- Target-project actions are parked.
- Detail can become first-read clutter if the closed surface does not remain strong.

## Examples / Screenshots

None yet.

