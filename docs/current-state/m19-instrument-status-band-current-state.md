# M19 Instrument Status Band Current State

Status: Accepted
Date: 2026-05-25
Milestone: M19 - Instrument Status Band Prototype

## Summary

Aura Lab now has an accepted Instrument Status Band prototype built on the existing Bridge State Readout surface.

The feature is a Lab-owned Bridge -> Interface presentation pattern for bridge-fed readouts. It is not a backend contract, target adapter, shared enum set, Atlas/Sense doctrine, or Aura Core-owned component.

## Accepted Behavior

- The existing `#state-readout` is the Instrument Status Band prototype.
- The visible feature label remains `Bridge State Readout`.
- The closed band shows:
  - state label
  - primary value/status
  - state light
  - inset pips/sweep
  - readout age
  - source coverage
  - readout basis
  - gap/warning/availability marker
- `Readout Detail` remains the compact reveal.
- The detail reveal includes readout age, state summary, readout basis, known fields, source paths, gaps, warnings, fallback notes, unavailable notes, no-data notes, and band marker detail.
- The visual treatment is calm and instrument-like, using a narrow state edge, pips, non-color-only labels, and restrained current/aged/partial/fallback/unavailable/no-data treatments.
- Existing reduced-motion behavior is preserved.

## Covered States

The accepted presentation states are:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

These are Lab presentation labels only. They are not target-project backend states, shared bridge enums, or Sense/Atlas contracts.

## Fixture Boundary

The prototype uses existing briefing and Neutral Sample fixture data for primary value, basis, age, source coverage, gaps, warnings, and detail.

One narrow Lab-local fallback review state exists to exercise `FALLBACK`. It is display-basis review data only. It does not define a durable bridge contract or source-project meaning.

## Preserved Internals

The M19 implementation intentionally preserved:

- `#state-readout`
- `#source-detail-drawer`
- `source-detail-*` ids/classes
- `neutral-seed`
- payload field names
- service commands
- IPC channels
- screenshot names
- existing visual smoke matrix names

## Target-Project Use

Atlas or Sense may read this feature as advisory presentation-pattern input under:

- `workspace/LabRemoteConsumerConformanceHS66.md`
- `workspace/archive/cross-project-relay/SenseImportAdvisoryHS65-lab-presentation-adoption.md`

Receiving projects own their own meaning, contracts, terms, lane semantics, source boundaries, and adoption decisions.

For Sense specifically, Lab state labels and fallback fixture data must not replace Sense lane-specific terms such as `Combat Witness`, `Passive Telemetry`, `Threat Intel`, `Clipboard Acquisition`, `Live IO blocked`, `Partial sample`, `Capped sample`, `No scan`, `Observed Source`, `Observed Weapon`, `Pulling`, or `Cooldown`.

## Verification

Accepted verification:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Shared advisory terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Results:

- local verification passed
- Electron smoke passed
- no Electron process remained after smoke
- shared terminology resource checks passed
- remaining terminology findings are advisory warnings

## Residual Risks

- Shared terminology warnings remain for existing compatibility/internal naming surfaces.
- Local protected-term discovery still reports warning-only candidates.
- Target-project adoption must happen through the receiving project's own authority.
- Lab should not use this feature to claim a durable bridge contract or shared component library.
