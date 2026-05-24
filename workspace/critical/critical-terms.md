# Critical Terms

Purpose: list Lab-owned presentation terms, source terms that must be preserved, and bridge -> interface translation cautions.

Accepted policy:
`F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

Expanded lists:

- Lab expanded coordination list: `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Lab\critical-terms.md`
- Atlas expanded coordination list: `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Atlas\critical-terms.md`
- Sense expanded coordination list: `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Sense\critical-terms.md`
- Cross-project synthesis: `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-critical-cross-project-synthesis-2026-05-24.md`

## Lab Vocabulary Intent

Lab-owned default copy should use a distinct, product-agnostic presentation vocabulary. It should not borrow Atlas, Sense, or Core domain language unless that term is source-owned and contextualized.

Preferred Lab default language families:

- Readout
- Basis
- State
- Surface
- Coverage
- Gaps
- Warnings
- Freshness
- Availability

Avoid as Lab-owned defaults unless source-owned and contextualized:

- verified
- trust
- certainty
- proof
- truth
- source of truth
- authoritative
- evidence
- intel
- intelligence
- tactical
- combat
- operator
- watch
- monitoring
- listening
- snapshot
- report
- record
- finding
- schema
- Core
- Seed

## Preserve Exactly

| Term | Owner | Meaning | Why Preserve |
| --- | --- | --- | --- |
| `Evidence` | Atlas | Durable expanded ESI evidence and Atlas-owned derived activity events. | Lab must not use as generic proof/readout/sample language. |
| `Discovery` | Atlas | Possible leads before ESI expansion. | Lab must not present Discovery refs as evidence. |
| `Marked` / `Watch` | Atlas | Marked is attention; Watch is active routine check. | Lab must preserve the asymmetry and avoid generic watch language. |
| `Enrich selected` | Atlas | ESI expansion into stored evidence. | Lab must keep evidence-creation effect visible. |
| `Refresh labels` | Atlas | Readability-only metadata hydration. | Lab must not call it evidence enrichment. |
| `Combat Witness` | Sense | Recent observed combat-log lane. | Lab must not present as durable evidence or complete history. |
| `Threat Intel` | Sense | Deliberate scoped inspection. | Lab must not imply complete intelligence or monitoring. |
| `Clipboard Acquisition` | Sense | Short visible authority window. | Lab must not imply background clipboard monitoring. |
| `Live IO blocked` | Sense | Backend authority gate refusal. | Lab must not collapse with failed, unavailable, or no data. |

## Lab-Owned Presentation Terms

| Term | Meaning | Notes |
| --- | --- | --- |
| `Bridge State Readout` | Lab-owned feature/readout name. | Do not treat as upstream bridge schema. |
| `Readout` | Human-facing display surface or rendered state. | Preferred over report/snapshot for Lab defaults. |
| `Readout status` | Lab display status. | Display-scoped, not shared state enum. |
| `Readout basis` | What the display is based on. | Preferred over trust/certainty/proof language. |
| `Readout age` | Freshness/age of the display basis. | Display-scoped. |
| `Source Detail` | Detail surface for read basis, gaps, warnings, and timing. | Accepted for now, but watch source-authority implication. |
| `Source coverage` | Display coverage/basis explanation. | Should not imply source of truth. |
| `Known fields` | Fields present in the readout. | Not schema doctrine. |
| `Gaps` | Missing/incomplete display basis. | Not proof of source absence. |
| `Warnings` | Display/readout cautions. | Not necessarily source-project errors. |
| `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, `NO DATA` | Lab neutral readout labels. | Presentation labels only; not shared project enums. |

## Translation Caution

| Source Term | Source Owner | Possible Interface Term | Risk | Decision |
| --- | --- | --- | --- | --- |
| `source` | Atlas/Sense/Lab by context | display source / provider source / evidence basis / collection provenance | Source can imply authority or truth. | Qualify the layer every time. |
| `report` | Atlas/Sense by context | readout / latest scan report / evidence report | Different durability and authority per project. | Use lowest precise owner/layer. |
| `snapshot` | Sense/Atlas/Lab by context | lane snapshot / runtime snapshot / readout capture | Sense lane payload vs Atlas local DB support artifact. | Always qualify owner/context. |
| `watch` / `watcher` / `listening` | Atlas/Sense by context | Watch / Log Watcher / Pulling / Listening | Active checks, local log watching, and clipboard authority differ. | Avoid generic Lab defaults. |
| `current` / `fresh` / `recent` / `stale` / `aged` | All projects by context | readout age / recent context / current system / AGED | Freshness models are project-specific. | Treat as a freshness cluster, not shared enum. |
| `blocked` | Sense/Atlas/Lab by context | Live IO blocked / action blocked / unavailable | Authority block, operational block, and unavailable differ. | Preserve exact cause. |
| `sample` | Sense/Lab by context | scoped sample / fixture sample slot | Provider sample can be mistaken for complete coverage. | Keep scoped/capped/partial visible. |
| `Gateway` / `gate` | Sense/Atlas/Lab by context | Gateway / Live IO gate / bridge boundary | UI marker, backend authority gate, and transport boundary differ. | Keep project/layer qualifier. |
| `seed` / `Core` | Lab/Core by context | Lab-local fixture/scaffold wording | Can imply Core doctrine or ownership. | Avoid Lab default copy unless explicitly Lab-local. |
| `verified` / `trust` / `certainty` | Lab risk words | readout basis / source basis / read from source | Implies proof or authority. | Quarantine from Lab defaults unless source-owned and contextualized. |

## Open Questions

- Should Lab keep `Source Detail`, or move toward a lower-authority label such as `Readout Detail`?
- Which Atlas terms are preserve-exact in Lab presentation beyond the current caution list?
- Which Sense terms are preserve-exact in Lab presentation beyond the current caution list?
- Should Lab add a copy registry or keyword check for product-agnostic default vocabulary?
- Should `FALLBACK` be fully exercised in Lab fixtures/smoke before it is treated as stable presentation grammar?
