# DisplayTaxonomyHS73 - Terminology To Slot Map

Date: 2026-05-25
Role: UI development owner / display asset documentor
Project: Aura Lab
Milestone: M20 - Display Vocabulary And Slot Taxonomy
Status: Advisory documentation artifact

## Purpose

Map relevant Lab, Atlas, and Sense terminology into display classes, display types, and likely Lab-owned slot needs.

This is not a glossary, implementation packet, bridge contract, target-project adoption plan, or shared Aura doctrine. It is a practical display-taxonomy layer for Aura Lab's display-elements workshop.

## Files Reviewed

Project-local:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/current.md`
- `workspace/workshop/README.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/OverseerProposalHS72-lab-display-inventory-and-material-contract.md`
- `workspace/OverseerProposalHS72-display-elements-workshop-and-material-bench.md`
- `docs/current-state/m19-instrument-status-band-current-state.md`

Shared terminology / critical sources:

- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\Lab-Terminology-Boundary-Requirements-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\Atlas-Terminology-Boundary-Requirements-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\Sense-Terminology-Boundary-Requirements-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-critical-cross-project-synthesis-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-frequency-synthesis-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Lab\critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Atlas\critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Sense\critical-terms.md`

No implementation files were changed. No source code inspection was needed beyond accepted current-state and terminology artifacts because M20 is documentation/advisory classification work.

## Method

Terms were classified by:

1. Owner: Lab, Atlas, Sense, Human/shared policy, or unresolved.
2. Layer: internal, Project -> Bridge, Bridge -> Interface, support/diagnostic, or advisory.
3. Display class: the kind of display pressure the term creates.
4. Display type: the kind of element or treatment likely needed.
5. Likely slot need: the Lab-owned slot vocabulary that can present the need without owning source meaning.

Frequency and cross-project synthesis were used as discovery input only. They were not treated as authority.

## Display Class Model

| Display class | What it means | Typical slot needs |
| --- | --- | --- |
| Identity / label | What this readout, lane, item, or source-owned object is called. | label, source-owned label, family label, item title |
| Primary value | The most important readable value or status. | primary value, state label, count, short status |
| State / availability | Whether the readout is current, pending, incomplete, unavailable, blocked, empty, or degraded. | state label, status light, availability note, marker |
| Freshness / age | How recent the readout basis is. | readout age, last read, freshness note |
| Basis / source / provenance | What the display is based on and where source-owned meaning comes from. | readout basis, source coverage, source-owned basis, detail row |
| Coverage / completeness | What is known, missing, capped, partial, or scoped. | known fields, coverage count, gaps, cap note, sample note |
| Warning / caution | What should be noticed without overclaiming failure. | warning marker, muted edge, warning row |
| Detail / reveal | Inspectable secondary context. | detail reveal, detail rows, source-owned note |
| Action / effect | User-facing action or command effect that must preserve source meaning. | action label, effect note, authority note |
| Runtime / diagnostics | Support state that should stay secondary. | diagnostics row, service status, runtime note |
| Material / surface | Visual treatment that carries grouping and state. | band, inset panel, rail, status light, warning edge |
| Composition / nesting | How display elements combine. | parent slot, child surface, reveal container |

## Terminology Class / Type Table

