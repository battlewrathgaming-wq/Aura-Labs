# GlassDefinitionHS173 - Presentation Glass Value Definition

Status: Advisory / value definition
Role: UI/UX advisor / Engineering advisor / presentation specialist
Date: 2026-06-01
Milestone: M47 - Presentation Glass Value Definition

## Request Answered

This artifact answers:

```txt
What is Lab's current presentation glass, what did it improve over a base presentation layer, and what should target projects receive or provide themselves?
```

Short answer:

Lab's current glass is the reusable display window between target-owned adapter output and target-owned product face. It is not the source meaning, not the mapper, not the shell runtime, and not the target UI. It is the calm, documented presentation surface that makes bridge-fed readouts readable, bounded, inspectable, and safe enough to try.

Working value map:

```txt
base / inherited layer
-> Lab presentation glass
-> target-owned mapper
-> target product face
```

Better operational phrasing:

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

## Files Reviewed

Lab:

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerHS173-m47-presentation-glass-value-definition-runway.md`
- `workspace/OverseerHS172-m46-static-starter-absence-relay-polish-acceptance.md`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`
- `workspace/UIUXHS170-static-starter-presentation-pressure-polish.md`
- `docs/roadmap/m47-presentation-glass-value-definition.md`
- `docs/roadmap/m46-static-starter-absence-relay-polish.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `src/main/main.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `package.json`

Cross-project / base context, read-only:

- `F:\Projects\AURA-Sense\workspace\current.md`
- `F:\Projects\AURA-Sense\AGENTS.md`
- `F:\Projects\AURA-Atlas\workspace\current.md`
- `F:\Projects\AURA-Atlas\AGENTS.md`
- `F:\Projects\Aura_core\AGENTS.md`
- `F:\Projects\Aura_core\workspace\current.md`
- `F:\Projects\Aura_core\workspace\overview.md`
- `F:\Projects\Aura_core\src\renderer\index.html`

## Current-State Understanding

M46 closed the immediate static-starter polish pressure. The static starter now demonstrates:

- generic display absence distinct from unavailable current read
- qualified source-owned no-observation / no-scan, blocked, and degraded examples
- near-primary source-owned label display with owner/layer qualification
- compact inspection where `Coverage` / `Known fields` can move behind `Readout Detail`
- no-selector `inspect-head.html` so target reviewers can inspect the head without Lab demo selector scaffolding
- verifier checks for the above distinctions

Sense is already treating Lab's head correctly as a possible display-only offer. Its current accepted flow is:

```txt
Passive fixture snapshot
-> mapPassiveTelemetryAdapter(snapshot)
-> mapPassiveStaticHeadTrial(adapter)
-> passive.static-head-trial.input
STOP
```

Sense explicitly preserves target ownership: its mappers are Passive-only, fixture/offline verified, and not connected to runtime, bridge, preload, renderer, Lab, or a presentation head.

Atlas is not yet at display adoption pressure. It is resting after storage/runtime hardening and hydration backlog preview work. Atlas remains a useful future pressure source, but not an active target for Lab packaging decisions.

Aura Core is a lean launch seed / baseline scaffold. It provides neutral project rigging and a basic Electron shell reference. It is a comparison point, not the owner of Lab's presentation glass.

## Definition: Presentation Glass

Presentation glass is Lab's reusable post-bridge display surface: the layer that receives display-ready input and renders it into a readable, stable, source-aware interface.

It includes:

- readout structure
- state treatment
- primary value / absence treatment
- basis and freshness treatment
- availability reason treatment
- gaps and warnings treatment
- source-owned label qualification
- detail reveal
- text containment and long-token handling
- narrow layout behavior
- non-color-only status markers
- safe static rendering posture
- boundary notes that prevent examples becoming target contracts

It does not include:

- target source meaning
- target adapter mapping
- target product language decisions
- target runtime behavior
- target shell decisions
- bridge/runtime contracts
- Lab demo selector scaffolding
- SmokeFlash, Pane Board, Wayfinder, service registry, or current renderer tooling
- React as a default assumption
- target adoption authority

Plainly:

```txt
The glass is what makes the readout legible without deciding what the target meant.
```

## Base / Core-Like Electron Comparison

The inherited/base layer provides a runnable shell and project scaffold:

- Electron window
- frame chrome
- pin/minimize/close controls
- a neutral panel surface
- service list / command health style diagnostics
- project coordination structure
- verification habits

That base is valuable, but its presentation value is mostly launch posture and shell utility. It says:

```txt
Here is a project window.
Here is a place to render something.
Here are basic controls and service diagnostics.
```

Lab glass adds a different kind of value:

