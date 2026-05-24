# Lab Presentation References

Status: Reference only

## Purpose

Collect visual and interaction references for future Aura Lab presentation modules.

References are inspiration, not accepted product direction.

This folder can widen taste, but it cannot create Dev work. Accepted concepts still go through `workspace/current.md`.

Aura Lab uses this folder to study how information can be displayed beautifully, clearly, calmly, and meaningfully in HTML presentation modules. References may come from games, avionics, scientific instruments, operating dashboards, space interfaces, command systems, physical panels, film UI, open-source Electron apps, product screenshots, interaction studies, or hand-made local mockups.

The reference folder is a taste and pattern library. It is not a requirements list, feature queue, bridge contract, target-project adapter, or source of product authority.

## What Belongs Here

Use this folder for:

- visual references
- screenshots
- interaction references
- motion references
- typography and density studies
- examples of source/freshness/status display
- examples of compact tactical readouts
- examples of beautiful empty, stale, partial, failed, loading, or degraded states
- examples of overlays and narrow shells
- examples of diagnostics presented as instruments rather than debug dumps
- notes about why a reference is useful
- notes about what must not be copied

Good references do not have to be from the same domain. A medical monitor, aircraft panel, oscilloscope, racing telemetry screen, game HUD, starship interface, audio mixer, and logistics dashboard can all contain useful ideas if the portable idea is clearly separated from the original product meaning.

## What Does Not Belong Here

Do not use this folder for:

- accepted product direction
- Dev runways
- implementation tasks
- durable bridge contracts
- Atlas, Sense, or Core doctrine
- source-project semantic decisions
- live/private/network data
- broad screenshot smoke matrices
- generated fixture taxonomies
- copied product text or terminology that Lab does not own
- claims that a target project should adopt a Lab pattern

If a reference suggests real work, that work must still be proposed through `workspace/current.md` and accepted by Human / Overseer before Dev implementation.

## Reference Types

Suggested reference types:

- Game HUD
- Space UI
- Tactical overlay
- Scientific instrument
- Industrial control panel
- Data visualization
- Status light system
- Timeline or activity feed
- Detail drawer
- Compact diagnostics
- Motion / transition
- Typography / density
- Surface / material
- Empty / failed / degraded state
- Source / freshness / basis display
- Narrow overlay layout
- Open-source Electron app
- Web component or HTML/CSS technique
- Physical object or panel

## Evaluation Lens

When adding or reviewing a reference, ask:

- What does the user understand first?
- What is visible at a glance?
- What is intentionally secondary?
- How does the UI communicate freshness, source, basis, uncertainty, or gaps?
- Does the visual style support clarity, or does it only look exciting?
- Could this pattern work without importing the original product's meaning?
- Could this pattern survive narrow overlay constraints?
- Does the typography remain readable under pressure?
- Are motion and animation meaningful, or decorative?
- Would this help bridge-fed information feel calmer and more legible?
- What would be dangerous to copy?

## Portability Categories

Use these categories to separate style from meaning:

- Portable visual structure: layout, hierarchy, spacing, rhythm, paneling, grouping.
- Portable interaction pattern: drawer, strip, rail, reveal, compare, scan, filter, inspect.
- Portable state treatment: loading, empty, stale, partial, failed, degraded, blocked.
- Portable motion pattern: pulse, sweep, settle, count transition, drawer transition, status change.
- Portable surface treatment: glass, inset band, grid, matte panel, instrument face, low-emission glow.
- Non-portable terminology: domain labels, faction language, project-owned concepts, product claims.
- Non-portable semantics: backend meaning, scoring model, evidence claims, authority state, data contract.
- Non-portable brand/style: exact colors, iconography, character, proprietary arrangement, copyrighted assets.

## Lab Use Buckets

Possible Aura Lab use buckets:

- Ship/System readout
- Status lights
- Tactical signal readout
- Rolling counter / telemetry reel
- Timeline
- Activity surface
- Detail drawer
- Source/freshness treatment
- Readout basis treatment
- Partial/stale/failed state treatment
- Compact diagnostics
- Narrow overlay
- Comparison/readout view
- Motion language
- Surface/material language
- Atlas-adaptable inspiration
- Sense-adaptable inspiration
- Parked inspiration

## Terminology Risk

References should be marked for terminology risk so Lab does not accidentally import another project's meaning.

