# OverseerHS161 - M41 Starter Kit Spec Acceptance

Status: Accepted
Role: Aura Lab Overseer
Date: 2026-05-31

## Reviewed

- `workspace/current.md`
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `docs/roadmap/m41-portable-presentation-seed-kit-contents.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

## Decision

Accept `StarterKitSpecHS160-portable-presentation-contents.md` and close M41.

The artifact answers the M41 question: what Lab needs to solve before stepping into implementation of a portable presentation starter kit.

## Accepted Direction

The next implementation should be static-reference-first, not React-first and not renderer-export-first.

Accepted first-step posture:

```txt
portable presentation starter contents
-> Lab-local static reference
-> review
-> optional React example later
```

The starter should remain a portable presentation starter, not a target renderer, source-project adapter, bridge/runtime contract, or shared doctrine layer.

## Accepted From HS160

- Working name: `portable-presentation-starter`.
- First implementation should stay Lab-local.
- First input shape should be one neutral `readout` example object.
- Source-owned placeholder terms must be qualified when they appear.
- First static reference should show multiple state examples through static data, with one selected panel at a time.
- Summary / Basis / Details should stay deferred behind a simpler panel/detail reveal.
- Styling should use CSS custom properties with conservative replaceable defaults.
- Static reference should be implemented from accepted output/material specifications, not by copying the current renderer wholesale.
- React remains optional and should wait until static reference acceptance.

## Deferred

- React example scaffold
- SmokeFlash split execution
- renderer export/seeding
- target adapters
- target-project file edits
- shared bridge/runtime contracts
- security review execution

## Recommended Next Packet

Recommended next milestone/runway:

```txt
Static Portable Presentation Starter Reference
```

Purpose:

- create a separate Lab-local static HTML/CSS/JS reference from the accepted starter spec
- avoid copying the current renderer wholesale
- exclude SmokeFlash, Electron, Pane Board, Wayfinder, and target adapters
- prove one Instrument Readout Panel with neutral example data

Do not open this as Dev work until Human / Overseer explicitly chooses to proceed.
