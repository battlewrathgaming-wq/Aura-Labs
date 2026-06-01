# M44 - Static Starter Safety Floor Corrections

Status: Active
Owner: Aura Lab Overseer

## Purpose

Apply the small documentation and verifier corrections recommended by the SecEng HS167 safety-floor review.

M44 should make the static starter carry the M43 safety floor directly in its package and verifier, so future target relay can inspect the reference without cross-loading every Lab posture document first.

## Outcome

The static portable presentation starter remains framework-neutral and display-only, with clearer handoff safety language and low-cost static verifier guardrails against obvious unsafe patterns.

## In Scope

- update `portable-presentation-starter/README.md`
- update `scripts/verify-static-starter.js`
- keep the existing static starter behavior intact
- preserve local JSON fallback behavior
- add static-pattern checks for unsafe HTML injection and dynamic execution
- add static-pattern checks for remote assets/scripts/network URLs
- add static-pattern checks for clipboard/storage/write/capture/live-provider terms
- require README language for `display-only`, `not a trust boundary`, and adoption-boundary language
- create the expected DevHS handoff

## Out Of Scope

- React scaffold
- target adapters
- bridge/runtime contracts
- source-project meaning
- renderer export/seeding
- current Lab renderer changes
- SmokeFlash, Pane Board, Wayfinder, or service-registry changes
- Electron smoke unless Dev finds a direct reason
- automated browser/screenshot evidence
- target-project files
- package installs

## Acceptance Criteria

M44 is complete when:

- the starter README says the starter is display-only and not a trust boundary
- the starter README says adoption does not imply Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path
- the static verifier checks those README phrases
- the static verifier rejects obvious unsafe HTML injection APIs in starter files
- the static verifier rejects dynamic execution patterns in starter files
- the static verifier rejects remote URL/script/asset patterns in starter files
- the static verifier rejects clipboard/storage/write/capture/live-provider patterns in starter files
- the verifier preserves the exact local `fetch('./example-readouts.json', ...)` allowance or otherwise documents why it remains safe
- static starter behavior is not broadened
- verification passes

## Verification Expectation

Minimum:

- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

Do not claim automated browser/screenshot evidence unless a future packet explicitly asks for it and the evidence is actually produced.

## Dependencies

- `workspace/SecEngHS167-static-starter-safety-floor-review.md`
- `docs/statements/presentation-head-handoff-standard.md`
- `docs/roadmap/m43-presentation-head-handoff-standard.md`
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
