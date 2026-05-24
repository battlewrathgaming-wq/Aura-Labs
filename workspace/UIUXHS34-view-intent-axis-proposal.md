# UIUXHS34: View Intent Axis Proposal

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: Proposed M11 - View Intent And State Coverage
Sequence: HS34
Source packet: workspace/current.md
Status: Advisory proposal, pending Human / Overseer acceptance

## Scope

This proposal reviews whether Aura Lab should add `viewIntent` as a third presentation axis after `family` and `state`.

It is advisory only. It does not implement code, write a Dev runway, define a durable bridge contract, create target-project adapters, add new families, or import Atlas/Sense doctrine.

## Source Context

Accepted project direction says Aura Lab owns portable post-bridge display mapping and presentation tooling. It owns presentation state grammar, source/freshness/certainty language, typography, containment, and visual smoke evidence after bridge-shaped or fixture-backed data arrives.

Accepted M10 review says the Briefing plus Neutral Seed proof is strong Lab evidence, but the next local value is visual refinement and smoke hardening before adding another family.

## Recommendation

Aura Lab should add `viewIntent` as a third presentation axis, but only as a Lab-local presentation review axis:

```txt
family + state + viewIntent
```

Recommended meaning:

- `family`: which presentation fixture family is being rendered.
- `state`: what bridge/presentation availability condition is being shown.
- `viewIntent`: what reading posture the same data is arranged to support.

This is a good next step because Aura Lab has already proved that families can share state grammar. The next useful question is whether the same family/state material can be re-presented for a different user reading job without inventing new product doctrine.

## Recommended Milestone Shape

Recommended milestone:

```txt
M11 - View Intent And State Coverage
```

Goal:

Prove that Aura Lab can render the existing Briefing and Neutral Seed fixture material through a third presentation axis, `viewIntent`, starting with Confidence View, while making loading first-class and bringing Neutral Seed stale/partial screenshot coverage closer to Briefing parity.

This milestone should stay inside the current two-family proof. It should not add Tactical HUD, Operator Workbench, or any new family.

## Proposed Axis Model

The safest first model is:

```txt
family: briefing | neutral-seed
state: loading | normal | empty | stale | failed | partial | long-text
viewIntent: default | confidence
```

`default` should preserve the current presentation shape.

`confidence` should rearrange or emphasize existing presentation facts around trust, certainty, freshness, source visibility, and availability. It should not create new source truth or imply a schema.

## Confidence View As First New Mode

Confidence View is the right first `viewIntent` because it is already latent in the current UI. The app already exposes certainty, sources, freshness, status, partiality, stale/failure language, and diagnostics. Confidence View would make that reading posture explicit.

Recommended Confidence View behavior:

- Lead with state, freshness, certainty, and source basis.
- Make unavailable, stale, partial, and empty distinctions highly scannable.
- Show what is known, missing, stale, unavailable, or fixture-backed.
- Keep primary content visible, but let trust/certainty become the first reading path.
- Keep diagnostics secondary.
- Avoid product-specific language such as evidence, tactical, operator, watch, queue, assessment, or Core ownership.

Confidence View should answer:

```txt
How much should I trust this presentation right now, and why?
```

It should not answer:

```txt
What does this mean for Atlas, Sense, Aura Core, or a target product workflow?
```

## Loading As First-Class State

Loading should become a first-class screenshot and smoke state.

Reason:

Aura Lab's accepted boundary includes loading, and loading is a major presentation trust moment. A user needs to know whether the shell is waiting, has no data, has stale data, has partial data, or has failed. Without a captured loading state, the state grammar is incomplete.

Recommended loading presentation:

- Use clear pending language.
- Show that source truth has not arrived yet.
- Avoid implying failure or emptiness.
- Avoid making placeholder data look populated.
- Keep motion targeted and optional for visual smoke.

Loading belongs under `state`, not `viewIntent`.

## Neutral Seed Stale / Partial Parity

Neutral Seed should receive stale and partial visual smoke coverage before another family is added.

Reason:

Neutral Seed is the generic fixture family. If it cannot demonstrate stale and partial states, the Lab cannot cleanly claim that the family/state grammar works beyond Briefing-specific material.

Recommended parity:

- Neutral Seed `stale` desktop screenshot.
- Neutral Seed `partial` desktop screenshot.
- Neutral Seed `partial` or `stale` narrow screenshot only if the implementation cost is small.

This should remain visual coverage parity, not product meaning.

## Fixture Scenario Packs

Fixture scenario packs are useful, but they should be small and Lab-local.

Recommended shape:

- A scenario pack is a named set of family/state/viewIntent combinations for review.
- Scenario packs should drive visual smoke coverage and screenshot generation.
- Scenario names should describe presentation pressure, not product domain.

