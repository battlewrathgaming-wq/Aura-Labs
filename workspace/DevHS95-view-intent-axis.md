# DevHS95 - View Intent Axis

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute M29 H03 only: add `viewIntent` as a local renderer/test axis, expose a user-facing Summary / Basis / Details segmented control, prove it on one display family first, verify, update Evidence, and leave this handoff.

## Selected Family

Selected family: `briefing`.

Reason: Briefing already carries the richest accepted basis, freshness, coverage, gap, warning, detail, and diagnostics surface. It can prove the axis without adding target-project data, source-owned meaning, a new display family, or a broader matrix.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/DevHS95-view-intent-axis.md`

## View Intents Supported

- `summary-first`: default renderer/test concept and default visible selection, labeled `Summary`.
- `basis`: labeled `Basis`; emphasizes readout basis, freshness, coverage, gaps, and warnings.
- `details`: labeled `Details`; opens and visually emphasizes Readout Detail without making diagnostics primary.

The visible labels are implemented as H03 planning labels only. This packet does not promote them into durable key terms.

## UI Behavior

Added a visible segmented control with:

- `Summary`
- `Basis`
- `Details`

The switch updates local renderer state and `body[data-view-intent]`. It keeps the same presentation surface, same family, same selected state, and same readout identity. It changes emphasis through layout ordering and styling:

- Summary keeps the existing default emphasis.
- Basis moves the state metadata ahead within the status band and highlights basis/freshness/coverage/gap-warning slots.
- Details keeps the status band intact and opens/emphasizes the existing Readout Detail drawer.

## Stable Identity Elements

Kept stable across all three intents:

- title
- readout label
- status band
- primary state
- freshness / last read cue
- basis/source cue
- warning/gap marker
- detail affordance
- diagnostics access

## Smoke/Test Model Impact

Electron smoke now performs a targeted H03 check on `briefing` / `partial`:

- `family-briefing-state-partial-view-summary-first.png`
- `family-briefing-state-partial-view-basis.png`
- `family-briefing-state-partial-view-details.png`

Smoke result now reports:

- `view_intents_checked.briefing`
- selected view intent
- view switch labels
- stable identity copy presence

Renderer shell verification asserts the local view axis, default `summary-first`, visible labels, smoke reporting, and blocking checks for selected view mismatch or missing labels.

## Verification

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:all` passed.
- `verify:vocabulary` passed with 38 warning-only protected-term discovery candidates.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke selected and captured `summary-first`, `basis`, and `details` on the Briefing family.

Process cleanup check:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Result: no Electron process output remained after smoke.

Shared terminology check was required because visible/documentation wording changed. Ran:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 existing advisory warnings remain for inherited naming surfaces.

## Ready For Acceptance

H03 is ready for Overseer acceptance.

Recommended next M29 slice: move to the first expressive view only if Human/Overseer wants to continue the H-lane sequence. I do not see a need for H03 cleanup or UI/UX pause from this implementation.

## Residual Risks

- `viewIntent` is local renderer/test state only; it is not a durable bridge/runtime contract.
- Only the Briefing family proves the axis in H03.
- Summary / Basis / Details are visible H03 labels, not durable key terms until accepted.
- Existing inherited naming tripwires remain.
- Broader view matrices and expressive views remain parked.