| Term / cluster | Owner | Layer | Source artifact | Display class | Display type | Likely slot need | Source meaning risk | Lab translation allowed | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Bridge State Readout` | Lab | Bridge -> Interface | Lab critical terms; M19 current state | Identity / label | Primitive module label | asset label, readout label | Could be mistaken for upstream bridge structure. | Yes, Lab-owned; preserve current accepted label unless Overseer changes it. | Accepted feature label; Instrument Status Band is the accepted primitive built on it. |
| `Instrument Status Band` | Lab | Bridge -> Interface | M19 current state; HS72 proposals | Identity / surface | Primitive module | asset label, band surface | Could become a shared component claim if overpromoted. | Yes, Lab-owned. | First accepted display asset candidate for inventory. |
| `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, `NO DATA` | Lab | Bridge -> Interface | Lab critical terms; M19 current state | State / availability | Readout state labels | state label, status light, marker, detail state | Could become a shared enum if exported casually. | Yes for Lab display only. | Treat as Lab presentation labels, not Atlas/Sense backend states. |
| `Readout status` | Lab | Bridge -> Interface | Lab critical terms | State / basis | Compact status text | status phrase, readout basis | Can drift toward proof/confidence language. | Yes. | Prefer concrete basis/availability wording. |
| `Readout basis` / `Display basis` | Lab | Bridge -> Interface | Lab critical terms; frequency synthesis | Basis / source / provenance | Basis line / detail row | basis line, detail row | Can become vague if it hides source-owner meaning. | Yes, when source meaning remains traceable. | Core slot for almost every primitive. |
| `Readout age` / `Last read` | Lab | Bridge -> Interface | Lab critical terms; M19 current state | Freshness / age | Age line / timestamp | readout age, last read | Can overstate live freshness if not tied to read timing. | Yes. | Prefer concrete timing over generic fresh/current claims. |
| `Source coverage` | Lab | Bridge -> Interface | Lab critical terms | Coverage / completeness | Source count / coverage chip | source coverage, coverage count | `Source` can imply authority. | Yes, if display-scoped. | Good candidate slot; should stay near basis/detail. |
| `Known fields` | Lab | Bridge -> Interface | Lab critical terms | Coverage / completeness | Detail row / field count | known fields, coverage list | Could imply shared field schema. | Yes, as display completeness only. | Useful in detail reveals and compact coverage panels. |
| `Gaps` | Lab | Bridge -> Interface | Lab critical terms | Coverage / completeness | Gap marker / detail list | gaps, gap count, gap list | Could be read as source absence rather than display incompleteness. | Yes. | Pair with available fields when possible. |
| `Warnings` | Lab | Bridge -> Interface / support | Lab critical terms | Warning / caution | Warning marker / muted edge | warning marker, warning list | Can sound like source-project error if not scoped. | Yes. | Should be secondary unless the warning changes display availability. |
| `Readout Detail` / `Source Detail` | Lab | Bridge -> Interface | Lab critical terms; M19 current state | Detail / reveal | Detail drawer / reveal | detail reveal, detail rows | `Source Detail` can imply source authority. | Yes, but `Readout Detail` is safer current visible label. | Natural next primitive candidate. |
| `Briefing`, `Neutral Sample`, `Presentation family`, `Review state` | Lab | Fixture / review | Lab critical terms; M19 current state | Identity / label | Fixture selector / review control | family label, review state label | Could become product navigation or shared doctrine. | Yes, only as Lab-local review language. | Useful for display material bench but not target copy. |
| `Bridge Diagnostics`, `Registered Services`, runtime readiness | Lab | Support / diagnostic | Lab critical assets; M19 current state | Runtime / diagnostics | Secondary support surface | diagnostics row, support note | Can pull Lab back into tooling-first product direction. | Yes, secondary only. | Keep separate from display asset primary read. |
| `Discovery` / `Discovery Queue` / `possible leads` | Atlas | Project -> Bridge / Atlas presentation | Atlas critical terms; ruleset | Basis / source / action staging | Staged source-owned list | source-owned label, stage label, basis note | Must not be presented as Atlas `Evidence`. | Only with Atlas ownership preserved. | Implies list/queue display with pre-expansion basis and effect boundary. |
| `Evidence` | Atlas | Project -> Bridge / Atlas doctrine | Atlas critical terms; ruleset | Basis / source / provenance | Source-owned durable item / basis | source-owned label, provenance row, durability note | High: generic use would import Atlas doctrine. | Only as source-owned Atlas term. | Lab should not use as generic support or display word. |
| `Observation` / `Activity event` | Atlas | Project -> Bridge / report layer | Atlas critical terms | Primary value / detail | Observed item row / activity strip | item label, observed value, basis note | Atlas observation differs from Sense observed lane data. | Only with owner/layer visible. | Suggests future event/list/timeline assets, not M20 implementation. |
| `Assessment Memory` | Atlas | Project -> Bridge / Atlas stored judgment | Atlas critical terms | Detail / source-owned object | Saved judgment display | source-owned label, citation/basis slot, age | Could be mistaken for raw evidence or automated assessment. | Only with Atlas ownership preserved. | Needs explicit basis/citation treatment if ever presented. |
| `Marked` | Atlas | Project -> Bridge / action state | Atlas critical terms | State / action | Attention marker | source-owned state label, marker, action note | Can be collapsed with Watch incorrectly. | Only with Atlas meaning preserved. | Display needs an attention marker distinct from active routine check. |
| `Watch` | Atlas | Project -> Bridge / active routine check | Atlas critical terms; synthesis | Action / effect | Active check state | source-owned state label, cadence/authority note | Collides with generic watching/listening and Sense watcher terms. | Only with Atlas ownership preserved. | Requires cadence, gate, and effect slots if presented. |
| `Enrich selected` | Atlas | Project -> Bridge / evidence creation action | Atlas critical terms | Action / effect | Action command treatment | action label, effect note, authority note | Evidence-creating effect can be hidden by soft label. | Preserve source effect; Lab may present surrounding explanation. | Needs visible call/write/effect context. |
| `Refresh labels` | Atlas | Project -> Bridge / metadata readability action | Atlas critical terms | Action / effect | Action command treatment | action label, effect note | Can be confused with evidence enrichment. | Preserve source meaning. | Needs "readability-only" style treatment if displayed. |
| `Collection Provenance` / `Evidence Basis` | Atlas | Project -> Bridge / report detail | Atlas critical terms | Basis / source / provenance | Provenance/detail panel | source-owned basis, provenance row, source coverage | Can sound like generic source if stripped. | Only with Atlas ownership visible. | Maps to Lab basis/detail patterns, but source-owned label remains. |
| `Runtime snapshot` / `Debug trace pack` / `Corpus health` | Atlas | Support / diagnostic | Atlas critical terms | Runtime / diagnostics | Support artifact / health panel | support label, diagnostics row, availability note | Could be confused with Sense lane snapshots or product outputs. | Only with support context. | Not primary display asset direction. |
| `Combat Witness` | Sense | Project -> Bridge / lane | Sense critical terms | Identity / label | Lane / readout identity | source-owned lane label, freshness, observed count | Must not imply durable history or Atlas Evidence. | Only with Sense ownership preserved. | Display pressure: observed/recent lane with freshness and caution. |
| `Passive Telemetry` | Sense | Project -> Bridge / lane | Sense critical terms | Identity / label | Lane / status band | source-owned lane label, state, freshness | Must not imply background scan or complete awareness. | Only with Sense ownership preserved. | Sense has already adapted Lab instrument grammar while retaining lane meaning. |
| `Threat Intel` | Sense | Project -> Bridge / lane/action | Sense critical terms | Action / primary value | Scoped scan readout | source-owned lane label, target, sample note, state | Can imply complete intelligence or ongoing monitoring. | Only with Sense ownership preserved. | Needs sample/cap/failure/live-IO slots if displayed. |
| `Clipboard Acquisition` | Sense | Project -> Bridge / lifecycle | Sense critical terms | Action / authority | Short authority window | lifecycle state, authority note, timer/cooldown | Must not become background clipboard monitoring. | Preserve exact meaning unless Sense/Human allows translation. | Needs lifecycle/status treatment rather than generic availability. |
| `Gateway` | Sense | Project -> Bridge / UI context marker | Sense critical terms | Identity / interaction | Context marker / mode label | source-owned label, interaction hint | Collides with gate/bridge boundary terms. | Needs Sense/Human decision for translation. | Keep distinct from live IO gate and Lab bridge boundary. |
| `Live IO blocked` | Sense | Project -> Bridge / backend authority | Sense critical terms | State / availability / authority | Authority-block state | availability note, blocked reason, authority marker | Must not collapse with provider failure, no scan, no data, or unavailable. | Preserve source meaning. | Important slot pressure: blocked reason is its own thing. |
| `Partial sample`, `Capped sample`, `Scoped sample` | Sense | Project -> Bridge / provider result | Sense critical terms | Coverage / completeness | Sample/cap marker | sample note, cap marker, coverage count, gaps | Can be read as complete coverage if cap hidden. | Preserve source meaning. | Strong reason for sample/cap slots in future assets. |
| `No scan` | Sense | Project -> Bridge / lane state | Sense critical terms | State / availability | Empty deliberate-action state | state label, no-action note | Can be collapsed into Lab `NO DATA` incorrectly. | Only with deliberate-scan meaning preserved. | No-scan is different from no provider data. |
| `Observed Source`, `Observed Weapon`, `Observed repair balance` | Sense | Project -> Bridge / observed lane values | Sense critical terms | Primary value / basis | Observed value row | observed label, value, basis/freshness | Unsupported interpretation could become hostile/safe/predictive wording. | Preserve observed wording. | Good model for Lab "observed value" slot family. |
| `Provider pulse` | Sense | Project -> Bridge / provider sample status | Sense critical terms | State / freshness / coverage | Provider/sample status strip | provider state, sample note, freshness | "Pulse" may imply continuous heartbeat. | Needs owner review. | Candidate for Lab translation to sample status if Sense allows. |
| `Pulling`, `Listening`, `Cooldown` | Sense | Project -> Bridge / clipboard lifecycle | Sense critical terms | State / action lifecycle | Lifecycle state strip | lifecycle state, timer, authority note | Listening can imply background monitoring. | Preserve source meaning; exactness needs owner decision. | Strong future material for lifecycle display types. |
| `Fresh`, `Recent`, `Stale`, `Aged`, `Current` cluster | Lab / Sense / Atlas by context | Bridge -> Interface or Project -> Bridge | Synthesis; project critical terms | Freshness / age | Age/freshness treatment | freshness label, last read, observed at, expiry | Shared-looking words have project-specific meaning. | Lab may use own labels; source labels need qualifiers. | Treat as display pressure cluster, not shared enum. |
| `Blocked`, `Unavailable`, `Failed`, `Degraded`, `Empty`, `Partial`, `Capped` cluster | Lab / Sense / Atlas by context | Mixed | Synthesis; project critical terms | State / availability / coverage | State treatment family | availability note, reason, gap/cap marker | Collapsing these hides authority, provider, absence, or completeness differences. | Translate only after owner/layer classification. | Needs a state distinction table in future inventory docs. |
| `Source`, `Basis`, `Provenance` cluster | Lab / Atlas / Sense by context | Mixed | Frequency synthesis; critical synthesis | Basis / source / provenance | Basis/detail treatment | readout basis, source-owned basis, provenance, coverage | Source can imply authority; provenance is Atlas-heavy. | Lab may use qualified basis language. | Central display class, not a single shared term. |
| `Report`, `Readout`, `Snapshot` cluster | Lab / Atlas / Sense by context | Mixed | Frequency synthesis; critical synthesis | Detail / output / payload | Output container | readout label, source-owned output label, detail reveal | Durability differs sharply. | Use lowest precise owner/layer. | Lab should prefer `readout` for Lab-owned default copy. |

