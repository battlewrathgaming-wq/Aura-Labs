# EngineeringHS38: Physical Presentation Layer Prompt

Date: 2026-05-24
Role: Engineering specialist
Project: Aura Lab
Status: Prompt draft for UI/HTML/Electron-focused Dev execution

## Research Notes

Use these as implementation guidance, not product goals:

- Electron frameless/custom window work needs explicit draggable and non-draggable regions. Interactive controls inside a custom chrome area must remain `no-drag`.
  - https://www.electronjs.org/de/docs/latest/tutorial/custom-window-interactions
- Electron renderer work should preserve the secure preload boundary. Context isolation is recommended and should remain enabled.
  - https://www.electronjs.org/docs/latest/tutorial/context-isolation
  - https://www.electronjs.org/docs/tutorial/security/
- CSS transitions are appropriate for state changes when limited to meaningful properties and short durations.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transition
- `prefers-reduced-motion` should be respected for non-essential animation.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/%40media/prefers-reduced-motion
- Native `<details>` / `<summary>` can support progressive disclosure without heavy JavaScript when the interaction model fits.
  - https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details
- Container queries can help components respond to their actual available space rather than only the viewport.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries
- `backdrop-filter` is now broadly available in current engines and can support glass/material effects, but it should be used intentionally and with a fallback surface.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter

## Steering Update

Aura Lab's physical presentation layer should now be framed as combat-game information display.

The useful idea is not enterprise "trust" or abstract "confidence." The useful game-facing idea is tactical signal clarity:

```txt
Is the feed live, aged, partial, lost, scanning, or falling back to last-known data?
```

The next feature should feel like a combat HUD/readout surface that helps a player or operator understand bridge-fed state quickly under pressure. It should be cool, readable, calm, and meaningful.

Preferred naming:

```txt
Tactical Signal Readout
```

Avoid naming the feature:

```txt
Trust Ribbon
Confidence View
Confidence Detail Panel
```

Those terms can still describe internal reasoning, but they are not the player-facing or presentation target.

## Prompt

You are the Aura Lab UI / HTML / Electron Presentation Dev.

Start in:

```txt
F:\Projects\AURA- Lab
```

First read `AGENTS.md` if present.

Then read:

- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/OverseerHS36-m11-steering-correction.md`
- `workspace/EngineeringHS37-presentation-first-m11-correction.md`
- `workspace/UIUXHS35-presentation-feature-steering-correction.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `package.json`
- `src/main/main.js`
- `src/main/preload.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/services/serviceRegistry.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

## Task

Build the next visible Aura Lab presentation feature:

```txt
Tactical Signal Readout
```

This is a physical HTML/Electron presentation-layer pass for a combat-game-style app. The goal is to make bridge-fed information feel like live tactical intel: readable, calm under pressure, visually striking, inspectable, and meaningful.

Verification tooling supports the work. It is not the product.

## Product Intent

Aura Lab is a test bed for high-quality game-facing information-display features.

The feature should answer, visually and calmly:

```txt
Is this feed live, aged, partial, lost, scanning, or using last-known data?
```

The result should feel like a designed tactical desktop instrument surface, not a debug page and not a screenshot matrix.

## Presentation Requirements

Create a polished Tactical Signal Readout near the primary reading path.

It should include:

- feed status signal: `LIVE`, `SCANNING`, `AGED`, `PARTIAL`, `LOST`, or `FALLBACK`
- freshness posture: last read, last known, or scanning posture
- source/feed basis: compact feed count or source count
- meaningful visual signal lights, pips, bars, or sweep marks
- short tactical summary of what the player/operator should understand
- clear degraded-state tone without noisy alarmism

Create a Feed Detail Panel.

It should include:

- live / aged / partial / lost distinctions
- source/feed details that are readable but not visually dominant
- compact diagnostics that feel like designed tactical instrumentation
- last-known/fallback information where useful
- progressive disclosure if it improves first-read clarity

Improve degraded-state presentation where it affects tactical signal clarity:

- loading should feel like scanning/acquiring
- empty should feel like no contact/no feed, not broken UI
- stale should feel like aged/last-known intel
- partial should show feed gaps without panic
- failed should feel like signal lost/fallback, restrained and clear
- long-text/narrow layouts should remain readable

Use physical presentation ideas where they help:

- layered panels
- restrained glass or translucent material with fallbacks
- inset bands
- subtle field grid or surface texture
- embedded status lights
- compact instrument-like diagnostics
- tactical pips, sweep lines, contact/feed markers, or readout ticks
- purposeful state transitions
- responsive layout behavior based on available space

## Electron / HTML / CSS Constraints

- Preserve the current plain HTML/CSS/JS stack.
- Preserve the secure Electron preload boundary.
- Do not expose new broad Electron APIs to the renderer.
- Do not disable context isolation.
- Keep custom frame controls usable.
- If editing draggable chrome or toolbar regions, preserve appropriate drag/no-drag behavior for interactive controls.
- Use text-safe rendering. Do not introduce `innerHTML` for dynamic service data.
- Prefer semantic HTML for disclosure and grouping where practical.
- Use CSS transitions only for meaningful state/disclosure changes.
- Respect `prefers-reduced-motion`.
- If using `backdrop-filter`, provide a readable fallback surface.
- Do not make the UI rely on hover-only access for critical information.
- Keep button/control text contained at narrow widths.

## Scope Boundaries

Do not:

- add new presentation families
- make `family + state + viewIntent` the product
- build a broad view-intent framework
- create broad fixture scenario packs
- create a screenshot diagnostic system
- expand visual smoke into a large matrix
- define a durable bridge/data contract
- add confidence scoring, truth ranking, source authority levels, or target doctrine
- import Atlas or Sense language
- create target adapters
- claim Aura Core ownership
- migrate UI framework
- create a shared component library

## Data Guidance

Use existing fixture payloads first.

Useful existing fields include:

- `view_status`
- `certainty`
- `last_read_at`
- `sources`
- `source_labels`
- `missing_fields`
- `warnings`
- `fields`
- `attention_items`
- `error`
- `family`
- `state`

Small Lab-local presentation helpers are allowed only if needed for rendering:

- `signal_summary`
- `freshness_posture`
- `feed_display`
- `diagnostic_summary`

Do not create a durable schema.

## Verification Expectations

Run:

```powershell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Minimum evidence should show:

- app renders successfully
- Tactical Signal Readout is visible
- Feed Detail Panel is visible or reachable through clear disclosure
- Briefing still works
- Neutral Seed still works and remains generic
- source/freshness/certainty are visible
- diagnostics remain secondary
- long/narrow representative capture has no horizontal overflow
- Electron process exits cleanly

Do not broaden verification beyond what is needed to support the presentation feature.

## Expected Output

Create:

```txt
workspace/DevHS36-confidence-presentation-pass.md
```

Include:

- summary of visible presentation changes
- exact files changed
- Tactical Signal Readout behavior
- Feed Detail Panel behavior
- degraded-state presentation notes
- source/freshness treatment notes
- motion/responsive behavior notes
- verification commands and results
- process cleanup result
- screenshots reviewed, if any
- remaining risks and recommended Overseer action

Return a concise handoff.