Safe first packs:

- `baseline`: default view for both families across accepted states.
- `confidence`: Confidence View for key states.
- `containment`: long-text and narrow captures.
- `availability`: loading, empty, stale, failed, partial.

Do not make scenario packs into a durable bridge contract. They are review harness material.

## Family / State / View-Aware Visual Smoke

Visual smoke should become aware of the third axis.

Recommended result shape as Lab-local smoke evidence:

```txt
families_checked
states_checked
view_intents_checked
scenario_packs_checked
viewports_checked
screenshots
observations
```

Observation records should include:

```txt
family
state
viewIntent
scenarioPack
viewport
status
certainty
freshness
sources
diagnostics_visible
diagnostics_secondary
overflowing
```

This is verification evidence only. It should not be described as a bridge schema.

## Smallest Safe Implementation Slice

Smallest safe slice:

1. Add `viewIntent` as a Lab-local review axis with two values: `default` and `confidence`.
2. Preserve the current UI as `default`.
3. Implement Confidence View for existing Briefing and Neutral Seed fixture material.
4. Add `loading` as a first-class state in fixture review and visual smoke.
5. Add Neutral Seed stale/partial visual smoke coverage.
6. Extend visual smoke naming and result JSON to include `viewIntent`.

Recommended screenshot minimum:

- Briefing default loading.
- Briefing confidence normal.
- Briefing confidence stale.
- Briefing confidence failed.
- Briefing confidence partial narrow.
- Neutral Seed default stale.
- Neutral Seed default partial.
- Neutral Seed confidence normal.
- Neutral Seed confidence long-text narrow.

If that is too large, cut the slice to:

- `viewIntent: confidence`
- Briefing confidence normal/stale/failed/partial
- Neutral Seed confidence normal/partial
- loading default for Briefing
- visual smoke result includes `view_intents_checked`

## Verification Expectations

Expected checks for a future Dev milestone:

- Existing static and service verification still pass.
- `npm.cmd run verify:all` passes.
- `npm.cmd run smoke:electron` passes.
- Direct Electron visual smoke passes.
- No Electron process remains after visual smoke.
- Visual smoke result reports families, states, view intents, viewports, screenshots, and observations.
- Long-text and narrow captures report no overflowing elements.
- Diagnostics remain visible but secondary.
- Confidence View keeps source, freshness, certainty, and status in the primary reading path.
- Loading is distinguishable from empty, stale, failed, and partial.
- Neutral Seed still avoids target-like or Core-ownership language.

Suggested screenshot naming pattern:

```txt
family-{family}-state-{state}-view-{viewIntent}.png
family-{family}-state-{state}-view-{viewIntent}-narrow.png
```

This naming is smoke evidence, not product API.

## Risks

`viewIntent` could become product navigation if the UI presents it too prominently. It should remain a review control until a target project owns the user workflow.

Confidence View could accidentally sound authoritative. The copy should say what the presentation can show, not what the source truth is.

Adding `loading`, Neutral Seed stale/partial parity, scenario packs, and Confidence View in one milestone may be too much if visual polish is also expected. The first slice should favor axis proof and coverage over beauty.

Scenario packs could be mistaken for bridge scenarios or product workflows. They should be named and documented as Lab-local fixture review sets.

The third axis increases screenshot matrix size. Without scenario packs, visual smoke may become noisy fast.

## What Should Remain Parked

- New presentation families.
- Tactical HUD.
- Operator Workbench.
- Target-project adapters.
- Atlas or Sense review.
- Aura Core ownership or transfer claims.
- Durable bridge/data contracts.
- Shared component library extraction.
- Framework or stack migration.
- Product navigation language for `viewIntent`.
- Domain-specific confidence semantics beyond generic source/freshness/certainty presentation.
- Heavy animation or broad visual redesign.

## Acceptance Checks For Overseer

This proposal is ready to shape into a milestone only if Overseer accepts:

- `viewIntent` is a presentation review axis, not product meaning.
- Confidence View is the only new view intent in the first slice.
- Loading becomes first-class state coverage.
- Neutral Seed stale/partial parity is coverage hardening, not new doctrine.
- Scenario packs are Lab-local fixture review sets.
- Visual smoke may record family/state/viewIntent, but this is not a bridge contract.
- No new family is added in this milestone.

## Human / Overseer Questions

- Should Confidence View prioritize trust/freshness/source at the top, or should it preserve the current title-first hierarchy and add a stronger confidence band?
- Should loading be implemented as a static smoke state first, or should the Lab prove a short animated loading treatment?
- Is the next milestone meant to prove the third axis only, or should it also improve visual beauty and texture?
- How large should the screenshot matrix be before visual smoke becomes too heavy for fast review?
