# Display Schema Ledger

Status: Active Lab ledger
Date: 2026-05-25
Owner: Aura Lab Overseer

## Purpose

Track Lab display-schema ingredients and combined outputs as they move from pending to accepted, parked, or superseded.

This ledger exists so Lab can iterate through reusable display ingredients and combined display outputs without duplicating work or turning upstream relay into a callback system.

This is not:

- a bridge schema
- a runtime payload schema
- a target-project adoption record
- a Dev runway
- a source-project completion tracker
- a request backlog

Source projects track their own acceptance, completion, and implementation state locally.

## Use Rules

- Add ingredient rows for individual reusable snippets/materials.
- Add output rows for combined display references that can be reused statefully.
- Use the canonical artifact path; do not copy the schema body into this ledger.
- Mark status as `pending`, `accepted`, `parked`, `superseded`, or `rejected`.
- Keep delivery notes as upstream discussion buckets only.
- Do not add callback obligations, target-project completion state, or Dev authorization.
- Do not treat this ledger as an active task queue.

## Status Values

| Status | Meaning |
| --- | --- |
| `workshop` | Early idea or sketch; not accepted as material or output. |
| `pending` | Produced or proposed, but not accepted by Lab Overseer/Human yet. |
| `accepted` | Accepted as Lab display-schema output or schema-ready basis. |
| `parked` | Kept for later; not active. |
| `superseded` | Replaced by a newer schema/output. |
| `rejected` | Not suitable for Lab use. |

## Delivery Buckets

Delivery notes are upstream buckets for Human relay and discussion. They are not callbacks.

| Bucket | Meaning |
| --- | --- |
| `lab-internal` | Useful inside Lab before target discussion. |
| `human-relay` | Useful for Human discussion or project staging. |
| `atlas-discussion` | Useful if/when Human relays to Atlas. |
| `sense-discussion` | Useful if/when Human relays to Sense. |
| `future-workflow` | Useful for later workflow refactor. |
| `future-smokeflash` | Useful for later staged-ingest/tooling work. |

## Ingredient Inventory

Individual snippets/materials live here: the ingredients bag.

These are reusable display parts or schema-ready material requirements. They are not yet a complete combined display reference unless an output row points to them.

