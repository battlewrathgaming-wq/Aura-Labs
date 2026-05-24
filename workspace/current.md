# Current Workspace Packet

Status: Active Dev redirect
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M11 - Presentation State Readout Retone
Roadmap source: Human terminology correction plus Overseer cross-project usage review
Sequence: HS41
Previous accepted handshake: `workspace/complete/milestone-M10/OverseerHS33-implemented-family-screenshot-review.md`
Current executor: Dev
Current focus: revise the pending M11 implementation so the physical readout theme remains but tactical product wording is not accepted
Expected DevHS filename: `workspace/DevHS41-presentation-state-readout-retone.md`
Archive target on milestone completion: `workspace/complete/milestone-M11/`

## Purpose

This is the only active executable work packet for Aura Lab.

Dev already completed an M11 implementation against the now-superseded Tactical Signal Readout wording. That handoff is not accepted as-is.

Human correction:

```txt
Do not accept the tactical wordage. We want tactical theme but review over other projects for suitable usage.
```

Aura Lab may use a physical, HUD-like, instrument-panel presentation theme. It should not claim Sense-owned tactical product vocabulary or make combat/tactical wording the reusable Lab module language.

## Source Of Intent

Accepted into this packet:

- Human correction: tactical theme is acceptable; tactical wordage is not accepted.
- Overseer cross-project review:
  - AURA-Sense owns explicit tactical viewport / tactical HUD / Combat Witness language.
  - Atlas avoids tactical-truth overclaiming and prefers evidence, sample, warning, freshness, partial, readiness, and source-basis language.
  - Aura Lab should keep reusable post-bridge presentation language neutral enough to travel.
- `workspace/DevHS40-tactical-signal-readout.md`: pending Dev handoff; useful implementation evidence, not accepted completion.
- `docs/statements/post-bridge-presentation-boundary.md`: Aura Lab focuses on portable post-bridge display mapping and presentation tooling.
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`: latest accepted completed Lab state.

Superseded / archived:

- `workspace/archive/EngineeringHS39-tactical-signal-readout-overseer-steering.md`
- `workspace/archive/UIUXHS39-tactical-signal-readout-alignment.md`
- `workspace/archive/OverseerHS40-tactical-signal-readout-runway.md`

Accepted direction:

- Keep the implemented physical readout surface if it is visually useful.
- Keep lights, pips, bars, inset surfaces, sweep marks, and compact disclosure where they improve clarity.
- Replace product-facing tactical/combat wording with neutral bridge-fed presentation wording.
- Keep source/freshness/certainty visible, but frame it as state, basis, age, source coverage, gaps, unavailable data, or fallback.
- Use Lab-local language that can be adapted by Sense, Atlas, or Core later without importing their doctrine.

Rejected:

- `Tactical Signal Readout` as the accepted feature name.
- `tactical`, `combat`, `operator under pressure`, `intel`, `contact`, `signal lost`, `scanning`, or similar combat-facing words as default reusable Lab copy.
- Sense ownership claims or Sense product vocabulary as Lab baseline.
- Atlas evidence doctrine as Lab baseline.
- confidence/trust scores, source rankings, source authority doctrine, or truth claims.

Candidate neutral naming:

- `Presentation State Readout`
- `Bridge State Readout`
- `Source State Readout`

Preferred visible state language:

- `LIVE` or `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

Avoid visible defaults:

- `TACTICAL`
- `SCANNING`
- `LOST`
- `NO CONTACT`
- `INTEL`
- `TARGET`
- `OPERATOR`
- `COMBAT`

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/DevHS40-tactical-signal-readout.md`
- `workspace/OverseerHS41-presentation-language-correction.md`
- `workspace/archive/EngineeringHS39-tactical-signal-readout-overseer-steering.md`
- `workspace/archive/UIUXHS39-tactical-signal-readout-alignment.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `package.json`
- `src/main/main.js`
- `src/main/preload.js`
- `src/services/serviceRegistry.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `scripts/electron-visual-smoke.ps1`

Do not inspect or edit sibling projects for this packet; Overseer has already performed the cross-project wording review.

## Ordered Dev Runway

1. Confirm the current tree contains the pending M11 implementation and read the required sources.
2. Retone visible UI copy and code-facing presentation labels:
   - replace `Tactical Signal Readout` with a neutral name, preferably `Presentation State Readout` unless a local fit is clearly better
   - replace combat-facing labels such as `SCANNING`, `LOST`, and `NO CONTACT` with neutral state labels such as `UPDATING`, `UNAVAILABLE`, and `NO DATA`
   - remove default visible `tactical`, `intel`, `contact`, `operator`, and combat framing
3. Preserve the physical presentation theme:
   - keep useful readout strip, lights, pips, inset panel, motion, and detail disclosure
   - keep the experience visually cool and game-adjacent without making the reusable language tactical doctrine
4. Preserve bridge/data honesty:
   - source count, age/freshness, partial gaps, unavailable state, fallback state, and diagnostics remain visible
   - do not add scores, ranks, authority levels, or truth claims
5. Update renderer/static/smoke wording expectations only as needed for the retone.
6. Run required verification.
7. Update Evidence / Dev Handoff below and create `workspace/DevHS41-presentation-state-readout-retone.md`.

## Guardrails And Non-Goals

- Do not accept or reintroduce tactical wording as default Lab product language.
- Do not erase the visual theme merely because wording changes.
- Do not inspect or edit sibling projects.
- Do not add new presentation families.
- Do not define a durable bridge/data contract.
- Do not create target-project adapters.
- Do not claim Aura Core ownership.
- Do not import Atlas or Sense doctrine.
- Do not broaden visual smoke beyond what the retone requires.
- Do not stage `.tmp`, screenshots, result JSON, cache, dependency artifacts, or generated smoke output.
- Do not run live/private/destructive actions.

## Stop Conditions

Stop and report back if:

- the implementation cannot be retuned without a larger UX decision
- neutral wording makes state distinctions unclear
- target-project terms are needed to explain the feature
- verification requires broad fixture or smoke expansion
- sibling-project edits become necessary
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
- the readout feature remains visible.
- tactical/combat wording is absent from default visible Lab UI copy.
- state labels are neutral and readable.
- Briefing still works.
- Neutral Seed still works and remains generic.
- diagnostics remain secondary.
- representative long/narrow capture reports no horizontal overflow.

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

Summary of retone:

```txt
Not yet recorded.
```

Exact files changed:

```txt
Not yet recorded.
```

Visible wording changes:

```txt
Not yet recorded.
```

Physical theme preserved:

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
workspace/DevHS41-presentation-state-readout-retone.md
```
