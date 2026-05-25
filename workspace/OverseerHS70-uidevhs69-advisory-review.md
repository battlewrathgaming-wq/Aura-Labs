# OverseerHS70 - UIDevHS69 Advisory Review

Status: Accepted as M19 advisory input
Role: Overseer
Date: 2026-05-25

## Request Received

Human asked Overseer to review `workspace/UIDevHS69-instrument-status-band-implementation-advisory.md`.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- `workspace/UIDevHS69-instrument-status-band-implementation-advisory.md`

## Review Decision

Accept `UIDevHS69` as advisory input for M19.

The advisory is useful because it gives Dev practical implementation shape without changing the active milestone. It keeps M19 focused on one visible Instrument Status Band prototype and anchors the work in the existing Lab renderer and fixture patterns.

## Accepted Guidance

Accepted for Dev consideration within the existing M19 packet:

- Refine existing `#state-readout` into the Instrument Status Band instead of adding a second status surface.
- Keep `Readout Detail` as the compact reveal where it fits.
- Use slots for primary value/status, label, status light, readout basis, readout age, warnings/gaps, and detail reveal.
- Cover current, updating, aged, partial, unavailable, fallback, and no data states.
- Use calm material treatment: band, inset panel, rail/divider, status pip/light, muted warning edge, and detail reveal.
- Preserve text containment, non-color-only status, reduced-motion behavior, and stable dimensions.
- Keep fixture extension narrow and Lab-local if a primary-value slot cannot be derived from existing data.
- Avoid a broad smoke matrix, broad fixture taxonomy, full face implementation, external UI framework, or target-project adapter work.

## Authority Notes

This advisory does not replace `workspace/current.md`.

It does not create product direction beyond M19. It does not authorize Atlas, Sense, or Core adoption work. It does not authorize schema, IPC, service command, payload, fixture id, or compatibility id renames.

Dev may use this advisory to reduce ambiguity while executing the existing M19 runway. If this advisory conflicts with `workspace/current.md`, `workspace/current.md` remains authoritative.

## Decisions For M19 Dev

Resolved by Overseer:

- Dev should use the existing `#state-readout` surface as the implementation base.
- Dev should avoid creating a parallel status module.
- Dev may introduce `instrument-status-band`-style class ownership if useful.
- Dev should keep the module readable when `Readout Detail` is closed.

Still bounded for Dev judgment:

- Whether the visible module label remains `Bridge State Readout` or introduces `Instrument Status Band` as a visible label. Favor the least disruptive visible copy unless the prototype reads unclearly.
- Whether `Readout Detail` defaults open or closed. Favor the current behavior unless the closed band becomes strong enough and verification remains simple.
- Whether a narrow Lab-local `primary_value` fixture slot is needed. Favor deriving from existing fixture data first.
- Whether `NO DATA` reads as neutral empty or muted unavailable. Favor quiet neutral unless an actual warning/error is present.

## Parked

- Full face implementation.
- Target-project adapters.
- Atlas/Sense terminology or semantic changes.
- Durable bridge/data contract design.
- Broad fixture taxonomy expansion.
- Broad visual-smoke matrix expansion.
- Theme systems, palette editors, sound, or external UI frameworks.

## Verification

No implementation verification was required for this review.

Recommended verification remains the M19 packet verification:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
```

Run Electron smoke if visible layout/CSS changes affect renderer surfaces:

```powershell
npm.cmd run smoke:electron
```

Run the shared advisory terminology check after local verification:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Handoff

`UIDevHS69` is now accepted advisory input for Dev executing:

```txt
workspace/DevHS68-instrument-status-band-prototype.md
```
