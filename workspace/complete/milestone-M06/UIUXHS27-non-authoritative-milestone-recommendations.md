# UIUXHS27: Non-Authoritative Milestone Recommendations

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Status: Advisory, non-authoritative milestone input

## Scope

This artifact gives high-level UI/UX recommendations for Aura Lab milestone development after M05.

It is not project authority, not a Dev runway, not a durable contract, and not a target-project adoption request. Overseer and Human decide whether any recommendation becomes `workspace/current.md`, a durable doc, or a deferred item.

## Current Read

Aura Lab has moved past being a generic Electron prototype.

Accepted project boundary:

```txt
Portable post-bridge display mapping and presentation tooling.
```

The Lab product is the proving bench for everything after bridge-shaped data reaches the presentation layer:

- display mapping
- state grammar
- typography
- text containment
- source/freshness/certainty language
- fixture pressure
- diagnostics demotion
- visual smoke evidence

Electron is the local proving environment because Aura products use similar desktop constraints. Electron is not the product by itself except where shell/runtime behavior is needed to verify presentation, visual smoke, containment, and desktop surface behavior.

## Recommended Next Direction

Recommended next milestone theme:

```txt
Fixture-Backed Presentation Families
```

The goal is to move from one accepted visual surface to a small set of Lab-owned presentation families that prove the same post-bridge grammar under different layout and content pressures.

This is the middle step before reusable kit extraction, Core-neutral transfer, or target-project adapter reviews.

## Why This Comes Next

M04 proved one restrained sci-fi desktop briefing surface.

M05 proved that surface can be verified through project-local visual smoke and dedicated long-text pressure.

The next risk is portability:

- Does the same typography grammar work for compact tactical HUDs?
- Does the same trust/source/freshness grammar work for operator-workbench preflight surfaces?
- Can fixture-backed modes stress presentation without becoming target doctrine?
- Can Lab prove families before asking Atlas, Sense, or Core to review adoption?

## Suggested Milestone Sequence

### M06: Engineering Feasibility Review

Purpose:

Ask Engineering to review how fixture-backed presentation families could be modeled without creating a durable bridge contract or target-product doctrine.

Questions for Engineering:

- Should families be separate service commands, separate fixture modes, or a neutral fixture registry?
- Can the current `aura.projectBriefing` pattern be generalized safely?
- How should visual smoke select family, state, viewport, and long-text pressure?
- What is the smallest implementation that proves family switching without framework migration?
- How can fixture data stay Lab-local and avoid encoding Atlas/Sense semantics?
- What would be Core-neutral versus Lab-only?

Expected output:

```txt
workspace/EngineeringHS28-fixture-backed-presentation-family-feasibility.md
```

### M07: UI/UX Presentation Family Spec

Purpose:

Define the family IA and visual grammar after Engineering identifies feasible boundaries.

Families to specify:

- Briefing family
- Tactical HUD family
- Operator workbench family
- Neutral seed family

Each family should define:

- first-screen hierarchy
- typography roles
- text containment rules
- fixture pressures
- state mapping
- trust/source/freshness placement
- diagnostics behavior
- visual smoke acceptance checks
- what must not be copied into target products

Expected output:

```txt
workspace/UIUXHS29-fixture-backed-presentation-family-spec.md
```

### M08: Dev Prototype

Purpose:

Implement the smallest useful family prototype after Engineering and UI/UX advisory work is accepted.

Recommended first implementation:

- keep existing Lab briefing family
- add one additional neutral or tactical-style family
- preserve existing bridge/test modes
- add family-aware visual smoke
- include long-text and narrow captures

Do not implement all four families at once unless Overseer decides the runway is still bounded.

Expected output:

```txt
workspace/DevHS30-fixture-backed-presentation-family-prototype.md
```

### M09: Packaging Review

Purpose:

Review what the prototype proves and classify outputs:

- Lab-local
- Core-neutral candidate
- target-adaptable
- do-not-port

This is the right point to decide whether to pursue Core transfer, target-owned adapter review, or a narrow post-bridge contract.

## Recommended Fixture Families

### Briefing Family

Use:

- project state
- action posture
- trust band
- attention items
- coordination facts
- secondary diagnostics

Lab-local caution:

`Needs Attention`, coordination facts, and `aura.projectBriefing` remain Lab fixture semantics.

### Tactical HUD Family

Use:

- compact lanes
- short signals
- stale/partial/unavailable states
- narrow-window pressure
- minimal explanatory text

Lab-local caution:

Do not import Sense doctrine. Use generic fixture names until a Sense-owned review exists.

### Operator Workbench Family

Use:

- preflight
- action-effect language
- source/boundary rows
- wide explanatory text
- diagnostics demotion

Lab-local caution:

Do not import Atlas evidence doctrine. Use neutral terms such as `candidate item`, `source layer`, `action effect`, and `write effect` unless Atlas owns the adaptation.

### Neutral Seed Family

Use:

- generic bridge state
- sample data
- missing/failed/partial slots
- smoke harness
- no product semantics

Core caution:

This may become a Core-neutral candidate only through a Core-owned packet.

## Non-Goals

- No target-project adoption from Aura Lab.
- No Atlas, Sense, or Core edits.
- No durable upstream bridge/data contract.
- No durable shared component library yet.
- No framework or stack migration.
- No import of Atlas evidence doctrine or Sense tactical doctrine.
- No treating Lab fixture content as product direction.
- No treating Electron as the product instead of the proving environment.

## Suggested Acceptance Checks

For M06 Engineering review:

- Feasibility is framed around post-bridge presentation, not upstream bridge ownership.
- Fixture options avoid target-product terms.
- Visual smoke strategy includes family, state, viewport, and long-text pressure.
- No framework migration is required.
- Risks of accidental target doctrine are named.

For later prototype work:

- Families preserve source/freshness/certainty language.
- Families preserve loading, empty, stale, failed, partial, long-text, and narrow behavior.
- Text containment is verified under hostile copy.
- Diagnostics are visible but secondary.
- Fixture data remains Lab-local.
- No target-project adoption is implied.

## Human / Overseer Decisions Needed

- Should M06 begin with Engineering feasibility, or should UI/UX write the family spec first?
- Which second family should be prototyped first after Briefing: Tactical HUD, Operator Workbench, or Neutral Seed?
- Should the Lab keep all family names neutral until target-owned reviews happen?
- Should post-bridge presentation contract work wait until after at least two families are proven?

## Recommended Overseer Action

Recommended next packet:

```txt
Engineering advisory packet for fixture-backed presentation family feasibility.
```

Reason:

The next decision has implementation-shape risk. Engineering should advise on fixture modeling and smoke selection before UI/UX over-specifies family behavior.

After Engineering input, UI/UX can produce a sharper family spec for Human/Overseer review.
