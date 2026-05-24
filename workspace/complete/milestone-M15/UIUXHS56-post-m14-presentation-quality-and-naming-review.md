# UIUXHS56: Post-M14 Presentation Quality And Naming Review

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Milestone: M15 - Post-M14 Presentation Quality And Naming Review
Sequence: HS56
Source packet: workspace/current.md
Status: Advisory review, pending Human / Overseer acceptance

## Request Received

Review the stabilized Aura Lab presentation surface after M13/M14 terminology and smoke-honesty work.

Advise on:

- whether `Source Detail` should remain or move to a lower-authority label
- whether visible `Neutral Seed` should remain or move to a less Core/scaffold-adjacent label
- whether `Bridge Diagnostics`, `Registered Services`, `Runtime`, and `Commands` are acceptably secondary
- whether Bridge State Readout labels and source/basis/freshness treatment remain clear
- whether the next Lab move should be visual refinement, a new feature prototype, a small naming pass, or no immediate Lab work

This review is advisory only. It does not implement code, rewrite `workspace/current.md`, decide Atlas/Sense meaning, create shared doctrine, define a bridge contract, or run Electron smoke.

## Files / Evidence Reviewed

Authority and current state:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\Lab-Terminology-Boundary-Requirements-2026-05-24.md`

Accepted M13/M14 artifacts:

- `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`
- `workspace/DevHS50-lab-presentation-vocabulary-replacement.md`
- `workspace/DevHS52-lab-vocabulary-guardrail-verification.md`
- `workspace/DevHS54-readout-basis-and-smoke-honesty.md`
- `workspace/OverseerHS55-m14-acceptance.md`

Implementation surface inspected:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/services/serviceRegistry.js`

Generated evidence inspected:

- `.tmp/electron-visual-smoke/visual-smoke-result.json`
- `.tmp/electron-visual-smoke/family-briefing-state-normal.png`
- `.tmp/electron-visual-smoke/family-briefing-state-stale.png`
- `.tmp/electron-visual-smoke/family-neutral-seed-state-normal.png`
- `.tmp/electron-visual-smoke/family-neutral-seed-state-long-text-narrow.png`

Search used:

- `rg` over `src`, `workspace`, `docs`, and `scripts` for the parked naming terms and Bridge State Readout labels.

No new runtime verification was run. Existing generated smoke evidence was reviewed only.

## Current-State Understanding

Aura Lab is now past M14. M00 through M14 are accepted.

The current accepted presentation feature is `Bridge State Readout`, which presents bridge-fed state using neutral display language and a physical/HUD-like surface treatment. The accepted default labels are:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

M13 replaced authority-heavy Lab default copy with slimmer readout/basis language. M14 corrected stale readout basis, suppressed absent handoff values such as literal `None`, and made visual smoke fail honestly on selection mismatch or horizontal overflow.

The current packet is not a Dev packet. The right output is UI/UX guidance for the remaining parked naming/display decisions.

## Presentation Quality Findings

The current surface is substantially clearer than the earlier proof-oriented versions.

What is working:

