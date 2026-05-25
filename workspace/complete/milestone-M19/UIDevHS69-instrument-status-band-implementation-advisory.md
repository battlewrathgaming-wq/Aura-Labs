# UIDevHS69 - Instrument Status Band Implementation Advisory

Date: 2026-05-24
Role: UI developer / presentation systems worker
Project: Aura Lab
Status: Advisory

## Scope

This advisory supports the next Instrument Status Band prototype. It is not an implementation handoff, product direction, bridge contract, fixture taxonomy, or target-project adoption claim.

The recommended path is to build from the existing Lab renderer patterns:

- `src/renderer/index.html` already contains `#state-readout` and `#source-detail-drawer`.
- `src/renderer/app.js` already maps local fixture status into Lab readout labels.
- `src/renderer/styles.css` already contains the first state band, pips, motion, detail drawer, narrow layout, and reduced-motion handling.
- `src/services/serviceRegistry.js` already provides fixture families and states.

The next Dev should refine these into one bounded Instrument Status Band primitive rather than adding a second unrelated status surface.

## Recommended Implementable UI Structure

Build the band as one compact module inside the existing primary presentation surface:

```txt
Instrument Status Band
  left: status light + label + primary value/status
  middle: instrument inset with pips/segments and optional updating sweep
  right: readout age + basis/coverage short line + warning/gap marker
  below or adjacent: compact Readout Detail reveal
```

Recommended DOM direction:

- Keep the existing compatibility target `#state-readout`.
- Add a module-level class such as `instrument-status-band` only if useful for clearer CSS ownership.
- Keep existing visible Lab labels: `Bridge State Readout`, `Readout Detail`, and neutral state labels.
- Preserve existing IDs that verification expects unless Dev explicitly updates focused verification.
- Treat `Readout Detail` as the compact reveal for basis, known fields, gaps, warnings, and availability notes.

Do not introduce a full face, theme switcher, target adapter, or new shell navigation for this prototype.

## Suggested Slot Model

The band should have these slots, all optional-safe:

| Slot | Purpose | First-pass source |
| --- | --- | --- |
| Primary value | The most important visible readout value or state. Falls back to the state label when no value exists. | Existing `stateCopy.title`, fixture title, or a narrow `primary_value` field if added locally. |
| Label | Names the readout without source-project doctrine. | Existing `Bridge State Readout` or fixture family label where appropriate. |
| Status light | At-a-glance state signal. | Existing `readoutState.tone`. |
| Readout basis | Short line explaining what the displayed readout is based on. | Existing `readoutState.basis` and current basis display text, renamed only visibly where safe. |
| Readout age / freshness | Last read or pending/unavailable age. | Existing `ageLabel` and `last_read_at`. |
| Warnings / gaps | Count or marker before detail is opened. | Existing `missing_fields`, `warnings`, and `error`. |
| Compact detail reveal | Expandable inspection of basis, known fields, gaps, warnings, source paths, timing. | Existing `Readout Detail` drawer. |

Suggested display hierarchy:

1. State light, label, and primary value/status.
2. Readout age, readout basis, and coverage/gap marker.
3. Readout Detail reveal.

The band should still communicate the state when the drawer is closed.

## Suggested Material / Surface Model

Use a restrained instrument material system:

| Material | Use | Notes |
| --- | --- | --- |
| Band | The whole status strip. | Matte graphite, tight 4px to 8px radius, stable height, low glow. |
| Inset panel | Pips, source coverage, or small readout meter. | Darker inner well with subtle grid/rail texture. |
| Rail / divider | Separates label/value, instrument, and meta. | Thin line, useful grouping only. |
| Status pip / light | Primary state indicator. | Shape, glow, label, and pattern must all support state. |
| Muted warning edge | Gaps/warnings/aged/fallback cue. | Prefer one left/top edge or small marker, not whole-panel alarm color. |
| Detail drawer / reveal | Secondary inspection surface. | Keep close to the band; use stable summary height and readable grid. |

Do not make every state a different full-card color. The surface should stay calm while the light, edge, state text, and detail markers carry meaning.

## State Treatments

| State | Label | Visual treatment | Copy treatment |
| --- | --- | --- | --- |
| Current | `CURRENT` | Steady green/teal light, complete pips, normal band surface. | Show value and short current basis. |
| Updating | `UPDATING` | Brief sweep or pulse; keep dimensions fixed. | Say updating from local bridge; show pending age if no prior read. |
| Aged | `AGED` | Amber light or warning edge; content remains readable. | Show last successful read and visible readout age. |
| Partial | `PARTIAL` | Segmented pips or split marker; gap marker visible. | Say available fields are displayed; show gap count before drawer. |
| Unavailable | `UNAVAILABLE` | Muted red light/edge; no fake value. | State availability plainly; detail shows unavailable basis/error. |
| Fallback | `FALLBACK` | Split/inset treatment; amber plus secondary basis line. | Show fallback basis and age. |
| No data | `NO DATA` | Quiet empty surface; neutral or muted red only if truly needed. | Say no presentable data returned; avoid warning tone unless warning exists. |

