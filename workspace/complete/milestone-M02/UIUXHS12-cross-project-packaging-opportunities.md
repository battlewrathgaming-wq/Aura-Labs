# UIUXHS12: Cross-Project Packaging Opportunities

Date: 2026-05-23
Role: UI/UX
Project: Aura Lab
Status: Advisory discovery, pending Human/Overseer acceptance

## Scope

This note summarizes a read-only investigation of nearby Aura projects to identify what Aura Lab can safely prototype, package, or prepare for later adoption by existing projects.

No code was changed outside Aura Lab. This is not a Dev runway and does not authorize cross-project implementation.

## Projects Sampled

- `F:\Projects\AURA-Atlas`
- `F:\Projects\AURA-Sense`
- `F:\Projects\Aura_core`
- `F:\Projects\EVE-Threat-Overlay`
- `F:\Projects\Bughunt`

## Source Files Read

- `F:\Projects\AURA-Atlas\README.md`
- `F:\Projects\AURA-Atlas\workspace\overview.md`
- `F:\Projects\AURA-Atlas\workspace\current.md`
- `F:\Projects\AURA-Atlas\package.json`
- `F:\Projects\AURA-Sense\README.md`
- `F:\Projects\AURA-Sense\workspace\overview.md`
- `F:\Projects\AURA-Sense\workspace\current.md`
- `F:\Projects\AURA-Sense\package.json`
- `F:\Projects\Aura_core\README.md`
- `F:\Projects\Aura_core\workspace\overview.md`
- `F:\Projects\Aura_core\workspace\current.md`
- `F:\Projects\Aura_core\package.json`
- `F:\Projects\EVE-Threat-Overlay\package.json`
- `F:\Projects\EVE-Threat-Overlay\Docs\index.md`
- `F:\Projects\Bughunt\001-aura-suite-spawn-leaves-cmd-terminals.md`
- `F:\Projects\Bughunt\013-suite-window-dragging-drift.md`
- Directory and `rg` sampling across `F:\Projects\EVE-Threat-Overlay\Docs` and `F:\Projects\EVE-Threat-Overlay\src`

## High-Level Read

Aura Lab is best used as a proving bench for small, portable local-app rigging and presentation patterns, not as a place to import Atlas, Sense, or AURA-7 domain semantics.

The strongest cross-project opportunities are:

- bridge-aware UI state grammar
- first-screen briefing and trust language
- visual smoke/test-mode harness patterns
- frameless window/drag behavior review
- launch hygiene and hidden-terminal behavior
- neutral Aura Core seed improvements once proven in Lab

## Project Fit

### Aura Core

Best fit:

- Neutral reusable rigging after it is proven in Aura Lab.
- Bridge-aware renderer shell pattern if it stays domain-light.
- Visual smoke harness conventions.
- Window frame controls and stable drag-zone guidance.
- Launch/readiness wording for seed apps.

Avoid:

- Atlas evidence doctrine.
- Sense tactical telemetry doctrine.
- Project-specific briefing fields.

Why:

Aura Core is explicitly the neutral seed. Anything packed into Core must be generic enough for future Aura projects and should remain light.

### AURA Atlas

Best fit:

- Source/freshness/certainty language for operator-facing reports and investigation desk states.
- First-screen hierarchy patterns that separate evidence state, possible evidence, assessments, and service health.
- Bridge/test-mode style harnesses for UI states without touching live APIs.
- Window drag and launch polish if shared Electron rigging is accepted.

Avoid:

- Lab defining Atlas product terms.
- Treating discovery refs as evidence.
- Any background collection or live behavior.

Why:

Atlas already has mature evidence doctrine. Lab can help polish presentation and state grammar, but Atlas must keep its own evidence boundaries.

### AURA Sense

Best fit:

- Compact stale/partial/failed language for tactical lanes.
- Visual state grammar that keeps passive telemetry, Combat Witness, Threat Intel, and diagnostics distinct.
- Runtime diagnostics presentation patterns.
- Electron visual smoke conventions for degraded UI states.
- Window drag stability review.

Avoid:

- Persistent briefing/report patterns that make Sense feel like Atlas.
- Any Lab pattern that implies historical evidence or long-term memory.

Why:

Sense is transient and tactical. Lab can prototype clarity and degradation patterns, but not persistent project/report semantics.

### EVE Threat Overlay / AURA-7

Best fit:

- Back-port only if the project remains active as a predecessor or reference app.
- Window drag-zone stabilization.
- Uncertainty language around stale, partial, capped, and failed tactical data.
- Passive/active lane isolation visualization.
- Launch/no-terminal polish if the suite launcher still targets this app.

Avoid:

- Major structural imports unless this project is intentionally being modernized.
- Reintroducing deprecated gap task lifecycle as active process.

Why:

AURA-7 already documents tactical uncertainty and lane separation. Lab can test presentation mechanics, but Sense appears to be the newer active tactical viewport.

### Bughunt Notes

Best fit:

- Convert recurring desktop polish bugs into Lab-proven reusable acceptance checks.
- Specifically: hidden terminal launch behavior and stable frameless window dragging.

Avoid:

- Treating bug notes as active work packets in any project without Overseer routing.

Why:

The notes describe cross-suite user experience friction that can be reproduced and hardened in Lab before project-specific fixes.

## Packable Candidates

1. Bridge-aware state grammar pack

Content:

- loading, empty, populated, stale, failed, partial states
- certainty phrases
- source/freshness placement rules
- missing/unavailable copy rules

Best destination:

- Aura Lab first
- Aura Core only after it is neutralized
- Atlas/Sense through project-specific UI packets

2. Visual smoke and test-mode pack

Content:

- deterministic UI modes
- screenshot/result JSON conventions
- desktop/narrow smoke coverage
- state text assertions

Best destination:

- Aura Lab as proving bench
- Aura Core as neutral harness if generalized
- Atlas/Sense as adapted harnesses, not copied blindly

3. Window shell polish pack

Content:

- drag-zone rules
- no-drag controls
- stable frame button affordances
- smoke checklist for dragging and always-on-top/minimize/close controls

Best destination:

- Aura Lab prototype
- Aura Core neutral frame module
- Atlas/Sense/EVE overlay as targeted fixes

4. Launch hygiene pack

Content:

- normal launch hides command terminals
- explicit debug/dev launch can show terminals
- child process lifecycle expectations
- Windows launcher acceptance checklist

Best destination:

- Aura Lab as simple harness
- Aura Core seed docs/scripts if neutral
- suite launcher or app projects by explicit owner packet

5. First-screen briefing pattern

Content:

- identity
- current focus
- action posture
- trust band
- diagnostics demotion

Best destination:

- Aura Lab product surface
- Atlas Investigation Desk as adapted operator-first IA
- not directly for Sense unless reduced to tactical lane posture

## Recommended Aura Lab Direction

Use Aura Lab M01/M02 as a packaging bench:

- M01: sharpen the project briefing first screen and state grammar.
- M02: extract neutral state/test-mode/window-shell patterns into a documented pack candidate.
- Later: propose a Core adoption packet only for neutral pieces that have proven value.

Aura Lab should produce pack candidates with three labels:

- `Lab-proven`: implemented and smoke-tested in Aura Lab.
- `Core-suitable`: neutral enough to propose for Aura Core.
- `Project-adapted`: useful only after Atlas/Sense/EVE-specific review.

## Suggested Acceptance Checks For Future Packs

- The pack has no Atlas/Sense/AURA-7 product doctrine unless explicitly project-adapted.
- The pack includes clear non-goals.
- The pack names what evidence proves it: static verification, visual smoke, manual smoke, or advisory review.
- The pack separates UI state grammar from bridge/data contract.
- The pack can be rejected by a target project without breaking Aura Lab.

## Questions For Human / Overseer

- Which target matters first: Aura Core neutral seed, Atlas operator desk, Sense tactical viewport, or suite launch/window polish?
- Should Aura Lab M01 stay focused on project-state briefing, or pivot to packaging reusable state/smoke/window rigging?
- Is `EVE-Threat-Overlay` still an active target, or should Lab treat it as historical reference for Sense?
- Should launch hygiene and drag stability be handled as a shared suite polish packet rather than product-specific work?
- Do you want Aura Lab to create pack manifests, screenshots, and acceptance checklists as first-class artifacts?

## Risks

- Packing too early could move unproven Lab-specific choices into Core.
- Copying UI patterns directly into Atlas or Sense could violate their distinct product boundaries.
- Window and launch fixes may require OS/Electron-specific verification that Lab can prototype but not fully prove for every target app.
- Existing project packets are active; any adoption must be routed by each project's Overseer, not pushed from Lab.
