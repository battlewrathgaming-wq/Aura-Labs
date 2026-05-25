# Instrument Readout Panel

Status: accepted
Output id: `output-instrument-readout-panel`
Source advisory: `workspace/complete/milestone-M33/UIUXHS131-composed-display-output-advisory.md`

## Purpose

Provide one compact Lab-local composed display for a post-bridge readout.

The panel presents readout identity, state, primary value or absence state, freshness, readout basis, availability reason, warnings/gaps, and long detail content behind reveal.

This is a reusable Lab display reference, not a bridge/runtime payload contract and not a target-project adapter.

## Ingredients

- status / state band behavior
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/warning-gap-edge.md`

Not required for the first output:

- `workspace/display-materials/source-basis-coverage-marker.md`
- `workspace/display-materials/compact-value-rail.md`

## Structure

```txt
[Readout label]                                      [state chip/light]
[primary value or absence state]
[freshness / last read] [basis cue]                  [warning/gap marker]
[availability reason line, only when needed]
---------------------------------------------------------------
[Readout Detail reveal]
  Basis
  Availability
  Freshness
  Known fields / coverage note
  Gaps
  Warnings
  Long text / source-owned note
```

## Slots

Required:

- `readout label`
- `primary value`
- `state label`
- `status light`
- `readout age`
- `readout basis`
- `availability note`
- `warnings`
- `gaps`
- `detail reveal`
- `detail row`
- `long text block`
- `narrow summary`

Conditional:

- `fallback basis`
- `source-owned label`
- `source-owned basis`
- `known fields`
- `cap marker`
- `authority note`

## States

Lab presentation states:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

Qualified source-owned placeholders may appear only with owner/layer qualification:

- blocked / source-owned placeholder
- degraded / source-owned placeholder
- no-scan / source-owned placeholder

## View Intent

Keep the existing Lab view intent direction:

- Summary: state, primary value, age, basis cue, warning/gap marker, detail affordance.
- Basis: basis cue, freshness, availability reason, known fields/coverage note, warnings/gaps, with primary value still visible.
- Details: readout label and state remain visible while detail rows receive emphasis.

Do not add a new view mode for the first output.

## Interaction And Reveal

Use one main detail affordance:

```txt
Readout Detail
```

Detail rows carry basis, availability, freshness, known fields/coverage note, gaps, warnings, fallback basis, source-owned notes, and long text content.

## Narrow Behavior

Narrow priority:

1. state label and status light
2. readout label
3. primary value or absence state
4. freshness / last read
5. availability reason or basis cue
6. warning/gap count or marker
7. detail affordance

Stack lanes rather than shrinking text below readability. Long basis, warning explanation, and source-owned notes belong in detail.

## Language Rules

Use Lab slim defaults:

- readout
- basis
- readout basis
- readout age
- freshness
- availability
- coverage
- known fields
- gaps
- warnings
- last read

Avoid Lab-owned proof/source-authority language unless source-owned and qualified.

`NO DATA` means no presentable display fields, not proof of upstream absence. `FALLBACK` must name fallback basis, not pretend to be current.

## Non-Goals

- target-project adapter
- Atlas/Sense implementation
- bridge/runtime contract
- shared source enum set
- product navigation doctrine
- SmokeFlash product surface
- export/seeding/split

## First Prototype Scope

If implemented later, start with:

- outer panel with readout label, state label/light, primary value, readout age, basis cue, and warning/gap marker
- availability reason line for `NO DATA`, `UNAVAILABLE`, `FALLBACK`, `PARTIAL`, and source-owned placeholder cases
- one `Readout Detail` reveal using long text detail treatment
- warning/gap edge visible when detail is closed
- narrow behavior for the same panel

Do not begin with multiple panels, table rows, target adapters, export/split work, or pending materials as required ingredients.

## Verification Minimum For Prototype

- `npm.cmd run verify:renderer-shell`
- `npm.cmd run verify:vocabulary`
- `npm.cmd run verify:all`
- Electron smoke only if renderer behavior changes

Prototype checks should cover visible state labels, availability reason distinction, warning/gap marker with detail closed, long text containment, long-token wrapping, basis/freshness visibility, detail reachability, narrow containment, reduced-motion compatibility, and normal launch workshop hiding.
