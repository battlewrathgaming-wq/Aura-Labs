# Display Material Bench

Status: M22 advisory material artifact
Date: 2026-05-25
Project: Aura Lab
Scope: staged display content for Lab display assets

## Purpose

This bench provides reusable staged content that pressures Lab display types before implementation.

It is not:

- runtime fixture doctrine
- a bridge contract
- a shared glossary
- source-project meaning
- target adoption guidance
- a SmokeFlash harness

Use this bench to test whether display assets can handle realistic labels, values, basis text, freshness, source-owned placeholders, absence states, gaps, warnings, long text, structured rows, and narrow summaries.

## Files Reviewed

- `workspace/current.md`
- `workspace/OverseerHS78-m22-display-material-bench-runway.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/OverseerHS75-m20-acceptance.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/OverseerHS77-m21-acceptance.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical`

## Use Rules

- Treat entries as display pressure, not product copy.
- Keep source-owned placeholders qualified by owner/layer.
- Do not convert these shapes into bridge fields without a future packet.
- Do not require every display type to support every material set.
- Prefer compact summaries in primary surfaces and long text in detail reveals.
- Preserve absence distinctions: no data, no scan, unavailable, blocked, failed, degraded, fallback.

## Material Set Formation

Every material set in this bench uses the same authoring formation so future Devs can compare material pressure across display assets without inventing a new structure per sample.

This formation is authoring structure only. It is not a bridge contract, runtime fixture schema, target adapter, SmokeFlash implementation, or source-project payload expectation.

Each material set should contain:

- Material class
- Display problem
- Applies to display types
- Mapped M20 slots
- Scenario
- Content lanes:
  - identity / label
  - primary value
  - secondary values
  - state / availability
  - basis / source-owned placeholder
  - freshness / age
  - coverage / known fields
  - gaps
  - warnings
  - detail rows
  - long text
  - narrow summary
  - motion pressure, if any
- Staged ingest shape
- Expected display pressure
- Owner / terminology notes
- Disposition

## Staged-Ingest Shape

A future lightweight harness may replay entries using this shape. M22 does not implement that harness.

```json
{
  "id": "material-id",
  "title": "Human-readable material name",
  "displayProblem": "What the material pressures",
  "displayTypes": ["Readout Detail Reveal"],
  "slots": {
    "readoutLabel": "Example label",
    "primaryValue": "Example value",
    "stateLabel": "PARTIAL",
    "readoutAge": "Last read 18 minutes ago",
    "readoutBasis": "Short basis line",
    "sourceCoverage": "2/3 display sources",
    "knownFields": ["label", "stateLabel"],
    "gaps": ["secondaryValue"],
    "warnings": ["Warning text"],
    "availabilityNote": "Availability explanation",
    "sourceOwnedLabel": "Source-owned placeholder",
    "sourceOwnedBasis": "Qualified source-owned basis placeholder",
    "narrowSummary": "One-line narrow summary"
  },
  "longText": ["Paragraph or list text used for containment pressure."],
  "rows": [
    { "label": "Row label", "value": "Row value", "note": "Optional note" }
  ],
  "pressureNotes": ["What a display asset must prove."],
  "authorityNotes": ["Owner/layer cautions."]
}
```

Field names in this staged shape are harness convenience names only. They are not bridge fields.

## Material Set Index

| ID | Material set | Main display types | Main slots |
| --- | --- | --- | --- |
| `detail-long-basis` | Long readout detail with basis pressure | Readout Detail Reveal, Long Text Detail Block | readout basis, detail row, long text block |
| `availability-distinction` | Absence and availability distinctions | Availability Reason Treatment, Empty / Unavailable Panel | state label, availability note, fallback basis |
| `source-coverage-collision` | Source / basis / coverage collision | Source Coverage Marker, Grouped Pips | source coverage, source-owned basis |
| `gap-warning-pressure` | Gaps and warnings under partial display | Gap / Warning Marker, Detail Reveal | gaps, warnings, known fields |
| `status-chip-row` | Status chip inside dense rows | Status Chip, Compact List | state label, status light, availability note |
| `value-rail-mixed` | Mixed numeric and text value rail | Value Rail, Status Band | primary value, secondary value, readout age |
| `empty-unavailable-panel` | Calm empty/unavailable panel variants | Empty / Unavailable Panel | state label, availability note, readout basis |
| `grouped-pips-coverage` | Multi-source pips and labels | Grouped Pips, Source Coverage Marker | status light, source coverage, gaps |
| `collision-language` | Source/sample/state/gateway/report/snapshot wording | Detail Reveal, Material QA | source-owned label, authority note |

