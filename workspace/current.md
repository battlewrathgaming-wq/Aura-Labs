# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M11 - Tactical Signal Readout
Roadmap source: Human steering plus accepted Engineering/UIUX HS39 alignment
Sequence: HS40
Previous accepted handshake: `workspace/complete/milestone-M10/OverseerHS33-implemented-family-screenshot-review.md`
Current executor: Dev
Current focus: build the first tactical signal presentation feature
Expected DevHS filename: `workspace/DevHS40-tactical-signal-readout.md`
Archive target on milestone completion: `workspace/complete/milestone-M11/`

## Purpose

This is the only active executable work packet for Aura Lab.

Aura Lab exists to explore high-quality HTML presentation features for bridge-fed information. Verification tooling supports those presentation experiments; it is not the product direction.

M11 is reopened as a presentation-first combat-game information display slice. The old Confidence / Trust framing is replaced by Tactical Signal Readout.

The feature should help a player or operator quickly read:

```txt
Is this feed live, scanning, aged, partial, lost, fallback, or no contact?
```

## Source Of Intent

Accepted into this packet:

- Human steering: prioritize cool, high-quality HTML presentation features for bridge-fed data.
- `workspace/EngineeringHS39-tactical-signal-readout-overseer-steering.md`: accepts Tactical Signal Readout as the corrected combat-game framing.
- `workspace/UIUXHS39-tactical-signal-readout-alignment.md`: accepts Signal Readout Strip plus Inset Feed Detail Drawer as the next visible feature shape.
- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`: accepted Briefing plus Neutral Seed family/state proof.
- `docs/current-state/m09-packaging-review-current-state.md`: accepted packaging classification.
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`: accepted screenshot review and local refinement risks.

Accepted with caveat:

- `workspace/archive/EngineeringHS38-physical-presentation-layer-prompt.md`: useful technical constraints and research notes are accepted, but the artifact is superseded as a Dev prompt because it references the old M11 packet and old expected `DevHS36` filename.

Accepted direction:

- Build a visible Tactical Signal Readout.
- Use tactical signal language instead of enterprise trust/confidence language.
- Include a Signal Readout Strip near the primary reading path.
- Include an Inset Feed Detail Drawer or equivalent clear disclosure.
- Make live, scanning, aged, partial, lost, fallback, and no-contact states visually distinguishable.
- Use source/freshness/certainty only as underlying presentation inputs, not visible enterprise doctrine.
- Keep diagnostics compact, secondary, and instrument-like.
- Keep verification minimal and supportive.

Rejected:

- Confidence View, Trust Ribbon, trust score, confidence score, source ranking, or source authority doctrine as visible UI.
- broad view-intent framework
- screenshot diagnostic systems as product direction
- broad visual-smoke matrices
- elaborate fixture taxonomy
- durable bridge/data contract
- target-project adapters
- Aura Core ownership claims
- Atlas or Sense doctrine

Deferred:

- new presentation families
- full tactical HUD family
- Operator Workbench
- timeline/activity surface
- comparison/delta readout
- source-first standalone view
- attention-first standalone view
- broad scenario packs
- screenshot review workbench
- shared component extraction
- framework migration

Promoted into durable docs: None yet.

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/EngineeringHS39-tactical-signal-readout-overseer-steering.md`
- `workspace/UIUXHS39-tactical-signal-readout-alignment.md`
- `workspace/archive/EngineeringHS38-physical-presentation-layer-prompt.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `package.json`
- `src/main/main.js`
- `src/main/preload.js`
- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Do not inspect or edit sibling projects for this packet.

## Ordered Dev Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, read required sources, and inspect the current renderer/service fixture flow before editing.
2. Add the Tactical Signal Readout near the primary reading path:
   - visible state label: `LIVE`, `SCANNING`, `AGED`, `PARTIAL`, `LOST`, `FALLBACK`, or `NO CONTACT`
   - embedded status light, pips, bars, sweep mark, or comparable instrument signal
   - last ping / last known / scanning posture
   - compact feed/source count
   - short tactical summary line
