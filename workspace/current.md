# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M13b - Presentation Vocabulary Replacement
Last completed milestone: M13a - Presentation Vocabulary Inventory
Current executor: Dev
Current focus: replace accepted Lab-owned default copy with slim display language
Expected DevHS filename: `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`

## Purpose

Aura Lab is tightening its own presentation voice so Lab can apply faces to bridge-fed project data without importing Atlas, Sense, Core, backend, proof, monitoring, history, or authority-heavy language.

This packet accepts the safe-now replacement groups from `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`.

Clean the presentation face, not the inherited scaffold bones.

## Source Of Intent

Accepted Human / Overseer direction:

- Lab should not use standard/source-project terms as default Lab voice.
- Lab should develop a bespoke slim presentation language that does not conflict with projects Lab applies faces to.
- Lab owns Bridge -> Interface human presentation language only after preserving source-project meaning.
- Atlas and Sense own what they emit and what those terms mean.
- Shared spelling does not imply shared meaning.
- Inherited Core/scaffold internals should not be scrubbed during this pass.

Accepted M13a artifact:

- `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`

Accepted / active references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\lab-terminology-stabilization-prompt.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

## Accepted Scope

Apply only the 13 safe-now Lab-owned display/review copy groups accepted from M13a:

1. `Reported by bridge` -> `Bridge read pending` or `Awaiting bridge read`
2. `Verified from source` -> `Read from source`
3. `Verified from local workspace sources.` -> `Read from local workspace sources.`
4. `Partial view; available facts are source-labeled.` -> `Partial readout; available fields include source labels.`
5. `Display certainty` -> `Display basis` or `Readout basis`
6. Neutral display note using `certainty` -> basis/freshness/availability wording
7. `sample data verifies display mapping` -> `sample data exercises display mapping`
8. `No gaps or warnings reported.` -> `No gaps or warnings shown.`
9. `None reported` -> `None shown`
10. `No attention items reported.` -> `No attention items shown.`
11. `No sample items reported.` -> `No sample items shown.`
12. Long-text fixture `presentation family proof` -> `presentation family prototype`
13. Long-text fixture `visual smoke evidence ... recorded` -> `visual smoke notes ... captured`

Expected implementation files if the inventory remains accurate:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/services/serviceRegistry.js`
- `scripts/verify-services.js`
- `scripts/verify-renderer-shell.js`

## Ordered Runway

1. Read `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md` and this current packet.
2. Apply only the accepted safe-now copy replacements listed above.
3. Update only verifier expectations directly affected by those copy changes.
4. Do not introduce a copy registry unless the accepted copy changes cannot be kept clear without one.
5. Run required verification.
6. Create `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`.

## Guardrails

- Do not rename service commands, IPC channels, schemas, payload fields, CSS compatibility names, family ids, screenshot names, package scripts, or internal identifiers.
- Do not rename `neutral-seed`, `seed.health`, `seed.readiness`, `trust-strip`, or inherited Core/scaffold internals.
- Do not rename Atlas/Sense emitted terms.
- Do not change `Neutral Seed` visible family name in this packet.
- Do not change `Source Detail`, `Source coverage`, `Source paths`, or `Source: ...` labels in this packet.
- Do not relabel `Bridge Diagnostics`, `Registered Services`, `Runtime`, or `Commands` in this packet.
- Do not rewrite completed current-state docs or archived handshakes.
- Do not add a vocabulary guardrail/verifier beyond updating existing assertions for accepted copy.
- Do not create shared Aura doctrine or a universal glossary.
- Do not run GUI/Electron smoke, live network, private-state, destructive, or cross-project actions unless the changed UI layout clearly requires smoke and Human / Overseer approves it.

## Parked Decision Items

Park these from HS48:

- Whether visible `Neutral Seed` should become `Neutral Surface`, `Neutral Sample`, or remain with Lab-local context.
- Whether `Source Detail` should move toward `Readout Detail` / `Display basis`.
- Whether secondary support panels should keep `Bridge Diagnostics`, `Registered Services`, `Runtime`, and `Commands`.
- Whether `trust-strip` internal compatibility names should ever be renamed.
- Whether completed current-state docs need a separate vocabulary stabilization note.

## Stop Conditions

Stop and hand back to Overseer if:

- A replacement requires changing a source-owned Atlas/Sense term.
- A replacement requires renaming inherited Core/scaffold internals.
- The safe-now inventory proves materially inaccurate in active source files.
- The work appears to require a copy registry, new verifier, architecture refactor, or docs history rewrite.
- GUI/Electron smoke, live network, private-state access, destructive action, or cross-project edits become necessary.

## Verification

Required:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Do not run Electron visual smoke unless visual layout changed enough to create a meaningful rendering risk or Human / Overseer asks for it.

## Evidence

Record:

- Files changed.
- Exact safe-now replacement groups applied.
- Verifier expectations updated.
- Commands run and results.
- Any safe-now replacements intentionally skipped and why.

## Dev Handoff

In `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`, include:

- Request Received
- Files changed
- Replacements applied
- Verification
- Skipped / parked items
- Residual risks
- Recommended next packet, likely M13c - Vocabulary Guardrail Verification only after Overseer accepts M13b
