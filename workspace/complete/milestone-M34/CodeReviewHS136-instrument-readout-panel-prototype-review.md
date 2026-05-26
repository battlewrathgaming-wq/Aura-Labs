# CodeReviewHS136 - Instrument Readout Panel Prototype Review

Status: Complete
Role: Code / boundary review specialist
Date: 2026-05-26

## Review Scope

Bounded code and boundary review of the accepted M34 `output-instrument-readout-panel` prototype.

This review did not implement code, create a Dev runway, run live/private/network tests, run Electron smoke, export/split/package/seed anything, or touch target projects.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/complete/milestone-M34/DevHS133-instrument-readout-panel-prototype.md`
- `workspace/complete/milestone-M34/OverseerHS134-hs133-instrument-readout-panel-acceptance.md`
- `docs/roadmap/m34-instrument-readout-panel-prototype.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `src/main/preload.js`
- `src/modules/Frame/windowShell.js`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Current-State Understanding

M34 is accepted and closed. The prototype adds a Lab-local visible output, `output-instrument-readout-panel`, through the existing workshop/material harness path allowed by ADR 0001 while Lab is still experimenting.

The prototype is fixture/workshop-fed presentation work. It is not a clean exported head, source adapter, bridge/runtime payload contract, IPC expansion, preload expansion, target adoption package, or source-project meaning decision.

## Findings Ordered By Severity

No blocking issues found.

No high-severity or medium-severity code/boundary defects were found that should stop UI/UX visual polish.

Low/residual risks:

- The output remains in the shared renderer bundle behind the workshop harness. This is accepted under ADR 0001 for Lab-local prototyping, but it remains a hard promotion gate before export, seeding, clean-head packaging, or target consumption.
- The desktop parent panel uses a dense five-column grid with minimum tracks for identity, value, meta, availability, and button. Current containment logic and accepted smoke evidence make this credible for the staged copy, but visual polish should watch the row carefully if copy becomes more natural-language or source-fed.
- `scripts/verify-renderer-shell.js` is intentionally string-based and broad. It is acceptable support coverage for this stage, but future polish should avoid treating the smoke/verification matrix as the product direction.

## Boundary Review

Boundary is clean for the accepted M34 scope.

- `src/renderer/app.js` keeps the output under `materialHarnessDefinition()` as `output-instrument-readout-panel`, with staged local states and a local render function.
- `src/main/main.js` reaches the output only through explicit smoke/workshop harness loading.
- No target adapter, export/seeding path, source-project adapter, new bridge/runtime contract, or new source-owned semantics were introduced.
- `src/main/preload.js` remains the existing narrow service/window bridge. The prototype did not add preload surface area.
- `src/modules/Frame/windowShell.js` keeps context isolation enabled and node integration disabled.

The main residual boundary item is the already-accepted ADR 0001 condition: split SmokeFlash/material harness code before the renderer travels.

## Terminology / Copy Review

Copy is healthy enough for visual polish.

- Lab-owned defaults stay in the slim readout vocabulary: readout, basis, freshness, availability, coverage, known fields, gaps, warnings, last read.
- `NO DATA` is explicitly qualified as no presentable display fields, not proof of upstream absence.
- `FALLBACK` names fallback basis and does not present itself as current.
- The source-owned placeholder is qualified as source-owned, with owner/layer language and separation from unavailable, failed, fallback, and no data.
- The visible detail affordance uses `Readout Detail`, not stale `Source Detail`.

Minor watch item: `Bridge feed readout` is acceptable Lab-local fixture wording, but UI/UX polish may want a calmer label if it reads too transport-shaped in the first viewport.

## Workshop / SmokeFlash Gating Review

Workshop gating remains clean.

- `src/renderer/index.html` defaults `body data-workshop="false"`.
- `src/renderer/styles.css` hides `.workshop-only` when `data-workshop="false"`.
- `src/renderer/app.js` enables workshop mode only from `?workshop=1` and only renders a valid harness when `state.workshopMode` and a known material id are present.
- `src/main/main.js` only injects workshop query state when `AURA_LAB_ELECTRON_VISUAL_SMOKE=1` or `AURA_LAB_WORKSHOP_MODE=1`.
- Accepted HS133/HS134 evidence says normal launch workshop hiding and Electron smoke both passed.

This is sufficient under ADR 0001. It is not sufficient for export or target adoption, which remains correctly parked.

## Renderer / Security Posture Review

No obvious security regression in the new renderer path.

- Dynamic prototype content is rendered with `textContent` and `createElement`, not `innerHTML`.
- The output states are hardcoded local fixture data, not remote/private/live data.
- No new IPC channel or preload bridge was introduced for the prototype.
- Existing Electron frame posture remains bounded: context isolation on, node integration off, narrow `contextBridge` APIs.

This was a bounded posture check only, not a broad security review.

## Visual / Layout Risk Notes

The layout is credible for the accepted prototype stage.

- The compact parent has non-color-only state markers (`CU`, `UP`, `AG`, etc.) plus text labels.
- Detail rows use grid tracks with `minmax(0, 1fr)`, `overflow-wrap:anywhere`, and `word-break:break-word` for long unbroken source-owned tokens.
- Narrow media rules collapse the instrument parent, meta row, and detail rows to one column.
- Accepted smoke evidence reported no overflow for the narrow source-owned placeholder capture.

Visual polish can focus on hierarchy, rhythm, density, label softness, and detail-row emphasis without first requiring a code boundary fix.

## Verification Coverage Review

Coverage is enough for this prototype and should not be expanded into product direction by default.

Accepted HS133/HS134 evidence includes:

- `npm.cmd run verify:renderer-shell`
- `npm.cmd run verify:vocabulary`
- `npm.cmd run verify:all`
- `npm.cmd run smoke:electron`
- Shared terminology check from `F:\Projects\Docs\Aura-Project-Orchestration`: `npm.cmd run verify:terminology`

Smoke coverage included all output states, Summary/Basis/Details captures for `partial`, and a narrow `source-owned-placeholder` capture. That is appropriate for a Lab-local presentation prototype.

No additional verification was run for this review because only the expected review artifact was edited.

## Recommended Fixes

No required fixes before UI/UX visual polish.

Recommended watch/follow-up items for a future polish packet:

- Soften or refine `Bridge feed readout` if UI/UX wants less transport-facing copy in the visible parent label.
- Re-check containment if polish introduces longer real-looking labels, more natural availability sentences, or multiple warning/gap phrases in the parent row.
- Keep any future accessibility improvement local and narrow: the current `Readout Detail` button has `aria-expanded` and `aria-controls`, which is enough for this stage.

## UI/UX Visual Polish Readiness

UI/UX visual polish can proceed.

The prototype is healthy enough for visual review and small visual refinements. No boundary, gating, terminology, renderer security, or verification issue needs to be fixed first.

## Parked Items

- SmokeFlash/material harness split before export, seeding, clean presentation-head packaging, or target-project consumption.
- Target-owned adapters under ADR 0002.
- Source-project meaning and emitted bridge semantics.
- Bridge/runtime contract design.
- Broad renderer security review until split/export readiness or Human direction pulls it forward.
- Broader visual-smoke matrices unless a concrete presentation risk requires them.
