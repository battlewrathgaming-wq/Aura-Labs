# Aura Lab Terminology And State Bridge Audit

Status: Advisory audit
Date: 2026-05-24
Role: Terminology/state auditor
Project: Aura Lab

## 1. Files Reviewed

Read first:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/current.md`
- `workspace/00-dot-protocol.md`
- `workspace/prompts.md`
- `docs/README.md`
- `docs/index.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `workspace/complete/milestone-M11/OverseerHS42-m11-presentation-state-readout-acceptance.md`
- `workspace/complete/milestone-M11/DevHS41-presentation-state-readout-retone.md`
- `package.json`

Inspected as needed:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `src/main/preload.js`
- `src/services/serviceRegistry.js`
- `src/services/taskRunner.js`
- `src/services/messageTaxonomy.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-all.js`

Additional inspection:

- `rg` term sweep across source, scripts, docs, and workspace records for risky terminology.
- `git status --short` only for tree awareness before writing this artifact.

Verification was not run.

## 2. Short Current-State Understanding

Aura Lab is idle after accepted M11 closure. Its current accepted product boundary is a light proving bench for portable post-bridge HTML presentation and display mapping. The renderer presents bridge-shaped or fixture-backed information; it does not own truth, define product doctrine, or establish a durable bridge schema.

M11 accepted `Presentation State Readout` as the current Lab feature name and accepted the neutral labels `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`. The visual treatment may stay physical/HUD-like, but tactical/combat vocabulary is rejected as default reusable Lab language.

## 3. Repo-Verified Facts

- `workspace/current.md` says there is no active executable packet, no expected Dev handoff, and no required verification.
- `workspace/overview.md` records M00 through M11 complete and accepted, with M11 as the latest accepted milestone.
- `docs/current-state/m11-presentation-state-readout-current-state.md` accepts neutral readout labels and preserves diagnostics as secondary.
- `workspace/complete/milestone-M11/OverseerHS42-m11-presentation-state-readout-acceptance.md` accepts the retone and names the tactical/combat wording rejection.
- `src/renderer/index.html` renders `Presentation State Readout`, `Source Detail`, `Readout status`, `Source coverage`, `Needs Attention`, `Bridge Diagnostics`, and `Registered Services`.
- `src/renderer/app.js` maps `loading` to `UPDATING`, `populated` to `CURRENT`, `stale` to `AGED`, `partial` to `PARTIAL`, `failed` to `UNAVAILABLE` unless `fallback_note` exists, and `empty` to `NO DATA`.
- `src/renderer/app.js` has a guarded `FALLBACK` path keyed by `fallback_note`; current fixture services do not generate fallback data.
- `src/services/serviceRegistry.js` exposes `aura.projectBriefing`, `aura.presentationFixture`, `seed.health`, `seed.readiness`, `task.list`, `task.cancel`, and `util.checksum`.
- `src/services/serviceRegistry.js` models `family` and `state` separately and exposes `Briefing` plus `Neutral Seed`.
- `src/main/preload.js` exposes narrow IPC bridges as `window.aura` and `window.auraWindow`.
- `src/main/main.js` visual smoke observations include family/state/viewport, readout fields, source/freshness/certainty text, source drawer presence, diagnostics ordering, and overflow checks.
- `scripts/verify-services.js` asserts service payload grammar, fixture states, family lists, source/certainty language, and neutral-copy safety.
- `scripts/verify-renderer-shell.js` asserts stable renderer shell terms and smoke observation fields.
- Completed M11 contains historical `DevHS40-tactical-signal-readout.md` with rejected tactical wording. It is evidence of what was replaced, not current direction.

## 4. Assumptions Or Inferred Context

- This audit is advisory and may be kept in `workspace/` rather than promoted to durable `docs/terms/` until Human or Overseer accepts a stable vocabulary boundary.
- User-facing terms should remain calm, plain, and presentation-scoped unless a later target project adapts them through its own authority.
- Service payload terms can remain more technical if they are treated as Lab-local bridge/fixture mechanics and not exported as contract language.
- Verification term stability matters because smoke and static checks are support mechanisms for presentation quality, but their vocabulary should not become product direction.

## 5. Terminology/State Bridge Table