## Recurring Display Pressures

1. **Owner pressure**
   - A display may need to show both Lab presentation labels and source-owned labels.
   - Slot implication: `source owner`, `source-owned label`, `Lab display label`.

2. **Freshness pressure**
   - Current, recent, fresh, aged, stale, and observed-at terms all need timing and context.
   - Slot implication: `readout age`, `last read`, `observed at`, `expires/expired`, `freshness note`.

3. **Basis pressure**
   - Source, basis, provenance, provider, sample, and collection terms require explanation of what the readout rests on.
   - Slot implication: `readout basis`, `source coverage`, `source-owned basis`, `provenance/detail row`.

4. **Completeness pressure**
   - Partial, capped, scoped, gaps, known fields, possible leads, and no-scan terms require visible limits.
   - Slot implication: `coverage count`, `known fields`, `gaps`, `cap marker`, `sample note`.

5. **Authority pressure**
   - Live IO blocked, Enrich selected, Watch, Clipboard Acquisition, and provider gates carry action or permission meaning.
   - Slot implication: `authority note`, `effect note`, `blocked reason`, `lifecycle state`, `action scope`.

6. **Durability pressure**
   - Atlas Evidence and reports, Sense lane snapshots, and Lab readouts have different persistence expectations.
   - Slot implication: `durability note`, `source-owned output label`, `detail reveal`.

