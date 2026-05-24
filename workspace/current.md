# Current Workspace Packet

Status: Active UI/UX advisory runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M07 - Fixture-Backed Presentation Family Spec
Roadmap source: M06 Engineering feasibility accepted by Overseer
Sequence: HS29
Previous accepted handshake: `workspace/complete/milestone-M06/OverseerHS29-m06-closure-and-m07-runway.md`
Current executor: UI/UX
Current focus: specify a bounded first fixture-backed presentation family proof
Expected UIUXHS filename: `workspace/UIUXHS29-fixture-backed-presentation-family-spec.md`
Archive target on milestone completion: `workspace/complete/milestone-M07/`

## Purpose

This is the only active executable work packet for Aura Lab.

M06 accepted that fixture-backed presentation families are feasible if Aura Lab keeps `family` and `state` as separate axes, keeps fixture modeling Lab-local, and starts with a small proof rather than all proposed families. Engineering recommends current Briefing plus one neutral second family, preferably Neutral Seed when no target-owned direction exists.

This packet asks UI/UX to specify that bounded first proof. It does not ask for code implementation.

## Source Of Intent

Accepted into this packet:

- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `workspace/complete/milestone-M06/EngineeringHS28-fixture-backed-presentation-family-feasibility.md`: recommends separate family/state axes, Lab-local fixture registry, renderer-level family switch, and family-aware smoke.
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`: accepted M06 feasibility state.
- `workspace/complete/milestone-M06/UIUXHS27-non-authoritative-milestone-recommendations.md`: recommends fixture-backed presentation families as next direction.

Accepted constraints:

- Specify only the current Briefing family and one Neutral Seed family for the first proof.
- Keep Tactical HUD and Operator Workbench deferred unless Human/Overseer later request target-owned review or a new advisory pass.
- Treat all fixture content as Lab-local.
- Treat Neutral Seed as a presentation test family, not Aura Core doctrine.
- Keep family/state separated.
- Preserve current state grammar: normal, empty, stale, failed, partial, long-text.
- Preserve source/freshness/certainty as presentation affordances.

Deferred:

- Dev prototype.
- Packaging review.
- target-project adapter work.
- durable post-bridge presentation contract.
- durable upstream bridge/data contract.
- framework or stack choice.
- Aura Core transfer.

Rejected:

- writing target-project doctrine.
- specifying all four families as implementation-ready.
- treating Neutral Seed as Core-owned.
- treating `aura.projectBriefing` or any future fixture command as a durable bridge contract.

Escalated: None.

Promoted into durable docs:

- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`

## Required Reading

UI/UX must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/complete/milestone-M06/UIUXHS27-non-authoritative-milestone-recommendations.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`
- `workspace/complete/milestone-M06/EngineeringHS28-fixture-backed-presentation-family-feasibility.md`
- `workspace/complete/milestone-M06/OverseerHS29-m06-closure-and-m07-runway.md`

Optional read-only implementation context:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `.tmp\electron-visual-smoke\visual-smoke-result.json` if present

Do not inspect or edit sibling projects for this packet.

## Ordered UI/UX Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, inspect git tree health, and read all required sources before writing the advisory.
2. Define the first family proof as two Lab-owned presentation families:
   - Briefing family
   - Neutral Seed family
3. For each family, specify:
   - intended screen role
   - first-screen hierarchy
   - typography roles
   - containment rules
   - trust/source/freshness/certainty placement
   - diagnostics behavior
   - state mapping for normal, empty, stale, failed, partial, and long-text
   - what fixture copy must not imply
4. Define shared presentation grammar across the two families:
   - family versus state
   - primary surface versus secondary diagnostics
   - density, spacing, and text pressure expectations
   - how the house style should remain consistent without making both families look identical
5. Define family-aware visual smoke expectations:
   - recommended screenshot names
   - required family/state/viewport coverage
   - long-text and narrow viewport pressure
   - overflow and clipping notes UI/UX expects Dev to prove later
6. Name explicit non-goals and target-boundary cautions:
   - no Atlas doctrine
   - no Sense doctrine
   - no Core ownership claim
   - no durable bridge contract
7. Create `workspace/UIUXHS29-fixture-backed-presentation-family-spec.md` with the spec, risks, human decisions, and recommended next role/action.

## Guardrails And Non-Goals

- Do not implement code.
- Do not write a Dev runway.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose a UI framework or migrate stack.
- Do not specify Tactical HUD or Operator Workbench as implementation-ready.
- Do not import Atlas evidence doctrine or Sense tactical doctrine.
- Do not treat Lab fixture content as product direction.
- Do not treat Neutral Seed as Aura Core doctrine.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- the spec needs target-project doctrine to be meaningful
- Neutral Seed cannot be described without implying Core ownership
- a durable bridge contract appears necessary
- implementation details require Engineering or Dev decisions outside the accepted M06 constraints
- sibling-project inspection or edits become necessary
- live/private/destructive actions become necessary

## Required Verification

No runtime verification is required.

UI/UX should perform read-only source inspection and cite files reviewed.

Optional non-mutating check:

```powershell
git status --short --branch
```

If run, record the result in the advisory.

## Evidence

UI/UX updates this section only if this packet is executed in-place.

Checks run:

```txt
Not yet run.
```

Files reviewed:

```txt
Not yet recorded.
```

Findings:

```txt
Not yet recorded.
```

## UI/UX Handoff

UI/UX must create:

```txt
workspace/UIUXHS29-fixture-backed-presentation-family-spec.md
```

The handoff must include:

- files reviewed
- first proof family definitions
- shared presentation grammar
- state mapping guidance
- typography and containment guidance
- trust/source/freshness/certainty guidance
- diagnostics guidance
- family-aware visual smoke expectations
- non-goals and target-boundary cautions
- human decisions needed
- recommended next role/action
