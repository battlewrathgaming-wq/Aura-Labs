# EngineeringHS28: Fixture-Backed Presentation Family Feasibility

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Milestone: M06 - Fixture-Backed Presentation Family Feasibility
Status: Advisory complete

## Scope

This is a read-only Engineering advisory for Aura Lab. It reviews the current post-bridge presentation rigging and recommends the smallest safe implementation shape for later fixture-backed presentation families.

No code was implemented. No UI was redesigned. No Dev runway, durable bridge contract, shared component library, framework choice, sibling-project inspection, or target-project doctrine import is included.

## Files Reviewed

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/UIUXHS27-non-authoritative-milestone-recommendations.md`
- `workspace/OverseerHS28-engineering-feasibility-runway.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `workspace/complete/milestone-M05/OverseerHS26-m05-closure.md`
- `package.json`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Git tree health checked with `git status --short --branch`: branch is `main...origin/main`; no uncommitted changes were reported before this advisory was written.

## Current Architecture Summary

### Service command and bridge boundary

The current presentation path is a single provisional read-only service command:

```txt
aura.projectBriefing
```

It is registered in `src/services/serviceRegistry.js` by `createDefaultRegistry()` and exposed to Electron through `registerElectronServiceHandlers()`. The renderer reaches it through the preload service bridge via `window.aura.invokeService()`. This keeps the renderer behind a narrow bridge and avoids direct filesystem reads in presentation code.

The command currently reads local Lab workspace files, especially `workspace/current.md`, `package.json`, and `docs/current-state/m01-project-state-briefing-current-state.md`. Those reads are Lab fixture mechanics, not a durable upstream bridge or target-product data model.

### Fixture and test mode shape

`BRIEFING_TEST_MODES` defines the current state axis:

```txt
normal, empty, stale, failed, partial, long-text
```

`buildProjectBriefing(payload)` accepts `payload.mode` and legacy `payload.fixtureState`, normalizes unknown values to `normal`, and returns a briefing payload with:

- `view_status`
- `certainty`
- `action_posture`
- `attention_items`
- `fields`
- `source_labels`
- `sources`
- `missing_fields`
- `warnings`
- `last_read_at`
- `mode`
- `available_modes`

The useful grammar is the state handling, source/freshness/certainty slots, missing/failed handling, and long-text pressure. The Lab-specific content inside the briefing remains fixture material.

### Renderer mapping shape

`src/renderer/index.html` defines one presentation family: a briefing surface. `src/renderer/app.js` maps the service payload into fixed DOM slots:

- title and summary
- action posture
- bridge state and freshness
- certainty and sources
- Needs Attention
- coordination facts
- secondary diagnostics
- registered services

The renderer currently has only a bridge test mode selector. It has no family selector, no family registry, and no layout-level family switch. The UI stack is plain HTML/CSS/JS, and the accepted current-state docs explicitly preserve that no framework migration has occurred.

### Visual smoke selection shape

`src/main/main.js` runs visual smoke when `AURA_LAB_ELECTRON_VISUAL_SMOKE=1`. Smoke currently:

- captures normal first
- iterates `empty`, `stale`, `failed`, `partial`, and `long-text`
- resizes to 720x640 and captures `narrow-partial`
- writes screenshots under `.tmp/electron-visual-smoke`
- writes `visual-smoke-result.json`

Each observation records selected mode, title, action posture, attention count/items, status, certainty, freshness, sources, mode note, visual structure, frame control visibility, briefing-before-diagnostics ordering, and horizontal overflow findings.

The current overflow check is useful but narrow: it checks selected text-bearing elements for horizontal overflow, not vertical clipping, semantic completeness, or family coverage.

### Verification hooks

`package.json` exposes:

```txt
npm.cmd run verify:all
npm.cmd run verify:services
npm.cmd run verify:renderer-shell
npm.cmd run smoke:electron
```

`scripts/verify-services.js` checks service registry behavior, briefing states, legacy `fixtureState`, long-text payload pressure, source labels, action posture, and read-only task behavior.