3. Add an Inset Feed Detail Drawer or equivalent clear disclosure:
   - show feed/source details, signal age, known fields, gaps, fallback notes, warnings, and compact diagnostics
   - keep detail secondary to the readout strip
   - do not rely on hover-only access for critical information
4. Improve degraded-state presentation only where it supports the readout:
   - loading becomes scanning/acquiring
   - stale becomes aged/last-known intel
   - partial shows feed gaps without panic
   - failed becomes signal lost or fallback
   - empty becomes no contact, not broken UI
5. Preserve existing scope:
   - Briefing and Neutral Seed continue to render
   - no new family
   - no durable schema or bridge contract
   - no target-project doctrine
6. Apply physical presentation polish:
   - use inset bands, layered panels, hairline borders, pips, restrained glow, surface texture, or subtle motion only where they improve clarity
   - respect `prefers-reduced-motion`
   - preserve text containment and narrow desktop behavior
7. Update verification only enough to protect the feature and run the required commands.
8. Update Evidence / Dev Handoff below and create `workspace/DevHS40-tactical-signal-readout.md`.

## Guardrails And Non-Goals

- Do not make verification grammar the product.
- Do not create a broad visual-smoke matrix.
- Do not build elaborate fixture taxonomy.
- Do not add new presentation families.
- Do not implement a full Tactical HUD family.
- Do not implement Operator Workbench.
- Do not add timeline, activity, comparison, source-first, or attention-first standalone views.
- Do not define a durable bridge/data contract.
- Do not create a shared component library.
- Do not choose or migrate UI framework.
- Do not add confidence scoring, truth ranking, or source authority doctrine.
- Do not import Atlas evidence doctrine or Sense tactical doctrine.
- Do not treat Neutral Seed as Aura Core doctrine, ownership, architecture, or contract.
- Do not expose new broad Electron APIs.
- Do not disable context isolation.
- Do not introduce `innerHTML` for dynamic service data.
- Do not stage `.tmp`, screenshots, result JSON, cache, dependency artifacts, or generated smoke output.
- Do not edit Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- Tactical Signal Readout requires a durable bridge/data contract
- implementation needs scoring, ranking, or source authority doctrine
- target-project semantics are needed to explain the signal state
- a new family becomes necessary
- loading capture requires brittle timing rather than a controlled state
- smoke output becomes too broad for practical review
- sibling-project inspection or edits become necessary
- live/private/destructive actions become necessary

## Required Verification

Run:

```powershell
npm.cmd run verify:all
```

Run:

```powershell
npm.cmd run smoke:electron
```

Check process cleanup:

```powershell
Get-Process electron -ErrorAction SilentlyContinue
```

Minimum expected evidence:

- `verify:all` passes.
- `smoke:electron` passes.
- no Electron process remains after smoke.
- Tactical Signal Readout is visible.
- Feed Detail Drawer is visible or clearly reachable.
- Briefing still works.
- Neutral Seed still works and remains generic.
- source/freshness/certainty inputs are presented through tactical signal language.
- diagnostics remain secondary.
- representative long/narrow capture reports no horizontal overflow.

Do not expand verification beyond what is needed to support the presentation feature.

## Evidence

Dev updates this section before handoff.

Verification run:

```txt
Not yet run.
```

Files changed:

```txt
Not yet recorded.
```

Findings:

```txt
Not yet recorded.
```

Deferrals:

```txt
Not yet recorded.
```

## Dev Handoff

Dev must complete this section before returning:

Summary of implementation:

```txt
Not yet recorded.
```

Exact files changed:

```txt
Not yet recorded.
```

Tactical Signal Readout behavior:

```txt
Not yet recorded.
```

Feed Detail Drawer behavior:

```txt
Not yet recorded.
```

Degraded-state presentation behavior:

```txt
Not yet recorded.
```

Source/freshness treatment:

```txt
Not yet recorded.
```

Motion/responsive behavior:

```txt
Not yet recorded.
```

Verification commands and results:

```txt
Not yet recorded.
```

Process cleanup result:

```txt
Not yet recorded.
```

Remaining risks or recommended Overseer action:

```txt
Not yet recorded.
```

Expected handoff file:

```txt
workspace/DevHS40-tactical-signal-readout.md
```
