# Overseer HS108 - HS107 View-Intent Slot Policy Acceptance

Status: Accepted
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `workspace/DevHS107-view-intent-slot-policy.md`
- `src/renderer/app.js`
- `scripts/verify-renderer-shell.js`
- `docs/roadmap/future-candidate-bank.md`

## Review Summary

HS107 is accepted.

Dev added a renderer-local `slotViewIntentPolicy(...)` shape and applied it to the existing `briefingReadoutDetail` slot group. Registered slots can now declare view-specific participation for `summary-first`, `basis`, and `details` through `available`, `order`, and `emphasis`.

The existing Readout Detail path now resolves slots with the active `state.viewIntent`, filters unavailable slots, sorts by policy order, and marks rendered rows with local `data-presentation-emphasis`.

No visible labels, fixture ids, smoke selectors, bridge payload fields, IPC channels, preload bridge, service commands, target adapters, source-project meaning, or SmokeFlash/workshop gates changed.

## Acceptance Checks

| Check | Result |
| --- | --- |
| Registered slots can declare view-intent policy | Pass |
| Policy is renderer-local and Lab-owned presentation behavior | Pass |
| Summary, Basis, and Details remain the only visible view options | Pass |
| Briefing/readout/detail path proves the policy shape | Pass |
| Visible copy remains stable | Pass |
| No bridge/runtime/source-project contract introduced | Pass |
| No target-project meaning, adapter, or adoption claim introduced | Pass |
| Follow-on features remain parked | Pass |
| Verification recorded | Pass |

## Verification Reviewed

Dev reported and Overseer reran:

```powershell
npm.cmd run verify:all
```

Result:

- all checks verified
- vocabulary passed with warning-only protected-term discovery candidates

Shared terminology:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- 53/53 resource checks passed
- existing inherited advisory warnings remain

Electron smoke was reasonably not run because visible renderer behavior, layout, CSS, and smoke-targeted output were unchanged.

## Notes

The helper currently accepts `summary` as the local shorthand override for the `summary-first` view. This is acceptable as implementation detail, but should not become visible wording or durable vocabulary.

## Decision

Accept HS107 and open the next bounded feature-enrichment slice:

- Detail hydration.

This is the right next step because the slot registry and view-intent policy now exist, but slots do not yet have a clear way to carry compact versus expanded detail content.

## Residual Risks

- Policy is proven only through Briefing Readout Detail.
- Slot ids, lanes, and emphasis values are renderer implementation details, not durable key terms.
- Detail hydration and focus/reveal controller remain unimplemented.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.

## Next Packet

Open `workspace/current.md` for Dev:

- Active focus: detail hydration for registered presentation slots.
- Expected handoff: `workspace/DevHS109-detail-hydration.md`.
