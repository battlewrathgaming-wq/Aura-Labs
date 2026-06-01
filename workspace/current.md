# Current Workspace Packet

Status: Active
Updated: 2026-06-01
Owner: Overseer

## Coordination State

Active milestone: M44 - Static Starter Safety Floor Corrections
Last completed milestone: M43 / HS166 - Presentation Head Handoff Standard
Current executor: Dev
Current focus: Apply the HS167 small docs/verifier fix so the static starter carries the M43 safety floor directly.
Expected output: `workspace/DevHS168-static-starter-safety-floor-corrections.md`
Expected DevHS filename: `workspace/DevHS168-static-starter-safety-floor-corrections.md`

## Current State

M44 is open for a tiny Dev correction packet.

M43 is accepted and closed.

M42 remains accepted, closed, and manually visually reviewed.

Accepted output:

- `portable-presentation-starter/`
- `scripts/verify-static-starter.js`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`

The static starter reference is a Lab-local, framework-neutral proof:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It stays separate from the current renderer and excludes React, target adapters, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, and the Lab service registry.

Manual visual review is accepted in HS165 from Human-opened page inspection and screenshots.

No automated browser, screenshot, or Electron smoke visual acceptance is claimed. Dev reported blocked local inspection and the Human observed blank local window behavior during review; treat that as an environment/tooling caveat, not a blocker for the manual static visual baseline.

The M43 handoff standard defines the lightweight polish floor and safety floor Lab should use before deciding what head package is fit to offer.

SecEngHS167 reviewed the static starter and returned:

```txt
ready after small docs/verifier fix
```

No blocker was found. M44 exists only to apply that small README and static-verifier correction.

After M44 closes, recommended next options:

- target relay/adoption review using the M43 handoff standard
- optional React example scaffold after static reference acceptance and visual review
- static starter polish if Human wants to tune baseline spacing, source-owned placeholder wording, detail density, or visual character
- park Lab until Sense/Atlas adapter work produces useful feedback

## Source Of Intent

Accepted source of intent:

- Human direction on 2026-05-31: proceed to the stable proof point after M41.
- `workspace/StarterKitSpecHS160-portable-presentation-contents.md`
- `workspace/OverseerHS161-m41-starter-kit-spec-acceptance.md`
- `workspace/OverseerHS162-sense-starter-kit-caution-ack.md`
- `workspace/OverseerHS163-m42-static-starter-reference-runway.md`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`

Read first:

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/roadmap/m42-static-portable-presentation-starter-reference.md`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`
- `workspace/OverseerHS164-m42-static-starter-reference-acceptance.md`
- `workspace/OverseerHS165-static-starter-visual-review.md`
- `workspace/OverseerHS166-m43-presentation-head-handoff-standard.md`
- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `workspace/OverseerHS168-m44-static-starter-safety-floor-corrections-runway.md`
- `docs/roadmap/m44-static-starter-safety-floor-corrections.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `portable-presentation-starter/README.md`
- `package.json`

## Ordered Runway

1. Read `workspace/SecEngHS167-static-starter-safety-floor-review.md`.
2. Update `portable-presentation-starter/README.md` with the exact safety-floor language requested by HS167:
   - display-only
   - the HS167/M43 safety-boundary phrase
   - adoption does not imply Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path
3. Update `scripts/verify-static-starter.js` so it checks the README language and rejects obvious unsafe static-starter patterns:
   - `innerHTML`
   - `outerHTML`
   - `insertAdjacentHTML`
   - `document.write`
   - `eval`
   - `new Function`
   - remote `http://` or `https://` URLs/scripts/assets
   - clipboard APIs
   - storage APIs
   - write-file terms
   - screenshot/capture terms
   - live-provider-ish terms
4. Preserve or explicitly document the safe allowance for the existing local JSON fetch:
   - `fetch('./example-readouts.json', ...)`
5. Create `workspace/DevHS168-static-starter-safety-floor-corrections.md`.
6. Run required verification.

## Acceptance Criteria

- README directly carries the M43 safety floor language named above.
- Verifier enforces the new README phrases.
- Verifier rejects the unsafe static-starter patterns named above.
- Static starter behavior is not broadened.
- No React, target adapter, renderer export, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, service registry, live/network/private work, or target-project change is introduced.
- Required verification passes.

## Guardrails And Non-Goals

- Implement only this current packet.
- Do not claim automated screenshot/browser visual acceptance unless that evidence is actually produced.
- Do not open React scaffold work unless Human explicitly chooses that lane.
- Do not export/seed the current renderer.
- Do not create target adapters from Lab.
- Do not create bridge/runtime contracts.
- Do not promote Lab example input as target contracts.
- Preserve Lab slim/product-agnostic language.
- Preserve target-project authority over internal meaning, state semantics, adapters, and adoption.

## Stop Conditions

Stop and return to Human / Overseer direction if a future task requires:

- changes outside the README/verifier/DevHS scope
- React package creation
- renderer extraction/export
- SmokeFlash split execution
- security review execution
- target-project files or adapter decisions
- bridge/runtime contract decisions
- source-project terminology decisions
- changing accepted material/output semantics
- live/private/network work
- changing the starter behavior beyond safety-floor documentation/verifier checks

## Required Verification

- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

## Evidence

- HS163 opened M42.
- DevHS163 completed the static starter reference.
- Overseer tightened `scripts/verify-static-starter.js`.
- HS164 accepted M42.
- HS165 accepted Human manual visual review of the static starter.
- HS166 accepted M43 presentation head handoff standard.
- HS167 completed expert safety-floor review with verdict: ready after small docs/verifier fix.
- HS168 opened M44 for the small correction packet.
- Verification passed during M42 acceptance: `npm.cmd run verify:static-starter`, `npm.cmd run verify:all`, and orchestration `npm.cmd run verify:terminology`.
- Housekeeping verification after HS165 passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.
- M43 documentation verification passed: `npm.cmd run verify:all` and orchestration `npm.cmd run verify:terminology` with existing warning-only terminology tripwires.

## Handoff

Dev should create `workspace/DevHS168-static-starter-safety-floor-corrections.md`.

## Advisory Disposition

- Accepted and closed: M41 Portable Presentation Starter Kit Contents.
- Accepted: Sense starter-kit caution feedback.
- Accepted and closed: M42 Static Portable Presentation Starter Reference.
- Accepted: manual/static visual review.
- Accepted and closed: M43 Presentation Head Handoff Standard.
- Accepted advisory input: SecEngHS167 safety-floor review.
- Deferred: React scaffold implementation.
- Deferred: renderer extraction/export.
- Deferred: SmokeFlash/material-harness split execution.
- Deferred: target-project adapter work.
- Deferred: renderer/export security review.

## Residual Risks

- Automated browser/screenshot visual acceptance has not been completed for the static starter reference.
- The static starter is baseline-fit but visually plain; spacing, detail density, and source-owned placeholder treatment are deferred polish.
- Starter input examples may be mistaken for bridge contracts if future relay omits the M41/HS162 boundaries.
- Static starter is not ready for clean target relay until the HS167 README/verifier cautions are addressed or explicitly waived.
- React may become too heavy if treated as canonical instead of optional example scaffold.