`scripts/verify-renderer-shell.js` statically checks the renderer shell, Frame usage, smoke wrapper, smoke modes, overflow check presence, no `innerHTML`, source/certainty copy, Frame controls, and shell/service expectations.

`scripts/electron-visual-smoke.ps1` is the project-local wrapper. It derives paths from its script location, keeps artifacts under `.tmp`, sets smoke environment variables, runs Electron, and validates the result JSON status.

## Modeling Options Considered

| Option | Fit | Notes |
| --- | --- | --- |
| Separate service commands per family | Weak fit | Simple to reason about for one family at a time, but it duplicates registration and test code, encourages family names to look like durable service contracts, and makes smoke discovery harder. It also risks implying target semantics too early. |
| Separate fixture modes for families | Weak fit | The existing `mode` axis already means state pressure: normal, empty, stale, failed, partial, long-text. Combining family and state in one string, such as `briefing-long-text`, would blur the grammar and make smoke/reporting harder to read. |
| Neutral fixture registry | Strong fit | Best implementation shape for later Dev. A Lab-local registry can keep `family` and `state` separate, list available families/states, and generate deterministic fixture payloads without claiming a durable bridge contract. |
| Renderer-level family switch | Good fit with boundary | Needed to prove different presentation mappings. It should choose a renderer mapping/layout and pass `family` plus `state` through the bridge. It should not own source truth or target semantics. |
| Smaller option implied by current code | Strong fit for first prototype | Preserve the current `aura.projectBriefing` path as the briefing compatibility path, then add the smallest neutral family-aware fixture path behind the same bridge style. Use the current mode selector and smoke loop as the model, but split family from state. |

## Recommended Smallest Implementation Path

For a later Dev packet, the smallest safe path is:

1. Add a Lab-local neutral fixture registry that models two axes:
   - `family`
   - `state`

2. Keep state names aligned with the accepted state grammar:
   - `normal`
   - `empty`
   - `stale`
   - `failed`
   - `partial`
   - `long-text`

3. Keep the existing `aura.projectBriefing` command working as the current briefing-family compatibility command.

4. Add the smallest family-aware read-only command only if needed for clean separation, with a neutral name such as:

```txt
aura.presentationFixture
```

This command should be treated as Lab-local unless later promoted. It should accept a payload shaped like:

```txt
family + state
```

That is an implementation convenience for Lab fixtures, not a durable bridge/data contract.

5. Add a renderer-level family selector that only switches presentation mapping/layout. It should not reinterpret product semantics.

6. Prototype only two families first:
   - current Briefing family
   - one neutral second family, preferably Neutral Seed unless Human/Overseer explicitly choose Tactical HUD or Operator Workbench

7. Preserve the plain HTML/CSS/JS stack. No framework migration is justified by the current need.

This path proves family switching while keeping the bridge narrow, fixture content Lab-local, and state grammar legible.

## Visual Smoke Strategy

Future family-aware smoke should report every observation with explicit axes:

```txt
family
state
viewport
screenshot
selected_family
selected_state
status
title or primary label
certainty
freshness
sources
diagnostics visibility
frame controls visibility
overflowing
```

Recommended first smoke matrix:

| Coverage | Recommendation |
| --- | --- |
| Primary family | Run all accepted states for Briefing to preserve current coverage. |
| Second family | Run `normal`, `empty`, `failed`, and `long-text` first. Add `stale` and `partial` once the family surface has distinct affordances for them. |
| Viewports | Capture default desktop and at least one narrow viewport. Narrow should include long-text, not only partial. |
| Long-text pressure | Include long text per family because each layout will fail differently. |
| Overflow evidence | Preserve horizontal overflow checks and extend selector coverage to family containers, labels, controls, trust/source/freshness areas, and repeated rows. Consider recording vertical clipping separately if a later UI spec defines acceptable clipping. |
| Screenshots | Use family-state names, for example `family-briefing-state-normal.png` and `family-neutral-seed-state-long-text-narrow.png`. |
| Result JSON | Add `families_checked`, `states_checked`, `viewports_checked`, and an `observations` array keyed by family/state/viewport. |