| service/domain term | renderer/user term | verification/smoke term | meaning | user-facing? | allowed use | avoid/conflicts | recommended disposition |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `view_status` | Readout/status labels | `status`, `readout_label` | Service-provided display state for the current presentation payload. | Indirect only | Internal payload field; renderer translates it. | Do not expose as schema or target product state. | Preserve internal; keep renderer translation. |
| `loading` | `UPDATING`, `Loading`, "Updating now" | loading assertions | Initial or reselecting fixture state before the first local response. | Yes, translated | Use `UPDATING` in readout; `Loading` can remain secondary legacy status. | `SCANNING` was rejected as default tactical language. | Preserve translated UI; consider later aligning secondary `Loading` to `Updating`. |
| `populated` | `CURRENT`, `Populated` | populated assertions | Presentable payload has usable fields. | Yes, translated | Use `CURRENT` for readout; `Populated` may remain internal/secondary. | `Current` can overstate truth if source may be stale. | Preserve with basis copy: "ready for display", not "true". |
| `stale` | `AGED`, `Stale`, "last successful read" | stale fixture state | Payload is an older successful read. | Yes, translated | Use `AGED` in readout; use "last successful read" for explanation. | "Stale" can feel negative; "Aged" can feel vague. | Preserve pairing: user label `AGED`, internal state `stale`. |
| `partial` | `PARTIAL`, `Partial view`, Gaps | partial observations | Some fields or sources are missing/unavailable. | Yes | Use for limited but still presentable display. | Do not imply wrong data, only incomplete data. | Preserve. |
| `failed` | `UNAVAILABLE`, `Failed`, Failure note | failed fixture state | Required read failed or service path unavailable. | Yes, translated | Use `UNAVAILABLE` for calm UI; keep `failed` internal/test. | `LOST` rejected; `Failed` should not dominate primary UI. | Preserve internal; prefer user-facing `UNAVAILABLE`. |
| `empty` | `NO DATA`, `Empty` | empty fixture state | Bridge responded but no presentable fields/items exist. | Yes, translated | Use `NO DATA` readout and explicit empty explanation. | Avoid conflating empty with failed/unavailable. | Preserve. |
| `fallback_note` | `FALLBACK`, Fallback note | fallback path not exercised | Renderer displays fallback posture when service explicitly supplies fallback note. | Yes, if exercised | Guarded renderer path only. | Do not fabricate fallback data or imply current fixtures prove it. | Keep guarded; add future bounded fixture only if accepted. |
| `source_labels`, `sources[]` | Source paths, Source coverage | `sources`, `source_coverage` | Labels and availability for local sources behind a display. | Yes | Show as source coverage and detail drawer. | "Source" can imply authoritative source of truth. | Preserve but qualify as "local sources" or "display sources". |
| `last_read_at` | Readout age, Last read | `readout_age`, `freshness` | Timestamp used to express display freshness. | Yes | Show as age/freshness affordance. | Do not imply live sync or target truth. | Preserve. |
| `certainty` | Readout status / basis | `certainty` | Service phrase describing display confidence posture. | Limited | Keep service field; renderer currently replaces top value with readout basis. | "Certainty" can overstate epistemic truth. | Keep internal/secondary; prefer `basis` or `display basis` in UI. |
| `missing_fields` | Gaps, Known fields | gaps assertions | Omitted/unknown fields in the display payload. | Yes | Use "Gaps" in detail, "Known fields" count. | Avoid schema permanence. | Preserve translated UI; keep field internal. |
| `warnings[]` | Warnings | warnings observations | Non-blocking notices from service or source reads. | Yes | Use in Source Detail, secondary to state. | Avoid alarming copy unless actionable. | Preserve. |
| `action_posture` | Reading project state, Human direction needed, Dev runway ready | `action_posture` | Briefing-specific coordination posture derived from workspace state. | Yes in Briefing | Briefing fixture only. | Do not make shared Aura action taxonomy. | Keep Lab-local/Briefing-only. |
| `attention_items` | Needs Attention / Sample slots | `attention_items`, `attention_count` | Briefing item list or neutral sample list. | Yes | Briefing fixture and Neutral Seed sample slots. | "Needs Attention" sounds semantic; not shared Aura doctrine. | Keep user-facing only inside Briefing; Neutral Seed should use Sample slots. |
| `aura.projectBriefing` | Briefing | service command assertion | Provisional command returning Lab project briefing data. | No | Lab-local read-only service. | Durable bridge contract assumptions. | Preserve as provisional; do not promote. |
| `aura.presentationFixture` | Presentation family / Review state controls | service command assertion | Lab-local fixture command for family/state review. | No command; controls yes | Fixture-backed review only. | Durable schema or target adapter assumptions. | Preserve Lab-local. |
| `family` | Presentation family, Briefing, Neutral Seed | `families_checked`, `requested_family` | Presentation mapping axis independent from state. | Yes as selector | Review/dev control only. | Product navigation or target family doctrine. | Preserve as Lab review axis. |
| `state` / `mode` | Review state | `states_checked`, `modes_checked` | Fixture condition axis. `mode` remains legacy compatibility. | Yes as selector | Use `state` as preferred service/review axis; keep `mode` compatibility. | Overloading family and state; treating fixture states as product states. | Prefer `state`; keep `mode` internal/legacy. |
| `Briefing` | Briefing | family briefing screenshot names | Lab family based on project coordination fixture. | Yes | Current accepted family. | Do not export Needs Attention or workspace coordination semantics. | Preserve as Lab family. |
| `Neutral Seed` | Neutral Seed | neutral-seed screenshot names | Generic Lab-local sample family. | Yes | Second family proof, neutral fixture. | "Seed" can imply Aura Core seed doctrine. | Preserve with "Lab-local neutral fixture" qualifier. |
| `seed.health`, `seed.readiness` | Runtime / Ready / Blocked | readiness assertions | Inherited scaffold runtime/readiness checks. | Indirect | Diagnostics and service checks. | Aura Core ownership claims; "Seed" doctrine. | Keep internal/diagnostic. |
| `task.list`, `task.cancel`, `TASK_STATES` | none | task assertions | Generic service task runner mechanics. | No | Internal service infrastructure. | Product workflow semantics. | Keep internal. |
| `TASK_CLASSIFICATIONS` | none | classification assertions | Internal safety classification for commands/tasks. | No | Internal verification and service control. | Cross-project policy claims. | Keep internal. |
| `PARTIAL_RESULT` | Warnings / Partial | taxonomy assertions | Message taxonomy code for partial compute result. | No direct | Internal warning taxonomy. | Atlas evidence semantics or user-facing jargon. | Keep internal. |
| `Bridge Diagnostics` | Bridge Diagnostics | `diagnostics_visible`, `diagnostics_secondary` | Secondary diagnostic surface for bridge/service state. | Yes, secondary | Keep below primary presentation. | Making diagnostics the product. | Preserve but keep demoted. |
| `Registered Services` | Registered Services | service list target | Secondary list of service commands and classifications. | Yes, secondary/dev-like | Support surface. | User-facing product navigation or API contract impression. | Consider "Service diagnostics" later; keep secondary. |
| `bridge-state` | bridge state badge | `.bridge-state`, `status` | Visual class/surface for secondary state label. | CSS/internal plus visible text | Styling and smoke target. | Durable bridge-state schema claim. | Preserve as class; user copy should stay translated. |
| `trust-strip` | Readout status / Source coverage | `.trust-strip` | Legacy CSS name for source/certainty band. | No class; visible labels yes | Internal style hook. | "Trust" can overstate evidence doctrine. | Keep class temporarily; avoid visible "Trust" unless reviewed. |
| `state-readout`, `state-light`, `state-pips`, `state-sweep` | Presentation State Readout instrument | smoke readout selectors | Physical visual treatment for state display. | Visible as component | Accepted M11 treatment. | Tactical signal connotation if copy regresses. | Preserve visual class names; keep copy neutral. |
| `source-drawer`, `source-detail-grid` | Source Detail | `source_drawer_visible` | Inspectable detail for basis/sources/gaps/warnings. | Yes | Primary-support disclosure. | Source-of-truth implication. | Preserve; maybe later alias to "Readout Detail" if source over-focuses. |
| `diagnostics`, `secondary-surface` | Diagnostics secondary | diagnostics assertions | Visual demotion of support surfaces. | Partly | Stable smoke assertion. | Diagnostics-first project drift. | Preserve stable smoke language. |
| `Verified from source` / `Verified from local workspace sources.` | Verified from source | certainty assertions | Current successful read came from local files. | Yes currently | Only for local workspace-source fixture where true. | Can imply truth validation or Atlas evidence. | Rename candidate: "Read from local workspace sources." |
| `Reported by bridge` | Reported by bridge | loading certainty | Initial/bridge-reported posture. | Yes | Safe if bridge is a local transport/source boundary. | Can imply bridge owns truth. | Preserve with caution; "reported through local bridge" is safer. |

