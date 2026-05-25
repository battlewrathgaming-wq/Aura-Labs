# DevHS109 - Detail Hydration

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 HS109 only: add renderer-local detail hydration for registered presentation slots, prove it through the existing Briefing Readout Detail path, and leave focus/reveal, lazy loading, virtualization, row facets, overflow sentinel, reduced-motion gate, fixture adapter, production tooling, split, adapters, and security review parked.

## Files Changed

- `src/renderer/app.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS109-detail-hydration.md`

## Hydration Shape

Added `slotHydration(...)` and `slotDetailHydration(...)` in `src/renderer/app.js`.

Each registered slot can now carry:

- compact row value through the existing `value(...)` resolver
- optional hydrated detail rows through `hydration.detail(...)`
- local compact/expanded posture through `hydration.compact`

The hydrated detail rows are resolved when the Readout Detail path renders. They are stored as local row metadata so a future focus/reveal controller can reveal them without changing bridge payloads or making the default readout denser.

## Slot Group Using Hydration

The existing `briefingReadoutDetail` slot group now includes hydration for all current Readout Detail slots:

- `readout-age`
- `state-summary`
- `readout-basis`
- `known-fields`
- `band-marker`
- `source-paths`

Rendered rows now keep:

- `data-presentation-slot`
- `data-presentation-lane`
- `data-presentation-emphasis`
- `data-presentation-hydration`
- `data-presentation-detail-count`
- `data-presentation-detail`

Visible labels and compact values are unchanged.

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

Detail hydration is ready for Overseer acceptance.

It is ready to support a future focus/reveal controller because registered slots now expose compact values plus hydrated detail rows on the rendered slot nodes.

## Residual Risks

- Hydration is proven only through the Briefing Readout Detail group.
- Slot hydration keys and row metadata are local renderer implementation details, not durable key terms.
- Focus/reveal, lazy loading, virtualization, row facets, overflow sentinel, reduced-motion gate, and fixture adapter remain parked.
- Existing inherited naming tripwires remain.
- SmokeFlash split before export/seeding remains parked.
