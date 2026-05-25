# Current Workspace Packet

Status: Idle
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: None
Last completed milestone: M27 - SmokeFlash Boundary Review And Conditional Harness
Current executor: Human / Overseer
Current focus: choose the next Human-piloted Lab packet
Expected artifact filename: None

## Current State

Aura Lab has accepted and closed M27.

Accepted M27 state:

- Boundary outcome: `harden`.
- Normal launch stays free of visible workshop controls.
- Workshop/smoke launch uses explicit environment and query gating.
- `mat-authority-window-ttl-strip` now has a static Lab-only workshop harness.
- SmokeFlash remains Lab workshop tooling, not the offered presentation layer.
- No target-project files, target adapters, live/private/network data, bridge contract, or runtime payload contract were introduced.

Accepted material/library state remains:

- `workspace/display-materials/` holds accepted individual material pages.
- `workspace/display-schema-ledger.md` remains the catalog/index for ingredients and combined outputs.
- `workspace/display-outputs/` is reserved for future combined reusable display references.
- No combined display output is accepted yet.

Residual M27 risk:

- The offered renderer still contains hidden workshop DOM/JS.
- This is acceptable for Lab-local hardening.
- Before export/seeding into another project, split SmokeFlash/material harness code into a separate Lab-only harness entry.
- Current smoke confirms workshop harness visibility and default material state; future material prototype work should review additional material states directly.

## Purpose

Lab is in a waiting state after SmokeFlash boundary hardening:

```txt
Human / Overseer next-packet decision
```

Recommended next choices:

- small `mat-authority-window-ttl-strip` prototype packet
- renderer split packet before export/seeding
- park while Human/UX research continues

## Source Of Intent

Accepted source of intent:

- Human direction that Lab's offered product is the presentation layer, not workshop tooling.
- Human concern that smoke/workshop tooling may be built into other app renderers.
- M27 Dev handoff: `workspace/DevHS89-smokeflash-boundary-review.md`
- M27 acceptance: `workspace/OverseerHS90-m27-acceptance.md`
- M26 accepted material library and ledger.
- `workspace/OverseerHS88-smokeflash-boundary-lessons.md`

## Ordered Runway

1. Human / Overseer chooses the next packet.
2. Do not start Dev or UI/UX work from this idle state.
3. Preserve the accepted SmokeFlash boundary: workshop tooling supports presentation work but is not the offered surface.
4. If export/seeding becomes active, address the hidden workshop DOM/JS split first.

## Acceptance Criteria

The current waiting state can progress if Human opens:

- Authority Window TTL Strip material prototype
- SmokeFlash/renderer split before export or seeding
- another scoped material prototype
- another bounded display-material packet
- parking/housekeeping while research continues

Reject or redirect future requests if they:

- treat SmokeFlash as the offered presentation layer
- make normal launch depend on workshop state
- turn staged material shapes into bridge/runtime contracts
- create target-project adoption records in Lab
- broaden visual smoke matrices without a feature need
- skip source-project authority for target-owned meaning

## Guardrails

- The presentation layer is the thing Lab offers.
- SmokeFlash is workshop tooling.
- Lab material pages are reusable display ingredients, not target-project features.
- Lab output pages are combined reusable display references, not adoption records.
- The ledger is an index, not a backlog.
- Use slim Lab language for Lab-owned defaults.
- Preserve true/source terms when referencing source-owned project examples.
- Do not edit Atlas, Sense, shared scaffold, or orchestration records unless explicitly asked.
- Do not require live/private/network data.
- Do not start Dev work without a new executable packet.

## Stop Conditions

Stop and return to Human / Overseer if the work would:

- require source-project meaning decisions
- require target-project file edits
- create a new shared terminology rule
- turn a material into a durable bridge contract
- create a combined output without accepted prototype result
- require live/private/network data
- start implementation without a Dev runway

## Verification

Latest accepted local verification:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Handoff

Expected output:

```txt
None
```

## Parked Items

- SmokeFlash split before export/seeding.
- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Target-project adapters.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Connected-system/radius visualization until source-owned relation meaning exists.
