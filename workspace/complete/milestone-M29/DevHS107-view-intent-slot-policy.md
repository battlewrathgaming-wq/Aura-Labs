# DevHS107 - View-Intent Slot Policy

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 HS107 only: add a small renderer-local policy shape for how registered presentation slots participate in `summary-first`, `basis`, and `details`.

## Files Changed

- `src/renderer/app.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS107-view-intent-slot-policy.md`

## Policy Shape

Added `slotViewIntentPolicy(...)` in `src/renderer/app.js`.

Each registered slot can now declare:

- view participation for `summary-first`, `basis`, and `details`
- `available`
- `order`
- `emphasis`

The active policy is resolved by `presentationSlots(registryId, viewIntent)`, which filters unavailable slots, sorts by policy order, and attaches `activePolicy` to each rendered slot.

This is renderer-local Lab presentation behavior only. It does not define a bridge payload, IPC surface, preload API, service command, fixture contract, target adapter, or source-project meaning.

## Slot Group Using Policy

The existing `briefingReadoutDetail` group now has policy on each Readout Detail slot.

Current proof path:

- `renderSourceDrawer(...)` calls `presentationSlots('briefingReadoutDetail', state.viewIntent)`.
- `appendSourceDetail(...)` writes local `data-presentation-slot`, `data-presentation-lane`, and `data-presentation-emphasis` markers.
- Visible labels and values are unchanged.

The policy gives later features a stable place to read slot emphasis and availability while preserving the existing Summary / Basis / Details surface.

## Compatibility Names Left Alone

Intentionally unchanged:

- visible view labels: `Summary`, `Basis`, `Details`
- visible Readout Detail labels
- fixture ids
- smoke selectors
- bridge payload fields
- IPC channels
- preload bridge
- service commands
- workshop/SmokeFlash gates

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
```

Results:

- `verify:renderer-shell` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `verify:all` passed.

Not run:

- `npm.cmd run smoke:electron`; not required because this slice did not change visible renderer behavior, layout, CSS, or smoke-targeted presentation output.

Shared terminology check was required because workspace handoff/current wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The view-intent slot policy is ready for Overseer acceptance.

It is ready to support a later detail hydration slice because each slot can now expose view-specific availability, order, and emphasis.

It is also ready to support a future focus/reveal controller because rendered rows now carry local slot, lane, and emphasis markers.

## Residual Risks

- Policy is proven only through the Briefing Readout Detail group.
- Slot policy ids, lanes, and emphasis values are local renderer implementation details, not durable key terms.
- Detail hydration and focus/reveal controller remain parked.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
