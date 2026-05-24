# EngineeringHS35: Presentation Feature Steering Proposal

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Status: Advisory proposal for Human / Overseer review

## Steering Correction

Aura Lab's primary goal is cool, high-quality HTML presentation features for bridge-fed data.

Visual smoke, fixture axes, screenshots, and result JSON are support mechanisms. They should help the Lab build and trust better presentation work, but they are not the product.

`family + state + viewIntent` remains useful only if it helps create better presentation experiences. It should not become the center of the milestone.

## Recommended Cool Presentation Features

### 1. Confidence / Trust View

A refined presentation module that answers:

```txt
What can I trust here, how fresh is it, and where did it come from?
```

Presentation qualities:

- elegant trust band with status, freshness, certainty, and source summary
- clear known / partial / stale / unavailable grouping
- subtle visual tone changes for stale, partial, failed, and loading
- confidence readout without inventing a numeric score
- source chips or compressed source paths that stay inspectable without dominating
- human-readable "why this matters" summary

This is the strongest next mode because it is beautiful, portable, and directly tied to bridge-fed uncertainty.

### 2. Rich Source / Freshness Treatment

Make source and freshness feel designed rather than dumped.

Ideas:

- source stack with compact labels, expanded detail, and last-read metadata
- freshness ribbon or timestamp lane
- source compression for long paths
- "verified from local source" / "last successful read" / "missing source" treatment
- hover or disclosure detail for machine-looking source strings

This can be part of Confidence View rather than a separate feature.

### 3. Progressive Disclosure Panels

Give the presentation a beautiful first read while preserving detail.

Ideas:

- primary summary stays calm and readable
- secondary source/diagnostic detail can expand
- unavailable/missing fields are grouped behind an explanation panel
- diagnostics are compact but expressive, not a raw footer

This supports both Briefing and Neutral Seed without adding a new family.

### 4. Beautiful Stale / Partial / Failed States

Current state grammar works, but could feel more intentional.

Ideas:

- stale: amber time-wash, last-good-read framing, quiet warning tone
- partial: visible completeness gaps without panic
- failed: restrained failure card with source and recovery posture
- empty: honest blank state with calm explanation
- loading: low-motion shimmer or staged skeleton, only if it clarifies

This is presentation work first, verification second.

### 5. Compact Expressive Diagnostics

Diagnostics should feel like an instrument panel, not raw debug debris.

Ideas:

- compact service count / runtime / warning chips
- grouped diagnostic drawer
- severity tinting for warnings without product alarmism
- "bridge health" as a secondary readout

Keep this Lab-local. Do not turn it into target operations doctrine.

### 6. Comparison / Readout View

Future feature that compares two reads or two states:

- what changed
- what went missing
- what became stale
- what recovered
- what source changed

This is compelling, but it likely needs more fixture shape than the next smallest slice.

### 7. Timeline / Activity Surface

Future feature for showing bridge-read sequence, freshness changes, or source activity.

This could be visually excellent, but should wait until the core trust/source presentation is richer.

### 8. Responsive / Animated Transitions

Use motion only where it clarifies:

- loading shimmer
- stale transition pulse
- panel reveal
- source detail expand/collapse

No ambient animation for its own sake.

## Recommended Next Smallest Safe Lab Prototype

Recommended next prototype:

```txt
Confidence / Trust Presentation Module
```

Working milestone name:

```txt
M11 - Confidence Presentation Pass
```

Smallest safe feature slice:

- keep existing Briefing and Neutral Seed families
- do not add another family
- add a polished confidence/trust presentation mode or module
- improve source/freshness display
- improve stale/partial/failed/empty/loading treatments where they touch confidence
- add progressive disclosure for source and diagnostic detail
- keep diagnostics compact and expressive
- keep current plain HTML/CSS/JS stack

This should feel like a real presentation feature, not a test harness exercise. The reviewer should be able to look at it and say: "This makes uncertain bridge-fed data feel understandable and stylish."

## Data / Fixture Shape Needed

The existing fixture payload is close. The prototype probably needs only light additions or normalization, not a durable contract.

Minimum data shape:

```txt
status
certainty
freshness / last_read_at
sources[]
source_labels[]
missing_fields[]
warnings[]
fields
attention_items or equivalent review items
error, when failed
```

Useful Lab-local additions if needed:

```txt
summary_reason
confidence_items[]
source_summary
freshness_label
diagnostic_summary
```

These should remain Lab-local presentation fixture fields unless later promoted.

Suggested `confidence_items[]` shape, if implementation needs it:

```txt
label
state
detail
source
```

Example states:

```txt
known
partial
stale
missing
unavailable
```

Important boundary:

- no numeric confidence score
- no ranking model
- no source authority model
- no target doctrine
- no durable bridge schema

Fixture states needed for the prototype:

- loading
- normal / populated
- empty
- stale
- failed
- partial
- long-text

Neutral Seed stale/partial should be available for review because Confidence View is less meaningful if it only sees easy states.

## Verification: Enough, Not Excessive

Verification should prove the presentation feature is stable and reviewable, not turn the project into a matrix machine.

Enough for the next prototype:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Smoke should capture a small representative set:

- Briefing normal confidence/trust presentation
- Briefing stale
- Briefing failed
- Briefing long-text narrow
- Neutral Seed normal
- Neutral Seed partial
- Neutral Seed stale
- Neutral Seed long-text narrow
- one loading capture if deterministic

Result JSON should record only what helps review:

- screenshot name
- family
- state
- presentation mode/module
- viewport
- status text
- source/freshness/certainty presence
- overflow evidence

Do not require exhaustive family x state x mode x viewport coverage yet. Full matrix coverage is not worth it until the feature is visually accepted.

Manual review should be expected. This milestone is about visual quality and presentation clarity, so screenshots matter more than a large pass/fail table.

## What Remains Parked

Park for now:

- new families
- full view-intent framework
- source-first standalone view
- attention-first standalone view
- comparison/delta implementation
- timeline/activity surface
- side-by-side screenshot workbench
- broad fixture scenario pack system
- presentation candidate sheet generator
- Core transfer prompt
- Atlas/Sense target review
- durable bridge contract
- shared component library
- framework migration
- animation system beyond small purposeful transitions
- exhaustive visual smoke matrix

## Recommendation

Engineering recommends reframing the next Aura Lab step from "add a third axis" to:

```txt
Build a beautiful Confidence / Trust presentation module for bridge-fed data.
```

Use family/state/view intent only as review scaffolding. The product value is the presentation: elegant trust language, rich source/freshness treatment, intentional stale/partial/failed/loading states, compact diagnostics, and a human-readable "why this matters" layer.

The best next smallest prototype is Confidence / Trust because it is ambitious, visually meaningful, portable, and still safe inside Aura Lab's post-bridge boundary.

