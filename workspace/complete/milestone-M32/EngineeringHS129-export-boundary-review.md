# EngineeringHS129 - M32 Export Boundary Review

Status: Advisory
Role: Engineering / Security advisory specialist
Date: 2026-05-25
Project: Aura Lab

## Purpose

Review the current Aura Lab renderer boundary before any future export, seeding, split, or target-project consumption decision.

This artifact does not authorize implementation, export, seeding, SmokeFlash splitting, target adapters, or a durable bridge/runtime contract.

## Files Reviewed

Required project and authority files:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-assets.md`
- `workspace/critical/critical-terms.md`
- `workspace/OverseerHS129-m32-export-boundary-review-runway.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`

Renderer, shell, service, and tooling files:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `src/main/preload.js`
- `src/services/serviceRegistry.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-all.js`
- `scripts/verify-frame-module.js`
- `scripts/verify-services.js`
- `package.json`

Orientation note: `src/preload/` was requested for optional inspection, but no such directory exists. The active preload boundary is `src/main/preload.js`.

## Current-State Understanding

M32 is an advisory boundary review opened after M31 accepted two additional Lab-local material prototypes: Long Text Detail Block and Availability Reason Treatment. Alongside the prior Authority Window TTL Strip, the renderer now contains three material harness prototypes in the same renderer DOM/CSS/JS bundle as the normal Bridge State Readout presentation.

ADR 0001 allows this while Lab is still experimenting. It also makes the promotion gate explicit: any packet that exports, seeds, clones, promotes, or offers the Lab renderer to a target project must first split SmokeFlash/material-harness code out of the offered renderer bundle.

ADR 0002 keeps target-project adapters outside Lab ownership. Lab may provide presentation materials, presentation grammar, clean renderer/head candidates, and advisory examples. Atlas, Sense, or any other target project must own the adapter from source-project bridge output into a clean Lab presentation head.

Current implementation state:

- Normal launch defaults `body data-workshop="false"` and hides `.workshop-only` DOM through CSS.
- Workshop mode is enabled through query/env flow: `AURA_LAB_ELECTRON_VISUAL_SMOKE`, `AURA_LAB_WORKSHOP_MODE`, and `AURA_LAB_MATERIAL_HARNESS` in `src/main/main.js`, then `?workshop=1&material=...` in the renderer.
- The renderer uses a narrow preload bridge surface, `window.aura` and `window.auraWindow`, with `contextBridge` and IPC invocation.
- Dynamic renderer content is written with `textContent`; `scripts/verify-renderer-shell.js` asserts that the renderer does not use `innerHTML`.
- The service registry is Lab-local and fixture-heavy. It reads local workspace files for briefing data and exposes fixture families/states through `aura.presentationFixture`.
- Electron visual smoke is substantial support tooling that drives DOM state through `executeJavaScript`, captures screenshots, checks overflow, and exercises material harness states.

## Clean Presentation-Head Candidate Surfaces

The following are plausible clean presentation-head candidates after a split and review, not export-ready surfaces today:

- Bridge State Readout / Instrument Status Band: the state label, primary value, summary, age, source count, basis, pips, marker, and non-color-only tone treatment.
- View intent control and layout behavior: Summary, Basis, and Details as local presentation modes, including body/readout `data-view-intent` state.
- Basis focus rail: basis, freshness, coverage, and gaps/warnings as compact presentation lanes.
- Readout Detail drawer: hydrated rows, detail reveal, row facets, overflow sentinel, and lazy visual treatments, if kept clearly renderer-local and not promoted as bridge schema.
- Attention panel pattern: compact "Needs Attention" display with capped items and source labeling, if renamed or generalized only under a later accepted presentation decision.
- Presentation slot registry concepts in `src/renderer/app.js`: lanes, local hydration, view intent policy, local row facets, overflow sentinel, and lazy visual as display mechanics.
- Material body treatments proven in the harness: TTL strip, long text detail containment, and availability reason distinction, but only as extracted presentation materials, not with the current harness wrapper or staged fixture state definitions.
- CSS containment and responsiveness patterns: long-token wrapping, narrow layout stacking, reduced-motion gate, non-color-only markers, and stable compact metadata rows.

These surfaces are candidates because they describe post-bridge human presentation behavior. They still need extraction from project briefing copy, Lab fixture state, SmokeFlash controls, and Electron smoke assumptions before they can become a clean head.

## Lab-Only Workshop / SmokeFlash / Material-Harness / Tooling Inventory

Clearly Lab-only today:

- `src/renderer/index.html`
  - `.test-mode-bar.workshop-only`
  - `.material-harness.workshop-only`
  - `#material-state`
  - `#authority-window-ttl-strip`
  - `#long-text-detail-block`
  - `#availability-reason-treatment`
  - visible "SmokeFlash material harness" eyebrow
