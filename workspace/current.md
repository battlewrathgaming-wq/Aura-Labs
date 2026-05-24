# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M16 - Readout Naming Polish
Last completed milestone: M15 - Post-M14 Presentation Quality And Naming Review
Current executor: Dev
Current focus: apply two accepted visible naming changes from the post-M14 UI/UX review
Expected DevHS filename: `workspace/DevHS58-readout-naming-polish.md`

## Purpose

M15 reviewed the stabilized post-M14 presentation surface and recommended a small naming pass before broader Lab work.

This packet accepts only two visible naming changes:

- `Source Detail` -> `Readout Detail`
- visible `Neutral Seed` -> `Neutral Sample`

This is a narrow polish packet. It is not a refactor, fixture taxonomy change, smoke expansion, source-owned terminology decision, or visual redesign.

## Source Of Intent

Accepted artifacts:

- `workspace/UIUXHS56-post-m14-presentation-quality-and-naming-review.md`
- `workspace/OverseerHS57-m15-acceptance-m16-runway.md`
- `workspace/DevHS54-readout-basis-and-smoke-honesty.md`
- `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`
- `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`

Accepted / active references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

## Accepted Scope

Apply only:

1. Rename visible `Source Detail` copy to `Readout Detail`.
2. Rename visible `Neutral Seed` copy to `Neutral Sample`.
3. Update directly affected verifier expectations and vocabulary guardrail copy-surface entries.
4. Create `workspace/DevHS58-readout-naming-polish.md`.

Expected implementation files if the UI/UX inventory remains accurate:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/services/serviceRegistry.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `scripts/verify-lab-vocabulary.js`
- `workspace/DevHS58-readout-naming-polish.md`

## Ordered Runway

1. Read this packet and `workspace/UIUXHS56-post-m14-presentation-quality-and-naming-review.md`.
2. Change only visible copy for `Source Detail` and `Neutral Seed`.
3. Preserve internal ids, payload fields, CSS/data compatibility names, screenshot names, service command names, and completed docs.
4. Update directly affected verification expectations.
5. Run required verification.
6. Create the Dev handoff.

## Guardrails

- Do not rename `neutral-seed` ids, CSS selectors, data attributes, screenshot names, or payload values.
- Do not rename source fields such as `source_labels`, `sources`, `source_drawer_visible`, or internal source/basis fields.
- Do not relabel support panels such as `Bridge Diagnostics`, `Registered Services`, `Runtime`, or `Commands`.
- Do not edit completed current-state docs or archived/completed handshakes.
- Do not broaden visual smoke coverage.
- Do not change Atlas/Sense source-owned terms.
- Do not create shared Aura doctrine.
- Do not run live network, private-state, destructive, or cross-project actions.

## Stop Conditions

Stop and hand back to Overseer if:

- The visible naming change requires internal id or payload changes.
- Verification cannot distinguish visible `Neutral Sample` from internal `neutral-seed`.
- The vocabulary guardrail cannot be updated without weakening source-owned/scaffold protections.
- The work expands into support panel relabeling, visual redesign, or smoke matrix changes.

## Verification

Required:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Run the vocabulary check directly if useful:

```powershell
npm.cmd run verify:vocabulary
```

Electron visual smoke is not required unless layout/CSS changes create a rendering risk or Human / Overseer asks for screenshot confirmation.

## Evidence

Record:

- Files changed.
- Visible labels changed.
- Internal ids/fields intentionally preserved.
- Verification expectations updated.
- Commands run and results.
- Whether Electron smoke was skipped or run, with reason.

## Dev Handoff

In `workspace/DevHS58-readout-naming-polish.md`, include:

- Request Received
- Files changed
- Visible naming changes
- Preserved internals
- Verification
- Skipped / parked items
- Residual risks
- Recommended next packet