| Ingredient ID | Ingredient / material name | Status | Canonical artifact | Derived from | Intended use | Upstream discussion buckets | Supersedes / followed by | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `mat-authority-window-ttl-strip` | Authority Window TTL Strip material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Sense clipboard request and Human TTL fitness note | First candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `sense-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `schema-authority-window-ttl-strip` | Authority Window TTL Strip material schema | accepted | `workspace/display-materials/authority-window-ttl-strip.md` | `mat-authority-window-ttl-strip`; `workspace/DisplayMaterialSchemasHS86-guided-material-production.md` | First Human-piloted material prototype candidate. | `lab-internal`; `human-relay`; `sense-discussion`; `future-smokeflash` | follows `mat-authority-window-ttl-strip` | Accepted material page. |
| `mat-expandable-status-card` | Expandable Status Card material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas right-rail request and Human fit note | Second candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `schema-expandable-status-card` | Expandable Status Card material schema | accepted | `workspace/display-materials/expandable-status-card.md` | `mat-expandable-status-card`; `workspace/DisplayMaterialSchemasHS86-guided-material-production.md` | Second Human-piloted material prototype candidate. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | follows `mat-expandable-status-card` | Accepted material page. |
| `mat-table-row-detail-drawer` | Dense Row With Detail Drawer material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas queue-review request and Human fit note | Third candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `schema-table-row-detail-drawer` | Dense Row With Detail Drawer material schema | accepted | `workspace/display-materials/table-row-detail-drawer.md` | `mat-table-row-detail-drawer`; `workspace/DisplayMaterialSchemasHS86-guided-material-production.md` | Third Human-piloted material prototype candidate. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | follows `mat-table-row-detail-drawer` | Accepted material page. |
| `mat-compact-status-plus-drawer` | Compact Status Plus Drawer material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas Watch adaptation note | Future candidate after first schema outputs. | `lab-internal`; `human-relay`; `atlas-discussion` | none yet | Accepted as material requirement; not in first-three prototype order. |
| `schema-compact-status-plus-drawer-note` | Compact Status Plus Drawer near-next schema note | pending | `workspace/DisplayMaterialSchemasHS86-guided-material-production.md` | `mat-compact-status-plus-drawer` | Near-next schema note after first-three candidates. | `lab-internal`; `human-relay`; `atlas-discussion` | follows `mat-compact-status-plus-drawer` | Lightweight schema note only, not fully expanded. |
| `schema-warning-gap-edge` | Warning / Gap Edge material schema | accepted | `workspace/display-materials/warning-gap-edge.md` | `mat-warning-gap-edge`; `workspace/DisplayMaterialSchemasHS86-guided-material-production.md` | Support material for cards, rows, and strips. | `lab-internal`; `human-relay`; `future-smokeflash` | follows `mat-warning-gap-edge` | Accepted support material page. |
| `mat-connected-system-radius` | Connected System / Radius Visualization | parked | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | Human Atlas Watch complexity note | Parked future visualization concept. | `future-smokeflash`; `atlas-discussion` | none yet | Needs source-owned relation/radius meaning before Lab material work. |
| `mat-long-text-detail-block` | Long Text Detail Block material | accepted | `workspace/display-materials/long-text-detail-block.md` | `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md`; `workspace/complete/milestone-M31/DevHS125-long-text-detail-block-prototype.md` | Reusable detail-body treatment for long basis, warning, gap, path, paragraph, and token content. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Accepted Lab-local material harness prototype in HS125. |
| `mat-availability-reason-treatment` | Availability Reason Treatment material | accepted | `workspace/display-materials/availability-reason-treatment.md` | `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md`; `workspace/complete/milestone-M31/DevHS127-availability-reason-treatment-prototype.md` | Distinguish no data, unavailable, blocked, failed, fallback, aged, and source-owned placeholder cases without alarm-heavy styling. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Accepted Lab-local material harness prototype in HS127. |
| `mat-instrument-readout-strip` | Instrument Readout Strip material candidate | pending | `workspace/display-materials/instrument-readout-strip.md` | Human/UIUX presentation scouting feedback, 2026-05-27 | Compact horizontal readout strip with label, primary value, state marker, basis, freshness, and warning/gap edge. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; prototype/fixtures are parked until Human opens implementation. |
| `mat-freshness-basis-rail` | Freshness / Basis Rail material candidate | pending | `workspace/display-materials/freshness-basis-rail.md` | Human/UIUX presentation scouting feedback, 2026-05-27 | Persistent support rail for display basis and last-read age without overpowering the main readout. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; overlaps Source / Basis Coverage Marker but emphasizes persistent support context. |
| `mat-progressive-detail-drawer` | Progressive Detail Drawer material candidate | pending | `workspace/display-materials/progressive-detail-drawer.md` | Human/UIUX presentation scouting feedback, 2026-05-27 | Summary-first detail reveal for basis, freshness, known fields, gaps, warnings, long text, and diagnostics. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; implementation and interaction review are parked. |
| `mat-compact-value-stack` | Compact Value Stack material candidate | pending | `workspace/display-materials/compact-value-stack.md` | Human/UIUX presentation scouting feedback, 2026-05-27 | Parent/primary value stack with quieter supporting and derived values. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; distinct from Compact Value Rail because hierarchy is parent/child rather than peer rail. |
| `mat-source-basis-coverage-marker` | Source / Basis Coverage Marker material candidate | pending | `workspace/display-materials/source-basis-coverage-marker.md` | `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md` | Compact coverage or basis completeness marker without implying source authority. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; source/basis language needs owner/layer qualification. |
| `mat-compact-value-rail` | Compact Value Rail material candidate | pending | `workspace/display-materials/compact-value-rail.md` | `workspace/complete/milestone-M31/UIUXHS123-guided-display-material-expansion.md` | Stable rail for small labeled values, age, coverage, caps, warnings, or secondary values. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; values must not imply equal authority. |

## Combined Output References

Combined outputs live here: the single "use" reference.

Once Lab has built a type of display for Atlas, Sense, or Lab-local use, record the combined schema/output here so it can be reused statefully without re-reading every ingredient.

| Output ID | Output / combined display name | Status | Canonical artifact | Ingredients used | Target / use context | Upstream discussion buckets | Supersedes / followed by | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `output-instrument-readout-panel` | Instrument Readout Panel | accepted | `workspace/display-outputs/instrument-readout-panel.md` | status/state band behavior; `mat-availability-reason-treatment`; `mat-long-text-detail-block`; `schema-warning-gap-edge` | Lab-local product-agnostic composed readout output. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Accepted in M33 / HS132 and prototype-backed in M34 / HS134; not export, adapter, or bridge contract authority. |

## Parked Handling

Parked rows remain visible so Lab does not rediscover them as fresh work.

Do not move a parked row back into active work unless Human / Overseer opens a packet that names it.
