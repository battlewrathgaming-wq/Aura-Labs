# DisplayUseCaseCaptureHS80 - Request Display Map

Date: 2026-05-25
Project: Aura Lab
Milestone: M23 - Display Use Case Capture
Status: M23 artifact, ready for Overseer/Human acceptance review

## Purpose

Capture real display use cases arriving through `request_display`, then map them to accepted Lab display slots, display types, material sets, and three candidate display methods.

This artifact is advisory only. It is not implementation approval, target-project adoption, a bridge contract, a payload schema, a shared glossary, or source-project meaning.

## Files Reviewed

Lab:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/request_display.md`
- `workspace/display-request-cooperation-contract.md`
- `workspace/display-asset-documentation-owner-contract.md`
- `workspace/OverseerHS80-m23-display-use-case-capture-runway.md`
- `workspace/DisplayTaxonomyHS73-terminology-to-slot-map.md`
- `workspace/DisplayTypeLibraryHS76-display-pattern-research.md`
- `workspace/reference/display-material-bench-2026-05-25.md`

Atlas:

- `F:\Projects\AURA-Atlas\workspace\RequestDisplayHS50-atlas-initial-display-requests.md`
- `F:\Projects\AURA-Atlas\workspace\request_display.md`

Sense:

- `F:\Projects\AURA-Sense\workspace\request_display.md`
- `F:\Projects\AURA-Sense\workspace\display_inventory.md`

## Current Intake State

| Project | Active request count | Cap status | Intake state |
| --- | ---: | --- | --- |
| Atlas | 3 | Under cap of 5 | Three `submitted` requests are ready for Lab comparison. |
| Sense | 1 | Under cap of 5 | One `submitted` Clipboard Acquisition request is ready for Lab comparison. |
| Lab | 0 | Under cap of 5 | Lab-local use cases remain represented by accepted M19/M20/M21/M22 materials. |

## Workflow Notes

- `submitted`, `active-review`, and `accepted-input` count toward the five-active-request cap.
- Sense inventory rows marked `needs-scope`, `request-ready`, or parked candidate are not active Lab requests until Sense submits scoped `request_display` entries.
- `sense.clipboard-window` is now submitted. The Sense-local source artifact is `F:\Projects\AURA-Sense\workspace\RequestDisplayHS16-clipboard-window.md`; Lab's `workspace/request_display.md` carries the intake mirror.
- A Lab response should compare display methods only inside the request boundary.
- Atlas and Sense keep source terms, source semantics, data meaning, runtime behavior, and final adoption authority.
- Lab owns only the Bridge -> Interface presentation comparison after source meaning is preserved.

## Use-Case Comparison Table

| Request ID | Project / owner | Status | Product attachment | Limited scope | Current shape | User goal | Terms to preserve | Terms to avoid or qualify | Known fields | State / freshness / basis / gap needs | M20 slots | M21 display types | M22 material sets | Method A | Method B | Method C | Risks | Disposition | Recommended next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `atlas.overview.right-rail-status-stack` | Atlas / Atlas Overseer | submitted | Atlas Overview; right-side status stack; high priority | One status-card family covering Stored Evidence, Possible Leads, Watch Status, and Assessment Memory. Excludes backend counts, behavior changes, full redesign, and contracts. | Four right-rail cards with labels and route-like affordances. | Scan what exists, what is pending, what is actively checked, and what deliberate operator memory exists without confusing meanings. | Stored Evidence; Possible Leads; Watch; Marked; Assessment Memory; Discovery; Evidence; provenance | Watcher; evidence for Possible Leads; intelligence; finding; report unless Atlas-owned | Stored evidence count/availability; Possible lead count/availability; Watch loaded/due/blocked/active; Assessment artifact count/availability; empty/unavailable/stale/not-loaded | Need loaded/stale/not-loaded/unavailable, source basis per card, and warnings that Possible Leads are Discovery output and Assessment Memory is deliberate memory. | `source-owned label`; `primary value`; `secondary value`; `state label`; `status light`; `readout age`; `source-owned basis`; `availability note`; `warnings`; `detail reveal`; `narrow summary` | Status band; status chip; value rail; source coverage marker; availability reason treatment; detail reveal; route-first card family | `status-chip-row`; `availability-distinction`; `source-coverage-collision`; `gap-warning-pressure`; `value-rail-mixed` | Compact scan cards: four equal cards with source-owned label, one primary value, one state chip, one basis/age line, and one route affordance. | Expandable detail cards: compact default card opens inline basis, gaps, warnings, and route context. | Route-first cards: each card acts as a navigation unit with a small status band and a detail hint instead of inline density. | Possible Leads can visually blur into Evidence; Watch can blur into Marked; card parity can imply equal authority. | Active Lab comparison candidate. | UI/UX should sketch the three methods and recommend one for Atlas review. |
| `atlas.discovery.queue-review-possible-leads` | Atlas / Atlas Overseer | submitted | Discovery / Queue Review; Possible Leads into Enrich Selected preflight; high priority | One flow slice covering queued refs, selected refs, status/cached/expanded indicators, Enrich Selected preflight, and Evidence boundary copy. Excludes backend logic, live API behavior, schemas, parsing, and expansion semantics. | Queue Review exposes raw refs, metadata, hash/status/cached/expanded fields, text export, and boundary copy. | See what can be investigated next, why it is not Evidence yet, and whether to run Enrich Selected. | Discovery; Possible Leads; Queue Review; Enrich Selected; Evidence; External API; provenance | evidence for queued refs; observation unless stored as Atlas observation; proof; intelligence; report unless Atlas-owned | discovered_by_type/id; killmail_id; hash; status; cached; expanded; candidates_considered; selected_for_expansion; expected_esi_calls; evidence_effect | Need empty/candidate/selected/expanded/cached/failed/unavailable/API-disabled/preflight-blocked. Basis must say zKill refs are Discovery/provenance metadata until expansion stores Evidence. | `source-owned label`; `primary value`; `state label`; `sample note`; `cap marker`; `authority note`; `effect note`; `source-owned basis`; `detail row`; `long text block`; `warnings`; `narrow summary` | Compact table/list; detail reveal; status chip; action readiness strip; availability reason treatment; long text detail block; value rail | `detail-long-basis`; `availability-distinction`; `status-chip-row`; `gap-warning-pressure`; `collision-language`; `value-rail-mixed` | Lead cards: one candidate per card, with status chip, cached/expanded markers, selected state, and detail reveal for raw ref/hash. | Grouped lanes: queued, selected, cached/expanded, failed/blocked lanes, with Enrich preflight as a separate action-readiness strip. | Table with detail drawer: compact sortable rows with chips and a drawer for provenance, boundary copy, and preflight effect. | Raw hash visibility can overwhelm; Enrich action can look automatic; queued refs can feel like Evidence if warning/basis is weak. | Active Lab comparison candidate. | UI/UX should compare density and boundary-copy handling before Atlas considers implementation. |
| `atlas.watch.state-display` | Atlas / Atlas Overseer | submitted | Watch / Queue; Watch state display; high priority | One Watch state family covering summary, due/blocked/ready/armed/running/last checked/next eligible, why blocked, and diagnostic reveal. Excludes scheduler/executor behavior, polling, backend semantics, and Marked changes. | Watch Gates, Summary, Executor, Authoring, and Schedule expose scheduler/runtime fields directly. | Understand whether Watch is configured, blocked, eligible, armed, running, waiting, or failed, and why. | Watch; Marked; External API; blocked; ready; last checked; next eligible | Watcher unless Human blesses it; monitoring unless scoped; live unless enabled; tactical; intelligence | session_armed; due_count; blocked_count; total_watches; watch_type/id; last_checked; next_eligible; block_reason; executor_state; task_id | Need no watches/configured/due/blocked/ready/armed/disarmed/running/failed/complete/stale/unavailable. Basis must separate Watch routine checks from Marked attention. | `source-owned label`; `state label`; `status light`; `readout age`; `availability note`; `authority note`; `effect note`; `detail reveal`; `diagnostic row`; `narrow summary` | Status band; status chip; availability reason treatment; action readiness strip; progress strip where real stages exist; detail reveal; diagnostic panel | `availability-distinction`; `status-chip-row`; `detail-long-basis`; `gap-warning-pressure`; `collision-language` | State ladder: ordered visual ladder from not configured to ready/due/running/blocked/failed, with last checked and next eligible attached. | Compact status band: one Watch band with total, due, blocked, next eligible, and detail reveal for executor fields. | Split Marked/Watch panel: side-by-side contrast showing Marked interest separately from Watch routine check state. | Watch can imply ongoing collection if armed/gates are unclear; Marked can be misread as Watch; executor internals can dominate. | Active Lab comparison candidate. | UI/UX should recommend whether state ladder or compact band better protects Watch/Marked asymmetry. |
| `sense.threat-latest-scan-review` | Sense / Sense Overseer | parked candidate from inventory | Threat Intel latest scan review; not submitted | Candidate needs a separate scoped `request_display` before Lab active review. | Latest Threat Intel scan review with target, status, type, basis, sample, state, and persistence message. | Present latest scan review without storage/history flavor. | Threat Intel; No scan; Scoped sample; Partial sample; Capped sample; Live IO blocked | historical proof; durable storage; broad intelligence; complete provider view | target; target type; source/provider; lookback; sample count; cap; partial; blocked; failed; stale/no-scan reason | Needs deliberate-scan absence, sample/cap/partial, blocked/failure distinction, and basis. | `source-owned label`; `primary value`; `sample note`; `cap marker`; `availability note`; `source-owned basis`; `warnings`; `detail reveal` | Detail reveal; availability reason treatment; scoped sample treatment; compact table/list; status chip | `availability-distinction`; `value-rail-mixed`; `collision-language`; `detail-long-basis` | Latest-scan readout card. | Sample/basis detail drawer. | Status-chip row list. | Lab must not make latest review feel like storage or Atlas Evidence. | Parked until Sense submits scoped request. | Sense can submit this as a comparative request when ready. |
| `sense.clipboard-window` | Sense / Sense Overseer | submitted | Threat Intel / Clipboard Acquisition; Clipboard widget inside the Threat Intel acquisition bar; high priority | One flow slice covering clipboard widget, key chips, acquisition status, lifecycle states, captured target transition, shortcut/manual alternates, Live IO blocked, timeout/rejection/cancellation/cooldown, and compact/narrow behavior. Excludes Threat Intel provider layout, full drawer redesign, Gateway semantics, shortcut/runtime policy changes, backend/bridge/IPC/payload/schema/service/provider/persistence/renderer behavior changes, and adoption. | Compact Clipboard Acquisition widget in the Threat Intel acquisition area with key chips, state text, acquisition status, target transition, blocked/cooldown/manual path feedback. | Understand whether clipboard acquisition is idle, active, blocked, captured, rejected, timed out, cooling down, available by shortcut, available by alternate shortcut, or available through manual input without mistaking it for background monitoring. | Clipboard Acquisition; Threat Intel; Live IO blocked; No scan; Pulling; Listening; Cooldown; Idle; Control+\; Control+Alt+Space; `clipboard.acquisition.snapshot` | monitoring unless explicitly negated; watcher/watching; hidden scan; live unless tied to existing Sense live IO authority; fallback unless manual/alternate input; evidence/proof/assessment/storage/history/durable record semantics | Clipboard snapshot state; message/reason; captured target text; shortcut registered state; alternate shortcut status; shortcut unavailable/manual path; live IO enabled/blocked; current Threat target display; three-second active window; five-second cooldown; unchanged clipboard ignored after arming | Need idle/pulling/listening/captured/scan-pending/rejected/unchanged/timeout/cancel/cooldown/live-IO-blocked/shortcut/alternate/manual states. Active authority must appear only during the short window; cooldown must be bounded; source basis is `clipboard.acquisition.snapshot`, runtime shortcut status, and backend runtime policy. | `source-owned label`; `state label`; `status light`; `authority note`; `availability note`; `effect note`; `readout age`; `warnings`; `detail reveal`; `narrow summary` | Status band; status chip; action readiness strip; lifecycle/progress strip only for real lifecycle; availability reason treatment; detail reveal; compact command-status card | `availability-distinction`; `status-chip-row`; `gap-warning-pressure`; `collision-language` | Compact authority strip: a one-line widget with state text, shortcut chip, bounded timer/cooldown cue, Live IO blocked reason, and captured-target handoff marker. | Lifecycle stepper: idle -> pulling -> listening -> captured/rejected/timeout -> cooldown, with manual/alternate shortcut as side affordance. | Command-status card: small stacked card separating shortcut authority, clipboard state, captured target, and manual path while preserving narrow overlay behavior. | Pulling/Listening can imply background monitoring; captured target can imply hidden scan; Live IO blocked can be misread as provider failure; long alternate shortcut copy can cause layout shift. | Active Lab comparison candidate. | UI/UX should compare the three methods and recommend preserve-exact vs Lab-translatable visible labels for Pulling/Listening/Cooldown under Sense authority. |
| `sense.provider-pulse-row` | Sense / Sense Overseer | parked candidate from inventory | Passive/Threat provider pulse row; not submitted | Candidate needs stronger scope before Lab active review. | Passive and Threat provider pulse chips. | Compare calmer provider/sample status display against pulse wording. | Passive Telemetry; Threat Intel; Partial sample; Capped sample; Live IO blocked | continuous live heartbeat; complete provider truth | source/provider; freshness/age; sample count; cap; partial; blocked; failed/degraded; no observation/no scan | Needs sample status, freshness, cap/partial, blocked/failure/no observation/no scan. | `source-owned label`; `state label`; `readout age`; `sample note`; `cap marker`; `availability note`; `source coverage`; `warnings` | Status chip; source coverage marker; grouped pips; value rail; availability reason treatment | `source-coverage-collision`; `grouped-pips-coverage`; `availability-distinction`; `value-rail-mixed` | Source/sample chip row. | Grouped pips with legend/detail. | Compact value rail with cap/sample notes. | `pulse` can imply continuous heartbeat. | Parked until Sense submits scoped request. | Sense should decide whether pulse remains user-facing. |
| `sense.passive.state-basis` | Sense / Sense Overseer | parked candidate from inventory | Passive Telemetry state/basis display; not submitted | Candidate can become a pressure-test request after Sense wants further Passive work. | Accepted Passive Telemetry instrument band plus diagnostics. | Reduce first-read density while preserving Passive state, freshness, source, cap, partial, blocked, degraded, and no observation meaning. | Passive Telemetry; Fresh context; Stale context; Partial sample; Capped sample; Live IO blocked; No observation | generic no-data/current wording; background Threat Intel | current system; state; source basis; activity; sample count; age; cap; partial; blocked; degraded; no observation | Needs clear state, source/basis, sample/cap, blocked/degraded/no observation, and detail reveal. | `source-owned label`; `primary value`; `secondary value`; `state label`; `readout age`; `sample note`; `cap marker`; `availability note`; `detail reveal` | Status band; value rail; availability reason treatment; detail reveal; gap/warning marker | `availability-distinction`; `value-rail-mixed`; `gap-warning-pressure`; `detail-long-basis` | Refined instrument band. | Detail reveal for Passive basis/gaps. | Value rail for sample/activity/freshness. | Must not import Lab state labels as Sense enums. | Parked until Sense submits scoped request. | Sense can request visual-density tuning or detail reveal separately. |
| `sense.threat-acquisition-bar` | Sense / Sense Overseer | parked candidate from inventory | Threat target acquisition bar; not submitted | Candidate needs a separate scoped `request_display` before Lab active review. | Search / Display bar with target text, target kind, manual target placeholder, resolver feedback. | Clarify manual and clipboard target acquisition without background-scan implication. | Threat Intel; target type; manual target; clipboard-acquired target; No scan | automatic target finding; hidden provider calls; target guessing; complete intelligence | input source; target text; target kind; resolver result; scan state; blocked/failed/ambiguous/unresolved/unsupported | Needs input source, resolver state, no-scan, blocked/failure/ambiguous/unresolved/unsupported, and basis. | `source-owned label`; `primary value`; `state label`; `authority note`; `effect note`; `availability note`; `warnings`; `detail reveal`; `narrow summary` | Action readiness strip; availability reason treatment; status chip; detail reveal; compact list | `availability-distinction`; `status-chip-row`; `collision-language`; `gap-warning-pressure` | Acquisition control strip. | Target resolver card. | Split manual/clipboard source panel. | Must not imply hidden scans or guessed targets. | Parked until Sense submits scoped request. | Sense should scope search/display/acquisition grouping before Lab comparison. |

## Lab-Known Anchor Use Cases

These rows are not incoming target requests. They keep Lab's own accepted primitives visible as anchors for future comparison.

| Use case | Current Lab owner | Current state | Useful next comparison |
| --- | --- | --- | --- |
| Bridge State Readout / Instrument Status Band | Lab | Accepted M19 prototype | Use as a reference for compact band, primary value/status, state marker, basis/age, gaps/warnings, and detail reveal. |
| Readout Detail Reveal | Lab | Accepted as visible label and implied next primitive | Compare detail reveal, long text detail block, compact table/list, and warning/gap stack before implementation. |
| Availability Reason Treatment | Lab | Material-backed candidate | Compare calm empty panel, status-chip reason, and compact band reason before building a general primitive. |

## Pointer Deployment Record

Atlas:

- `F:\Projects\AURA-Atlas\workspace\request_display.md` points to Lab's schema.
- `F:\Projects\AURA-Atlas\workspace\display-request-workflow-hardening-contract.md` records Atlas-local authority.
- Atlas supplied `F:\Projects\AURA-Atlas\workspace\RequestDisplayHS50-atlas-initial-display-requests.md` with three active requests.

Sense:

- `F:\Projects\AURA-Sense\workspace\request_display.md` points to Lab's schema.
- `F:\Projects\AURA-Sense\workspace\display-request-workflow-hardening-contract.md` records Sense-local authority.
- Sense supplied `F:\Projects\AURA-Sense\workspace\display_inventory.md` with parked candidate rows.
- Sense submitted `sense.clipboard-window` via `F:\Projects\AURA-Sense\workspace\RequestDisplayHS16-clipboard-window.md`, mirrored into Lab `workspace/request_display.md`.

## Risks

- Request intake can become hidden backlog churn if Lab treats parked inventory rows as active requests.
- Atlas Evidence / Discovery / Watch terms are high-authority source terms and must remain Atlas-owned.
- Sense lane and state terms are high-authority source terms and must remain Sense-owned.
- Three candidate methods are comparison aids, not design selection or implementation approval.
- Material set names are Lab planning aids, not source-project vocabulary.

## Parked Items

- Remaining Sense request rows until Sense submits scoped `request_display` entries.
- SmokeFlash HTML harness.
- Display inventory scaffold.
- Repeat implementation cycle.
- Target-project implementation runways.
- Any bridge, IPC, payload, persistence, or adapter changes.

## Recommended Next Packet

Recommended next packet:

```txt
M24 - Atlas Right Rail / Queue / Watch Presentation Comparison
```

Reason:

Atlas has submitted three active requests under the cap. The next useful Lab packet should let UI/UX compare the three candidate methods per Atlas request in a visual/advisory artifact, then return recommendations to Atlas for its own adoption decision.

Alternate next packet:

```txt
M24 - Display Inventory Scaffold
```

Choose this if Human wants Lab to harden the reusable inventory structure before answering Atlas's active requests.

Do not open SmokeFlash yet unless Human prioritizes tooling over request response.

## Acceptance Check

- Usable comparison table: yes.
- Uses `request_display` as advisory intake: yes.
- Five-active-request cap followed: yes; Atlas 3, Sense 1.
- Limited scope and product attachment included for active Atlas requests: yes.
- Maps use cases to M20 slots, M21 display types, and M22 material sets: yes.
- Offers three candidate display methods per suitable use case: yes.
- Source-project meaning ownership clear: yes.
- Target-project terms preserved as source-owned: yes.
- Gives future inventory, SmokeFlash, or primitive-selection work better targets: yes.
- Keeps request intake from becoming hidden backlog: yes.

## Verification

Ran local verification:

```powershell
npm.cmd run verify:all
```

Result:

- Passed.
- Existing Lab protected-term discovery reported 31 warning-only candidates.

Ran shared advisory check:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Result:

- `Terminology verification: 53/53 resource checks passed.`
- 24 advisory warnings remain for existing Lab internal/compatibility `trust` and `certainty` surfaces.

No Electron smoke was required because M23 is documentation/intake only.
