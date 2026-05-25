# DisplayMaterialRequirementsHS84 - M24-Derived Materials

Date: 2026-05-25
Project: Aura Lab
Milestone: M25 - Display Material Requirements
Status: Advisory requirements artifact

## Purpose

Translate M24 recommendations and Human fitness notes into reusable Lab display material requirements.

This is requirements capture only. It is not Atlas/Sense feature delivery, Dev authorization, a bridge contract, runtime fixture doctrine, target adoption, source-project semantics, workflow refactor, or SmokeFlash implementation.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/OverseerHS83-m24-acceptance.md`
- `workspace/OverseerHS84-m25-display-material-requirements-runway.md`
- `workspace/DisplayResponseComparisonHS82-active-display-requests.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/workshop/README.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`

## Current State Understanding

M24 is accepted as Lab-side advisory comparison. It does not create target-project adoption, implementation-packet-ready state, or Dev work.

Human fitness notes accepted in `OverseerHS83` shift M25 toward material requirements:

- Atlas right rail: expandable/detail treatment fits.
- Atlas queue review: table/detail-drawer direction fits.
- Atlas Watch: adapt away from full ladder for now; prefer compact status plus drawer/detail.
- Sense Clipboard Acquisition: compact authority strip fits, with special emphasis on timing/TTL because bounded time communicates the authority window.

The useful Lab output is therefore a reusable set of display materials that can later pressure prototypes across projects without becoming Atlas/Sense product work.

## Extraction Method

Material needs were extracted by asking:

1. What display behavior recurs across M24 recommendations?
2. Which need can be made reusable without carrying Atlas/Sense product meaning?
3. Which accepted M20 slots does the need pressure?
4. Which M21 display types are plausible carriers?
5. Which M22 material sets already give usable starting content?
6. What must this material prove before a future prototype is worth building?

Readiness ratings:

- `ready`: enough accepted material exists to prototype as Lab material later.
- `needs more material`: reusable need is clear, but more staged content is needed first.
- `needs source-project decision`: reusable only after Atlas/Sense answers a meaning or label question.
- `parked`: too product-specific or too complex for current Lab material work.

## Material Requirements Table

| ID | Material name | Source pressure / request | User / display problem | Relevant M20 slots | Relevant M21 display types | Relevant M22 material sets | Required states | Copy / text pressure | Layout / narrow pressure | Interaction / reveal pressure | Terminology / source-meaning risk | What it must prove | Prototype readiness | Parked / product-specific notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `mat-expandable-status-card` | Expandable Status Card | Atlas right rail fit note; status-card family across Stored Evidence, Possible Leads, Watch, Assessment Memory. | A compact status card needs a first read plus point-of-need basis/warnings without becoming a full panel. | `source-owned label`; `primary value`; `secondary value`; `state label`; `status light`; `readout age`; `source-owned basis`; `availability note`; `warnings`; `detail reveal`; `narrow summary` | Status band; status chip; availability reason treatment; detail reveal; route-first card family | `status-chip-row`; `availability-distinction`; `source-coverage-collision`; `gap-warning-pressure`; `detail-long-basis` | loaded, stale, not loaded, unavailable, partial, blocked, empty | Long source-owned labels, basis rows, warning copy, route hint, compact label/value pairs | Closed card must stay short; open detail must not make a rail unusable; narrow shell stacks label/value/state first | Expand/collapse or drawer handoff; route remains distinct from detail | Atlas terms must remain source-owned; card parity can imply equal authority across unlike concepts | A reusable card can hold label, value, state, age/basis cue, warning marker, and detail without collapsing source meaning | ready | Atlas-specific card names and routes remain parked outside Lab material |
| `mat-table-row-detail-drawer` | Dense Row With Detail Drawer | Atlas Queue Review table/detail-drawer fit note. | Dense structured rows need compact scanning while raw fields, basis, warnings, and action effects stay inspectable. | `source-owned label`; `primary value`; `state label`; `authority note`; `effect note`; `source-owned basis`; `detail row`; `long text block`; `warnings`; `narrow summary` | Compact table/list; detail reveal; status chip; action readiness strip; long text detail block | `detail-long-basis`; `status-chip-row`; `gap-warning-pressure`; `collision-language`; `value-rail-mixed` | empty, candidate, selected, cached, expanded, failed, unavailable, blocked | Raw ids/hashes/refs, boundary copy, action-effect note, long unbroken tokens, compact status labels | Table must collapse to priority rows; raw long fields live in drawer; cells need stable width/wrap behavior | Row detail drawer; selected state visible; action readiness separate from row detail | Atlas Evidence/Discovery boundary must not be blurred; action effect must not look automatic | A table row can stay readable while exposing raw detail and warning/effect copy only when needed | ready | Actual Queue Review selection behavior and Enrich semantics remain Atlas-owned |
| `mat-compact-status-plus-drawer` | Compact Status Plus Drawer | Human adapted Atlas Watch note; compact status plus drawer/detail preferred over full ladder for now. | A state family needs a calm summary with deeper state/basis/diagnostic detail behind reveal. | `source-owned label`; `state label`; `status light`; `primary value`; `readout age`; `availability note`; `authority note`; `diagnostic row`; `detail reveal`; `narrow summary` | Status band; status chip; availability reason treatment; detail reveal; diagnostic panel | `availability-distinction`; `status-chip-row`; `detail-long-basis`; `gap-warning-pressure`; `collision-language` | configured, due, blocked, ready, armed, disarmed, running, failed, complete, stale, unavailable | Short state phrase, last/next timing, blocked reason, diagnostic rows, no generic activity language | Band must preserve state/value/timing in narrow shell; diagnostics hidden by default | Drawer/detail opens blocked reason, last/next, diagnostic fields | Watch/Marked asymmetry; routine check must not imply generic monitoring or ongoing collection | A compact band can present current state plus timing and reveal detailed reasons without requiring a full ladder | ready | Full Watch state ladder and connected-system/radius visualization stay parked |
| `mat-authority-window-ttl-strip` | Authority Window TTL Strip | Sense Clipboard Acquisition fit-with-emphasis note; timing/TTL display is important. | A short authority window needs visible bounded time so active capture does not feel like background behavior. | `source-owned label`; `state label`; `status light`; `authority note`; `availability note`; `effect note`; `readout age`; `warnings`; `detail reveal`; `narrow summary` | Status band; status chip; action readiness strip; lifecycle/progress strip only for real lifecycle; availability reason treatment | `availability-distinction`; `status-chip-row`; `gap-warning-pressure`; `collision-language` | idle, pulling, listening, captured, rejected, unchanged, timeout, cancel, cooldown, blocked, shortcut unavailable, manual path | TTL/timer copy, shortcut chips, bounded active note, cooldown copy, Live IO blocked reason, manual alternate copy | Must fit one compact strip; long shortcut text collapses to chip plus detail; TTL remains visible in narrow shell | Conditional detail reveal for reason/manual path; captured-target handoff marker | Sense lifecycle labels and `clipboard.acquisition.snapshot` remain Sense-owned; listening must not imply background monitoring | A compact strip can show active/cooldown TTL and authority reason without implying hidden scan or persistent listening | ready | Exact Sense label translation remains a source decision; runtime behavior is parked |
| `mat-availability-reason-matrix` | Availability Reason Matrix | All four M24 requests; absence states recur. | Similar absence states need distinct visible reasons without alarm overload. | `state label`; `availability note`; `fallback basis`; `authority note`; `readout basis`; `detail row`; `narrow summary` | Availability reason treatment; empty/unavailable panel; status chip | `availability-distinction`; `empty-unavailable-panel`; `status-chip-row` | no data, no scan, unavailable, blocked, failed, degraded, fallback, stale, not loaded | Short reason copy plus optional long explanation; source-owned blocked/no-scan qualifiers | Works as chip, band line, or panel body; narrow summary must keep state plus reason | Reveal carries longer reason and owner/layer note | No scan, blocked, unavailable, and failed are not shared enums | A single material family can keep absence reasons distinct across compact and detail surfaces | ready | Source-owned reason labels require owner/layer qualification per project |
| `mat-source-boundary-note` | Source Boundary Note | Atlas Evidence/Discovery and Sense clipboard/source basis risks. | A display needs a small way to say what the readout is based on and what it is not. | `readout basis`; `source-owned basis`; `source coverage`; `authority note`; `effect note`; `warnings`; `detail row`; `long text block` | Detail reveal; source coverage marker; gap/warning marker; availability reason treatment | `source-coverage-collision`; `collision-language`; `detail-long-basis`; `gap-warning-pressure` | current, partial, source-owned placeholder, blocked, unavailable | Boundary copy, owner/layer line, action-effect caution, long basis text | Primary surface gets one cue; detail gets rows/paragraph; narrow shell uses short qualifier | Usually detail reveal or drawer row; may be paired with warning marker | `source`, `Evidence`, `Discovery`, `snapshot`, and source-owned action terms can overclaim if unqualified | A reusable note can preserve source meaning without turning first read into a terminology essay | needs more material | Needs more varied examples before prototyping as standalone material |
| `mat-warning-gap-edge` | Warning / Gap Edge | Atlas right rail, queue review, Watch, and Sense clipboard all need non-blocking cautions. | Gaps and warnings must be visible without taking over the display. | `gaps`; `warnings`; `known fields`; `cap marker`; `availability note`; `status light`; `detail reveal`; `narrow summary` | Gap / warning marker; status chip; detail reveal; grouped pips | `gap-warning-pressure`; `status-chip-row`; `grouped-pips-coverage`; `value-rail-mixed` | partial, warning, blocked, missing, capped, unavailable | Count labels, long warning explanation, gap list, capped/sample note | Marker/edge must be readable in rows/cards/bands; narrow view keeps count and detail path | Detail reveal holds list and explanation | Warning may be display caution rather than source error | A muted warning edge can show gap/warning presence without alarm or layout shift | ready | Project-specific severity rules remain parked |
| `mat-action-readiness-row` | Action Readiness Row | Atlas Enrich Selected preflight and Sense manual/shortcut alternate input. | An effect-bearing or authority-gated action needs visible availability, reason, and effect without changing behavior. | `source-owned label`; `authority note`; `effect note`; `availability note`; `warnings`; `state label`; `detail row`; `narrow summary` | Action readiness strip; availability reason treatment; status chip; detail reveal | `availability-distinction`; `collision-language`; `gap-warning-pressure`; `status-chip-row` | ready, blocked, unavailable, selected, disabled, manual available, alternate available | Action label, effect note, blocked reason, manual/alternate path copy | Should sit near action context; narrow shell keeps action label plus reason | Reveal explains effect and owner/layer; no new action mechanics | Enrich Selected and clipboard/manual paths are source-owned; Lab must not imply behavior changes | A row can explain whether an action is available and what it does without becoming implementation instruction | needs source-project decision | Requires source projects to approve action/effect wording before prototype acceptance |
| `mat-lifecycle-step-reference` | Lifecycle Step Reference | Sense clipboard stepper was compared but not recommended as primary. | Branching lifecycle states may need review material even if not first prototype. | `state label`; `status light`; `authority note`; `readout age`; `availability note`; `narrow summary` | Lifecycle/progress strip where real lifecycle exists; progress strip; status chip | `status-chip-row`; `availability-distinction`; `collision-language` | idle, active, captured, rejected, timeout, cooldown, blocked | Step labels, active TTL, cooldown copy, branch reasons | Stepper must collapse to current step; motion cannot carry meaning | Step detail on current branch; reduced-motion static state | Can imply a process that source runtime does not own | Lifecycle material can test branch/step display without choosing it for Clipboard Acquisition | needs source-project decision | Sense must decide label exactness and whether states are sequential/branching |
| `mat-coverage-pip-legend` | Coverage Pip Legend | Source coverage, warning/gap markers, and grouped status lights recur. | Small pips need labels/counts so they are not decorative or color-only. | `status light`; `source coverage`; `known fields`; `gaps`; `warnings`; `narrow summary` | Grouped pips / status constellation; source coverage marker; status chip | `grouped-pips-coverage`; `source-coverage-collision`; `gap-warning-pressure` | active, inactive, warning, unavailable, partial | Pip label, compact legend, count summary, owner/layer note | Pips reduce to count plus marker in narrow shell; stable spacing | Detail reveals pip meanings if legend is abbreviated | Pip state labels must not become shared enums | A pip group can express coverage/warnings accessibly and with non-color-only meaning | needs more material | Needs additional examples beyond generic M22 coverage |
| `mat-route-reveal-split` | Route / Reveal Split | Atlas right rail needs route affordance separate from detail; other surfaces may need same split. | A surface can both navigate and reveal detail, but those affordances must not fight. | `readout label`; `primary value`; `state label`; `detail reveal`; `effect note`; `narrow summary` | Route-first card family; detail reveal; status band | `detail-long-basis`; `status-chip-row`; `gap-warning-pressure` | available, unavailable, partial, blocked | Route label, detail label, short hint copy | Narrow view must keep route and reveal targets distinct | Route and reveal affordances require separate hit areas/labels | Source-project routes are product-owned; Lab only tests presentation split | Material can prove route and reveal affordances remain legible and distinct | needs more material | Target route behavior and destination labels remain source-owned |
| `mat-state-facet-stack` | State Facet Stack | Atlas Watch adaptation away from full ladder. | Some state families are parallel facets rather than ordered steps. | `state label`; `status light`; `primary value`; `readout age`; `availability note`; `diagnostic row`; `narrow summary` | Status chip; compact list/table; detail reveal; status band | `status-chip-row`; `availability-distinction`; `detail-long-basis` | due, blocked, ready, armed, running, stale, unavailable | Short facet labels, count/value pairs, reason rows | Facets stack under summary; narrow shell shows top two and summary count | Detail drawer shows less-important facets and diagnostics | A facet stack must not invent order or lifecycle | A display can show multiple parallel state facts without making a ladder | ready | Atlas-specific Watch facet names remain source-owned |
| `mat-connected-system-radius` | Connected System / Radius Visualization | Human note parks connected-system/radius visualization as future complexity. | Spatial/network visualization may someday show relation or radius, but current material needs are not mature. | likely `source-owned label`; `primary value`; `state label`; `readout age`; `warnings`; `detail row` | Map / sensor display; matrix/heatmap; activity surface | none sufficient yet | unknown | unknown | high narrow-shell risk; spatial meaning would need source model | high interaction risk | High risk of inventing source-project spatial meaning | Not enough accepted material to prototype | parked | Park until source project defines real relation/radius meaning |

## Prototype Candidate Recommendations

### First Candidate: `mat-authority-window-ttl-strip`

Prototype this material first when a future implementation packet opens.

Why:

- Human specifically emphasized timing/TTL as important.
- The material is compact, bounded, and reusable beyond Sense if kept source-agnostic.
- It pressure-tests state label, authority note, availability note, status light, narrow summary, and conditional detail reveal in one small surface.
- It does not require target-project implementation if staged with neutral Lab material.

Minimum material to prepare before prototype:

- idle, active/short-window, captured, rejected, timeout, cooldown, blocked, manual path
- short TTL display and expired/cooldown treatment
- long shortcut text stress case
- explicit reduced-motion expectation if a countdown/settle treatment is explored

### Second Candidate: `mat-expandable-status-card`

Why:

- Atlas right rail fitness accepted expandable/detail treatment.
- This is the most reusable card/surface material for Lab inventory.
- It composes accepted M19 band behavior with `Readout Detail` and warning/gap material.

Minimum material to prepare before prototype:

- four-card set with mixed availability
- one card with long source-owned label
- one card with stale/not-loaded state
- one card with warning/gap marker
- route/reveal split example without source-project routes

### Third Candidate: `mat-table-row-detail-drawer`

Why:

- Queue review needs dense rows, long ids/hashes, status chips, and detail drawer behavior.
- It helps Lab learn dense information display without building Atlas features.
- It directly exercises long text, row wrapping, warning/gap edge, and source boundary notes.

Minimum material to prepare before prototype:

- 6 to 10 rows with mixed states
- one long unbroken token
- selected/cached/expanded markers as generic row facets
- detail drawer with basis, warning, and action-effect note
- narrow row collapse rule

## Parked Or Product-Specific Items

- Atlas implementation of right rail cards.
- Atlas Queue Review behavior, Enrich Selected semantics, raw field persistence, and selection actions.
- Atlas Watch scheduler/executor behavior and any source-owned state model.
- Sense Clipboard Acquisition runtime behavior, shortcut policy, and `clipboard.acquisition.snapshot` meaning.
- Exact Sense visible label translation for `Pulling`, `Listening`, and `Cooldown`.
- Full Watch state ladder as a primary prototype, due to Human adaptation toward compact status plus detail for now.
- Connected-system/radius visualization, because it needs source-owned relation/radius meaning before Lab can make material.
- Workflow refactor and durable request/response archive structure.
- SmokeFlash implementation.
- Broad display inventory scaffold unless Human / Overseer opens it.

## Future SmokeFlash / Staged-Ingest Needs

Future staged material, if a later SmokeFlash packet opens, should support:

- `materialRequirementId`
- `materialName`
- `materialClass`
- `displayComposition`
- `recommendedDisplayTypes`
- `slots`
- `states`
- `contentLanes`
- `rows`
- `detail`
- `longText`
- `narrowSummary`
- `pressureChecks`
- `ownerTerminologyNotes`

Suggested first replay group:

```json
[
  {
    "materialRequirementId": "mat-authority-window-ttl-strip",
    "states": ["idle", "active-window", "captured", "timeout", "cooldown", "blocked", "manual-path"],
    "pressureChecks": ["ttl-visible", "non-color-only-state", "narrow-strip", "bounded-authority-copy"]
  },
  {
    "materialRequirementId": "mat-expandable-status-card",
    "states": ["loaded", "stale", "not-loaded", "partial", "unavailable"],
    "pressureChecks": ["closed-card-height", "detail-containment", "warning-marker", "route-reveal-distinction"]
  },
  {
    "materialRequirementId": "mat-table-row-detail-drawer",
    "states": ["available", "selected", "cached", "expanded", "failed", "blocked"],
    "pressureChecks": ["row-density", "long-token-containment", "drawer-detail", "narrow-row-collapse"]
  }
]
```

This is a staged-ingest need only. It is not a fixture schema, bridge contract, SmokeFlash implementation, or test matrix.

## Acceptance Criteria For This Artifact

This artifact is acceptable if it:

- captures material requirements rather than feature delivery
- derives needs from M24 recommendations and Human fitness notes
- identifies reusable materials Lab can make without owning Atlas/Sense meaning
- maps requirements to M20 slots, M21 display types, and M22 material sets
- names what each material must prove
- rates prototype readiness
- recommends first, second, and third prototype candidates
- parks product-specific and too-complex items
- keeps SmokeFlash/staged-ingest as suggested needs only
- does not authorize Dev implementation

## Verification

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.
- No implementation files were changed.

Ran shared advisory terminology check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- Passed: `Terminology verification: 53/53 resource checks passed.`
- Existing advisory warnings remain for Lab internal/compatibility `trust` and `certainty` surfaces.

No Electron smoke is required for this documentation/requirements packet.