## 6. Overloaded Or Risky Terms

- `Presentation State Readout`: accepted current feature name, but abstract. It is safer than tactical naming, yet still broad enough that future adopters could think it is a reusable component contract.
- `Bridge State Readout`: clearer about post-bridge state, but risks implying a durable bridge schema or upstream contract.
- `Source State Readout`: clearer about source/freshness/certainty, but risks over-centering `source` and implying source authority.
- `Readout`: useful visual metaphor, but broad. Pair with "presentation", "source", or "state" when precision matters.
- `Source`: necessary but overloaded. In Lab it means local display/source basis, not authoritative truth.
- `Source coverage`: useful display affordance, but can sound quantitative/complete. It should mean "available labeled sources out of expected display sources".
- `Certainty`: high-risk if user-facing. It can imply epistemic proof. Prefer `basis`, `display basis`, or source/freshness phrasing.
- `Trust`: high-risk for Atlas evidence drift. Existing `trust-strip` class is tolerable internally; avoid visible generic trust claims.
- `Freshness`: acceptable as concept, but should be grounded in `last_read_at` and age copy, not liveness.
- `Verified`: risky. "Verified from source" overstates truth; "Read from local workspace sources" is safer.
- `Current`: safe as label only with "ready for display" or local read basis. Avoid "current truth".
- `Updating`: safe and accepted replacement for tactical `SCANNING`.
- `Aged` and `Stale`: useful pair, but `Aged` needs explanatory copy to avoid ambiguity.
- `Failed` and `Unavailable`: `failed` is technical; `UNAVAILABLE` is better for user-facing calmness.
- `Fallback`: safe only when explicitly supplied. It must not be fabricated by renderer assumptions.
- `No Data` and `Empty`: safe if separated from failure.
- `Needs Attention`: useful in Briefing, but not shared Aura semantics.
- `Briefing`: accepted family, but tied to workspace coordination fixture.
- `Neutral Seed`: accepted family, but "Seed" can sound like Aura Core seed doctrine without qualifier.
- `Fixture`: safe internal/testing term; user-facing only in dev/review controls.
- `Family`: safe as review axis; risky if treated as product navigation.
- `Diagnostics`, `Bridge`, `Service`, `Runtime`, `Registered Services`: support terms; keep secondary.
- `Evidence`: acceptable for handoff verification only, not UI/source doctrine.
- `Tactical`, `Combat`, `Operator`, `Intel`: rejected as default Lab UI language.
- `Core`, `Seed`, `Schema`, `Source of truth`: high risk for ownership/contract drift.

