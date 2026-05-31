# EngineeringHS159 - Portable Presentation Seed Kit Readiness Advisory

Status: Advisory
Role: Engineering / Architecture advisor
Date: 2026-05-31
Requested by: Human

## Purpose

Assess Aura Lab's readiness to produce a portable presentation seed kit, including whether a lightweight optional React scaffold is the right carrier.

This note is advisory only. It does not implement code, open a Dev runway, authorize export/seeding, create a target adapter, or update `workspace/current.md`.

## Sources Read

- `AGENTS.md`
- `HUMAN.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `package.json`
- `src/renderer/`
- `src/main/`
- `scripts/verify-all.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-pane-board.js`

## Executive Assessment

Aura Lab is ready to define the contents of a portable presentation seed kit, but it is not ready to ship the current renderer as that kit.

The reusable presentation knowledge is real and coherent:

- accepted material pages exist for long text and availability treatment
- the `Instrument Readout Panel` is accepted as a composed Lab-local output
- state, freshness, basis, gaps, warnings, and availability language has project-local guardrails
- ADR 0002 cleanly preserves target-project adapter ownership

The carrier is not yet clean:

- accepted presentation output still lives inside the Lab Electron renderer
- SmokeFlash/material harness DOM and JS remain in the same renderer bundle under ADR 0001
- renderer behavior, fixture controls, workshop state, Electron smoke support, and presentation output rendering are still tightly interwoven
- verification is effective for Lab drift but too repo-specific to serve as a portable consumer contract

## Readiness By Layer

| Layer | Readiness | Notes |
| --- | --- | --- |
| Presentation grammar | High | Lab has stable language around readout, basis, freshness, availability, gaps, and warnings. |
| Material documentation | High | Accepted material pages are short, reusable, and explicitly non-contractual. |
| Composed output reference | Medium-high | `Instrument Readout Panel` is accepted and prototype-backed, but still Lab-local. |
| Clean code module | Low-medium | Implementation is monolithic inside `src/renderer/app.js`, `index.html`, and `styles.css`. |
| Export/seeding boundary | Not ready | ADR 0001 requires SmokeFlash/material harness split before renderer/head promotion. |
| Target adoption path | Advisory-ready only | ADR 0002 correctly requires target-owned adapters and local target acceptance. |
| Verification for seed consumers | Not ready | Current checks are Lab string guards and smoke support, not a portable conformance suite. |

## Strong Seed Kit Candidates

The best current seed-kit contents are documentation and neutral examples, not a direct clone of the renderer:

- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/warning-gap-edge.md`
- `workspace/display-schema-ledger.md`
- `workspace/critical/critical-terms.md`
- selected static examples derived from the accepted prototype states

The seed kit should carry:

- display intent
- slots
- state grammar
- source/freshness/basis copy rules
- neutral example payloads
- static HTML/CSS/JS reference rendering
- notes on what target adapters must preserve

It should not carry:

- SmokeFlash
- Pane Board
- Electron shell behavior
- IPC/preload bridge
- Lab fixture service registry
- target-project adapters
- source-project semantics
- target styling or product navigation doctrine

## React Scaffold Assessment

A lightweight optional React scaffold is a reasonable secondary carrier, but it should not be the canonical seed.

The canonical seed should remain framework-neutral because Aura Lab's product direction is portable HTML presentation modules for bridge-fed information. A React-first carrier would turn a display-language seed into a stack decision, which could create friction for Atlas, Sense, or future target projects.

Current repo evidence:

- `package.json` has no React, Vite, TypeScript, JSX, bundler, or component-library dependency.
- `src/renderer/` is plain static HTML/CSS/JS.
- accepted ADRs speak in terms of a clean renderer/head and material patterns, not a React package.

Recommended React posture:

- provide React as `examples/react/`, not as `seed-core/`
- make it consume the same neutral display input as the static example
- keep it adapter-free
- do not make React own Lab terminology, target terms, or source meanings
- treat it as proof that the neutral seed is easy to carry into a component stack

## Recommended Seed Kit Shape

Recommended conceptual structure:

```txt
portable-presentation-seed/
  README.md
  seed-core/
    display-input.md
    state-grammar.md
    vocabulary-rules.md
    materials/
      long-text-detail-block.md
      availability-reason-treatment.md
      warning-gap-edge.md
    outputs/
      instrument-readout-panel.md
  examples/
    static-html/
      index.html
      instrument-readout-panel.css
      instrument-readout-panel.js
      example-readouts.json
    react/
      README.md
      package.json
      src/
        InstrumentReadoutPanel.jsx
        examples.js
  verification/
    copy-boundary-checks.md
    visual-review-checklist.md
```

This keeps the durable seed framework-neutral while still allowing a React implementation to prove portability.

## Promotion Preconditions

Before Aura Lab exports, seeds, clones, or offers a runnable presentation head to another project:

1. Split SmokeFlash/material harness out of the offered renderer bundle, per ADR 0001.
2. Extract the Instrument Readout Panel into a clean static reference that does not depend on Lab fixture controls.
3. Define a small neutral display input shape for examples, explicitly not a bridge/runtime contract.
4. Keep target adapter guidance advisory and target-owned, per ADR 0002.
5. Replace repo-specific renderer string assertions with a small seed-facing review checklist or optional conformance checks.
6. Confirm that source-owned placeholder cases remain owner/layer-qualified.

## Risks

- Exporting the current renderer directly would leak SmokeFlash/workshop structure into the seed.
- A React-first kit could imply a shared Aura UI stack where only a presentation grammar was intended.
- Example payloads could be mistaken for bridge/runtime contracts unless marked as display-input examples.
- Target projects may treat Lab state labels as source enums unless the seed repeats the presentation-only boundary.
- Verification could become overbuilt if Lab tries to ship the current smoke matrix as the consumer test surface.

## Recommendation

Open a split/export readiness review before any implementation packet for a seed kit.

The likely next architectural step is not "make a React scaffold" by itself. It is:

```txt
define neutral seed contents -> split Lab-only harness -> extract clean static reference -> optionally add React example
```

React should be accepted only as an optional scaffold after the neutral seed shape is stable.

## Suggested Overseer Disposition

Recommended disposition: accept as advisory input.

Possible next Overseer choices:

- park until a target project asks for adoption
- open a bounded seed-kit readiness review
- open a SmokeFlash split readiness packet
- open a static neutral reference extraction packet

Do not open a Dev runway directly from this advisory without Human / Overseer direction, because export/seeding touches ADR 0001 and ADR 0002 boundaries.
