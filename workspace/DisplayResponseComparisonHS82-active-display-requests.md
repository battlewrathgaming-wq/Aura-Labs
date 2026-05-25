# DisplayResponseComparisonHS82 - Active Display Requests

Date: 2026-05-25
Project: Aura Lab
Milestone: M24 - Active Display Request Advisory Comparison
Status: Advisory comparison artifact

## Purpose

Compare Bridge -> Interface display methods for the four active Atlas/Sense `request_display` entries as a stable discussion surface.

This artifact is advisory only. It is not implementation approval, target-project adoption, a bridge contract, runtime fixture doctrine, a payload shape, a Dev runway, or source-project meaning.

Aura Lab may recommend display methods for fitness/user-flow discussion. Atlas and Sense keep source terms, source meaning, product decisions, runtime behavior, and final adoption authority.

Conversation and Human relay are the place for taste, fitness, and flow. This file records the resting-state comparison and the questions/actions worth carrying forward. It does not record source-project adoption state.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/OverseerHS81-m23-acceptance-m24-runway.md`
- `workspace/DisplayUseCaseCaptureHS80-request-display-map.md`
- `workspace/request_display.md`
- `workspace/display-request-cooperation-contract.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\known-workflows\display_request.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\workflow-maps\display-request-space-to-state.md`

## Active Request List

| Request id | Source project | Status in Lab | Scope read |
| --- | --- | --- | --- |
| `atlas.overview.right-rail-status-stack` | Atlas | submitted / active M24 comparison | One Atlas Overview right-side status-card family. |
| `atlas.discovery.queue-review-possible-leads` | Atlas | submitted / active M24 comparison | One Discovery Queue Review flow slice through Enrich Selected preflight. |
| `atlas.watch.state-display` | Atlas | submitted / active M24 comparison | One Watch state display family. |
| `sense.clipboard-window` | Sense | submitted / active M24 comparison | One Clipboard Acquisition widget flow slice in the Threat Intel acquisition bar. |

Inventory-only and parked Sense rows are not active requests in this artifact.

## Comparison Rules

- Preserve source-owned terms exactly where the request makes them meaning-bearing.
- Use Lab vocabulary only as display-planning language, not Atlas/Sense terminology.
- Do not rename source terms, source fields, bridge fields, payload fields, IPC channels, service commands, fixture IDs, or test IDs.
- Do not recommend source-project implementation until the source project accepts/adapts the advice locally.
- Do not assign adoption states or implementation readiness from Lab. Those belong in source-project records only after Human/source-project discussion.
- Treat later verification expectations as conditional if a source project later adopts a method.

## 1. `atlas.overview.right-rail-status-stack`

### Source Boundary

| Item | Readback |
| --- | --- |
| Source owner | Atlas / Atlas Overseer. |
| Product attachment | Atlas Overview, right-side status stack. |
| Scope | One status-card family covering Stored Evidence, Possible Leads, Watch Status, and Assessment Memory. |
| Preserve terms | Stored Evidence; Possible Leads; Watch; Marked; Assessment Memory; Discovery; Evidence; provenance. |
| Terms to avoid or qualify | Watcher; evidence for Possible Leads; intelligence; finding; report unless Atlas-owned. |
| Non-goals | No backend counts, behavior changes, full redesign, contracts, bridge/IPC/payload/persistence changes, or Atlas adoption. |
| Adoption authority | Atlas decides whether to accept, adapt, reject, park, or make implementation-packet-ready locally. |

### Method Comparison

| Method | First-read hierarchy | State / basis / freshness / gaps | Interaction / reveal | Narrow behavior | Terminology risks | Later verification if adopted |
| --- | --- | --- | --- | --- | --- | --- |
| Compact scan cards | Four equal cards: source-owned label, primary count/state, compact state chip, one basis/age line, route affordance. | Best for visible loaded/stale/not-loaded/unavailable state per card. Basis line must name stored Atlas data, Discovery queue preview, Watch schedule, or Assessment artifacts. Gaps/warnings need a small marker. | Route is primary; detail can be hover/inline only if already supported by Atlas UI. | Stack as four short cards; keep label, value, state, and one availability cue. | Equal card weight can imply Stored Evidence, Possible Leads, Watch, and Assessment Memory have equal authority. Possible Leads can look like Evidence if card copy is too similar. | Atlas terminology boundary review; Atlas renderer smoke if UI changes; narrow-shell screenshot review; protected-term check for generic evidence/watch language. |
| Expandable detail cards | Compact card first, then inline reveal for basis, gaps, warnings, and route context. | Strongest handling for source-owned basis, warnings, stale/not-loaded reasons, and Assessment Memory caution text. | Expand/collapse at point of need; route remains explicit and separate from reveal. | Default closed cards stack well; open card must not bury other rail cards. | Detail text can become a mini doctrine page if it overexplains Atlas concepts. Inline expansion may make the rail feel heavy. | Same as above, plus open/closed visual review and text containment for long basis/warning rows. |
| Route-first cards | Each card behaves as a navigation unit with a small status band and minimal detail hint. | Good when Atlas wants the rail to be a launch surface more than an explanation surface. Weakest for warnings unless a secondary reveal exists. | Click/route is dominant; detail hint can route to source surface rather than expand. | Best narrow fit if each card becomes one route row. | Can hide Possible Leads / Evidence boundary in destination instead of first read. Watch/Marked distinction may be underexplained. | Route affordance review, keyboard/focus review if implemented, plus Atlas terminology review at destination and rail. |

### Recommendation

Recommend `Expandable detail cards` as the preferred advisory method for Atlas review.

Reason: this request is not only a navigation problem. The rail must preserve meaning differences between Stored Evidence, Possible Leads, Watch, Marked, and Assessment Memory. Expandable detail cards keep the first read compact while giving each card a place for source-owned basis, freshness, and warnings without making the right rail a dense diagnostic panel.

Adoption caution: Atlas should decide whether expansion happens inline, through an existing drawer, or by route. Lab should not choose that implementation surface.

### Fitness Discussion Handoff

| Request id | Recommended method | Source-project review needed | Adoption state suggestion | Implementation-packet-ready? |
| --- | --- | --- | --- | --- |
| `atlas.overview.right-rail-status-stack` | Expandable detail cards | Atlas must confirm card labels, route/reveal behavior, and Evidence/Possible Leads boundary copy. | Discuss whether inline reveal feels like the right flow or whether route-first is calmer. | No. Not a Dev/auth state. |

## 2. `atlas.discovery.queue-review-possible-leads`

### Source Boundary

| Item | Readback |
| --- | --- |
| Source owner | Atlas / Atlas Overseer. |
| Product attachment | Discovery / Queue Review; Possible Leads into Enrich Selected preflight. |
| Scope | One flow slice covering queued refs, selected refs, cached/expanded indicators, Enrich Selected preflight, and Evidence boundary copy. |
| Preserve terms | Discovery; Possible Leads; Queue Review; Enrich Selected; Evidence; External API; provenance. |
| Terms to avoid or qualify | evidence for queued refs; observation unless stored as Atlas observation; proof; intelligence; report unless Atlas-owned. |
| Non-goals | No auto-enrich, backend logic changes, live API behavior changes, parsing, schemas, persistence, expansion semantics, or Atlas adoption. |
| Adoption authority | Atlas owns whether a Lab method becomes local design direction. |

### Method Comparison

| Method | First-read hierarchy | State / basis / freshness / gaps | Interaction / reveal | Narrow behavior | Terminology risks | Later verification if adopted |
| --- | --- | --- | --- | --- | --- | --- |
| Lead cards | One candidate per card: Possible Lead label, killmail id/ref, status chip, cached/expanded markers, selected state, short boundary cue. | Good for per-item selected/cached/expanded/failed states. Basis can say Discovery/provenance metadata before expansion. Gaps and raw hash detail belong behind reveal. | Select at card level; detail reveal holds raw ref/hash/provenance and Enrich effect note. | Cards stack clearly but can consume vertical space fast. Use dense summaries for long queues. | Cards can make each queued ref feel more complete than it is. If the boundary cue is soft, Possible Leads may read as Evidence. | Atlas terminology review; selection-state visual review; renderer smoke if implemented; text containment for hashes; no live/API smoke unless Atlas opens it. |
| Grouped lanes | Lanes for queued, selected, cached/expanded, failed/blocked, plus a separate Enrich Selected readiness strip. | Strong for process clarity and action readiness. Makes preflight-blocked/API-disabled states visible. Basis can sit in lane header or readiness strip. | Drag/select or checkbox behavior remains Atlas-owned; Lab only advises visual grouping. Detail can open per item or per lane. | Lanes collapse to stacked sections; Enrich readiness strip should remain near selected lane. | Lanes can imply a workflow or lifecycle stronger than Atlas has accepted. Enrich strip can look like instruction to implement action behavior. | Atlas workflow review; keyboard/selection review if implemented; no scheduler/API behavior assumptions; terminology check for Evidence boundary. |
| Table with detail drawer | Compact rows with columns for id/ref, status, cached, expanded, selected; drawer shows provenance, boundary copy, hash, expected calls, and Enrich effect. | Best for dense data and raw fields. Clear place for failed/unavailable/API-disabled and current local preview basis. | Row select plus drawer; Enrich Selected preflight remains a separate source-owned action row or footer. | Table must collapse to priority rows: lead id/status/selected first, raw hash in drawer only. | Raw-field visibility can dominate; table may feel diagnostic. If drawer copy is weak, queued refs can still blur into Evidence. | Atlas renderer/table review; narrow row collapse review; hash containment; terminology review; source-owned Enrich effect confirmation. |

### Recommendation

Recommend `Table with detail drawer`, with a separate Enrich Selected readiness row owned by Atlas.

Reason: this request includes many structured fields and real density pressure. A card treatment is friendlier but risks hiding the exact boundary between queued Discovery refs and stored Evidence. A compact table keeps the queue scannable while the drawer carries provenance, raw hash, warnings, and effect notes without placing all fields in the first read.

Adoption caution: the table should not become a new data contract or imply new sorting/filtering behavior. Atlas must decide any row actions and preflight semantics.

### Fitness Discussion Handoff

| Request id | Recommended method | Source-project review needed | Adoption state suggestion | Implementation-packet-ready? |
| --- | --- | --- | --- | --- |
| `atlas.discovery.queue-review-possible-leads` | Table with detail drawer plus separate Enrich readiness row | Atlas must approve Evidence boundary copy, raw hash visibility, selected-state behavior, and Enrich effect wording. | Discuss whether table density improves queue review or whether grouped lanes better match operator flow. | No. Not a Dev/auth state. |

## 3. `atlas.watch.state-display`

### Source Boundary

| Item | Readback |
| --- | --- |
| Source owner | Atlas / Atlas Overseer. |
| Product attachment | Watch / Queue; Watch status and state display. |
| Scope | One Watch state family covering summary, due/blocked/ready/armed/running/last checked/next eligible, why blocked, and diagnostic reveal. |
| Preserve terms | Watch; Marked; External API; blocked; ready; last checked; next eligible. |
| Terms to avoid or qualify | Watcher unless Human blesses it; monitoring unless scoped as Watch behavior; live unless actually enabled; tactical; intelligence. |
| Non-goals | No scheduler, executor, polling, backend Watch semantics, Marked changes, bridge/IPC/payload/persistence changes, or Atlas adoption. |
| Adoption authority | Atlas owns Watch/Marked meaning and any local state model. |

### Method Comparison

| Method | First-read hierarchy | State / basis / freshness / gaps | Interaction / reveal | Narrow behavior | Terminology risks | Later verification if adopted |
| --- | --- | --- | --- | --- | --- | --- |
| State ladder | Ordered state family from not configured -> configured -> ready/due -> running -> blocked/failed, with last checked and next eligible attached. | Strongest state distinction. Good for no watches, due, blocked, armed/disarmed, running, failed, complete, stale/unavailable. Basis line must say Watch routine check configuration/schedule, not Marked attention. | Reveal per rung or current rung detail; diagnostics route only after first read. | Collapse to current rung plus previous/next cue; avoid showing every rung in narrow shell. | Ladder can imply a strict process if Atlas states are not truly sequential. Armed/running can imply ongoing collection unless gates are explicit. | Atlas state-label review; scheduler semantics review; narrow collapse review; no live smoke unless Atlas authorizes. |
| Compact status band | One Watch band with total, due, blocked, next eligible, and detail reveal for executor fields. | Strong for summary counts and freshness. Weak for explaining full state family unless detail reveal is prominent. | Band first; reveal opens executor_state, task_id, block_reason, last checked, next eligible. | Very good narrow fit: state/value, due/blocked, next eligible. | Can hide Marked/Watch asymmetry. `Watch` may feel like generic background activity if basis is too short. | Atlas terminology review; detail reveal containment; renderer smoke if implemented; reduced-motion if updating states animate. |
| Split Marked/Watch panel | Side-by-side contrast: Marked interest/attention separate from Watch routine check state. | Best at protecting asymmetry. Can still include Watch due/blocked/ready and Marked related context. | Reveal can explain relation and non-relation; routes to Marked/Watch surfaces stay separate. | Side-by-side must stack into two labeled sections; may be too large for an Overview rail. | Introducing Marked on a Watch surface may create coupling if Atlas does not want it there. Can broaden the request. | Atlas product-boundary review first; then visual review. Not implementation-packet-ready unless Atlas confirms Marked belongs in scope. |

### Recommendation

Recommend `State ladder`, but only as a bounded current-state ladder rather than a full process model.

Reason: the request is specifically about understanding configured, blocked, due, armed, running, last checked, and next eligible states. A compact band is attractive, but it will likely compress the exact distinctions that made the request necessary. The ladder should show the current Watch state first, with adjacent due/blocked/next-eligible facts and a diagnostic reveal for executor internals.

Decision needed from Atlas: confirm whether the Watch states are safe to present as an ordered ladder, or whether some are parallel facets. If Atlas says they are parallel, adapt toward `Compact status band` plus grouped state chips.

### Fitness Discussion Handoff

| Request id | Recommended method | Source-project review needed | Adoption state suggestion | Implementation-packet-ready? |
| --- | --- | --- | --- | --- |
| `atlas.watch.state-display` | State ladder, pending Atlas state-order review | Atlas must confirm ordered vs parallel state treatment and Watch/Marked boundary. | Discuss whether Watch states feel sequential enough for a ladder; if not, pivot to compact band plus grouped state chips. | No. Not a Dev/auth state. |

## 4. `sense.clipboard-window`

### Source Boundary

| Item | Readback |
| --- | --- |
| Source owner | AURA-Sense / Sense Overseer. |
| Product attachment | Threat Intel / Clipboard Acquisition; clipboard widget inside the Threat Intel acquisition bar. |
| Scope | One flow slice covering clipboard widget, key chips, lifecycle states, captured target transition, shortcut/manual alternates, Live IO blocked, timeout/rejection/cancellation/cooldown, and compact/narrow behavior. |
| Preserve terms | Clipboard Acquisition; Threat Intel; Live IO blocked; No scan; Pulling; Listening; Cooldown; Idle; Control+\; Control+Alt+Space; `clipboard.acquisition.snapshot`. |
| Terms to avoid or qualify | monitoring unless explicitly negated; watcher/watching; hidden scan; live unless tied to Sense live IO authority; fallback unless manual/alternate input; Evidence/proof/assessment/storage/history/durable-record semantics. |
| Non-goals | No shortcut behavior, runtime/live IO policy, backend, bridge, IPC, payload, schema, service, provider, persistence, renderer behavior, adoption, or Threat Intel drawer redesign. |
| Adoption authority | Sense decides visible labels, lifecycle wording, and whether Lab-translatable copy is allowed. |

### Method Comparison

| Method | First-read hierarchy | State / basis / freshness / gaps | Interaction / reveal | Narrow behavior | Terminology risks | Later verification if adopted |
| --- | --- | --- | --- | --- | --- | --- |
| Compact authority strip | One-line widget: Clipboard Acquisition label, lifecycle state, shortcut chip, bounded timer/cooldown cue, Live IO blocked reason, captured-target handoff marker. | Strongest for compact authority window. Basis can be `clipboard.acquisition.snapshot`, runtime shortcut status, and Sense runtime policy. Freshness is the three-second active window and five-second cooldown, not a generic age. | Minimal reveal or tooltip for reason/manual path; captured target handoff remains visible but not treated as scan result. | Best fit for narrow overlay; long alternate shortcut text must compress to chip plus detail path. | Pulling/Listening can still imply background monitoring unless state text includes bounded authority. Live IO blocked can be misread as provider failure if the reason is hidden. | Sense terminology review; clipboard lifecycle visual review; renderer/Electron visual smoke if implemented; clipboard race verification only in Sense implementation packet; protected-term check. |
| Lifecycle stepper | Idle -> Pulling -> Listening -> Captured/Rejected/Timeout -> Cooldown, with manual/alternate shortcut side affordance. | Best for lifecycle comprehension and bounded active state. Can visibly show three-second window and five-second cooldown. | Stepper advances only when lifecycle is real; reveal holds reason, shortcut registration, manual path, unchanged clipboard note. | Stepper collapses to current step plus next/last compact cue. May be too wide for the acquisition bar. | Stepper can imply process stages even when states are branches. Listening label needs strong bounded copy. | Sense lifecycle review; reduced-motion check; narrow collapse screenshots; no runtime behavior change unless Sense opens it. |
| Command-status card | Small stacked card separating shortcut authority, clipboard state, captured target, Live IO/manual path, and detail reason. | Strongest separation of authority, state, target, and blocked/manual reasons. Better for long copy and alternate shortcut. | Reveal can be integrated as the card's lower detail area. Manual path appears as deliberate alternate input, not fallback truth. | More stable than stepper for long text but heavier than a strip; card can stack fields without layout shift. | Card may feel too large for a widget inside the acquisition bar. If too panel-like, it can imply a full Threat Intel sub-surface. | Sense layout review in narrow shell; terminology review for fallback/manual; renderer smoke if implemented; Electron visual smoke if CSS/layout changes. |

### Recommendation

Recommend `Compact authority strip` with one conditional detail reveal for reason/manual path.

Reason: Sense needs a short visible authority window, not a full process display. The strip best protects the request boundary by making active authority brief and visible, while keeping shortcut/manual/cooldown/blocked states in the same compact region. The lifecycle stepper is useful as a review reference but risks over-explaining a small widget; the command-status card is safer for copy but probably too large for the target surface.

Decision needed from Sense: preserve exact visible labels `Pulling`, `Listening`, and `Cooldown`, or allow Lab-translatable display labels while retaining Sense meaning. Until Sense decides, the advisory recommendation should assume source-exact labels with bounded authority notes.

### Fitness Discussion Handoff

| Request id | Recommended method | Source-project review needed | Adoption state suggestion | Implementation-packet-ready? |
| --- | --- | --- | --- | --- |
| `sense.clipboard-window` | Compact authority strip with conditional detail reveal | Sense must decide preserve-exact vs Lab-translatable lifecycle labels and review Live IO blocked/manual-path copy. | Discuss whether a strip gives enough lifecycle clarity or whether the stepper is worth the extra space. | No. Not a Dev/auth state. |

## Cross-Request Comparison

| Request | Recommended method | Why this method fits | Main risk |
| --- | --- | --- | --- |
| `atlas.overview.right-rail-status-stack` | Expandable detail cards | Preserves compact rail while carrying source-owned basis and warnings. | Card parity can imply equal authority across unlike Atlas concepts. |
| `atlas.discovery.queue-review-possible-leads` | Table with detail drawer plus Enrich readiness row | Handles dense structured refs while keeping Evidence boundary in detail. | Raw fields can dominate and queued refs can still feel like Evidence. |
| `atlas.watch.state-display` | State ladder, pending source state-order review | Gives Watch state distinctions first-read weight. | May imply a strict sequence if Watch states are parallel facets. |
| `sense.clipboard-window` | Compact authority strip with conditional detail reveal | Keeps Clipboard Acquisition bounded, visible, and narrow-safe. | Pulling/Listening/Cooldown need Sense label decision to avoid background-monitoring implication. |

## Human Relay / Fitness Discussion Table

| Request id | Source project | Lab response state | Recommendation | Source-project review needed | Fitness discussion prompt | Possible follow-up |
| --- | --- | --- | --- | --- | --- | --- |
| `atlas.overview.right-rail-status-stack` | Atlas | advisory comparison ready | Expandable detail cards | Confirm reveal/route behavior and Evidence/Possible Leads boundary copy. | Does inline detail make the right rail calmer, or does route-first better fit Atlas flow? | Atlas may create a local adoption/action record only after discussion. |
| `atlas.discovery.queue-review-possible-leads` | Atlas | advisory comparison ready | Table with detail drawer plus Enrich readiness row | Confirm raw hash visibility, selected-state behavior, and Enrich effect wording. | Does table density help queue review, or do grouped lanes better express operator choice? | Atlas may request a refined comparison or create a local adoption/action record after discussion. |
| `atlas.watch.state-display` | Atlas | advisory comparison ready | State ladder, pending source state-order review | Decide ordered vs parallel Watch state treatment and Marked placement. | Are Watch states sequential enough for a ladder? | Atlas should answer the state-order question before any adoption/action record. |
| `sense.clipboard-window` | Sense | advisory comparison ready | Compact authority strip with conditional detail reveal | Decide preserve-exact vs Lab-translatable lifecycle labels; review Live IO blocked/manual-path copy. | Does the strip preserve the short authority-window feel, or does the stepper better communicate lifecycle? | Sense should answer label/flow fitness before any adoption/action record. |

## Risks And Decisions Needed

- Atlas `Evidence`, `Discovery`, `Possible Leads`, `Watch`, `Marked`, and `Assessment Memory` must remain Atlas-owned. Lab should provide display containers, not term replacements.
- Sense `Clipboard Acquisition`, `Pulling`, `Listening`, `Cooldown`, `Live IO blocked`, `No scan`, and `clipboard.acquisition.snapshot` must remain Sense-owned unless Sense explicitly allows display translation.
- The Atlas Watch request needs a source decision on whether the states can be displayed as an ordered ladder or must remain parallel facets.
- The Sense clipboard request needs a source decision on preserve-exact lifecycle labels versus Lab-translatable labels.
- Lab material set names and method names are planning aids only. They are not target-project copy.
- Later verification belongs to the source project only after local Human/source-project discussion, adoption/action record, and implementation packet creation.

## Parked Items

- Any Atlas or Sense implementation runway.
- Target-project adoption records.
- Backend, bridge, IPC, payload, schema, service, provider, persistence, runtime, or renderer behavior changes.
- SmokeFlash implementation.
- Additional Sense inventory rows that are not active `request_display` entries.
- Display inventory scaffold work.

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

No Electron smoke is required for this advisory documentation artifact.