## Material Sets

### 1. Long Readout Detail With Basis Pressure

ID: `detail-long-basis`

Material class: `detail-containment`

Display problem:

- A readout has usable data, but the basis is too long for a status band and must remain inspectable without overflow.

Applies to display types:

- Readout Detail Reveal
- Long Text Detail Block
- Status Band as parent summary

Mapped M20 slots:

- readout label
- primary value
- state label
- readout age
- readout basis
- source coverage
- known fields
- gaps
- warnings
- detail row
- long text block
- narrow summary

Scenario:

- A current readout needs a compact parent summary and an inspectable detail reveal because the basis text, deferred placeholder, and detail rows are longer than the parent band should carry.

Content lanes:

- `readout label`: Relay readiness readout with extended display title for containment review
- `primary value`: Ready with notes
- `secondary values`: Source coverage 2/3; deferred source-owned note.
- `state label`: `CURRENT`
- `readout age`: Last read 4 minutes ago
- `readout basis`: Read from local display material with two available sources and one deferred source-owned placeholder.
- `source coverage`: 2/3 display sources
- `known fields`: label, primary value, state label, readout age, readout basis, source coverage
- `gaps`: deferred source-owned note
- `warnings`: Basis text exceeds compact band length.
- `detail rows`: readout basis, source coverage, deferred item
- `long text`: paragraph below
- `narrow summary`: Current; 2/3 display sources; detail has extended basis.
- `motion pressure`: none

Long text:

The readout is based on a local display-material entry that intentionally includes a long basis line, a qualified source-owned placeholder, and a deferred detail note. A compact band should show a short basis summary while the detail reveal preserves the fuller explanation without covering the state label, age, or availability marker.

Rows:

| Label | Value | Note |
| --- | --- | --- |
| Readout basis | Local display material plus qualified source-owned placeholder | Should wrap in detail. |
| Source coverage | 2/3 display sources | Should stay visible in parent surface. |
| Deferred item | Source-owned placeholder pending owner review | Must not become Lab default copy. |

Staged ingest shape:

```json
{
  "id": "detail-long-basis",
  "displayTypes": ["Readout Detail Reveal", "Long Text Detail Block", "Status Band"],
  "slots": {
    "readoutLabel": "Relay readiness readout with extended display title for containment review",
    "primaryValue": "Ready with notes",
    "stateLabel": "CURRENT",
    "readoutAge": "Last read 4 minutes ago",
    "readoutBasis": "Read from local display material with two available sources and one deferred source-owned placeholder.",
    "sourceCoverage": "2/3 display sources",
    "narrowSummary": "Current; 2/3 display sources; detail has extended basis."
  }
}
```

Expected display pressure:

- Parent display must not become taller just because basis text is long.
- Detail reveal must handle paragraph text and table rows.
- Narrow summary must preserve state, age, and coverage.

Owner / terminology notes:

- Source-owned placeholder means an owner/layer label may be shown, not that Lab owns the upstream meaning.

Disposition:

- Use as first pressure set for detail reveal, long text containment, and parent-summary behavior.

### 2. Absence And Availability Distinctions

ID: `availability-distinction`

Material class: `availability-distinction`

Display problem:

- Similar-looking absence states need different display treatment.

Applies to display types:

- Availability Reason Treatment
- Empty / Unavailable Panel
- Status Chip

Mapped M20 slots:

- readout label
- primary value
- state label
- availability note
- readout basis
- fallback basis
- source-owned label
- detail row
- narrow summary

Scenario:

- A display asset must distinguish no presentable fields, unavailable source, blocked owner/layer state, failed read, degraded owner/layer state, fallback display, and no deliberate source-owned scan.

Content lanes:

- `readout label`: Availability cases
- `primary value`: case-specific
- `secondary values`: case-specific availability reason
- `state label`: varies by case
- `availability note`: case-specific
- `readout basis`: case-specific
- `fallback basis`: only where explicit
- `freshness / age`: fallback case uses Last read 36 minutes ago
- `coverage / known fields`: known fields vary by case; no-data has read completion but no presentable fields
- `gaps`: unavailable, blocked, failed, degraded, no-scan cases each leave a different gap
- `warnings`: none by default; unavailable may add warning only if another set supplies one
- `detail rows`: cases table
- `long text`: not required unless panel body expands
- `narrow summary`: one-line state plus reason
- `motion pressure`: updating transition can be tested later, but not required for M22

