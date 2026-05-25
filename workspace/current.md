# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M19 - Instrument Status Band Prototype
Last completed milestone: M18 - Presentation Concept Pack
Current executor: Dev
Current focus: build one bounded visible Instrument Status Band prototype
Expected DevHS filename: `workspace/DevHS68-instrument-status-band-prototype.md`

## Current State

Aura Lab is active for a Dev prototype milestone after accepting the M18 presentation concept pack.

Housekeeping note:

- The active workspace root has been cleaned.
- Completed M13-M17 handoffs are in `workspace/complete/`.
- Atlas/Sense relay advisories are in `workspace/archive/cross-project-relay/`.
- `workspace/reference/` is accepted as reference-only input.
- No target-project adoption work is open in Lab.
- Remote Atlas/Sense read access is allowed under `workspace/LabRemoteConsumerConformanceHS66.md`.

Accepted state:

- M00 through M18 are complete.
- Bridge State Readout remains the accepted Lab presentation feature.
- M18 accepted `Instrument Status Band` as the next smallest safe presentation prototype.
- The visible readout drawer now uses `Readout Detail`.
- The visible neutral fixture family label now uses `Neutral Sample`.
- Internal compatibility names, payload fields, service commands, screenshot names, and source-owned terms remain unchanged by design.
- Local vocabulary and renderer verification now protect the accepted visible labels.
- The shared terminology check remains advisory and is not the product direction.
- Shared protected-word lookup files now exist for owner-aware discovery.
- Lab vocabulary verification now reports warning-only protected-term discovery candidates.

## Purpose

M19 implements one bounded Lab presentation primitive:

```txt
Instrument Status Band
```

The goal is a compact, beautiful, state-aware band for bridge-fed readouts. It should show the readout label, primary value/status, state light, freshness/age, basis summary, gaps/warnings marker, and optional detail reveal.

This is a visible HTML/CSS/JS presentation feature. It is not a backend contract, target adapter, or broad fixture taxonomy pass.

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

## Source Of Intent

Accepted source of intent:

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

1. Read this packet, `AGENTS.md`, `workspace/overview.md`, and the accepted M18 concept pack.
2. Inspect the existing renderer/service fixture patterns before editing.
3. Use `workspace/UIDevHS69-instrument-status-band-implementation-advisory.md` as accepted advisory input while keeping this packet authoritative.
4. Add one Instrument Status Band to the Lab renderer using neutral Lab presentation language.
5. Feed it from existing or narrowly extended Lab fixture data.
6. Cover these display states: current, updating, aged, partial, unavailable, fallback, and no data.
7. Include a compact detail reveal or reuse `Readout Detail` where it fits cleanly.
8. Preserve internal compatibility names unless a local rename is necessary and well covered.
9. Update focused renderer/service/vocabulary verification.
10. Run required verification.
11. Create `workspace/DevHS68-instrument-status-band-prototype.md`.

## Concept Candidates

The concept candidate list is complete for M18 and now lives in `workspace/complete/milestone-M18/`.

M19 accepts only `Instrument Status Band`.

Park all other concepts unless Human / Overseer explicitly opens them later.

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

Stop and return to Human / Overseer if:

- the band requires source-project meaning decisions
- the fixture shape begins to look like a durable bridge contract
- implementation requires broad renderer restructuring
- the prototype cannot cover states without a large fixture taxonomy expansion
- terminology risk cannot be bounded through Lab display language

## Verification

Required:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
```

Run Electron smoke if layout/CSS changes affect visible renderer surfaces:

```powershell
npm.cmd run smoke:electron
```

Shared advisory check after local verification:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

Dev should record:

- files changed
- visible module behavior
- fixture/data shape used
- states covered
- detail reveal behavior
- internal names intentionally preserved
- verification commands and results
- whether Electron smoke was run or skipped, with reason
- remaining warning-only terminology candidates

## Handoff

Expected artifact:

```txt
workspace/DevHS68-instrument-status-band-prototype.md
```

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