7. **Absence pressure**
   - No data, no scan, unavailable, failed, empty, blocked, degraded, and fallback are not interchangeable.
   - Slot implication: `absence reason`, `availability note`, `fallback basis`, `next possible read`.

8. **Density pressure**
   - Long basis lines, source paths, warning explanations, scoped sample notes, and provenance detail need containment.
   - Slot implication: `compact summary`, `detail reveal`, `long text block`, `overflow-safe row`.

9. **Narrow-shell pressure**
   - Status, age, basis, and warning/gap markers need stable priority when the surface collapses.
   - Slot implication: `priority order`, `compact marker`, `drawer summary`, `stacked meta`.

10. **Secondary diagnostics pressure**
   - Runtime, command, service, smoke, and support artifacts need demotion.
   - Slot implication: `support surface`, `diagnostic row`, `secondary state`.

## Initial Lab-Owned Slot Vocabulary

Accepted candidate slot names:

| Slot name | Purpose | Notes |
| --- | --- | --- |
| `asset label` | Names the display asset or primitive. | Lab-owned. |
| `readout label` | Names the human-facing readout. | Use source-owned labels only when qualified. |
| `primary value` | Main value/status a user reads first. | Can be text, count, state, or source-owned value. |
| `secondary value` | Supporting value visible before detail. | Useful for compact bands and value rails. |
| `state label` | Text state, not color-only state. | Lab states or source-owned states depending on layer. |
| `status light` | Non-color-only state indicator. | Shape/pattern plus label nearby. |
| `readout basis` | What the display is based on. | Lab-owned default term. |
| `readout age` | Freshness/timing of the display basis. | Prefer concrete timing. |
| `source coverage` | Count/list of available display sources. | Display-scoped; avoid authority implication. |
| `known fields` | Fields/slots present in the readout. | Display completeness, not shared schema. |
| `gaps` | Missing/incomplete display slots. | Pair with known fields where possible. |
| `warnings` | Non-blocking caution text. | Secondary unless blocking. |
| `availability note` | Why a readout is available/unavailable/blocked/empty. | Needed to avoid state collapse. |
| `fallback basis` | What fallback display is based on. | Only when explicit. |
| `sample note` | Scoped/capped/partial sample explanation. | Important for Sense-like provider samples. |
| `cap marker` | Visible cap/limit marker. | Prevents overreading sampled data. |
| `authority note` | Permission/gate/blocked/action authority explanation. | Needed for live IO and action effects. |
| `effect note` | What an action does or does not do. | Needed for Atlas action labels. |
| `source-owned label` | Exact or qualified source-project term. | Keeps owner/layer visible. |
| `source-owned basis` | Source-project basis/provenance language. | Use when Lab basis language would erase meaning. |
| `detail reveal` | Expandable secondary context surface. | Candidate primitive family. |
| `detail row` | Key/value or label/value row inside detail. | Good default detail grammar. |
| `long text block` | Contained paragraph/list display. | Needed for material bench. |
| `diagnostic row` | Secondary support/status row. | Keeps diagnostics demoted. |
| `narrow summary` | Minimal collapsed text that survives small shells. | Should include state, age, and one basis/availability cue. |