## 7. Terms/States That Should Remain Internal

- `view_status`
- `source_labels`
- `sources[]`
- `missing_fields`
- `warnings[]` payload shape
- `fallback_note`
- `last_read_at`
- `action_posture`
- `attention_items`
- `available_families`
- `available_states`
- `available_modes`
- `aura.projectBriefing`
- `aura.presentationFixture`
- `seed.health`
- `seed.readiness`
- `task.list`
- `task.cancel`
- `util.checksum`
- `ServiceRegistry`
- `TASK_STATES`
- `TASK_CLASSIFICATIONS`
- `PARTIAL_RESULT`
- CSS class names such as `bridge-state`, `trust-strip`, `state-readout`, `source-drawer`, `secondary-surface`, and `muted-value`

These terms may be used in code, scripts, smoke result JSON, and technical handoffs, but should not be promoted as user vocabulary or durable cross-project schema without acceptance.

## 8. Terms/States That Should Be User-Facing

- `Aura Lab`
- `Briefing`
- `Neutral Seed`, with Lab-local fixture context when documented
- `Presentation State Readout`, accepted for now
- `Source Detail`
- `Readout status`
- `Source coverage`
- `Readout age`
- `Readout basis`
- `Known fields`
- `Source paths`
- `Gaps`
- `Warnings`
- `Failure note`
- `Fallback note`
- `CURRENT`
- `UPDATING`
- `AGED`
- `PARTIAL`
- `UNAVAILABLE`
- `FALLBACK`
- `NO DATA`
- `Bridge Diagnostics`, secondary
- `Registered Services`, secondary/dev-facing
- `Presentation family` and `Review state`, because the current UI is a Lab review surface

