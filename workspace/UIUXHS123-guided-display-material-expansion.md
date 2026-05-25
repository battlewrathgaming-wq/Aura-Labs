# UIUXHS123 - Guided Display Material Expansion

Date: 2026-05-25
Project: Aura Lab
Milestone: M31 - Display Material Repeat Cycle
Role: UI/UX
Status: Advisory artifact

## Purpose

Recommend a small M31 display-material expansion set that adds useful library breadth without opening Dev implementation, target-project adoption, composed outputs, or runtime contracts.

This artifact is advisory only. It does not create accepted material pages, authorize implementation, rename source-project terms, or change bridge/runtime behavior.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-materials/warning-gap-edge.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/future-candidate-bank.md`

## Current State Understanding

Aura Lab has closed M29 and M30. The presentation head now has enough support capability to shape more reusable materials:

- Summary / Basis / Details view intent
- presentation slot registry and view-intent slot policy
- detail hydration
- focus/reveal controller
- lazy visual slot
- row facets
- overflow sentinel
- reduced-motion gate

The current accepted display-material library has four pages:

- Authority Window TTL Strip
- Expandable Status Card
- Table Row Detail Drawer
- Warning / Gap Edge

M31 should now grow the library thinking before another Dev prototype. The useful move is not broad invention; it is a short, concrete candidate set that fills obvious gaps in the current library.

## Recommendation Summary

Recommend all four of the following as M31 pending material candidates:

1. Long Text Detail Block
2. Availability Reason Treatment
3. Source / Basis Coverage Marker
4. Compact Value Rail

Recommended order:

1. Long Text Detail Block
2. Availability Reason Treatment
3. Source / Basis Coverage Marker
4. Compact Value Rail

Do not mark them accepted yet. Do not implement them in the renderer from this artifact. Human / Overseer may choose whether to create pending material pages and ledger rows after review.

## Candidate Materials

| Candidate | Display problem solved | Key slots | Likely fit | Recommended disposition |
| --- | --- | --- | --- | --- |
| Long Text Detail Block | Real basis, warning, path, paragraph, and long-token content needs a contained place to live without bloating bands/cards. | `long text block`; `detail row`; `readout basis`; `warnings`; `gaps`; `narrow summary` | Detail reveals, cards, row drawers, empty/unavailable panels | Pending material candidate |
| Availability Reason Treatment | Similar absence states need distinct readable reasons. | `state label`; `availability note`; `fallback basis`; `authority note`; `detail row`; `narrow summary` | Cards, bands, empty panels, row chips | Pending material candidate |
| Source / Basis Coverage Marker | Coverage, known fields, and basis availability need compact treatment that is not color-only or authority-heavy. | `source coverage`; `known fields`; `readout basis`; `source-owned basis`; `gaps`; `status light`; `narrow summary` | Bands, cards, row facets, warning/gap support | Pending material candidate |
| Compact Value Rail | Mixed small values need labeled, stable layout without implying equal meaning. | `primary value`; `secondary value`; `readout age`; `source coverage`; `sample note`; `cap marker`; `warnings` | Cards, bands, side rails, compact summaries | Pending material candidate |

## 1. Long Text Detail Block

### Purpose

Provide a reusable detail-body treatment for fuller content: long readout basis text, warning explanations, gap lists, source paths, paragraphs, and long unbroken tokens.

### Slots

- `readout label`
- `readout basis`
- `source-owned basis`
- `detail row`
- `long text block`
- `warnings`
- `gaps`
- `availability note`
- `narrow summary`

### States

- current
- partial
- aged
- fallback
- unavailable
- blocked/source-owned placeholder

### Content Lanes

- identity / label: short heading for the detail body
- primary value: optional parent value repeated only when useful
- secondary values: row labels and short notes
- state / availability: parent state plus one reason line
- basis / source-owned placeholder: long basis and qualified owner/layer placeholders
- freshness / age: last read or fallback age when relevant
- coverage / known fields: fields present and missing
- gaps: list or grouped rows
- warnings: paragraph or row explanation
- detail rows: key/value rows, lists, paths, and long identifiers
- long text: paragraph body, warning explanation, path-like values
- narrow summary: one short line that points to fuller detail
- motion pressure: reveal only; no ambient motion

### Interaction / Reveal Behavior

This material belongs behind a detail reveal or drawer. Parent surfaces should show only a short cue. The detail body should open predictably, preserve focus behavior, and keep long content from pushing primary state/value out of first read.

### Narrow Behavior

Narrow shells should keep a compact summary first, then stack long text below. Long unbroken tokens must wrap or break safely. The detail body should not create horizontal overflow.

### Likely Fit

- Expandable Status Card
- Table Row Detail Drawer
- Warning / Gap Edge detail bodies
- Calm empty/unavailable panels

### Risks

- Long copy can become product doctrine if source-owned wording is copied as Lab default.
- Detail surfaces can dominate the first read if opened by default everywhere.
- Source/basis language needs owner/layer qualification when source-owned placeholders appear.

### Verification Expectations If Adopted

- Long paragraph containment
- long unbroken token containment
- narrow layout review
- keyboard/focus review if the reveal is interactive
- reduced-motion check if reveal transition is animated

## 2. Availability Reason Treatment

### Purpose

Keep absence and limited-availability states distinct without turning every case into an alarm.

### Slots

- `state label`
- `status light`
- `availability note`
- `readout basis`
- `fallback basis`
- `authority note`
- `source-owned label`
- `detail row`
- `warnings`
- `narrow summary`

### States

- no data
- unavailable
- blocked/source-owned placeholder
- failed
- degraded/source-owned placeholder
- fallback
- aged
- no-scan/source-owned placeholder

### Content Lanes

- identity / label: availability case or parent material label
- primary value: short state or previous value for fallback only
- secondary values: reason text, last read, missing item count
- state / availability: visible state plus reason
- basis / source-owned placeholder: current basis, fallback basis, or owner/layer note
- freshness / age: last read, fallback age, or unavailable current read
- coverage / known fields: what is present or absent
- gaps: what prevents a fuller display
- warnings: only when limitation needs caution
- detail rows: reason, basis, owner/layer note, fallback note
- long text: optional explanation in detail only
- narrow summary: state plus one reason
- motion pressure: none beyond state change settle

### Interaction / Reveal Behavior

Primary surfaces should show a one-line reason. Detail reveal carries owner/layer notes, fallback basis, and longer explanation. No unavailable case should show a fake primary value.

### Narrow Behavior

Keep state and reason visible before any supporting explanation. Fallback should keep previous/fallback status clear. Source-owned no-scan or blocked placeholders must stay qualified.

### Likely Fit

- Expandable Status Card
- Table Row Detail Drawer
- Authority Window TTL Strip blocked/manual cases
- Empty/unavailable surfaces
- Status chips and row facets

### Risks

- `blocked`, `degraded`, and `no scan` may be source-owned by context.
- Failed, unavailable, blocked, fallback, and no data must not collapse into one UI treatment.
- Strong warning styling can overstate normal absence.

### Verification Expectations If Adopted

- Distinct no data, unavailable, blocked, failed, fallback, and aged cases
- non-color-only status
- narrow one-line reason
- detail row review for fallback and owner/layer notes

## 3. Source / Basis Coverage Marker

### Purpose

Show compact coverage or basis completeness without implying that display coverage is source authority.

### Slots

- `status light`
- `source coverage`
- `known fields`
- `readout basis`
- `source-owned basis`
- `gaps`
- `warnings`
- `cap marker`
- `detail reveal`
- `narrow summary`

### States

- full
- partial
- missing
- unavailable
- capped
- warning

### Content Lanes

- identity / label: coverage label or compact legend
- primary value: count or short coverage phrase
- secondary values: known fields, unavailable items, capped count
- state / availability: full/partial/missing/capped treatment
- basis / source-owned placeholder: basis present or owner/layer placeholder
- freshness / age: optional last read when coverage is time-sensitive
- coverage / known fields: available count and known/missing field list
- gaps: missing basis or fields
- warnings: coverage caveat or capped/sample caution
- detail rows: coverage breakdown
- long text: owner/layer note only when needed
- narrow summary: compact count plus state
- motion pressure: none

### Interaction / Reveal Behavior

The compact marker should show count/state and use detail reveal for the breakdown. Pips, chips, or short rails are acceptable if labels/counts make the meaning non-color-only.

### Narrow Behavior

Reduce to count plus short label, such as `2/3` plus `Partial`, with detail available nearby. Avoid decorative unlabeled pips in narrow shells.

### Likely Fit

- Instrument/status bands
- Expandable Status Card
- Table row facets
- Warning / Gap Edge
- Compact Value Rail

### Risks

- `source` can imply authority if not display-scoped.
- Coverage can be mistaken for completeness of upstream meaning.
- Pips can become decorative if not labeled or counted.

### Verification Expectations If Adopted

- Non-color-only marker
- label/count visible in narrow shell
- detail breakdown available
- copy check for source/basis authority overclaim

## 4. Compact Value Rail

### Purpose

Display a small set of labeled values in a stable rail: counts, age, coverage, warning count, capped sample note, or short secondary values.

### Slots

- `readout label`
- `primary value`
- `secondary value`
- `readout age`
- `source coverage`
- `known fields`
- `sample note`
- `cap marker`
- `warnings`
- `gaps`
- `narrow summary`

### States

- current
- aged
- partial
- capped
- warning
- fallback
- unavailable

### Content Lanes

- identity / label: rail label or parent label
- primary value: main count/value
- secondary values: small labeled metrics
- state / availability: optional chip or state facet
- basis / source-owned placeholder: short basis/cap note
- freshness / age: last read or aged marker
- coverage / known fields: available/expected count
- gaps: missing count or unavailable value
- warnings: warning count or marker
- detail rows: value meanings and owner/layer notes
- long text: not primary; detail only
- narrow summary: top two values plus age/warning if relevant
- motion pressure: value changes should not resize the rail

### Interaction / Reveal Behavior

The rail should be scannable without interaction. Detail reveal can explain units, capped values, or source-owned placeholders. It should not become a sortable table or product control.

### Narrow Behavior

Stack into two-column pairs or a one-line summary. Labels and units must remain adjacent to values. Values should not shift layout as numbers change.

### Likely Fit

- Expandable Status Card
- Instrument/status band support
- right-rail summaries
- table/detail drawer summaries
- source/basis coverage support

### Risks

- Mixed values can imply equal authority if labels are weak.
- Counts can imply completeness unless coverage/cap is nearby.
- Numeric motion can become distracting without reduced-motion fallback.

### Verification Expectations If Adopted

- Stable rail dimensions
- label/unit containment
- narrow stacking
- capped/sample wording qualification
- reduced-motion fallback if numeric transitions are used

## Parked Items

Keep these out of the immediate M31 recommendation set:

- State Facet Stack: promising, but the four selected candidates already cover the current breadth need.
- Route / Reveal Split: useful later, but source-project routes and destinations remain target-owned.
- Timeline / Bead Strip: promising, but event durability and history-like meaning need more care.
- Map / Radius Visualization: source-model-backed and higher complexity; not a generic Lab material in this pass.
- React/map presentation work: outside this advisory packet.
- Virtualized list helper: already parked until concrete list pressure exists.
- Lab fixture adapter: parked until a future packet opens staged ingest or replay support.

## Handoff Recommendation

Human / Overseer should treat the four recommended materials as a bounded M31 expansion set.

Recommended next decision:

- create pending material pages and pending ledger rows for all four, or
- keep this artifact as the advisory source and choose only the first two for pending pages.

Suggested first future Dev prototype remains outside this packet. If a later Dev runway opens, start with either Long Text Detail Block or Availability Reason Treatment, because they add the most reusable presentation value and exercise the accepted M29/M30 support stack without adding product direction.

## Acceptance Criteria Check

- Expands Lab material thinking beyond the four accepted materials: yes.
- Candidates are concrete display materials, not product features: yes.
- Each candidate maps to Lab slots/content lanes: yes.
- Dispositions are clear: all four are recommended pending material candidates.
- Source-project terms and meanings remain source-owned: yes.
- Lab slim language is used for Lab defaults: yes.
- No Dev implementation is authorized: yes.

## Verification

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 39 warning-only candidates.
- No implementation files were changed.

Ran shared terminology verification:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 53/53 resource checks passed.`
- Existing shared warnings remain for inherited Lab internal/compatibility `trust` and `certainty` surfaces.

## Evidence

- Files reviewed: listed above.
- Candidate materials proposed: 4.
- Pending material pages created: none.
- Ledger rows added: none.
- Parked/rejected candidates: listed above.
- Verification commands and results: `npm.cmd run verify:all` passed; shared `npm.cmd run verify:terminology` passed.