Unresolved or conditional slot names:

| Candidate | Issue | Recommended disposition |
| --- | --- | --- |
| `provenance` | Atlas-heavy and source-owned in many contexts. | Use as source-owned detail where emitted; Lab default should prefer `readout basis` or `source coverage`. |
| `confidence` | Can imply proof. | Avoid as Lab default. |
| `verification` | Useful for commands/support, risky in user readout. | Use only in verification/support sections, not display slots. |
| `provider pulse` | Sense-owned/risky continuous implication. | Needs Sense owner review before Lab translation. |
| `Gateway` | Sense UI context marker. | Preserve as Sense-owned unless Human/Sense allows Lab restyle. |
| `Watch` | Atlas active routine check; collides with other meanings. | Preserve source-owned only; do not make Lab slot. |
| `report` | Different durability by project. | Lab default should use `readout`; source-owned reports stay qualified. |
| `snapshot` | Sense lane payload and Atlas support artifact differ. | Avoid as Lab default display slot. |

## Translation / Disposition Rules

1. **Classify before translating**
   - Identify owner and layer before proposing Lab display copy.

2. **Use Lab slots for display pressure, not source meaning**
   - Example: Atlas `Evidence Basis` may create a `source-owned basis` slot; Lab should not rename it into generic evidence.

3. **Preserve source-owned labels when meaning-bearing**
   - Atlas `Evidence`, Atlas `Discovery`, Sense `Live IO blocked`, and Sense `Clipboard Acquisition` should remain qualified unless the owning Overseer/Human allows translation.

4. **Translate internal state only into display-scoped wording**
   - Lab `failed` can display as `UNAVAILABLE`; Sense `blocked` should not display as generic unavailable if live IO was intentionally blocked.

5. **Never collapse absence states**
   - `NO DATA`, `No scan`, unavailable, failed, degraded, blocked, empty, and fallback need distinct reasons.

