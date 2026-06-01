# DevHS168 - Static Starter Safety Floor Corrections

Status: Complete
Role: Dev
Date: 2026-06-01
Milestone: M44 - Static Starter Safety Floor Corrections

## Summary

Applied the HS167 low-cost docs/verifier corrections so the static starter carries the M43 safety floor directly.

Scope stayed limited to:

- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- this Dev handoff

No static starter behavior was broadened.

## Files Changed

- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- `workspace/DevHS168-static-starter-safety-floor-corrections.md`

## README Safety Language Added

Added a `Safety Floor` section stating:

- the starter is display-only
- the starter is not a trust boundary
- incoming display fields should be treated as untrusted display input
- the static reference renders text as text
- it does not require privileged runtime access, preload, IPC, filesystem, clipboard, screenshot, live provider, or network dependency
- adopting the Lab head does not adopt Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path

## Verifier Checks Added

Expanded `scripts/verify-static-starter.js` to require the new README phrases:

- `display-only`
- `not a trust boundary`
- `Adopting the Lab head does not adopt Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path`

Added implementation-file checks for obvious unsafe static-starter patterns:

- `innerHTML`
- `outerHTML`
- `insertAdjacentHTML`
- `document.write`
- `eval(...)`
- `new Function`
- remote `http://` or `https://` URLs
- remote `script`, `link`, or `img` assets
- clipboard APIs
- storage APIs
- write-file terms
- screenshot/capture terms
- live-provider-ish terms such as WebSocket, EventSource, XMLHttpRequest, sendBeacon, live provider, or provider call

## Local JSON Fetch Allowance

Preserved the existing local JSON fetch as the only allowed fetch:

```txt
fetch('./example-readouts.json', { cache: 'no-store' })
```

The verifier now fails if any other `fetch(...)` call appears in the static starter JavaScript, or if the documented local JSON fetch disappears.

## Exclusions Preserved

This packet did not:

- create React scaffold work
- create target adapters
- create bridge/runtime contracts
- change target projects
- edit the current Lab renderer
- execute SmokeFlash split work
- use Pane Board, Wayfinder, service registry, preload, IPC, or Electron shell changes
- run live/private/network tests
- claim automated screenshot/browser visual evidence

## Verification

Ran from `F:\Projects\AURA- Lab`:

```txt
node --check scripts/verify-static-starter.js
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Results:

- `node --check scripts/verify-static-starter.js` passed.
- `npm.cmd run verify:static-starter` passed: `static starter verified`.
- `npm.cmd run verify:all` passed: `all checks verified`.
- `verify:all` also reported the existing warning-only protected-term discovery candidates in Lab renderer/service files; no failures.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 62/62 resource checks passed.`
- Existing warning-only Lab tripwires around `trust` / `certainty` in `src/renderer` and `src/services` remained; no failures.

## Remaining Risks / Parked Items

- This was a static docs/verifier correction, not a target security review.
- Automated browser/screenshot visual acceptance remains parked unless a future packet asks for it.
- Target projects still own adapter mapping, source meaning, runtime behavior, local security review, and adoption timing.
