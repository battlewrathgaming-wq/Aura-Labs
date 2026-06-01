# OverseerHS168 - M44 Static Starter Safety Floor Corrections Runway

Status: Open
Role: Aura Lab Overseer
Date: 2026-06-01

## Request

Review landed in `workspace/SecEngHS167-static-starter-safety-floor-review.md`.

Verdict:

```txt
ready after small docs/verifier fix
```

No blocker was found.

## Decision

Accept SecEngHS167 as expert advisory input and open M44 for a tiny Dev correction packet.

This is not a broad security review and not a target handoff. It is the small hardening pass that lets the static starter package carry the M43 safety floor by itself.

## Dev Task

Implement the HS167 low-cost docs/verifier corrections:

- update `portable-presentation-starter/README.md`
- update `scripts/verify-static-starter.js`
- create `workspace/DevHS168-static-starter-safety-floor-corrections.md`

## Required Behavior

README should state:

- the starter is display-only
- the starter is not a trust boundary
- adopting the Lab head does not adopt Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path

Verifier should reject obvious static-starter violations:

- unsafe HTML injection APIs such as `innerHTML`, `outerHTML`, `insertAdjacentHTML`, and `document.write`
- dynamic execution such as `eval` and `new Function`
- remote `http://` or `https://` URLs, scripts, or assets
- clipboard APIs
- storage APIs
- write-file terms
- screenshot/capture terms
- live-provider-ish terms

Verifier may explicitly allow only the known local JSON fetch:

```txt
fetch('./example-readouts.json', ...)
```

## Guardrails

- Do not change target projects.
- Do not create a target adapter.
- Do not create bridge/runtime contracts.
- Do not change static starter visual behavior unless directly required by the verifier/doc fix.
- Do not add React.
- Do not edit current Lab renderer, SmokeFlash, Pane Board, Wayfinder, service registry, preload, IPC, or Electron shell.
- Do not run live/private/network tests.
- Do not claim automated browser/screenshot evidence.

## Verification

Run:

- `npm.cmd run verify:static-starter`
- `npm.cmd run verify:all`
- `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`

## Expected Handoff

Create:

```txt
workspace/DevHS168-static-starter-safety-floor-corrections.md
```

Include:

- files changed
- README safety language added
- verifier checks added
- local JSON fetch allowance decision
- verification commands and results
- any remaining risks or parked items
