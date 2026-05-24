# M11 Presentation State Readout Current State

Status: Accepted
Date: 2026-05-24
Milestone: M11 - Presentation State Readout Retone

## Summary

Aura Lab now has a neutral Presentation State Readout for bridge-fed presentation states.

The readout keeps the physical, instrument-like presentation treatment from the M11 prototype while removing tactical/combat product wording from default Lab UI copy.

## Accepted Behavior

- The readout appears near the primary reading path.
- It uses neutral labels: `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`.
- It displays source coverage, readout age, source/freshness basis, gaps, warnings, and unavailable/fallback posture.
- It includes a Source Detail disclosure surface.
- It preserves the physical visual theme through an inset strip, status light, pips, sweep mark, restrained glow, and responsive layout.
- It respects reduced-motion preferences for readout animation.
- Briefing and Neutral Seed families still render.
- Diagnostics remain secondary.

## Boundary

This is Lab-local presentation behavior.

It does not define a durable bridge contract, target-product adapter, Aura Core-owned component, Atlas evidence doctrine, or Sense tactical doctrine.

The accepted default Lab wording is neutral. Tactical or combat vocabulary may be adapted by a target project later through that project's own authority.

## Verification

Accepted verification:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Results:

- `verify:all` passed.
- `smoke:electron` passed.
- no Electron process remained after smoke.
- smoke evidence showed neutral labels across Briefing and Neutral Seed captures.
- representative narrow captures reported no horizontal overflow.

## Residual Risks

- `Presentation State Readout` is accepted as the current Lab feature name, but future UI/UX may still rename it to `Bridge State Readout` or `Source State Readout`.
- `FALLBACK` remains a guarded renderer path, but current accepted fixtures do not exercise fallback data.
