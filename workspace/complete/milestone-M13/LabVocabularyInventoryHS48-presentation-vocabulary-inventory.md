# Lab Vocabulary Inventory HS48 - Presentation Vocabulary Inventory

Status: Completed
Date: 2026-05-24
Role: Aura Lab presentation-language auditor
Milestone: M13a - Presentation Vocabulary Inventory
Rerun: 2026-05-24, with terminology frequency synthesis read as advisory context only

## 1. Request Received

The Human asked for an artifact-only presentation vocabulary inventory for Aura Lab.

The goal is to find Lab-owned default user-facing or review-facing copy that borrows Atlas, Sense, Core, backend, proof, monitoring, history, or authority-heavy language before any implementation pass.

This packet does not authorize code changes, UI copy changes, a copy registry, verifier changes, source-owned term changes, IPC/service/schema/payload/internal identifier renames, or Atlas/Sense terminology decisions.

Rerun note: after the first artifact was written, the Human pointed to `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-frequency-synthesis-2026-05-24.md` and asked to rerun. That file was used as advisory evidence only. It did not become the work product and did not override `workspace/current.md`.

## 2. Files inspected

Read directly:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/critical/lab-vocabulary-instruction-packets.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\lab-terminology-stabilization-prompt.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-frequency-synthesis-2026-05-24.md` (advisory rerun context only)
- `package.json`
- `src/renderer/app.js`
- `src/renderer/index.html`
- `src/renderer/styles.css`
- `src/services/taskRunner.js`
- `src/services/serviceRegistry.js`
- `src/services/messageTaxonomy.js`
- `src/services/httpClient.js`
- `scripts/verify-services.js`
- `scripts/verify-renderer-shell.js`
- `workspace/OverseerHS46-bridge-interface-authority-decision.md`
- `workspace/OverseerHS47-m13a-presentation-vocabulary-inventory-runway.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`
- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`

Searched/scanned for current UI meaning:

- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`

Search patterns used:

- `rg --files package.json src\renderer src\services scripts docs\current-state workspace`
- `rg -n -i "verified|trust|certainty|proof|truth|source of truth|authoritative|evidence|intel|intelligence|tactical|combat|operator|watch|monitoring|listening|snapshot|report|record|finding|schema|\bCore\b|\bSeed\b" ...`
- `rg -n -i "Source Detail|Source coverage|Readout status|Display certainty|Verified from source|Verified from local workspace sources|Neutral Seed|seed\.|trust-strip|Bridge Diagnostics|Registered Services|visual smoke|report|snapshot|monitor" ...`
- Exact follow-up searches for `Reported by bridge`, `Verified from source`, `Verified from local workspace sources`, `Display certainty`, `Presentation boundary: sample data verifies`, `No gaps or warnings reported`, `None reported`, `No attention items reported`, `No sample items reported`, `family proof`, `visual smoke evidence`, `Neutral Seed`, `trust-strip`, `Bridge Diagnostics`, and `Registered Services`.
- Rerun cluster search informed by the advisory frequency synthesis: `observation|assessment|queue|provider|gateway|marked|discovery|scope|blocked|ready|live|sample|snapshot|report|watch|listening|monitoring|fresh|recent|stale|aged|current|runtime ready|runtime|diagnostics|services|evidence|proof|record|finding|intelligence|intel|source|basis|provenance|bridge|state|status`.

Not inspected:

- `workspace/archive/`
- completed milestone handshake artifacts under `workspace/complete/`, except current-state summaries already listed above
- live Electron/GUI state
- live network or private external project state

## 3. Short current-state understanding

Aura Lab is currently in M13a. The accepted direction is that Lab owns Bridge -> Interface human presentation language only after preserving source-project meaning. Atlas and Sense own their emitted terms and meanings. Lab should use a slim, product-agnostic display vocabulary for Lab-owned defaults.

The active UI has an accepted `Bridge State Readout` with neutral state labels: `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`. Much of the newest readout copy already uses good Lab display language: readout age, readout basis, known fields, gaps, warnings, availability, and source coverage.

Residual risky language is concentrated in older fallback strings, fixture/sample strings, current-state review language, and support diagnostics. No Atlas/Sense emitted term needed to be changed to complete this inventory.

The rerun against the advisory frequency synthesis did not add a new safe-now replacement group. It confirmed the same hotspot clusters already captured here: `source`/basis ambiguity, `certainty`/`verified`/`trust`, diagnostics/services support language, proof/evidence/report wording, `Seed`/Core ownership risk, and source-owned Atlas/Sense terms that must remain traceable.

## 4. Risky term occurrence table

| term/string | file/location | surrounding usage | classification | risk | notes |
| --- | --- | --- | --- | --- | --- |
| `Reported by bridge` | `src/renderer/index.html:40`; `src/renderer/app.js:15`, `src/renderer/app.js:91`, `src/renderer/app.js:436` | Initial/readout fallback text under the current `Readout status` surface. | replace candidate | Uses `reported`, which leans toward report/source authority language rather than display state. | Safe Lab-owned copy replacement candidate. |
| `Verified from source` | `src/renderer/app.js:448`; verifier expectation in `scripts/verify-renderer-shell.js:93` | Populated fallback certainty/action-posture wording. | replace candidate | `Verified` implies proof or authority. `source` is also unqualified. | Safe if changed with paired verifier expectation. |
| `Verified from local workspace sources.` | `src/services/serviceRegistry.js:760`; verifier expectation in `scripts/verify-services.js:144` | Project briefing `certainty` payload value. | replace candidate | `Verified` is authority-heavy as Lab default copy. | Payload key should not be renamed; string value can move to read language. |
| `Partial view; available facts are source-labeled.` | `src/services/serviceRegistry.js:758`; verifier expectations in `scripts/verify-services.js:144`, `scripts/verify-services.js:156` | Partial project briefing `certainty` payload value. | replace candidate | `facts` and `certainty` context imply truth/authority more than display condition. | Safe as value-only copy change. |
| `Display certainty` | `src/services/serviceRegistry.js:515`, `src/services/serviceRegistry.js:516`, `src/services/serviceRegistry.js:578`; verifier expectation in `scripts/verify-services.js:205` | Neutral family sample field value and visible field label. | replace candidate | `certainty` is quarantined as Lab-owned default copy. | Safe value/label replacement; verifier expectations would need updating in M13b. |
| `source, freshness, certainty, and unavailable copy` | `src/services/serviceRegistry.js:521` | Long-text neutral fixture display note. | replace candidate | Keeps `certainty` as a default display axis. | Safe string-only replacement candidate. |
| `sample data verifies display mapping` | `src/services/serviceRegistry.js:518` | Neutral long-text presentation boundary fixture copy. | replace candidate | `verifies` implies proof. | Safe string-only replacement candidate. |
| `No gaps or warnings reported.` | `src/renderer/app.js:323` | Source/detail empty state line. | replace candidate | `reported` leans toward report language when display-scoped wording is enough. | Safe replacement candidate. |
| `None reported` | `src/renderer/app.js:367` | Empty attention count. | replace candidate | `reported` is unnecessary Lab-default report language. | Safe replacement candidate. |
| `No attention items reported.` | `src/renderer/app.js:368`; `src/services/serviceRegistry.js:352`, `src/services/serviceRegistry.js:382`; verifier expectations in `scripts/verify-services.js:172` and `scripts/verify-renderer-shell.js:82` | Empty attention list copy. | replace candidate | `reported` is unnecessary report language. | Safe value replacement; update verifier expectations in M13b. |
| `No sample items reported.` | `src/services/serviceRegistry.js:442`, `src/services/serviceRegistry.js:447`; verifier expectation in `scripts/verify-services.js:213` | Neutral family empty sample copy/title. | replace candidate | `reported` is unnecessary report language. | Safe replacement candidate. |
| `presentation family proof` | `src/services/serviceRegistry.js:693`; also current-state docs for M07/M08/M09/M10 | Long-text briefing fixture and accepted review docs. | replace candidate for fixture; archive/historical for docs | `proof` is authority-heavy. | Fixture string is safe; completed current-state docs need Overseer decision before restatement. |
| `visual smoke evidence`; `recorded for Overseer review` | `src/services/serviceRegistry.js:694`; related docs in `docs/current-state/*` | Long-text fixture expected-output copy and review-state docs. | replace candidate for fixture; archive/historical for docs | `evidence` and `recorded` sound proof/history-heavy as Lab default copy. | Fixture string is safe; docs should not be rewritten without direction. |
| `Neutral Seed` | `src/services/serviceRegistry.js:56`, `src/services/serviceRegistry.js:491`; `src/renderer/styles.css:598`, `src/renderer/styles.css:602`; multiple current-state docs | Visible presentation family label and internal family id/CSS compatibility name. | replace candidate | `Seed` can imply Aura Core scaffold/ownership. | Do not rename `neutral-seed` ids or CSS. Visible label/name needs Human/Overseer decision. |
| `seed.health`, `seed.readiness`, `seed runtime readiness` | `src/services/serviceRegistry.js:132`, `src/services/serviceRegistry.js:141`, `src/services/serviceRegistry.js:268`; `src/renderer/app.js:21`; `scripts/verify-services.js:113`, `scripts/verify-services.js:120`, `scripts/verify-services.js:124` | Service commands, service descriptions, readiness source labels, verifier assertions. | internal/support | Contains `seed`, but these are inherited service/runtime identifiers. | Explicitly left alone. Do not rename service commands or payload/source identifiers. |
| `trust-strip`; `trust band`; `trust text`; `trust/state grammar` | `src/renderer/index.html:37`; `src/renderer/styles.css:252`, `src/renderer/styles.css:270`, `src/renderer/styles.css:313`, `src/renderer/styles.css:696`; `scripts/verify-renderer-shell.js:52`; `docs/current-state/m01...:10`, `:15`, `:16`; `docs/current-state/m04...:10`, `:23`; `docs/current-state/m08...:30` | CSS class/internal assertion plus completed current-state review wording. | internal/support for code; archive/historical for docs | `trust` is quarantined as Lab default copy. | No visible UI string in current renderer. Do not rename CSS compatibility names in M13b unless specifically authorized. |
| `Source Detail`, `Source coverage`, `Source paths`, `Source: ...` | `src/renderer/index.html:43`, `src/renderer/index.html:67`; `src/renderer/app.js:175`, `src/renderer/app.js:381` | Visible readout/detail labels and attention item provenance label. | Lab display | `source` is accepted for now but can imply authority unless the layer is clear. | Needs Human/Overseer decision if moving to lower-authority `Readout Detail`/`Display basis` language. |
| `Bridge Diagnostics`, `Registered Services`, `Runtime`, `Commands`, `service bridge` | `src/renderer/index.html:30`, `src/renderer/index.html:128`, `src/renderer/index.html:129`, `src/renderer/index.html:132`, `src/renderer/index.html:136`, `src/renderer/index.html:142`; `src/renderer/app.js:435`, `src/renderer/app.js:542` | Secondary support panels and boot/loading copy. | internal/support | Backend/service console language can compete with presentation-first direction. | Secondary and accurate; leave unless Overseer decides to soften support panels. |
| `proof`, `evidence`, `certainty`, `trust`, `Core-neutral`, `Tactical HUD`, `Operator Workbench`, `report(ed)` in completed current-state docs | `docs/current-state/m00...`; `m01...`; `m04...`; `m05...`; `m06...`; `m07...`; `m08...`; `m09...`; `m10...`; `m11...` | Durable accepted-state summaries and review context. | archive/historical | Many terms are now risky as Lab default language, but these docs record completed milestones and boundaries. | Treat as background. Any docs restatement should be a separate Overseer-directed packet, not silent cleanup. |
| `Atlas evidence doctrine`; `Sense tactical doctrine`; source-owned Atlas/Sense preserve-exact terms in authority files | `workspace/OverseerHS46-bridge-interface-authority-decision.md:37`; `docs/current-state/m09...:85`, `docs/current-state/m09...:86`; `docs/current-state/m11...:28`, `docs/current-state/m11...:30`; critical term files | Boundary and authority statements. | source-owned | These terms are risky as Lab defaults but required when naming source ownership boundaries. | Intentionally preserved; not Lab display defaults. |

## 5. Proposed replacement table

| current string | file/location | risk category | why risky | proposed Lab wording | safe now: yes/no | owner/decision needed |
| --- | --- | --- | --- | --- | --- | --- |
| `Reported by bridge` | `src/renderer/index.html:40`; `src/renderer/app.js:15`, `:91`, `:436` | report/authority | Uses report language for a display state. | `Bridge read pending` or `Awaiting bridge read` | yes | Lab Overseer acceptance for M13b |
| `Verified from source` | `src/renderer/app.js:448`; `scripts/verify-renderer-shell.js:93` | proof/authority | `Verified` implies proof. | `Read from source` | yes | Lab Overseer acceptance for M13b |
| `Verified from local workspace sources.` | `src/services/serviceRegistry.js:760`; `scripts/verify-services.js:144` | proof/authority | `Verified` implies proof and certainty. | `Read from local workspace sources.` | yes | Lab Overseer acceptance for M13b |
| `Partial view; available facts are source-labeled.` | `src/services/serviceRegistry.js:758`; `scripts/verify-services.js:144`, `:156` | truth/authority | `facts` plus certainty-field context implies truth. | `Partial readout; available fields include source labels.` | yes | Lab Overseer acceptance for M13b |
| `Display certainty` | `src/services/serviceRegistry.js:515`, `:516`, `:578`; `scripts/verify-services.js:205` | certainty | `certainty` is quarantined as Lab default copy. | `Display basis` or `Readout basis` | yes | Lab Overseer acceptance for M13b |
| `Display note: this neutral family uses generic sample slots to keep source, freshness, certainty, and unavailable copy visible under longer text pressure.` | `src/services/serviceRegistry.js:521` | certainty/source authority | Treats `certainty` as an accepted display axis. | `Display note: this neutral family uses generic sample slots to keep basis, freshness, and availability copy visible under longer text pressure.` | yes | Lab Overseer acceptance for M13b |
| `Presentation boundary: sample data verifies display mapping only and does not define product meaning or an upstream bridge contract.` | `src/services/serviceRegistry.js:518` | proof/authority | `verifies` implies proof. | `Presentation boundary: sample data exercises display mapping only and does not define product meaning or an upstream bridge contract.` | yes | Lab Overseer acceptance for M13b |
| `No gaps or warnings reported.` | `src/renderer/app.js:323` | report | Report language is unnecessary. | `No gaps or warnings shown.` | yes | Lab Overseer acceptance for M13b |
| `None reported` | `src/renderer/app.js:367` | report | Report language is unnecessary. | `None shown` | yes | Lab Overseer acceptance for M13b |
| `No attention items reported.` | `src/renderer/app.js:368`; `src/services/serviceRegistry.js:352`, `:382`; verifier expectations | report | Report language is unnecessary. | `No attention items shown.` | yes | Lab Overseer acceptance for M13b |
| `No sample items reported.` | `src/services/serviceRegistry.js:442`, `:447`; verifier expectation | report | Report language is unnecessary. | `No sample items shown.` | yes | Lab Overseer acceptance for M13b |
| `Implement the first bounded fixture-backed presentation family proof...` | `src/services/serviceRegistry.js:693` | proof/backend | `proof` is too authority-heavy for fixture copy. | `Implement the first bounded fixture-backed presentation family prototype...` | yes | Lab Overseer acceptance for M13b |
| `visual smoke evidence, screenshot notes, process cleanup, and residual risk recorded for Overseer review` | `src/services/serviceRegistry.js:694` | evidence/history | `evidence` and `recorded` overstate the display fixture. | `visual smoke notes, screenshot notes, process cleanup, and residual risk captured for Overseer review` | yes | Lab Overseer acceptance for M13b |
| `Neutral Seed` visible label | `src/services/serviceRegistry.js:56`, `:491`; docs/current-state | Core/Seed ownership | `Seed` can imply Core scaffold or Core ownership. | Candidate: `Neutral Surface` or `Neutral Sample` for visible label only | no | Human/Overseer decision; do not rename `neutral-seed` id/CSS/payload without explicit packet |
| `Source Detail`, `Source coverage`, `Source paths`, `Source: ...` | `src/renderer/index.html:43`, `:67`; `src/renderer/app.js:175`, `:381` | source authority ambiguity | `source` can imply authority/truth if layer is unclear. | Candidate: `Readout Detail`, `Coverage`, `Display paths`, `Basis: ...` | no | Human/Overseer decision; `Source Detail` is currently accepted/watch-listed |
| `Bridge Diagnostics`, `Registered Services`, `Runtime`, `Commands` | `src/renderer/index.html:128-142` | backend/support | Backend/service wording can pull the surface away from presentation-first language. | Candidate: `Bridge Support`, `Service Availability`, or keep as secondary diagnostics | no | Human/Overseer decision on whether support panels should remain visible |
| `trust-strip` / `trust band` | `src/renderer/index.html:37`; `src/renderer/styles.css`; docs/current-state | trust | `trust` is quarantined as Lab default copy. | Candidate for internal-only future: `basis-strip` | no | Do not rename CSS compatibility names without explicit implementation packet |
| Completed current-state wording: `trust`, `certainty`, `proof`, `evidence`, `Core-neutral`, `Tactical HUD`, `Operator Workbench`, `reported` | `docs/current-state/*` | historical/review-facing | Current-state docs feed meaning but also record accepted milestone history. | Add a new vocabulary stabilization note or update only with Overseer direction | no | Human/Overseer decision; avoid silent historical rewrite |

## 6. Safe-now replacements

Safe-now means safe as Lab-owned display/review copy after Overseer acceptance in M13b. It does not mean this M13a packet changed anything.

Safe-now candidate groups found: 13.

- `Reported by bridge` -> `Bridge read pending` or `Awaiting bridge read`
- `Verified from source` -> `Read from source`
- `Verified from local workspace sources.` -> `Read from local workspace sources.`
- `Partial view; available facts are source-labeled.` -> `Partial readout; available fields include source labels.`
- `Display certainty` -> `Display basis` or `Readout basis`
- Long neutral display note using `certainty` -> basis/freshness/availability wording
- `sample data verifies display mapping` -> `sample data exercises display mapping`
- `No gaps or warnings reported.` -> `No gaps or warnings shown.`
- `None reported` -> `None shown`
- `No attention items reported.` -> `No attention items shown.`
- `No sample items reported.` -> `No sample items shown.`
- Long-text fixture `presentation family proof` -> `presentation family prototype`
- Long-text fixture `visual smoke evidence ... recorded` -> `visual smoke notes ... captured`

Expected M13b files if only safe-now replacements are accepted:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/services/serviceRegistry.js`
- `scripts/verify-services.js`
- `scripts/verify-renderer-shell.js`

Verification would be required in M13b because verifier assertions currently expect some risky strings.

## 7. Needs Human / Overseer decision

Decision items found: 5.

1. `Neutral Seed` visible family name.
   - Risk: `Seed` can imply Core/scaffold ownership.
   - Recommendation: decide whether visible label should become `Neutral Surface`, `Neutral Sample`, or remain `Neutral Seed` with explicit Lab-local context.
   - Guardrail: do not rename `neutral-seed` ids, CSS selectors, fixture state paths, screenshot names, or payload values without an explicit implementation packet.

2. `Source Detail` and related source labels.
   - Risk: `source` can imply authority/truth unless layer-qualified.
   - Recommendation: decide whether accepted `Source Detail` remains or moves toward `Readout Detail` / `Display basis`.

3. Secondary backend/support panels.
   - Risk: `Bridge Diagnostics`, `Registered Services`, `Runtime`, and `Commands` keep backend console language visible.
   - Recommendation: decide whether these remain visibly secondary support surfaces, are relabeled, or are hidden from the primary presentation path later.

4. `trust-strip` internal compatibility name and completed-doc `trust band` language.
   - Risk: `trust` is quarantined as Lab default copy.
   - Recommendation: leave code identifiers alone unless a future packet explicitly authorizes compatibility-name cleanup. Completed docs should not be silently rewritten.

5. Completed current-state docs with `certainty`, `proof`, `evidence`, `Core-neutral`, `Tactical HUD`, `Operator Workbench`, and `reported`.
   - Risk: review-facing docs can continue teaching older vocabulary.
   - Recommendation: if desired, create a separate Overseer packet for a vocabulary stabilization note rather than editing accepted milestone history in-place.

## 8. Source-owned terms intentionally preserved

No active renderer/service payload required deciding whether to change an Atlas/Sense-emitted term.

The following source-owned or source-boundary terms were intentionally preserved when encountered in authority/current-state context:

- Atlas `Evidence`
- Atlas `Discovery`
- Atlas `Marked` / `Watch`
- Atlas `Enrich selected`
- Atlas `Refresh labels`
- Sense `Combat Witness`
- Sense `Threat Intel`
- Sense `Clipboard Acquisition`
- Sense `Live IO blocked`
- Sense `Gateway`
- Sense `Pulling`, `Listening`, and `Cooldown` when named by Sense authority
- Boundary phrases such as `Atlas evidence doctrine` and `Sense tactical doctrine`

Reason: these terms are risky as Lab-owned defaults, but they are valid when used to preserve source-project ownership or meaning boundaries.

## 9. Internal/support terms intentionally left alone

The inventory found several risky-looking terms that should not be renamed by a presentation-copy pass:

- Service commands: `seed.health`, `seed.readiness`, `aura.projectBriefing`, `aura.presentationFixture`, `task.list`, `task.cancel`, `util.checksum`
- IPC channels: `aura:service:list`, `aura:service:invoke`
- Payload/internal fields: `certainty`, `source_labels`, `sources`, `view_status`, `missing_fields`, `available_states`, `available_modes`, `family`, `state`, `mode`
- Internal family id and CSS/data compatibility names: `neutral-seed`, `trust-strip`, `state-core`, `service-diagnostics`, `data-family="neutral-seed"`
- Verification/result support terms: `visual smoke`, `families_checked`, `states_checked`, `viewports_checked`, `screenshots`, `observations`, verifier assertion messages
- Neutral fixture safety verifier terms: `evidence`, `tactical`, `operator`, `assessment`, `watch`, `queue`, `combat`, `intelligence`, `core source`, `core seed`, `schema`, `source of truth`, `approved`, `synced`, and `live` when used only as blocked-word assertions in `scripts/verify-services.js`
- Task/service runtime terms: `recorded` in task-runner comments/assertions, taxonomy codes, lock classifications, `RUNTIME_PATHS_INVALID`
- Package scripts: `verify:core`, `verify:services`, `verify:renderer-shell`, `smoke:electron`

Reason: current packet explicitly forbids renaming service commands, schemas, payload fields, CSS compatibility names, IPC channels, and internal identifiers. Some may be visible in support panels, but changing them would require a separate accepted implementation decision.

## 10. Recommended next packet

M13b appears ready if the Overseer accepts the safe-now list and parks the five decision items above.

Recommended M13b scope:

- Replace only the 13 safe-now Lab-owned display/review copy groups listed in section 6.
- Update only directly affected verifier expectations.
- Do not add a copy registry unless Overseer explicitly asks for it.
- Do not rename service commands, IPC channels, payload fields, CSS classes, family ids, screenshot names, or source-owned Atlas/Sense terms.
- Do not rewrite completed current-state docs unless a separate docs-stabilization packet is accepted.

Recommended M13b verification:

- `npm.cmd run verify:all`
- Include `npm.cmd run verify:renderer-shell` if run separately for clearer copy-surface evidence.
- Run Electron visual smoke only if copy/layout changes create a meaningful rendering risk or the M13b packet requires it.

No code verification was run for M13a because this packet only created the expected inventory artifact.
