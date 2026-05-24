# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M11 - Presentation View Intent And State Hardening
Roadmap source: UI/UX and Engineering HS34 proposals accepted by Overseer
Sequence: HS35
Previous accepted handshake: `workspace/complete/milestone-M10/OverseerHS33-implemented-family-screenshot-review.md`
Current executor: Dev
Current focus: add a Lab-local view intent axis and close accepted smoke/state coverage gaps
Expected DevHS filename: `workspace/DevHS35-presentation-view-intent-state-hardening.md`
Archive target on milestone completion: `workspace/complete/milestone-M11/`

## Purpose

This is the only active executable work packet for Aura Lab.

M08 proved separate `family` and `state` axes across Briefing and Neutral Seed. M10 accepted that the proof is strong Lab evidence but still has local presentation gaps: loading is not captured, Neutral Seed stale/partial screenshots are missing from smoke parity, and the bench could learn more by proving a second reading posture over the same fixture material.

This packet asks Dev to add `viewIntent` as a third Lab-local review axis, implement Confidence View as the first new view intent, and harden visual smoke coverage. It does not ask for new families, target adoption, Core transfer, or a durable bridge contract.

## Source Of Intent

Accepted into this packet:

- `workspace/UIUXHS34-view-intent-axis-proposal.md`: recommends `family + state + viewIntent`, Confidence View first, loading capture, and Neutral Seed stale/partial parity.
- `workspace/EngineeringHS34-presentation-view-intent-proposal.md`: confirms feasibility and recommends a bounded Dev slice for summary/confidence, loading, parity, and family/state/view-aware smoke.
- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`: accepted Briefing plus Neutral Seed family/state proof.
- `docs/current-state/m09-packaging-review-current-state.md`: accepted packaging classification.
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`: accepted screenshot review and local refinement risks.

Accepted constraints:

- Keep only existing families: Briefing and Neutral Seed.
- Keep `family`, `state`, and `viewIntent` separate.
- Implement only two view intents:
  - `summary`
  - `confidence`
- Treat `summary` as the current/default presentation mapping.
- Treat `confidence` as a presentation lens over existing status, freshness, certainty, source, missing-field, warning, and availability data.
- Make `loading` first-class in visual smoke.
- Add Neutral Seed stale/partial smoke coverage.
- Keep all fixture data Lab-local and provisional.

Deferred:

- new presentation families
- Tactical HUD
- Operator Workbench
- source-first, attention-first, comparison, or other view intents
- broad fixture scenario pack system
- Core-owned transfer prompt
- target-owned Atlas/Sense review
- durable post-bridge presentation contract
- durable upstream bridge/data contract
- framework or stack choice
- shared component extraction

Rejected:

- treating `viewIntent` as product navigation.
- adding a confidence score, truth ranking, or source authority model.
- using Atlas, Sense, or Core semantics to explain confidence.
- adding another family in this milestone.
- treating smoke JSON as a bridge/data contract.

Escalated: None.

Promoted into durable docs: None yet.

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/UIUXHS34-view-intent-axis-proposal.md`
- `workspace/EngineeringHS34-presentation-view-intent-proposal.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `workspace/complete/milestone-M08/DevHS30-fixture-backed-presentation-family-prototype.md`
- `workspace/complete/milestone-M10/UIUXHS33-implemented-family-screenshot-review.md`
- `package.json`
- `src/main/main.js`
- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Do not inspect or edit sibling projects for this packet.

## Ordered Dev Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, current branch/tree health, and required files. Read all required sources before editing.
2. Add `viewIntent` as a Lab-local review axis:
   - values: `summary`, `confidence`
   - `summary` preserves the current presentation mapping
   - `confidence` emphasizes trust, state, freshness, certainty, sources, missing fields, warnings, and availability
   - do not add scoring, ranking, or source authority doctrine
3. Add a development/review control for view intent:
   - suggested label: `View intent`
   - keep it visually secondary with existing review controls
   - do not make it product navigation
4. Make loading first-class for visual smoke:
   - loading must read as pending, not empty or failed
   - use controlled fixture/smoke behavior rather than unstable sleeps where practical
   - loading belongs to `state`, not `viewIntent`
