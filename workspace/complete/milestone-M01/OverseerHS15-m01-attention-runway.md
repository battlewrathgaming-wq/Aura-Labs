# OverseerHS15: M01 Needs Attention Runway

Date: 2026-05-24
Role: Overseer
Project: Aura Lab
Milestone: M01 - Project State Briefing
Sequence: HS15
Status: Dev runway written

## Source Reviewed

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/UIUXHS11-m01-feature-requirements.md`
- `workspace/UIUXHS12-cross-project-packaging-opportunities.md`
- `workspace/UIUXHS14-m01-closure-check.md`
- `workspace/DevHS12-project-state-briefing.md`
- `workspace/OverseerHS13-project-state-briefing-acceptance.md`

## Review

UIUXHS14 is accepted as the final narrow M01 slice. The accepted M01 briefing already satisfies the Must requirements from UIUXHS11, but a compact read-only attention summary should make the first screen more useful for deciding what needs Human or Overseer attention next.

This does not reopen M01 as a redesign and does not authorize bridge-contract work.

## Advisory Disposition

Accepted:

- UIUXHS14 recommendation for a compact read-only `Needs Attention` area.
- UIUXHS11 `Should` item for read-only attention/open questions/deferrals, limited to this final slice.
- Prior accepted UIUXHS11 `Must` requirements and DevHS12 implementation.

Deferred:

- UIUXHS12 cross-project packaging opportunities.
- Durable bridge/data contract.
- Retry control, editing, task queue, automation, live watching, multi-project dashboard, full source inspector, and Aura Core transfer.
- M01 closure until Dev completes and Overseer reviews the final slice.

Rejected:

- None.

Promoted:

- None.

Archived:

- None.

## Runway Written

Updated `workspace/current.md` with an active Dev packet for HS15.

Dev is instructed to:

- preserve the accepted action posture, trust band, compact title, six-state grammar, and diagnostics demotion
- add a compact read-only `Needs Attention` area below the trust band
- show no more than three visible attention items
- use existing/provisional briefing or current-packet style data only
- show intentional empty, missing, failed, and partial copy
- update verification and visual smoke coverage
- create `workspace/DevHS15-needs-attention-briefing.md`

## Verification Required From Dev

```powershell
npm.cmd run verify:all
```

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

## Human Questions

None required before Dev can execute this packet.

## Residual Risk

The attention area should stay provisional. If useful attention items cannot be derived from existing current-packet style data without inventing a contract, Dev should show intentional empty or missing copy and report the limitation rather than expanding scope.
