# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M13c - Vocabulary Guardrail Verification
Last completed milestone: M13b - Presentation Vocabulary Replacement
Current executor: Dev / Test specialist
Current focus: add a narrow guardrail for Lab-owned default presentation copy
Expected DevHS filename: `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`

## Purpose

M13a identified risky Lab-owned presentation language. M13b replaced the accepted safe-now copy groups with slimmer display language.

M13c should add a narrow guardrail so Lab-owned default copy does not drift back into proof, authority, Atlas/Sense/Core, monitoring, history, or backend-heavy language.

This guardrail exists only to support Aura Lab's presentation language. It must not become the product direction.

## Source Of Intent

Accepted artifacts:

- `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`
- `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`
- `workspace/OverseerHS49-m13a-acceptance-m13b-runway.md`
- `workspace/OverseerHS51-m13b-acceptance-m13c-runway.md`

Accepted / active references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\lab-terminology-stabilization-prompt.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

Accepted Human / Overseer direction:

- Clean Lab's presentation face, not the inherited scaffold bones.
- Lab owns Bridge -> Interface human presentation language only after preserving source-project meaning.
- Atlas and Sense own what they emit and what those terms mean.
- Shared spelling does not imply shared meaning.
- Inherited Core/scaffold internals should not be scrubbed.

## Accepted Scope

Add a small guardrail that checks Lab-owned default user-facing or review-facing copy for risky vocabulary.

Approved check surface:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/services/serviceRegistry.js`
- existing verifier-visible default copy only where it protects current UI/presentation strings

Risky Lab-default vocabulary should include, at minimum:

- `verified`
- `trust`
- `certainty`
- `proof`
- `truth`
- `source of truth`
- `authoritative`
- `evidence`
- `intel`
- `intelligence`
- `tactical`
- `combat`
- `operator`
- `watch`
- `monitoring`
- `listening`
- `snapshot`
- `report`
- `record`
- `finding`
- `schema`
- `Core`
- `Seed`

## Ordered Runway

1. Read the accepted artifacts and current packet.
2. Inspect existing verification structure in `scripts/`.
3. Add the smallest practical vocabulary guardrail for current Lab-owned default copy.
4. Prefer an explicit allowlist/exclusion model over broad repository scanning.
5. Wire the guardrail into `npm.cmd run verify:all` only if false positives are controlled for the approved surface.
6. Run required verification.
7. Create `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`.

## Guardrails

- Do not run a broad repository keyword check.
- Do not scan or fail `workspace/archive/`, `workspace/complete/`, completed current-state history, critical authority docs, or source-owned boundary docs.
- Do not fail source-owned Atlas/Sense terms merely because they appear.
- Do not fail internal/support identifiers or compatibility names.
- Do not rename service commands, IPC channels, schemas, payload fields, CSS compatibility names, family ids, screenshot names, package scripts, or internal identifiers.
- Do not rename `neutral-seed`, `seed.health`, `seed.readiness`, `trust-strip`, or inherited Core/scaffold internals.
- Do not change user-facing copy except if required to make the accepted M13b copy consistent with the guardrail.
- Do not relabel parked decision items: `Neutral Seed`, `Source Detail`, support panels, `trust-strip`, or completed docs.
- Do not run GUI/Electron smoke, live network, private-state, destructive, or cross-project actions from this packet.

## Stop Conditions

Stop and hand back to Overseer if:

- The guardrail cannot avoid false positives without broad exceptions.
- The guardrail would block source-owned or boundary-preserving terminology.
- The guardrail requires deciding a parked item.
- The implementation would require a copy registry or architecture refactor.
- The work expands into broad repository scanning or docs cleanup.
- GUI/Electron smoke, live network, private-state access, destructive action, or cross-project edits become necessary.

## Verification

Required:

```powershell
npm.cmd run verify:all
```

If a new guardrail script is added, run it directly as well.

If renderer shell assertions change, also run:

```powershell
npm.cmd run verify:renderer-shell
```

Electron visual smoke is not required unless visual layout changes.

## Evidence

Record:

- Files changed.
- Guardrail surface checked.
- Risky vocabulary list used.
- Exclusions / allowlist rationale.
- Whether the guardrail is hard-fail or warning/report only.
- Commands run and results.
- Any false positives or parked vocabulary.

## Dev Handoff

In `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`, include:

- Request Received
- Files changed
- Guardrail behavior
- Exclusions / allowlist
- Verification
- Skipped / parked items
- Residual risks
- Recommended next packet
