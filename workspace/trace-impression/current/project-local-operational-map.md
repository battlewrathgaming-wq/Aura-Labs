# Aura Lab Project-Local Operational Map

Status: current local seam trace
Audience: Overseer
Map type: Project-Local Operational Map
Mode: local-seam-trace (`\`)
Updated: 2026-06-15
Source project: Aura Lab
Seam of interest: Lab presentation head bridge/import boundary
Generated from: M57 / Trace Impression First Local Seam Pilot
Replaces: none; first local seam trace baseline

## Authority Label

This map is a project-local source impression for Overseer orientation. It is not product authority, architecture approval, target adoption, Dev authorization, or accepted project meaning.

## Freshness

| Field | Value |
| --- | --- |
| Generated at | 2026-06-15 |
| Source branch / revision | `main` / `f8786cc Open trace impression first local seam pilot` |
| Current packet used | `workspace/current.md` |
| Context file used | `workspace/trace-impression/context.md` |
| Overview file used | `workspace/overview.md` |
| Previous map replaced | None; first baseline |

## Basis Mix

| Basis | Used? | Notes |
| --- | --- | --- |
| Source code | Yes | Static HTML, JS, CSS, JSON, and verifier scripts inspected. |
| Project docs | Yes | Starter README, ADRs, and accepted statement docs inspected. |
| Current packet | Yes | M57 defines the seam, expected outputs, and stop conditions. |
| Accepted state | Yes | M53-M56 accepted state appears in `workspace/current.md` and `workspace/overview.md`. |
| Human context | No direct proof | Human clarification is already captured in `workspace/current.md`; no chat-only claims used as runtime proof. |
| Inference | Yes | Limited to naming the adapter handoff as the boundary implied by docs and package shape. |
| Not found / not inspected | Yes | Runtime execution, target adapter correctness, Electron behavior, and target-project code were not inspected. |

## Confidence Ceiling

Highest allowed certainty for this map: `source-cited`

The map can make source-cited claims about the static starter, package contents, local verifier expectations, and accepted boundary documentation. It cannot make verified claims about target adapters, target adoption, Electron runtime behavior, or live rendering beyond inspected source and verification evidence.

## Current Seam Question

Can a local seam trace produce a useful claimable seam card for the Lab presentation head bridge/import boundary?

## Seam Card

### Can I Responsibly Talk About This Seam Now?

Answer: yes, with gaps

Why:

- The static starter and Sense trial package expose a clear display-only head boundary: HTML roots load local CSS/JS and example JSON, while docs explicitly exclude target adapters, bridge/runtime contracts, Electron, preload, IPC, and source-project mappings.
- The JS renderer shows how prepared readout input becomes DOM text, state classes, detail rows, source-owned qualification, and gap/warning markers.
- The verifier checks the starter files, safety exclusions, required labels, source-owned examples, local JSON fetch allowance, primitive CSS shelf, and package boundary text.
- The unresolved gap is the live target handoff: this trace proves local static head/package shape, not target adapter correctness, runtime security approval, or actual target adoption.

### Supported Claims

| Claim | Provenance | Citation | Confidence |
| --- | --- | --- | --- |
| The portable starter is a framework-neutral static reference centered on `neutral display example input -> Instrument Readout Panel -> Readout Detail reveal`. | `doc-stated` | `portable-presentation-starter/README.md | Purpose | names the starter as a small, framework-neutral reference and gives the input-to-panel-to-detail flow | supports the static head boundary because it states the intended display path` | `source-cited` |
| The starter explicitly excludes React, target adapters, bridge/runtime contracts, Electron, preload, IPC, Pane Board, Wayfinder, SmokeFlash, and the Lab service registry. | `doc-stated` | `portable-presentation-starter/README.md | Scope | included/excluded lists name the excluded runtime/tooling layers | supports the import boundary because it separates static presentation from target/project runtime concerns` | `source-cited` |
| The selector page is Lab demo scaffolding; the offered head includes the Instrument Readout Panel surface, CSS/JS text-rendering pattern, example-data boundary, README safety language, and replaceable styling tokens. | `doc-stated` | `portable-presentation-starter/README.md | Inspect | states selector page is demo scaffolding and names the travelling head contents | supports the boundary because it distinguishes review scaffolding from the offered head` | `source-cited` |
| `index.html` and `inspect-head.html` both mount `instrument-readout-panel.css`, `instrument-readout-panel.js`, and `#readout-root`; `inspect-head.html` removes the selector and uses `data-readout-id="source-degraded"`. | `code-observed` | `portable-presentation-starter/examples/static/index.html; portable-presentation-starter/examples/static/inspect-head.html | HTML roots | link the CSS, script the JS, and expose readout root; inspection page has no selector band | supports the seam because it shows selector and no-selector entry surfaces` | `source-cited` |
| The JS renderer treats readout data as text, builds DOM nodes with `textContent`, renders state chip, primary value, meta rows, availability line, gaps/warnings, detail reveal, and source-owned qualification. | `code-observed` | `portable-presentation-starter/examples/static/instrument-readout-panel.js | render, detailRows, withText | creates elements, assigns textContent, and appends readout fields into panel structure | supports the seam because it shows prepared display input becoming presentation output` | `source-cited` |
| The JS attempts only the documented local JSON fetch and keeps fallback data so local file inspection can still render when `file://` JSON is blocked. | `code-observed` | `portable-presentation-starter/examples/static/instrument-readout-panel.js | init and fallbackData | fetches `./example-readouts.json` with `no-store` inside try/catch and starts from fallbackData | supports the seam because local display input has a static fallback path without network dependency` | `source-cited` |
| Example readout data states that it is not a bridge contract, runtime contract, target payload requirement, target enum set, or source-project state model. | `code-observed` | `portable-presentation-starter/examples/static/example-readouts.json | meta.boundary and meta.labelsNote | boundary and labelsNote explicitly limit meaning | supports the boundary because the data itself carries non-contract labels` | `source-cited` |
| Source-owned placeholder terms are represented through a `sourceOwned` block with owner/layer/terms/visibleLabel/qualification. | `code-observed` | `portable-presentation-starter/examples/static/example-readouts.json | source-no-observation, source-blocked, source-degraded | sourceOwned objects qualify Sense example placeholders and say Lab does not define source-project meaning | supports source meaning preservation because terms are carried with owner/layer qualification` | `source-cited` |
| The CSS provides state tone classes, text containment, narrow behavior, and reduced-motion handling. | `code-observed` | `portable-presentation-starter/examples/static/instrument-readout-panel.css | state classes, overflow-wrap, media query, reduced-motion query | defines state tone classes, wrapping, `@media (max-width: 640px)`, and `prefers-reduced-motion` | supports presentation behavior claims for static CSS only` | `source-cited` |
| The Sense trial package manifest says the package is display-only and that Sense owns mapper behavior, source meaning, runtime behavior, product copy, review, and adoption. | `doc-stated` | `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md | Boundary | states package is display-only and names Sense ownership | supports the target adapter boundary because Lab does not own the target side` | `source-cited` |
| The static starter verifier checks required starter/package/primitive files, excluded tooling/runtime patterns, unsafe implementation patterns, required display labels, source-owned examples, and the allowed local JSON fetch. | `code-observed` | `scripts/verify-static-starter.js | requiredFiles, excludedPatterns, unsafeImplementationPatterns, verifySensePackage, verifyPrimitiveStarter, enforceLocalFetchOnly | lists files and assertions for static starter validation | supports the verification surface because it names what the automated check covers` | `source-cited` |
| `verify:all` includes `verify:static-starter` after core, services, vocabulary, HTTP, SDE source, frame, renderer shell, and Pane Board checks. | `code-observed` | `scripts/verify-all.js | checks array | includes `['verify:static-starter', ['node', 'scripts/verify-static-starter.js']]` | supports the verification floor because static starter checks are part of the full suite` | `source-cited` |
| Target-owned adapters are an accepted project decision; target projects must develop and own their adapters connecting `source-project bridge output -> clean Lab presentation head`. | `accepted-state` | `docs/adr/0002-target-owned-presentation-adapters.md | Decision and Adapter Boundary | states target projects must own adapters and defines the adapter connection | supports the import boundary because Lab should not claim target mappings` | `source-cited` |
| If a renderer/head is promoted, SmokeFlash/workshop tooling must be split before export/seeding; the static starter itself does not include SmokeFlash according to the verifier inputs inspected here. | `accepted-state` | `docs/adr/0001-smokeflash-split-timing.md | Decision and Split Triggers; scripts/verify-static-starter.js | ADR requires split before promotion; verifier excludes SmokeFlash in starter implementation text | supports a tooling boundary claim for the static starter but not a full renderer export claim` | `source-cited` |
| Lab glass is an offered presentation window; targets decide what is seen through it. | `accepted-state` | `docs/statements/presentation-glass-concept-capsule.md | Core Idea and Ownership Split | states glass is a prepared window and target projects provide source meaning/mapper/runtime/final composition | supports the high-level seam framing because it names Lab-side versus target-side roles` | `source-cited` |

### Missing Proof

| Missing proof | Why it matters | Next proof needed |
| --- | --- | --- |
| Actual target adapter imports the package and maps target-owned data correctly. | This seam stops at Lab's local static package; target adapter correctness belongs to the target project. | A target-local trace or target Dev acceptance after importing the package. |
| Browser/manual visual inspection of the generated static page. | Source and verifier prove file shape and safety checks, not visual fit in a real viewport. | Human or visual smoke/manual screenshot review for the static page if presentation fit is in scope. |
| Electron/runtime security posture for a travelling head. | The static starter is display-only and local; Electron behavior was not part of this pilot. | Separate security/render hardening review when a runtime head is promoted. |
| Package/export readiness beyond local folder contents. | The Sense package is a folder note, not a package manager artifact or universal export spec. | A packaging/export runway if Lab chooses to publish or formalize distribution. |
| Complete Lab domain map. | This pilot intentionally traces one seam, not all Lab tooling/presentation surfaces. | Later `|` Human orientation sync or broader project map after useful local basis exists. |

### Inferred Or Not-Proven Steps

| Step | Label | Reason | What would prove or disprove it |
| --- | --- | --- | --- |
| Target project copies or imports `packages/sense-trial-glass/` and adapts locally. | `inferred` | The manifest and README frame it as a local Sense trial package, but no target repo was inspected. | A target-local commit, adapter, or acceptance note. |
| The same glass shape could serve non-Sense targets with local composition. | `inferred` | The primitive and concept docs are project-agnostic, but no other target import was inspected. | A second target trial or accepted target request. |
| Static text-rendering pattern is sufficient for all target data pressure. | `not-proven` | The JS uses text nodes and examples include long token pressure, but target data pressure is uninspected. | Target-specific fixtures or visual pressure review. |
| The static starter is safe as a runtime trust boundary. | `not-proven` | README says it is display-only and not a trust boundary; verifier checks unsafe static patterns but not runtime hardening. | Dedicated security review and runtime threat model. |
| Pane Board, Wayfinder, SmokeFlash, or service registry are absent from the source package because they are absent from package files. | `not-proven` | The verifier inspects implementation text for excluded patterns, but this trace did not prove all possible transitive runtime contexts. | A packaging manifest plus dependency/import graph if exporting a runtime bundle. |

### Next Safe Ask

Run the first target-local comparison only after the target project has the package in hand: ask, "Does the target adapter consume the Lab glass as display input without turning Lab example states, sample data, or source-owned placeholders into target meaning?"

## Compact Source Path

| Step | Layer | File | Symbol / Section | Observed Fact | Supports Claim Because |
| --- | --- | --- | --- | --- | --- |
| 1 | Current seam source | `workspace/current.md` | M57 current packet | Names the first `\` local seam trace and expected local map/run-log outputs. | Establishes this pass as local, source-cited, and non-central. |
| 2 | Context guardrail | `workspace/trace-impression/context.md` | Current Pilot Scope / Command Boundaries | Defines the pilot domain, seam, and no-central-map boundary. | Limits the trace to local seam behavior. |
| 3 | Static starter landing | `portable-presentation-starter/README.md` | Purpose / Scope / Inspect | Defines the starter as framework-neutral and names included/excluded layers. | Establishes display head and import boundary expectations. |
| 4 | Demo selector entry | `portable-presentation-starter/examples/static/index.html` | `readout-select` and `readout-root` | Contains selector scaffolding and readout root. | Shows the review page shape. |
| 5 | No-selector head entry | `portable-presentation-starter/examples/static/inspect-head.html` | `body data-readout-id` and `readout-root` | Removes selector and renders a specific readout. | Shows a cleaner travelling-head inspection shape. |
| 6 | Renderer behavior | `portable-presentation-starter/examples/static/instrument-readout-panel.js` | `init`, `render`, `detailRows`, `withText` | Loads local JSON if available, falls back to inline data, and renders text nodes. | Shows prepared display input becoming presentation DOM without privileged APIs. |
| 7 | Display input boundary | `portable-presentation-starter/examples/static/example-readouts.json` | `meta`, readout states, `sourceOwned` | Labels data as non-contractual and qualifies source-owned examples. | Shows how Lab preserves source-owned placeholders without owning meaning. |
| 8 | Visual surface | `portable-presentation-starter/examples/static/instrument-readout-panel.css` | state classes / responsive / reduced motion | Defines state tones, containment, narrow layout, and reduced-motion handling. | Supports static presentation behavior claims. |
| 9 | Trial package | `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md` | Boundary | Declares display-only package and Sense ownership of mapper/meaning/runtime/adoption. | Shows Lab/target handoff boundary. |
| 10 | Verification | `scripts/verify-static-starter.js` and `scripts/verify-all.js` | required files / checks array | Checks static starter contents and includes static starter in full verification. | Shows what automated verification can and cannot prove. |
| 11 | Accepted boundary | `docs/adr/0002-target-owned-presentation-adapters.md` | Decision / Adapter Boundary | Target projects own adapters from bridge output to Lab head. | Anchors adapter ownership. |
| 12 | Accepted concept | `docs/statements/presentation-glass-concept-capsule.md` | Core Idea / Ownership Split | Lab owns display primitives and examples; targets own source meaning, mapper, runtime, copy, composition, and acceptance. | Anchors meaning ownership. |

## Per-Seam Boundary Mapping

| Boundary | Owner / Layer | Evidence | Allowed Claim | Must Not Claim |
| --- | --- | --- | --- | --- |
| Display input example -> Instrument Readout Panel | Lab / Bridge -> Interface presentation | `portable-presentation-starter/README.md`; `instrument-readout-panel.js`; `example-readouts.json` | Lab has a static display head that renders prepared readout-like display input into a panel with basis, age, availability, gaps, warnings, detail, and source-owned qualification. | Lab has defined a bridge schema, runtime contract, target payload, or target enum set. |
| Selector page -> travelling head | Lab / demo scaffolding vs offered surface | `index.html`; `inspect-head.html`; README Inspect section | Selector page is review scaffolding; no-selector page is a cleaner head inspection shape. | Selector behavior is part of target product navigation. |
| Example states -> target states | Lab display example vocabulary | `example-readouts.json` meta; README Example Input Boundary | `CURRENT`, `NO DATA`, `UNAVAILABLE`, and `PARTIAL` are Lab display example labels in this package. | These are Sense/Atlas/Core source states or adapter constants. |
| Source-owned placeholders -> display qualification | Source project meaning preserved through display input | `example-readouts.json` sourceOwned blocks; README Sense Cautions Preserved | Lab can display source-owned placeholders with owner/layer qualification. | Lab owns `blocked`, `no-scan`, `degraded`, `no observation`, or their source semantics. |
| Lab package -> target adapter | Target project adapter layer | ADR 0002; Sense package manifest | Lab provides display bundle/materials; target owns mapper, source meaning, runtime behavior, copy, review, and adoption. | Lab owns target adapter implementation or target acceptance. |
| Static starter verification -> runtime assurance | Lab verification surface | `scripts/verify-static-starter.js`; `scripts/verify-all.js` | Verification checks expected static files, unsafe patterns, local fetch allowance, labels, source-owned examples, package docs, and primitive docs. | Verification proves visual quality, target adapter correctness, browser behavior, or runtime security approval. |
| SmokeFlash/workshop -> travelling package | Lab tooling boundary | ADR 0001; `scripts/verify-static-starter.js` excluded patterns | The static starter verifier guards against SmokeFlash/Paneboard/Wayfinder terms in implementation text inspected by the static starter check. | All future renderer exports are automatically split or safe. |

## Boundary Pressure

| Pressure | Signal | Source / Basis | Current Read | Risk If Ignored |
| --- | --- | --- | --- | --- |
| meaning pressure | Example data includes source-owned placeholder words such as no observation, no-scan, blocked, and degraded. | `example-readouts.json`; README Sense cautions. | Managed by `sourceOwned` owner/layer/qualification fields and warnings. | Lab example words could be mistaken for Lab-owned states or target meanings. |
| authority pressure | Package is named Sense trial glass and includes Sense cautions. | `MANIFEST.md`; ADR 0002. | Boundary is explicit: Sense owns mapper, meaning, runtime, copy, review, and adoption. | Lab could be read as owning target adapter behavior. |
| data-flow pressure | Static JS consumes local display example data and fallback data. | `instrument-readout-panel.js`; `example-readouts.json`. | The flow is display-input-to-DOM, not bridge-output-to-runtime. | A target could copy the shape as a contract instead of writing a mapper. |
| verification pressure | `verify:static-starter` is strong for static package contents but narrow. | `scripts/verify-static-starter.js`; `scripts/verify-all.js`. | Good static guardrail, not a visual/runtime proof. | Passing verification could be overstated as adoption, visual, browser, or security acceptance. |

## Verification Surface

| Command / Fixture / Test | What It Proves | What It Does Not Prove | Gap |
| --- | --- | --- | --- |
| `npm.cmd run verify:all` | Runs the full Lab verification suite including static starter verification. | Does not manually inspect a browser, Electron runtime, target adapter, or target project. | Good baseline health check, not visual/runtime acceptance. |
| `node scripts/verify-static-starter.js` | Checks required starter/package/primitive files, excluded implementation patterns, unsafe static patterns, source-owned examples, required labels, primitive docs, and local fetch allowance. | Does not prove target use, visual polish, runtime security, or real bridge mapping. | Static-package assurance only. |
| `portable-presentation-starter/examples/static/example-readouts.json` | Provides display example states used by the static head. | Does not prove target payload shape or source-project state. | Target must map its own data. |
| `portable-presentation-starter/examples/static/inspect-head.html` | Provides a no-selector inspection page for the head surface. | Does not prove the page was opened or visually reviewed in this pilot. | Manual/visual review remains separate. |

## Full View With Visible Gaps

Use this as a compact local orientation slice, not as a replacement for the seam card.

| Area | What Is Visible | Gap / Unknown | Basis |
| --- | --- | --- | --- |
| Entry point | Static starter has selector and no-selector HTML roots under `examples/static/`; Sense package mirrors the static files. | No target project import inspected. | `index.html`, `inspect-head.html`, `MANIFEST.md`. |
| Transformation | JS reads example readouts and renders DOM text into an Instrument Readout Panel with state chip, details, gaps, warnings, and source-owned notes. | No adapter transforms real target bridge output into this shape in this trace. | `instrument-readout-panel.js`, `example-readouts.json`. |
| Storage / state | No persistent storage found in starter implementation; verifier rejects storage API terms in implementation text. | Browser runtime behavior not executed in this trace. | `scripts/verify-static-starter.js` unsafe patterns. |
| Rendering / display | CSS defines panel, state tones, containment, narrow behavior, and reduced-motion. | No screenshot/manual visual inspection claimed. | `instrument-readout-panel.css`. |
| Logging / diagnostics | No logging/diagnostics lane found in static starter files inspected. | Not a runtime diagnostics trace. | `not-found` in inspected starter files. |
| Verification | `verify:all` includes `verify:static-starter`; static verifier checks package boundaries and safety floor. | Visual, runtime, target, and security hardening remain separate. | `scripts/verify-all.js`, `scripts/verify-static-starter.js`. |

## Not Mapped

- Target project source code and adapters.
- Central Human orientation map (`|`) output.
- Full Lab renderer, Electron runtime, preload, IPC, or service registry paths.
- Pane Board, Wayfinder, SmokeFlash, and workshop tooling.
- Browser/manual screenshot behavior.
- Package manager publication or universal export shape.
- Full Lab domain/pipeline map outside this presentation starter seam.

## Next Questions

- Does the first local seam card make the Overseer's job easier enough to justify running a target-local seam trace later?
- Should the next trace inspect a target-owned adapter import after Sense confirms its local trial shape?
- Should a later Human orientation sync use this map as the first high-resolution seam fact and broaden into the full presentation domain?

## Run Log Entry

| Field | Note |
| --- | --- |
| Run kind | `\` local seam trace |
| Seam | Lab presentation head bridge/import boundary |
| Outcome | yes, with gaps |
| Replaced map | None; first baseline |
| History copy | Not created; first current map only |
| Next safe ask | Target-local adapter consumption check after target has the package in hand. |

## Blocked Output

This map was produced. No blocked-output stop was hit.

| Field | Note |
| --- | --- |
| Why map stopped | Not applicable |
| What was safe to read | Lab-local starter, package, verifier, ADR, statement, context, and current packet files |
| What proof was missing | Target adapter import, visual runtime inspection, Electron/runtime security approval, package publication |
| Next safe ask | Target-local adapter consumption check after target has the package in hand |
