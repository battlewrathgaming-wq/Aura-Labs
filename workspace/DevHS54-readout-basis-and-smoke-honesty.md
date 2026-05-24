# DevHS54 - Readout Basis And Smoke Honesty

Status: Complete
Role: Dev
Date: 2026-05-24

## Request Received

Execute the M14 Dev runway only: correct stale project briefing readout basis, prevent absent handoff values from rendering as literal `None`, and tighten Electron visual smoke pass/fail honesty for selection mismatch and horizontal overflow.

## Files Changed

- `src/services/serviceRegistry.js`
- `src/main/main.js`
- `scripts/verify-services.js`
- `scripts/verify-renderer-shell.js`
- `workspace/current.md`
- `workspace/DevHS54-readout-basis-and-smoke-honesty.md`

## Readout Basis Correction

Before: `aura.projectBriefing` read `docs/current-state/m01-project-state-briefing-current-state.md` as its current-state basis source.

After: `aura.projectBriefing` reads `docs/current-state/m11-presentation-state-readout-current-state.md`, matching the accepted Bridge State Readout current state named by the active packet.

The service verifier now asserts the M11 source label is present and the stale M01 source label is not used as the current readout basis.

## Absent Handoff Behavior

Before: a packet value such as `Expected DevHS filename: None` could flow through as `fields.expected_output` and render an attention item equivalent to `Expected handoff: None`.

After: service packet parsing normalizes literal `None` to `null` before field and attention rendering. Real handoff filenames such as `workspace/DevHS54-readout-basis-and-smoke-honesty.md` are preserved.

## Smoke Honesty Behavior

Electron visual smoke still captures the same existing matrix and screenshots.

The result JSON now includes `blocking_failures`, and the smoke result is marked `failed` if any captured observation has:

- `SELECTED_FAMILY_MISMATCH`
- `SELECTED_STATE_MISMATCH`
- `HORIZONTAL_OVERFLOW`

The wrapper remains responsible for treating a non-passed result as a failed smoke command.

## Verification

Ran:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Results:

- `verify:all` passed.
- `verify:renderer-shell` passed.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed`.
- Smoke result reported `blocking_failures: []`.
- `Get-Process electron -ErrorAction SilentlyContinue` returned no process output.

## Skipped / Parked Items

- Did not broaden the visual smoke matrix.
- Did not relabel `Source Detail`, `Neutral Seed`, support panels, or `trust-strip`.
- Did not rewrite completed current-state docs or archived handshakes.
- Did not change bridge contracts, service commands, IPC channels, schemas, payload fields, CSS compatibility names, family ids, screenshot names, or package scripts.

## Residual Risks

- The `None` suppression is intentionally narrow and only treats literal packet value `None` as absent.
- Visual smoke now blocks on any recorded horizontal overflow in the existing captured observations; this is stricter and may correctly expose future presentation issues.
- `Source Detail` and `Neutral Seed` naming remain parked per the active packet.

## Recommended Next Packet

Overseer review of M14 evidence and smoke result honesty. If accepted, choose whether the next packet should continue presentation-readout clarity, revisit parked label decisions, or close M14.
