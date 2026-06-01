# Display Selection Shelf

Status: Active selection menu
Owner: Aura Lab

## Purpose

This shelf is a target-readable menu of accepted Aura Lab display glass and material features.

It answers:

```txt
Which features do you want from this selection?
```

It is not a target adapter, package/export specification, bridge/runtime contract, target adoption record, or Dev runway.

## How To Use This Shelf

Use this page to choose presentation features for a target-owned trial.

Pick the features that are useful, then the target project provides its own mapper, source meaning, product language, runtime behavior, local review, and adoption decision.

Core boundary:

```txt
Targets translate themselves; Lab makes the window worth looking through.
```

Lab can describe what the glass or material offers. Lab must not decide target source meaning, target state mapping, adapter behavior, runtime ownership, or adoption.

## Accepted Glass Assets

| Glass asset | What it offers | Canonical page/file | Likely target use | Target must provide | Must not imply |
| --- | --- | --- | --- | --- | --- |
| Instrument Readout Panel Glass | Display-only, framework-neutral readout head with primary value or absence, state chip, basis, freshness, availability, gaps, warnings, detail reveal, source-owned label qualification, `NO DATA` / `UNAVAILABLE` distinction, compact coverage option, narrow layout, and long-token containment. | `workspace/display-outputs/instrument-readout-panel-glass.md`; `portable-presentation-starter/` | Trial one prepared readout surface through a target-owned mapper. Useful when a target wants a calm first-read panel before building a product-specific face. | Source meaning, mapper from target output to prepared display input, product copy, local terminology review, runtime/shell decisions, safety review, and adoption timing. | Target adoption, target fitness, target state enums, bridge/runtime contract, package/export shape, React requirement, Lab ownership of source meaning, or use of Lab sample data as target data. |

## Accepted Material Features

| Material feature | What it offers | Canonical page/file | Likely target use | Target must provide | Must not imply |
| --- | --- | --- | --- | --- | --- |
| Availability Reason Treatment | Distinguishes no data, unavailable, blocked, failed, fallback, aged, degraded, and source-owned no-scan-style cases without collapsing them into one alarm. | `workspace/display-materials/availability-reason-treatment.md` | Keep absence or limited availability reason-first and inspectable. | Source-owned reason meaning and mapping into display-ready copy. | That Lab defines source states, target enums, or authority semantics. |
| Long Text Detail Block | Holds long basis text, warnings, gaps, paths, paragraphs, long identifiers, and source-owned notes behind a detail reveal with wrapping/containment. | `workspace/display-materials/long-text-detail-block.md` | Keep first-read surfaces compact while preserving detailed readout context. | Which long fields matter, local copy decisions, and whether detail is appropriate in the product flow. | That long source wording becomes Lab doctrine or target product copy. |
| Warning / Gap Edge | Shows gaps and warnings through muted markers, counts, and detail paths without turning the whole surface into an alarm. | `workspace/display-materials/warning-gap-edge.md` | Show incomplete or cautionary readout basis while keeping the surface calm. | Target severity meaning, source-specific warning/gap mapping, and action consequences. | That Lab defines source severity, errors, or escalation behavior. |
| Expandable Status Card | Compact card with label/value/state plus attached detail reveal for basis, age, gaps, warnings, and source-owned notes. | `workspace/display-materials/expandable-status-card.md` | Small status group or right-rail style readout where detail should be available but not first. | Local route/product behavior, source-owned labels, and card grouping meaning. | That cards imply equal authority or target navigation/adoption. |
| Table Row Detail Drawer | Dense row treatment with compact state/facets while raw values, identifiers, basis, warnings, and action/effect notes stay in a drawer. | `workspace/display-materials/table-row-detail-drawer.md` | Queue, list, or review-row surfaces that need compact scanning and deeper inspection. | Sorting, filtering, selection, action readiness, raw-field meaning, and target workflow ownership. | That Lab owns row actions, target queue semantics, or source sorting/filtering behavior. |
| Authority Window TTL Strip | Compact strip for bounded authority windows with state, TTL/cooldown, blocked/manual reason, and detail path. | `workspace/display-materials/authority-window-ttl-strip.md` | Short-lived authority or eligibility window display where timing must stay visible. | Source-owned authority meaning, runtime timing behavior, and action safety rules. | Background behavior, clipboard/listening/monitoring semantics, or target authority decisions. |

