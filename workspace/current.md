# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / H02 - Loading State Parity
Current executor: Dev
Current focus: implement H03 View Intent Axis with Summary / Basis / Details on one display family first
Expected artifact filename: `workspace/DevHS95-view-intent-axis.md`

## Current State

Aura Lab has accepted and closed M28.

Accepted result:

- `mat-authority-window-ttl-strip` now has a Lab-local visible material prototype.
- Supported staged states: `idle`, `active-window`, `captured`, `timeout`, `cooldown`, `blocked`, `manual-path`.
- The strip uses a compact state marker, stable TTL/cooldown chip, short reason line, structured detail reveal, and narrow layout handling.
- Normal launch remains clean from visible workshop controls.
- No target-project adapter, target-project data, bridge/runtime field, IPC channel, or export/seeding work was introduced.

Accepted controls still stand:

- ADR 0001: SmokeFlash split is a promotion gate, not an immediate block for Lab-local material work.
- ADR 0002: target projects own their adapters.
- SmokeFlash remains hidden/gated Lab workshop tooling.
- Normal launch must not depend on SmokeFlash/workshop state.
- SmokeFlash fields must not enter a slim envelope, bridge contract, product navigation, or shared renderer data model.

## Latest Accepted Artifacts

- `workspace/DevHS91-authority-window-ttl-strip-prototype.md`
- `workspace/OverseerHS92-m28-acceptance.md`

## Verification Notes

M28 acceptance verification rerun by Overseer:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
npm.cmd run smoke:electron
```

All passed.

Shared terminology check rerun from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Passed 53/53 checks with 24 existing advisory warnings.

Electron smoke result:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- all seven staged material states checked
- narrow cooldown material screenshot captured
- no Electron process remained afterward

## Residual Risks

- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
- TTL/cooldown values are staged presentation values, not runtime behavior.
- Material state names are Lab staging labels, not bridge/runtime contract values.
- No combined output reference is accepted yet; M28 accepted an individual material prototype.

## M29 State

M29 is active as the Presentation Head Improvement Rail.

Completed slice:

- H02 Loading State Parity.

Accepted H02 result:

- `loading` is now a first-class selectable presentation test mode.
- Briefing and Neutral Sample both return intentional loading payloads.
- Loading uses `UPDATING`, `Updating now`, pending basis language, and a pending marker tone.
- Loading smoke coverage exists for both current families.
- No target-project adapter, source-project meaning, export/seeding, renderer split, durable bridge/runtime contract, IPC channel, network path, or dependency was introduced.

Active slice:

- H03 View Intent Axis using accepted UX direction.

## Source Of Intent

Accepted source of intent for M29:

- Human direction to focus this phase on presentation improvements.
- Human direction to review split/readiness only when the presentation head is good enough.
- Human confirmation that the H-lane Presentation Head Milestones are the active line.
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `workspace/OverseerHS93-m29-loading-state-parity-runway.md`
- `workspace/DevHS93-loading-state-parity.md`
- `workspace/OverseerHS94-h02-loading-state-acceptance.md`
- `workspace/OverseerHS95-m29-view-intent-axis-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overseer.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `src/main/main.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-lab-vocabulary.js`

## Accepted UX Direction For H03

Use this when opening the next runway:

- Start with `summary-first` plus source/basis-first.
- Prefer visible labels like `Summary`, `Basis`, and `Details`.
- Use a segmented control for user-facing view intent.
- Keep the same surface stable across view modes and reorder emphasis instead of changing the whole display.
- Keep title/readout label, status band, primary state, freshness/last read, basis/source cue, warning/gap marker, detail affordance, and diagnostics access stable.
- Prototype one display family first.

Do not make confidence/trust/proof language the first user-facing view axis. Express confidence through basis, freshness, coverage, gaps, and warnings.

## Ordered Runway

