# DisplayTypeLibraryHS76 - Display Pattern Research

Date: 2026-05-25
Role: UI development owner / display asset documentor
Project: Aura Lab
Milestone: M21 - Display Type Library Research Sweep
Status: Advisory documentation artifact

## Purpose

Expand Aura Lab's display type library so future display assets can be selected, pressured, compared, and parked with better judgment.

This artifact maps display types back to the accepted M20 slot vocabulary. It is not implementation, a bridge contract, a target-project adoption plan, a shared glossary, or product doctrine.

## Files And References Reviewed

Project-local:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/OverseerHS76-m21-display-type-library-runway.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/OverseerHS75-m20-acceptance.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/current-state/m19-instrument-status-band-current-state.md`

Local reference notes:

- `workspace/reference/README.md`
- `workspace/reference/resource-sites-library-2026-05-24.md`
- `workspace/reference/web-sweep-sci-fi-lo-fi-2026-05-24.md`
- `workspace/reference/portable-face-expansion-support-2026-05-24.md`
- `workspace/reference/materials-and-borders-sweep-2026-05-24.md`
- `workspace/reference/color-palettes-and-textures-sweep-2026-05-24.md`
- `workspace/reference/atlas-operational-surface-reference-2026-05-25.md`

Shared terminology / critical sources:

- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

External source note:

- No new web browsing was performed. URLs below are cited only where they already appear in local reference notes.

## Current-State Understanding

M20 accepted an initial Lab display slot vocabulary. Those slots are display asset slots only; they are not bridge fields, target-project contracts, or shared enums.

M21 should now answer:

```txt
Which display types can carry those slots, and which types are worth feeding into the material bench next?
```

The useful output is not an inspiration gallery. It is a practical library of display forms, with strengths, limits, narrow behavior, text containment, terminology risk, and disposition.

## Research Method

1. Started from accepted M20 slots and recurring pressures.
2. Reviewed local reference notes for portable display structures, not product meanings.
3. Classified display types by slot fit and failure mode.
4. Assigned each type a disposition: near-term material bench, later inventory candidate, parked, or reject for now.
5. Kept source-project terms source-owned and translated display needs into Lab-owned vocabulary where safe.

## Display Type Table

| Display type | Purpose | Best-fit M20 slots | Pressures handled | References / source notes | Strengths | Failure modes | Narrow behavior | Text containment | Motion suitability | Terminology risks | Candidate Lab asset family | Disposition |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Status band | Compact first-read state, value, age, basis, and marker. | `readout label`, `primary value`, `state label`, `status light`, `readout age`, `readout basis`, `source coverage`, `warnings`, `gaps`, `narrow summary` | state, freshness, basis, gaps, warnings, availability | Accepted M19; NASA cockpit references; Grafana status/history references in resource library | Best near-term Lab primitive; already proven by M19. | Can become crowded if it carries long basis text directly. | Stack core, meta, then inset; keep state/value first. | Basis and warnings need single-line summary plus detail reveal. | Good for brief pulse/sweep only. | Lab state labels must not become source-project enums. | Instrument Status Band / status band family | Accepted; use as anchor for material bench. |
| Status chip | Tiny inline state/availability marker. | `state label`, `status light`, `availability note`, `warning marker`, `source-owned label` | availability, blocked/unavailable/partial distinction, table/list rows | Grafana status panel notes; HUD readability references | Cheap, scannable, useful inside dense lists. | Too small for basis/age; can become color-only. | Survives narrow shells well if label remains visible. | Text must be short; detail must be nearby or on parent. | Usually none; optional state-change pulse. | `blocked`, `partial`, `fresh` need owner/layer qualification. | Status chip / availability chip | Near-term material bench. |
| Value rail | Horizontal or vertical strip of compact values with labels. | `primary value`, `secondary value`, `readout label`, `readout age`, `source coverage`, `known fields` | density, comparison, compact metrics | Atlas operational surface reference; terminal/dashboard references | Converts ledger rows into a first-read cluster. | Can imply equal importance for unrelated values. | Collapse to stacked rows or two-column pairs. | Labels need short forms and tooltips/detail rows for long text. | Minimal; value-change settle is okay. | Counts from source projects may carry source-owned meaning. | Compact value rail | Near-term material bench. |
| Gauge / meter | Shows proportion, level, threshold, or range. | `primary value`, `secondary value`, `state label`, `warning marker`, `readout basis` | scale, threshold, current vs limit, warning edge | NASA/Open MCT and data-viz references; IBM data visualization basics in resource library | Good when range and limit are meaningful. | Dangerous if scale/threshold is invented by Lab. | Use compact bar meter rather than circular gauge in narrow shell. | Labels and units must remain adjacent. | Smooth fill transition okay; no constant animation. | Requires source-owned thresholds; Lab should not fabricate severity. | Meter / threshold strip | Park until material has real ranges/limits. |
| Counter / reel | Prominent changing number or short value. | `primary value`, `readout age`, `state label`, `fallback basis` | numeric updates, last-known/fallback, motion meaning | Terminal dashboard references; rolling counter candidate from M18 | Strong for numeric display and change feeling. | Can feel gimmicky or casino-like if overanimated. | Keep static value plus small delta/age line. | Numeric value is safe; basis/fallback text goes below or detail. | Good for brief roll/settle; reduced-motion fallback required. | Counts can imply completeness unless coverage/cap nearby. | Rolling Counter / Telemetry Reel | Later near-term; material needed first. |
| Timeline / bead strip | Shows ordered events, state changes, or freshness over time. | `readout age`, `state label`, `source-owned label`, `warnings`, `detail row` | sequence, freshness, history-like display, state change | Open MCT, Grafana status history, terminal activity references | Good for state-over-time and recent changes. | Can imply Atlas-like history or durable source if not bounded. | Convert to bead row or latest-three stack. | Long event text belongs in detail reveal. | Good for newest-event pulse; no constant movement. | `report`, `snapshot`, history-like terms need owner qualification. | Timeline / bead strip | Park until material defines event durability. |
| Activity surface | Larger event/readout area for recent activity and context. | `readout label`, `primary value`, `detail row`, `source-owned label`, `readout age`, `warnings` | recent activity, observed items, mixed rows | Terminal dashboard and Atlas operational reference | Useful for making dense activity readable. | Too broad; can become product face or target adapter. | Needs strong filters/summary first. | Requires aggressive row truncation and reveal. | Subtle append/settle only. | Can import Atlas/Sense meaning quickly. | Activity surface | Park; study after material bench. |
| Compact table / list | Dense structured rows with labels, values, and chips. | `detail row`, `known fields`, `gaps`, `warnings`, `source-owned label`, `state label` | detail density, comparison, source-owned rows | Open MCT tables; Atlas operational surface reference | Familiar, efficient, good for detail reveals. | First-read can vanish into ledger reading. | Convert to stacked cards/rows with priority columns first. | Needs fixed columns, wrapping rules, and row height caps. | None except row reveal. | Column labels may carry source-project semantics. | Compact list / detail table | Near-term material bench for detail reveal. |
| Detail reveal | Secondary surface for basis, gaps, warnings, source-owned terms, long text. | `detail reveal`, `detail row`, `long text block`, `readout basis`, `known fields`, `gaps`, `warnings`, `source-owned basis` | density, long text, owner/layer explanation, secondary diagnostics | M19 `Readout Detail`; glass/material references | Natural next primitive; contains complexity without cluttering first read. | If always open, it can dominate primary readout. | Summary line first; content stacks below. | Must handle paragraphs, paths, lists, and unbroken tokens. | Good for open/close transition; reduced-motion required. | `Source Detail` vs `Readout Detail` naming needs care. | Readout Detail Reveal | Highest near-term material bench priority. |
| Source coverage marker | Small count/marker for available sources, known fields, or basis coverage. | `source coverage`, `known fields`, `gaps`, `source-owned basis` | source/basis/provenance, completeness | M19 band; M20 shared collision check | Makes basis limits visible before detail. | `source` can sound authoritative. | Works as count chip or segmented pips. | Label must clarify display/source layer. | None; optional segment update. | `source`, `sample`, `coverage` need owner/layer qualification. | Source Coverage Marker | Near-term material bench. |
| Gap / warning marker | Compact marker for display gaps or warnings. | `gaps`, `warnings`, `cap marker`, `availability note`, `status light` | partial, capped, warning, degraded, missing fields | M19 band marker; material/border sweep warning edge | Keeps incompleteness visible without alarm panel. | Can over-alarm if every gap looks severe. | Keep short count/label; detail reveal holds explanation. | Use count plus terse phrase. | Optional pulse only when newly changed. | Warnings may be source errors or display cautions. | Gap / Warning Marker | Near-term material bench. |
| Availability reason treatment | Explains why something is unavailable, blocked, no data, no scan, degraded, or fallback. | `availability note`, `fallback basis`, `authority note`, `state label`, `detail row` | absence, authority, failure, fallback distinction | Sense critical terms; M20 absence pressure | Essential to prevent state collapse. | Can become verbose in primary surface. | One-line reason plus detail reveal. | Needs long explanation sample. | None; state transition settle only. | `Live IO blocked`, `No scan`, `NO DATA` must remain distinct. | Availability Reason Treatment | Highest near-term material bench priority. |
| Compare strip | Side-by-side readout values or before/after states. | `primary value`, `secondary value`, `readout age`, `readout basis`, `state label` | comparison, changed values, fallback/last-known | Workshop candidates; data-viz comparison ideas | Useful for last-read vs current, source A vs source B. | Can imply causal difference or ranking. | Collapse to stacked before/after rows. | Labels need careful wrapping and no hidden units. | Small transition on changed side. | Requires source-owned meaning for what is comparable. | Compare Strip | Park until material defines comparisons. |
| Diagnostic panel | Secondary support/status surface. | `diagnostic row`, `state label`, `availability note`, `warnings`, `detail row` | runtime/support, service state, secondary health | Lab `Bridge Diagnostics`; terminal references | Keeps support facts accessible but demoted. | Diagnostics can become the product face. | Stack rows; hide long technical detail behind reveal. | Monospace okay for values, not all copy. | Usually none. | Support words can imply product state. | Diagnostic Support Panel | Later; keep secondary. |
| Map / sensor display | Spatial or object-position surface. | `source-owned label`, `primary value`, `state label`, `readout age`, `warnings` | spatial context, objects, uncertainty | NASA/Open MCT, sci-fi/sensor references | Visually powerful for future faces. | High semantic burden; can invent spatial meaning. | Needs fallback list/summary in narrow shells. | Labels must be sparse; detail on selection. | Motion only if source supports changing position. | Too target-specific without source-owned spatial model. | Sensor Surface / Map Display | Park. |
| Matrix / heatmap | Dense grid for status by entity/time/category. | `state label`, `status light`, `coverage count`, `warnings`, `readout age` | many statuses, categorical density | Grafana/status history, data-viz references | Excellent for many repeated states. | Requires categories and thresholds; can become abstract. | Collapse to summary counts plus detail list. | Cell labels need external legend/detail. | Minimal; highlight changed cell. | Severity/category meaning must be source-owned. | Matrix / Status Heatmap | Park until material has categories. |
| Progress strip | Shows progress through a known process or update step. | `state label`, `readout age`, `authority note`, `effect note`, `warnings` | updating, loading, staged action, action effect | NASA process/display standards; progress patterns | Good when process stages are real. | Fake progress is worse than no progress. | Use small strip plus label. | Stage labels must be short. | Appropriate for active updating only. | Stages can imply backend workflow Lab does not own. | Progress Strip | Conditional; material must define real stages. |
| Empty / unavailable panel | Larger calm panel for empty, unavailable, blocked, or no-data states. | `state label`, `availability note`, `readout basis`, `fallback basis`, `detail row` | absence, failure, fallback, no data | M19 states; reference empty/degraded guidance | Prevents empty states from feeling broken or over-alarmed. | Can take too much space for common quiet states. | Use compact summary in parent, full panel only in detail/full view. | Needs long-form explanation samples. | None. | Must distinguish Lab no-data from Sense no-scan and blocked. | Empty / Unavailable Panel | Near-term material bench. |
| Status constellation / grouped pips | Shows multiple small availability/source/state markers together. | `status light`, `source coverage`, `warnings`, `gaps`, `state label` | multi-source coverage, status grouping | Workshop README; M19 pips; HUD references | Strong glance read for source availability. | Pips can become unlabeled decoration. | Reduce to count plus one marker. | Needs legend or nearby label. | Brief pulse on changed pip only. | Meaning of each pip must be defined by asset. | Grouped Pips / Status Constellation | Near-term material bench as support to bands. |
| Action readiness strip | Shows whether an action is available, blocked, gated, or effect-bearing. | `action label`, `authority note`, `effect note`, `availability note`, `warnings` | action authority, live IO, write/effect, confirmation | Atlas operational surface reference; Atlas/Sense critical terms | Useful for high-consequence source-owned actions. | Can accidentally instruct Dev/product action work. | Keep compact; detail reveal explains effect. | Action copy must be source-owned or accepted. | Motion only for pending action. | High source-owner risk. | Action Readiness Strip | Park until target-owned need exists. |
| Long text block | Paragraph/list treatment for basis, warning, explanation, or detail material. | `long text block`, `detail row`, `readout basis`, `availability note`, `warnings` | long-form copy, containment, source paths, explanations | M20 material direction; lo-fi/terminal references | Needed before any repeat cycle with fuller copy. | If primary, it overwhelms the module. | Lives in reveal or full-width detail; never primary in a band. | Must handle paragraphs, bullets, paths, and long tokens. | None. | Copy can drift into product meaning. | Long Text Detail Block | Highest material bench priority. |

## Slot Mapping Back To M20 Vocabulary

| M20 slot | Best display types | Material samples still needed |
| --- | --- | --- |
| `asset label` | status band, detail reveal, diagnostic panel | source-owned label vs Lab asset label examples |
| `readout label` | status band, value rail, empty panel | long labels, source-owned labels, narrow labels |
| `primary value` | status band, value rail, counter/reel, gauge/meter | numeric, text, absent, fallback, long value |
| `secondary value` | value rail, compare strip, compact table/list | mixed short/long row values |
| `state label` | status band, status chip, progress strip, empty panel | blocked/unavailable/no-data/no-scan distinctions |
| `status light` | status band, status chip, grouped pips | non-color-only status examples |
| `readout basis` | status band, detail reveal, source coverage marker | long basis, source-owned basis, collision wording |
| `readout age` | status band, freshness strip, timeline/bead strip | last read, observed at, aged, expired |
| `source coverage` | source coverage marker, grouped pips, detail reveal | zero/partial/many source cases |
| `known fields` | compact table/list, detail reveal | dense field list and missing field contrast |
| `gaps` | gap marker, detail reveal, compact list | one gap, many gaps, source-owned gap language |
| `warnings` | warning marker, detail reveal, diagnostic panel | warning explanation, warning count, muted warning edge |
| `availability note` | availability reason treatment, empty panel, status chip | blocked vs failed vs unavailable vs no data |
| `fallback basis` | empty/unavailable panel, compare strip, status band | last-known/fallback copy with age |
| `sample note` | scoped sample treatment, status chip, detail reveal | scoped/capped/partial sample examples |
| `cap marker` | gap/warning marker, source coverage marker, compact list | capped count and cap explanation |
| `authority note` | availability reason treatment, action readiness strip | live-IO blocked, action gated, clipboard authority |
| `effect note` | action readiness strip, detail reveal | read-only vs write/effect examples |
| `source-owned label` | all source-fed types | Atlas/Sense label pass-through cases |
| `source-owned basis` | detail reveal, source coverage marker | Atlas/Sense basis examples |
| `detail reveal` | detail reveal, status band, compact table/list | drawer open/closed, long text, nested rows |
| `detail row` | detail reveal, compact table/list, diagnostic panel | key/value, label/value, row wrapping |
| `long text block` | detail reveal, empty panel, diagnostic panel | paragraph, list, path, one long token |
| `diagnostic row` | diagnostic panel, detail reveal | support-state examples that stay secondary |
| `narrow summary` | status band, status chip, empty panel | one-line state+age+basis summaries |

## Near-Term Display Types For The Material Bench

Prioritize these because they directly support M19/M20 and the likely next primitives:

1. **Readout Detail Reveal**
   - Needs long text, dense rows, source-owned labels, basis, age, gaps, warnings, and availability explanations.

2. **Availability Reason Treatment**
   - Needed to keep blocked, unavailable, failed, no data, no scan, degraded, and fallback distinct.

3. **Source Coverage Marker**
   - Needed to turn source/basis collision pressure into a compact visible affordance.

4. **Gap / Warning Marker**
   - Already exists in M19; needs fuller material pressure and edge cases.

5. **Long Text Detail Block**
   - Necessary because Lab has used slim wording and now needs realistic display pressure.

6. **Status Chip**
   - Useful inside future tables/lists and narrow shells.

7. **Value Rail**
   - Practical bridge between ledger-like data and instrument-like first read.

8. **Empty / Unavailable Panel**
   - Good material bench for no data, unavailable, blocked, fallback, and no scan distinctions.

9. **Grouped Pips / Status Constellation**
   - Supports multi-source or multi-slot coverage without adding full tables.

Recommended material-bench order:

1. long text / detail reveal
2. absence and availability distinctions
3. coverage/gaps/warnings
4. source-owned label/basis cases
5. numeric/value rail cases

## Parked Display Types

| Type | Park reason |
| --- | --- |
| Gauge / meter | Needs real ranges, thresholds, or limits; Lab should not fabricate them. |
| Counter / reel | Promising, but needs numeric material and reduced-motion expectations first. |
| Timeline / bead strip | Can imply durable history or Atlas-like source meaning; needs event durability material. |
| Activity surface | Too broad before smaller primitives and material bench exist. |
| Compare strip | Needs clear comparable values and source-owned meaning. |
| Diagnostic panel | Useful but must stay secondary; not the next Lab product direction. |
| Map / sensor display | Too semantic-heavy and target-specific without source-owned spatial model. |
| Matrix / heatmap | Needs categories, thresholds, and severity ownership. |
| Progress strip | Only valid when real process stages exist; fake progress is harmful. |
| Action readiness strip | High source-owner/effect risk; save for target-owned action contexts. |

## Terminology And Owner / Layer Risks

- `source` should become `readout basis`, `source coverage`, or source-owned basis with owner/layer nearby.
- `sample` requires scope/cap/partial context.
- `state` must be display state, source state, runtime state, or action state; do not blur them.
- `gateway` remains Sense-owned until owner review.
- `report` and `snapshot` should not become Lab default type names; use `readout` unless source-owned.
- Atlas action/effect terms need authority and effect slots, not generic action buttons.
- Sense live-IO and clipboard terms need lifecycle/authority treatment, not generic loading/unavailable treatment.
- Diagnostics must remain support surfaces unless Human / Overseer opens a support-facing display direction.

## Narrow-Shell Findings

Narrow layout should be treated as a display-type filter:

- Status bands survive if state, primary value, age, and one basis/availability cue remain visible.
- Detail reveals survive if the summary remains compact and content stacks predictably.
- Tables survive only when the first two columns carry the read and secondary rows can wrap or reveal.
- Timelines survive as bead strips or latest-three stacks.
- Gauges and maps often fail narrow shells unless they have a text/list fallback.
- Chips, pips, and warning markers survive well if they keep text labels or counts.
- Long text belongs behind reveal or in a full-width detail block.

## Text-Containment Findings

Material bench must include:

- long readout labels
- long basis lines
- source-owned labels
- source paths
- warning explanations
- gap lists
- one long unbroken token
- mixed short and long table rows
- paragraph detail text
- narrow summary copy

Display types should not be considered build-ready until their expected text pressure is known.

## Motion Findings

Motion should be type-specific and meaningful:

- Status band: sweep only while updating; pulse only on state change.
- Status chip: no constant motion; optional state-change pulse.
- Counter/reel: brief value transition only; reduced-motion static value.
- Detail reveal: open/close transition only.
- Timeline/bead strip: newest item settle; no ambient motion.
- Progress strip: only if real progress/stages exist.
- Matrix/heatmap: changed-cell highlight only.

No display type should require motion to communicate meaning.

## Acceptance Checklist

M21 should be accepted if:

- The required display type families are covered.
- Each type maps back to M20 slots.
- Each major type has purpose, strengths, failure modes, narrow behavior, text containment, motion suitability, terminology risk, and disposition.
- Near-term material-bench candidates are clear.
- Parked types have reasons.
- Reference material is used as inspiration, not requirements.
- No implementation or target adoption work is opened.

## Recommended Next Packet

Recommended next packet:

```txt
M22 - Display Material Bench
```

Expected artifact:

```txt
workspace/reference/display-material-bench-2026-05-25.md
```

Scope:

- Build structured and long-form display material for the near-term display types above.
- Start with Readout Detail Reveal, availability reasons, source coverage, gaps/warnings, long text, and status chips.
- Include collision cases for source, sample, state, gateway, and report wording.
- Keep material as review pressure, not runtime fixture doctrine.

Recommended sequence after M22:

1. M23 - Display Inventory Scaffold.
2. M24 - Instrument Status Band inventory entry plus material coverage note.
3. Later - repeat implementation cycle for the next primitive, likely `Readout Detail Reveal`.

## Verification / Support

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.
- No implementation files were changed.

Ran shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing Lab internal/compatibility `trust` and `certainty` surfaces.

No Electron smoke is needed unless files outside docs/workspace are changed.
