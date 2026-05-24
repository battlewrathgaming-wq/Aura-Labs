# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M11 - Confidence Presentation Pass
Roadmap source: Human steering correction, UI/UX HS34, Engineering HS34/HS35 accepted by Overseer
Sequence: HS36
Previous accepted handshake: `workspace/complete/milestone-M10/OverseerHS33-implemented-family-screenshot-review.md`
Current executor: Dev
Current focus: build a visible Confidence / Trust presentation feature for bridge-fed data
Expected DevHS filename: `workspace/DevHS36-confidence-presentation-pass.md`
Archive target on milestone completion: `workspace/complete/milestone-M11/`

## Purpose

This is the only active executable work packet for Aura Lab.

Aura Lab exists to explore better ways to present information beautifully, clearly, calmly, and meaningfully. It is a test bed for UI information-display features.

M11 was initially framed too much around `family + state + viewIntent` and visual-smoke expansion. That framing is corrected here. Fixture axes, screenshot diagnostics, and visual smoke are support mechanisms only. The product value is the visible HTML presentation feature.

This packet asks Dev to build the smallest useful Confidence / Trust presentation feature for bridge-fed data.

## Source Of Intent

Accepted into this packet:

- Human steering correction: prioritize cool, high-quality HTML presentation features; verification supports presentation and is not the product.
- `workspace/EngineeringHS35-presentation-feature-steering-proposal.md`: recommends reframing M11 around a beautiful Confidence / Trust presentation module.
- `workspace/UIUXHS34-view-intent-axis-proposal.md`: recommends Confidence View, loading capture, and Neutral Seed stale/partial parity, but only as presentation review support.
- `workspace/EngineeringHS34-presentation-view-intent-proposal.md`: confirms feasibility for a bounded presentation slice.
- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`: accepted Briefing plus Neutral Seed family/state proof.
- `docs/current-state/m09-packaging-review-current-state.md`: accepted packaging classification.
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`: accepted screenshot review and local refinement risks.
- `workspace/OverseerHS36-m11-steering-correction.md`: accepted steering correction and revised M11 runway.

Accepted:

- Build a visible Confidence / Trust presentation module.
- Make source/freshness/confidence treatment feel designed, readable, and calm.
- Use progressive disclosure where it makes source/diagnostic detail clearer.
- Improve stale, partial, failed, empty, and loading presentation where they affect confidence.
- Keep diagnostics compact and expressive.
- Use `viewIntent` only if useful as Lab-local review scaffolding.
- Keep existing Briefing and Neutral Seed families.
- Keep fixture data Lab-local and provisional.

Rejected:

- letting visual smoke become product direction
- broad screenshot matrices as acceptance criteria
- making `family + state + viewIntent` the product
- confidence scoring, truth ranking, or source authority doctrine
- target-project or Core ownership claims
- durable bridge/data contracts

Deferred:

- new presentation families
- Tactical HUD
- Operator Workbench
- source-first, attention-first, comparison, timeline, or activity surfaces
- broad fixture scenario pack system
- Core-owned transfer prompt
- target-owned Atlas/Sense review
- durable post-bridge presentation contract
- durable upstream bridge/data contract
- framework or stack choice
- shared component extraction

Escalated: None.

Promoted into durable docs: None yet.

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/OverseerHS36-m11-steering-correction.md`
- `workspace/EngineeringHS35-presentation-feature-steering-proposal.md`
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
2. Build a Confidence / Trust presentation module:
   - make it visually distinct enough to feel like a designed feature
   - emphasize trust, freshness, certainty, source basis, known/missing/unavailable/stale distinctions
   - avoid numeric confidence scores, truth ranking, or source authority doctrine
   - keep primary content visible; confidence/trust becomes the lead reading path
3. Improve source/freshness treatment:
   - compress or weight long source paths so they stay readable without dominating
   - show last-read or freshness posture clearly
   - use elegant chips, bands, rows, or disclosure as appropriate
4. Improve degraded-state presentation where it touches confidence:
   - loading should read as pending, not empty or failed
   - stale should feel calm but time-risk aware
   - partial should show known versus missing without panic
   - failed should be restrained, clear, and not overclaiming
   - empty should be honest and visually intentional
5. Add progressive disclosure only where useful:
   - source/detail panel or diagnostic detail can expand/collapse if it improves first-read clarity
   - diagnostics remain compact, expressive, and secondary
6. Keep existing family support:
   - Briefing and Neutral Seed only
   - no new family
   - Neutral Seed stays Lab-local and generic
7. Use review scaffolding modestly:
   - if adding `viewIntent`, keep it Lab-local and secondary
   - use `summary` and `confidence` only
   - do not let axes or controls dominate the UI
8. Update verification just enough:
   - static/service verification should protect the new feature and boundaries
   - smoke should capture representative Confidence / Trust screens, not a broad matrix
   - include loading only if deterministic
   - include Neutral Seed stale/partial if low risk and useful
9. Run required verification, update Evidence / Dev Handoff below, and create `workspace/DevHS36-confidence-presentation-pass.md`.

## Guardrails And Non-Goals

- Do not make verification grammar the product.
- Do not create a broad visual-smoke matrix.
- Do not build elaborate fixture taxonomy.
- Do not add new presentation families.
- Do not implement Tactical HUD.
- Do not implement Operator Workbench.
- Do not add source-first, attention-first, comparison, timeline, or activity surfaces.
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

- Confidence / Trust presentation requires a durable bridge/data contract
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

Check process cleanup:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Direct smoke confirmation is required only if the smoke wrapper or launch path changes:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Minimum expected evidence:

- `verify:all` passes.
- `smoke:electron` passes.
- no Electron process remains after smoke.
- Confidence / Trust presentation is visible in at least Briefing normal or stale.
- Neutral Seed still renders safely and generically.
- source/freshness/certainty are visible.
- diagnostics remain secondary.
- representative long-text or narrow capture reports no horizontal overflow.

Do not expand verification beyond what is needed to support the presentation feature.

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

Confidence / Trust presentation behavior:

```txt
Not yet recorded.
```

Source/freshness treatment:

```txt
Not yet recorded.
```

Degraded state behavior:

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
workspace/DevHS36-confidence-presentation-pass.md
```