Cases:

| Case | State label | Primary value | Availability note | Readout basis | Narrow summary |
| --- | --- | --- | --- | --- | --- |
| no-data | `NO DATA` | Nothing presentable | The read completed but returned no displayable fields. | No presentable display payload. | No data; read completed. |
| unavailable | `UNAVAILABLE` | Not available | Required display source is unavailable. | Current read unavailable. | Unavailable; source unavailable. |
| blocked | Source-owned blocked placeholder | Blocked | Source-owned authority gate prevented a live read. | Source-owned authority state; not provider failure. | Blocked; owner/layer required. |
| failed | `UNAVAILABLE` | Failed read | The read failed before display material could be prepared. | Failed local read; no fallback supplied. | Unavailable; read failed. |
| degraded | Source-owned degraded placeholder | Degraded | Source-owned provider/runtime returned impaired state. | Source-owned degraded state; detail required. | Degraded; detail required. |
| fallback | `FALLBACK` | Last known value | Showing fallback because current read was unavailable and fallback basis was supplied. | Fallback basis supplied by material. | Fallback; last read 36 minutes ago. |
| no-scan | Source-owned no-scan placeholder | No scan | A deliberate source-owned scan has not run. | No deliberate scan result exists. | No scan; not no data. |

Staged ingest shape:

```json
{
  "id": "availability-distinction",
  "displayTypes": ["Availability Reason Treatment", "Empty / Unavailable Panel", "Status Chip"],
  "cases": ["no-data", "unavailable", "blocked", "failed", "degraded", "fallback", "no-scan"],
  "slots": {
    "readoutLabel": "Availability cases",
    "stateLabel": "varies by case",
    "availabilityNote": "case-specific",
    "readoutBasis": "case-specific",
    "fallbackBasis": "fallback only",
    "narrowSummary": "one-line state plus reason"
  }
}
```

Expected display pressure:

- A UI must not collapse `blocked`, `failed`, `unavailable`, `NO DATA`, and `no-scan`.
- Only the fallback case may show `fallback basis`.
- Source-owned cases need owner/layer notes in detail.

Owner / terminology notes:

- `blocked`, `degraded`, and `no-scan` may be source-owned terms. Lab should present them as placeholders unless a source project emits them.

Disposition:

- Use as acceptance pressure for availability reason treatment and calm empty/unavailable panels.

### 3. Source / Basis / Coverage Collision

ID: `source-coverage-collision`

Material class: `coverage-collision`

Display problem:

- The word `source` can mean local file source, provider source, display basis, or source-owned provenance.

Applies to display types:

- Source Coverage Marker
- Grouped Pips / Status Constellation
- Readout Detail Reveal

Mapped M20 slots:

- readout label
- primary value
- state label
- source coverage
- readout basis
- source-owned basis
- gaps
- detail row
- long text block
- narrow summary

Scenario:

- A partial coverage display needs to show available Lab display material and unavailable source-owned basis without making every use of source mean the same thing.

Content lanes:

- `readout label`: Coverage collision case
- `primary value`: 2 available, 1 unavailable
- `secondary values`: local display material available; reference note available; source-owned placeholder unavailable
- `state label`: `PARTIAL`
- `source coverage`: 2/3 display sources
- `readout basis`: Local display material read; one source-owned placeholder unavailable.
- `source-owned basis`: Source-owned basis placeholder, owner review needed
- `freshness / age`: not supplied
- `coverage / known fields`: local display material, reference note, and placeholder rows
- `gaps`: source-owned placeholder unavailable
- `warnings`: collision wording requires qualification in detail
- `detail rows`: layered source table
- `long text`: paragraph below
- `narrow summary`: Partial; 2/3 display sources.
- `motion pressure`: none

Rows:

| Layer | Label | Availability | Display treatment |
| --- | --- | --- | --- |
| Lab display | Local display material | available | May be summarized as readout basis. |
| Lab display | Reference note | available | May count toward source coverage. |
| Source-owned placeholder | Owner-provided basis | unavailable | Must remain qualified. |

Long text:

This material intentionally uses layered source wording. The display should make it clear that source coverage is a display completeness measure, not a claim that all upstream source meaning is complete or authoritative.

Staged ingest shape:

