# UIUXHS22: Aura Presentation Kit Visual Concepts

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: M03 - Aura Presentation Kit Visual Concepts
Sequence: HS22
Status: Advisory concept pack; pending Human/Overseer acceptance

## Scope

This artifact defines static visual concept direction for an Aura Presentation Kit before Dev implementation.

It is not a code implementation, static HTML mockup, UI framework selection, durable bridge contract, or target-project adoption request. It gives Human/Overseer enough presentation direction to choose a future prototype packet.

## Source Files Reviewed

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`
- `workspace/UIUXHS16-open-source-presentation-models.md`
- `workspace/UIUXHS21-visual-concept-milestone-recommendation.md`
- `workspace/complete/milestone-M02/EngineeringHS19-neutral-bridge-state-smoke-pack.md`
- `workspace/complete/milestone-M02/EngineeringHS18-atlas-rigging-review.md`
- Optional implementation context: `src/renderer/index.html`, `src/renderer/app.js`, `src/renderer/styles.css`
- Optional posture context: `F:\Projects\AURA-Atlas\README.md`, `F:\Projects\AURA-Sense\README.md`

## Concept Purpose And Audience

Purpose:

Define the visual and typographic direction for a reusable Aura Presentation Kit that can make Aura apps feel more beautiful, spatial, and game-adjacent while preserving trust, source, freshness, degraded-state honesty, and project-specific doctrine boundaries.

Audience:

- Human and Overseer choosing Aura Lab's next design/Dev packet.
- Future Dev agents implementing a prototype.
- Future Atlas, Sense, or Core reviewers adapting presentation patterns through their own project packets.

## Recommended Aesthetic Lean

Recommended lean: clean sci-fi desktop tool with ship-cockpit surface cues.

Reasoning:

- `ship cockpit` gives the right space-game emotional register.
- `strategic command table` fits Atlas-style evidence work but may over-densify Lab and Sense.
- `clean sci-fi desktop tool` protects readability, source language, and operator trust.

Aura should feel like a calm ship system, not a spreadsheet in dark mode and not decorative HUD wallpaper.

## Shared Presentation Grammar

All concepts should preserve:

- Shell: frameless app shell, stable drag zones, restrained controls, app identity, mode/status area.
- Typography: fixed role-based text sizes, not free-scaling text.
- Trust band: state, source, freshness, certainty, and boundary visible before diagnostics.
- State grammar: loading, empty, populated, stale, failed, partial, gated, blocked, missing, unavailable.
- Source/freshness/certainty language: source-labeled, timestamped or basis-labeled, and never overclaiming.
- Panel surfaces: layered, readable, and spatial, with restrained luminous edges.
- Text containment: long text never forced into narrow value cells.
- Diagnostic demotion: diagnostics remain available but visually secondary unless the screen is a diagnostics screen.

## Typography And Text-Containment Rules

Typography comes before decoration.

Recommended text roles:

| Role | Use | Rule |
| --- | --- | --- |
| App mark | tiny shell identity | 11-12px uppercase or small caps, one line, may truncate |
| Screen title | current surface name | 24-32px, max 1-2 lines, never inside narrow sidebars |
| Operational heading | major section | 16-20px, concise, no paragraph copy |
| Compact panel heading | card/panel label | 12-14px, uppercase optional, one line preferred |
| Field label | fact label | 11-12px, muted, one line, never the primary emphasis |
| Value text | fact value | 14-18px, max 1-2 lines in cards, wrap only in wide cells |
| Metric text | numeric/short signal | 20-36px, short only, not sentence copy |
| Status/trust text | state/certainty | 12-15px, visible near primary content |
| Diagnostic text | support details | 11-13px, secondary surface, may truncate |
| Long note | explanatory copy | 14-16px, only in wide rows/panels, 55-75ch max |
| Missing copy | unavailable/empty state | same role as replaced value, muted but explicit |

Containment rules:

- Do not put sentences into narrow value cards.
- Do not scale type with viewport width.
- Change layout at breakpoints instead of shrinking text indefinitely.
- Use fixed role sizes and responsive containers.
- Every repeated card must define min-width, max lines, overflow behavior, and fallback copy.
- Long labels get truncation or a detail affordance; long explanations move to a wide row or drawer.
- In compact HUDs, show `Blocked`, `Stale`, `Partial`, or `No signal`; explain details elsewhere.
- In evidence/workbench views, use wider rows for boundary copy and preflight effects.
- Use monospace only for IDs, paths, timestamps, checksums, or command-like values.

## Surface And Texture Guidance

Use:

- deep blue-black or graphite base with mild color temperature variation
- subtle panel depth, not heavy shadows
- 1px luminous separators and state-colored edge accents
- restrained angular cuts on primary containers only
- faint grid/orbit/radar motifs in unused negative space
- controlled glow for active, alert, gated, or scan states
- texture as low-contrast material, not noise over text

Avoid:

- one-note cyan-on-black
- text over animated or noisy backgrounds
- glow around every card
- card soup with equal visual weight everywhere
- tiny labels that require leaning in
- full-window animation behind dense text
- decorative sci-fi frames that steal space from content

Animation guidance:

- Default surface is static.
- Motion is targeted: loading, scanning, acquisition, stale transition, failure attention, or live tactical pulse.
- No permanent animation under reading text.

## Concept 1: Aura Lab Briefing

Purpose:

Show project-state briefing with trust and attention before diagnostics.

First-screen hierarchy:

1. Shell identity and quiet window controls.
2. App title: `Aura Lab`.
3. Action posture: Human direction, Dev runway ready, accepted state, unavailable.
4. Trust band: bridge state, freshness, certainty, sources.
5. Needs Attention: up to three items.
6. Coordination facts grouped into current state, packet, sequence.
7. Diagnostics and bridge test mode secondary.

Typography assignment:

- Screen title uses the display role, capped at two lines.
- Action posture uses status/trust role, not huge title text.
- Needs Attention uses compact panel headings plus short item text.
- Source paths use diagnostic or monospace value role and may truncate.

Trust/source/freshness:

- Keep above fact grid.
- Use `Verified from local workspace sources`, `Partial view`, `Unavailable`, or `Showing last successful read`.

Surface treatment:

- Clean sci-fi desktop with mild ship-system cues.
- Use one primary briefing surface, not many floating cards.
- Add faint orbital/grid texture in outer background only.

Text containment:

- Coordination facts are grouped into wider cells when copy is sentence-like.
- Source labels can wrap in a wide trust row or truncate with a detail affordance.

Do not copy:

- Lab `Needs Attention` semantics into Atlas or Sense without product-specific mapping.

## Concept 2: Sense-Style Tactical HUD

Purpose:

Show immediate operational signals with low cognitive load.

First-screen hierarchy:

1. Current system / tactical context.
2. Combat Witness primary signal: incoming pressure, repair, recent weapon/source.
3. Passive Telemetry lane: current-system activity and freshness.
4. Threat Intel lane: explicit scan result or gated state.
5. Clipboard Acquisition state if armed/listening/sealed.
6. Diagnostics tucked behind a compact status/control area.

Typography assignment:

- Metrics use large numeric/short signal role.
- Labels stay tiny but legible; no tiny paragraph copy.
- Tactical warnings use short status text, not long prose.
- Lane names are compact panel headings.

Trust/source/freshness:

- Every lane carries freshness: recent, stale, unavailable, gated, partial.
- Passive and active lanes must be visually distinct.
- Combat Witness remains observed transient telemetry, not evidence.

Surface treatment:

- More cockpit-like than Lab.
- Use radial/radar accents only around current tactical state.
- Use state-colored edge lighting for active/listening/stale/failed.

Text containment:

- Narrow cards show short tokens: `No signal`, `Stale`, `Gated`, `Partial`.
- Detail copy moves to a wider diagnostics/reason row.

Do not copy:

- Atlas evidence language or Lab project briefing posture.
- Persistent history, assessment memory, or evidence framing.

## Concept 3: Atlas-Style Operator Workbench

Purpose:

Support deliberate investigation while preserving discovery/evidence/observation/assessment boundaries.

First-screen hierarchy:

1. Investigation title and active lead/preflight summary.
2. Evidence boundary strip: Discovery, Evidence, Observation, Assessment.
3. Lead input and validation state.
4. Action-effect preview before any mutating or live-gated action.
5. Queue / Enrich or report preview area.
6. Live/API context and service diagnostics secondary but inspectable.

Typography assignment:

- Workbench title is moderate, not hero-sized.
- Boundary labels use compact panel headings with short explanatory copy in wider cells.
- Preflight/action effects use status/trust text plus long-note rows.
- IDs use monospace.

Trust/source/freshness:

- Use exact Atlas source layers: zKill discovery, expanded ESI evidence, local SDE metadata, cached labels, operator assessment, support/debug.
- Generic `source/certainty` labels must be mapped to evidence-bound terms.

Surface treatment:

- Strategic command table, calmer and denser than Sense.
- Use panel depth and section rails rather than decorative HUD frames.
- Use luminous accents for gate/action state, not all data.

Text containment:

- No narrow side column should contain full live/API sentences.
- Gate/refusal copy uses wide rows or expandable details.
- Evidence boundary explanations stay short in cards and detailed elsewhere.

Do not copy:

- Lab `Needs Attention`.
- Generic certainty labels.
- Any UI that implies discovery refs are evidence or assessments are evidence.

## Concept 4: Neutral Core Seed

Purpose:

Demonstrate the reusable shell, bridge state grammar, and smoke-mode surfaces without product doctrine.

First-screen hierarchy:

1. App seed identity.
2. Bridge state.
3. Source/freshness/certainty placeholders.
4. Sample data panel.
5. Review/test modes.
6. Shell diagnostics.

Typography assignment:

- Simple title, compact status, neutral labels.
- No domain vocabulary beyond generic state and source terms.

Trust/source/freshness:

- Use placeholders: `{source_layer}`, `{freshness_basis}`, `{certainty}`, `{boundary}`.
- State that demo data is fixture/sample when applicable.

Surface treatment:

- Clean sci-fi desktop tool, least ornamented of the concepts.
- Core should prove constraints, not brand personality.

Text containment:

- Includes deliberate long-text, missing-value, and narrow-mode examples.
- Serves as the reference for visual smoke overflow checks.

Do not copy:

- Lab project packet semantics.
- Atlas/Sense product terms.
- Any visual system that requires a chosen framework.

## Visual Language Comparison

Ship cockpit:

- Best for Sense-style tactical HUD.
- Risks: over-animation, tiny labels, false urgency.

Strategic command table:

- Best for Atlas-style workbench.
- Risks: density, over-framing, paragraph text in sidebars.

Clean sci-fi desktop tool:

- Best default for Aura Lab and Core.
- Risks: too restrained if no spatial or game-adjacent texture is added.

Recommended blend:

- Lab/Core: 70 percent clean sci-fi desktop, 30 percent ship-system cues.
- Sense: 60 percent cockpit, 40 percent clean desktop discipline.
- Atlas: 60 percent strategic command table, 40 percent clean desktop discipline.

## Acceptance Checks For Later Visual Prototypes

A later prototype should be accepted only if:

- source, freshness, certainty, and boundary language are visible in the primary reading path
- loading, empty, populated, stale, failed, partial, gated, blocked, missing, and unavailable states remain explicit
- compact desktop windows do not create overlapping text or sentence copy in tiny cards
- every text role has size, line, and overflow behavior
- diagnostics are available but visually secondary
- visual surface is more beautiful than current utility panels without weakening readability
- palette is not one-note cyan-on-black
- motion is targeted and absent under dense reading text
- concepts differ by product posture while sharing presentation grammar
- no target-project adoption is implied
- no framework, library, or bridge schema is selected by implication

## Recommended Next Aura Lab Packet

Recommended next packet:

```txt
Dev or UI/UX prototype packet for one static Aura Lab visual concept screen.
```

Preferred first prototype:

```txt
Aura Lab briefing concept with the new typography/text-containment grammar and restrained sci-fi surface treatment.
```

Why:

Lab is the proving bench and has accepted bridge/test-mode data. Proving typography, containment, and surface treatment in Lab first reduces the risk of pushing unstable style into Atlas or Sense.

Suggested scope for the first prototype:

- one screen only
- plain HTML/CSS unless Overseer explicitly asks for a stack experiment
- preserve existing bridge data and test modes
- add long-text and narrow-window visual smoke checks
- no target-project adapters

## Non-Goals And Deferrals

- No code implementation in this packet.
- No static HTML/CSS mockup in this packet.
- No Atlas, Sense, Core, EVE-Threat-Overlay, or Bughunt edits.
- No durable bridge/data contract.
- No React/Tailwind/Shadcn or other framework decision.
- No direct use of open-source visuals without license review.
- No target-project adoption claim.
- No live/private/destructive/git action.
- No Aura Core transfer.

## Risks And Uncertainty

- A beautiful sci-fi surface can easily hide weak text hierarchy; typography must remain first.
- Sense and Atlas need different posture; one universal screen would flatten both.
- Core must stay neutral; presentation-kit language needs stripping before Core adoption.
- External visual references are inspiration only until licenses and dependencies are reviewed.
- Human may prefer a stronger cockpit or command-table lean than the recommended balanced default.
