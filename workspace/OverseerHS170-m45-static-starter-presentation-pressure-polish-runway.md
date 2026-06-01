# OverseerHS170 - M45 Static Starter Presentation Pressure Polish Runway

Status: Open
Role: Aura Lab Overseer
Date: 2026-06-01

## Request

Sense relay pressure extract landed:

```txt
workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md
```

Human direction:

- treat it as in-scope useful information
- properly inform Dev rather than relying on wishful thinking
- draft a UI/UX expected outline so the next specialist can shape the polish before implementation

## Decision

Open M45 as a UI/UX advisory/spec runway.

Do not open Dev yet.

The goal is to translate target-shaped pressure into a bounded polish specification for the static starter head.

## Executor

UI/UX advisor / presentation polish specialist.

## Expected Artifact

Create:

```txt
workspace/UIUXHS170-static-starter-presentation-pressure-polish.md
```

## Read

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/HS168-sense-relay-lab-static-starter-head-presentation-pressure-extract.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m45-static-starter-presentation-pressure-polish.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`

## Task

Produce a UI/UX advisory artifact that answers:

```txt
What bounded polish, examples, or inspection-shape changes should Lab make before wider target relay, based on the Sense presentation pressure extract?
```

Focus on:

1. `NO DATA` vs `UNAVAILABLE`
   - How should Lab make generic display absence and unavailable/blocked source reasons visually and textually distinct?
   - What should remain Lab display example language?
   - What should be source-owned and qualified?

2. Reason-first absence examples
   - What example states should be added or revised to show blocked, no observation, degraded, and unavailable without collapsing them into `NO DATA`?
   - Which labels should be Lab-neutral and which should pass through as source-owned placeholders?

3. Source-owned visible-label pass-through
   - How should the head show a source-owned state/label as primary or near-primary while still qualifying owner/layer?
   - What detail/reveal support is needed?

4. Coverage / Known fields density
   - When should `Coverage` / `Known fields` stay visible?
   - When should it move behind detail for compact target-shaped use?
   - Is this a view mode, example variant, or copy/detail policy?

5. Reference scaffolding vs offered head
   - What is Lab demo scaffolding: selector, top boundary note, reference labels?
   - What would a target relay inspection view need to show so reviewers can see what travels?

6. Minimal polish set
   - Which recommendations are required before wider target relay?
   - Which are useful but optional?
   - Which should remain parked until Atlas/Sense produce more pressure?

## Required Output Structure

Include:

1. Files reviewed.
2. Current-state understanding.
3. Sense pressure summary, clearly labeled as Lab-facing presentation pressure only.
4. Recommended polish set.
5. Required-before-relay items, if any.
6. Optional polish items.
7. Parked items.
8. Proposed example/state additions or revisions.
9. Proposed copy and visual distinction guidance for absence/unavailable/source-owned labels.
10. Proposed compact/detail handling for `Coverage` / `Known fields`.
11. Proposed target relay inspection view or note.
12. React recommendation.
13. Dev packet recommendation:
    - implement now
    - split first
    - wait for more target pressure
    - no Dev needed
14. Acceptance criteria for a future Dev packet, if recommended.
15. Risks and boundary cautions.

## Guardrails

- Advisory/spec only.
- Do not implement code.
- Do not edit target projects.
- Do not decide Sense adoption.
- Do not rename Sense terms or states.
- Do not make Lab owner of Sense meaning.
- Do not treat Lab labels as target enums.
- Do not create bridge/runtime contracts.
- Do not broaden into React, renderer export, or target adapter work.
- Do not claim visual/browser/screenshot evidence unless actually produced.
- Preserve Lab as presentation-head/tooling owner, not downstream project maintainer.

## Verification

No live or browser verification required.

If only the advisory artifact changes, no code verification is required by the specialist, though the Overseer may run:

- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`