```json
{
  "id": "source-coverage-collision",
  "displayTypes": ["Source Coverage Marker", "Grouped Pips / Status Constellation", "Readout Detail Reveal"],
  "slots": {
    "readoutLabel": "Coverage collision case",
    "primaryValue": "2 available, 1 unavailable",
    "stateLabel": "PARTIAL",
    "sourceCoverage": "2/3 display sources",
    "readoutBasis": "Local display material read; one source-owned placeholder unavailable.",
    "sourceOwnedBasis": "Source-owned basis placeholder, owner review needed",
    "narrowSummary": "Partial; 2/3 display sources."
  }
}
```

Expected display pressure:

- Coverage marker must be visible in compact form.
- Detail reveal must separate Lab display basis from source-owned basis.
- Narrow layout should show count and state before the long explanation.

Owner / terminology notes:

- Do not convert source-owned basis placeholder into Lab-owned copy.

Disposition:

- Use for source coverage marker, grouped pips, and terminology collision review.

### 4. Gaps And Warnings Under Partial Display

ID: `gap-warning-pressure`

Material class: `gap-warning`

Display problem:

- A partial readout remains useful but has gaps and warnings that must be visible without turning the whole surface into an alarm.

Applies to display types:

- Gap / Warning Marker
- Readout Detail Reveal
- Status Band

Mapped M20 slots:

- readout label
- primary value
- state label
- readout age
- readout basis
- known fields
- gaps
- warnings
- detail row
- long text block
- narrow summary

Scenario:

- A partial readout has enough known fields to display but must expose three gaps and one long warning without hiding the primary value.

Content lanes:

- `readout label`: Partial coverage readout
- `primary value`: Limited
- `secondary values`: three gaps; one warning
- `state label`: `PARTIAL`
- `readout age`: Last read 11 minutes ago
- `readout basis`: Available display fields returned with missing optional fields.
- `known fields`: label, primary value, state label, readout age, source coverage
- `gaps`: secondary value, owner-specific detail note, latest timestamp
- `warnings`: One source-owned placeholder did not return a displayable value; warning text is long enough to test wrapping.
- `detail rows`: gap list plus warning explanation
- `long text`: warning explanation below
- `narrow summary`: Partial; 3 gaps; 1 warning.
- `motion pressure`: none

Gap list:

- secondary value
- owner-specific detail note
- latest timestamp

Warning explanation:

One source-owned placeholder returned a response that can be named but not safely displayed as a Lab-owned default value. The display should keep the available fields visible, show a compact warning marker, and place the longer warning in detail.

Staged ingest shape:

```json
{
  "id": "gap-warning-pressure",
  "displayTypes": ["Gap / Warning Marker", "Readout Detail Reveal", "Status Band"],
  "slots": {
    "readoutLabel": "Partial coverage readout",
    "primaryValue": "Limited",
    "stateLabel": "PARTIAL",
    "readoutAge": "Last read 11 minutes ago",
    "readoutBasis": "Available display fields returned with missing optional fields.",
    "knownFields": ["label", "primary value", "state label", "readout age", "source coverage"],
    "gaps": ["secondary value", "owner-specific detail note", "latest timestamp"],
    "warnings": ["One source-owned placeholder did not return a displayable value."],
    "narrowSummary": "Partial; 3 gaps; 1 warning."
  }
}
```

Expected display pressure:

- Marker should show count or short label before detail opens.
- Long warning must wrap cleanly.
- Partial state should not hide primary value.

Owner / terminology notes:

- Warning is a display caution, not necessarily source-project failure.

Disposition:

- Use for gap marker, warning edge, and compact partial-state review.

### 5. Status Chip Inside Dense Rows

ID: `status-chip-row`

Material class: `dense-row-state`

Display problem:

- Dense lists need row-level state without each row becoming a full status panel.

Applies to display types:

- Status Chip
- Compact Table / List
- Detail Reveal

Mapped M20 slots:

- `state label`
- `status light`
- `availability note`
- `source-owned label`
- `detail row`
- `narrow summary`

Scenario:

- Four dense rows need compact status treatment while preserving a detail path for availability notes and source-owned placeholders.

Content lanes:

- `identity / label`: Readout A, Readout B, Readout C, Source-owned placeholder
- `primary value`: Ready, Limited, Not available, Owner label
- `secondary values`: row-level detail notes
- `state / availability`: Current, Partial, Unavailable, Blocked
- `basis / source-owned placeholder`: Source-owned placeholder row remains qualified
- `freshness / age`: not supplied
- `coverage / known fields`: row label, primary value, state chip, availability note
- `gaps`: two fields missing for Readout B; no display value for Readout C
- `warnings`: source-owned row needs qualification
- `detail rows`: rows table
- `long text`: none
- `narrow summary`: Current 1, partial 1, unavailable 1, source-owned blocked 1.
- `motion pressure`: none

