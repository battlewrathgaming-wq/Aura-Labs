# DevHS52 - Lab Vocabulary Guardrail Verification

Status: Complete for Overseer review
Date: 2026-05-24
Executor: Dev / Test specialist
Packet: `workspace/current.md`

## Request Received

Add a narrow guardrail so Lab-owned default presentation copy does not drift back into proof, authority, Atlas/Sense/Core, monitoring, history, or backend-heavy vocabulary.

The guardrail must protect the current presentation face without sweeping inherited scaffold internals, source-owned terms, compatibility names, completed history, or parked decision items.

## Files Changed

- `package.json`
- `scripts/verify-all.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`

## Guardrail Behavior

Added `scripts/verify-lab-vocabulary.js`.

Behavior:

- hard-fails when a guarded Lab-owned default copy string is missing from its expected file
- hard-fails when a guarded Lab-owned default copy string contains risky vocabulary
- checks only an explicit copy surface from:
  - `src/renderer/index.html`
  - `src/renderer/app.js`
  - `src/services/serviceRegistry.js`
- runs directly via `npm.cmd run verify:vocabulary`
- runs as part of `npm.cmd run verify:all`

Risky vocabulary checked:

```txt
verified, trust, certainty, proof, truth, source of truth, authoritative, evidence, intel, intelligence, tactical, combat, operator, watch, monitoring, listening, snapshot, report, record, finding, schema, Core, Seed
```

## Exclusions / Allowlist

The guardrail intentionally does not broadly scan the repository.

Excluded by design:

- source-owned Atlas/Sense terms
- internal/support identifiers
- service commands
- IPC channels
- payload fields
- CSS compatibility names
- family ids
- screenshot names
- package scripts
- completed current-state history
- archive/complete records
- authority and boundary docs

Allowlist:

- `Neutral Seed` is allowed inside the explicit checked copy surface because current packet guardrails park that visible naming decision and explicitly forbid renaming it in M13c.

## Verification

```powershell
npm.cmd run verify:vocabulary
```

Initial result: failed because the first checked surface listed `Current focus`, `Expected handoff`, and `Deferred` under `src/renderer/app.js` even though those guarded strings live in `src/services/serviceRegistry.js`.

Adjustment: moved those entries to the correct checked surface. No product copy changed.

```powershell
npm.cmd run verify:vocabulary
```

Result: passed.

The same command was run again after updating `workspace/current.md` and this handoff file.

Result: passed.

```powershell
npm.cmd run verify:all
```

Result: passed.

## Skipped / Parked Items

- `npm.cmd run verify:renderer-shell` was not separately required because renderer shell assertions did not change.
- Electron visual smoke was not run because no UI layout or CSS changed.
- Parked vocabulary remains parked: `Neutral Seed`, `Source Detail`, support panel labels, `trust-strip`, completed docs, inherited `seed.*` service commands, and internal `certainty` payload keys.

## Residual Risks

- This is a current-copy guardrail, not a broad repository scanner. New Lab-owned default copy should be added to the explicit surface list when introduced.
- The check is intentionally conservative; it does not decide source-owned Atlas/Sense terminology or parked naming questions.

## Recommended Next Packet

Overseer should review whether M13c is sufficient as a narrow guardrail or whether a later packet should add authoring guidance for keeping the guarded copy surface updated when new Lab UI text is introduced.
