# DevHS68 - Instrument Status Band Prototype

Status: Complete
Role: Dev
Date: 2026-05-25

## Request Received

Execute the M19 Dev runway only: build one bounded visible Instrument Status Band prototype from the existing Lab renderer/service fixture patterns, use `UIDevHS69` as advisory input, cover the accepted readout states, preserve compatibility names, run required verification, run Electron smoke because layout/CSS changed, run the shared advisory terminology check, update evidence, and leave this handoff.

## Files Changed

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/services/serviceRegistry.js`
- `src/main/main.js`
- `scripts/verify-lab-vocabulary.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `workspace/current.md`
- `workspace/DevHS68-instrument-status-band-prototype.md`

## Visible Module Behavior

The existing `#state-readout` surface is now the Instrument Status Band prototype rather than a second status surface.

The band keeps visible `Bridge State Readout` and adds compact closed-band slots for:

- state label
- primary value/status
- state light
- inset pips/sweep
- readout age
- source coverage
- readout basis
- gap/warning/availability marker

The visual treatment remains calm and graphite/instrument-like, with a narrow state edge, inset pips, non-color-only state text, restrained current/aged/partial/fallback/unavailable/no-data treatments, and reduced-motion preservation for existing motion.

## Fixture / Data Shape Used

The band derives primary value, basis, age, source coverage, gaps, and warnings from existing briefing / Neutral Sample fixture payloads.

One narrow Lab-local `fallback` review state was added to the existing fixture mode list. It is only a presentation review fixture for exercising `FALLBACK`; it does not define a bridge contract, target adapter, or source-project meaning.

## States Covered

Covered in renderer/service behavior:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

Electron smoke covered the existing matrix without broadening it. Fallback coverage is verified through service and renderer expectations, not a new smoke matrix.

## Detail Reveal Behavior

`Readout Detail` remains the compact reveal.

It now includes the band marker along with existing detail rows for readout age, state summary, readout basis, known fields, source paths, gaps, warnings, fallback notes, unavailable notes, and no-data notes.

## Preserved Internals

Preserved intentionally:

- `#state-readout`
- `#source-detail-drawer`
- `source-detail-*` ids and CSS compatibility names
- `neutral-seed`
- source fields such as `source_labels` and `sources`
- service commands and IPC channels
- payload field names
- screenshot names
- existing visual smoke matrix names

## Verification

Ran:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Results:

- `verify:vocabulary` passed.
- `verify:renderer-shell` passed.
- `verify:all` passed.
- `smoke:electron` passed.
- Smoke result: `status: passed`, `blocking_failures: []`.
- Smoke observations included new `band_primary_value`, `readout_basis`, and `band_marker` fields.
- No Electron process remained after smoke.

## Shared Verifier Result / Remaining Warnings

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing compatibility/internal `trust-strip` and `certainty` surfaces.

Local vocabulary verification reported 31 warning-only protected-term discovery candidates. These remain warning-only and include existing source/sample/state collision candidates plus new Instrument Status Band review wording such as `Band marker`.

## Skipped / Parked Items

- Did not build a full Ship/System face.
- Did not add Atlas or Sense adapters.
- Did not define a durable bridge contract.
- Did not broaden visual smoke matrices.
- Did not rename IPC channels, service commands, payload fields, screenshot names, or compatibility ids.
- Did not add a theme system, color editor, external UI framework, sound, or broad reference-library feature.

## Residual Risks

- The fallback review state is intentionally Lab-local fixture data; future agents should not treat it as bridge contract shape.
- The shared advisory terminology warnings remain for compatibility/internal names outside M19 scope.
- Local warning-only protected-term candidates need Overseer judgment if Lab wants to reduce future review noise.
- Electron smoke does not include fallback captures because the packet forbids broad smoke expansion; fallback is covered by service/renderer checks.

## Recommended Next Packet

Overseer review and acceptance of M19. If accepted, either park Aura Lab for target-project review of the pattern or open a separate bounded packet for visual refinement, warning-candidate triage, or a next presentation primitive.