Rows:

| Row label | Primary value | State chip | Availability note | Detail |
| --- | --- | --- | --- | --- |
| Readout A | Ready | Current | Available from display material. | Compact row should remain one line when possible. |
| Readout B | Limited | Partial | Two fields missing. | Gap marker should be adjacent to chip. |
| Readout C | Not available | Unavailable | Required source unavailable. | No fake value should be shown. |
| Source-owned placeholder | Owner label | Blocked | Owner/layer gate prevented read. | Must stay qualified. |

Narrow summary:

Current 1, partial 1, unavailable 1, source-owned blocked 1.

Staged ingest shape:

```json
{
  "id": "status-chip-row",
  "displayTypes": ["Status Chip", "Compact Table / List", "Detail Reveal"],
  "rows": [
    { "label": "Readout A", "primaryValue": "Ready", "stateLabel": "Current" },
    { "label": "Readout B", "primaryValue": "Limited", "stateLabel": "Partial" },
    { "label": "Readout C", "primaryValue": "Not available", "stateLabel": "Unavailable" },
    { "label": "Source-owned placeholder", "primaryValue": "Owner label", "stateLabel": "Blocked" }
  ],
  "narrowSummary": "Current 1, partial 1, unavailable 1, source-owned blocked 1."
}
```

Expected display pressure:

- Chip must use text plus shape/color, not color alone.
- Parent row must provide detail path for long availability notes.
- Source-owned row cannot become Lab default terminology.

Owner / terminology notes:

- Blocked is source-owned in this material unless a future owner packet accepts it as Lab copy.

Disposition:

- Use for compact list/status chip review and row-level detail reveal behavior.

### 6. Mixed Numeric And Text Value Rail

ID: `value-rail-mixed`

Material class: `value-rail`

Display problem:

- A compact value rail must show mixed counts, text states, age, and source coverage without implying all values share the same authority.

Applies to display types:

- Value Rail
- Status Band
- Source Coverage Marker

Mapped M20 slots:

- `primary value`
- `secondary value`
- `readout label`
- `readout age`
- `source coverage`
- `sample note`
- `cap marker`
- `narrow summary`

Scenario:

- A value rail carries display completeness, source coverage, freshness, capped scoped sample, and warning count in one compact row.

Content lanes:

- `identity / label`: Mixed value rail
- `primary value`: 6 available fields
- `secondary values`: 8 expected display slots, 2/3 sources, 18 min age, capped 25 sample placeholder, 2 warnings
- `state / availability`: current display with partial coverage
- `basis / source-owned placeholder`: capped sample row requires owner/layer qualification
- `freshness / age`: Last successful read 18 minutes ago
- `coverage / known fields`: 6/8 fields; 2/3 sources
- `gaps`: 2 expected display slots not available
- `warnings`: 2 non-blocking warnings
- `detail rows`: rail values table
- `long text`: none
- `narrow summary`: 6/8 fields; 2/3 sources; last read 18 min; 2 warnings.
- `motion pressure`: value changes should not resize rail cells

Rail values:

| Label | Value | Secondary | Note |
| --- | --- | --- | --- |
| Available fields | 6 | of 8 expected display slots | Display completeness only. |
| Source coverage | 2/3 | one unavailable | Display source coverage, not upstream authority. |
| Readout age | 18 min | last successful read | Should be visible near state. |
| Scoped sample placeholder | 25 | capped at 25 | Source-owned sample/cap wording must be qualified. |
| Warning count | 2 | non-blocking | Should not dominate primary value. |

Narrow summary:

6/8 fields; 2/3 sources; last read 18 min; 2 warnings.

Staged ingest shape:

```json
{
  "id": "value-rail-mixed",
  "displayTypes": ["Value Rail", "Status Band", "Source Coverage Marker"],
  "slots": {
    "primaryValue": "6",
    "secondaryValue": "of 8 expected display slots",
    "readoutAge": "18 min",
    "sourceCoverage": "2/3",
    "sampleNote": "Scoped sample placeholder",
    "capMarker": "capped at 25",
    "narrowSummary": "6/8 fields; 2/3 sources; last read 18 min; 2 warnings."
  }
}
```

Expected display pressure:

