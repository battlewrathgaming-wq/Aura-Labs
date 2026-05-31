# StarterKitSpecHS160 - Portable Presentation Starter Kit Contents

Status: Advisory specification
Role: Specialist / Engineering Architecture
Date: 2026-05-31
Milestone: M41 - Portable Presentation Starter Kit Contents

## Purpose

Define what Aura Lab must solve before stepping into implementation of a portable presentation starter kit.

This specification is not implementation authority. It does not extract renderer code, split SmokeFlash, create a React scaffold, create target adapters, or define a shared bridge/runtime contract.

The starter kit should help a target project begin from accepted Lab presentation grammar instead of rebuilding the same display decisions from zero.

## Problem The Starter Kit Solves

Target projects may need a clean way to render bridge-fed information with calm, readable source, freshness, basis, state, gaps, warnings, and availability treatment.

The starter kit should provide a small, portable presentation frame for one readout:

```txt
target-owned adapter output -> neutral starter input example -> presentation frame
```

The kit solves the presentation starting point only. It does not solve source meaning, adapter ownership, target navigation, runtime transport, or target product acceptance.

## Non-Problem

The starter kit is not:

- a target renderer
- an Atlas/Sense adapter
- a bridge schema
- a runtime payload contract
- a React product app
- a shared Aura UI doctrine layer
- a SmokeFlash or Pane Board export
- a replacement for target-project review and acceptance

## Starter Kit Contents

### 1. Starter Readme

Purpose:

- explain the starter as a neutral portable presentation reference
- name Lab's Bridge -> Interface presentation scope
- repeat that target projects own adapters and adoption
- list exact exclusions
- point to accepted material/output references

Must solve before implementation:

- decide whether the name is `starter kit`, `seed kit`, or `portable presentation starter`
- decide whether the kit is a folder inside Lab first or a separately copied package later
- decide whether the first kit is meant for Human relay only or direct target-project review

Recommended default:

Use `portable presentation starter` in copy. Keep any first implementation Lab-local until reviewed.

### 2. Neutral Display Input Example Shape

Purpose:

- give static examples a stable enough shape to render
- help target-owned adapters understand what kind of display-ready information the presentation frame expects
- avoid promoting Lab fixture data or source-project bridge output as a contract

This must be called an example shape, not a bridge contract.

Smallest useful example:

```txt
readout:
  id
  label
  state
  primaryValue
  ageLabel
  basis
  availability
  coverage
  gaps
  warnings
  detail
  sourceOwned
```

Field intent:

| Field | Purpose | Boundary |
| --- | --- | --- |
| `id` | Local example identity. | Not a target id requirement. |
| `label` | Human-facing readout label. | May be target-owned text after adapter work. |
| `state` | Lab presentation state label or mapped display state. | Not a shared source enum. |
| `primaryValue` | Main display value or empty when unavailable. | Must not fake unavailable values. |
| `ageLabel` | Display freshness copy. | Not a universal freshness model. |
| `basis` | What the visible readout is based on. | Must preserve source meaning. |
| `availability` | One-line availability reason when needed. | Must distinguish no data, unavailable, fallback, blocked, failed, aged. |
| `coverage` | Known fields or display coverage cue. | Must not imply source of truth. |
| `gaps` | Missing or limited display basis. | Not proof of upstream absence. |
| `warnings` | Display cautions. | Not automatically source-project errors. |
| `detail` | Rows or long text for Readout Detail. | Long copy belongs behind reveal. |
| `sourceOwned` | Optional owner/layer qualification for source-owned terms. | Required for blocked, degraded, no-scan, and similar placeholders. |

Must solve before implementation:

- decide the exact example-field spelling
- decide whether `state` is a string or object with label/tone/reason
- decide whether `availability`, `gaps`, and `warnings` are arrays, rows, or plain strings in the static reference
- decide how source-owned placeholder qualification is represented without implying target-source ownership by Lab

Recommended default:

Use plain example JSON with a `readout` object and small arrays for `gaps`, `warnings`, and `detail.rows`. Include comments in documentation, not in JSON.

### 3. State Grammar

Included first-pass states:

- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`

Source-owned placeholders may be demonstrated only with owner/layer qualification:

- blocked / source-owned placeholder
- degraded / source-owned placeholder
- no-scan / source-owned placeholder

Must solve before implementation:

- define whether the static reference accepts only uppercase labels or lower-case ids plus labels
- define the required distinction between `NO DATA`, `UNAVAILABLE`, `FALLBACK`, and source-owned blocked/no-scan placeholders
- define whether `failed` appears as its own starter example or is represented through `UNAVAILABLE` plus availability reason

Recommended default:

Use lower-case example ids with uppercase visible labels. Keep `failed` as an availability reason case, not as a first-pass visible state label, unless Human / Overseer opens that distinction.

### 4. Included Materials

First starter should include only accepted, relevant material references:

| Material | Include? | Reason |
| --- | --- | --- |
| `mat-long-text-detail-block` | Include | Needed for long basis, warning explanation, paths, paragraphs, and long tokens behind detail reveal. |
| `mat-availability-reason-treatment` | Include | Needed to distinguish no data, unavailable, blocked, failed, fallback, aged, and no-scan placeholder cases. |
| `mat-warning-gap-edge` | Include | Needed for non-alarm warning/gap treatment on compact surfaces. |
| `schema-authority-window-ttl-strip` | Defer | Accepted, but domain pressure is more specific and could imply source/action behavior. |
| `schema-expandable-status-card` | Defer | Useful later, but broader than the first composed readout. |
| `schema-table-row-detail-drawer` | Defer | Useful later, but row/table patterns would widen starter scope. |
| Pending material pages | Exclude | Pending pages are not starter contents until accepted. |

Must solve before implementation:

- decide whether material pages are copied into a starter folder or referenced from `workspace/display-materials/`
- decide whether the first static reference includes all three included materials visibly or only proves them through the Instrument Readout Panel
- decide how much of the material prose should travel with the starter

Recommended default:

Include short material summaries in the starter and link back to canonical Lab pages while the kit remains Lab-local.

### 5. Composed Output

First included composed output:

- `output-instrument-readout-panel`

The starter should center on one panel, not a suite.

Included display behavior:

- readout label
- state chip/light with non-color-only marker
- primary value or absence state
- freshness/readout age
- readout basis
- warning/gap marker
- availability reason line when needed
- one `Readout Detail` reveal
- detail rows for basis, availability, freshness, coverage, gaps, warnings, fallback, source-owned note, and long text
- narrow behavior that stacks instead of shrinking text below readability

Must solve before implementation:

- decide the first static reference viewport targets
- decide whether the starter demonstrates Summary/Basis/Details view intent or only the single panel with detail reveal
- decide whether examples include one panel per state or a small state switcher
- decide whether the static reference should include reduced-motion handling from the start

Recommended default:

Build the first static reference around one panel with a small manual state selector and one detail reveal. Include reduced-motion behavior from the start if animated treatment exists.

### 6. Styling Primitives

The starter should carry presentation primitives, not target styling doctrine.

Include:

- state tone tokens
- muted/attention/unavailable/fallback/current/updating tone intent
- readable compact panel spacing
- detail reveal containment
- long-token wrapping rules
- non-color-only status markers
- narrow stacking rules
- reduced-motion expectation where motion exists

Do not include:

- Lab Electron frame chrome
- Pane Board material cues
- target brand colors
- target navigation patterns
- broad design-system claims

Must solve before implementation:

- decide whether style primitives are expressed as CSS custom properties or plain CSS classes
- decide which current Lab colors are neutral enough to travel as defaults
- decide whether the starter should expose a minimal theme surface

Recommended default:

Use CSS custom properties with conservative defaults and document them as replaceable presentation tokens.

### 7. Static Reference Target

Static reference comes before React.

Purpose:

- prove the starter is portable without Electron, IPC, Lab fixtures, or framework assumptions
- create the canonical visual reference for future scaffolds
- let target projects inspect plain HTML/CSS/JS before deciding how to adapt

Target shape:

```txt
portable-presentation-starter/
  README.md
  examples/
    static/
      index.html
      instrument-readout-panel.css
      instrument-readout-panel.js
      example-readouts.json