## 9. State Model Review

### loading

Current implementation: service status `loading` renders `UPDATING`, "Updating from the local bridge", and "Updating now".

Review: Safe and honest. It describes process, not truth. Secondary `Loading` label remains older generic language but is not harmful.

Disposition: Preserve. Optional future polish: align secondary `Loading` with `Updating` if UI wants one language set.

### current/populated

Current implementation: `populated` maps to `CURRENT`; basis says "Current local sources available" and summary says "ready for display."

Review: Mostly safe because the copy says display readiness. Risk appears if `CURRENT` is read as truth rather than readout freshness.

Disposition: Preserve with basis copy. Avoid "verified truth", "live", "synced", or "approved".

### updating

Current implementation: accepted label for loading/reselecting state.

Review: Safe. Replaced rejected tactical `SCANNING`.

Disposition: Preserve.

### aged/stale

Current implementation: service `stale` maps to `AGED`; explanation says "last successful read" and "source may have changed."

Review: Honest and useful. `AGED` alone is abstract, but supporting copy resolves it.

Disposition: Preserve. Keep `stale` internal/test and `AGED` user-facing.

### partial

Current implementation: maps to `PARTIAL`; names gaps and displays available fields.

Review: Safe. It avoids pretending completeness.

Disposition: Preserve. Continue naming missing fields only where safe.

### unavailable/failed

Current implementation: service `failed` maps to `UNAVAILABLE`; failure note can show service error message.

Review: Safe if error messages stay calm and local. User-facing `UNAVAILABLE` is better than `Failed`.

Disposition: Preserve. Keep `failed` internal/test.

### fallback

Current implementation: guarded renderer tone when `fallback_note` exists. Accepted fixtures do not exercise it.

Review: Correctly cautious. Current smoke does not prove fallback fixture behavior.

Disposition: Keep guarded and documented as unexercised. Do not expand without bounded acceptance.

### empty/no data

Current implementation: service `empty` maps to `NO DATA`; copy says bridge responded but no presentable data exists.

Review: Safe. It distinguishes absence from failure.

Disposition: Preserve.

### long-text

Current implementation: fixture/review state that stresses overflow and containment while still rendering populated display.

Review: Safe as test material. User-facing "Long text" in review selector is acceptable in a Lab bench.

Disposition: Preserve as review state, not product state.

### missing

Current implementation: missing payload values render `Not provided`, failed values render `Unavailable`, loading values render `Reading`.

Review: Safe and calm. `Not provided` avoids inventing cause.

Disposition: Preserve.

### warnings

Current implementation: warnings surface in Source Detail; taxonomy messages remain technical.

Review: Safe if secondary and not alarmist.

Disposition: Preserve.

### diagnostics

Current implementation: diagnostics are visible below presentation and smoke asserts secondary placement.

Review: Correctly demoted. This protects product direction.

Disposition: Preserve stable smoke checks; do not broaden diagnostics into primary feature direction.

## 10. Source/Freshness/Certainty Wording Review

### What exists now

- UI labels: `Readout status`, `Source coverage`, `Readout age`, `Readout basis`, `Known fields`, `Source paths`, `Gaps`, `Warnings`.
- UI copy: `Reported by bridge`, `Verified from source`, `Verified from local workspace sources.`, `Partial view`, `Showing last successful read`, `Current local sources available.`
- Service fields: `certainty`, `source_labels`, `sources`, `missing_fields`, `warnings`, `last_read_at`.
- Smoke observations: `certainty`, `freshness`, `sources`, `source_coverage`, `readout_age`.

### What is safe

