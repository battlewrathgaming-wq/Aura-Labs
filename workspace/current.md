# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M18 - Presentation Concept Pack
Last completed milestone: M17 - Protected-Term Discovery Guardrail
Current executor: UI/UX
Current focus: produce a concept pack for the next high-quality Lab presentation module
Expected artifact filename: `workspace/UIUXHS64-presentation-concept-pack.md`

## Current State

Aura Lab is active for a UI/UX concept milestone after accepting the M17 protected-term discovery guardrail.

Accepted state:

- M00 through M17 are complete.
- Bridge State Readout remains the accepted Lab presentation feature.
- The visible readout drawer now uses `Readout Detail`.
- The visible neutral fixture family label now uses `Neutral Sample`.
- Internal compatibility names, payload fields, service commands, screenshot names, and source-owned terms remain unchanged by design.
- Local vocabulary and renderer verification now protect the accepted visible labels.
- The shared terminology check remains advisory and is not the product direction.
- Shared protected-word lookup files now exist for owner-aware discovery.
- Lab vocabulary verification now reports warning-only protected-term discovery candidates.

## Purpose

M18 asks UI/UX to explore what Lab should present next, not what Dev can wire immediately.

The goal is to produce a concept pack for portable, high-quality HTML presentation modules that feel beautiful, clear, calm, meaningful, and reusable while preserving source-project meaning.

This is concept work only. It should shape the next prototype before Dev implements.

## Latest Accepted Work

- Dev handoff: `workspace/DevHS58-readout-naming-polish.md`
- Overseer acceptance: `workspace/OverseerHS59-m16-acceptance.md`
- Accepted UI/UX source: `workspace/UIUXHS56-post-m14-presentation-quality-and-naming-review.md`
- Previous runway: `workspace/OverseerHS57-m15-acceptance-m16-runway.md`
- Latest scope proposal: `workspace/OverseerHS60-protected-term-guardrail-scope.md`
- Latest Dev handoff: `workspace/DevHS61-protected-term-discovery-guardrail.md`
- Latest Overseer acceptance: `workspace/OverseerHS62-m17-acceptance.md`
- Current UI/UX runway: `workspace/OverseerHS63-m18-presentation-concept-runway.md`

## Source Of Intent

Human direction:

- Lab should now ask "should this presentation exist" rather than only "can we build it."
- Human wants the space-ship presentation idea and the other custom display ideas sent through to UI/UX.
- UI/UX should work before Dev implementation.

Accepted references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/OverseerHS60-protected-term-guardrail-scope.md`
- `workspace/OverseerHS62-m17-acceptance.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`

## Ordered Runway

1. Read this packet, `AGENTS.md`, `workspace/overview.md`, and the critical terminology references.
2. Review the concept candidates in `workspace/OverseerHS63-m18-presentation-concept-runway.md`.
3. Rank the concepts by Lab fit, visual promise, portability, terminology safety, and smallest useful prototype.
4. Recommend one smallest safe prototype for Dev.
5. Define visual direction, information hierarchy, interaction model, fixture/data shape, state grammar, terminology risks, and minimum verification.
6. Park concepts that should not be built yet.
7. Write `workspace/UIUXHS64-presentation-concept-pack.md`.

## Concept Candidates

- Ship Systems Readout.
- Sensor Surface.
- Activity Timeline.
- Status Light Grammar.
- Tactical Detail Drawer as a visual-theme idea only.
- Atlas-adaptable Evidence Stack View.
- Atlas-adaptable Actor Activity Strip.
- Atlas-adaptable Provenance Drawer.
- Atlas-adaptable Watch / Marked Split Panel.
- Atlas-adaptable Evidence Delta View.

## Guardrails

- Do not implement code.
- Do not create a Dev runway inside the UI/UX artifact.
- Do not make Lab an Atlas, Sense, or Core adapter.
- Do not define Atlas or Sense source-project meaning.
- Do not use tactical wording as Lab default copy; visual theme can be ship-like or instrument-like.
- Do not turn protected-term discovery into the product direction.
- Do not create a durable bridge contract.
- Do not expand visual smoke matrices.
- Do not require live/private/network data.

## Stop Conditions

Stop and return to Human / Overseer if:

- the recommended concept requires Atlas or Sense source-project decisions
- the concept depends on private/live data
- Dev would need to decide product direction
- terminology risk cannot be bounded through Lab display language

## Verification

No runtime verification is required for this UI/UX concept packet.

Last verified by Overseer on 2026-05-24 after M17:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Results:

```txt
verify:vocabulary passed.
verify:all passed.
verify:renderer-shell passed.
```

Shared advisory terminology check was run from:

```txt
F:\Projects\Docs\Aura-Project-Orchestration
```

Command:

```powershell
npm.cmd run verify:terminology
```

Result:

```txt
Terminology verification: 53/53 resource checks passed.
Shared resource checks passed, including protected-word lookup files.
Advisory warnings remain for existing compatibility names and source-code paths.
```

Electron visual smoke was not run for M17 because no layout, CSS, smoke matrix, or structural rendering change was made.

## Evidence

UI/UX should record:

- files reviewed
- concept ranking
- recommended prototype
- fixture/data shape
- state model
- terminology risks
- minimum verification
- parked items

## Handoff

Expected artifact:

```txt
workspace/UIUXHS64-presentation-concept-pack.md
```

## Parked Items

- Support panel label polish.
- Deeper compatibility-name cleanup.
- Lab protected-term discovery false-positive refinement.
- Atlas-local protected-term checker.
- Sense-local protected-term checker.
- Completed current-state doc vocabulary cleanup.
- Broad visual-smoke matrix expansion.
- Cross-project adoption decisions.
- Dev implementation of any M18 concept until UI/UXHS64 is accepted.