```

Must solve before implementation:

- decide exact starter folder name and location
- decide whether static examples are copied from current renderer behavior or rewritten from the accepted output page
- decide how to prove the static reference without Electron smoke
- decide what screenshots or visual review notes are enough for acceptance

Recommended default:

Implement static reference from the accepted output specification, not by copying the current renderer wholesale.

### 8. Optional React Scaffold Posture

React is secondary and optional.

React may be useful to show how a target project using components could consume the same neutral display input. It must not become canonical Lab truth.

Allowed future React example:

- one component for `InstrumentReadoutPanel`
- local example data only
- no target adapter
- no bridge calls
- no Electron assumptions
- same state grammar and copy boundaries as static reference

Not allowed:

- React-first starter
- full app shell
- target adapter assumptions
- generated UI
- adoption claims for Atlas or Sense
- package dependency forced on target projects

Must solve before implementation:

- decide whether React adds enough value after the static reference exists
- decide whether JSX-only is acceptable or whether TypeScript types are needed
- decide whether dependency install/network work is worth it for an optional example

Recommended default:

Do not create React until static reference is accepted.

## Exact Exclusions

The portable starter must exclude:

- SmokeFlash
- material harness controls
- Pane Board
- Wayfinder
- Electron shell behavior
- preload and IPC channels
- Frame module/window controls
- Lab service registry
- Lab fixture selector controls
- visual smoke harness
- Pane Board smoke/capture artifacts
- target adapters
- source-project internal terminology mappings
- bridge/runtime contract definitions
- Atlas/Sense adoption claims
- target product navigation
- target styling doctrine

## Target Ownership Boundaries

Lab provides:

- neutral presentation grammar
- starter display input examples
- accepted material summaries
- Instrument Readout Panel presentation reference
- copy and state boundary guidance
- static visual reference after implementation
- optional React example after static reference acceptance

Target projects provide:

- source-project bridge output
- adapter from target-owned output to starter input
- preservation of target-owned meaning
- local terminology review
- product shell integration
- local acceptance and verification

Human / Overseer provide:

- approval to step from spec into implementation
- decision on starter naming and first destination
- acceptance of any future export/seeding packet

## What Must Be Solved Before We Step

Before any Dev implementation packet, Lab should answer these questions:

1. What is the exact starter name and resting place?
2. Is the first implementation a Lab-local starter folder, an export candidate, or a Human relay artifact?
3. What is the exact neutral display input example shape?
4. Which fields are required for first render and which are optional?
5. How are source-owned placeholder terms qualified in examples?
6. Does the first static reference show one selected state or multiple state examples?
7. Does Summary/Basis/Details travel now, or stay deferred behind a simpler panel/detail reveal?
8. What styling tokens are neutral enough to ship as defaults?
9. What minimal verification replaces Lab's renderer-specific string checks?
10. What visual review evidence is enough without Electron smoke?
11. Does SmokeFlash need to be split before this step, or can the first step create a separate static reference without touching the current renderer?
12. Who is the first intended reviewer: Lab Overseer, Human, Atlas, Sense, or another target project?

## Recommended Answers For First Step

Recommended first-step answers:

1. Use `portable-presentation-starter` as the working name.
2. Keep it Lab-local for the first implementation.
3. Use one neutral `readout` example object with state, value, basis, age, availability, gaps, warnings, and detail rows.
4. Require label, state, primary display posture, age, basis, availability, gaps, warnings, and detail rows; allow source-owned qualification as optional but required when source-owned terms appear.
5. Qualify source-owned placeholders with owner/layer copy inside `sourceOwned` and detail rows.
6. Show multiple state examples through static data, with one selected panel at a time.
7. Defer Summary/Basis/Details as a full view-intent system; keep one `Readout Detail` reveal.
8. Use CSS custom properties for tones and spacing.
9. Use a small static review checklist first; add automated checks only after the static reference exists.
10. Use screenshots plus manual review for state distinction, narrow containment, long-token wrapping, and non-color-only markers.
11. Do not split SmokeFlash merely to create a separate static reference, but split before exporting or promoting any renderer/head.
12. First reviewer should be Lab Overseer / Human.

## Future Packet Options

Best next packet:

```txt
Static Portable Presentation Starter Reference
```

Purpose:

- create a separate Lab-local static HTML/CSS/JS reference from this spec
- avoid copying current renderer wholesale
- avoid SmokeFlash, Electron, Pane Board, and target adapters
- prove one Instrument Readout Panel with neutral example data

Alternative packets:

- `SmokeFlash Split Readiness Review` if Lab wants to prepare the current renderer/head for promotion.
- `Starter Input Shape Review` if the neutral example shape feels too contract-like.
- `React Example Scaffold Review` only after static reference acceptance.

Do not open:

- target adapter implementation
- React scaffold implementation before static reference
- renderer export/seeding
- bridge/runtime contract work

## Acceptance Recommendation

Accept this specification if the Overseer agrees that the next move should remain contents-first and static-reference-first.

Do not treat this specification as authorization to implement. It should become the basis for a later bounded Dev runway only after Human / Overseer selects a next packet.
