# DevHS177 - Sense Trial Glass Package

Status: Complete
Role: Dev
Date: 2026-06-01
Milestone: M49 - Sense Trial Glass Package

## Summary

Created the small Lab-local static package for a local Sense trial of the selected Lab glass.

Package:

```txt
portable-presentation-starter/packages/sense-trial-glass/
```

This is a display-only trial bundle. It is not Sense adoption, a Sense mapper, a target adapter, runtime integration, bridge/runtime contract, package-manager publication, or product-fitness claim.

## Files Changed

- `portable-presentation-starter/packages/sense-trial-glass/README.md`
- `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md`
- `portable-presentation-starter/packages/sense-trial-glass/index.html`
- `portable-presentation-starter/packages/sense-trial-glass/inspect-head.html`
- `portable-presentation-starter/packages/sense-trial-glass/instrument-readout-panel.css`
- `portable-presentation-starter/packages/sense-trial-glass/instrument-readout-panel.js`
- `portable-presentation-starter/packages/sense-trial-glass/example-readouts.json`
- `portable-presentation-starter/README.md`
- `scripts/verify-static-starter.js`
- `workspace/DevHS177-sense-trial-glass-package.md`

## Package Contents

The package contains the minimum static files needed for local inspection:

- `README.md` - Sense trial package boundary and inspection notes.
- `MANIFEST.md` - package contents and selected-material note.
- `index.html` - Lab selector inspection page for multiple example states.
- `inspect-head.html` - no-selector inspection page for the travelling glass surface.
- `instrument-readout-panel.css` - static styles, state treatment, narrow behavior, and long-token containment.
- `instrument-readout-panel.js` - static DOM/text rendering behavior and detail reveal.
- `example-readouts.json` - Lab display example input for inspection only.

## Selected Materials Named

Selected for local Sense trial:

- Instrument Readout Panel Glass
- Availability Reason Treatment
- Long Text Detail Block
- Warning / Gap Edge

Optional inspiration:

- Expandable Status Card

The optional card material is not added as a new component. It is represented only where the current readout/detail shape already behaves like a compact surface with attached detail.

## Boundary Language Included

The package README and manifest state:

- This package is a Lab presentation bundle for local Sense trial.
- It is display-only.
- Sense owns mapper behavior, source meaning, runtime behavior, product copy, review, and adoption.
- Lab example data is not Sense data.
- Lab display labels are not Sense state enums.
- The selector page is demo scaffolding, not Sense product UI.

The package also states it does not require Electron, IPC, preload, service registry, SmokeFlash, Pane Board, Wayfinder, or target project files.

## Verifier Update

Updated `scripts/verify-static-starter.js` to require:

- the Sense package directory files
- package README boundary phrases
- package manifest contents
- selected material names
- copied static HTML/CSS/JS/JSON glass behavior
- copied source-owned trial examples

The existing static safety checks also scan the copied package implementation files.

## Verification

Ran from `F:\Projects\AURA- Lab`:

```txt
node --check scripts\verify-static-starter.js
node --check portable-presentation-starter\packages\sense-trial-glass\instrument-readout-panel.js
npm.cmd run verify:static-starter
npm.cmd run verify:all
```

Results:

- JS syntax checks passed.
- `npm.cmd run verify:static-starter` passed: `static starter verified`.
- `npm.cmd run verify:all` passed: `all checks verified`.
- Existing warning-only protected-term discovery candidates in Lab renderer/service files remained; no failures.

Ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```txt
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 62/62 resource checks passed.`
- Existing warning-only Lab tripwires around `trust` / `certainty` in `src/renderer` and `src/services` remained; no failures.

## Boundaries Preserved

This packet did not:

- edit Sense or any target project
- create a Sense mapper
- create target adapters
- define Sense source meaning
- rename Sense states
- create bridge/runtime contracts
- create a React scaffold
- change Electron/preload/IPC
- change current Lab renderer files
- touch SmokeFlash, Pane Board, Wayfinder, or service registry
- invent new glass/material behavior
- claim Sense adoption or product fitness

## Browser / Screenshot Evidence

No browser, screenshot, Electron, live, private, network, or target-project testing was run or claimed.

## Remaining Risks / Next Recommendation

- Sense should treat the package as local trial material only and keep mapper/source/runtime/adoption decisions in Sense-owned work.
- The package copies static files from the accepted starter; if target pressure later asks for reusable package mechanics, open a separate package/export specification rather than expanding this trial bundle.
