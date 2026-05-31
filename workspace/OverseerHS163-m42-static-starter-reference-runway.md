# OverseerHS163 - M42 Static Starter Reference Runway

Status: Active runway
Role: Aura Lab Overseer
Date: 2026-05-31

## Purpose

Open M42 for a bounded Dev implementation of the first static portable presentation starter reference.

This packet follows accepted M41 starter-kit contents and Sense caution feedback.

## Direction

Build the smallest static reference that proves the starter concept:

```txt
neutral example data -> Instrument Readout Panel -> detail reveal
```

Keep it framework-neutral and Lab-local. Do not start React, target adapters, renderer export, or SmokeFlash split execution.

## Expected DevHS

`workspace/DevHS163-static-portable-presentation-starter-reference.md`

## Key Boundaries

- Static reference first.
- Lab-local only.
- No current renderer wholesale copy.
- No SmokeFlash, Pane Board, Wayfinder, Electron/preload, Lab fixture registry, target adapters, or source-project semantics.
- Example input is display-example input only, not a bridge/runtime contract.
- Sense cautions from HS162 must be visible in README/example docs.
