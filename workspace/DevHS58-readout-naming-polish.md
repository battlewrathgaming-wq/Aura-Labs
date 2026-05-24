# DevHS58 - Readout Naming Polish

Status: Complete
Role: Dev
Date: 2026-05-24

## Request Received

Execute only the M16 Dev runway: apply the two accepted visible naming changes from the post-M14 UI/UX review, preserve internals, update directly affected verification, run local verification, run the shared advisory terminology verifier, and record evidence.

## Files Changed

- `src/renderer/index.html`
- `src/services/serviceRegistry.js`
- `scripts/verify-lab-vocabulary.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `workspace/current.md`
- `workspace/DevHS58-readout-naming-polish.md`

## Visible Naming Changes

- `Source Detail` visible drawer title changed to `Readout Detail`.
- Visible `Neutral Seed` family label changed to `Neutral Sample`.
- Mode note will now render `Neutral Sample; ...` because it uses the visible family label.

## Preserved Internals

Preserved by design:

- `neutral-seed` family id and payload value.
- Source-detail DOM and smoke compatibility ids: `source-detail-drawer`, `source-detail-state`, and `source-detail-list`.
- Smoke observation fields: `source_drawer_visible` and `source_detail_state`.
- Source fields such as `source_labels` and `sources`.
- Screenshot names, CSS compatibility names, service command names, IPC channels, and schemas.

## Verification

Ran:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
```

Results:

- `verify:all` passed.
- `verify:renderer-shell` passed.
- `verify:vocabulary` passed.

## Shared Verifier Result / Remaining Warnings

Attempted:

```powershell
npm run verify:terminology
```

Result: blocked by PowerShell execution policy for `npm.ps1`, not by terminology verification.

Reran:

```powershell
npm.cmd run verify:terminology
```

in:

```txt
F:\Projects\Docs\Aura-Project-Orchestration
```

Result:

- `Terminology verification: 46/46 resource checks passed.`
- 27 advisory warnings remained.

Remaining warnings were not fixed because they are outside the M16 visible-label scope. They include active-packet references to the old `Neutral Seed` label, existing compatibility/internal `trust-strip` and `certainty` names/copy paths, and overview parked-question references to `Core`.

## Skipped / Parked Items

- Electron visual smoke was skipped because M16 changed visible labels only, did not touch CSS/layout, and the packet did not require screenshot confirmation.
- Did not rename `neutral-seed` internals.
- Did not rename source fields, source-detail compatibility ids, smoke screenshot names, package scripts, or IPC/service names.
- Did not relabel support panels.
- Did not edit completed current-state docs, archived/completed handshakes, Atlas/Sense terms, or shared doctrine.

## Residual Risks

- Shared terminology verifier still warns on compatibility names and current-packet/advisory references; these are evidence for future review, not M16 failures.
- Existing `source-detail-*` ids remain intentionally for compatibility, so future agents should not treat those ids as visible copy drift.
- `Source paths` remains inside the drawer because M16 accepted only the drawer title rename.

## Recommended Next Packet

Overseer review and acceptance of M16. If accepted, either park Aura Lab again or choose a new bounded presentation packet; support-panel wording and deeper compatibility-name cleanup should remain separate decisions.
