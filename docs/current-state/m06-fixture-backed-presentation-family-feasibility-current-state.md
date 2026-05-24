# M06 Fixture-Backed Presentation Family Feasibility Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M06 - Fixture-Backed Presentation Family Feasibility.

Engineering reviewed the current post-bridge presentation rigging and accepted that fixture-backed presentation families are feasible without a framework migration, durable bridge contract, or target-project doctrine import if family and state are modeled as separate axes.

## Accepted Feasibility Direction

The recommended smallest later proof is:

- preserve the current Briefing family
- add one neutral second family before target-like families
- keep `family` separate from `state`
- keep the accepted state grammar: normal, empty, stale, failed, partial, long-text
- use a Lab-local neutral fixture registry
- add renderer-level family switching only as presentation mapping
- extend visual smoke to report family, state, viewport, long-text pressure, overflow, screenshots, and result JSON
- preserve the plain HTML/CSS/JS stack

## Accepted Classification

Lab-local:

- `aura.projectBriefing`
- any future `aura.presentationFixture` command unless promoted later
- Lab fixture copy
- Needs Attention semantics
- generated smoke artifacts

Core-neutral candidates:

- separate family/state axes
- neutral fixture registry concept
- source/freshness/certainty presentation slots
- state grammar as presentation affordances
- family-aware smoke result shape
- long-text and narrow viewport pressure strategy
- diagnostics demotion pattern

Target-adaptable only after target-owned review:

- Tactical HUD family
- Operator Workbench family
- target-style action, evidence, lane, queue, operator, or tactical terms

Do-not-port:

- Lab fixture copy as product direction
- Needs Attention as shared Aura doctrine
- Atlas or Sense doctrine inferred from Lab
- Lab fixture commands as durable bridge contracts

## Verification

Runtime verification was not required and was not run.

Accepted evidence:

```txt
Engineering performed read-only source inspection.
Engineering checked git status before writing the advisory.
Engineering created workspace/EngineeringHS28-fixture-backed-presentation-family-feasibility.md.
```

## Boundaries

- M06 was advisory only.
- No code was implemented.
- No UI was redesigned.
- No Dev runway was written by Engineering.
- No durable bridge/data contract was defined.
- No framework or stack migration was chosen.
- No target-project adoption was requested.
- No sibling projects were inspected or edited.
