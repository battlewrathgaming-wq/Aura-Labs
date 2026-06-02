# OverseerHS180 - M50 Glass Primitive React Readiness Map Runway

Status: Active runway
Role: Overseer
Executor: UI/UX advisor or presentation specialist
Expected artifact: `workspace/UIUXHS180-glass-primitive-react-readiness-map.md`

## Request

Produce an advisory readiness map for turning Lab's accepted glass primitive vocabulary into a future warm-start presentation shelf.

This is not a Dev packet. Do not implement code.

## Read

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/glass-inventory-spine.md`
- `workspace/display-assets.md`
- `workspace/display-selection-shelf.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `docs/roadmap/m50-glass-primitive-react-readiness-map.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/packages/sense-trial-glass/README.md`

## Context

Lab has accepted:

- a framework-neutral static starter
- a Sense trial glass package
- a display selection shelf
- a glass inventory spine

The Human wants to reduce future UI cold starts without making Lab own Atlas, Sense, or future target project surfaces.

The desired posture:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

React may be useful as a warm-start shape, but it must not become a forced product contract or a target-owned pane/module design.

Use-context examples:

- Atlas may need larger pane/workspace composition.
- Sense may need compact readout strips, module-present surfaces, or dynamic module faces.

These examples are context only. Do not define Atlas or Sense product surfaces.

## Task

Create:

```txt
workspace/UIUXHS180-glass-primitive-react-readiness-map.md
```

## Required Output

Include:

1. Files reviewed.
2. Current state understanding.
3. Primitive readiness table with:
   - primitive
   - purpose
   - CSS/token-only suitability
   - React wrapper suitability
   - example-only suitability
   - project-owned composition risk
   - starter recommendation
   - do-not-harden notes
4. React warm-start boundary.
5. Props/input philosophy.
6. CSS/token strategy.
7. Example composition policy.
8. Atlas/Sense use-context differences, clearly context-only.
9. Recommended first starter contents.
10. What to exclude.
11. Risks.
12. Suggested first Dev packet if accepted.
13. Acceptance criteria for a later primitive starter.
14. Parked items.

## Guardrails

- Advisory only.
- Do not implement code.
- Do not edit target projects.
- Do not create target adapters or mappers.
- Do not create bridge/runtime contracts.
- Do not create package/export mechanics.
- Do not create React components yet.
- Do not name final Atlas/Sense panes or modules as Lab-owned outputs.
- Do not make React canonical for all Lab glass.
- Do not make Lab owner of source meaning, target terms, target state semantics, runtime behavior, adoption, or final layout.
- Keep primitive names meaning-light.
- Treat project examples as pressure/context, not authority.

## Acceptance Standard

The advisory is fit if it gives Lab a useful next-step map while preserving target freedom:

- Dev can later see what the first primitive starter would include.
- Human can see what is being offered as a shelf of ingredients.
- Target projects can see they are not adopting Lab state labels, sample data, or final pane designs.
- Lab can avoid building a bespoke component for every visual idea.