- `src/renderer/app.js`
  - `setupWorkshopMode`
  - `setupFixtureControls`
  - `setupMaterialHarness`
  - `materialHarnessDefinition`
  - `authorityWindowStates`
  - `renderAuthorityWindowMaterial`
  - `longTextDetailBlockStates`
  - `renderLongTextDetailBlock`
  - `availabilityReasonTreatmentStates`
  - `renderAvailabilityReasonTreatment`
  - material detail toggle handlers
- `src/renderer/styles.css`
  - `.workshop-only` gating
  - `.test-mode-bar`
  - `.material-harness`
  - `.ttl-strip`, `.ttl-detail`
  - `.long-text-detail-block`, `.long-text-detail-row`
  - `.availability-reason-treatment`, `.availability-detail-body`
- `src/main/main.js`
  - `AURA_LAB_ELECTRON_VISUAL_SMOKE`
  - `AURA_LAB_WORKSHOP_MODE`
  - `AURA_LAB_MATERIAL_HARNESS`
  - `AURA_LAB_VISUAL_SMOKE_DIR`
  - `runVisualSmoke`
  - screenshot capture and visual smoke result writing
  - DOM-driving helper functions using `webContents.executeJavaScript`
- `scripts/electron-visual-smoke.ps1`
  - project-local Electron smoke wrapper and `.tmp/electron-visual-smoke` artifacts
- `src/services/serviceRegistry.js`
  - `aura.presentationFixture`
  - `BRIEFING_TEST_MODES`
  - `PRESENTATION_FAMILIES`
  - neutral fixture and project briefing fixture builders
  - source reads from Lab workspace files as fixture basis
- Verification scripts:
  - `scripts/verify-renderer-shell.js`
  - `scripts/verify-services.js`
  - `scripts/verify-frame-module.js`
  - `scripts/verify-all.js`

These are useful for Lab. They should not be treated as product head, shared runtime, target adapter, or target adoption scaffold.

## Export-As-Is Risks

1. Workshop code is hidden, not absent.

Normal mode hides `.workshop-only`, but the material harness DOM, styles, and JS remain in the renderer bundle. Exporting as-is would carry Lab's workshop controls and staged material states into a target-facing surface.

2. SmokeFlash and product presentation are coupled through the same entry point.

`src/main/main.js` uses env flags to load the same `src/renderer/index.html` with workshop query parameters. That is acceptable for Lab-local smoke, but not a clean export boundary.

3. The renderer-facing service bridge is Lab-local.

`window.aura.invokeService` can call the default service registry, including Lab fixture commands and task helpers. This is not an exportable bridge/runtime contract, and M32 should not turn it into one.

4. Fixture state names and display states are currently adjacent.

Renderer readout states, fixture modes, visual smoke states, and material harness states all coexist in the same files. Terms such as `failed`, `fallback`, `blocked`, `aged`, `source-no-scan`, and `partial` must not be treated as shared source enums.

5. Project briefing copy is mixed with portable display mechanics.

The current cleanest presentation candidates still sit inside Aura Lab project-state briefing UI: current packet, executor, expected output, registered services, and bridge diagnostics. A target product should not inherit that Lab coordination frame.

6. Material harness accumulation is already past the original "one Lab-local harness" shape.

There are now three material prototypes in the offered renderer bundle. ADR 0001 names accumulation as a split trigger when preparing the renderer to travel or when workshop/product distinction becomes repeatedly ambiguous.

7. Visual smoke could accidentally drive architecture.

The smoke runner captures many states, drives DOM with `executeJavaScript`, and writes detailed result JSON. This is valuable evidence tooling, but exporting around those assumptions would invert the product direction.

8. Naming tripwires remain.

`Source coverage`, `Readout basis`, `Source paths`, `Blocked`, `No scan`, `Failed`, and `Unavailable` are meaningful only with layer/owner qualification. Exporting as-is would risk source-project meaning drift.

9. Electron shell concerns are not clean-head concerns.

Frame chrome, always-on-top, service diagnostics, and registered service display may be useful in Lab, but they should not automatically travel with a presentation head.

## Split-Before-Export Requirements

Before any target-project consumption or clean-head package/folder is opened, a later explicit Dev packet should require:

- Separate Lab-only SmokeFlash/material harness entry point from the offered renderer/head.
- Remove workshop controls, material harness DOM, material staged state definitions, and workshop-only CSS from the offered renderer bundle.
- Keep Electron visual smoke as support tooling against either the Lab harness or clean head, without making smoke state shape a product API.
- Separate project briefing / coordination facts from reusable presentation head surfaces.
- Define a clean input shape only as far as needed for presentation-head rendering, without creating a durable bridge/runtime contract from Lab.
- Keep local fixture families and `aura.presentationFixture` out of exported head code.
- Keep target-specific adapters out of Lab. A clean head may accept display input; target projects own mapping into it.
- Preserve security posture from the current shell: context isolation, no renderer `require`, no direct renderer Electron API, no `innerHTML`, and a narrow preload surface appropriate to the split surface.
- Re-review all visible language for source/freshness/basis ownership after extraction, especially source coverage, source paths, blocked, failed, fallback, no data, and no-scan placeholders.
- Keep reduced-motion and containment behavior with the clean presentation surface if those modules travel.

These are requirements for a future split packet, not permission to perform the split now.

## Target-Owned Adapter Boundary Reaffirmation

ADR 0002 should remain controlling:

- Lab may provide reusable display materials, presentation grammar, clean renderer/head candidates, neutral examples, and advisory comparisons.
- Lab must not provide Atlas/Sense internal-to-Bridge mappings, target adapters, target runtime behavior, source-project data semantics, navigation doctrine, or adoption decisions.
- The target-owned adapter is the layer from source-project bridge output to clean Lab presentation head input.
- Atlas keeps Atlas meaning. Sense keeps Sense meaning. Shared spelling does not create shared semantics.
- Target adoption must happen through the target project's own local executable packet and local acceptance process.

M32 should not define a universal adapter, shared bridge schema, or central runtime contract.

## What Can Continue Lab-Local

The following can continue safely while no export/seeding/target-consumption packet is open:

- Lab-local material prototyping through the hardened workshop path.
- SmokeFlash visual review and screenshot evidence under `.tmp/electron-visual-smoke`.
- `npm.cmd run verify:all` and renderer-shell assertions as support guardrails.
- Additional material page refinement in `workspace/display-materials/` when opened by a future packet.
- Neutral fixture pressure cases for long text, empty/loading/partial/fallback/unavailable presentation behavior.
- Renderer-local experimentation with slot hydration, view intent, row facets, overflow sentinels, lazy visual treatment, and reduced-motion behavior.

These should stay explicitly framed as Lab workshop/proving-bench work, not product direction by themselves.

## Recommended Next Milestone Direction

Recommendation: open a composed display output milestone first, while keeping export/seeding parked.

Rationale:

- The current renderer has promising clean-head ingredients, but no accepted combined output reference exists in `workspace/display-schema-ledger.md`.
- Export readiness would be clearer after Lab has one product-facing composed display candidate that uses accepted materials without relying on the SmokeFlash harness as the organizing frame.
- A clean-head split milestone is justified before any export, but doing the split before a composed output may force decisions around an incomplete surface.
- Continuing unlimited material harness accumulation increases ADR 0001 pressure. The next milestone should either compose an output from current accepted materials or explicitly open split readiness.

Concrete next decision for Human / Overseer:

Choose one of these:

1. Open a composed display output milestone that uses current accepted materials Lab-locally and produces the first combined output reference.
2. If Human already wants target-facing movement, open a clean-head split milestone before any export/seeding discussion.
3. Park export/seeding until after composed output acceptance.

This advisory recommends option 1, with option 2 as the required path if target consumption becomes immediate.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- exporting, seeding, cloning, packaging, or offering the current renderer/head outward
- splitting SmokeFlash/material harness code
- creating or modifying target-project adapters
- defining a durable bridge/runtime contract
- interpreting Atlas/Sense source meaning
- changing accepted Lab or target-project terminology
- running live/private/network tests
- making target adoption or export permission claims
- letting visual smoke or fixture taxonomy drive product architecture

## Unresolved Questions

- Should the next packet compose a display output using the accepted TTL, long text, and availability materials before split work?
- What is the minimum clean-head input shape needed for presentation rendering without becoming a durable bridge contract?
- Which parts of the current project briefing frame are useful only to Lab, and which should be abstracted into product-agnostic display regions?
- Should `Source coverage` and `Source paths` remain visible labels in a future clean head, or should a UI/UX terminology review lower their authority implication first?
- How many additional material prototypes should Lab allow in the current bundled harness before split-readiness becomes the next safest milestone?
- Should Electron shell/frame behavior remain outside the clean presentation head unless a target project explicitly asks for shell patterns?

## Verification

No verification was required by the packet because this advisory changed only the expected artifact. No optional local verification command was run.
