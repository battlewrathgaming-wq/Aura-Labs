# UIUXHS35: Presentation Feature Steering Correction

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: M11 - Confidence Presentation Pass
Sequence: HS35
Source packet: workspace/current.md
Status: Advisory correction, pending Human / Overseer acceptance

## Scope

This note re-reviews the current M11 direction after the Human steering correction.

Aura Lab exists to explore better ways to present information beautifully, clearly, calmly, and meaningfully. It is a test bed for UI information-display features. Verification tooling, fixture axes, screenshots, and visual-smoke evidence exist only to support presentation experiments.

This note does not implement code, define a bridge contract, create target adapters, add families, or make Core ownership claims.

## 1. What Should Be Accepted From The Current Proposal

Accept Confidence / Trust presentation as the next visible UI feature.

The useful idea is not `viewIntent` as an architecture topic. The useful idea is a designed screen/module that helps a human understand:

```txt
Can I trust this displayed information right now, how fresh is it, and where did it come from?
```

Accept these parts:

- Confidence / Trust View as a visible presentation feature.
- Rich source and freshness treatments.
- Calm, beautiful stale / partial / failed / empty / loading communication.
- Progressive disclosure for source and diagnostic detail.
- Compact expressive diagnostics that feel like an instrument cluster, not a log dump.
- Human-readable "why this matters" summaries.
- Small purposeful transitions where they clarify loading, disclosure, stale/fresh change, or failure recovery.
- Existing Briefing and Neutral Seed families as test material.
- `family`, `state`, and optional `viewIntent` only as Lab-local review scaffolding.

The accepted direction should be described as:

```txt
Build a beautiful Confidence / Trust presentation module for bridge-fed data.
```

Not:

```txt
Prove a family/state/viewIntent taxonomy.
```

## 2. What Should Be Rejected Or Parked

Reject as product direction:

- Broad visual-smoke matrices.
- Screenshot diagnostics as the main milestone output.
- Elaborate fixture taxonomy.
- Treating `family + state + viewIntent` as the product.
- Confidence scores, truth ranking, or source authority doctrine.
- Durable data or bridge contracts.
- Target adapters.
- Atlas, Sense, or Core doctrine.

Park for later:

- New presentation families.
- Source-first standalone view.
- Attention-first standalone view.
- Comparison / delta view.
- Timeline or activity surface.
- Side-by-side screenshot review workbench.
- Broad fixture scenario packs.
- Presentation candidate sheet generator.
- Shared component extraction.
- Framework migration.
- Animation system beyond small purposeful transitions.
- Core-owned transfer prompt.
- Target-owned Atlas/Sense review.

Some of these are good future ideas, especially timeline, comparison, and source-first views. They are parked because the Lab should first make one high-quality information-display feature feel genuinely good.

## 3. Smallest Next UI Feature Prototype

Prototype:

```txt
Confidence / Trust Presentation Module
```

The first screen should feel like a designed information readout, not a test harness.

Required presentation qualities:

- A confidence/trust header or band that is elegant and readable.
- Source/freshness display that feels intentionally designed.
- State-aware visual tone:
  - loading: pending and alive, not empty
  - stale: calm time-risk
  - partial: usable but incomplete
  - failed: restrained and clear
  - empty: intentional absence
  - populated: current and source-labeled
- A human-readable "why this matters" line.
- Progressive disclosure for source details or diagnostics.
- Compact diagnostics with meaningful status lights, chips, or small readouts.
- Long source labels and long human text should stay readable without dominating.
- Neutral Seed should remain generic Lab-local fixture material.

Optional if cheap:

- Subtle transition for opening the detail panel.
- Subtle loading shimmer or staged skeleton.
- Small status light color shift for stale / failed / partial.

Do not make motion constant or ornamental.

## 4. Data / Fixture Shape Needed

Keep the shape practical and provisional. It should exist to feed the presentation, not to become a contract.

Minimum useful fields:

```txt
status
title
summary
certainty
freshness
last_read_at
sources
items
missing_fields
warnings
diagnostics
error
```

Useful presentation-only additions if needed:

```txt
why_this_matters
source_summary
freshness_label
trust_items
diagnostic_summary
```

Suggested `trust_items` shape:

```txt
label
tone
summary
detail
source
```

Suggested tones:

```txt
known
fresh
stale
partial
missing
unavailable
pending
```

These are Lab fixture fields for presentation experiments only. They should not be named or documented as a durable bridge shape.

## 5. Minimum Verification Needed

Verification should support visual judgment without becoming the project.

Enough:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Enough screenshot/smoke coverage:

- Briefing Confidence / Trust normal or stale.
- Briefing failed.
- Briefing long-text or narrow.
- Neutral Seed normal.
- Neutral Seed stale or partial.
- One loading capture only if deterministic.

Enough assertions:

- App launches.
- Confidence / Trust module is visible.
- Source, freshness, certainty, and "why this matters" are visible.
- Diagnostics are visible but secondary.
- Neutral Seed remains generic and Lab-local.
- Representative long-text or narrow capture has no horizontal overflow.
- No Electron process remains after smoke.

Not needed yet:

- Full family x state x view matrix.
- Scenario pack system.
- Exhaustive screenshot naming taxonomy.
- Heavy result JSON expansion.
- Pixel-perfect visual assertions.

Manual review should remain part of acceptance because this milestone is about presentation quality.

## 6. Corrected Dev Runway Recommendation

The active M11 runway should be accepted only if read as a presentation feature runway.

Recommended runway shape:

1. Build the Confidence / Trust presentation module as the primary deliverable.
2. Make source/freshness/confidence treatment visibly better and calmer.
3. Add progressive disclosure for source or diagnostics only if it improves the first read.
4. Improve stale, partial, failed, empty, and loading language/tone where they affect trust.
5. Keep diagnostics compact and secondary.
6. Keep existing Briefing and Neutral Seed families only.
7. Use `viewIntent` only if it is the simplest way to expose Summary versus Confidence for review.
8. Run minimum verification only.
9. Handoff should emphasize presentation behavior and screenshots, not test taxonomy.

If Dev work starts to center on fixture taxonomy, smoke matrix expansion, or result JSON shape, it should stop and re-center on the visible Confidence / Trust module.

## Acceptance Pause Note

Acceptance should remain paused until Human / Overseer confirms that M11 is judged by the quality of the visible presentation feature, not by the breadth of verification infrastructure.

The corrected acceptance question should be:

```txt
Does the Confidence / Trust module make bridge-fed uncertainty feel clear, calm, readable, and beautiful?
```

Not:

```txt
Did the Lab expand the axes and smoke taxonomy?
```
