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
| `mat-long-text-detail-block` | Long Text Detail Block material candidate | pending | `workspace/display-materials/long-text-detail-block.md` | `workspace/UIUXHS123-guided-display-material-expansion.md` | Reusable detail-body treatment for long basis, warning, gap, path, paragraph, and token content. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; recommended first future prototype candidate. |
| `mat-availability-reason-treatment` | Availability Reason Treatment material candidate | pending | `workspace/display-materials/availability-reason-treatment.md` | `workspace/UIUXHS123-guided-display-material-expansion.md` | Distinguish no data, unavailable, blocked, failed, fallback, and aged cases without alarm-heavy styling. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; recommended second future prototype candidate. |
| `mat-source-basis-coverage-marker` | Source / Basis Coverage Marker material candidate | pending | `workspace/display-materials/source-basis-coverage-marker.md` | `workspace/UIUXHS123-guided-display-material-expansion.md` | Compact coverage or basis completeness marker without implying source authority. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; source/basis language needs owner/layer qualification. |
| `mat-compact-value-rail` | Compact Value Rail material candidate | pending | `workspace/display-materials/compact-value-rail.md` | `workspace/UIUXHS123-guided-display-material-expansion.md` | Stable rail for small labeled values, age, coverage, caps, warnings, or secondary values. | `lab-internal`; `human-relay`; `future-smokeflash` | none yet | Pending material page; values must not imply equal authority. |

## Combined Output References

Combined outputs live here: the single "use" reference.

Once Lab has built a type of display for Atlas, Sense, or Lab-local use, record the combined schema/output here so it can be reused statefully without re-reading every ingredient.

| Output ID | Output / combined display name | Status | Canonical artifact | Ingredients used | Target / use context | Upstream discussion buckets | Supersedes / followed by | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| _none yet_ | _No combined outputs accepted yet_ | _n/a_ | _n/a_ | _n/a_ | _n/a_ | _n/a_ | _n/a_ | Add rows here when UX produces a single reusable display schema/output. |

## Parked Handling

Parked rows remain visible so Lab does not rediscover them as fresh work.

Do not move a parked row back into active work unless Human / Overseer opens a packet that names it.
