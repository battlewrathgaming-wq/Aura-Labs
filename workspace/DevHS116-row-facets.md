# DevHS116 - Row Facets

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute HS116 only: add compact renderer-local row facets for registered presentation rows through the existing Briefing Readout Detail path without changing bridge meaning, visible labels, source-project semantics, dependencies, surfaces, routes, IPC, preload, or split/export behavior.

## Files Changed

- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS116-row-facets.md`

## Facet Shape

Added `slotRowFacets(...)` as a renderer-local slot declaration helper.

The shape is intentionally small:

- `localOnly: true` marks facets as renderer presentation only.
- `render(context)` returns compact facet values from already-derived local readout context.
- `slotRowFacetValues(...)` caps facets to three markers per row.
- rendered rows store `data-presentation-facet-count` and `data-presentation-facets` only on local DOM nodes.
- `.slot-row-facets` renders a slim side rail inside the existing row.

This does not create a bridge payload field, IPC channel, preload bridge, service command, dependency, route, bundle split, new surface, target adapter, durable term, or source-project meaning.

## Proof Path

The existing Briefing Readout Detail registered slots now declare row facets:

- `readout-age` uses a freshness facet.
- `state-summary` uses a state facet.
- `readout-basis` uses a basis facet.
- `known-fields` uses a coverage facet.
- `band-marker` uses a marker facet.
- `source-paths` uses a source-path facet.

The facets render through the existing `renderSourceDrawer(...)` to `appendSourceDetail(...)` path. They stay in the same rows that already support slot ids, lanes, view-intent emphasis, hydration, focus/reveal, and the lazy visual proof.

## Density And Readability

Rows remain compact and readable:

- no visible row labels changed
- no new visible view option was added
- facets are narrow side markers rather than additional text
- the row label and value still render immediately
- lazy visual, hydration, and reveal behavior remain on the same row

Summary, Basis, and Details remain the only visible view options.

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `verify:all` passed.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke covered Briefing and Neutral Sample families, Briefing Summary/Basis/Details view intents, desktop/narrow viewports, and material harness states.

## Ready For Acceptance

The row facet proof is ready for Overseer review.

Row facets are ready to support later overflow sentinel or virtualized list work as local renderer row metadata and compact row-side markers. Overflow sentinel and virtualized list implementation remain parked.

## Residual Risks

- Row facets are proven only through the existing Briefing Readout Detail path.
- Facet names, types, and tones remain local renderer implementation details, not durable key terms.
- Existing inherited naming tripwires remain.
- M29 presentation-head work is still proven only on the Briefing family.
- Overflow sentinel, virtualization, reduced-motion gate, fixture adapter, renderer security review, target adapters, and split/export work remain parked.
- SmokeFlash split before export/seeding remains parked.
