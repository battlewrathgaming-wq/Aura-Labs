# UIUXHS180 - Glass Primitive React Readiness Map

Status: Advisory / readiness map
Role: UI/UX advisor / presentation specialist
Date: 2026-06-02
Milestone: M50 - Glass Primitive React Readiness Map

## Request Answered

This artifact maps Lab's accepted glass primitive vocabulary into a future warm-start presentation shelf.

It answers:

```txt
Which accepted glass primitives should remain CSS/tokens, which might later merit thin React wrappers, which should stay examples only, and what must target projects compose or authorize themselves?
```

Working line:

```txt
Lab provides composable visual primitives.
Projects assemble and authorize product surfaces.
```

React can be a useful future warm-start format, but it must remain optional. It is not the target contract, not the source meaning layer, and not the default adoption path for every project.

## Files Reviewed

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/glass-inventory-spine.md`
- `workspace/display-assets.md`
- `workspace/display-selection-shelf.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/README.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-outputs/instrument-readout-panel-glass.md`
- `workspace/GlassDefinitionHS173-presentation-glass-value-definition.md`
- `workspace/OverseerHS180-m50-glass-primitive-react-readiness-map-runway.md`
- `docs/roadmap/m50-glass-primitive-react-readiness-map.md`
- `docs/roadmap/m49-sense-trial-glass-package.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/packages/sense-trial-glass/README.md`

## Current State Understanding

Lab now has:

- an accepted glass definition
- an accepted Instrument Readout Panel Glass asset
- a target-readable display selection shelf
- a local static Sense trial glass package
- a glass inventory spine that names future primitive vocabulary

The next useful move is not more packaging and not a React scaffold yet. It is deciding which primitive concepts are good low-cost reusable ingredients and which are too close to target-owned product composition.

M50 should reduce future UI cold starts without freezing Atlas, Sense, or future project panes. The desired shelf is a warm-start kit: reusable surface grammar, tokens, and optional thin wrappers that make later product UI easier to form.

## Primitive Readiness Table

Classification key:

- `CSS/token-only`: best expressed as classes, custom properties, sizing rules, or visual tokens.
- `React-wrapper candidate`: may later benefit from a thin component wrapper around slots and accessibility behavior.
- `Example-only`: useful in demos but too context-sensitive to harden as a primitive yet.
- `Project-composed`: Lab may provide ingredients, but target projects must assemble and authorize the final surface.

| Primitive | Purpose | CSS/token-only suitability | React wrapper suitability | Example-only suitability | Project-owned composition risk | Starter recommendation | Do-not-harden notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Material | Surface feel: glass, matte, metal, texture, glow, opacity. | High. Use custom properties for surface, ink, line, glow, opacity, elevation, texture hooks. | Low. A wrapper is rarely needed unless material toggles are bundled with accessibility states. | Medium for PNG/glow examples. | Medium: material can look like target brand or product doctrine. | Include tokens and 2-3 material classes only. | Do not make material the only carrier of state or source meaning. |
| Boundary | Frames, rims, recessed fields, docked edges, attention zones. | High. Boundary should start as classes for panel, strip, inset, rim, docked edge. | Medium. A wrapper may help enforce label/title/slot structure. | Low. Boundary is broadly reusable. | Medium: final pane boundaries imply product layout if over-specific. | Include CSS boundaries and one optional `GlassBoundary` candidate note. | Do not define final Atlas/Sense panes or window regions. |
| Seam | Dividers, gaps, mounting rims, dashed borders, registration ticks. | High. Best as CSS utilities and spacing tokens. | Low. Wrapper not needed. | Medium for decorative registration examples. | Low to medium: excessive seams become visual clutter or false grouping. | Include seam utilities only. | Do not turn seams into status or authority markers. |
| Segment | Small grouped content areas inside a boundary or strip. | Medium. Segment spacing, density, and label/value styles belong in CSS. | High. A thin wrapper can preserve label/value/secondary text containment. | Low. Segment is a good reusable primitive. | Medium: group meaning remains project-owned. | Include `Segment` as a React-wrapper candidate after CSS. | Do not define segment semantics such as queue item, evidence cell, or action cell. |
| Readout | Compact key/value grammar and short display language. | Medium. Typography, value scale, label rhythm, and absence classes belong in CSS. | High. Readout benefits from structured props for label, value, state, basis, freshness, warnings/gaps. | Low. Already accepted through Instrument Readout Panel Glass. | High: values and state meaning are target-owned. | Include first as the core wrapper candidate. | Do not make Lab state labels target enums or require Lab input shape as contract. |
| Marker | Pips, lights, tags, row-end affordances, highlight marks. | High. Tone, shape, size, and marker classes fit CSS/tokens. | Medium. Wrapper useful for accessible label and non-color-only marker text. | Low. Marker is reusable if meaning-light. | High: marker meaning can become severity/action doctrine. | Include `Marker` as CSS first, optional wrapper with required text label. | Do not allow color/glow-only meaning. |
| Row | Dense sample row, unresolved row, highlighted row, quiet row. | Medium. Row density, divider, hover/focus, wrap, and facet style fit CSS. | Medium to high. Wrapper useful for repeated lists with detail affordance. | Medium until list pressure is concrete. | High: sorting, filtering, action readiness, selection meaning are target-owned. | Include CSS row grammar; React wrapper later after target list pressure. | Do not define queue semantics, row actions, or target ordering. |
| Drawer | Dormant tray, detail reveal, locked-open panel. | Medium. Drawer transitions, border, detail row styles fit CSS. | High. Wrapper helps with `aria-expanded`, focus, title, and open/closed state. | Low. Detail reveal is accepted glass behavior. | Medium: what belongs in detail is target-owned. | Include a thin `DetailDrawer` candidate in first starter if React is opened. | Do not turn drawer content into diagnostics or raw fields by default. |
| Grid / Topology | Relative position, scope, relation, coordinate/radial/node display. | Medium for base grid tokens; low for semantic topology. | Medium only for inert display shells; low for real graph/map behavior. | High. Needs source-owned relation/radius meaning. | Very high: topology meaning, scope, map data, relation lines, and radius accuracy are target-owned. | Park from first starter except neutral grid background tokens. | Do not build map/radius/system relation surfaces from Lab alone. |
| Motion / Attention | Wake, dull, pulse, fade, unfold, settle, rare redraw. | Medium. Reduced-motion tokens and simple transition classes fit CSS. | Medium. Wrapper useful only when state transition semantics are local to presentation. | Medium. Motion examples can calibrate feel. | High: motion can imply live activity, urgency, or surveillance. | Include reduced-motion policy and 2-3 safe transition tokens only. | Do not use motion as sole state carrier; no live/watch/monitor implication. |
| Sizing | Compact, narrow, broad, dense, dormant, expanded. | High. Use container classes, density tokens, min/max widths, wrapping policy. | Medium. Wrapper useful to expose density prop while preserving containment. | Low. Sizing is core shelf utility. | Medium: final dimensions and product layout remain target-owned. | Include sizing tokens/classes in first starter. | Do not define final target layout, pane count, or shell size. |

## React Warm-Start Boundary

React should be treated as an optional warm-start shape for Lab glass, not as the glass itself.

React may provide:

- thin wrappers around accepted visual primitives
- slot layout scaffolding
- accessibility behavior for detail reveal and state markers
- example composition pages
- props that carry prepared display copy
- local development speed for richer surfaces

React must not provide:

- target source meaning
- target adapter mapping
- target product state semantics
- final Atlas/Sense panes
- bridge/runtime contracts
- runtime shell behavior
- package manager publishing by default
- forced adoption path

Recommended phrasing:

```txt
React is a warm-start shelf format.
CSS/tokens are the portable surface language.
Target projects decide whether React travels.
```

## Props / Input Philosophy

Future primitive props should be display-ready and meaning-light.

Good props:

- `label`
- `value`
- `stateLabel`
- `stateTone`
- `marker`
- `basis`
- `freshness`
- `availabilityReason`
- `warnings`
- `gaps`
- `detailRows`
- `sourceOwned`
- `density`
- `coverageMode`

Props should carry already-decided display copy, not source data needing interpretation.

Avoid props such as:

- `isEvidence`
- `isThreat`
- `watchState`
- `combatState`
- `providerAuthority`
- `sourceOfTruth`
- target-specific enums
- backend command names
- raw source payloads

If a source-owned term must be displayed, it should arrive as a qualified display object:

```txt
sourceOwned:
  owner
  layer
  visibleLabel
  qualification
