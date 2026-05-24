# UIUXHS29: Fixture-Backed Presentation Family Spec

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: M07 - Fixture-Backed Presentation Family Spec
Sequence: HS29
Status: Advisory specification, pending Human/Overseer acceptance

## Scope

This artifact specifies the first bounded fixture-backed presentation family proof for Aura Lab.

It covers only two Lab-owned presentation test families:

- Briefing family
- Neutral Seed family

This is not a Dev runway, implementation, durable bridge/data contract, shared component library, target-project adapter, Aura Core transfer, or product doctrine.

Important orchestration constraint:

Neutral Seed is a Lab-local presentation test family only. It does not imply Aura Core ownership, seed architecture, reusable Core doctrine, or a bridge contract. It defines presentation behavior, not product meaning.

## Files Reviewed

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
- Optional implementation context: `src/renderer/index.html`, `src/renderer/app.js`, `src/renderer/styles.css`

Read-only check:

```powershell
git status --short --branch
```

Observed:

```txt
## main...origin/main
```

## First Proof Definition

The first family proof should test whether Aura Lab can map fixture-backed, bridge-shaped data into more than one presentation surface without blurring product meaning.

Proof shape:

```txt
family + state + viewport/text pressure
```

Family and state must remain separate axes:

- `family` answers: what presentation layout is being tested?
- `state` answers: what degraded or pressure condition is being tested?

First families:

- `briefing`
- `neutral-seed`

First states:

- `normal`
- `empty`
- `stale`
- `failed`
- `partial`
- `long-text`

Do not combine axes into strings such as `briefing-long-text` as the canonical model.

## Shared Presentation Grammar

All families must preserve:

- primary surface first, diagnostics second
- explicit state display
- source/freshness/certainty visible in the primary reading path
- missing and unavailable copy as intentional states
- typography roles with fixed sizing by role
- text containment under long content
- development/review fixture mode language
- no target-project product terms
- no implication that fixture data is source truth

House style should remain consistent through:

- graphite/ship-system surface treatment
- restrained luminous separators
- state-colored accents
- readable spacing
- clear typography hierarchy
- secondary diagnostics

Families should not look identical. They should share grammar while varying layout density and information structure.

## Family 1: Briefing

### Intended Screen Role

The Briefing family presents current Lab/project-state fixture data as a compact read-only briefing.

It proves:

- trust band placement
- action posture handling
- Needs Attention as Lab-local fixture content
- coordination facts under long text
- diagnostics demotion

### First-Screen Hierarchy

1. Shell identity and frame controls.
2. Family label: `Briefing`.
3. Action posture.
4. Title and summary.
5. State/freshness badge.
6. Trust strip: certainty and source labels.
7. Needs Attention.
8. Coordination facts.
9. Development/review controls.
10. Secondary diagnostics and registered services.

### Typography Roles

- Title: display role, max two lines.
- Action posture: status/trust role, not display-sized.
- Summary: long-note role, wide only.
- Trust labels: compact field labels.
- Trust values: value text, wraps in wide row.
- Needs Attention labels: compact panel headings.
- Needs Attention text: normal value/long-note hybrid, stacked rows.
- Coordination facts: label/value pairs; long rows span wider layout.
- Diagnostics: secondary diagnostic text.

### Containment Rules

- Needs Attention items remain stacked, not narrow columns.
- Long source labels may wrap in the trust strip but must not horizontally overflow.
- Long focus/current packet/previous handshake values use wide cells.
- Missing values use `Not provided`; failed required values use `Unavailable`.
- No sentence copy in tiny cells.

### Trust / Source / Freshness / Certainty

Trust strip stays above coordination facts.

Allowed copy patterns:

- `Verified from local workspace sources`
- `Showing last successful read`
- `Partial view`
- `Unavailable`
- `Last read {timestamp}`
- `Source: {Lab-local source label}`

Do not imply the bridge payload is a durable contract.

### Diagnostics Behavior

Diagnostics are below the primary briefing surface or visually secondary.

Registered services remain support information, not primary product meaning.

### State Mapping

Normal:

- Shows populated briefing facts.
- Shows up to three Needs Attention items.
- Certainty is source-backed.

Empty:

- Title and attention area show intentional empty copy.
- Should not look failed.

Stale:

- Shows previous successful data with visible stale/freshness language.
- Source labels remain visible.

Failed:

- Shows `Unavailable` for required content.
- Does not render stale facts as current.

Partial:

- Shows available facts.
- Names missing areas where safe.
- Uses `Not provided` for missing optional fields.

Long-text:

- Stresses title, summary, sources, attention, current packet, focus, expected output, and previous handshake.
- Must not introduce product semantics beyond Lab fixture pressure.

### Fixture Copy Must Not Imply

- target-product direction
- shared Aura doctrine
- durable bridge schema
- target-project adoption
- that Needs Attention is a universal Aura semantic

## Family 2: Neutral Seed

### Intended Screen Role

Neutral Seed is a Lab-local presentation test family for generic bridge-shaped data.

It exists to prove that the display grammar can render neutral sample data without Lab project-packet semantics. It is a presentation test surface only.

Neutral Seed does not mean:

- Aura Core owns this family
- Aura Core should adopt this family
- a seed architecture has been accepted
- a reusable Core doctrine exists
- a bridge contract has been defined

### First-Screen Hierarchy

1. Shell identity and frame controls.
2. Family label: `Neutral Seed`.
3. Presentation state badge.
4. Generic sample title.
5. Trust strip: source layer, freshness basis, certainty.
6. Sample data blocks.
7. Missing/partial/unavailable slot area.
8. Development/review controls.
9. Secondary diagnostics.

