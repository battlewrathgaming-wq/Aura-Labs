# Display Schema Ledger

Status: Active Lab ledger
Date: 2026-05-25
Owner: Aura Lab Overseer

## Purpose

Track Lab-produced display schemas as they move from pending to accepted, parked, or superseded.

This ledger exists so Lab can iterate through produced schema outputs without duplicating work or turning upstream relay into a callback system.

This is not:

- a bridge schema
- a runtime payload schema
- a target-project adoption record
- a Dev runway
- a source-project completion tracker
- a request backlog

Source projects track their own acceptance, completion, and implementation state locally.

## Use Rules

- Add one row per produced Lab display schema or schema-ready output.
- Use the canonical artifact path; do not copy the schema body into this ledger.
- Mark status as `pending`, `accepted`, `parked`, `superseded`, or `rejected`.
- Keep delivery notes as upstream discussion buckets only.
- Do not add callback obligations, target-project completion state, or Dev authorization.
- Do not treat this ledger as an active task queue.

## Status Values

| Status | Meaning |
| --- | --- |
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

## Produced Schema Ledger

| Schema ID | Schema / output name | Status | Canonical artifact | Derived from | Intended use | Upstream discussion buckets | Supersedes / followed by | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `mat-authority-window-ttl-strip` | Authority Window TTL Strip material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Sense clipboard request and Human TTL fitness note | First candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `sense-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `mat-expandable-status-card` | Expandable Status Card material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas right-rail request and Human fit note | Second candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `mat-table-row-detail-drawer` | Dense Row With Detail Drawer material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas queue-review request and Human fit note | Third candidate for future display schema/prototype output. | `lab-internal`; `human-relay`; `atlas-discussion`; `future-smokeflash` | none yet | Accepted as material requirement, not yet a produced single schema. |
| `mat-compact-status-plus-drawer` | Compact Status Plus Drawer material requirement | accepted | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | M24 Atlas Watch adaptation note | Future candidate after first schema outputs. | `lab-internal`; `human-relay`; `atlas-discussion` | none yet | Accepted as material requirement; not in first-three prototype order. |
| `mat-connected-system-radius` | Connected System / Radius Visualization | parked | `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md` | Human Atlas Watch complexity note | Parked future visualization concept. | `future-smokeflash`; `atlas-discussion` | none yet | Needs source-owned relation/radius meaning before Lab material work. |

## Future Row Shape For Single Schemas

When UX starts producing single-schema outputs, add rows like:

| Schema ID | Schema / output name | Status | Canonical artifact | Derived from | Intended use | Upstream discussion buckets | Supersedes / followed by | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `schema-authority-window-ttl-v1` | Authority Window TTL Strip Schema v1 | pending | `workspace/[future-artifact].md` | `mat-authority-window-ttl-strip` | Single display schema for the authority-window TTL material. | `lab-internal`; `human-relay`; `sense-discussion` | follows `mat-authority-window-ttl-strip` | Example only; replace when produced. |

## Parked Handling

Parked rows remain visible so Lab does not rediscover them as fresh work.

Do not move a parked row back into active work unless Human / Overseer opens a packet that names it.