6. **Keep samples scoped**
   - Sample/cap/partial language should keep count, cap, or incompleteness visible near the value.

7. **Treat action/effect terms as source-owned**
   - Action terms such as `Enrich selected`, `Refresh labels`, `Watch`, `Clipboard Acquisition`, and live IO controls require effect/authority slots.

8. **Demote diagnostics**
   - Runtime and service data can support an asset page or detail reveal; it should not become the primary display asset unless Human/Overseer opens that direction.

9. **Keep display material from becoming doctrine**
   - Material bench snippets can exercise slots; they must not define source-project payloads.

10. **Escalate unresolved owner decisions**
   - If a term needs source-project owner judgment, mark it unresolved instead of smoothing it into Lab copy.

## Primitive / Display-Element Implications

Near-term primitive families implied by the slot vocabulary:

| Primitive / element family | Why it follows from taxonomy | Primary slots |
| --- | --- | --- |
| Instrument Status Band | Already accepted; carries state, value, age, basis, coverage, and warning/gap marker. | primary value, state label, status light, readout age, readout basis, source coverage |
| Readout Detail Reveal | Needed for basis, known fields, gaps, warnings, source-owned terms, and long text. | detail reveal, detail rows, long text block, source-owned basis |
| Source Coverage Chip / Rail | Source/basis pressure appears across Lab, Atlas, and Sense. | source coverage, coverage count, source-owned label |
| Gap / Warning Marker | Partial/capped/gaps/warnings recur across all projects. | gaps, warnings, cap marker, availability note |
| Freshness / Age Strip | Current/fresh/recent/stale/aged cluster needs visible timing without shared enum. | readout age, last read, observed at, freshness note |
| Availability Reason Marker | Blocked/unavailable/failed/no-data/no-scan distinctions need a compact reason. | availability note, blocked reason, absence reason |
| Scoped Sample Treatment | Sense provider sample and Lab display material both need visible scoping. | sample note, cap marker, coverage count |
| Source-Owned Action Row | Atlas/Sense action terms carry effect/authority. | action label, authority note, effect note |
| Long Text Detail Block | M20 source intent explicitly calls out slim wording risk. | long text block, detail reveal, overflow-safe row |
| Diagnostic Support Row | Runtime/support surfaces need secondary, contained treatment. | diagnostic row, secondary state |

Composition implication:

- Composition should wait until the inventory and material bench exist, but the likely first composition rule is: a primary primitive may open one detail reveal; nested primitives inside detail should be rare and only used when hierarchy remains obvious in narrow shells.

## Research Seeds For Display Types Worth Studying

Next research pass should study existing display types, not source-project doctrine:

1. Compact status bands with state light, age, and basis.
2. Detail reveals for dense basis/gaps/warnings text.
3. Freshness/age strips for multi-source reads.
4. Sample/cap/partial markers in provider or sampled-data UIs.
5. Availability reason treatments that distinguish blocked, unavailable, empty, and failed.
6. Long-form text containment in drawers, panels, and narrow shells.
7. Status-light systems that use shape/pattern/text, not color alone.
8. Source coverage displays that avoid authority implications.
9. Action/effect rows for commands with live IO, write, or authority effects.
10. Secondary diagnostics surfaces that stay useful but visually demoted.

## Accepted Candidate Slot Names

Recommended to accept as initial Lab-owned slot vocabulary:

- `asset label`
- `readout label`
- `primary value`
- `secondary value`
- `state label`
- `status light`
- `readout basis`
- `readout age`
- `source coverage`
- `known fields`
- `gaps`
- `warnings`
- `availability note`
- `fallback basis`
- `sample note`
- `cap marker`
- `authority note`
- `effect note`
- `source-owned label`
- `source-owned basis`
- `detail reveal`
- `detail row`
- `long text block`
- `diagnostic row`
- `narrow summary`

These names are slots for Lab display assets, not required bridge fields.

## Terms / Slots Needing Owner Review

