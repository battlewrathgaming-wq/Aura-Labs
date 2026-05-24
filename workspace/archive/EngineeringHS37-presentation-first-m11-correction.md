# EngineeringHS37: Presentation-First M11 Correction

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Status: Corrective advisory while acceptance is paused

## Steering Basis

Aura Lab exists to explore better ways to present information beautifully, clearly, calmly, and meaningfully.

It is a UI information-display test bed. Verification tooling, screenshot diagnostics, fixture axes, visual-smoke coverage, and result JSON are only support mechanisms. They should never become the product direction.

This review corrects the current M11 direction by keeping the useful Confidence / Trust idea while further de-emphasizing axis grammar and test expansion.

## 1. What Should Be Accepted From The Current Proposal

Accept these parts:

- **Confidence / Trust presentation** as the next visible feature direction.
- **Rich source/freshness treatment** as a core design problem, not a debug concern.
- **Calm degraded-state communication** for loading, empty, stale, partial, and failed states.
- **Progressive disclosure** where it improves first-read clarity while preserving inspectable detail.
- **Compact expressive diagnostics** as a secondary visual signal layer.
- **Purposeful responsive transitions** if they clarify loading, disclosure, freshness, or state change.
- **Existing Briefing and Neutral Seed families only** for the next prototype.
- **Plain HTML/CSS/JS** as the implementation stack.
- **Minimal verification** to support confidence in the presentation, not to create a coverage project.

The accepted direction should be phrased as:

```txt
Build a high-quality Confidence / Trust information-display feature for bridge-fed data.
```

Not:

```txt
Expand family/state/viewIntent infrastructure.
```

## 2. What Should Be Rejected Or Parked

Reject for M11:

- making `family + state + viewIntent` the milestone center
- building a broad view-intent framework
- broad visual-smoke matrices
- screenshot diagnostic systems as product work
- elaborate fixture taxonomy
- confidence scores, rankings, or source authority models
- durable bridge/data contracts
- target adapters
- Core ownership claims
- new presentation families

Park for later:

- source-first standalone view
- attention-first standalone view
- timeline or activity surface
- comparison/readout view
- side-by-side screenshot workbench
- presentation candidate sheet generator
- broad scenario packs
- shared component extraction
- framework migration
- animation system
- Core transfer prompt
- Atlas/Sense review

These are not bad ideas. They are simply not the next smallest presentation feature.

## 3. Smallest Next UI Feature Prototype

Recommended smallest prototype:

```txt
Trust Ribbon + Confidence Detail Panel
```

This is smaller and more presentation-specific than a whole Confidence View.

### What It Is

A visible HTML presentation module embedded into the existing Briefing and Neutral Seed surfaces:

- a polished trust ribbon near the primary reading path
- source/freshness/confidence signals rendered as elegant visual units
- status lights or small signal marks for known, stale, partial, failed, and loading
- a human-readable "why this matters" summary
- a progressive detail panel for source and diagnostic depth
- compact diagnostics that feel like designed instrumentation

### Why This Is The Right Small Slice

It gives Aura Lab a new visible feature without creating a new family, a new product view, or a large framework.

It improves the part of bridge-fed UI that is most distinctively Aura Lab:

```txt
Can users calmly understand what the data is, how fresh it is, why it is trustworthy or limited, and what detail is available if they need it?
```

### Suggested Presentation Behavior

For `normal` / populated:

- trust ribbon reads stable and source-backed
- source chips are compact and inspectable
- "why this matters" summarizes the useful posture

For `loading`:

- pending state is calm and intentional
- skeleton/shimmer or subtle pulse is allowed only if restrained
- no sudden layout collapse

For `empty`:

- honest empty state, not visual failure
- clear absence explanation

For `stale`:

- amber freshness signal
- last-good-read language
- restrained time-risk treatment

For `partial`:

- known versus missing split is visually clear
- no panic tone

For `failed`:

- restrained failure treatment
- source/error basis visible
- no overclaiming

For `long-text` and narrow layouts:

- source labels and titles compress gracefully
- first read remains calm

## 4. Data / Fixture Shape Needed

Use the existing fixture payload first. Do not create a durable contract.

Current data likely sufficient:

- `view_status`
- `certainty`
- `last_read_at`
- `sources`
- `source_labels`
- `missing_fields`
- `warnings`
- `fields`
- `attention_items`
- `error`
- `family`
- `state`

Small Lab-local additions are acceptable only if they directly help presentation:

- `trust_summary`
- `freshness_posture`
- `confidence_notes`
- `source_display`
- `diagnostic_summary`

Keep additions plain and temporary. They should support rendering copy and visual grouping, not define source truth.

Do not add:

- confidence score
- source rank
- evidence authority level
- product action semantics
- target terms
- durable schema claims

## 5. Minimum Verification Needed

Minimum support verification:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Verification should answer only:

- does the app still boot and render?
- do Briefing and Neutral Seed still work?
- is the Trust Ribbon / Confidence Detail Panel visible?
- are source/freshness/certainty still present?
- are diagnostics secondary?
- is there no obvious horizontal overflow in representative long/narrow pressure?
- did Electron exit cleanly?

Representative smoke screenshots are enough:

- Briefing normal
- Briefing stale or partial
- Briefing failed
- Briefing long-text narrow
- Neutral Seed normal
- Neutral Seed stale or partial
- Neutral Seed long-text narrow
- loading only if deterministic and simple

Do not require a full family x state x view x viewport matrix. Do not make loading capture a blocker if deterministic capture would require brittle timing or distracting harness work.

Manual screenshot review remains important because the acceptance target is visual quality.

## Corrected Dev Runway Recommendation

A corrected Dev runway is appropriate, but it should be phrased more tightly than the current M11 packet.

Recommended M11 runway title:

```txt
M11 - Trust Ribbon Presentation Pass
```

Recommended Dev task:

```txt
Build a polished Trust Ribbon + Confidence Detail Panel for the existing Briefing and Neutral Seed surfaces.
```

Runway emphasis:

- visible HTML presentation feature first
- calm, beautiful source/freshness/confidence display
- meaningful status lights or signal marks
- progressive detail for sources and diagnostics
- improved degraded-state presentation where it affects trust
- minimal harness updates only where needed

Runway non-goals:

- no broad `viewIntent` implementation
- no new family
- no broad smoke matrix
- no fixture taxonomy expansion
- no contract or adapter work

Acceptance should be based on visual review plus minimal verification, not on diagnostic coverage expansion.

## Recommendation

Engineering recommends pausing acceptance of the current M11 packet until Overseer decides whether to amend it around the smaller, clearer UI feature:

```txt
Trust Ribbon + Confidence Detail Panel
```

The current Confidence / Trust direction is good. The corrected implementation target should be a beautiful information-display module, not an axis-driven mode system.