```txt
Here is how imperfect bridge-fed information remains readable.
Here is how basis, freshness, absence, gaps, warnings, and source-owned labels stay honest.
Here is how a target can inspect the display without inheriting Lab meaning.
```

Comparison:

| Layer | Provides | Does not provide |
| --- | --- | --- |
| Base / Core-like Electron | Runnable app shell, frame controls, neutral panel, service diagnostics, coordination seed. | Presentation grammar for readout states, target-safe source-owned label display, absence/unavailable distinction, target relay boundary. |
| Current Lab renderer | Richer Lab proving bench, fixture states, SmokeFlash/material harness support, visual smoke paths, Pane Board separate tooling. | Clean travelling head by itself; it still contains Lab workshop/support surfaces. |
| Static starter glass | Display-only Instrument Readout Panel head, static text-rendering pattern, example-data boundary, safety floor, no-selector inspection page. | Runtime shell, adapter, target meaning, target product face, package format decision. |

Core should not become the owner of the glass. Core can later learn from the glass when the team decides what the next launch baseline should include.

## Reusable Presentation Improvements Lab Has Produced

Lab's current reusable value is not "files with properties." It is a small display grammar proven enough to inspect.

Reusable improvements:

- **Instrument Readout Panel:** one bounded readout surface with identity, state, primary value/absence, freshness, basis, availability, gaps/warnings, and detail reveal.
- **Readout states:** `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, `NO DATA` as Lab display labels, not target enums.
- **Absence distinction:** `NO DATA` means no presentable display fields; `UNAVAILABLE` means a current read cannot provide a value for a named reason.
- **Fallback honesty:** fallback basis is named and not presented as current.
- **Source-owned pass-through:** target-owned/source-owned labels may appear near the primary read, with owner/layer qualification.
- **Readout Detail:** detail reveal carries basis, availability, freshness, coverage, known fields, gaps, warnings, and qualification rows.
- **Coverage density control:** coverage can be visible in the meta lane or moved behind detail for compact inspection.
- **Text containment:** long tokens, paths, and long detail text wrap rather than overflowing.
- **Narrow behavior:** the panel stacks rather than shrinking below readability.
- **Non-color-only state:** state chip, marker text, left edge, labels, and copy support color.
- **Safety floor:** display-only, no privileged runtime, no remote assets, no arbitrary HTML rendering, no target adapter.
- **Relay clarity:** `inspect-head.html` removes selector scaffolding for target inspection.

## Current Files / Surfaces That Embody The Glass

Primary glass reference:

- `portable-presentation-starter/`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`

Accepted output definition:

- `workspace/display-outputs/instrument-readout-panel.md`

Boundary and handoff standards:

- `docs/statements/presentation-head-handoff-standard.md`
- `docs/statements/lab-presentation-head-posture.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Lab proving bench context, not the clean travelling glass:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`

The proving bench contains valuable prior work and smoke/fixture pressure, but the clean glass currently lives in the static starter.

## Reusable Utility vs Lab Demo Scaffolding

### Reusable Glass Utility

These are candidate reusable presentation utility:

- Instrument Readout Panel structure
- CSS tokens and state classes
- DOM text-rendering pattern
- detail toggle behavior
- readout state display treatment
- absence/unavailable copy distinction
- source-owned label qualification pattern
- compact coverage/detail policy
- long-token and narrow layout handling
- safety and boundary README language
- no-selector inspection page shape

### Lab Demo Scaffolding

These should not be treated as target product UI:

- selector page as a target control
- display example JSON as a target payload contract
- Lab example labels as target state enums
- Sense placeholder examples as Sense adoption
- fallback JavaScript data duplication as package architecture
- top boundary note as final target copy
- Lab current renderer workshop controls
- SmokeFlash/material harness selectors
- Pane Board / Wayfinder tooling
- service registry or coordination facts
- Electron shell/frame behavior unless a target explicitly adopts it

## What Target Projects Must Provide

Target projects must provide:

- source meaning
- target-owned mapper from their output to display-ready input
- product language and local terminology decisions
- runtime behavior and shell choices
- local data authority and safety decisions
- adoption timing
- target-local visual adjustment
- target-local review and acceptance

For Sense, this currently means its Passive mapper remains Sense-owned and reason-first. It must not collapse `No observation`, I/O-off blocked, degraded, capped, stale, or unavailable cases into Lab labels without Sense-owned translation.

For Atlas, this will eventually mean preserving Atlas ownership of Discovery, Evidence/EVEidence, Watch, Marked, hydration, provenance, storage, and local-first basis before any Lab head is fed.

## What Lab Must Not Imply Or Force

