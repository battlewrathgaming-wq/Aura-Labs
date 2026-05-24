# DevHS30: Fixture-Backed Presentation Family Prototype

Date: 2026-05-24
Role: Dev
Project: Aura Lab
Milestone: M08 - Fixture-Backed Presentation Family Prototype
Sequence: HS30
Status: Complete; ready for Overseer review

## Scope Executed

Executed only the ordered Dev runway in `workspace/current.md`.

Implemented the first bounded fixture-backed presentation family proof:

- preserved the existing Briefing family
- added one Lab-local Neutral Seed family
- kept `family` and `state` as separate axes
- preserved plain HTML/CSS/JS
- preserved source/freshness/certainty and secondary diagnostics
- added family-aware visual smoke coverage

No Tactical HUD, Operator Workbench, target-project adapter, shared component library, framework migration, durable bridge/data contract, live/private/destructive action, or sibling-project inspection/edit was performed.

## Files Changed

- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `workspace/current.md`
- `workspace/DevHS30-fixture-backed-presentation-family-prototype.md`

Generated but not tracked as handoff source:

- `.tmp\electron-visual-smoke\visual-smoke-result.json`
- `.tmp\electron-visual-smoke\family-briefing-state-normal.png`
- `.tmp\electron-visual-smoke\family-briefing-state-empty.png`
- `.tmp\electron-visual-smoke\family-briefing-state-stale.png`
- `.tmp\electron-visual-smoke\family-briefing-state-failed.png`
- `.tmp\electron-visual-smoke\family-briefing-state-partial.png`
- `.tmp\electron-visual-smoke\family-briefing-state-long-text.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-normal.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-empty.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-failed.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-long-text.png`
- `.tmp\electron-visual-smoke\family-briefing-state-partial-narrow.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-long-text-narrow.png`

## Family / State Behavior

Added Lab-local read-only service command:

```txt
aura.presentationFixture
```

It accepts separate axes:

```txt
family + state
```

Families:

- `briefing`
- `neutral-seed`

States:

- `normal`
- `empty`
- `stale`
- `failed`
- `partial`
- `long-text`

Briefing behavior:

- Existing `aura.projectBriefing` remains available.
- `aura.presentationFixture` decorates the existing Briefing payload with family/state metadata.
- Briefing continues to support normal, empty, stale, failed, partial, and long-text.
- Needs Attention, coordination facts, source/freshness/certainty, and diagnostics remain available.

Neutral Seed behavior:

- Neutral Seed is Lab-local fixture data only.
- It renders through the same shell and trust/state grammar.
- It supports all six states in the fixture command.
- Required smoke subset covers normal, empty, failed, and long-text.
- It uses generic sample rows and neutral trust/source/freshness labels.

## Neutral Seed Copy Safety

Neutral Seed uses generic labels:

- `Primary sample`
- `Secondary sample`
- `Source layer`
- `Freshness basis`
- `Display certainty`
- `Presentation boundary`
- `Display note`
- `Review token`

Service verification asserts Neutral Seed fixture JSON does not include target-like or ownership-heavy terms:

- evidence
- tactical
- operator
- assessment
- watch
- queue
- combat
- intelligence
- Core source
- Core seed
- schema
- source of truth
- approved
- synced
- live

## Renderer Changes

The renderer now has separate development/review controls:

- `Presentation family`
- `Review state`

The family selector switches renderer mapping between Briefing and Neutral Seed. It is not product navigation.

The state selector remains the review-state axis. The existing `briefing-mode` id is retained for continuity, but the visible label is now `Review state`.

Renderer data still flows through the preload service bridge. The renderer does not read project files directly.

## Visual Smoke Coverage

Visual smoke now reports family-aware evidence:

- `families_checked`
- `states_checked`
- `viewports_checked`
- `screenshots`
- `observations`

Each observation includes:

- family
- state
- viewport
- title
- status
- certainty
- freshness
- sources
- diagnostics visibility
- diagnostics secondary status
- frame controls visibility
- overflowing elements

Final result artifact:

```txt
.tmp\electron-visual-smoke\visual-smoke-result.json
```

Final coverage:

- Briefing normal
- Briefing empty
- Briefing stale
- Briefing failed
- Briefing partial
- Briefing long-text
- Neutral Seed normal
- Neutral Seed empty
- Neutral Seed failed
- Neutral Seed long-text
- narrow Briefing partial
- narrow Neutral Seed long-text

Final result:

```txt
status: passed
overflowing: [] for long-text and narrow captures
diagnostics_visible: true
diagnostics_secondary: true
frame_controls_visible: true
```

Screenshots reviewed during Dev:

- `.tmp\electron-visual-smoke\family-briefing-state-normal.png`
- `.tmp\electron-visual-smoke\family-neutral-seed-state-long-text-narrow.png`

## Verification

Command:

```powershell
npm.cmd run verify:all
```

Result: passed.

Command:

```powershell
npm.cmd run smoke:electron
```

Result: passed.

Command:

```powershell
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
```

Result: passed.

Process cleanup:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Result: no Electron process output after smoke exit.

## Static And Service Verification Updates

Service verification now checks:

- `aura.presentationFixture` is registered
- Briefing family fixture shape
- Neutral Seed normal, empty, failed, and long-text states
- separate family and state metadata
- available families and states
- Neutral Seed safe copy exclusions
- existing `aura.projectBriefing` and legacy `fixtureState: partial` compatibility

Renderer/static verification now checks:

- separate family and state controls
- `aura.presentationFixture` usage
- family-aware smoke fields
- family-aware screenshot naming
- wrapper support remains present
- existing shell, diagnostics, state, source/freshness/certainty, and no-`innerHTML` expectations

## Checks Not Run

No unrequested checks were run.

No live, private, destructive, network, package-install, git write, sibling-project inspection, or cross-project mutation action was needed.

## Git / Workspace Notes

Git exists in `F:\Projects\AURA- Lab`.

Initial state for this packet:

```txt
## main...origin/main
```

No files were staged or committed.

## Remaining Risks Or Questions

- Neutral Seed stale and partial states are implemented in the fixture command but not included in the required first smoke subset; Overseer can decide whether to add those screenshots before or after M08 closure.
- Generated `.tmp` contains older smoke screenshots from previous milestones in addition to HS30 family-aware screenshots. The HS30 result JSON `screenshots` list identifies the relevant evidence set.
- Tactical HUD, Operator Workbench, packaging review, target-project adapters, durable post-bridge presentation contract, durable upstream bridge/data contract, framework choice, and Aura Core transfer remain deferred.
- Overseer should review HS30 and decide whether M08 can close.
