# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M08 - Fixture-Backed Presentation Family Prototype
Roadmap source: M07 UI/UX spec accepted by Overseer
Sequence: HS30
Previous accepted handshake: `workspace/complete/milestone-M07/OverseerHS30-m07-closure-and-m08-runway.md`
Current executor: Dev
Current focus: implement the first bounded fixture-backed presentation family proof
Expected DevHS filename: `workspace/DevHS30-fixture-backed-presentation-family-prototype.md`
Archive target on milestone completion: `workspace/complete/milestone-M08/`

## Purpose

This is the only active executable work packet for Aura Lab.

M06 accepted that fixture-backed presentation families are feasible if `family` and `state` remain separate axes. M07 accepted a UI/UX spec for the first bounded proof: preserve the current Briefing family and add one Lab-local Neutral Seed family. This packet asks Dev to implement that smallest useful proof.

## Source Of Intent

Accepted into this packet:

- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `workspace/complete/milestone-M06/EngineeringHS28-fixture-backed-presentation-family-feasibility.md`: recommends separate family/state axes, Lab-local fixture registry, renderer-level family switch, and family-aware smoke.
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`: accepted M06 feasibility state.
- `workspace/complete/milestone-M07/UIUXHS29-fixture-backed-presentation-family-spec.md`: accepted first proof spec.
- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`: accepted M07 spec state.
- `workspace/complete/milestone-M07/OverseerHS30-m07-closure-and-m08-runway.md`: M07 accepted and M08 opened.

Accepted constraints:

- Implement only Briefing and Neutral Seed.
- Keep Neutral Seed Lab-local and domain-neutral.
- Keep `family` and `state` separate.
- Preserve current state grammar: normal, empty, stale, failed, partial, long-text.
- Preserve source/freshness/certainty in the primary reading path.
- Preserve diagnostics as visible but secondary.
- Preserve plain HTML/CSS/JS stack.

Deferred:

- Tactical HUD family.
- Operator Workbench family.
- packaging review.
- target-project adapter work.
- durable post-bridge presentation contract.
- durable upstream bridge/data contract.
- framework or stack choice.
- Aura Core transfer.

Rejected:

- treating Neutral Seed as Aura Core doctrine, ownership, architecture, or contract.
- using target-like Atlas/Sense terms in Neutral Seed.
- implementing all proposed families at once.
- defining a durable bridge/data contract.

Escalated: None.

Promoted into durable docs:

- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`
- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`
- `workspace/complete/milestone-M06/EngineeringHS28-fixture-backed-presentation-family-feasibility.md`
- `workspace/complete/milestone-M07/UIUXHS29-fixture-backed-presentation-family-spec.md`
- `workspace/complete/milestone-M07/OverseerHS30-m07-closure-and-m08-runway.md`
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
2. Add a Lab-local family/state fixture shape:
   - keep current Briefing behavior working
   - add Neutral Seed fixture data
   - keep `family` and `state` as separate axes
   - keep states: normal, empty, stale, failed, partial, long-text
   - keep fixture data Lab-local and provisional
3. Add presentation-family selection in the development/review controls:
   - suggested label: `Presentation family`
   - keep state selector separate, suggested label: `Review state`
   - do not make the family selector feel like product navigation
4. Add Neutral Seed rendering:
   - use generic labels such as `Primary sample`, `Secondary sample`, `Source layer`, `Freshness basis`, `Display certainty`, and `Presentation boundary`
   - avoid evidence, tactical, operator, assessment, watch, queue, combat, intelligence, Core source, Core seed, schema, source of truth, approved, synced, or live
   - keep trust/source/freshness/certainty visible
   - keep diagnostics secondary
   - support normal, empty, failed, and long-text at minimum
5. Preserve Briefing coverage:
   - normal, empty, stale, failed, partial, long-text
   - existing direct `aura.projectBriefing` compatibility if practical
   - existing source/freshness/certainty and diagnostics behavior
6. Add family-aware visual smoke:
   - Briefing: normal, empty, stale, failed, partial, long-text
   - Neutral Seed: normal, empty, failed, long-text
   - narrow viewport: Briefing partial and Neutral Seed long-text
   - screenshot names should include family and state
   - result JSON should include `families_checked`, `states_checked`, `viewports_checked`, `screenshots`, and `observations`
   - observations should include family, state, viewport, title, status, certainty, freshness, sources, diagnostics visibility, diagnostics secondary status, frame controls visibility, and overflowing elements
7. Update verification:
   - service verification should check family/state shape and Neutral Seed safe copy
   - renderer/static verification should check separate family/state controls and family-aware smoke coverage
   - keep existing verification passing
8. Run required verification, update Evidence / Dev Handoff below, and create `workspace/DevHS30-fixture-backed-presentation-family-prototype.md`.

## Guardrails And Non-Goals

- Do not implement Tactical HUD.
- Do not implement Operator Workbench.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose or migrate UI framework.
- Do not treat Neutral Seed as Aura Core doctrine, ownership, architecture, or contract.
- Do not import Atlas evidence doctrine or Sense tactical doctrine.
- Do not use target-like terms in Neutral Seed.
- Do not remove current Briefing behavior.
- Do not remove existing state modes.
- Do not stage `.tmp`, screenshots, result JSON, cache, dependency artifacts, or generated smoke output.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- Neutral Seed requires Core ownership language to implement
- safe family modeling requires a durable bridge contract
- state and family cannot remain separate without broader architecture change
- implementation requires framework migration
- visual smoke matrix becomes too broad to review
- target-project doctrine is needed
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
- smoke covers Briefing normal, empty, stale, failed, partial, long-text.
- smoke covers Neutral Seed normal, empty, failed, long-text.
- smoke includes narrow Briefing partial and narrow Neutral Seed long-text.
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

Family/state behavior:

```txt
Not yet recorded.
```

Neutral Seed copy safety:

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
workspace/DevHS30-fixture-backed-presentation-family-prototype.md
```
