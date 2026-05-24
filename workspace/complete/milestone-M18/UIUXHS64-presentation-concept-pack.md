# UIUXHS64: Presentation Concept Pack

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: M18 - Presentation Concept Pack
Status: Advisory, pending Overseer acceptance

## Files And Context Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/OverseerHS63-m18-presentation-concept-runway.md`
- `workspace/LabRemoteConsumerConformanceHS66.md`
- `workspace/reference/README.md`
- `workspace/reference/web-sweep-sci-fi-lo-fi-2026-05-24.md`
- `workspace/reference/portable-face-expansion-support-2026-05-24.md`
- `workspace/reference/materials-and-borders-sweep-2026-05-24.md`
- `workspace/reference/color-palettes-and-textures-sweep-2026-05-24.md`
- `workspace/archive/cross-project-relay/SenseUIUXHS02-sense-face-presentation-advisory.md`

No code was changed for this artifact. No runtime verification was run.

## Current-State Understanding

Aura Lab is now a presentation-pattern proving bench for bridge-fed information after the bridge. It should explore visible HTML presentation modules that are beautiful, clear, calm, meaningful, and reusable while preserving source-project meaning.

Lab is not the owner of Atlas, Sense, or Core product doctrine. Lab can create portable presentation craft, but target projects must own their own meanings, labels, state semantics, contracts, and adoption decisions.

The next Lab milestone should help answer:

```txt
Should this presentation module exist, and is it worth developing as a portable face primitive?
```

The project expansion pressure is real: developed Lab presentation faces may later be reviewed by other Aura projects. That makes the next prototype most valuable if it teaches a reusable grammar without overfitting to one target project.

## Recommendation Summary

Recommended next smallest safe prototype:

```txt
Instrument Status Band
```

This is a compact, low-emission presentation module that combines:

- embedded status lights
- source/freshness/basis visibility
- state-aware surface treatment
- optional detail reveal
- calm degraded/partial/aged/empty handling
- narrow-shell readability

It should be visually inspired by cockpit, sci-fi, lo-fi, and instrument panels, but use Lab-owned neutral presentation language.

This should be the next Lab prototype because it is:

- small enough to implement without a full face redesign
- useful inside future Ship/System Readout, Sensor Surface, Activity Timeline, and Detail Drawer concepts
- portable to Atlas or Sense only after target-owned review
- a strong foundation for project expansion
- less risky than building a full tactical or Atlas-adaptable face now

## Concept Recommendation Ranking

1. **Status Light Grammar / Instrument Status Band**

Best Lab fit. Highest portability. Strong visual promise. Smallest useful prototype.

This should become the selected M18 prototype direction. It gives Lab a reusable status/source/freshness/basis module that can sit inside many future faces.

2. **Rolling Counter / Telemetry Reel**

High visual promise and good fit for numeric readouts. It should follow the status band, because the counter needs state/freshness language around it to avoid becoming decorative motion.

3. **Tactical Detail Drawer As Visual Theme**

Useful as a companion module, especially for basis, gaps, warnings, and available fields. The word `tactical` should not become Lab default copy. Treat it as an instrument-style detail drawer.

4. **Ship Systems Readout**

Strong human appeal and good direction for the larger face, but too large as the next smallest prototype. It should be assembled from smaller proven primitives.

5. **Activity Timeline**

Useful, but it risks drifting toward Atlas-like history/evidence if built before Lab has stronger neutral state and basis grammar.

6. **Sensor Surface**

Visually exciting, but more ambiguous. It could require object semantics, spatial metaphors, and uncertainty rules that are not yet bounded.

7. **Atlas-Adaptable Evidence Stack View**

Good future target-adaptable idea, but should remain parked until Atlas owns a local adoption review.

8. **Atlas-Adaptable Actor Activity Strip**

Promising, but target-owned. Park for Atlas review.

9. **Atlas-Adaptable Provenance Drawer**

Promising as an Atlas-specific detail surface. Lab can study drawer structure, but provenance meaning is Atlas-owned.

10. **Atlas-Adaptable Watch / Marked Split Panel**

Potentially valuable, but too tied to Atlas attention/action semantics for Lab defaults.

11. **Atlas-Adaptable Evidence Delta View**

Potentially powerful but high semantic risk. It could imply evidence change, history, and proof semantics that Lab must not own.

