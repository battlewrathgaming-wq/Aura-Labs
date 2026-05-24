# M08 Fixture-Backed Presentation Family Prototype Current State

Status: Accepted
Reviewed: 2026-05-24

## Summary

Aura Lab has completed M08 - Fixture-Backed Presentation Family Prototype.

The app now proves the first bounded fixture-backed presentation family model. It preserves the existing Briefing family and adds one Lab-local Neutral Seed family while keeping `family` and `state` as separate axes. Family selection remains development/review scoped and does not imply product navigation, Aura Core ownership, target-project adoption, or a durable bridge contract.

## Accepted Capabilities

- `aura.projectBriefing` remains available for direct Briefing compatibility.
- `aura.presentationFixture` provides Lab-local family/state fixture data.
- Families are separate from states.
- Accepted families:
  - `briefing`
  - `neutral-seed`
- Accepted states:
  - `normal`
  - `empty`
  - `stale`
  - `failed`
  - `partial`
  - `long-text`
- The renderer has separate development/review controls:
  - `Presentation family`
  - `Review state`
- Neutral Seed renders through the same presentation shell and trust/state grammar.
- Neutral Seed uses generic Lab-local sample copy and avoids target/Core ownership terms.
- Diagnostics remain visible but secondary.
- Source, freshness, and certainty remain visible in the primary reading path.
- The plain HTML/CSS/JS stack remains in place.

## Accepted Visual Smoke Coverage

Family-aware visual smoke now records:

- `families_checked`
- `states_checked`
- `viewports_checked`
- `screenshots`
- `observations`

Accepted coverage:

- Briefing: normal, empty, stale, failed, partial, long-text
- Neutral Seed: normal, empty, failed, long-text
- Narrow viewport: Briefing partial and Neutral Seed long-text

Accepted screenshot evidence:

```txt
family-briefing-state-normal.png
family-briefing-state-empty.png
family-briefing-state-stale.png
family-briefing-state-failed.png
family-briefing-state-partial.png
family-briefing-state-long-text.png
family-neutral-seed-state-normal.png
family-neutral-seed-state-empty.png
family-neutral-seed-state-failed.png
family-neutral-seed-state-long-text.png
family-briefing-state-partial-narrow.png
family-neutral-seed-state-long-text-narrow.png
```

## Verification

Overseer reran:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
$env:AURA_LAB_ELECTRON_VISUAL_SMOKE='1'; $env:AURA_LAB_VISUAL_SMOKE_DIR='F:\Projects\AURA- Lab\.tmp\electron-visual-smoke'; npm.cmd start
Get-Process electron -ErrorAction SilentlyContinue
```

Accepted results:

```txt
verify:all passed
smoke:electron passed
direct visual smoke passed
Get-Process electron returned no Electron process output
visual-smoke-result.json status: passed
families_checked: briefing, neutral-seed
states_checked.briefing: normal, empty, stale, failed, partial, long-text
states_checked.neutral-seed: normal, empty, failed, long-text
viewports_checked: desktop, narrow
long-text and narrow captures overflowing: []
```

## Boundaries

- Neutral Seed is Lab-local presentation test material only.
- Neutral Seed does not imply Aura Core doctrine, ownership, architecture, or contract.
- Tactical HUD remains deferred.
- Operator Workbench remains deferred.
- No durable bridge/data contract was defined.
- No shared component library was created.
- No framework or stack migration was performed.
- No target-project adapter work was performed.
- Generated `.tmp` smoke artifacts remain local generated artifacts.

## Residual Risks

- Neutral Seed stale and partial states exist in the fixture command but were not required in the first accepted smoke subset.
- Packaging review is still needed before classifying outputs as Lab-local, Core-neutral candidates, target-adaptable, or do-not-port.
- Aura Core, Atlas, and Sense adoption remain target-owned future decisions.
