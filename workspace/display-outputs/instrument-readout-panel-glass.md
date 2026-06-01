# Instrument Readout Panel Glass

Status: accepted glass asset
Glass id: `glass-instrument-readout-panel`
Output source: `workspace/display-outputs/instrument-readout-panel.md`
Static reference: `portable-presentation-starter/`
Definition source: `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`

## Purpose

Provide Lab's first accepted presentation glass asset: a display-only Instrument Readout Panel that target projects can inspect or trial through their own mappers.

This is the window, not the broadcaster.

## Accepted Glass Definition

```txt
a display-only, framework-neutral Instrument Readout Panel head
that renders prepared readout input into a calm, bounded surface
with basis, freshness, availability, gaps, warnings, detail reveal,
source-owned label qualification, absence/unavailable distinction,
and narrow/text-containment behavior.
```

## What It Improves

Compared to a base Electron presentation surface, this glass adds:

- first-read readout hierarchy
- primary value or absence treatment
- display state chip and non-color-only markers
- basis/freshness support
- availability reason treatment
- warning/gap edge and count
- detail reveal with known fields, coverage, gaps, warnings, and qualification rows
- qualified source-owned label pass-through
- distinction between `NO DATA` and `UNAVAILABLE`
- fallback basis honesty
- narrow layout and long-token containment
- display-only safety floor

## Current Reference Files

- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `scripts/verify-static-starter.js`

## Demo Scaffolding

Do not treat these as target product requirements:

- selector page as target UI
- example JSON as target payload contract
- Lab display labels as target state enums
- fallback JavaScript data duplication as package architecture
- top boundary note as final target product copy

## Target Responsibilities

Targets must provide:

- source meaning
- mapper from target-owned output to prepared display input
- product language and local terminology decisions
- runtime behavior and shell choices
- local safety/security review
- adoption decision
- target-local styling or layout changes

## Trial Readiness

Ready for:

- Human/Overseer visual review
- target relay/adoption review after visual review
- Sense/Atlas discussion as display-only presentation glass
- target-side mapper pressure

Not ready to claim:

- target adoption
- target product fitness
- final package/export shape
- React framework shape
- target runtime shell model

## Verification Minimum

For the current static reference:

- `node --check portable-presentation-starter\examples\static\instrument-readout-panel.js`
- `node --check scripts\verify-static-starter.js`
- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

## Next Useful Questions

- Does Human visual review accept `index.html` and `inspect-head.html`?
- Does Sense need a concrete package shape to trial the glass?
- Does Atlas need a different glass asset later, or can this one inform future Atlas surfaces?
- Should Lab create a package/export spec only after a target names the missing shape?

## Boundaries

This page is not:

- an adapter
- a source meaning map
- a bridge/runtime contract
- a target adoption record
- a package/export specification
- Dev authorization
