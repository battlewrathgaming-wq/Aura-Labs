# M34 - Instrument Readout Panel Prototype

Status: Active

## Outcome

Build the first Lab-local visible prototype for the accepted Instrument Readout Panel composed output.

This milestone should prove the composed output visually in the existing Lab renderer while staying local, fixture-fed, and bounded.

## Why This Is Milestone-Sized

M33 accepted a composed display output. The next useful step is to see whether that output reads well as a real HTML presentation surface before Lab considers split/export readiness.

## Likely Runways

- Add a Lab-local prototype path for `output-instrument-readout-panel`.
- Use accepted output slots, states, detail reveal, and narrow behavior.
- Reuse existing renderer patterns where practical.
- Keep SmokeFlash/workshop hidden from normal launch.
- Update focused renderer verification and Electron smoke for the new output.

## Acceptance Criteria

M34 is complete when:

- Instrument Readout Panel renders visibly in a Lab-local prototype path
- accepted states are distinct: `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`
- availability reason does not collapse no data, unavailable, failed, fallback, partial, or source-owned placeholders
- warning/gap marker remains visible when detail is closed
- long text detail content wraps safely
- basis/freshness remain visible in Summary and Basis view intent
- narrow layout has no horizontal overflow
- reduced-motion compatibility remains intact
- normal launch remains free of visible workshop controls
- no export, split, target adapter, or bridge/runtime contract is introduced

## Non-Goals

- target-project implementation
- target adapters
- export/seeding
- SmokeFlash split
- bridge/runtime contract creation
- broad renderer refactor
- multiple panel/dashboard output

## Dependencies

- M33 accepted Instrument Readout Panel
- ADR 0001
- ADR 0002