5. Add Neutral Seed stale/partial smoke parity:
   - include desktop stale and partial captures for Neutral Seed
   - narrow Neutral Seed partial or stale is optional only if low cost; required narrow coverage remains long-text unless Dev chooses more
6. Extend family/state/view-aware smoke:
   - result JSON includes `view_intents_checked`
   - observations include family, state, viewIntent, viewport, screenshot, selected family/state/view intent, status, certainty, freshness, sources, missing/unavailable or warning counts if practical, diagnostics visibility, frame controls visibility, and overflowing elements
   - screenshot names include family, state, and view intent
7. Keep the smoke matrix bounded:
   - keep current summary coverage for Briefing and Neutral Seed
   - add loading coverage
   - add Confidence View for both existing families across a small useful set: at minimum normal, stale, failed, partial, long-text
   - include at least one narrow Confidence View capture
8. Update verification:
   - service/static verification should assert separate family/state/view intent axes
   - verify no new family is introduced
   - verify Neutral Seed copy remains safe
   - verify visual smoke includes loading, Neutral Seed stale/partial, `view_intents_checked`, and observation-level view intent
9. Run required verification, update Evidence / Dev Handoff below, and create `workspace/DevHS35-presentation-view-intent-state-hardening.md`.

## Guardrails And Non-Goals

- Do not add new presentation families.
- Do not implement Tactical HUD.
- Do not implement Operator Workbench.
- Do not add source-first, attention-first, comparison, or other view intents.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose or migrate UI framework.
- Do not treat `viewIntent` as product navigation.
- Do not add confidence scoring, truth ranking, or source authority doctrine.
- Do not import Atlas evidence doctrine or Sense tactical doctrine.
- Do not treat Neutral Seed as Aura Core doctrine, ownership, architecture, or contract.
- Do not stage `.tmp`, screenshots, result JSON, cache, dependency artifacts, or generated smoke output.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- Confidence View requires a durable bridge/data contract
- implementation needs scoring, ranking, or source authority doctrine
- target-project semantics are needed to explain confidence
- a new family becomes necessary
- loading capture requires brittle timing rather than a controlled state
- smoke output becomes too broad for practical review
- sibling-project inspection or edits become necessary
- live/private/destructive actions become necessary

## Required Verification

Run:

```powershell
npm.cmd run verify:all
```

Run:

```powershell
npm.cmd run smoke:electron
```

Also ensure the direct visual smoke command still works unless a replacement is explicitly justified:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Check process cleanup:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Expected evidence:

- `verify:all` passes.
- `smoke:electron` passes.
- direct visual smoke passes or any replacement is explicitly justified.
- no Electron process remains after smoke.
- no new presentation family is introduced.
- `summary` and `confidence` are available view intents.
- loading appears in smoke evidence.
- Neutral Seed stale/partial screenshots are included.
- smoke result JSON includes `view_intents_checked`.
- observations include family, state, viewIntent, viewport, screenshot, and overflow evidence.
- long-text and narrow captures report no horizontal overflow.

## Evidence

Dev updates this section before handoff.

Verification run:

```txt
Not yet run.
```

Files changed:

```txt
Not yet recorded.
```

Findings:

```txt
Not yet recorded.
```

Deferrals:

```txt
Not yet recorded.
```

## Dev Handoff

Dev must complete this section before returning:

Summary of implementation:

```txt
Not yet recorded.
```

Exact files changed:

```txt
Not yet recorded.
```

Family/state/view intent behavior:

```txt
Not yet recorded.
```

Confidence View behavior:

```txt
Not yet recorded.
```

Loading and Neutral Seed parity behavior:

```txt
Not yet recorded.
```

Visual smoke result path and coverage:

```txt
Not yet recorded.
```

Verification commands and results:

```txt
Not yet recorded.
```

Process cleanup result:

```txt
Not yet recorded.
```

Remaining risks or recommended Overseer action:

```txt
Not yet recorded.
```

Expected handoff file:

```txt
workspace/DevHS35-presentation-view-intent-state-hardening.md
```
