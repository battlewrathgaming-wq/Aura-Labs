# M07 Fixture-Backed Presentation Family Spec Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M07 - Fixture-Backed Presentation Family Spec.

UI/UX specified the first bounded fixture-backed presentation family proof as two Lab-owned presentation families: Briefing and Neutral Seed. The spec preserves separate `family` and `state` axes, keeps Neutral Seed Lab-local, and defines family-aware visual smoke expectations without creating target-project doctrine, Aura Core ownership, or a durable bridge contract.

## Accepted Spec Direction

The first proof should include:

- current Briefing family
- Neutral Seed family
- separate family and state selectors
- accepted state grammar: normal, empty, stale, failed, partial, long-text
- source/freshness/certainty visible in the primary reading path
- diagnostics visible but secondary
- text containment under long copy
- family-aware visual smoke evidence

## Briefing Family

Briefing remains the Lab project-state presentation family.

It may continue to prove:

- trust band placement
- action posture handling
- Needs Attention as Lab-local fixture content
- coordination facts under long text
- diagnostics demotion

Needs Attention, coordination facts, and `aura.projectBriefing` remain Lab fixture semantics.

## Neutral Seed Family

Neutral Seed is accepted as a Lab-local presentation test family for generic bridge-shaped data.

Neutral Seed does not imply:

- Aura Core ownership
- Aura Core adoption
- seed architecture
- reusable Core doctrine
- durable bridge/data contract
- target-product direction

Neutral Seed should use generic labels such as:

- `Primary sample`
- `Secondary sample`
- `Source layer`
- `Freshness basis`
- `Display certainty`
- `Presentation boundary`

It must avoid target-like or ownership-heavy terms such as evidence, tactical, operator, assessment, watch, queue, combat, intelligence, Core source, Core seed, schema, source of truth, approved, synced, or live.

## Accepted Visual Smoke Expectations

Family-aware visual smoke should use explicit family/state/viewport reporting.

First proof coverage:

- Briefing: normal, empty, stale, failed, partial, long-text
- Neutral Seed: normal, empty, failed, long-text
- Narrow viewport: at least Briefing partial and Neutral Seed long-text

Recommended screenshot names include:

```txt
family-briefing-state-normal.png
family-briefing-state-empty.png
family-briefing-state-stale.png
family-briefing-state-failed.png
family-briefing-state-partial.png
family-briefing-state-long-text.png
family-neutral-seed-state-normal.png
family-neutral-seed-state-empty.png
family-neutral-seed-state-failed.png
family-neutral-seed-state-long-text.png
family-neutral-seed-state-long-text-narrow.png
```

Result JSON should report:

- `families_checked`
- `states_checked`
- `viewports_checked`
- `screenshots`
- `observations`

Each observation should include family, state, viewport, title, status, certainty, freshness, sources, diagnostics visibility, diagnostics secondary status, frame controls visibility, and overflowing elements.

## Boundaries

- M07 was advisory only.
- No code was implemented.
- No Dev runway was written by UI/UX.
- No durable bridge/data contract was defined.
- No shared component library was created.
- No framework or stack migration was chosen.
- Tactical HUD and Operator Workbench remain deferred.
- Atlas, Sense, and Aura Core adoption remain target-owned future decisions.