1. Inspect the current renderer state/family model and decide the smallest family surface for H03, using one family first.
2. Add `viewIntent` as a deliberate renderer/test concept with `summary-first` as the default.
3. Add a visible segmented control for the user-facing view switch.
4. Support three user-facing view labels: `Summary`, `Basis`, and `Details`.
5. Keep the same surface stable across view modes; reorder emphasis rather than replacing the display.
6. Keep stable across all view intents: title/readout label, status band, primary state, freshness/last read, basis/source cue, warning/gap marker, detail affordance, and diagnostics access.
7. Add targeted verification/smoke coverage for the view axis on the selected family.
8. Create the expected DevHS handoff with selected family, view intent behavior, verification, smoke notes, and residual risks.

## Acceptance Criteria

This runway is acceptable if:

- `viewIntent` exists as a renderer/test concept
- `summary-first` remains the default behavior
- the visible switch exposes `Summary`, `Basis`, and `Details`
- one display family demonstrates all three view intents
- the view switch changes emphasis without changing display identity
- stable identity elements remain stable across view intents
- basis mode emphasizes basis, freshness, coverage, gaps, and warnings without stronger claim language
- Details mode improves access to gaps, warnings, and diagnostic rows without making diagnostics primary
- visual smoke or renderer verification can observe the new view axis
- no target-project adapter, source-project meaning, export/seeding, or renderer split is introduced
- SmokeFlash remains hidden/gated support tooling
- verification passes

Redirect or stop if:

- the view axis needs target-project data or target-owned terms
- the implementation requires a durable bridge/runtime contract
- the work turns into confidence-first, source-first, triage, delta, or split work
- the test update becomes a broad matrix beyond the selected family and necessary view checks
- normal launch depends on workshop state

## Guardrails And Non-Goals

Allowed:

- add `viewIntent` as a local renderer/test axis
- add visible segmented control UI
- add Summary/Basis/Details rendering emphasis for one family
- add targeted fixture/smoke/verification support
- update local vocabulary checks for accepted visible copy
- make small style changes needed for the segmented control and view emphasis

Not allowed:

- target-project adapters
- Atlas/Sense implementation
- export/seeding
- broad SmokeFlash workbench
- broad visual-smoke matrix
- durable bridge/runtime contract
- named confidence-first implementation
- source-first as a separate named product mode beyond the accepted Basis view
- attention triage or delta view
- new dependencies
- live/private/network work

## Stop Conditions

Stop and return to Human / Overseer if:

- one-family scope is not enough to prove the axis
- view labels need key-term promotion before implementation
- source-owned meaning decisions are required
- a bridge/runtime contract decision is required
- normal launch cannot stay clean
- SmokeFlash/workshop state becomes product navigation
- verification requires live/private/network data
- Electron runtime/install issues become the main work

## Required Verification

Always run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke because visible view-axis behavior and smoke coverage are expected to change:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology check if visible or documentation wording changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should fill this after work:

- Files changed:
- Selected family:
- View intents supported:
- UI behavior:
- Stable identity elements:
- Smoke/test model impact:
- Verification run:
- Smoke result:
- Remaining risks:

## Handoff

Expected output:

```txt
workspace/DevHS95-view-intent-axis.md
```

The handoff must state whether H03 is ready for Overseer acceptance and whether the next M29 slice should move to an expressive view, remain on H03 cleanup, or pause for UI/UX review.

## H02 Verification Notes

H02 acceptance verification rerun by Overseer:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

All passed.

Shared terminology check rerun from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Passed 53/53 checks with the existing 24 advisory warnings.

Dev ran Electron smoke:

```powershell
npm.cmd run smoke:electron
```

Smoke result reviewed:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- loading included in `states_checked.briefing`
- loading included in `states_checked.neutral-seed`
- loading included in `modes_checked`

## Residual Risks

- Existing inherited naming tripwires remain.
- Loading is a Lab fixture/test and renderer presentation state, not a durable bridge/runtime contract value.
- Broader state/view matrices remain parked.
- H03 still needs a bounded runway before Dev starts `viewIntent`.

## Parked Items

- SmokeFlash split before export/seeding.
- Broad SmokeFlash workbench.
- Broad visual-smoke matrix.
- Target-project adapters.
- Atlas/Sense implementation or adoption records.
- Shared scaffold transfer/adapters.
- Connected-system/radius visualization until source-owned relation meaning exists.
