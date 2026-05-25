# ADR 0001 - SmokeFlash Split Timing

Date: 2026-05-25
Status: Accepted

## Context

Aura Lab develops the presentation layer it may later offer to other Aura projects. SmokeFlash is Lab workshop tooling used to stage material content, switch states, and pressure presentation behavior during development.

M27 accepted a Lab-local hardening pass:

- normal launch hides workshop controls
- workshop launch is gated by explicit environment/query state
- `mat-authority-window-ttl-strip` has a static Lab-only workshop harness

The remaining concern is structural: hidden workshop DOM/JS still lives in the same renderer bundle as the offered presentation surface.

External advisory input found:

- Atlas does not currently contain Lab SmokeFlash code.
- Sense does not currently contain Lab SmokeFlash code.
- The risk is future propagation if Lab's current renderer becomes the shared/product head.

## Decision

Do not split SmokeFlash immediately by default.

Treat SmokeFlash splitting as a promotion gate:

```txt
If Lab is still experimenting with renderer materials, keep the hardened in-app workshop path.
If Lab is preparing the renderer to travel, split SmokeFlash into a separate Lab-only harness first.
```

The next Lab feature prototype may use the hardened workshop path while renderer materials are still maturing.

Any packet that exports, seeds, clones, promotes, or otherwise offers the Lab renderer to Atlas, Sense, or another project must first split SmokeFlash/material-harness code out of the offered renderer bundle.

## Split Triggers

Split before any of these:

- a target project consumes Lab's renderer code
- Lab creates a clean presentation head package or folder
- a renderer export/seeding packet opens
- workshop controls or material harness code shape normal UI structure
- more than one or two material harnesses accumulate in the offered renderer
- Dev work repeatedly needs to ask whether a surface is workshop or product
- visual smoke or staged material needs start driving product architecture

## Non-Triggers

Do not split only because:

- SmokeFlash exists
- one Lab-local material harness exists
- Electron smoke needs a workshop-only state
- Lab is still using the renderer as a sketchbench for material discovery

## Consequences

Accepted for now:

- Lab can prototype the next material using the hardened in-app workshop path.
- SmokeFlash remains workshop tooling, not the offered presentation surface.
- Normal launch must remain free of visible workshop controls.

Required before promotion:

- create a separate Lab-only SmokeFlash/material harness entry
- remove workshop DOM/JS/material states from the offered renderer bundle
- keep staged material shapes out of bridge/runtime contracts

## Current Preferred Next Feature

If Human opens feature delivery next, the preferred first material remains:

```txt
mat-authority-window-ttl-strip
```

The split should happen before renderer export/seeding, not necessarily before this Lab-local prototype.