## Pending Or Parked Items

These are not current target-trial offers. They may inform future discussion only if Human/Overseer opens a packet that names them.

| Item | Status | Canonical page/file | Why separated |
| --- | --- | --- | --- |
| Instrument Readout Strip | pending | `workspace/display-materials/instrument-readout-strip.md` | Compact strip candidate; not accepted as an implemented glass offer. |
| Freshness / Basis Rail | pending | `workspace/display-materials/freshness-basis-rail.md` | Freshness/basis support candidate; not accepted as a trial feature. |
| Progressive Detail Drawer | pending | `workspace/display-materials/progressive-detail-drawer.md` | Drawer/detail candidate; not accepted as a trial feature. |
| Compact Value Stack | pending | `workspace/display-materials/compact-value-stack.md` | Value hierarchy candidate; not accepted as a trial feature. |
| Source / Basis Coverage Marker | pending | `workspace/display-materials/source-basis-coverage-marker.md` | Coverage marker candidate with source-authority caution still unresolved. |
| Compact Value Rail | pending | `workspace/display-materials/compact-value-rail.md` | Small value rail candidate; not accepted as a trial feature. |
| Connected System / Radius Visualization | parked | `workspace/display-schema-ledger.md` | Needs source-owned relation/radius meaning before Lab material work. |

## Sense-Friendly Selection Prompt

For Sense relay, ask:

```txt
Which display features do you want to trial from this selection?
```

Useful answer shape:

```txt
Sense wants to trial:
- [selected glass/material features]

Sense will preserve:
- Sense-owned source meaning
- Sense-owned mapper behavior
- Sense-owned terminology and state distinctions
- Sense-owned runtime and adoption decisions

Missing shape, if any:
- [static files, package shape, API boundary, styling tokens, or other relay shape Sense needs named]
```

Sense should name any missing package shape instead of shaping Lab from Sense. Lab should keep `blocked`, `no observation`, `no-scan`, degraded, stale, capped, unavailable, and other Sense-owned meanings in Sense-owned mapper/review surfaces.

This prompt is not Sense adoption and does not authorize Sense implementation work.

## Atlas Selection Prompt

Atlas is not the active adoption target in this packet. If Human later wants Atlas input, ask:

```txt
Which display features, if any, look useful for a future Atlas-owned trial?
```

Atlas should preserve Atlas-owned Discovery, Evidence, Watch, Marked, hydration, provenance, storage, local-first basis, and adapter behavior. Lab should not infer Atlas adoption from this shelf.

## Target Responsibilities

Targets provide:

- source meaning
- target-owned mapper from target output to display-ready input
- product language and local terminology decisions
- runtime behavior and shell choices
- local data authority and safety decisions
- adoption timing
- target-local visual refinement
- target-local review and acceptance

## What Lab Must Not Imply

Lab must not imply:

- target adoption
- target product fitness
- target state enums
- source meaning
- adapter ownership
- runtime shell ownership
- bridge/runtime contract
- package/export shape
- React as canonical
- use of Lab sample data as target data
- use of Lab example labels as target product copy
- that future Lab heads force target upgrades

## Boundaries / Non-Goals

This shelf does not authorize:

- target-project edits
- target adapters or mappers
- package/export creation
- React scaffold work
- current Lab renderer changes
- Electron/preload/IPC changes
- SmokeFlash, Pane Board, Wayfinder, or Lab service registry changes
- bridge/runtime contracts
- source-project state or terminology decisions
- new material or glass capability design

Keep this page as a menu, not a queue.

## Canonical Indexes

- Library map: `workspace/display-assets.md`
- Material shelf: `workspace/display-materials/README.md`
- Output/glass shelf: `workspace/display-outputs/README.md`
- Catalog/index: `workspace/display-schema-ledger.md`
- Handoff standard: `docs/statements/presentation-head-handoff-standard.md`
- Adapter boundary: `docs/adr/0002-target-owned-presentation-adapters.md`
