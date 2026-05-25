# Current Workspace Packet

Status: Waiting
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: None
Last completed milestone: M19 - Instrument Status Band Prototype
Current executor: Human / Overseer
Current focus: waiting for Human / Overseer direction after M19 closure
Expected DevHS filename: None

## Current State

Aura Lab is waiting after accepting and closing M19.

Housekeeping note:

- The active workspace root has been cleaned.
- Completed M13-M17 handoffs are in `workspace/complete/`.
- Atlas/Sense relay advisories are in `workspace/archive/cross-project-relay/`.
- `workspace/reference/` is accepted as reference-only input.
- No target-project adoption work is open in Lab.
- Remote Atlas/Sense read access is allowed under `workspace/LabRemoteConsumerConformanceHS66.md`.

Accepted state:

- M00 through M19 are complete.
- Bridge State Readout remains the accepted Lab presentation feature.
- M18 accepted `Instrument Status Band` as the next smallest safe presentation prototype.
- The visible readout drawer now uses `Readout Detail`.
- The visible neutral fixture family label now uses `Neutral Sample`.
- Internal compatibility names, payload fields, service commands, screenshot names, and source-owned terms remain unchanged by design.
- Local vocabulary and renderer verification now protect the accepted visible labels.
- The shared terminology check remains advisory and is not the product direction.
- Shared protected-word lookup files now exist for owner-aware discovery.
- Lab vocabulary verification now reports warning-only protected-term discovery candidates.
- The Instrument Status Band prototype is accepted as Lab advisory presentation-pattern input.
- Sense conformance is already handled; Sense may now read M19 as advisory input through Sense authority.

## Purpose

M19 implemented one bounded Lab presentation primitive:

```txt
Instrument Status Band
```

The accepted result is a compact, state-aware band for bridge-fed readouts. It shows the readout label, primary value/status, state light, freshness/age, basis summary, gaps/warnings marker, and optional detail reveal.

This remains a visible HTML/CSS/JS presentation feature. It is not a backend contract, target adapter, or broad fixture taxonomy.

## Latest Accepted Work

- M16 Dev handoff: `workspace/complete/milestone-M16/DevHS58-readout-naming-polish.md`
- M16 Overseer acceptance: `workspace/complete/milestone-M16/OverseerHS59-m16-acceptance.md`
- M15 UI/UX source: `workspace/complete/milestone-M15/UIUXHS56-post-m14-presentation-quality-and-naming-review.md`
- M15 runway: `workspace/complete/milestone-M15/OverseerHS57-m15-acceptance-m16-runway.md`
- M17 scope proposal: `workspace/complete/milestone-M17/OverseerHS60-protected-term-guardrail-scope.md`
- M17 Dev handoff: `workspace/complete/milestone-M17/DevHS61-protected-term-discovery-guardrail.md`
- M17 Overseer acceptance: `workspace/complete/milestone-M17/OverseerHS62-m17-acceptance.md`
- M18 runway: `workspace/complete/milestone-M18/OverseerHS63-m18-presentation-concept-runway.md`
- M18 UI/UX concept pack: `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- Current Overseer runway: `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- Remote consumer conformance: `workspace/LabRemoteConsumerConformanceHS66.md`
- Accepted UI developer advisory: `workspace/UIDevHS69-instrument-status-band-implementation-advisory.md`
- Overseer advisory review: `workspace/OverseerHS70-uidevhs69-advisory-review.md`
- M19 Dev handoff: `workspace/DevHS68-instrument-status-band-prototype.md`
- M19 Overseer acceptance: `workspace/OverseerHS71-m19-acceptance.md`

## Source Of Intent

Accepted source of intent for the closed M19 work:

- Human direction that Lab should ask whether a presentation should exist before building it.
- M18 UI/UX recommendation to build `Instrument Status Band` first.
- Reference folder accepted as inspiration only.
- UIDevHS69 accepted as practical M19 advisory input, subordinate to this current packet.