## Recommended Prototype

### Name

```txt
Instrument Status Band
```

Name is advisory. Overseer may rename before Dev.

### Purpose

Show the state of a bridge-fed readout in a compact, beautiful, glanceable module:

- what the readout is
- whether it is current, updating, aged, partial, unavailable, fallback, or empty
- what the readout is based on
- how fresh it is
- whether there are gaps or warnings
- where to inspect detail

### Why This Should Exist

Most Aura projects will need some version of:

```txt
Can I read this information right now, what is it based on, and what should I notice?
```

The Instrument Status Band answers that without requiring the target project to adopt Lab doctrine. It is a face primitive: not the whole face, but the part that lets a face communicate state honestly.

## Visual Language Direction

Use a restrained instrument-panel style:

- low-emission dark surface
- matte or glass-inset banding
- small embedded pips/lights/bars
- precise numeric/text readouts
- strong alignment and spacing rhythm
- subtle depth through borders, inset shadows, and layered bands
- restrained cyan/amber/red/neutral accents
- no generic dashboard card pile
- no heavy glow
- no constant animation

Material and border direction:

- use instrument plates, inset bands, quiet rails, and small status pips as the primary material grammar
- make borders do a job: containment, grouping, focus, state, or structural accent
- prefer one state edge or pip over coloring every panel edge
- use glass treatment only for detail overlays or secondary layers where text contrast remains strong
- avoid decorative sci-fi border packs, repeated chopped corners, and border fragments that do not explain information
- keep default panel radius tight, roughly 4px to 8px, with larger radii reserved for specific overlay surfaces
- use glow as a state signal, not as the default material

Palette and texture direction:

- start with a `Graphite Instrument` palette as the safest default: dark graphite base, matte panels, crisp light text, restrained cyan/teal current accents, amber aged/partial accents, muted red fault accents
- keep `Cold Glass` and `Amber Cockpit` as alternate visual skins for future exploration, not first-pass requirements
- use `Green Phosphor` mainly for diagnostics or low-power variants, not the default full face
- treat texture as tactile support: subtle grain, matte composite, smoked glass, faint inset shadows, and optional VFD/LCD value bloom
- avoid pure black as the default surface; use near-black graphite/slate so elevation and panel depth remain visible
- keep red rare, cyan rare enough to matter, and amber reserved for age/fallback/warnings unless the whole palette is amber-themed
- do not add theme switching, a color editor, heavy CRT effects, carbon fiber, or a broad palette matrix in the first prototype

References should inform craft, not copy:

- NASA cockpit display references for at-a-glance state and off-nominal focus
- sci-fi web UI references for composable frames and panel texture
- lo-fi/terminal references for density and calm text rhythm
- game HUD discussions for hierarchy and readability under pressure

## Information Hierarchy

First read:

- readout label
- primary value or status
- state light/pip

Second read:

- freshness/age
- source/basis summary
- gaps/warnings count or marker

Third read:

- detail reveal with basis, known fields, gaps, warnings, source timing, and state explanation

The band should make the state visible even when the user does not open detail.

## Interaction Model

Default:

- compact band is visible in the main surface
- state is shown with light/pip/bar plus text
- basis/freshness summary is one short line

On interaction:

- click or keyboard activate opens `Readout Detail`
- detail shows source/basis/gaps/warnings without changing source meaning
- hover may expose a title/tooltip for truncated text, but critical state must not be hover-only

Motion:

- brief pulse when state changes
- gentle sweep only while updating/loading
- quick settle when new data arrives
- no motion when unchanged
- reduced-motion mode preserves all information

## State Grammar

Use Lab-owned neutral display labels:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

These are presentation labels only. They must not become source-project enums or bridge contract terms.

State treatment:

- `CURRENT`: steady light, clear value, normal surface
- `UPDATING`: sweep or progress shimmer, current known value may remain visible if available
- `AGED`: amber/low-warm marker, visible readout age, content remains legible
- `PARTIAL`: segmented light/bar, gaps marker visible, partial basis summary
- `UNAVAILABLE`: quiet red/muted marker, no fake value, detail explains unavailable basis
- `FALLBACK`: split or inset treatment showing fallback basis and age
- `NO DATA`: calm empty state, no warning styling unless a warning exists