- Values with different meanings need labels.
- Capped sample row needs `sample note` and `cap marker`.
- Rail must wrap or stack without losing units.

Owner / terminology notes:

- Scoped sample and cap wording must remain qualified as display material, not Lab coverage doctrine.

Disposition:

- Use for value rail layout, compact metric labels, unit containment, and mixed-authority value display.

### 7. Calm Empty / Unavailable Panel Variants

ID: `empty-unavailable-panel`

Material class: `empty-state`

Display problem:

- Empty and unavailable states need calm text, not a false alarm or a fake value.

Applies to display types:

- Empty / Unavailable Panel
- Availability Reason Treatment
- Long Text Detail Block

Mapped M20 slots:

- `state label`
- `availability note`
- `readout basis`
- `fallback basis`
- `detail row`
- `long text block`
- `narrow summary`

Scenario:

- Empty panels need to show no data, unavailable, fallback, and source-owned no-scan as different cases while preserving calm copy and avoiding invented values.

Content lanes:

- `identity / label`: calm no data, unavailable, fallback, source-owned no scan
- `primary value`: none for empty/unavailable; previous value only for fallback
- `secondary values`: panel body and reason
- `state / availability`: `NO DATA`, `UNAVAILABLE`, `FALLBACK`, source-owned placeholder
- `basis / source-owned placeholder`: fallback basis where supplied; source-owned no-scan remains qualified
- `freshness / age`: fallback should name age if available
- `coverage / known fields`: no presentable fields for no-data; source absent for unavailable
- `gaps`: unavailable lacks current read and fallback; no-scan lacks deliberate source-owned scan
- `warnings`: none by default
- `detail rows`: panel variants table
- `long text`: panel body may be multi-sentence
- `narrow summary`: variant-specific
- `motion pressure`: none

Panel variants:

| Variant | State label | Heading | Body | Narrow summary |
| --- | --- | --- | --- | --- |
| calm no data | `NO DATA` | No displayable data | The read completed, but no fields are presentable for this surface. | No data; read completed. |
| unavailable | `UNAVAILABLE` | Readout unavailable | The required display source is not available. No fallback basis was supplied. | Unavailable; no fallback. |
| fallback | `FALLBACK` | Showing fallback | The current read is unavailable, so this surface is showing a supplied fallback basis from a previous successful read. | Fallback; previous read shown. |
| source-owned no scan | source-owned placeholder | No scan available | A deliberate source-owned scan has not run. This is not the same as no display data. | No scan; owner/layer required. |

Staged ingest shape:

```json
{
  "id": "empty-unavailable-panel",
  "displayTypes": ["Empty / Unavailable Panel", "Availability Reason Treatment", "Long Text Detail Block"],
  "variants": ["calm no data", "unavailable", "fallback", "source-owned no scan"],
  "slots": {
    "stateLabel": "variant-specific",
    "availabilityNote": "variant-specific",
    "readoutBasis": "variant-specific",
    "fallbackBasis": "fallback only",
    "narrowSummary": "variant-specific"
  }
}
```

Expected display pressure:

- Body copy can be multi-sentence.
- Primary value should not be invented.
- Fallback must name age/basis if available.

Owner / terminology notes:

- Source-owned no-scan copy is a placeholder. Lab should not own that state by default.

Disposition:

- Use for calm empty panels and absence-state copy review.

### 8. Multi-Source Pips And Labels

ID: `grouped-pips-coverage`

Material class: `status-constellation`

Display problem:

- A compact surface needs to show several source/slot availability markers without a table.

Applies to display types:

- Grouped Pips / Status Constellation
- Source Coverage Marker
- Status Band

Mapped M20 slots:

- `status light`
- `source coverage`
- `gaps`
- `warnings`
- `state label`
- `narrow summary`

Scenario:

- A compact surface needs pips for display material availability, reference note availability, source-owned placeholder absence, and warning presence.

Content lanes:

- `identity / label`: Display material, Reference note, Source-owned placeholder, Warning
- `primary value`: 2 active, 1 unavailable, 1 warning
- `secondary values`: pip labels and meanings
- `state / availability`: active, active, inactive, caution
- `basis / source-owned placeholder`: source-owned placeholder pip remains qualified
- `freshness / age`: not supplied
- `coverage / known fields`: 2 active items from 3 display-relevant lanes plus warning marker
- `gaps`: source-owned placeholder inactive
- `warnings`: one caution pip
- `detail rows`: pip model table
- `long text`: none
- `narrow summary`: 2 active, 1 unavailable, 1 warning.
- `motion pressure`: pip group should tolerate count changes without shifting adjacent text