Accepted references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/complete/milestone-M18/UIUXHS64-presentation-concept-pack.md`
- `workspace/complete/milestone-M18/OverseerHS63-m18-presentation-concept-runway.md`
- `workspace/OverseerHS67-m18-acceptance-m19-runway.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`

## Ordered Runway

No active Dev runway.

Do not execute Dev work from this packet.

Next valid moves:

1. Human / Overseer may park Lab while Sense or Atlas performs target-owned adoption review.
2. Human / Overseer may write a small Sense delta prompt that points to accepted M19 input.
3. Human / Overseer may open a new bounded Lab presentation primitive.
4. Human / Overseer may open warning-candidate triage if terminology review noise becomes costly.

## Concept Candidates

The concept candidate list is complete for M18 and lives in `workspace/complete/milestone-M18/`.

M19 accepted only `Instrument Status Band`.

All other concepts remain parked unless Human / Overseer explicitly opens them later.

## Guardrails

- Do not implement a full Ship/System face.
- Do not implement Atlas or Sense adapters.
- Do not make Lab an Atlas, Sense, or Core adapter.
- Do not define Atlas or Sense source-project meaning.
- Do not use domain-heavy wording as Lab default copy.
- Do not turn protected-term discovery into the product direction.
- Do not create a durable bridge contract.
- Do not expand visual smoke matrices.
- Do not require live/private/network data.
- Do not add a theme system, color editor, external UI framework, or broad reference-library feature.
- Do not rename IPC channels, service commands, payload fields, screenshot names, or compatibility ids unless the packet becomes impossible without it.

## Stop Conditions

Stop and return to Human / Overseer if any future work would:

- require source-project meaning decisions
- turn Lab fixture shape into a durable bridge contract
- require broad renderer restructuring
- expand into a large fixture taxonomy
- make terminology risk unbounded through Lab display language

## Verification

Latest accepted verification:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

M19 Dev evidence recorded 2026-05-25:

- Files changed: `src/renderer/index.html`, `src/renderer/app.js`, `src/renderer/styles.css`, `src/services/serviceRegistry.js`, `src/main/main.js`, `scripts/verify-lab-vocabulary.js`, `scripts/verify-renderer-shell.js`, `scripts/verify-services.js`, `workspace/current.md`, `workspace/DevHS68-instrument-status-band-prototype.md`.
- Visible module behavior: the existing `#state-readout` is now marked and styled as the Instrument Status Band prototype while preserving visible `Bridge State Readout`; the closed band shows state label, primary value/status, state light, pips/inset, readout age, source coverage, readout basis, and a gap/warning/availability marker.
- Fixture/data shape used: existing briefing and Neutral Sample fixture data feeds the primary value, basis, age, sources, gaps, warnings, and detail; one narrow Lab-local `fallback` review state was added to existing fixture modes to exercise `FALLBACK` without defining a durable bridge contract.
- States covered: `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`.
- Detail reveal behavior: existing `Readout Detail` remains the compact reveal and now includes the band marker in addition to readout age, state summary, readout basis, known fields, source paths, gaps, warnings, fallback notes, and unavailable/no-data notes.
- Internal names intentionally preserved: `#state-readout`, `#source-detail-drawer`, `source-detail-*` ids/classes, `neutral-seed`, payload fields, service commands, IPC channels, screenshot names, and smoke matrix names.
- Verification commands and results: `npm.cmd run verify:vocabulary` passed with 31 warning-only protected-term discovery candidates; `npm.cmd run verify:renderer-shell` passed; `npm.cmd run verify:all` passed; `npm.cmd run smoke:electron` passed; `npm.cmd run verify:terminology` passed from `F:\Projects\Docs\Aura-Project-Orchestration`.
- Electron smoke: run because visible renderer layout/CSS changed. Result `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed`, `blocking_failures: []`, no horizontal overflow, and no Electron process remained.
- Shared advisory terminology result: `53/53 resource checks passed` with 24 warnings remaining for existing compatibility/internal `trust-strip` and `certainty` surfaces.
- Remaining local warning-only terminology candidates: 31, including existing source/sample/state collision candidates plus new `Band marker` / Instrument Status Band review wording candidates for Overseer review.

## Handoff

M19 handoff:

- `workspace/DevHS68-instrument-status-band-prototype.md`
- `workspace/OverseerHS71-m19-acceptance.md`

## Reference Folder

`workspace/reference/` is available for inspiration only.

Do not convert references into requirements unless this packet already names them.

## Parked Items

- Support panel label polish.
- Deeper compatibility-name cleanup.
- Lab protected-term discovery false-positive refinement.
- Atlas-local protected-term checker.
- Sense-local protected-term checker.
- Completed current-state doc vocabulary cleanup.
- Broad visual-smoke matrix expansion.
- Cross-project adoption decisions.
- Full face concepts beyond the Instrument Status Band.