All states need both text and visual treatment. Color alone is not enough.

## Responsive And Narrow-Shell Behavior

Recommended breakpoints:

- Wide: three-column band: core / instrument / meta.
- Medium: two rows: core and meta first, inset instrument below or between them.
- Narrow: single column with stable order: state core, primary/basis line, age/gaps, compact instrument, detail reveal.

Narrow behavior rules:

- The primary value/status stays visible before secondary diagnostics.
- Long basis/source text wraps with `overflow-wrap: anywhere`.
- The status light remains adjacent to the label/state, not isolated above it.
- Pips/segments can reduce count or become a short bar, but must keep a text count nearby.
- The detail drawer should not push controls off-screen; it can default closed in very narrow shells if Overseer accepts that behavior.
- Avoid horizontal scrolling in the module.

## Accessibility And Readability Constraints

Text containment:

- Use `min-width: 0` on grid children.
- Use `overflow-wrap: anywhere` for labels, basis, source paths, warnings, and primary values.
- Clamp only non-critical summaries; never hide state, age, gap count, or availability.

Contrast:

- Main text should remain high contrast on dark surfaces.
- Muted labels must remain readable, especially in aged/unavailable states.
- Glow cannot be the only contrast source.

Non-color-only status:

- Pair state color with the state label.
- Add shape/pattern differences where practical: steady dot, pulsing dot, segmented bar, split inset, muted edge.
- Gap/warning count should be visible as text.

Stable dimensions:

- Give the band and inset panel predictable min-heights.
- Keep pips/segments fixed-size so counts do not resize the band unpredictably.
- Updating motion should not shift layout.
- Reduced-motion mode must preserve all state information.

## What Should Be Built First

First implementation should:

1. Refine the existing `#state-readout` into the Instrument Status Band rather than adding a parallel module.
2. Add or expose a primary value slot using existing fixture data where possible.
3. Add visible gap/warning marker text to the closed band.
4. Improve state-specific surface treatment for current, updating, aged, partial, unavailable, fallback, and no data.
5. Keep `Readout Detail` as the compact reveal and ensure it contains basis, age, known fields, gaps, warnings, and source paths.
6. Narrowly extend fixture data only if an implementable slot cannot be exercised from existing fields.
7. Update only focused renderer/service/vocabulary verification needed for the new visible module.

The best first success condition is a single visible band that can be scanned without opening detail, while the drawer still explains the readout basis and gaps.

## What Should Remain Parked

Park these for later:

- Full Ship/System Readout face.
- Sensor Surface.
- Activity Timeline.
- Rolling Counter / Telemetry Reel.
- Target-project adapters or adoption claims.
- Target-project-specific copy or semantics.
- Durable bridge/data contract definitions.
- Broad fixture taxonomy expansion.
- Broad visual-smoke matrices.
- Theme systems, palette editors, external UI frameworks, sound, or heavy animation.
- Reference-library expansion as part of this Dev packet.

## Minimum Verification Needed

Recommended minimum for the Dev implementation:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
```

Run Electron smoke if visible layout/CSS changes are made:

```powershell
npm.cmd run smoke:electron
```

Suggested visual checks:

- Each state is reachable from the fixture controls.
- Long text remains contained.
- Narrow shell stacks cleanly.
- `Readout Detail` works with drawer open and closed.
- Updating motion stops under reduced-motion settings.
- Gap/warning marker is visible before opening detail.

Do not expand into a broad smoke matrix. Verification should prove the module is legible, contained, and state-aware.

## Risks And Decisions Needed

Human / Overseer decisions:

- Should the prototype keep the visible feature label `Bridge State Readout`, or should the band visibly introduce `Instrument Status Band` as a module label?
- Should the compact detail reveal default open as it does now, or default closed once the closed band carries enough state/basis/gap information?
- Is adding a narrow `primary_value` fixture slot acceptable, or should Dev derive the primary value entirely from existing fields for this pass?
- Should `NO DATA` use a muted red marker like unavailable, or a quieter neutral empty marker?

Implementation risks:

- Adding a new fixture shape could drift toward a bridge contract if not kept clearly Lab-local.
- A stronger visual state system could overuse color unless text, shape, and pattern remain part of the grammar.
- A second status module would split attention from the accepted Bridge State Readout and increase verification churn.
- Long source/basis text can still break the shell unless containment is tested after styling changes.

## Advisory Close

The next prototype should make the existing readout feel more like a finished instrument: compact, calm, state-aware, and honest about basis, freshness, gaps, warnings, and availability.

Build the band grammar first. Larger presentation faces can compose from it later.