| Item | Owner needed | Reason |
| --- | --- | --- |
| `Gateway` | Sense / Human | Decide preserve-exact vs Lab-translatable display marker. |
| `Pulling`, `Listening`, `Cooldown` | Sense / Human | Clipboard lifecycle labels have authority-window meaning. |
| `Provider pulse` | Sense / Human | May imply continuous provider heartbeat. |
| `External API` / `Live lookups` | Atlas / Human | Provider authority wording remains sensitive. |
| `Watch` / `Marked` in downstream displays | Atlas / Human | Must preserve active-check vs attention asymmetry. |
| `Evidence`, `Discovery`, `Observation`, `Assessment Memory` in Lab-fed displays | Atlas / Human | Source-owned layer model must remain intact. |
| `Source Detail` vs `Readout Detail` | Lab / Human | Accepted visible UI now uses `Readout Detail`; older docs still mention `Source Detail`. |
| `provenance` as a Lab slot | Lab / Atlas / Human | Useful concept, but Atlas-heavy and authority-loaded. |
| shared `blocked` / `unavailable` / `failed` / `degraded` distinctions | Human / project Overseers | Strong display need, but not a shared enum. |

## Shared Terminology Check Expansion

This pass used the shared terminology resources as an analytical check, not as an automatic verifier run:

- `protected-words/README.md`
- `protected-words/lab-protected.json`
- `protected-words/lab-quarantine.json`
- `protected-words/atlas-protected.json`
- `protected-words/sense-protected.json`
- `protected-words/shared-collisions.json`
- `protected-words/pending-candidates.json`

The point was to ask:

```txt
What does the shared terminology layer imply for Lab display slots?
```

It was not useful to run the shared verifier as the expansion mechanism because known warning surfaces already exist. The expansion value is in converting protected/collision knowledge into display classes and slot rules.

### Protected Default Terms

The Lab protected list confirms these as safe Lab-owned display vocabulary for slot naming:

| Protected Lab term | Slot consequence |
| --- | --- |
| `Readout` | Use for Lab-owned display surfaces and avoid source-project output terms by default. |
| `Readout basis` / `Display basis` | Primary slot for explaining what a display rests on without proof-language. |
| `Readout Detail` | Preferred detail/reveal label for Lab assets. |
| `Coverage` / `Source coverage` | Safe if display-scoped and not used as source authority. |
| `Gaps` / `Warnings` | Safe slots for incompleteness and cautions. |
| `Last read` | Safe freshness wording when tied to concrete timing. |
| `Presentation family` / `Review state` | Support/review slots only, not product navigation. |
| `Bridge Diagnostics` / `Registered Services` | Support-only slots, visually secondary. |

Slot decision:

- Promote `readout basis`, `readout age`, `source coverage`, `gaps`, `warnings`, `detail reveal`, and `diagnostic row`.
- Keep `presentation family`, `review state`, and support diagnostics out of primary asset vocabulary unless the asset is explicitly support-facing.

### Quarantine Terms

The Lab quarantine list confirms that some common words should not become Lab default slots:

| Quarantine term | Display consequence |
| --- | --- |
| `verified`, `trust`, `certainty` | Use `readout basis`, `source-owned basis`, or `availability note` instead. |
| `evidence` | Use only as source-owned Atlas `Evidence`; never as a generic Lab slot. |
| `intel`, `tactical`, `combat` | Use only as source-owned Sense/Atlas language where emitted and qualified. |
| `watch`, `monitoring` | Use source-owned `Watch`, lifecycle state, or authority note; avoid generic Lab watch slots. |
| `snapshot`, `report` | Prefer Lab `readout`; preserve source-owned report/snapshot labels only with owner/layer. |
| `Core`, `Seed` | Avoid in Lab display defaults; qualify inherited/scaffold or Lab-local fixture uses. |

Slot decision:

- Do not add slots named `evidence`, `report`, `snapshot`, `watch`, `trust`, `certainty`, or `verified`.
- Add safer slots: `source-owned label`, `source-owned basis`, `authority note`, `effect note`, `readout label`, and `detail row`.

### Atlas Protected Terms

Atlas protected terms create display needs that Lab can support without owning Atlas meaning:

| Atlas protected term | Display pressure | Lab slot response |
| --- | --- | --- |
| `Evidence` | Durable source-owned basis. | `source-owned label`, `source-owned basis`, `detail row`. |
| `Discovery` | Pre-evidence possible lead state. | `source-owned label`, `coverage/gaps`, `effect note`. |
| `Watch` / `Marked` | Active routine check vs attention. | `source-owned state label`, `authority note`, `effect note`. |
| `Enrich selected` | Evidence-creating action. | `action label`, `effect note`, `authority note`. |
| `Refresh labels` | Readability-only metadata action. | `action label`, `effect note`, support detail. |

