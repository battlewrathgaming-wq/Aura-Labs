# OverseerHS36: M11 Steering Correction

Date: 2026-05-24
Role: Overseer
Project: Aura Lab
Milestone: M11 - Confidence Presentation Pass
Sequence: HS36
Status: Steering correction accepted; Dev runway revised

## Steering Accepted

Aura Lab's primary goal is cool, high-quality HTML presentation features for bridge-fed data.

Visual smoke, fixture axes, screenshots, and result JSON are support mechanisms only. They should help Aura Lab build and trust better presentation work, but they are not the product.

The current M11 direction is corrected from axis/test hardening toward a visible presentation feature:

```txt
Build a beautiful Confidence / Trust presentation module for bridge-fed data.
```

`family`, `state`, and `viewIntent` remain useful only as review scaffolding.

## Accepted From Current Proposals

Accepted:

- Confidence / Trust View as the next visible presentation feature.
- Rich source/freshness treatment as part of Confidence / Trust View.
- Progressive disclosure for source and diagnostic detail where it improves clarity.
- Beautiful stale, partial, failed, empty, and loading state communication.
- Compact expressive diagnostics.
- Purposeful responsive transitions only if they clarify state or disclosure.
- `viewIntent` only as a Lab-local review/control concept, not the milestone center.
- Minimal smoke evidence to support visual review.

## Rejected Or Parked

Rejected:

- letting visual smoke become product direction
- broad screenshot matrices as acceptance criteria
- making `family + state + viewIntent` the product
- confidence scoring, truth ranking, or source authority doctrine
- target-project or Core ownership claims

Parked:

- new presentation families
- full view-intent framework
- source-first standalone view
- attention-first standalone view
- comparison/delta implementation
- timeline/activity surface
- broad fixture scenario packs
- side-by-side screenshot review workbench
- Core transfer prompt
- Atlas/Sense target review
- durable bridge contracts
- shared component library extraction
- framework migration

## Smallest Next Prototype

The smallest next UI feature prototype is:

```txt
Confidence / Trust Presentation Module
```

It should feel like a designed presentation feature: elegant, readable, calm, informative, and visually meaningful.

Smallest safe slice:

- keep existing Briefing and Neutral Seed families
- add a Confidence / Trust presentation mode or module
- improve source/freshness display
- improve stale/partial/failed/empty/loading treatment where it touches confidence
- add or refine progressive disclosure for source and diagnostics
- keep diagnostics compact and expressive
- keep plain HTML/CSS/JS

## Fixture Shape Needed

Existing fixture data is mostly enough.

Useful fields:

- `status`
- `certainty`
- `last_read_at`
- `sources`
- `source_labels`
- `missing_fields`
- `warnings`
- `fields`
- `attention_items` or equivalent review items
- `error` for failed state

Optional Lab-local additions if needed:

- `summary_reason`
- `confidence_items`
- `source_summary`
- `freshness_label`
- `diagnostic_summary`

These remain presentation fixture fields, not a durable bridge contract.

## Minimum Verification

Enough verification:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Smoke should capture a small representative set:

- Briefing confidence normal
- Briefing stale
- Briefing failed
- Briefing long-text narrow
- Neutral Seed normal
- Neutral Seed partial
- Neutral Seed stale
- Neutral Seed long-text narrow
- one loading capture if deterministic

Verification should confirm no overflow and that source/freshness/certainty are visible, but it should not become a broad matrix.

Manual screenshot review is expected because this milestone is about visual quality.

## Corrected Dev Runway Recommendation

Rewrite M11 as:

```txt
M11 - Confidence Presentation Pass
```

Dev should build the Confidence / Trust presentation module first, using review axes and smoke only to support the feature. Do not make screenshot diagnostics, fixture taxonomy, or smoke expansion the milestone goal.
