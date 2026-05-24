# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M14 - Readout Basis And Smoke Honesty Corrections
Last completed milestone: M13c - Vocabulary Guardrail Verification
Current executor: Dev
Current focus: correct readout basis references and make smoke pass/fail criteria honest
Expected DevHS filename: `workspace/DevHS54-readout-basis-and-smoke-honesty.md`

## Purpose

M13a through M13c stabilized Lab's slim presentation vocabulary. The next advisory-backed work is not more terminology churn. It is readout and verification honesty:

- the readout basis should point at current accepted Lab state, not stale M01-only source context
- absent handoff should not surface as a literal handoff named `None`
- visual smoke should fail or clearly block when captured state/selection/overflow issues make review evidence unreliable

## Source Of Intent

Accepted artifacts:

- `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`
- `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`
- `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`
- `workspace/OverseerHS53-m13c-acceptance-m14-runway.md`

Advisory source accepted for this bounded packet:

- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\Lab-Terminology-Boundary-Requirements-2026-05-24.md`

Accepted / active references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

## Accepted Scope

Address only these audit-backed corrections:

1. **Readout basis source freshness**
   - Review `src/services/serviceRegistry.js` project briefing source labels.
   - Replace stale M01-only current-state basis with the current accepted readout-state source, likely `docs/current-state/m11-presentation-state-readout-current-state.md`.
   - Keep source labels factual and display-scoped.

2. **Absent handoff display**
   - Ensure missing or literal `None` expected handoff does not become a visible `Expected handoff: None` item.
   - Prefer treating absent handoff as absent.
   - Preserve real expected handoff values.

3. **Visual smoke honesty**
   - Review `src/main/main.js` visual smoke result logic.
   - Fail or emit a blocking failure when an observation has selected family/state mismatch or horizontal overflow in review-critical captures.
   - Keep the existing smoke matrix; do not broaden it.
   - Keep screenshot/result JSON output.

Expected implementation files:

- `src/services/serviceRegistry.js`
- `src/main/main.js`
- affected verifier scripts, likely `scripts/verify-services.js` and `scripts/verify-renderer-shell.js`
- `workspace/DevHS54-readout-basis-and-smoke-honesty.md`

## Ordered Runway

1. Read this packet and the advisory boundary requirements.
2. Inspect the current project briefing source-basis wiring and verifier expectations.
3. Correct stale source-basis references with the current accepted Lab state source.
4. Suppress absent/literal `None` handoff items while preserving real expected handoff values.
5. Tighten visual smoke result criteria for selected family/state mismatch and horizontal overflow without expanding the smoke matrix.
6. Update focused verifier expectations.
7. Run required verification.
8. Create `workspace/DevHS54-readout-basis-and-smoke-honesty.md`.

## Guardrails

- Do not change Lab slim vocabulary beyond what is necessary for the three accepted corrections.
- Do not relabel `Source Detail`, `Neutral Seed`, support panels, or `trust-strip`.
- Do not rewrite completed current-state docs or archived handshakes.
- Do not broaden visual smoke to new families, states, or viewport matrices.
- Do not change source-owned Atlas/Sense terms or project meaning.
- Do not rename service commands, IPC channels, schemas, payload fields, CSS compatibility names, family ids, screenshot names, package scripts, or inherited scaffold internals.
- Do not run live network, private-state, destructive, or cross-project actions.

## Stop Conditions

Stop and hand back to Overseer if:

- The current accepted source-basis doc is ambiguous.
- Suppressing absent handoff requires changing the active packet format.
- Smoke honesty cannot be tightened without large visual-smoke architecture changes.
- Visual smoke starts failing because of a real presentation issue that needs Human / Overseer review.
- GUI/Electron smoke requires approval beyond the existing `npm.cmd run smoke:electron` project-local script.

## Verification

Required:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
npm.cmd run smoke:electron
```

If smoke fails because it exposes a real overflow or selection issue, stop and report the failure rather than weakening the check.

## Evidence

Record:

- Files changed.
- Source-basis reference before/after.
- Handoff absence behavior before/after.
- Smoke failure criteria added.
- Commands run and results.
- Smoke result status and whether any Electron process remains.

## Dev Handoff

In `workspace/DevHS54-readout-basis-and-smoke-honesty.md`, include:

- Request Received
- Files changed
- Readout basis correction
- Absent handoff behavior
- Smoke honesty behavior
- Verification
- Skipped / parked items
- Residual risks
- Recommended next packet
