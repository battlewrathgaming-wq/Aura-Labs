# DevHS163 - Static Portable Presentation Starter Reference

Status: Complete
Role: Dev
Date: 2026-05-31
Milestone: M42 - Static Portable Presentation Starter Reference

## Summary

Built the first Lab-local static portable presentation starter reference.

The reference lives outside the current renderer and demonstrates:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It is plain HTML/CSS/JS, uses neutral display example data, and keeps the M41/HS162 boundaries visible.

## Files Changed

- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.css`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `scripts/verify-static-starter.js`
- `scripts/verify-all.js`
- `package.json`
- `workspace/DevHS163-static-portable-presentation-starter-reference.md`

## Static Reference Contents

The starter includes:

- README with starter scope, exclusions, target-adapter/adoption boundary, Sense caution preservation, and React deferral.
- Neutral example data for one Instrument Readout Panel family.
- Multiple display example states rendered one selected panel at a time:
  - `CURRENT`
  - `UPDATING`
  - `AGED`
  - `PARTIAL`
  - `UNAVAILABLE`
  - `FALLBACK`
  - `NO DATA`
  - qualified source-owned placeholder example
- Basis, age/freshness, availability, coverage, gaps, warnings, fallback basis, detail rows, and long-token detail content.
- `sourceOwned` qualification for `blocked`, `no-scan`, and `degraded`.
- One `Readout Detail` reveal.
- Narrow-friendly stacking, long-token wrapping, non-color-only state markers, and reduced-motion handling.

## How To Inspect

Open this file in a browser:

```txt
F:\Projects\AURA- Lab\portable-presentation-starter\examples\static\index.html
```

The page attempts to load:

```txt
portable-presentation-starter/examples/static/example-readouts.json
```

It also carries an identical JavaScript fallback so the reference still renders when a browser blocks local `file://` JSON fetches.

The in-app Browser blocked both direct `file://` inspection and a temporary `localhost` static-server inspection during this Dev pass. No browser screenshot evidence is claimed for this handoff.

## Verification

Ran from `F:\Projects\AURA- Lab`:

```txt
node --check scripts/verify-static-starter.js
node --check portable-presentation-starter\examples\static\instrument-readout-panel.js
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Results:

- JS syntax checks passed.
- `verify:static-starter` passed: `static starter verified`.
- `verify:all` passed: `all checks verified`.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 62/62 resource checks passed.`
- Warning-only output remained for existing Lab renderer/service terminology tripwires around `trust` / `certainty`; no failures.

## Added Static Starter Verifier

Added:

```txt
scripts/verify-static-starter.js
```

And wired it into:

```txt
npm.cmd run verify:all
```

The verifier checks required starter files, required display labels, source-owned placeholder qualification, detail/reveal markers, wrapping/narrow/reduced-motion CSS cues, and absence of excluded implementation wiring in static implementation files.

## Exclusions Preserved

This packet did not:

- create a React scaffold
- export, seed, or copy the current renderer wholesale
- execute SmokeFlash split work
- use Pane Board or Wayfinder
- use Electron, preload, or IPC
- use the Lab service registry or fixture selector controls
- edit Atlas or Sense
- create target adapters
- create bridge/runtime contracts
- treat Lab example input as a target contract

## Remaining Risks / Recommendations

- The static reference should receive Overseer/Human visual review before any React example or target relay.
- The fallback data duplicates `example-readouts.json` so plain file opening remains inspectable; if the starter later becomes a package, consider a tiny local server or build-free data loading convention to remove duplication.
- The example input boundary is visible in README and data, but target-facing relay should continue to emphasize that it is display example input only.