### Typography Roles

- Family title: screen title role, concise.
- State badge: status/trust role.
- Sample block headings: compact panel headings.
- Sample values: value text.
- Generic notes: long-note role only in wide rows.
- Missing slots: same size as replaced value, muted but explicit.
- Diagnostics: secondary diagnostic text.

### Containment Rules

- Use generic sample labels such as `Primary sample`, `Secondary sample`, `Source layer`, `Freshness basis`, and `Display note`.
- Avoid product terms like evidence, tactical, operator, assessment, watch, queue, combat, or intelligence.
- Long sample values move into wide rows.
- Repeated sample cells must have max-line or wrapping behavior.
- Source/freshness/certainty must remain visible under long text.

### Trust / Source / Freshness / Certainty

Neutral Seed uses placeholders and generic labels:

- `Source layer`
- `Freshness basis`
- `Display certainty`
- `Presentation boundary`

Allowed copy patterns:

- `Fixture-backed sample`
- `Presentation test data`
- `Last generated {timestamp}`
- `Partial sample`
- `Required sample unavailable`

Avoid:

- `Core source`
- `Core seed`
- `source of truth`
- `schema`
- `approved`
- `synced`
- `live`

### Diagnostics Behavior

Diagnostics are secondary and should describe presentation review mechanics only:

- selected family
- selected state
- visual smoke readiness
- fixture source

Diagnostics must not imply runtime ownership by Core or any target project.

### State Mapping

Normal:

- Shows generic sample data.
- Shows source/freshness/certainty as presentation slots.

Empty:

- Shows `No sample items reported` or equivalent intentional empty copy.

Stale:

- Shows stale freshness basis for sample data.
- Makes clear it is a fixture condition.

Failed:

- Shows `Unavailable` for required sample areas.
- Keeps trust strip visible.

Partial:

- Shows available sample data.
- Names missing sample slots.

Long-text:

- Stresses generic sample title, display note, source layer, freshness basis, and sample values.
- Must remain domain-neutral.

### Fixture Copy Must Not Imply

- Aura Core adoption
- Core reusable rigging ownership
- seed architecture
- bridge schema
- product meaning
- target-project content direction

## Shared Family / State Selection Guidance

Recommended UI model for later Dev:

- Family selector: chooses presentation family.
- State selector: chooses review state.

The family selector should be labeled as development/review scoped. It is not product navigation.

Suggested labels:

- `Presentation family`
- `Review state`
- `Development-only fixture preview`

Avoid:

- `Product`
- `App mode`
- `Core seed`
- `Target`
- `Schema`

## Density, Spacing, And House Style

Briefing:

- medium density
- wider text rows
- attention-first briefing posture
- stronger project-state hierarchy

Neutral Seed:

- lower semantic density
- generic sample blocks
- more obvious fixture/review language
- less personality than Briefing

Shared style:

- same shell
- same typography roles
- same trust strip grammar
- same state color logic
- same diagnostic demotion
- same overflow discipline

## Family-Aware Visual Smoke Expectations

Recommended screenshot naming:

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

Recommended result JSON fields:

- `families_checked`
- `states_checked`
- `viewports_checked`
- `screenshots`
- `observations`

Each observation should include:

- `family`
- `state`
- `viewport`
- `title`
- `status`
- `certainty`
- `freshness`
- `sources`
- `diagnostics_visible`
- `diagnostics_secondary`
- `frame_controls_visible`
- `overflowing`
- `clipped` if Dev adds clipping checks

Required coverage for first proof:

- Briefing: normal, empty, stale, failed, partial, long-text.
- Neutral Seed: normal, empty, failed, long-text.
- Narrow viewport: at least Briefing partial and Neutral Seed long-text.

Avoid matrix explosion. Add stale/partial for Neutral Seed later if the surface has distinct behavior worth proving.

## Non-Goals And Target-Boundary Cautions

- Do not implement code from this advisory.
- Do not write a Dev runway.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose or migrate UI framework.
- Do not specify Tactical HUD or Operator Workbench as implementation-ready.
- Do not import Atlas evidence doctrine.
- Do not import Sense tactical doctrine.
- Do not treat Neutral Seed as Aura Core doctrine, ownership, architecture, or contract.
- Do not edit sibling projects.
- Do not treat Lab fixture copy as product direction.

## Human Decisions Needed

- Should the first Dev proof implement only the required Neutral Seed states, or include stale/partial immediately?
- Should the selector labels use `Presentation family` and `Review state`, or does Human prefer different language?
- Should Neutral Seed be visually plainer than Briefing to emphasize fixture neutrality?
- Should long-text narrow smoke include both families in the first Dev slice?

## Recommended Next Role / Action

Recommended next role:

Overseer review.

If accepted, recommended next packet:

```txt
DevHS30-fixture-backed-presentation-family-prototype.md
```

Recommended Dev scope:

- preserve current Briefing family
- add Lab-local Neutral Seed family
- keep family/state separate
- keep all fixture data Lab-local
- add family/state selectors scoped as development/review controls
- add family-aware visual smoke
- do not add Tactical HUD or Operator Workbench
- do not define a durable bridge contract

## Risks

- Neutral Seed wording can accidentally sound like Aura Core ownership if labels are sloppy.
- A family selector can feel like product navigation unless it is clearly fixture/review scoped.
- Long-text sample content can become accidental product direction if too domain-like.
- Too much visual divergence between families can weaken the house style.
- Too little divergence can fail to prove mapping flexibility.
