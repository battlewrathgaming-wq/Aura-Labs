# OverseerHS133 - M34 Instrument Readout Panel Prototype Runway

Status: Active runway
Role: Overseer
Date: 2026-05-26

## Purpose

Open a bounded Dev prototype for the accepted `Instrument Readout Panel` composed output.

This is Lab-local presentation work only. It is not export, split, adapter, target-project, or bridge/runtime contract work.

## Expected DevHS

`workspace/DevHS133-instrument-readout-panel-prototype.md`

## Read First

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m34-instrument-readout-panel-prototype.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/complete/milestone-M33/UIUXHS131-composed-display-output-advisory.md`
- `workspace/complete/milestone-M33/OverseerHS132-uiuxhs131-composed-output-acceptance.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Dev Runway

1. Inspect the accepted Instrument Readout Panel output and current renderer/workshop/material harness patterns.
2. Add a Lab-local visible prototype for `output-instrument-readout-panel`.
3. Include staged panel states for `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`.
4. Include at least one source-owned placeholder case with explicit owner/layer qualification.
5. Keep the parent panel compact: readout label, state label/light, primary value or absence state, readout age, basis cue, warning/gap marker, and availability reason when needed.
6. Add one `Readout Detail` reveal with basis, availability, freshness, known fields/coverage note, gaps, warnings, fallback basis, source-owned note, and long text examples where relevant.
7. Preserve Summary/Basis/Details behavior where practical; do not add a new view mode.
8. Ensure long text and long unbroken tokens do not overflow.
9. Ensure narrow viewport containment and reduced-motion compatibility.
10. Update focused renderer verification and Electron smoke only as needed for the visible prototype.
11. Create `workspace/DevHS133-instrument-readout-panel-prototype.md`.

## Acceptance Criteria

Acceptable if:

- Instrument Readout Panel renders visibly in a Lab-local prototype path
- all required states are distinct
- availability reason does not collapse no data, unavailable, failed, fallback, partial, or source-owned placeholders
- warning/gap marker remains visible with detail closed
- long text detail content wraps safely
- basis and freshness remain visible in Summary and Basis view intent
- detail reveal is keyboard reachable
- narrow layout has no horizontal overflow
- reduced-motion compatibility remains intact
- normal launch remains free of visible workshop controls
- no export, split, target adapter, source-project meaning, bridge/runtime contract, IPC/preload expansion, or broad renderer refactor is introduced

## Guardrails

- Do not export, seed, split, package, or offer the renderer/head outward.
- Do not create target adapters.
- Do not change source-project meanings.
- Do not define durable bridge/runtime contracts.
- Do not promote pending materials as accepted.
- Do not make SmokeFlash/workshop the product surface.
- Do not run live/private/network tests.

## Stop Conditions

Stop and return to Overseer if:

- the prototype requires splitting SmokeFlash
- the prototype requires a target adapter or source-project semantics
- the prototype requires IPC/preload/bridge expansion
- the prototype would turn fixture state shape into a runtime contract
- the prototype requires a broad renderer refactor

## Required Verification

Run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification if visible copy or terminology-sensitive docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Expected Handoff

The DevHS must include:

- files changed
- prototype path and behavior
- state distinction notes
- detail reveal notes
- narrow/reduced-motion notes
- compatibility boundaries intentionally preserved
- verification commands and results
- residual risks