## Fixture / Data Shape Needed

Use neutral Lab fixture data only. Do not define a durable bridge contract.

A useful fixture shape for presentation exploration would include:

- readout title
- primary value
- secondary value or short summary
- state
- readout age
- basis/source summary
- known fields
- gaps
- warnings
- optional last-known/fallback basis
- optional updated-at text
- long-text variants

State scenarios should include:

- current populated
- updating/loading
- aged/stale
- partial with gaps
- unavailable/failed
- fallback/last-known
- no data/empty
- long source/basis text
- narrow shell

## Terminology Risks And Safe Labels

Safe Lab-owned language:

- readout
- basis
- state
- surface
- coverage
- gaps
- warnings
- freshness
- availability
- detail

Avoid as Lab default copy:

- evidence
- intel
- intelligence
- tactical
- combat
- operator
- watch
- monitoring
- listening
- verified
- trust
- certainty
- proof
- truth
- source of truth
- authoritative
- snapshot
- report
- schema
- Core
- Seed

If source-owned terms appear in fixture data, they should be visibly treated as source-fed content, not Lab defaults.

## Portability Notes

Portable:

- band geometry
- status light grammar
- source/freshness placement
- readout-basis line
- detail reveal structure
- state visual treatments
- motion timing
- narrow behavior
- diagnostics demotion pattern

Not automatically portable:

- Lab state labels as target enums
- Lab fixture names
- source meaning
- target labels
- severity mapping
- freshness thresholds
- provider/source wording
- any bridge shape

Target adoption should require a target-local advisory or acceptance artifact.

## What Should Remain Parked

Park for now:

- full Ship/System Readout face
- Sensor Surface
- Activity Timeline
- Atlas-adaptable Evidence Stack View
- Atlas-adaptable Actor Activity Strip
- Atlas-adaptable Provenance Drawer
- Atlas-adaptable Watch / Marked Split Panel
- Atlas-adaptable Evidence Delta View
- adopting Arwes, Astro Sci-Fi UI, or any external framework as implementation direction
- broad screenshot/reference library expansion as a milestone
- broad visual-smoke matrix expansion
- target-project adapters
- durable bridge contracts
- target adoption claims

These ideas should remain available as references and later concept candidates.

## Minimum Verification

For a later Dev implementation, enough verification would be:

- existing renderer verification
- existing vocabulary verification
- focused visual smoke for the new module only
- narrow-shell smoke for the band
- long-text containment smoke
- reduced-motion or no-animation fallback check if motion is added

Do not expand into a broad visual-smoke matrix. Verification should prove containment and state readability, not become the product direction.

Suggested command expectations should be set by Overseer in the Dev runway, but likely include:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
```

Electron visual smoke should be run only if the Dev change affects visible renderer layout.

## Dev Implementation Recommendation

UI/UX recommends that Dev implement next only after Overseer accepts and bounds the prototype.

Recommended Dev target, if accepted:

```txt
Build one Instrument Status Band prototype in Lab using neutral fixture data and existing Lab presentation boundaries.
```

This should be a visible HTML/CSS/JS presentation feature, not a backend contract, adapter, or target-project adoption.

## Acceptance Checks For Overseer

The M18 concept pack should be accepted if Overseer agrees that:

- one smallest safe prototype is selected
- the selected prototype supports project expansion without claiming target authority
- the prototype is visible and presentation-first
- state/source/freshness/basis/gaps/warnings are central
- Lab-owned neutral language is used
- Atlas/Sense/Core meanings remain protected
- broad verification and fixture taxonomy expansion are parked
- Dev can receive a bounded runway without deciding product direction

## Open Questions

- Should the prototype name remain `Instrument Status Band`, or should Overseer choose a more Lab-native name?
- Should the first implementation live inside the existing Bridge State Readout surface or as a separate module in the Lab presentation family?
- Should the band include a compact rolling numeric value in the first pass, or should Rolling Counter remain a later prototype?
- Which target project should review the pattern first after Lab proves it: Sense, Atlas, or neither until the Lab module is stronger?

## Summary

The next best Lab move is not a full project face yet. It is the smallest face primitive that future faces will need: a compact, beautiful, state-aware instrument band for bridge-fed readouts.

Build the grammar first. Then the larger faces can be composed with less risk.