```

This remains an example shape for future design. It is not a bridge/runtime contract.

## CSS / Token Strategy

CSS should be the first stable shelf because it is cheap, portable, and not framework-bound.

Recommended token groups:

- surface: `--glass-surface`, `--glass-surface-muted`, `--glass-inset`
- ink: `--glass-ink`, `--glass-muted`, `--glass-dim`
- line: `--glass-line`, `--glass-soft-line`, `--glass-edge`
- state tones: current, updating, aged, partial, unavailable, fallback, no-data, source-owned
- spacing: compact, standard, dense, expanded
- radius: small panel, strip, pill
- typography: label, value, detail, chip
- motion: duration, easing, reduced-motion override
- density: compact, narrow, broad

Recommended class families:

- `.glass-surface`
- `.glass-boundary`
- `.glass-seam`
- `.glass-segment`
- `.glass-readout`
- `.glass-marker`
- `.glass-row`
- `.glass-drawer`
- `.glass-grid`
- `.glass-density-compact`
- `.glass-density-expanded`

Tokens should support target restyling without making target projects rewrite the display grammar from zero.

## Example Composition Policy

Examples are essential, but they must stay visibly non-authoritative.

Allowed examples:

- a compact readout assembled from boundary + readout + marker + drawer
- a small row/detail example using row + marker + drawer
- a neutral segmented strip using boundary + seam + segment + sizing
- a static topology placeholder showing grid tokens only

Examples must state:

- display input is example input only
- labels are Lab display examples only
- source-owned placeholders are qualified
- target projects own mapper, meaning, runtime, product copy, and adoption

Examples must not:

- use Atlas/Sense final pane names as Lab outputs
- imply target product UI
- define target layouts
- define source states
- define adapter input contracts
- use Lab sample data as target data

## Atlas / Sense Use Context Differences

Context only. These are not target surface definitions or adoption claims.

### Sense Context

Sense pressure currently points toward compact, module-present surfaces:

- small readout modules
- reason-first absence/unavailable states
- source-owned label pass-through
- authority-window style timing or availability strips
- compact detail reveal
- possible transparent or always-on-top shell decisions later, owned by Sense

Likely useful primitives:

- readout
- marker
- drawer
- boundary
- sizing
- motion/attention used very carefully

Sense must still own Passive Telemetry meaning, mapper behavior, product copy, runtime behavior, and adoption.

### Atlas Context

Atlas pressure may later lean toward broader workspace composition:

- storage/runtime gate readouts
- hydration/backlog surfaces
- recovery/offline scanner-style readouts
- table or queue review rows
- local-first basis and provenance clarity

Likely useful primitives:

- boundary
- row
- drawer
- segment
- readout
- marker
- sizing
- grid/topology only after Atlas-owned relation/scope meaning exists

Atlas must still own Discovery, Evidence/EVEidence, Watch, Marked, hydration, provenance, storage, source meaning, adapter behavior, and adoption.

## Recommended First Starter Contents

Smallest useful later primitive starter:

1. `glass-tokens.css`
   - surface, ink, line, state, spacing, typography, density, motion tokens
2. `glass-primitives.css`
   - boundary, seam, segment, readout, marker, drawer, row, sizing classes
3. `examples/primitive-readout.html`
   - neutral readout example using CSS only
4. `examples/primitive-row-drawer.html`
   - neutral row + marker + drawer example, if row pressure is accepted
5. `README.md`
   - boundaries, target responsibilities, example policy, safety floor
6. Optional future React folder only if Human/Overseer opens a Dev packet:
   - `GlassReadout`
   - `GlassMarker`
   - `GlassDrawer`
   - `GlassSegment`
   - `GlassBoundary`

First React wrapper candidates, if accepted later:

- `GlassReadout`
- `GlassMarker`
- `GlassDrawer`
- `GlassSegment`
- `GlassBoundary`

Do not include in the first starter:

- topology/map components
- target panes
- product dashboards
- adapter helpers
- runtime shell helpers
- package publishing
- Atlas/Sense named modules

## What To Exclude

Exclude from M50 and from a first primitive starter:

- target-project edits
- target adapters or mappers
- bridge/runtime contracts
- final Atlas/Sense pane designs
- React scaffold without a new packet
- package/export infrastructure
- Electron/preload/IPC behavior
- SmokeFlash, Pane Board, Wayfinder, Lab service registry
- source-owned terminology as Lab defaults
- map/radius/topology meaning
- list virtualization until concrete list pressure exists
- motion that implies live activity when none exists
- any component that requires target source semantics to render correctly

## Risks

- React can accidentally become the contract instead of a warm-start option.
- Primitive names can drift into target product language if examples are too Atlas/Sense-shaped.
- Material and motion can imply meaning without readable labels.
- Row and topology primitives can smuggle target workflow into Lab if hardened too early.
- A broad starter can become another cold-start burden if it tries to include every idea.
- If props accept raw target data, Lab will become an adapter layer by accident.
- If CSS tokens are too weak, every target will restyle from scratch and double work returns.
- If CSS tokens are too strong, targets may feel Lab is forcing product style.

## Suggested First Dev Packet If Accepted

Recommended later packet:

```txt
M51 - Glass Primitive CSS Starter
```

Suggested scope:

- create a Lab-local primitive starter folder
- define CSS tokens and primitive classes for:
  - material
  - boundary
  - seam
  - segment
  - readout
  - marker
  - drawer
  - sizing
  - safe motion/reduced-motion
- add one neutral CSS-only readout example
- add README boundaries
- do not create React components yet

Suggested non-goals:

- no target adapters
- no React
- no package publishing
- no target panes
- no topology/map/radius components
- no renderer extraction
- no Electron/preload/IPC work

Why CSS first:

It creates portable surface language without forcing framework adoption. React wrappers can follow once the primitive classes prove useful.

## Acceptance Criteria For A Later Primitive Starter

A later primitive starter is acceptable if:

- it maps back to the glass inventory spine
- it provides CSS/tokens before framework wrappers
- every primitive remains meaning-light
- examples are neutral and clearly non-contractual
- source-owned labels are shown only with owner/layer qualification
- states are display labels only, not target enums
- text containment and narrow behavior are represented
- reduced-motion behavior exists for any motion class
- target projects are told they own mapper, meaning, runtime, product copy, and adoption
- no target project files are touched
- no target adapters or bridge/runtime contracts are created
- no React components are included unless the packet explicitly opens React

Suggested verification for such a packet:

- static syntax checks for any JS if present
- Lab `verify:all`
- shared terminology verification
- no browser/screenshot requirement unless visible example behavior changes enough for Human/Overseer to request it

## Parked Items

Park:

- React component implementation
- package/export mechanics
- package manager publishing
- target-owned mapper helpers
- Atlas/Sense pane definitions
- topology/map/radius display components
- virtualized list helper
- live/runtime shell behavior
- transparent/always-on-top shell behavior
- broad animation system
- target-specific theme packs
- source-owned state translation

## Final Recommendation

Build the next shelf in two steps, not one:

1. First, create a CSS/token primitive starter for material, boundary, seam, segment, readout, marker, drawer, sizing, and safe motion.
2. Later, add thin React wrappers only for primitives where behavior helps: readout, marker, drawer, segment, and boundary.

Keep topology, rows, and target-shaped compositions example-only or parked until Atlas/Sense pressure gives them concrete meaning.

The north star remains:

```txt
Lab lowers UI cold-start cost.
Projects keep their body, meaning, mapper, runtime, and face authority.
```
