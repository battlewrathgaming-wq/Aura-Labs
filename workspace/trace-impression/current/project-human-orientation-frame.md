# Aura Lab Human Orientation Frame

Status: current orientation frame
Audience: Human
Map type: Project Human Orientation Frame
Mode: human-orientation-sync (`|`)
Updated: 2026-06-16
Source project: Aura Lab
Based on local map: `workspace/trace-impression/current/project-local-operational-map.md`
Generated from: first `|` Human orientation sync against the presentation head
Replaces: none; first Human orientation frame baseline
Previous frame used: none

## Current Project Impression

Aura Lab has made a portable presentation glass shelf centered on one accepted display head: the Instrument Readout Panel. Around it are reusable display materials, a CSS/token primitive shelf, a Sense trial package, accepted boundary statements, and a static verifier. The cohesive shape is clear: Lab provides calm, meaning-light display surfaces and primitives; target projects provide their own mapper, source meaning, runtime behavior, product copy, review, and adoption. The current focus is whether the presentation head bridge/import boundary is understandable enough for Human steering and target-local trial planning.

`|` maps are orientation frames. The current frame supports steering; older frames support comparison and recovery.

## Project Structure

Use this section as the broad project body view. It is not a file inventory.

| Area | What Exists | How It Relates | Current Shape | Gap / Unknown | Basis | Resolution |
| --- | --- | --- | --- | --- | --- | --- |
| Product / purpose | Lab presentation glass: prepared display windows after source meaning is preserved. | Glass sits after target/source meaning and before final target UI adoption. | Cohesive: Lab makes the window; targets decide the broadcast. | Long-term packaging model remains parked. | `docs/statements/presentation-glass-concept-capsule.md`; `docs/statements/presentation-warm-start-package.md` | `project-doc-orientation` |
| Main systems / tools | Static starter, display shelves, CSS primitives, Sense trial package, Trace Impression. | Starter proves the current glass; shelves describe reusable features; Trace Impression maps boundaries. | Presentation thread is boxed and warm-startable. | Tooling domains such as Pane Board, SmokeFlash, Wayfinder are intentionally outside this frame. | `workspace/current.md`; `workspace/display-assets.md`; local `\` map | `domain-orientation` |
| Presentation / output surfaces | Instrument Readout Panel Glass and accepted material features. | Materials compose into a target-trial glass asset. | First accepted output is one readout panel with basis/freshness/gaps/warnings/detail/source qualification. | Visual/manual review remains a separate proof layer. | `workspace/display-outputs/instrument-readout-panel-glass.md`; `portable-presentation-starter/README.md` | `project-doc-orientation` |
| Data / packet movement | Neutral display example input -> static JS text rendering -> panel/detail reveal. | Target adapters are outside Lab; static input is display example only. | Clean local display-input-to-DOM movement is visible. | Real target bridge output mapping is not proven. | `portable-presentation-starter/examples/static/instrument-readout-panel.js`; `example-readouts.json`; local `\` map | `cited-seam-fact` |
| Source boundaries | Target-owned adapters, source meaning, runtime behavior, product copy, review, and adoption. | Lab provides glass; targets translate themselves. | Boundary is repeatedly stated and verifier-supported at static package level. | Target-local consumption and correctness are not proven by Lab. | `docs/adr/0002-target-owned-presentation-adapters.md`; `MANIFEST.md`; local `\` map | `cited-seam-fact` |
| Verification / assurance | `verify:all` includes static starter verification. | Verifier checks static package shape and safety floor, not visual/runtime adoption. | Good static guardrail, narrow confidence ceiling. | Browser/manual visual proof, Electron/runtime security, and target adoption remain outside this frame. | `scripts/verify-static-starter.js`; `scripts/verify-all.js`; local `\` map | `cited-seam-fact` |
| Deferred / parked terrain | React wrappers, target adapters, package publishing, runtime shell behavior, broader visual smoke, topology/map components. | Parked items are future pressure, not current obligation. | Healthy shelf posture: items are visible but not active. | Future target pressure may change priority. | `docs/statements/presentation-warm-start-package.md`; `workspace/display-selection-shelf.md` | `project-doc-orientation` |

## Source Code Inspection Body

This is the direct source-code body for the current focus. Supporting shelves and accepted statements appear in the next section.

| Body Part | Direct Source Path | Role In Current Focus | What Was Inspected | What Was Not Inspected | Basis | Resolution |
| --- | --- | --- | --- | --- | --- | --- |
| entry points | `portable-presentation-starter/examples/static/index.html`; `inspect-head.html` | Static selector and no-selector head roots. | HTML roots, CSS/JS mounting, `#readout-root`, no-selector inspection shape. | Browser/manual visual behavior. | local `\` map | `cited-seam-fact` |
| renderer / transform | `portable-presentation-starter/examples/static/instrument-readout-panel.js` | Turns prepared display input into DOM text and detail rows. | local JSON fetch, fallback data, text rendering, state chip, detail reveal, source-owned qualification. | Target adapter mapping, runtime bridge input, Electron/preload/IPC behavior. | local `\` map | `cited-seam-fact` |
| styles / presentation behavior | `portable-presentation-starter/examples/static/instrument-readout-panel.css` | Defines the static head's visible treatment. | state tones, text containment, narrow behavior, reduced motion. | Human visual acceptance and screenshots. | local `\` map | `cited-seam-fact` |
| data/example input | `portable-presentation-starter/examples/static/example-readouts.json` | Provides display example input only. | meta boundary, example labels, sourceOwned qualification. | Target payload schema, target state enums, source-project meanings. | local `\` map | `cited-seam-fact` |
| verifier / support script | `scripts/verify-static-starter.js`; `scripts/verify-all.js` | Guards static starter/package shape and safety floor. | required files, excluded tooling terms, unsafe patterns, local fetch allowance, required labels, package docs, primitive docs. | Visual/runtime/security proof. | local `\` map | `cited-seam-fact` |
| package / local trial files | `portable-presentation-starter/packages/sense-trial-glass/` | Local Sense trial copy of the display bundle. | manifest, README, mirrored static files. | Sense mapper correctness or Sense adoption. | `MANIFEST.md`; local `\` map | `cited-seam-fact` |

## Supporting Context

These items explain the source-code body and its intended use. They are not the inspected source-code body itself.

| Context Item | Path | Why It Is Included | What It Must Not Be Mistaken For | Basis | Resolution |
| --- | --- | --- | --- | --- | --- |
| glass concept capsule | `docs/statements/presentation-glass-concept-capsule.md` | Explains Lab's glass posture and ownership split. | Source code, adapter contract, or target adoption. | local docs | `project-doc-orientation` |
| warm-start package | `docs/statements/presentation-warm-start-package.md` | Boxes the presentation thread for future pickup. | Active Dev runway or package/export spec. | local docs | `project-doc-orientation` |
| handoff standard | `docs/statements/presentation-head-handoff-standard.md` | Defines polish/safety floor before offering a head. | Runtime security approval or target fitness claim. | local docs | `project-doc-orientation` |
| display selection shelf | `workspace/display-selection-shelf.md` | Shows target-readable choices and responsibilities. | Backlog, target adoption, or adapter decision. | local docs | `project-doc-orientation` |
| display assets / output page | `workspace/display-assets.md`; `workspace/display-outputs/instrument-readout-panel-glass.md` | Places the head in Lab's library shelves. | The source-code body itself. | local docs | `project-doc-orientation` |
| primitive shelf | `portable-presentation-starter/primitives/README.md` | Explains adjacent CSS/token shelf and parked wrapper direction. | React requirement or target component contract. | local docs | `project-doc-orientation` |

## Cohesion / Drift Markers

Use this section to make structural drift detectable. This is a state display, not a judgment.

| Marker | Where Seen | Current Read | Why It Matters | Basis | Resolution |
| --- | --- | --- | --- | --- | --- |
| cohesive | Glass concept, selection shelf, handoff standard, Sense trial package. | All repeat the same split: Lab provides display; targets own meaning/mapper/adoption. | This is the main stabilizing spine. | `docs/statements/presentation-glass-concept-capsule.md`; `workspace/display-selection-shelf.md`; `MANIFEST.md` | `project-doc-orientation` |
| cohesive | Static starter and accepted glass page. | The offered asset is one clear Instrument Readout Panel head. | It prevents one-off pane proliferation before target need is known. | `workspace/display-outputs/instrument-readout-panel-glass.md`; `portable-presentation-starter/README.md` | `project-doc-orientation` |
| drift? | Warm-start seed for future verifier hardening. | A possible implementation task was discovered by Trace Impression but belongs to presentation-head work, not Trace Impression. | Useful to keep ownership clean before shipping Trace Impression. | `workspace/trace-impression/warm-start-seeds.md`; Human correction in current session | `human-context` / `project-doc-orientation` |
| tangled? | Static starter package vs future export/publishing. | Current package is a local trial folder, not a package/export system. | Keeps Lab from over-hardening distribution before target pressure names it. | `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md`; warm-start statement | `project-doc-orientation` |
| boundary pressure | Source-owned placeholders in example readouts. | Lab can display source-owned terms only with owner/layer qualification. | Prevents Lab labels from becoming target state semantics. | `example-readouts.json`; local `\` map | `cited-seam-fact` |

## Pipeline / Limb Views

Use this section for individual limbs: inputs, code/helper movement, flattened data shape, boundary crossing, packet movement, and endpoint.

| Limb / Pipeline | Input | Code / Helper Path | Flattened Shape | Boundary Crossed | Packet / Handoff Movement | Endpoint | Gap | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Static readout head | Neutral display example input. | `example-readouts.json` -> `instrument-readout-panel.js` -> DOM nodes. | label, state, primary value, age, basis, coverage, availability, gaps, warnings, details, sourceOwned. | Display example input -> Lab presentation output. | Accepted as Instrument Readout Panel Glass. | Static panel and Readout Detail reveal. | Real target bridge output mapping not inspected. | `cited-seam-fact` |
| Sense trial glass package | Selected Lab glass/materials. | `packages/sense-trial-glass/` mirrors static files and boundary notes. | README, manifest, HTML, CSS, JS, JSON. | Lab package -> target-local trial. | Target may inspect/copy/import locally; target owns mapper/adoption. | Local Sense trial folder. | No Sense adapter correctness claimed. | `cited-seam-fact` |
| Display selection shelf | Accepted glass/materials. | `workspace/display-selection-shelf.md`. | feature menu: glass asset, what it offers, target must provide, must not imply. | Lab library -> target choice conversation. | Target selects useful features before target-owned work. | Menu for target trial requests. | Not a backlog or implementation queue. | `project-doc-orientation` |
| Primitive shelf | Glass primitive vocabulary and CSS tokens. | `portable-presentation-starter/primitives/`. | display material, boundary, seam, segment, readout, marker, drawer, row, sizing, safe motion. | Concept vocabulary -> CSS/token starter. | Warm-start support for future composition. | Static CSS primitives and examples. | React wrappers remain parked. | `project-doc-orientation` |
| Handoff standard | Polish/safety criteria. | `docs/statements/presentation-head-handoff-standard.md`. | readable first view, stable hierarchy, text containment, source/basis/gap/warning visibility, no privileged runtime dependency. | Lab internal readiness -> target offer standard. | Used before offering a head to targets. | Readiness floor, not target adoption. | Not full runtime security review. | `project-doc-orientation` |
| Trace Impression seam map | Presentation head bridge/import boundary question. | `workspace/trace-impression/current/project-local-operational-map.md`. | response, seam, boundary mapping, visible gaps, source basis, open edge. | Local source trace -> Human/Overseer orientation. | First `\` result accepted as yes, with gaps. | Current seam card. | Full Lab domain map not produced by `\`. | `cited-seam-fact` |

## Boundary Movement

Use this section to show how source, packet, schema, helper, display, verification, and handoff boundaries are crossed.

| Boundary | Enters From | Changes Into | Leaves As | Owner / Layer | Source Basis | Gap / Unknown | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Source project output -> target mapper | Target-owned runtime/bridge output. | Target-owned prepared display input. | Input suitable for Lab glass. | Target project. | ADR 0002; handoff standard. | No target mapper inspected. | `project-doc-orientation` |
| Prepared display input -> panel DOM | Static example JSON or fallback data. | Text nodes, state classes, rows, detail reveal. | Instrument Readout Panel. | Lab presentation. | `instrument-readout-panel.js`; local `\` map. | Browser rendering not manually inspected in this frame. | `cited-seam-fact` |
| Lab sample labels -> target meaning | Lab display labels. | Qualified display examples only. | Non-contract example UI. | Lab examples; target meaning remains target-owned. | README Example Input Boundary; `example-readouts.json`. | Target terminology review remains local. | `cited-seam-fact` |
| Glass package -> target trial | Local Sense package folder. | Files target can inspect or copy. | Display-only trial material. | Lab offers; target accepts/adapts/rejects. | `MANIFEST.md`; selection shelf. | Package/export mechanics not defined. | `project-doc-orientation` |
| Static verification -> confidence floor | Source files and docs. | Verifier checks required shape and unsafe terms. | Static package assurance. | Lab verification surface. | `scripts/verify-static-starter.js`; local `\` map. | Does not prove visual/runtime/security adoption. | `cited-seam-fact` |

## Per-Seam Boundary Mapping

The first row is the active focus from `workspace/current.md` and the latest local `\` map.

| Seam | Current Question | Owner / Layer | Supported Claim | Gap / Unknown | Must Not Claim | Open Edge | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lab presentation head bridge/import boundary | Can a local seam trace produce a useful claimable seam card? | Lab / Bridge -> Interface presentation. | Yes: static starter/package/verifier/boundary docs show a clear display-only import boundary. | Target adapter correctness, adoption, Electron/runtime security, visual/manual review, package/export readiness. | Target adoption, target states, bridge/runtime contract, runtime security approval. | Target-local adapter consumption and correctness are not proven by this map. | `cited-seam-fact` |
| Glass selection shelf -> target trial conversation | Can targets select useful features without Lab owning their mapper? | Lab shelf / target review boundary. | Shelf is a menu, not a queue; target responsibilities are explicit. | Whether a target chooses and implements a feature is target-local. | That shelf selection is adoption or Dev authorization. | Target-specific use appears only after target review. | `project-doc-orientation` |
| Primitive shelf -> future framework wrappers | Are CSS/tokens the accepted base before React wrappers? | Lab primitive shelf. | CSS/tokens first; optional thin React wrappers later. | Visual acceptance of primitive examples before wrapper work. | React as canonical for all Lab glass. | Wrapper planning remains parked. | `project-doc-orientation` |

## Current Focus

| Field | Current Read |
| --- | --- |
| Focus source | `workspace/current.md`; latest local `\` map; Human request to run `|` against presentation head |
| Focus seam | Presentation head bridge/import boundary |
| What local map proved | The local static starter/package/verifier/boundary docs can support a claimable seam card for Lab's display-only head boundary. |
| What local map did not prove | Target adapter use, target adoption, visual/manual browser quality, Electron/runtime security, package/export readiness, or full Lab domain shape. |
| Boundary under pressure | Lab glass as consumable display offer vs target-owned mapper/source meaning/adoption. |
| Current interpretation need | Can the Human infer what Lab has made, how it fits together, and what use is safe to explore next? |

## Full View With Visible Gaps

Use this as a compact local orientation slice. It keeps important unknowns visible without becoming an advisory next-action list.

| Area | What Is Visible | Gap / Unknown | Basis | Resolution |
| --- | --- | --- | --- | --- |
| Entry point | Static starter and no-selector inspection page exist under `portable-presentation-starter/examples/static/`. | No target import inspected. | README; local `\` map. | `cited-seam-fact` |
| Transformation | JS renders prepared display input as text into a panel/detail surface. | Real bridge payload mapping is outside Lab. | `instrument-readout-panel.js`; local `\` map. | `cited-seam-fact` |
| Storage / state | Static starter has no persistent storage path in inspected implementation; it uses example JSON/fallback data. | Browser runtime behavior not executed. | local `\` map. | `cited-seam-fact` |
| Rendering / display | CSS supports state tones, containment, narrow behavior, and reduced motion. | No screenshot/manual visual inspection claimed in this `|` frame. | `instrument-readout-panel.css`; local `\` map. | `cited-seam-fact` |
| Logging / diagnostics | No logging/diagnostics lane in static starter files inspected. | Not a runtime diagnostics trace. | local `\` map. | `cited-seam-fact` |
| Verification | `verify:all` includes static starter verification; static verifier checks package boundaries and safety floor. | Visual, runtime, target, and security hardening remain separate. | `scripts/verify-all.js`; `scripts/verify-static-starter.js`. | `cited-seam-fact` |

## Open Edges

This map stops before proving:

- target adapter import or correctness
- target adoption or target product fitness
- visual/manual browser acceptance
- Electron/runtime security posture
- package/export mechanics beyond local folder/package notes
- React wrapper readiness
- full Lab domain shape outside the presentation head thread

## Authority Label

This map is a Human-facing orientation display. It helps the Human see project shape, gaps, seams, and boundary pressure. It is not project authority, source meaning, architecture approval, Dev authorization, target adoption, or a replacement for project-local review.

The map's authority comes from accuracy of display, not decision power.

## Freshness

| Field | Value |
| --- | --- |
| Generated at | 2026-06-16 |
| Source branch / revision | `main` / `689b8d2 Park trace impression verifier warm start` |
| Local operational map used | `workspace/trace-impression/current/project-local-operational-map.md` |
| Additional project-local sources used | `workspace/current.md`; presentation statements; display shelf pages; static starter README/package/primitive docs |
| Non-local orientation scaffolds used | None |
| Previous frame replaced | None; first Human orientation frame baseline |

## Resolution Labels

| Label | Meaning |
| --- | --- |
| `cited-seam-fact` | High-resolution local seam fact with source citation. |
| `project-doc-orientation` | Lower-resolution local project documentation context. |
| `domain-orientation` | Broad project/domain shape summarized for Human steering. |
| `structure-observed` | Project structure observed from files, docs, maps, or source layout. |
| `pipeline-inferred` | Pipeline or limb shape inferred from cited source movement, not fully proven end to end. |
| `non-local-reference` | External or orchestration scaffold used for orientation only. |
| `human-context` | Human vision or preference; useful context, not proof. |
| `inferred` | Reasoned connection that is not directly proven. |
| `not-mapped` | Known area not mapped in this pass. |
| `not-inspected` | Possible area outside this pass. |
| `not-proven` | Claim cannot be made from available source basis. |

## Basis Mix

| Basis | Used? | Resolution Label | Notes |
| --- | --- | --- | --- |
| Local operational map | yes | `cited-seam-fact` | Primary basis for the active seam. |
| Source code citations | yes | `cited-seam-fact` | Static starter file movement is based on the accepted local `\` map and inspected source paths. |
| Project docs | yes | `project-doc-orientation` | Presentation glass, warm start, selection shelf, handoff standard, and primitive docs shape the broad view. |
| Current packet | yes | `project-doc-orientation` | Current packet identifies M57 result and accepted presentation thread state. |
| Human context | yes | `human-context` | Used only to frame the test question: can the Human infer use from this map? |
| Non-local scaffolds | no | `non-local-reference` | No external Orchestration map was used. |
| Inference | yes | `inferred` / `pipeline-inferred` | Broad body/limb structure is synthesized from cited project docs and the local map. |
| Not mapped / not inspected | yes | `not-mapped` / `not-inspected` | Target projects, runtime security, browser visual proof, package publishing, React wrappers, and full Lab tooling are visible gaps. |

## Confidence Ceiling

Highest allowed certainty for this map: `project-doc-orientation` for the broad project shape; `cited-seam-fact` only for the static starter/package/verifier/boundary seam already mapped by `\`.

This map may broaden resolution for Human steering, but it must not promote conversation, non-local material, or inferred structure into project truth.

## Boundary Pressure

| Pressure | Signal | Source Basis | Current Read | Open Edge |
| --- | --- | --- | --- | --- |
| meaning pressure | Lab examples contain source-owned placeholders and state-like labels. | README Example Input Boundary; `example-readouts.json`; local `\` map. | Managed by sourceOwned qualification and repeated non-contract wording. | Target-local terminology review remains required. |
| authority pressure | Lab offers glass to targets but must not own target mapper/adoption. | ADR 0002; selection shelf; handoff standard. | Boundary is strong and repeated. | Real target trials still decide locally. |
| implementation pressure | Trace Impression revealed a possible verifier hardening task. | `workspace/trace-impression/warm-start-seeds.md`; Human correction. | Candidate belongs to presentation-head work, not Trace Impression. | Remove or relocate warm-start seed before Trace Impression is treated as shipped. |
| verification pressure | Static verifier is useful but narrow. | `scripts/verify-static-starter.js`; local `\` map. | Supports static boundary assurance only. | Visual/runtime/security proof requires separate packets. |
| adoption pressure | Sense trial package exists. | `MANIFEST.md`; current packet. | It is a display-only local trial package. | Sense adoption is not proven or claimed by Lab. |

## Growth Marks

First run uses baseline marks only. Do not assign maturity from a single impression.

| Area | Mark | Basis | Notes |
| --- | --- | --- | --- |
| Presentation glass spine | stable | presentation statements and shelves | The ownership split is repeated consistently. |
| Instrument Readout Panel Glass | stable with gaps | accepted output page and local `\` map | Static shape is clear; visual/runtime/target proof gaps remain. |
| Display primitive shelf | stable / parked extension | primitive README and warm-start statement | CSS/tokens are accepted; React wrappers are parked. |
| Sense trial package | stable local trial | package manifest | Display-only; target-local use remains outside Lab. |
| Trace Impression `|` frame | new | this file | First Human orientation frame baseline. |
| Warm-start verifier seed | watch | warm-start seed and Human correction | Useful candidate, but ownership belongs to presentation-head work. |

## Fog Cleared

- Lab's presentation work is not a general renderer mandate; it is a consumable glass shelf.
- The current offered glass is one static Instrument Readout Panel head plus selected material features.
- Target projects translate themselves; Lab does not own their mapper, source meaning, runtime, copy, review, or adoption.
- The first `\` map is enough basis to create a useful Human orientation frame for the presentation head.

## Fog Exposed

- The current map does not prove visual/manual quality.
- The current map does not prove target import, adapter correctness, or adoption.
- The current map does not prove Electron/runtime security posture.
- The current map does not settle package/export mechanics.
- The current map does not inspect full Lab tooling domains.

## Frame Comparison

Use this section as the flip-book view. Older frames inform comparison and recovery; they do not compete with the current frame.

Do not report interpretation changes as project movement. Separate source/body movement, support-context movement, interpretation movement, and map-framing movement.

| Field | Value |
| --- | --- |
| Current frame | `workspace/trace-impression/current/project-human-orientation-frame.md` |
| Previous frame compared | none |
| Comparison basis | first baseline |
| Comparison limit | no previous Human orientation frame exists |

## Comparison Classification

Use this section to keep the flip book honest.

| Change Class | Definition | Example | Report As |
| --- | --- | --- | --- |
| `source-body-change` | Direct inspected code/files changed. | Entry file, renderer, CSS, JSON, verifier, package file changed. | Project movement |
| `support-context-change` | Docs, shelves, accepted statements, or package notes changed. | Handoff standard or selection shelf changed. | Project context movement |
| `interpretation-change` | The current frame explains the same facts differently. | A boundary is understood more clearly without source changes. | Interpretation movement |
| `map-framing-change` | The template or frame structure changed. | Adding `Source Code Inspection Body` separate from `Supporting Context`. | Map/tooling movement |
| `unknown-change` | The frame cannot tell whether the project or interpretation changed. | Previous frame lacks basis labels. | Flag as unclear |

## Movement Ledger

Track major movement since the previous frame. First frame uses baseline movement.

| Area | Previous State | Current State | Movement | Change Class | Basis | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Presentation head | no previous frame | accepted warm-start glass shelf with static starter and Sense trial package | baseline | `support-context-change` | current packet; warm-start statement | Baseline for future comparison, not movement since a prior frame. |
| Source code inspection body | no previous frame | static starter files, verifier, and local trial package identified as direct body | baseline | `map-framing-change` | this frame; local `\` map | First frame establishes the category. |
| Trace Impression | no previous frame | first `\` accepted; first `|` frame created | baseline / new | `map-framing-change` | current packet; local `\` map | Tests whether Human can infer use from map. |
| Target adoption | no previous frame | not proven by Lab | baseline gap | `support-context-change` | package manifest; handoff standard | Keep as explicit gap. |

## Recurring Gaps

Use this for gaps that persist across frames or repeatedly affect steering.

| Gap | Seen In | Still Open? | Why It Matters | Current Basis |
| --- | --- | --- | --- | --- |
| Target adapter correctness | local `\` map; this `|` frame | yes | Lab must not claim target mapper behavior. | ADR 0002; local `\` map |
| Visual/manual browser acceptance | local `\` map; warm-start statement | yes | Source and verifier shape do not prove visual fit. | warm-start statement; local `\` map |
| Runtime/security posture | handoff standard; local `\` map | yes | Static safety floor is not runtime security approval. | handoff standard; local `\` map |
| Package/export mechanics | warm-start statement; selection shelf | yes | Current Sense package is a local trial folder, not distribution infrastructure. | package manifest; warm-start statement |

## Cohesion Delta

Show what became more coherent, less coherent, or unchanged since the previous frame.

| Area | Direction | Why | Basis | Notes |
| --- | --- | --- | --- | --- |
| Overall presentation head shape | unclear / first baseline | No previous frame to compare. Current frame shows strong internal cohesion. | current packet; display shelves; statements | Future frames can compare drift. |
| Trace Impression ownership | clearer | The map reveals work but does not own spawned work. | overseer snippet; context; Human correction | Warm-start seed should be cleaned before shipping Trace Impression. |
| Target boundary | clear | Repeated across ADR, manifest, shelf, and handoff standard. | ADR 0002; MANIFEST; selection shelf | Strongest current boundary. |

## Change Since Last Map

| Area | Previous Read | Current Read | Change Type | Change Class | Basis | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Human orientation frame | none | first frame generated | new | `map-framing-change` | this file | Creates baseline. |
| Local seam map | first `\` accepted | used as basis for `|` | clarified | `interpretation-change` | current packet; local map | `\` supports seam; `|` supports steering. |
| Output landing model | central/synthesis-style wording | project deep-knowledge silo wording | clarified | `map-framing-change` | updated templates/README/context | Normal path avoids cross-project bleed. |
| Source/support split | initial broad frame blended body and support context | direct inspected source body separated from supporting context | clarified | `map-framing-change` | Human review; this frame | This is map-framing improvement, not Lab source movement. |

## Interpretation Delta

Use this section when the map's understanding changes but the inspected project facts may not have changed.

| Area | Previous Interpretation | Current Interpretation | What Changed | Basis | Must Not Report As |
| --- | --- | --- | --- | --- | --- |
| Presentation-head frame scope | Broad presentation ecosystem overview could imply glass/primitives were part of the inspected source body. | `Project Structure`, `Source Code Inspection Body`, and `Supporting Context` are separate. | The frame now distinguishes direct source body from supporting Lab ecosystem. | Human review; this frame | Source code movement unless source/body files changed. |

## Unresolved Questions

- Can the Human infer useful next orientation from this frame without extra narration?
- Should the warm-start verifier seed be removed, moved, or rewritten before Trace Impression is treated as a portable shipped utility?
- Does the Human frame need less detail for routine use, with this first frame treated as an intentionally full baseline?

## Source Basis Notes

- Primary local seam basis: `workspace/trace-impression/current/project-local-operational-map.md`
- Current state basis: `workspace/current.md`
- Presentation concept basis: `docs/statements/presentation-glass-concept-capsule.md`
- Warm-start basis: `docs/statements/presentation-warm-start-package.md`
- Handoff basis: `docs/statements/presentation-head-handoff-standard.md`
- Selection shelf basis: `workspace/display-selection-shelf.md`
- Output shelf basis: `workspace/display-outputs/instrument-readout-panel-glass.md`
- Static starter basis: `portable-presentation-starter/README.md`
- Sense trial package basis: `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md`
- Primitive shelf basis: `portable-presentation-starter/primitives/README.md`