Slot decision:

- Atlas terms mostly require source-owned labels plus effect/authority context.
- Lab should not create a generic "evidence slot"; it should create `source-owned basis` and `detail row` slots that can hold Atlas-owned Evidence wording when appropriate.

### Sense Protected Terms

Sense protected terms create lane, sample, and authority-window display needs:

| Sense protected term | Display pressure | Lab slot response |
| --- | --- | --- |
| `Combat Witness` | Recent observed lane, not durable history. | `source-owned label`, `readout age`, observed value slots. |
| `Passive Telemetry` | Current-system context without hidden scan implication. | `source-owned label`, `freshness note`, `availability note`. |
| `Threat Intel` | Deliberate scoped inspection. | `source-owned label`, `sample note`, `cap marker`, `state label`. |
| `Clipboard Acquisition` | Short authority window. | `lifecycle state`, `authority note`, `availability note`. |
| `Live IO blocked` | Backend authority refusal. | `blocked reason`, `authority note`, not generic unavailable. |

Slot decision:

- Add `sample note`, `cap marker`, `authority note`, and lifecycle-style state treatment to the slot vocabulary.
- Do not collapse Sense `No scan`, provider failure, partial sample, capped sample, and live-IO blocked into Lab `NO DATA` or `UNAVAILABLE`.

### Shared Collision Terms

The shared collision file currently names five terms: `source`, `sample`, `state`, `gateway`, and `report`.

| Collision term | Risk | Slot rule |
| --- | --- | --- |
| `source` | Provider source, evidence provenance, display basis, or local file source. | Use `readout basis`, `source coverage`, or source-owned basis with layer qualification. |
| `sample` | Sense scoped provider sample vs Lab fixture sample. | Use `sample note` only when scope/cap/owner is nearby. |
| `state` | Domain state, runtime state, task state, display state. | Use `state label` only with owner/layer context. |
| `gateway` | Sense UI marker, authority gate, or bridge boundary. | Keep as source-owned until owner review. |
| `report` | Different durability and authority per project. | Use Lab `readout` by default; source-owned reports stay qualified. |

Slot decision:

- Collision terms should become qualification rules, not universal slot names.
- When a collision term must appear, the asset page should name the owner/layer in `authority notes`.

### Pending Candidates

`pending-candidates.json` is empty. That means M20 should not invent new protected-term candidates. The better move is to propose slot names and owner-review questions, then let Human / Overseer decide what deserves protection later.

### Expansion Outcome

The shared terminology check strengthens four M20 decisions:

1. Lab slots should prefer functional display names over source-project terms.
2. Source-owned terms need container slots, not Lab-owned replacements.
3. Collision terms need owner/layer qualification near the display.
4. The display material bench should include hostile cases for source, sample, state, gateway, and report wording.

Recommended display-material additions from this check:

- a source/basis collision case
- a Sense scoped/capped sample case
- an Atlas Evidence vs Discovery distinction case
- a live-IO blocked vs unavailable case
- a no-scan vs no-data case
- a source-owned report/readout distinction case
- a support diagnostics case that keeps runtime language secondary

## Recommended Next Packet

Recommended next packet:

```txt
M21 - Display Material Bench
```

Expected artifact:

```txt
workspace/reference/display-material-bench-2026-05-25.md
```

Reason:

The slot vocabulary needs display material to become useful. The next packet should create structured snippets and long-form text samples for the accepted candidate slots, especially:

- long readout basis text
- source-owned label examples
- partial/capped/gap cases
- blocked/unavailable/no-data/no-scan cases
- warning explanation text
- source/sample/state/gateway/report collision examples
- narrow-shell stress material

After that, create the display inventory scaffold and add the accepted Instrument Status Band as the first inventory entry.

## Verification / Support

Ran:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.
- No implementation files were changed.

Shared terminology expansion:

- Performed analytically from shared protected-word and collision resources.
- The shared verifier script was not run as the expansion mechanism because known warning surfaces already exist and the useful M20 work is classification into slot rules.

Optional shared verifier script:

- Not run.
- If Overseer wants a formal resource-check result later, run `npm.cmd run verify:terminology` from `F:\Projects\Docs\Aura-Project-Orchestration`.

No runtime or renderer implementation is included in this artifact.