Pip model:

| Pip | Label | State | Meaning |
| --- | --- | --- | --- |
| 1 | Display material | active | Local display material is available. |
| 2 | Reference note | active | Reference note is available for display pressure. |
| 3 | Source-owned placeholder | inactive | Owner/layer source is unavailable or not supplied. |
| 4 | Warning | caution | Non-blocking display warning exists. |

Narrow summary:

2 active, 1 unavailable, 1 warning.

Staged ingest shape:

```json
{
  "id": "grouped-pips-coverage",
  "displayTypes": ["Grouped Pips / Status Constellation", "Source Coverage Marker", "Status Band"],
  "pips": [
    { "label": "Display material", "state": "active" },
    { "label": "Reference note", "state": "active" },
    { "label": "Source-owned placeholder", "state": "inactive" },
    { "label": "Warning", "state": "caution" }
  ],
  "narrowSummary": "2 active, 1 unavailable, 1 warning."
}
```

Expected display pressure:

- Pips need adjacent legend, count, or detail path.
- Shape/pattern must support status without color-only meaning.
- Narrow shell can reduce pips to count plus marker.

Owner / terminology notes:

- Pip state labels are display-material labels, not shared state enums.

Disposition:

- Use for grouped status lights, compact source coverage, and non-color-only status review.

### 9. Collision Language Cases

ID: `collision-language`

Material class: `terminology-collision`

Display problem:

- Common terms can look safe but carry different meaning by project/layer.

Applies to display types:

- Readout Detail Reveal
- Availability Reason Treatment
- Material QA / owner-note sections

Mapped M20 slots:

- source-owned label
- source-owned basis
- authority note
- sample note
- cap marker
- state label
- detail row
- long text block
- narrow summary

Scenario:

- A display asset needs to preserve owner/layer qualification for collision terms without turning the primary UI into a terminology essay.

Content lanes:

- `identity / label`: source, sample, state, gateway, report, snapshot
- `primary value`: safe Lab handling per term
- `secondary values`: unsafe handling and material pressure
- `state / availability`: varies by term; must be qualified where source-owned
- `basis / source-owned placeholder`: source-owned labels and basis stay qualified
- `freshness / age`: not supplied
- `coverage / known fields`: collision term, safe handling, unsafe handling, material pressure
- `gaps`: none
- `warnings`: unsafe handling column
- `detail rows`: collision cases table
- `long text`: paragraph below
- `narrow summary`: avoid collision words unless qualified
- `motion pressure`: none

Collision cases:

| Term | Safe Lab handling | Unsafe handling | Material pressure |
| --- | --- | --- | --- |
| source | Use readout basis, source coverage, or source-owned basis with layer note. | Treat all source mentions as authority. | Detail row must show layer. |
| sample | Say scoped sample or fixture sample with owner/layer. | Treat all samples as complete coverage. | Cap marker and sample note required. |
| state | Say display state, runtime state, source-owned state, or action state. | Collapse all states into one enum. | State chip needs owner/layer. |
| gateway | Keep source-owned until reviewed. | Use as Lab bridge/gate default. | Owner note required. |
| report | Prefer Lab readout; source-owned reports stay qualified. | Use report as generic Lab output. | Output label needs owner/layer. |
| snapshot | Avoid as Lab default; use source-owned/lane/support qualifier. | Treat all snapshots as same payload type. | Detail must name owner/layer. |

Long text:

This material should be used to test whether a display asset can surface collision words as qualified owner/layer notes without turning the primary UI into a terminology essay. The primary surface should stay calm; the detail reveal should carry the qualification.

Staged ingest shape:

```json
{
  "id": "collision-language",
  "displayTypes": ["Readout Detail Reveal", "Availability Reason Treatment", "Material QA / owner-note sections"],
  "terms": ["source", "sample", "state", "gateway", "report", "snapshot"],
  "slots": {
    "sourceOwnedLabel": "qualified owner/layer label",
    "sourceOwnedBasis": "qualified owner/layer basis",
    "sampleNote": "scoped sample only",
    "capMarker": "where capped",
    "detailRow": "term handling rows",
    "narrowSummary": "qualified compact wording"
  }
}
```

Expected display pressure:

- Collision terms should not become default Lab slot names.
- Detail reveal needs authority notes or owner/layer rows.
- Narrow summary should avoid collision words unless qualified.

