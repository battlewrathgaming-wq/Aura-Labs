# OverseerHS182 - M51 Glass Primitive CSS Starter Runway

Status: Active runway
Role: Overseer
Executor: Dev
Expected DevHS: `workspace/DevHS182-glass-primitive-css-starter.md`

## Intent

Build the first Lab-local CSS/token primitive starter from the accepted M50 map.

This is a bounded implementation packet. It should make a small reusable shelf of glass primitive CSS and neutral examples. It must not create React components or target-project surfaces.

Accepted line:

```txt
CSS/tokens first; optional thin React wrappers later.
```

## Read First

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/glass-inventory-spine.md`
- `workspace/UIUXHS180-glass-primitive-react-readiness-map.md`
- `workspace/OverseerHS181-m50-glass-primitive-react-readiness-map-acceptance.md`
- `workspace/display-assets.md`
- `workspace/display-selection-shelf.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `docs/roadmap/m51-glass-primitive-css-starter.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- `package.json`

## Task

Create a Lab-local primitive starter under:

```txt
portable-presentation-starter/primitives/
```

Suggested files:

- `README.md`
- `glass-tokens.css`
- `glass-primitives.css`
- `examples/primitive-readout.html`
- optional `examples/primitive-row-drawer.html`

Update verification so the primitive starter is checked as part of the normal verification path.

## Required Behavior

The primitive starter should include meaning-light CSS/token support for:

- material
- boundary
- seam
- segment
- readout
- marker
- drawer
- sizing
- safe motion / reduced-motion

The examples should be static, neutral, local, and display-only.

They should show enough to prove:

- a boundary can contain a readout
- labels/values/details wrap cleanly
- markers have text-accessible meaning, not color-only meaning
- drawer/detail can be represented without raw diagnostics becoming first-read
- reduced-motion exists for motion classes
- target ownership boundaries are visible in README or example copy

## Guardrails

- Do not create React components.
- Do not add JSX, build tools, or package publishing.
- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not define Atlas/Sense panes, modules, or layouts.
- Do not create bridge/runtime contracts.
- Do not touch Electron, preload, IPC, SmokeFlash, Pane Board, Wayfinder, or service registry.
- Do not change the existing static Instrument Readout Panel behavior unless verification requires a small README/verifier link update.
- Do not use remote assets, network calls, local storage, clipboard, screenshot, filesystem, or privileged runtime APIs.
- Do not use color, glow, material, or motion as the only carrier of meaning.

## Verification

Run:

```txt
npm.cmd run verify:all
npm.cmd run verify:terminology
```

If `verify:terminology` must be run from `F:\Projects\Docs\Aura-Project-Orchestration`, say so in the handoff.

No Electron smoke is required unless visible runtime renderer behavior changes.

## Expected Handoff

Create:

```txt
workspace/DevHS182-glass-primitive-css-starter.md
```

Include:

- files changed
- primitive starter contents
- examples created
- verification commands and results
- any warning-only terminology results
- any exclusions intentionally preserved
- remaining risks
- suggested next packet, if any
