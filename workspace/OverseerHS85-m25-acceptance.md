# OverseerHS85 - M25 Acceptance

Date: 2026-05-25
Role: Overseer
Status: Accepted M25

## Decision

Accept and close M25 - Display Material Requirements.

## Accepted Artifact

- `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md`

## Acceptance Summary

The artifact returns Lab to the intended track: requirements for individual reusable display materials, not Atlas/Sense feature delivery.

It derives material needs from M24 recommendations and Human fitness notes, maps them to M20 slots, M21 display types, and M22 material sets, rates prototype readiness, and recommends prototype candidates without authorizing Dev work.

## Accepted Prototype Candidate Order

| Order | Material requirement | Reason |
| --- | --- | --- |
| 1 | `mat-authority-window-ttl-strip` | Strong Human fitness signal; compact, bounded, reusable authority/timing material. |
| 2 | `mat-expandable-status-card` | Fits Atlas right rail pressure while remaining reusable as Lab card/detail material. |
| 3 | `mat-table-row-detail-drawer` | Captures dense row/detail pressure and long identifier containment. |

## Accepted Parked Items

- Atlas implementation of right rail cards.
- Atlas Queue Review behavior, Enrich Selected semantics, raw field persistence, and selection actions.
- Atlas Watch scheduler/executor behavior and source-owned state model.
- Sense Clipboard Acquisition runtime behavior, shortcut policy, and `clipboard.acquisition.snapshot` meaning.
- Exact Sense visible label translation for `Pulling`, `Listening`, and `Cooldown`.
- Full Watch state ladder as a primary prototype.
- Connected-system/radius visualization.
- Workflow refactor and durable request/response archive structure.
- SmokeFlash implementation.
- Broad display inventory scaffold unless Human / Overseer opens it.

## Verification

Ran:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.

Ran shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing Lab internal/compatibility `trust` and `certainty` surfaces.

No Electron smoke was required because M25 was documentation/requirements work.

## Recommended Next State

Lab is ready for Human direction.

Most likely next packets:

1. `M26 - Authority Window TTL Material Prototype Runway`
2. `M26 - Display Request Workflow Refactor`
3. `M26 - SmokeFlash Staged-Ingest Feasibility`

Recommendation:

Open the Authority Window TTL material prototype first if the goal is visible Lab progress.

Open the workflow refactor first if the goal is process cleanup before more work products.