Owner / terminology notes:

- This set exists to catch terminology drift. It does not add new Lab-owned default copy.

Disposition:

- Use during terminology review and before promoting display material into inventory entries.

## Coverage Checklist

Required M22 material coverage:

- long readout label: `detail-long-basis`
- long readout basis: `detail-long-basis`
- source-owned label placeholder: `source-coverage-collision`, `status-chip-row`
- source-owned basis placeholder: `source-coverage-collision`
- no data: `availability-distinction`, `empty-unavailable-panel`
- unavailable: `availability-distinction`, `empty-unavailable-panel`
- blocked: `availability-distinction`, `status-chip-row`
- failed: `availability-distinction`
- degraded: `availability-distinction`
- fallback: `availability-distinction`, `empty-unavailable-panel`
- partial sample: `collision-language`, `value-rail-mixed`
- capped sample: `value-rail-mixed`
- stale / aged read: `value-rail-mixed`, `empty-unavailable-panel`
- missing known fields: `gap-warning-pressure`
- warning explanation: `gap-warning-pressure`
- gap list: `gap-warning-pressure`
- one long unbroken token: add to long-token stress below
- mixed short/long detail rows: `detail-long-basis`, `status-chip-row`
- numeric value rail rows: `value-rail-mixed`
- narrow summary copy: all material sets

Long-token stress string:

```txt
local-display-material-source-owned-placeholder-with-intentionally-unbroken-identifier-2026-05-25-alpha-beta-gamma-delta-epsilon-zeta-eta-theta-iota-kappa
```

Use it in:

- detail row value
- source-owned placeholder row
- warning explanation
- narrow-shell containment check

## Future SmokeFlash Staged Entries

If a future lightweight harness is opened, the first replay set should include:

```json
[
  {
    "id": "detail-long-basis",
    "displayTypes": ["Readout Detail Reveal", "Long Text Detail Block"],
    "states": ["CURRENT", "PARTIAL"],
    "slotsRequired": ["readoutLabel", "readoutBasis", "sourceCoverage", "detailRow", "longTextBlock", "narrowSummary"]
  },
  {
    "id": "availability-distinction",
    "displayTypes": ["Availability Reason Treatment", "Empty / Unavailable Panel"],
    "states": ["NO DATA", "UNAVAILABLE", "FALLBACK", "source-owned blocked", "source-owned no-scan"],
    "slotsRequired": ["stateLabel", "availabilityNote", "fallbackBasis", "sourceOwnedLabel", "narrowSummary"]
  },
  {
    "id": "gap-warning-pressure",
    "displayTypes": ["Gap / Warning Marker", "Readout Detail Reveal"],
    "states": ["PARTIAL"],
    "slotsRequired": ["knownFields", "gaps", "warnings", "detailRow", "narrowSummary"]
  },
  {
    "id": "value-rail-mixed",
    "displayTypes": ["Value Rail"],
    "states": ["CURRENT", "AGED", "PARTIAL"],
    "slotsRequired": ["primaryValue", "secondaryValue", "readoutAge", "sourceCoverage", "sampleNote", "capMarker"]
  }
]
```

This staged list is a replay suggestion only. It is not a test matrix and not implementation.

## Parked Tooling Notes

Park until after M22 acceptance:

- SmokeFlash HTML harness.
- Any runtime fixture conversion.
- Cannibalizing Sense log-reader shape for Lab-local staged ingest.
- Screenshot matrix expansion.
- Dev implementation based on this material.

## Recommended Next Packet

Recommended next packet:

```txt
M23 - Display Inventory Scaffold
```

Reason:

The material bench now gives future asset pages concrete material pressure. The next useful documentation move is to create the inventory scaffold and add an accepted Instrument Status Band entry that references which material sets it can already cover and which it cannot.

Alternate next packet:

```txt
M23 - SmokeFlash Feasibility
```

Choose this only if Human / Overseer wants to prove staged material replay before inventory scaffolding.

Recommended sequence:

1. Display inventory scaffold.
2. Instrument Status Band inventory entry.
3. SmokeFlash feasibility.
4. First material-backed primitive selection, likely `Readout Detail Reveal`.

## Verification / Support

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.
- Re-ran after adding Material Set Formation and `Material class` authoring fields.
- No implementation files were changed.

Ran advisory shared terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing Lab internal/compatibility `trust` and `certainty` surfaces.
- Re-ran after the formation correction.

No Electron smoke is required for this documentation/material artifact.
