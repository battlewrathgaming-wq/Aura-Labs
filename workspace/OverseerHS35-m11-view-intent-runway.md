# OverseerHS35: M11 View Intent Runway

Date: 2026-05-24
Role: Overseer
Project: Aura Lab
Milestone: M11 - Presentation View Intent And State Hardening
Sequence: HS35
Status: Dev runway written

## Source Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/UIUXHS34-view-intent-axis-proposal.md`
- `workspace/EngineeringHS34-presentation-view-intent-proposal.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`

## Advisory Disposition

Accepted into `workspace/current.md`:

- add `viewIntent` as a Lab-local review axis
- implement only `summary` and `confidence`
- keep `family`, `state`, and `viewIntent` separate
- make loading first-class in visual smoke
- add Neutral Seed stale/partial visual smoke parity
- extend smoke JSON and observations with view intent
- keep existing Briefing and Neutral Seed families only

Deferred:

- new presentation families
- source-first, attention-first, comparison, or other view intents
- broad scenario pack system
- Core-owned transfer prompt
- target-owned Atlas/Sense review
- durable post-bridge presentation contract
- shared component extraction

Rejected:

- treating `viewIntent` as product navigation
- confidence scoring or source-authority ranking
- target-project semantics
- adding Tactical HUD or Operator Workbench
- framework migration

Promoted into durable docs: None yet.

Archived: None yet. UI/UX and Engineering HS34 remain active M11 advisory sources until milestone closure.

## Decision

Opened M11 as a bounded Dev milestone.

Reasoning:

M08 proved family/state. M10 identified visual and coverage gaps. The UI/UX and Engineering proposals converge on a useful third axis, `viewIntent`, that extends the post-bridge presentation bench without adding another family or target doctrine.

## Expected Dev Handoff

```txt
workspace/DevHS35-presentation-view-intent-state-hardening.md
```

## Required Verification

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Get-Process electron -ErrorAction SilentlyContinue
```

## Human Questions

None required before Dev can execute.

## Residual Risk

Confidence View must remain a presentation lens over existing fields. If it requires scoring, source authority doctrine, target semantics, or a durable bridge contract, Dev must stop.
