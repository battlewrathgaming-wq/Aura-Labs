# DevHS171 - Static Starter Absence And Relay Polish

Status: Complete
Role: Dev
Date: 2026-06-01
Milestone: M46 - Static Starter Absence And Relay Polish

## Summary

Implemented the bounded static-starter polish from UIUXHS170.

The work stays inside the static starter reference and verifier. It does not touch target projects, target adapters, the current Lab renderer, Electron/preload/IPC, SmokeFlash, Pane Board, Wayfinder, the Lab service registry, React, live/private/network behavior, or bridge/runtime contracts.

## Files Changed

- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `scripts/verify-static-starter.js`
- `workspace/DevHS171-static-starter-absence-relay-polish.md`

## NO DATA vs UNAVAILABLE

Updated the examples so the two labels now carry distinct visible and textual posture:

- `no-data` uses primary line `No presentable fields` and reason-first copy: `No presentable fields: display input returned nothing the panel can show.`
- `unavailable` uses primary line `Current read unavailable` and reason-first copy: `Current read unavailable: the attempt did not provide presentable display fields.`
- CSS now gives `NO DATA` and `UNAVAILABLE` distinct state-surface cues while keeping treatment calm and non-alarm-heavy.

## Source-Owned Placeholder Examples

Added/revised source-owned examples:

- `source-no-observation`: `NO DATA` display label with source-owned visible label `No observation`, plus `no-scan` qualification.
- `source-blocked`: `UNAVAILABLE` display label with primary line `Source-owned blocked`, owner/layer qualification, and explicit boundary that blocked is not a Lab state.
- `source-degraded`: `PARTIAL` display label with primary line `Degraded source read`, owner/layer qualification, and explicit boundary that degraded is source-owned rather than a Lab state.

The renderer now shows a source-owned qualifier near the primary line when `sourceOwned` is present.

## Compact Inspection Treatment

Added a `displayPolicy.coverageInDetailOnly` option and used it on `source-degraded`.

For that compact example:

- visible meta shows age and basis
- `Coverage` / `Known fields` are omitted from the main meta lane
- `Readout Detail` still contains `Coverage` and `Known fields`
- gap/warning pills remain visible

## Demo Scaffolding vs Offered Head

Added `portable-presentation-starter/examples/static/inspect-head.html`, a no-selector inspection page that renders one selected readout directly.

Updated README and the selector page boundary note to clarify:

- the selector page is Lab demo scaffolding
- the travelling head is the Instrument Readout Panel surface, CSS/JS text-rendering pattern, example-data boundary, README safety language, and replaceable styling tokens
- target projects own local adapter mapping, source meaning, product copy, and adoption timing

## Compatibility And Boundaries Preserved

- Existing safety-floor README language remains intact.
- Existing local JSON fetch remains unchanged: `fetch('./example-readouts.json', { cache: 'no-store' })`.
- JavaScript fallback example data remains present for browsers that block local JSON fetches.
- Text is still rendered through DOM nodes and `textContent` / text nodes.
- No external URL, privileged runtime, target adapter, bridge/runtime contract, or React scaffold was introduced.

## Verifier Updates

Expanded `scripts/verify-static-starter.js` to check:

- new no-selector inspection page exists and is wired to `source-degraded`
- `NO DATA` and `UNAVAILABLE` absence labels and reason-first copy are distinct
- required source-owned examples exist: `source-no-observation`, `source-blocked`, `source-degraded`
- `no observation`, `no-scan`, `blocked`, and `degraded` are present only through `sourceOwned` examples
- `source-degraded` keeps Lab display label `PARTIAL`
- `source-degraded` uses `coverageInDetailOnly`
- the source-owned label is primary or near-primary
- existing safety-floor and unsafe-pattern checks remain active

## Verification

Ran from `F:\Projects\AURA- Lab`:

```txt
node --check portable-presentation-starter\examples\static\instrument-readout-panel.js
node --check scripts\verify-static-starter.js
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Results:

- JS syntax checks passed.
- `npm.cmd run verify:static-starter` passed: `static starter verified`.
- `npm.cmd run verify:all` passed: `all checks verified`.
- `verify:all` still reports existing warning-only protected-term discovery candidates in Lab renderer/service files; no failures.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 62/62 resource checks passed.`
- Existing warning-only Lab tripwires around `trust` / `certainty` in `src/renderer` and `src/services` remained; no failures.

## Browser / Screenshot Evidence

No browser or screenshot evidence was produced for this packet.

## Remaining Risks / Recommended Next Review

- The static starter should receive Human/Overseer visual review after this absence/source-owned polish before wider target relay.
- The fallback data duplicates the JSON example set enough to keep plain file inspection useful; if the starter becomes a packaged offer, a cleaner local data-loading convention may be worth revisiting.
- Target projects still own adapter mapping, source meaning, product language, runtime behavior, local security review, and adoption timing.
