# Current Workspace Packet

Status: Idle
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / H03 - View Intent Axis
Current executor: Human / Overseer
Current focus: H03 accepted; awaiting direction on expressive view, H03 polish, or UI/UX review.
Expected artifact filename: No active artifact expected.

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

Completed slices:

- H02 Loading State Parity.
- H03 View Intent Axis.

Accepted H03 result:

- `viewIntent` is now a local renderer/test axis.
- `summary-first` is the default behavior.
- `Summary`, `Basis`, and `Details` are visible H03 view labels.
- Briefing demonstrates all three view intents.
- The same surface, family, and selected state remain stable across the switch.
- Smoke captures `summary-first`, `basis`, and `details` on `briefing` / `partial`.
- No target-project adapter, source-project meaning, export/seeding, renderer split, durable bridge/runtime contract, or new dependency was introduced.

Recommended next slice:

- bounded expressive view work, or a short UI/UX review/polish pause.

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
- `workspace/DevHS95-view-intent-axis.md`
- `workspace/OverseerHS96-h03-view-intent-acceptance.md`

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

## H03 Verification Notes

H03 acceptance verification rerun by Overseer:

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

Passed 53/53 checks with the existing 24 advisory warnings.

Smoke result reviewed:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `status: passed`
- `blocking_failures: []`
- `view_intents_checked.briefing`: `summary-first`, `basis`, `details`
- view screenshots captured for `briefing` / `partial`

## H03 Residual Risks

- `viewIntent` is local renderer/test state only, not a durable bridge/runtime contract.
- Only the Briefing family proves the axis in H03.
- Broader view matrices remain parked.
- H04/H05 expressive view work still needs a bounded runway.
- Existing inherited naming tripwires remain.

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
