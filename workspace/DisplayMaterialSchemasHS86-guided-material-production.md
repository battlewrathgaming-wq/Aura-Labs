# DisplayMaterialSchemasHS86 - Guided Material Production

Date: 2026-05-25
Project: Aura Lab
Milestone: M26 - Guided Display Material Production
Status: Advisory material-schema artifact

## Purpose

Produce individual reusable Lab display material schemas from the accepted M25 requirements.

This is not implementation, a Dev runway, SmokeFlash, Atlas/Sense feature delivery, target-project adoption, a bridge contract, a runtime fixture schema, or source-project meaning.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/display-schema-ledger.md`
- `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md`
- `workspace/DisplayResponseComparisonHS82-active-display-requests.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`

## Current State Understanding

M25 accepted this first-three candidate order:

1. `mat-authority-window-ttl-strip`
2. `mat-expandable-status-card`
3. `mat-table-row-detail-drawer`

M26 keeps that order. The Human-fit reason is still strongest for the TTL strip: bounded timing is the clearest near-term material pressure and can be prototyped with neutral Lab content before any source-project adoption.

The schemas below are material ingredients. They are meant to make later Human-piloted feature delivery small and concrete. They do not prescribe Atlas/Sense implementation.

## Schema Format

Each material schema uses the same shape:

- Purpose
- Fit
- M20 slots
- M21 display types
- M22 material content
- State set
- Content lanes
- Visual structure
- Interaction / reveal behavior
- Narrow behavior
- Fixture / staged-ingest needs
- Risks
- Minimum future verification
- Prototype readiness
- Parked notes

## 1. `mat-authority-window-ttl-strip`

### Purpose

Display a bounded authority window in one compact strip: what state the readout is in, whether a short active interval is open, what happens next, and why the surface is available, blocked, cooling down, or waiting.

### Fit

Best first prototype candidate. It is small, stateful, narrow-shell friendly, and strongly supported by the Human TTL fitness note.

This material should be staged with neutral Lab copy. Sense `Clipboard Acquisition`, `Pulling`, `Listening`, `Cooldown`, `Live IO blocked`, and `clipboard.acquisition.snapshot` remain source-owned examples only.

### M20 Slots

- `source-owned label`
- `state label`
- `status light`
- `authority note`
- `availability note`
- `effect note`
- `readout age`
- `warnings`
- `detail reveal`
- `narrow summary`

### M21 Display Types

- Status band
- Status chip
- Action readiness strip
- Availability reason treatment
- Detail reveal
- Lifecycle/progress strip only when real lifecycle states are supplied

### M22 Material Content

- `availability-distinction`
- `status-chip-row`
- `gap-warning-pressure`
- `collision-language`

### State Set

Required states:

- idle
- active-window
- captured
- rejected
- unchanged
- timeout
- cancelled
- cooldown
- blocked
- shortcut-unavailable
- manual-path

Optional future states:

- alternate-input-available
- fallback-display, only when a true fallback basis exists

### Content Lanes

| Lane | Requirement |
| --- | --- |
| identity / label | Short material label plus optional source-owned label. |
| primary value | Current state, such as `Active`, `Cooldown`, `Blocked`, or `Manual path`. |
| secondary values | Time remaining, cooldown remaining, shortcut/manual cue, captured handoff marker. |
| state / availability | Text state plus non-color-only status light. |
| basis / source-owned placeholder | Short authority/basis cue; source-owned examples must stay qualified. |
| freshness / age | TTL or cooldown interval is the freshness cue; do not imply persistent currentness. |
| coverage / known fields | State, timer, reason, and handoff marker are the minimum known fields. |
| gaps | Missing shortcut, unavailable authority, no active interval, missing captured target. |
| warnings | Bounded authority warning when active state could be overread. |
| detail rows | Reason, manual path, blocked basis, previous state, next eligible moment. |
| long text | Only in detail; never in the strip. |
| narrow summary | State plus TTL/reason, e.g. `Active; 2s left` or `Cooldown; 4s`. |
| motion pressure | Timer may tick or settle, but meaning must remain visible without motion. |

### Visual Structure

Recommended structure:

```txt
[status light] [state label] [TTL/cooldown chip] [short reason or handoff] [detail affordance]
```

The TTL/cooldown chip is the material's anchor. It should have stable width or a fixed digit strategy so the strip does not jump while time changes.

### Interaction / Reveal Behavior

- Default strip remains one line where possible.
- Detail reveal opens reason, authority note, manual/alternate input path, and any warning.
- Captured/handoff marker is a display cue only; it must not imply a hidden scan or background action.
- If no detail exists, the affordance should not render as a dead control.

### Narrow Behavior

Priority order:

1. state label
2. TTL/cooldown chip
3. blocked/manual reason
4. detail affordance
5. source-owned label or longer basis

Narrow summary examples:

- `Active; 2s`
- `Cooldown; 4s`
- `Blocked; detail`
- `Manual path`

### Fixture / Staged-Ingest Needs

Suggested staged shape for future tooling only:

```json
{
  "materialId": "mat-authority-window-ttl-strip",
  "displayComposition": "single-strip",
  "slots": {
    "stateLabel": "Active",
    "statusLight": "active",
    "authorityNote": "Bounded active interval",
    "availabilityNote": "Available for manual input",
    "effectNote": "Captured value can be handed off",
    "readoutAge": "2s remaining",
    "narrowSummary": "Active; 2s"
  },
  "states": ["idle", "active-window", "captured", "timeout", "cooldown", "blocked", "manual-path"],
  "detailRows": [
    { "label": "Reason", "value": "Bounded active interval" },
    { "label": "Next", "value": "Cooldown begins when interval closes" }
  ],
  "pressureChecks": ["ttl-visible", "stable-width", "non-color-only-state", "bounded-authority-copy"]
}
```

This shape is not a bridge field list or runtime fixture schema.

### Risks

- Active or listening-like states can imply background behavior if the TTL is hidden.
- A countdown can become noisy if animated too strongly.
- Blocked state can be mistaken for failure unless the authority note is visible.
- Source-owned lifecycle labels need source-project review before target adoption.

### Minimum Future Verification

If later implemented:

- `npm.cmd run verify:all`
- static visual review at idle, active, timeout, cooldown, blocked, and manual-path states
- narrow viewport screenshot review
- reduced-motion check if countdown animation exists
- no Electron smoke matrix expansion beyond the implementing packet's requested views

### Prototype Readiness

Ready for Human-piloted feature delivery as the best first material prototype.

### Parked Notes

- Source-project runtime behavior.
- Exact Sense lifecycle label translation.
- SmokeFlash implementation.

## 2. `mat-expandable-status-card`

### Purpose

Display a compact card with a first-read status/value and an attached detail reveal for basis, age, gaps, warnings, and source-owned notes.

### Fit

Second prototype candidate. It generalizes the accepted Atlas right-rail fitness signal into a Lab material that can support many small status surfaces.

### M20 Slots

- `source-owned label`
- `primary value`
- `secondary value`
- `state label`
- `status light`
- `readout age`
- `readout basis`
- `source-owned basis`
- `availability note`
- `warnings`
- `gaps`
- `detail reveal`
- `detail row`
- `narrow summary`

### M21 Display Types

- Status band
- Status chip
- Value rail
- Availability reason treatment
- Detail reveal
- Route-first card family as a comparison only

### M22 Material Content

- `status-chip-row`
- `availability-distinction`
- `source-coverage-collision`
- `gap-warning-pressure`
- `detail-long-basis`

### State Set

Required states:

- current
- partial
- stale
- not-loaded
- unavailable
- blocked
- empty
- fallback

Optional future states:

- updating
- degraded

### Content Lanes

| Lane | Requirement |
| --- | --- |
| identity / label | Card title or source-owned label. |
| primary value | Count, short state, or displayable value. |
| secondary values | One compact supporting value such as age, count, or availability. |
| state / availability | Text state plus non-color-only status light/chip. |
| basis / source-owned placeholder | One-line basis in card; longer basis in detail. |
| freshness / age | Last read, stale/not-loaded, or fallback age. |
| coverage / known fields | Optional compact coverage count or known-field line. |
| gaps | Count marker in card; list in detail. |
| warnings | Muted marker/edge in card; explanation in detail. |
| detail rows | Basis, availability reason, gaps, warnings, source-owned note. |
| long text | Detail only. |
| narrow summary | Label, state, value, and one age/basis cue. |
| motion pressure | Open/close reveal only; optional state-change settle. |

### Visual Structure

Recommended closed card:

```txt
[label]                         [state chip]
[primary value]
[age or basis cue]              [gap/warning marker]
[detail affordance / route hint if supplied]
```

Open detail:

```txt
Readout Detail
- Basis
- Availability
- Gaps
- Warnings
- Source-owned note
```

### Interaction / Reveal Behavior

- Detail reveal is separate from route/navigation.
- Card can have a route hint only when a source project supplies a route; Lab material should use neutral route placeholders.
- Reveal should open inline or in a small drawer, but the schema does not choose target implementation.
- Open detail must not cause unrelated cards to become unreadable in a narrow stack.

### Narrow Behavior

Priority order:

1. label
2. state chip/status light
3. primary value
4. readout age or availability cue
5. warning/gap marker
6. detail affordance

Narrow summary examples:

- `Current; 4 items; last read 2m`
- `Partial; 2 gaps`
- `Unavailable; detail`

### Fixture / Staged-Ingest Needs

```json
{
  "materialId": "mat-expandable-status-card",
  "displayComposition": "card-with-detail",
  "slots": {
    "readoutLabel": "Display material status",
    "primaryValue": "Ready with notes",
    "stateLabel": "PARTIAL",
    "statusLight": "partial",
    "readoutAge": "Last read 11 minutes ago",
    "readoutBasis": "Local material read with one deferred source-owned note.",
    "warnings": ["Long warning explanation available in detail."],
    "gaps": ["deferred source-owned note"],
    "narrowSummary": "Partial; 1 gap; last read 11m"
  },
  "detailRows": [
    { "label": "Basis", "value": "Local material read with one deferred source-owned note." },
    { "label": "Gap", "value": "Deferred source-owned note" }
  ],
  "pressureChecks": ["closed-card-height", "detail-containment", "route-reveal-distinction", "warning-marker"]
}
```

### Risks

- Card parity can imply equal meaning across unlike source-owned concepts.
- Detail can become a product explanation page if too much source doctrine is copied in.
- Route and reveal affordances can blur if both are present.
- Source-owned labels must not become Lab default labels.

### Minimum Future Verification

If later implemented:

- `npm.cmd run verify:all`
- visual review of closed, open, warning, unavailable, and narrow states
- keyboard/focus review for reveal affordance if interactive
- text containment review for long label, long basis, and warning explanation
- no Electron smoke unless the implementing packet changes UI/CSS and asks for it

### Prototype Readiness

Ready as the second Human-piloted material prototype.

### Parked Notes

- Target-project routes.
- Atlas-specific card names.
- Source-project adoption or implementation.

## 3. `mat-table-row-detail-drawer`

### Purpose

Display dense rows with compact state/facet information while keeping raw values, long identifiers, basis, warnings, and action/effect notes in a row detail drawer.

### Fit

Third prototype candidate. It is the strongest material for dense information display and long-token containment.

### M20 Slots

- `source-owned label`
- `primary value`
- `secondary value`
- `state label`
- `status light`
- `authority note`
- `effect note`
- `source-owned basis`
- `detail row`
- `long text block`
- `warnings`
- `gaps`
- `narrow summary`

### M21 Display Types

- Compact table/list
- Detail reveal
- Status chip
- Action readiness strip
- Long text detail block
- Gap / warning marker

### M22 Material Content

- `detail-long-basis`
- `status-chip-row`
- `gap-warning-pressure`
- `collision-language`
- `value-rail-mixed`

### State Set

Required states:

- available
- selected
- partial
- cached
- expanded
- failed
- blocked
- unavailable
- empty

Optional future states:

- stale
- capped

### Content Lanes

| Lane | Requirement |
| --- | --- |
| identity / label | Row label or item id. |
| primary value | Main row value or short item summary. |
| secondary values | Facets such as selected, cached, expanded, warning count. |
| state / availability | Row status chip with text. |
| basis / source-owned placeholder | Detail drawer row; never only hidden if it changes meaning. |
| freshness / age | Optional row age or preview-read age. |
| coverage / known fields | Known row fields and missing/capped values. |
| gaps | Gap marker in row; gap list in drawer. |
| warnings | Warning count/edge in row; explanation in drawer. |
| detail rows | Raw value, basis, warning, action/effect note, source-owned note. |
| long text | Drawer only, including long unbroken token. |
| narrow summary | Row label, state, primary value, and one facet. |
| motion pressure | Drawer open/close only; no row motion required. |

### Visual Structure

Recommended row:

```txt
[state chip] [row label / primary value] [facet chips] [gap/warning marker] [detail affordance]
```

Recommended drawer:

```txt
Readout Detail
- Basis
- Raw value / long identifier
- Known fields
- Gaps
- Warnings
- Action/effect note, if supplied
```

### Interaction / Reveal Behavior

- Row selection and row detail are separate presentation states.
- Action readiness belongs in a distinct row/footer area, not hidden as a row side effect.
- Drawer must handle long identifiers, paragraphs, and mixed short/long rows.
- Sorting, filtering, selecting, and actions are target-owned and not defined by this schema.

### Narrow Behavior

Priority order:

1. state chip
2. row label / primary value
3. one selected/cached/expanded facet
4. warning/gap marker
5. detail affordance

In narrow layout, table columns collapse into stacked rows; raw identifiers move to detail.

### Fixture / Staged-Ingest Needs

```json
{
  "materialId": "mat-table-row-detail-drawer",
  "displayComposition": "dense-list-with-row-detail",
  "rows": [
    {
      "label": "Row A",
      "primaryValue": "Ready",
      "stateLabel": "available",
      "facets": ["selected", "cached"],
      "warnings": [],
      "gaps": []
    },
    {
      "label": "Row B",
      "primaryValue": "Limited",
      "stateLabel": "partial",
      "facets": ["expanded"],
      "warnings": ["Long warning available in detail."],
      "gaps": ["source-owned note"]
    }
  ],
  "detailRows": [
    {
      "label": "Long identifier",
      "value": "local-display-material-source-owned-placeholder-with-intentionally-unbroken-identifier-2026-05-25-alpha-beta-gamma"
    }
  ],
  "pressureChecks": ["row-density", "long-token-containment", "drawer-detail", "narrow-row-collapse"]
}
```

### Risks

- Dense rows can become diagnostic-first rather than display-first.
- Raw fields can overtake the human read if not moved into detail.
- Action effect copy can look like implementation instruction if too prominent.
- Column labels can import source-project terms if copied unqualified.

### Minimum Future Verification

If later implemented:

- `npm.cmd run verify:all`
- visual review for dense, empty, partial, blocked, and warning rows
- long-token containment review
- narrow row collapse review
- keyboard/focus review if drawers are interactive
- no broad smoke matrix expansion

### Prototype Readiness

Ready as the third Human-piloted material prototype.

### Parked Notes

- Source-project sorting, filtering, selection, and action behavior.
- Atlas Queue Review semantics.
- Any target payload or persistence shape.

## Near-Next Candidates

### `mat-compact-status-plus-drawer`

Use after the first three if Human wants a Watch-adapted but Lab-neutral status material.

Shape:

- Compact status band with value/state/timing first.
- Drawer carries blocked reason, last/next timing, and diagnostic rows.
- Avoid full ladder unless a source project confirms ordered states.

Best fit:

- status band
- status chip
- detail reveal
- diagnostic row

Readiness:

- Ready as a near-next material, but not first-three.

### `mat-warning-gap-edge`

Use as support material for cards, rows, and strips.

Shape:

- Muted warning/gap edge or marker.
- Count/label visible near the primary readout.
- Detail reveal carries explanation and gap list.

Best fit:

- gap / warning marker
- status chip
- grouped pips
- detail reveal

Readiness:

- Ready as support material; can be bundled into the first three prototypes rather than built alone.

## Parked Requirements

| Requirement | Disposition | Reason |
| --- | --- | --- |
| `mat-connected-system-radius` | Parked | Needs source-owned relation/radius meaning before Lab can make a material. |
| Full Watch state ladder | Parked as primary prototype | Human fitness note prefers compact status plus drawer/detail for now. |
| `mat-action-readiness-row` | Parked / needs source-project decision | Effect wording needs source-project approval. |
| `mat-lifecycle-step-reference` | Parked / needs source-project decision | Branch vs sequence and label exactness remain source-owned. |
| `mat-source-boundary-note` | Needs more material | Useful, but needs more varied non-target examples before standalone prototype. |
| `mat-coverage-pip-legend` | Needs more material | Useful support pattern, but not enough accepted pressure beyond M22 generic cases. |
| `mat-route-reveal-split` | Needs more material | Target routes and destinations are source-owned. |

## Ledger Recommendation

Human direction during M26 rolled the first material library pages into this packet while preserving this artifact as the acceptance surface.

Created pending material pages:

- `workspace/display-materials/README.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-materials/warning-gap-edge.md`

Updated pending ingredient rows in `workspace/display-schema-ledger.md` to point to the short material pages as canonical schema pages.

Do not add combined output rows yet. No reusable combined display output exists until a future Human-piloted feature delivery packet chooses and implements or formally accepts one.

## Best First Prototype

Best first prototype: `mat-authority-window-ttl-strip`.

Reason:

- strongest Human-fit signal
- smallest visual surface
- clear narrow-shell behavior
- high value for state, availability, authority, and timing treatment
- can be staged with neutral Lab material without source-project adoption

## Acceptance Checklist

- Individual material schemas produced for the first three M25 candidates.
- First-three order preserved.
- Near-next notes included for compact status plus drawer and warning/gap edge.
- Source-project terms remain source-owned examples.
- M20 slots, M21 types, M22 content, and M25 requirements are mapped.
- Future staged-ingest needs are named without becoming contracts.
- Minimum future verification is scoped and does not expand smoke matrices.
- Product-specific and high-complexity work remains parked.
- First pending material library pages created without creating target-project backlog or adoption records.
- No Dev work is authorized.

## Verification

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.
- Re-ran after rolling pending material library pages into M26.
- No implementation files were changed.

Shared terminology check was not required because this artifact does not change critical visible UI copy. It uses accepted source-owned terms only as examples.

No Electron smoke is required for this documentation-only packet.
