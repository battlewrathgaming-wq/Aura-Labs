# DevHS127 - Availability Reason Treatment Prototype

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute HS127 only: prototype the pending `mat-availability-reason-treatment` material in the Lab-local material harness, preserving compact parent state/reason display, distinct absence and limited-availability cases, narrow containment, reduced-motion compatibility, and existing bridge/runtime boundaries.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS127-availability-reason-treatment-prototype.md`

## Material Prototype Behavior

Added `mat-availability-reason-treatment` as another workshop-only material harness prototype selected by the existing `material` query.

The parent surface stays compact:

- non-color-only marker
- state label
- one-line reason
- detail toggle

No unavailable, no-data, blocked, or failed case shows a fake primary value.

## Staged States

The prototype includes:

- `no-data`
- `unavailable`
- `blocked`
- `failed`
- `fallback`
- `aged`
- `source-no-scan`

These states remain distinct in parent copy and detail rows.

## Detail Rows

Detail rows carry the longer support copy:

- reason
- readout basis
- owner/layer note
- warning note
- fallback note
- readout age

The source-owned no-scan case is explicitly qualified as source-owned wording shown at the Lab Bridge -> Interface layer.

## Narrow And Reduced-Motion Notes

Narrow layout stacks the parent controls and keeps detail rows contained.

Electron smoke captured `source-no-scan` at narrow viewport with detail open and `overflowing: []`.

The prototype does not add animation or transitions. The accepted reduced-motion gate remains compatible.

## Compatibility Boundaries

No changes were made to:

- bridge payloads
- IPC channels
- preload bridge
- service commands
- fixture contracts
- source-project meaning
- target adapters
- export/seeding shape
- visible view options
- normal launch workshop hiding

SmokeFlash remains hidden/gated support tooling.

The names `mat-availability-reason-treatment`, `availabilityReasonTreatmentStates`, `renderAvailabilityReasonTreatment`, `toggleAvailabilityDetail`, and related DOM ids/classes are intentionally local harness/prototype names, not durable bridge/runtime contract names.

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `verify:all` passed.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke captured all seven `mat-availability-reason-treatment` states plus narrow `source-no-scan`.
- Availability Reason Treatment observations reported `availability_detail_open: true` and `overflowing: []`.
- Details view observations retained `source_drawer_open: true`, `diagnostics_secondary: true`, and no horizontal overflow.
- No lingering Electron process was reported after smoke.

Shared terminology check was required because visible material copy and workspace handoff/current wording changed:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `verify:terminology` passed 53/53 resource checks.
- Existing inherited advisory warnings remain.

## Ready For Acceptance

The Availability Reason Treatment prototype is ready for Overseer acceptance.

No additional visual review is required by this slice beyond the required Electron smoke, though Human/Overseer can still ask for a taste pass before accepting the material page as implemented.

## Parked Items

- Source / Basis Coverage Marker prototype.
- Compact Value Rail prototype.
- Composed display output.
- Target adapters.
- Export/seeding.
- SmokeFlash split.
- Virtualized list helper.
- Lab fixture adapter.
- Product settings surface.

## Residual Risks

- `workspace/display-materials/availability-reason-treatment.md` remains pending unless Overseer accepts this prototype and updates material status later.
- `blocked`, `failed`, and `source-no-scan` can be source-owned by context; this prototype keeps them qualified as Lab display treatment only.
- The prototype is Lab-local harness work, not a bridge/runtime contract.
- Existing inherited naming tripwires remain.
