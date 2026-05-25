# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M27 - SmokeFlash Boundary Review And Conditional Harness
Last completed milestone: M26 - Guided Display Material Production
Current executor: Dev
Current focus: inspect the existing in-app smoke harness boundary and conditionally harden or split the smallest Lab-only material harness
Expected artifact filename: `workspace/DevHS89-smokeflash-boundary-review.md`

## Current State

Aura Lab has accepted and closed M26.

Accepted M26 state:

- `workspace/display-materials/` holds accepted individual material pages.
- `workspace/display-schema-ledger.md` remains the catalog/index for ingredients and combined outputs.
- `workspace/display-outputs/` exists as the empty shelf for future combined reusable display references.
- No combined display output is accepted yet.

M27 opens because Human identified a product boundary risk: Aura Lab may currently carry smoke/workshop tooling inside the same Electron app that represents the offered presentation layer.

The goal is to find out whether that is harmless and isolated, or whether Lab should split/clone the harness so the offered presentation layer stays clean.

## Purpose

Answer this product-boundary question through code inspection and the smallest safe implementation if suitable:

```txt
Is in-app SmokeFlash harmlessly isolated workshop tooling, or is it entangled with the offered presentation layer?
```

Allowed outcomes:

- `keep`: existing in-app smoke path is isolated enough; document why.
- `harden`: existing path is isolated enough and can cheaply support one material harness path.
- `split`: cloning/splitting a Lab-only harness is cheap and clearly improves the product boundary.
- `stop`: the split or hardening would require broad Electron/runtime refactor; document the risk and next recommendation.

## Source Of Intent

Accepted source of intent:

- Human direction that Lab's offered product is the presentation layer, not workshop tooling.
- Human concern that other Aura apps have been built with smoke/workshop tooling inside the app.
- Human direction to find out whether this is a non-issue or needs refactor.
- `workspace/OverseerHS88-smokeflash-boundary-lessons.md`
- `workspace/OverseerHS87-m26-acceptance.md`
- `workspace/DisplayMaterialSchemasHS86-guided-material-production.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-schema-ledger.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerHS88-smokeflash-boundary-lessons.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `package.json`
- `src/main/main.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `src/renderer/index.html`
- `src/renderer/app.js`

## Ordered Runway

1. Inspect the existing smoke path in `src/main/main.js`, `scripts/electron-visual-smoke.ps1`, package scripts, and renderer controls.
2. Classify the current boundary as `keep`, `harden`, `split`, or `stop`.
3. If the current path is isolated enough, document why normal presentation launch is not affected by smoke/workshop tooling.
4. If a small local hardening is suitable, add the smallest Lab-only SmokeFlash/material harness support for `mat-authority-window-ttl-strip`.
5. If cloning/splitting is clearly cheaper and cleaner than in-app hardening, create the smallest separate Lab-only harness entry point.
6. Stop instead of implementing if the work needs broad Electron/runtime refactor, target-project adapters, live/private data, or a large visual-smoke matrix.
7. Create the expected DevHS handoff with the decision, files changed, verification results, and remaining boundary risks.

## Implementation Bounds

If implementation is suitable, keep it small:

- one material only: `mat-authority-window-ttl-strip`
- staged/static Lab material only
- no target-project data
- no live/private/network access
- no bridge contract
- no target adapters
- no broad smoke matrix
- no source-project terminology changes
- no workflow refactor

Normal presentation launch must remain polished and free of rough workshop controls.

Workshop/SmokeFlash launch may include state switching, staged material content, and rough controls if clearly isolated.

## Acceptance Criteria

M27 is acceptable if Dev:

- identifies whether SmokeFlash is isolated or entangled
- names the selected outcome: `keep`, `harden`, `split`, or `stop`
- preserves normal presentation launch behavior
- avoids broad Electron/runtime refactor
- avoids target-project edits and source-project meaning decisions
- either implements a tiny isolated harness path or clearly explains why no implementation was safe
- runs required verification
- leaves a clear handoff for Overseer review

Reject or redirect if the work:

- treats SmokeFlash as part of the offered presentation layer
- makes normal launch depend on workshop state
- expands visual smoke into a broad matrix
- turns staged material shapes into bridge/runtime contracts
- imports Atlas or Sense meaning
- changes target projects
- makes the first material prototype wait on a large tooling renovation

## Guardrails

- The presentation layer is the thing Lab offers.
- SmokeFlash is workshop tooling.
- Verification and staged ingest support the product; they are not the product.
- Keep slim Lab language for Lab-owned copy.
- Preserve source-owned terms only when referenced as source-owned examples.
- Do not use live/private/network data.
- Do not edit Atlas, Sense, shared scaffold, or orchestration records.
- Do not add new dependencies unless the packet is impossible without them.

## Stop Conditions

Stop and return to Human / Overseer if:

- splitting requires broad Electron/runtime changes
- hardening changes normal presentation launch
- smoke controls leak into the offered surface
- staged material needs start becoming a bridge contract
- target-project files or target-project data are needed
- Electron runtime/install problems become the main work
- verification requires live/private/network data

## Required Verification

Always run:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Run Electron smoke if UI, launch behavior, renderer state, or smoke code changes:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology check if visible or documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Boundary outcome:
- Files changed:
- Normal launch impact:
- SmokeFlash/workshop launch impact:
- Material support added or deferred:
- Verification run:
- Remaining risks:

## Handoff

Expected output:

```txt
workspace/DevHS89-smokeflash-boundary-review.md
```

The handoff must state whether the next Overseer move should accept, redirect, or open a follow-up prototype packet.

## Parked Items

- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Target-project adapters.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Connected-system/radius visualization until source-owned relation meaning exists.