Smoke should continue to validate that diagnostics are visible but secondary, Frame controls are visible, and result artifacts remain under project-local `.tmp`.

Avoid full matrix explosion. The goal is evidence of family switching and pressure coverage, not exhaustive screenshot generation for every theoretical pairing.

## Output Classification

### Lab-local

- `aura.projectBriefing`
- `aura.presentationFixture` if added for Lab fixtures
- current Lab briefing fixture content
- Needs Attention copy and semantics
- coordination facts pulled from `workspace/current.md`
- any concrete family copy used for review
- current visual styling specifics
- generated screenshots and `.tmp` smoke result artifacts

### Core-neutral candidate

- separate `family` and `state` axes
- neutral fixture registry concept
- source/freshness/certainty presentation slots
- loading, empty, stale, failed, partial, and long-text state grammar as presentation affordances
- family-aware smoke result shape
- long-text and narrow viewport pressure strategy
- diagnostics demotion as a presentation pattern
- project-local smoke wrapper pattern, after Core-owned review

### Target-adaptable Only After Target-Owned Review

- Tactical HUD family
- Operator Workbench family
- action-effect or preflight language
- evidence-like source boundaries
- target-style lane, queue, operator, or tactical terms
- adoption of Lab family mappings inside Atlas, Sense, or any other product

### Do-Not-Port

- Lab fixture copy as product direction
- Needs Attention as shared Aura doctrine
- Atlas evidence doctrine inferred from Lab review
- Sense tactical doctrine inferred from Lab review
- any claim that Lab fixture commands are durable bridge contracts
- any direct migration of screenshots, generated smoke artifacts, or `.tmp` content into target projects

## Risks

- Overloading `mode` with family identity would make state grammar harder to verify.
- Separate service commands per family could look like a durable contract before the Lab has earned one.
- Target-like family names can accidentally import Atlas or Sense doctrine.
- A family selector could drift into product navigation rather than presentation mapping.
- Smoke can become noisy if it captures every family/state/viewport combination.
- Long-text fixtures can be mistaken for content direction if copy is too product-like.
- Static verification may need careful updates so tests assert the grammar without freezing temporary fixture copy.
- `scripts/verify-services.js` currently asserts a Dev-runway action posture. Under Engineering or UI/UX advisory packets, that assertion may be over-coupled to one coordination state rather than the general presentation grammar.

## Stop Conditions For Later Dev

A later Dev packet should stop and escalate if:

- safe family modeling requires a durable bridge or data contract
- target-project doctrine is needed to name fields, actions, evidence, or tactical meaning
- implementation requires a UI framework migration
- all proposed families are requested at once without a bounded proof slice
- the renderer must become the source of truth to make the model work
- smoke coverage becomes too broad to review usefully
- sibling-project inspection or edits become necessary
- fixture copy starts being treated as target product direction

## Recommendation

Engineering recommends that Aura Lab proceed with Fixture-Backed Presentation Families, but only through a small first proof:

```txt
Current Briefing family + one neutral second family + family/state fixture registry + family-aware smoke.
```

The next role should be UI/UX, after Overseer acceptance, to write a tighter family spec constrained by this feasible shape. The spec should define neutral family behavior, state mapping, text pressure, and smoke expectations without target-project doctrine.

Atlas, Sense, and Core should not receive adoption prompts from this artifact. They may receive separate target-owned prompts later only after Aura Lab has a bounded prototype and a packaging review that classifies what is actually transportable.

## Remaining Uncertainty

- The best second family is still a Human/Overseer/UI-UX decision. Engineering recommends Neutral Seed as the safest first proof if no target-owned direction exists.
- The exact field names for a neutral fixture registry should wait for a bounded Dev packet or UI/UX family spec. This advisory recommends axes and boundaries, not a durable schema.
- Visual smoke can likely extend from the current runner, but the final matrix should be kept small enough for screenshots and JSON to remain reviewable.
- Runtime verification was not run, so this handoff does not claim current test status.

## Verification

Runtime verification was not run. The current packet requires read-only source inspection only, and no code was changed.