Suggested values:

- none
- domain-heavy
- Atlas
- Sense
- Core
- target-owned
- source-owned
- copyright/brand-heavy
- needs Human review

Terminology risk does not mean the reference is unusable. It means the portable idea must be translated into Lab-owned presentation language before it can influence accepted work.

## Disposition Values

Use one of these:

- keep watching
- use in concept
- reject
- needs Human review
- needs Overseer review
- needs target-project owner review
- visual-only inspiration
- interaction-only inspiration
- parked until later

Disposition is advisory. It does not create implementation work.

## Source Guidance

Source can be:

- URL
- local screenshot path
- local image path
- app name and version
- game name and screenshot source
- open-source repository link
- paper/article/video link
- hand-made local sketch
- short written observation when no image is available

Prefer stable source notes. If the reference is from a live website, include the access date. If the reference is a screenshot, store or link the screenshot path where possible.

Do not paste long copyrighted text. Summarize what matters.

## Screenshot Notes

If storing screenshots later, prefer a small local structure such as:

```txt
workspace/reference/screenshots/
```

Suggested screenshot naming:

```txt
YYYY-MM-DD-reference-name-view-or-state.png
```

Screenshots should remain reference material only. Do not treat screenshot presence as acceptance.

## Review Cadence

References can be reviewed during UI/UX concept work.

Useful moments to review this folder:

- before a new presentation concept pack
- before a visual refinement pass
- when a prototype feels too plain
- when state communication feels unclear
- when typography, density, or hierarchy need calibration
- when Human asks to widen the taste pool

Do not turn reference review into a mandatory gate for every small Lab change.

## Entry Format

### [Reference Name]

Type:

- Game HUD / Space UI / Tactical overlay / Scientific instrument / Data visualization / etc.

Source:

- link/path/screenshot

Accessed / Captured:

- YYYY-MM-DD

Interesting Because:

- ...

At-A-Glance Read:

- what the user understands first

Portable Ideas:

- ...

Do Not Copy:

- ...

Possible Lab Use:

- Ship/System readout
- Status lights
- Tactical signal readout
- Rolling counter / telemetry reel
- Timeline
- Activity surface
- Detail drawer
- Narrow overlay
- Source/freshness treatment
- Readout basis treatment
- Compact diagnostics
- Atlas-adaptable
- Sense-adaptable

Terminology Risk:

- none / Atlas / Sense / Core / domain-heavy

State Ideas:

- loading / empty / populated / stale / partial / failed / blocked / degraded

Motion Ideas:

- none / pulse / sweep / transition / counter roll / reveal / settle

Narrow Layout Notes:

- ...

Questions:

- ...

Disposition:

- keep watching / use in concept / reject / needs Human review

## Example Entry Skeleton

### Example: Tactical Status Strip

Type:

- Tactical overlay

Source:

- screenshot path or URL

Accessed / Captured:

- 2026-05-24

Interesting Because:

- Shows multiple live statuses in a compact strip without turning the whole surface into a dashboard.
- Uses small lights and short labels to separate normal, stale, and blocked information.

At-A-Glance Read:

- The user first understands which systems are active and which need attention.

Portable Ideas:

- Status lights embedded beside labels.
- Short basis line below the main value.
- Muted warning state that does not dominate the whole panel.

Do Not Copy:

- Product-specific labels.
- Exact color palette.
- Any implied source authority or scoring model.

Possible Lab Use:

- Status lights
- Tactical signal readout
- Source/freshness treatment
- Narrow overlay

Terminology Risk:

- domain-heavy

State Ideas:

- stale
- partial
- blocked
- degraded

Motion Ideas:

- brief pulse on state change
- no constant animation

Narrow Layout Notes:

- Values remain visible; labels shorten first.

Questions:

- Does this still read clearly when the source/basis line is long?

Disposition:

- keep watching

## Guardrails

- Reference gathering may widen visual taste, but it does not create accepted direction.
- Do not copy project-owned terminology into Lab default copy.
- Do not copy target-project semantics into Lab fixtures or Lab modules.
- Do not use references to bypass `workspace/current.md`.
- Do not make screenshots or inspiration files into a hidden backlog.
- Do not claim adoption suitability for Atlas, Sense, Core, or any other project without that project's authority.
- Keep the portable idea separate from the original source's product meaning.
