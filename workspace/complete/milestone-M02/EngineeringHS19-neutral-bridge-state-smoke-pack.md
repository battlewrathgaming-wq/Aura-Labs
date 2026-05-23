# EngineeringHS19: Neutral Bridge State And Smoke Pack

Date: 2026-05-24
Role: Engineering Specialist
Project: Aura Lab
Status: Advisory candidate pack; not implementation authority

## Scope

This artifact packages a neutral Aura rigging candidate from Aura Lab M00/M01 and the accepted HS18 Atlas review.

It is guidance for bridge-fed UI state, source/freshness/certainty placement, deterministic UI review modes, visual smoke evidence, and Electron shell safety. It is not a durable bridge schema, product doctrine, framework choice, or implementation runway for any target project.

No code was implemented. No cross-project files were edited.

## Source Files Reviewed

Aura Lab coordination and state:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`
- `workspace/UIUXHS12-cross-project-packaging-opportunities.md`
- `workspace/UIUXHS16-open-source-presentation-models.md`
- `workspace/EngineeringHS18-atlas-rigging-review.md`
- `workspace/OverseerHS19-atlas-rigging-review-acceptance.md`

Aura Lab implementation context, read-only:

- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `src/main/preload.js`
- `src/services/serviceRegistry.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`

Read-only search:

```powershell
rg -n "view_status|attention_items|visual-smoke|contextIsolation|nodeIntegration|aura.projectBriefing|AURA_LAB_ELECTRON_VISUAL_SMOKE" src scripts docs workspace
```

## Pack Purpose And Audience

Purpose:

Provide a reusable acceptance vocabulary for Aura local apps that render data through a preload/service bridge and need honest degraded states, source language, deterministic review modes, smoke evidence, and safe desktop shell behavior.

Audience:

- Aura Lab, as the proving bench.
- Aura Core, after neutralization and a Core-owned adoption packet.
- Atlas, Sense, and future Aura apps, only through project-owned adapter reviews.
- Overseer and specialist agents writing future bounded packets.

This pack should help agents ask: what state is the UI in, where did the data come from, how fresh is it, what action would happen next, what writes or external calls are possible, and what evidence proves the surface was actually rendered?

## Adoption Labels

Use these labels when moving pack ideas between projects:

| Label | Meaning |
| --- | --- |
| `Lab-proven` | Implemented and accepted in Aura Lab with named verification or visual smoke evidence. |
| `Project-adaptable` | Potentially useful for a target app after product-specific vocabulary and doctrine mapping. |
| `Core-suitable-after-neutralization` | Generic enough to propose to Aura Core only after removing Lab/Atlas/Sense terms and proving the behavior is seed-like. |
| `Project-owned-review-required` | Must be reviewed from inside the target project before use. |
| `Do-not-port` | Too product-specific, doctrinally risky, or likely to create misleading state/action language. |

Evidence required:

- Advisory evidence for guidance-only adoption.
- Static verification for shell/bridge boundary checks.
- Visual smoke evidence for rendered UI state claims.
- Manual smoke only when interaction cannot be automated yet.
- Target-project verification before claiming project adoption.

## Neutral State Grammar

Bridge-fed UI should expose an explicit state before diagnostics. The state name is not the data contract; it is presentation grammar.

Recommended neutral states:

| State | Use When | Required Copy |
| --- | --- | --- |
| `loading` | The bridge request or local read is pending. | Say what is being read and avoid implying failure. |
| `empty` | The bridge succeeded but returned no presentable domain data. | Use intentional empty copy, not an error tone. |
| `populated` | Required data is present and current enough for the surface. | Show `{source_layer}` and `{freshness_basis}` near the primary content. |
| `stale` | Last successful data is shown, but freshness is outside the accepted window. | State last-read basis and that source may have changed. |
| `failed` | Required bridge/service/read path failed. | Show unavailable copy and the failed source, without fabricating fallback certainty. |
| `partial` | Some fields or sources are missing, capped, or unavailable. | Name missing pieces where safe, and distinguish partial data from wrong data. |
| `gated` | An action is blocked by an explicit gate or confirmation. | State `{gate_state}` and the missing condition. |
| `blocked` | A valid request cannot proceed due to scope, readiness, lock, or policy. | State the blocker and next local action if known. |
| `read-only` | The surface inspects or reports without mutating state. | Say no writes or external calls occur if users might otherwise infer action. |
| `metadata-only` | The action writes labels, settings, support artifacts, or operator notes but not primary domain evidence. | State `{writes}` and what is explicitly not changed. |
| `evidence-creating` | The action can create primary domain records/evidence. | State provider, selected scope, expected calls, expected writes, and confirmation requirement. |

Recommended missing-value copy:

- `Reading` for loading.
- `Not provided` for missing optional fields.
- `Unavailable` for failed required fields.
- `No items reported` or a project-specific empty phrase for real empty data.
- `Unknown until {action}` when the value cannot be known before an explicit action.

## Source, Freshness, And Certainty Placement

Every primary bridge-fed surface should show:

- `{source_layer}`: where the presented fact came from.
- `{freshness_basis}`: when it was read, generated, cached, or last verified.
- `{certainty}`: how confidently the UI can present it.
- `{evidence_boundary}`: what the surface is and is not claiming.

Placement rule:

Source/freshness/certainty should appear before or beside diagnostics, not buried below service internals. Diagnostics can explain why a surface degraded, but they should not be the first user-facing story unless the app is explicitly a diagnostics tool.

Neutral copy patterns:

```txt
Source: {source_layer}
Freshness: {freshness_basis}
Certainty: {certainty}
Boundary: {evidence_boundary}
```

Examples:

```txt
Source: local workspace files
Freshness: Last read {timestamp}
Certainty: Verified from source-labeled local files
Boundary: Advisory project state, not a durable data contract
```

```txt
Source: {source_layer}
Freshness: Showing last successful read from {timestamp}
Certainty: Stale; source may have changed
Boundary: Read-only display; no action has run
```

## Action-Effect And Gate Wording

Controls that start or preflight work should state action effect before execution.

Use these placeholders in project-specific copy:

- `{action_effect}`: what the action does in plain language.
- `{provider}`: local service, external API, file system, metadata store, etc.
- `{selected_scope}`: what user-selected target or scope will be affected.
- `{expected_calls}`: expected external or service calls when knowable.
- `{writes}`: expected writes or mutations.
- `{gate_state}`: enabled, disabled, blocked, confirmation missing, session gated.
- `{evidence_boundary}`: what this action does not prove or create.

Neutral preflight shape:

```txt
Provider: {provider}
Scope: {selected_scope}
Gate: {gate_state}
Expected calls: {expected_calls}
Expected writes: {writes}
Effect: {action_effect}
Boundary: {evidence_boundary}
```

Rules:

- Do not use a friendly verb like Refresh, Hydrate, Enrich, Watch, or Sync without effect copy.
- If the action writes primary domain records, say so before confirmation.
- If the action is read-only, say it does not mutate state.
- If the action is metadata-only, say what metadata can change and what primary data cannot.
- If expected calls are unknowable before discovery or selection, say `unknown until {action}` rather than guessing.
- If a live/private/external gate is closed, the UI should show the refusal as a safe state, not as a broken app.

## Deterministic UI And Test Modes

Deterministic modes are review helpers, not product semantics.

Recommended mode set:

- `normal`: source-backed populated state.
- `empty`: bridge success with no presentable data.
- `stale`: old successful read or stale fixture.
- `failed`: required source/service unavailable.
- `partial`: one or more expected fields missing.
- `gated`: action blocked by gate or confirmation.
- `long-text`: long labels and overflow-prone content.
- `narrow`: compact viewport or narrow window.

Rules:

- Modes must be explicit and development/review scoped.
- Modes should never call live APIs or mutate private state.
- Modes should return realistic shapes but must not pretend to be durable schemas.
- Target apps may replace generic modes with doctrine-specific states, but should preserve deterministic coverage.
- Smoke checks should assert state text, source/freshness/certainty visibility, and overflow/viewport resilience where practical.

## Visual Smoke Result Convention

Visual smoke should prove that the real local app window rendered expected states. Static checks are useful, but they do not replace actual screenshots when the claim is visual.

Recommended result artifact:

```json
{
  "status": "passed",
  "checked_at": "{iso_timestamp}",
  "output_dir": "{project_local_tmp_dir}",
  "app": "{app_name}",
  "views_checked": [],
  "modes_checked": [],
  "screenshots": [],
  "checks": {
    "bridge_exposed": true,
    "window_bridge_exposed": true,
    "node_globals_hidden": true,
    "primary_state_visible": true,
    "source_freshness_visible": true,
    "no_unexpected_writes": true,
    "no_overflowing_text": true
  },
  "diagnostics": {}
}
```

Minimum expectations:

- Artifacts stay under project-local `.tmp` or an explicit project-local smoke directory.
- Smoke mode uses an explicit environment flag, such as `{APP}_ELECTRON_VISUAL_SMOKE=1`.
- Smoke exits cleanly and writes a machine-readable result.
- Failure writes a result with message/diagnostics and captures a failure screenshot where possible.
- Screenshots cover core states or views, not only the happy path.
- Smoke should check no renderer Node/Electron globals when the app uses a preload boundary.
- Smoke should include narrow/overflow coverage before visual polish is accepted.

## Electron Shell Checklist

For Aura Electron apps using a custom shell:

- Main window uses `contextIsolation: true`.
- Main window uses `nodeIntegration: false`.
- Renderer talks through preload-exposed bridges only.
- Renderer does not import backend, database, worker, or Electron modules.
- Preload exposes narrow named APIs, not raw `ipcRenderer`.
- Service invoke envelopes are validated.
- Service list and command classification are inspectable where useful.
- Frameless windows define drag and no-drag regions.
- Interactive controls are in no-drag regions.
- Window controls use IPC handlers for minimize/close/pin or equivalent.
- Persisted shell state has a project-local test/smoke override path.
- Smoke mode uses isolated user data when needed.
- Runtime/cache/smoke artifacts stay under the project root unless the user explicitly chooses otherwise.
- Static verification checks the shell boundary.
- Visual smoke checks that controls are visible and the primary view renders.

## Evidence-Bound App Warnings

For evidence-bound apps like Atlas:

- Do not call discovery refs evidence unless the target doctrine says they are evidence.
- Do not turn observations into assessments.
- Do not let passive startup collect, enrich, hydrate, assess, watch, prune, or delete.
- Do not hide live gates behind convenience controls.
- Do not use generic `source` or `certainty` labels where exact source layers matter.
- Do not let renderer code re-derive report meaning from raw data if backend reports own the semantics.

For tactical/transient apps like Sense:

- Do not import persistent briefing/report memory unless the target product accepts it.
- Prefer stale/partial/failed lane language over historical evidence language.
- Separate passive telemetry, active action, threat/intel interpretation, and diagnostics.

For neutral seed/Core work:

- Remove project terms such as Needs Attention, Discovery/Evidence/Assessment, tactical lane names, or operator desk copy.
- Keep only shell, bridge, state, smoke, and acceptance vocabulary that future projects can adapt.
- Require a Core-owned packet before promotion.

## Project Adaptation Notes

Atlas:

Atlas should adapt this pack only through an Atlas-owned review. The useful pieces are source/freshness placement, action-effect/gate copy, and smoke result consistency. Atlas already has mature service classifications, preload bridge discipline, passive-side-effect checks, live gates, and visual smoke. Do not port Lab `Needs Attention` or generic certainty labels into Atlas.

Sense:

Sense should adapt degraded-state and visual smoke grammar for tactical surfaces. The pack should be reduced to lane freshness, partial telemetry, passive/active separation, and compact shell checks. Do not make Sense feel like persistent evidence memory unless Sense accepts that product direction.

Aura Core:

Core suitability should focus on a tiny seed: preload bridge boundary, service registry shape, deterministic UI modes, visual smoke result convention, and frame shell acceptance checks. Core should not inherit Lab's provisional `aura.projectBriefing` data model.

## Candidate Acceptance Checks

A future adopting packet should be accepted only if:

- The target project maps placeholders to its own terms.
- The target project identifies what is `Lab-proven`, `Project-adaptable`, `Core-suitable-after-neutralization`, `Project-owned-review-required`, or `Do-not-port`.
- The target project names verification evidence before claiming adoption.
- The pack does not create a hidden task queue.
- The pack does not require live/private/destructive behavior.
- The pack remains rejectable by the target project without breaking Aura Lab.

## Recommended Next Aura Lab Packet

Recommend an Overseer/UIUX packet to decide whether M02 should close on this neutral pack or continue with a visual concept companion.

Two safe options:

1. Close M02 after Overseer acceptance, then open a new milestone for a UI/UX visual concept pack.
2. Keep M02 open for one UI/UX companion artifact that translates this engineering pack into presentation-kit language without implementation.

Do not open Atlas, Sense, or Aura Core adoption until a project-owned prompt exists.

## Non-Goals And Deferrals

- No code implementation.
- No target-project implementation.
- No Atlas, Sense, Aura Core, EVE-Threat-Overlay, or Bughunt edits.
- No durable bridge/data schema.
- No UI framework choice.
- No React/Tailwind/Shadcn or other stack decision.
- No direct product-copy request.
- No visual redesign mandate.
- No live/private/destructive behavior.
- No git action.
- No Aura Core transfer.
- No claim that Atlas, Sense, or Core has accepted this pack.

## Remaining Uncertainty

- Whether M02 should close with this engineering pack or add a UI/UX companion is an Overseer/Human decision.
- The pack is intentionally not a schema; a later durable bridge/data contract may need a separate architecture packet.
- Launch hygiene and hidden-terminal behavior are adjacent but not fully covered here because HS19 focused on bridge state, smoke, and shell rigging.
- Licensing and dependency questions remain deferred because this pack recommends no external library adoption.

## Verification

No code verification was required or run.

Read-only check run:

```powershell
rg -n "view_status|attention_items|visual-smoke|contextIsolation|nodeIntegration|aura.projectBriefing|AURA_LAB_ELECTRON_VISUAL_SMOKE" src scripts docs workspace
```

Result: read-only implementation context gathered successfully. No app smoke, install, dev server, git, live, private, destructive, or cross-project verification was run.