- The Bridge State Readout is visually strong and near the primary reading path.
- The physical treatment helps the UI feel like an instrument surface rather than an enterprise dashboard.
- `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, and `NO DATA` read as display states without tactical/combat drift.
- Readout age, readout basis, source coverage, gaps, warnings, and known fields form a coherent presentation model.
- The Source Detail drawer is useful because it keeps first-read complexity out of the primary surface.
- Existing smoke evidence reports `status: passed`, `blocking_failures: []`, no horizontal overflow, and representative narrow captures.
- Diagnostics are visually secondary in the inspected screenshots.

Remaining presentation issues:

- There are two state systems visible: the top status chip (`Partial`, `Stale`, `Populated`, etc.) and the Bridge State Readout label (`PARTIAL`, `AGED`, `CURRENT`, etc.). This is understandable, but the top chip can compete with the readout as the main state authority.
- `Source Detail` is useful but still slightly too authority-facing for a Lab-owned display drawer.
- `Neutral Seed` remains the most obvious terminology drift risk because `Seed` can still imply Core/scaffold ownership to future readers.
- `Bridge Diagnostics`, `Registered Services`, `Runtime`, and `Commands` are secondary enough for Lab review, but their wording still sounds like support infrastructure rather than polished presentation.
- The current normal Briefing smoke capture renders as `PARTIAL` because the active packet is waiting on Human / Overseer direction and lacks some fields. That is honest, but it makes normal-mode visual review look less like a clean-current state.

## Naming Recommendations

### Source Detail

Recommendation: rename visible `Source Detail` to:

```txt
Readout Detail
```

Reason:

`Source Detail` is currently acceptable, but `Readout Detail` better matches Lab-owned display language. The drawer contains readout age, state summary, readout basis, known fields, source paths, gaps, warnings, and fallback notes. It is not only source detail, and the word `source` can imply more authority than the UI owns.

Recommended treatment:

- Drawer title: `Readout Detail`
- Keep inner label: `Readout basis`
- Consider changing `Source paths` later to `Basis paths` or `Display paths`
- Keep `Source coverage` only if it remains clearly quantitative, such as `3/3 sources`

Do not rename payload fields, service fields, or internal identifiers as part of a naming-only pass.

### Neutral Seed

Recommendation: rename the visible family label:

```txt
Neutral Seed
```

to:

```txt
Neutral Sample
```

Reason:

`Neutral Seed` has been carefully bounded as Lab-local, but the visible word `Seed` still creates avoidable Core/scaffold ownership drift. `Neutral Sample` matches the current content better: sample slots, sample data, fixture-backed review, generic display material.

`Neutral Surface` is a reasonable alternative, but it sounds more like a reusable UI surface than fixture material. `Neutral Sample` is plainer and safer for this stage.

Recommended treatment:

- Visible family label: `Neutral Sample`
- Mode note can say `Neutral Sample; ...`
- Keep internal id `neutral-seed`
- Keep CSS/data compatibility names unless a future implementation packet explicitly permits wider cleanup
- Keep documentation clear that this is Lab-local fixture material, not Core doctrine

### Support Panels

Recommendation: keep support panels secondary for now, but soften them in a later visual refinement pass.

Current labels:

- `Bridge Diagnostics`
- `Registered Services`
- `Runtime`
- `Commands`

UI/UX disposition:

- Acceptable now because they are visually below the main readout and help Lab review.
- Not ideal as durable presentation language because they pull the page toward backend console vocabulary.

Future candidate labels:

- `Bridge Diagnostics` -> `Bridge Support`
- `Registered Services` -> `Service Availability`
- `Runtime` -> `Runtime state` or keep `Runtime`
- `Commands` -> `Available commands` or keep `Commands` if this remains strictly Lab review

This should be lower priority than `Source Detail` and `Neutral Seed`.

## Parked Decision Recommendations

Recommended now:

- Open a small naming pass for visible `Source Detail` and `Neutral Seed`.
- Keep support panel wording parked unless Human / Overseer wants a broader visual refinement pass.

Keep parked:

- `trust-strip` internal compatibility naming.
- Completed current-state docs vocabulary rewrite.
- Source-owned Atlas/Sense terminology decisions.
- Broad visual-smoke matrix expansion.
- Fixture taxonomy expansion.
- Core-owned transfer prompt.
- New presentation feature prototype.

Parking rationale:

The current surface is stable enough that a small naming pass gives the best clarity return. A new presentation feature should wait until the visible naming layer is clean and settled.

## Risks / Blockers

No blocker prevents acceptance of the current UI as a stabilized Lab presentation surface.

Risks:

- If `Source Detail` remains, future readers may continue to treat source language as authority language unless the layer is always qualified.
- If `Neutral Seed` remains visible, future agents may keep re-litigating Core/scaffold ownership risk.
- If the support panels are promoted visually in future work, they may pull Aura Lab back toward diagnostics-as-product.
- The current smoke evidence is generated evidence, not a fresh manual GUI review. It appears current after M14 and reports no blocking failures, but this packet did not rerun Electron.
- Fallback remains guarded but not fully exercised by current accepted fixtures.

## Recommended Next Packet

Recommended next packet:

```txt
M16 - Readout Naming Polish
```

Recommended scope:

- Rename visible `Source Detail` to `Readout Detail`.
- Rename visible `Neutral Seed` to `Neutral Sample`.
- Update only directly affected static/service verification expectations and vocabulary allowlist entries.
- Keep internal ids, CSS compatibility names, payload fields, screenshot names, and completed docs unchanged.
- Do not broaden smoke coverage.
- Run minimum verification only.

Recommended verification for that future Dev packet:

```powershell
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Run `npm.cmd run smoke:electron` only if the implementation touches layout/CSS or the reviewer wants screenshot confirmation after the visible label changes.

Alternative if Human / Overseer wants no immediate work:

Park Aura Lab after M15 with the naming recommendations accepted as advisory. The current surface is clear enough for future target-owned review, provided the parked naming risks are documented.