- "Last read", "Last successful read", and "readout age" are safe because they point to read timing.
- "Source coverage" is safe if understood as display source availability, not complete source authority.
- "Readout basis" is safe and should be preferred over "certainty" in user-facing copy.
- "Reported by bridge" is acceptable if the bridge is clearly local transport, not truth owner.
- "Partial view; available fields are source-labeled" is honest.
- "No presentation payload available" is honest.

### What overstates truth

- "Verified from source" and "Verified from local workspace sources." overstate what the renderer/service can know. The implementation reads local files and labels them; it does not independently verify truth.
- Generic "certainty" can imply epistemic confidence rather than display basis.
- Generic "trust" can import Atlas evidence expectations.
- "Current" can overstate truth if detached from read time and local source basis.

### What should be bridged, renamed, or demoted

- Bridge service field `certainty` can remain internal for now, but renderer should continue translating it to `Readout basis` or a similar phrase.
- Candidate rewrite: `Verified from source` -> `Read from local source`.
- Candidate rewrite: `Verified from local workspace sources.` -> `Read from local workspace sources.`
- Candidate rewrite: `Reported by bridge` -> `Reported through local bridge`.
- Candidate rewrite: `Current local sources available.` -> `Local sources available for display.`
- Keep `freshness` as smoke/internal observation; user-facing copy should stay concrete: `Last read`, `Last successful read`, `Readout age`.

## 11. Presentation-Family Boundary Review

### Briefing

Briefing is accepted as a Lab presentation family that renders project coordination fixture data. It is user-facing in the current Lab bench. Its fields, `Needs Attention`, and workspace-derived action posture should remain Lab-local and should not become shared Aura semantics.

Disposition: Preserve as current family. Do not export as target product doctrine.

### Neutral Seed

Neutral Seed is accepted as a second, generic fixture family. It helps prove family/state separation and text containment without target doctrine. The word `Seed` is risky near Aura Core, so docs and handoffs should keep the qualifier "Lab-local neutral fixture" nearby.

Disposition: Preserve with qualifier. Do not treat as Core seed doctrine.

### Presentation State Readout

Accepted current feature name. It is safer than tactical naming and correctly scopes the component to presentation state. It is still somewhat abstract, and future UI/UX can review `Bridge State Readout` or `Source State Readout`.

Disposition: Preserve now. Future naming review should compare clarity against contract risk.

### Source Detail

Useful disclosure surface for source paths, basis, known fields, gaps, warnings, fallback notes, and failure notes. It keeps diagnostics secondary while making state inspectable.

Disposition: Preserve. If "source" becomes too authority-laden, candidate alias is `Readout Detail`, with source paths inside.

### Bridge Diagnostics / Registered Services

These are useful support surfaces and smoke targets. They are not product direction. `Registered Services` is accurate but developer-flavored.

Disposition: Preserve as secondary. Candidate future UI polish: `Service Diagnostics` instead of `Registered Services` if the surface becomes less dev-facing.

## 12. Cross-Project Doctrine Risk Review

### Atlas evidence language risk

Risk terms: `trust`, `certainty`, `verified`, `evidence`, `source`, `source coverage`.

Assessment: Current accepted UI avoids visible `Trust`, but `trust-strip` remains a CSS class and docs mention trust/freshness language historically. The largest live risk is `Verified from source`.

Recommendation: Avoid generic proof language. Use read/basis/freshness wording unless Atlas explicitly maps evidence layers in an Atlas-owned packet.

### Sense tactical/combat language risk

Risk terms: `tactical`, `combat`, `operator`, `intel`, `scanning`, `lost`, `contact`, `live`.

Assessment: Live renderer no longer uses the rejected tactical/combat terms as default copy. Historical M11 DevHS40 contains them as evidence of rejected direction.

Recommendation: Keep tactical/combat wording out of default Lab UI and docs except when referencing rejected historical evidence.

### Aura Core ownership/contract risk

Risk terms: `Core`, `Seed`, `schema`, `component`, `source of truth`, `aura.projectBriefing` as contract, `aura.presentationFixture` as contract.

Assessment: Docs explicitly block Core ownership claims and durable schema claims. `Neutral Seed` and `seed.readiness` need careful qualification because inherited scaffold terms can sound Core-owned.

Recommendation: Continue saying inherited scaffold/local seed runtime when technical; avoid Core-owned reusable component claims.

### Durable bridge schema risk