Lab must not imply:

- target adoption
- target fitness
- target state enums
- source meaning
- adapter ownership
- runtime shell ownership
- bridge/runtime contract
- package format decision
- React as canonical
- Core ownership of the glass
- forced synchronization with future Lab heads

Lab should not force:

- a target to keep Lab sample data
- a target to use Lab example labels as product copy
- a target to expose coverage as a first-read lane
- a target to adopt static files as final architecture
- a target to use the selector page
- Sense or Atlas to share meanings because labels resemble each other

## Likely Future Bundle / Package Questions

M47 should not answer packaging yet, but it can name the questions:

- Is the first offer simply `portable-presentation-starter/` as a static reference folder?
- Should the no-selector inspection page be the primary relay page?
- Should `index.html` stay as Lab demo scaffolding only?
- Should `example-readouts.json` travel, or should it move to a separate examples folder later?
- Should fallback data duplication remain for plain-file inspection, or should a package shape remove it?
- Should CSS tokens become the official customization boundary?
- Should the JS renderer expose a small function boundary later, or remain page-local until target feedback?
- Should React remain parked until a target asks for framework-shaped support?
- What is the minimum visual review evidence before target relay?
- Does Core later need to carry shell utilities separately from Lab glass?
- When Atlas/Sense are shippable, what Core lessons should fold into the next launch baseline?

## What Is Ready For Sense / Atlas Trial

Ready as Lab offer material, after Human/Overseer visual review:

- static Instrument Readout Panel head
- no-selector inspection shape
- display-only safety floor
- source-owned placeholder qualification pattern
- absence/unavailable distinction
- compact coverage/detail example
- README boundaries and handoff posture

Ready for Sense specifically:

- advisory relay or local visual trial against Sense-owned Passive mapper output, if Sense opens its own packet
- continued use of source-owned labels and reason-first translation
- a tiny adoption/claim footnote after trial, owned by Sense

Ready for Atlas:

- advisory comparison only until Atlas opens a display/adoption packet
- likely useful for future local-first readout, hydration/backlog, recovery, or R-Scanner style surfaces
- no adapter or adoption implication now

Not ready to claim:

- target product fitness
- final shell model
- automated visual proof for M46
- target adoption
- Core baseline change

## What Remains Unknown Until Target Pressure Arrives

Unknown:

- Whether Sense wants static head files, a copied module, a React example, or a target-native rewrite.
- Whether Atlas needs a detail/instrument panel, compact rail, scanner console, or table/readout hybrid first.
- Whether target projects prefer Lab CSS tokens as the customization surface.
- Whether transparent/always-on-top shell behavior belongs in target projects, Core, or later shared shell utilities.
- Whether the fallback JSON/JS duplication is acceptable in a package.
- How much visual character is useful before it becomes target styling.
- Whether compact coverage should become a standard policy or remain an example.
- Whether automated browser screenshot evidence is needed before first relay.

## Risks

- Packaging too early could freeze the wrong boundary.
- Calling the glass "Core" could make Core look like the owner of presentation value.
- Calling the example input a contract could turn Lab fixtures into target obligations.
- Carrying the selector page into relay could make Lab demo scaffolding look like target UI.
- Under-qualifying source-owned labels could make Lab appear to define Sense or Atlas terms.
- Over-polishing target-shaped examples could make the starter look Sense-specific.
- React could distract from the display grammar if introduced before target pressure asks for it.
- Skipping visual review could relay a technically safe head with avoidable presentation roughness.

## Recommended Next Step

Recommended next step: Human/Overseer visual review, then target relay.

Sequence:

1. Visually review:
   - `portable-presentation-starter/examples/static/index.html`
   - `portable-presentation-starter/examples/static/inspect-head.html`
2. If the visual review passes, prepare a target relay/adoption review using the M43 handoff standard.
3. Ask Sense to keep a tiny local adoption/claim footnote if it trials the head.
4. Park package-shape specification until target relay creates concrete pressure.

Do not open packaging spec first unless Human wants to relay files immediately.

Do not open Dev from this artifact alone. M47 defines the glass; it does not authorize implementation, target adapters, packaging, export, React, or Core changes.

## Final Definition

Lab's current presentation glass is:

```txt
a display-only, framework-neutral Instrument Readout Panel head
that renders prepared readout input into a calm, bounded surface
with basis, freshness, availability, gaps, warnings, detail reveal,
source-owned label qualification, absence/unavailable distinction,
and narrow/text-containment behavior.
```

Its value over the base layer is not that it opens a window. The base can already do that.

Its value is that imperfect information can be shown without pretending to be more complete, more current, more certain, or more target-owned than it is.
