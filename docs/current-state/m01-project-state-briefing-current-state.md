# M01 Project State Briefing Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M01 - Project State Briefing.

The app now presents a compact, bridge-aware project-state briefing rather than a generic service monitor. It shows project identity, action posture, trust/freshness/source language, a read-only Needs Attention summary, coordination facts, and secondary diagnostics while preserving deterministic bridge test modes.

## Accepted Capabilities

- Compact project identity and action posture appear near the top of the first screen.
- Trust, source, freshness, certainty, and bridge state language are visible before diagnostics.
- A compact read-only `Needs Attention` area appears below the trust band and above the coordination fact grid.
- The Needs Attention area shows no more than three visible items by default.
- Attention items are currently derived from provisional current-packet style data.
- Empty attention data uses intentional copy: `No attention items reported.`
- Failed attention data uses `Unavailable`.
- Partial attention data uses `Not provided` and names `attention_items` as missing.
- Diagnostics and registered services are secondary.
- Development/review bridge test modes remain available for Normal, Empty, Stale, Failed, and Partial.
- Local verification and visual smoke pass.

## Verification

Accepted commands:

```powershell
npm.cmd run verify:all
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Accepted smoke artifact:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
status: passed
modes_checked: normal, empty, stale, failed, partial
```

## Boundaries

- No git repository is assumed or initialized.
- `aura.projectBriefing` remains provisional and is not a durable bridge contract.
- Attention extraction is provisional parsing from `workspace/current.md`, not a stable schema.
- Bridge test modes are development/review helpers, not product semantics.
- `node_modules`, `.tmp`, cache, and smoke artifacts are local generated artifacts.
- UIUXHS12 cross-project packaging remains future advisory input.
- UIUXHS16 open-source presentation model intake remains future advisory input.
- Durable bridge/data contract, retry control, full source inspector, richer visual concept exploration, and Aura Core transfer are deferred.