Risk terms: `view_status`, `certainty`, `sources`, `source_labels`, `missing_fields`, `warnings`, `last_read_at`, `family`, `state`, `available_states`.

Assessment: These fields are stable enough for Lab verification, but docs say they are presentation affordances and Lab-local fixture mechanics until accepted elsewhere.

Recommendation: Preserve as internal bridge/fixture vocabulary. Do not place them in `docs/contracts/` or `docs/schemas/` without explicit acceptance.

## 13. Recommended Rewrites Or Bridge Aliases

Recommended small rewrites for future bounded UI/UX or Dev packet:

| current term/copy | safer alias | reason |
| --- | --- | --- |
| `Verified from source` | `Read from local source` | Avoids evidence/proof overstatement. |
| `Verified from local workspace sources.` | `Read from local workspace sources.` | More honest about file reads. |
| `Reported by bridge` | `Reported through local bridge` | Makes bridge a transport/reporting path, not truth owner. |
| `Current local sources available.` | `Local sources available for display.` | Keeps `CURRENT` display-scoped. |
| `certainty` user-facing concept | `readout basis` or `display basis` | Avoids epistemic confidence claim. |
| `Source Detail` if source feels over-authoritative | `Readout Detail` | Keeps detail tied to presentation component. |
| `Registered Services` if end-user polish matters | `Service Diagnostics` | Keeps it secondary and support-scoped. |
| `mode` | `state` | Avoids dual axis ambiguity; keep `mode` as compatibility alias. |

Naming bridge candidates for the feature:

- Preserve now: `Presentation State Readout`
- Possible future alias: `Readout Detail` for the drawer, not the main strip.
- Use caution: `Bridge State Readout`, because it can imply bridge contract state.
- Use caution: `Source State Readout`, because it can imply source authority.

## 14. Verification/Smoke Terms That Should Stay Stable

Stable support terms:

- `families_checked`
- `states_checked`
- `viewports_checked`
- `observations`
- `screenshots`
- `requested_family`
- `requested_state`
- `selected_family`
- `selected_state`
- `selected_mode`, for legacy compatibility
- `readout_label`
- `readout_summary`
- `readout_age`
- `source_coverage`
- `source_drawer_visible`
- `source_detail_state`
- `certainty`, as smoke capture of existing UI slot, not product doctrine
- `freshness`, as smoke capture of existing UI slot
- `sources`
- `visual_structure`
- `diagnostics_visible`
- `diagnostics_secondary`
- `briefing_before_diagnostics`
- `overflowing`
- screenshot naming pattern `family-{family}-state-{state}.png`

These terms should stay stable because they support regression review. They should remain verification vocabulary, not user vocabulary.

## 15. Risks/Blockers

- No blocker to keeping current M11 state parked.
- Existing `Verified from source` wording is the clearest terminology risk because it can overstate truth and drift toward Atlas evidence semantics.
- `Presentation State Readout` is accepted but still ripe for future naming review.
- `FALLBACK` is accepted as a guarded path but lacks accepted fixture/smoke exercise.
- `Neutral Seed` is safe only while described as Lab-local; the word `Seed` can drift toward Core doctrine.
- CSS class `trust-strip` is internal but historically loaded. It is not urgent to rename, but visible trust language should remain avoided.
- Service commands and payload fields are stable enough for Lab tests but should not be documented as durable schemas.
- Diagnostics and Registered Services must stay secondary or the project can drift back toward tooling rather than presentation quality.

## 16. Suggested Next Bounded Packet

If Aura Lab continues locally, the cleanest bounded packet is a UI/UX terminology polish review, not implementation:

```txt
UI/UX: review Aura Lab accepted M11 terminology against the terminology/state bridge audit.

Scope:
- Compare `Presentation State Readout`, `Bridge State Readout`, and `Source State Readout`.
- Decide whether `Verified from source` should become `Read from local source`.
- Decide whether `Source Detail` should remain or become `Readout Detail`.
- Decide whether `Registered Services` should stay visible as-is or be softened to `Service Diagnostics`.
- Do not rename service fields, schemas, CSS classes, commands, or fixture states.
- Preserve M11 accepted neutral labels and post-bridge presentation boundary.

Expected output:
- One advisory workspace artifact with recommended UI copy decisions and deferred implementation notes.
```

