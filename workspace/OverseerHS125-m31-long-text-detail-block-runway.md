# Overseer HS125 - M31 Long Text Detail Block Runway

Status: Opened
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/OverseerHS124-uiuxhs123-material-expansion-acceptance.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`

## Decision

Open the first M31 Dev prototype for `mat-long-text-detail-block`.

Human selected Dev prototype. HS124 names Long Text Detail Block as the best first future prototype candidate because it supports long basis, warning, gap, path, paragraph, and token containment.

## Expected Dev Output

`workspace/DevHS125-long-text-detail-block-prototype.md`

## Dev Runway Summary

Dev should add a Lab-local visible prototype for Long Text Detail Block.

The prototype should prove that long basis text, warning explanations, gap lists, source/path-like values, paragraphs, and long unbroken tokens can live in a contained detail body without bloating the parent surface or creating horizontal overflow.

## Verification Required

Dev should run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Run shared terminology verification if visible copy, material pages, ledger rows, or terminology-sensitive docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Guardrails

- Do not implement target adapters.
- Do not create export/seeding readiness.
- Do not split SmokeFlash.
- Do not add a new view intent.
- Do not implement virtualized list helper.
- Do not create composed display output work.
- Do not change bridge payloads, IPC, preload bridge, service commands, or source-project semantics.
- Keep material labels Lab-slim and product-agnostic.
- Keep `mat-long-text-detail-block` local to Lab material/harness work; do not turn it into a bridge/runtime contract.

## Stop Conditions

Dev should stop and return if:

- the prototype requires a broad material-harness refactor
- source-project meaning becomes necessary
- bridge/runtime contracts would need to change
- SmokeFlash/workshop exposure would need to change
- verification requires broad visual-smoke matrix expansion

## Acceptance Checks For Overseer

- Long Text Detail Block renders visibly in the Lab material harness or an existing Lab-local presentation path.
- Long paragraph content is contained.
- Long unbroken token content is contained.
- Path-like/source-like value is qualified as display/sample material and does not overclaim source authority.
- Warning explanation and grouped gaps can live in detail.
- Narrow viewport has no horizontal overflow.
- Reduced-motion compatibility remains intact.
- No target adapter/export/contract work is introduced.
- Verification is recorded.
