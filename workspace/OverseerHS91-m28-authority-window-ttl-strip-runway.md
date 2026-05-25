# OverseerHS91 - M28 Authority Window TTL Strip Runway

Date: 2026-05-25
Project: Aura Lab
Milestone: M28 - Authority Window TTL Strip Prototype
Status: Runway opened

## Files Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-materials/authority-window-ttl-strip.md`

## Decision

M28 is opened as a Dev packet for the first Human-piloted material prototype:

```txt
mat-authority-window-ttl-strip
```

The ADR controls are accepted and remain active. Dev may use the hardened SmokeFlash workshop path for Lab-local prototyping, but this is not export, seeding, target adoption, or adapter work.

## Expected Dev Output

```txt
workspace/DevHS91-authority-window-ttl-strip-prototype.md
```

## Runway Summary

Dev should refine the M27 static material harness into a small visible prototype with:

- idle, active-window, captured, timeout, cooldown, blocked, and manual-path states
- stable TTL/cooldown strip layout
- non-color-only state communication
- useful detail reveal
- narrow layout readability
- normal launch isolation preserved

## Verification

Required:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

Shared terminology check if visible/documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Guardrail

Do not let SmokeFlash become product navigation or a bridge/runtime contract. Split before export/seeding, but do not split as part of this Lab-local prototype unless the packet becomes impossible without it.

