# EngineeringHS18: Atlas Rigging Review

Date: 2026-05-24
Role: Engineering Specialist
Project: Aura Lab
Status: Advisory review-only artifact

## Scope

This is a read-only engineering review from Aura Lab against AURA Atlas as the first target for reusable Aura Lab presentation/app rigging.

No Atlas files were edited. No Atlas live/API, private-state, destructive, dev-server, install, verification, or git commands were run.

Atlas currently has its own active Dev packet: `F:\Projects\AURA-Atlas\workspace\current.md`, HS24, for validated-lead Queue / Enrich preflight refinement. This artifact does not treat that packet as Aura Lab work.

## Source Files Reviewed

Aura Lab:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/current.md`
- `workspace/00-dot-protocol.md`
- `workspace/prompts.md`
- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`
- `workspace/UIUXHS12-cross-project-packaging-opportunities.md`
- `workspace/UIUXHS16-open-source-presentation-models.md`

Shared coordination:

- `F:\Projects\Docs\Aura-Agent-Coordination\roles\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\engineering\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\engineering\prompt.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\terms.md`

Atlas read-only:

- `F:\Projects\AURA-Atlas\AGENTS.md`
- `F:\Projects\AURA-Atlas\README.md`
- `F:\Projects\AURA-Atlas\workspace\overview.md`
- `F:\Projects\AURA-Atlas\workspace\current.md`
- `F:\Projects\AURA-Atlas\package.json`
- `F:\Projects\AURA-Atlas\docs\roadmap\operator-investigation-desk.md`
- `F:\Projects\AURA-Atlas\docs\current-state\current-ipc-ui-preparation.md`
- `F:\Projects\AURA-Atlas\scripts\electron-visual-smoke.ps1`
- `F:\Projects\AURA-Atlas\src\renderer\index.html`
- `F:\Projects\AURA-Atlas\src\renderer\app.js`
- `F:\Projects\AURA-Atlas\src\renderer\shared.js`
- `F:\Projects\AURA-Atlas\src\renderer\investigation.js`
- `F:\Projects\AURA-Atlas\src\renderer\queueWatch.js`
- `F:\Projects\AURA-Atlas\src\renderer\styles.css`
- `F:\Projects\AURA-Atlas\src\main\main.js`
- `F:\Projects\AURA-Atlas\src\main\preload.js`
- `F:\Projects\AURA-Atlas\src\main\windowState.js`
- `F:\Projects\AURA-Atlas\src\main\services\serviceRegistry.js`
- `F:\Projects\AURA-Atlas\scripts\verify-renderer-shell.js`
- `F:\Projects\AURA-Atlas\scripts\verify-service-registry.js`
- `F:\Projects\AURA-Atlas\scripts\verify-electron-runtime.js`
- `F:\Projects\AURA-Atlas\scripts\verify-passive-side-effects.js`
- `F:\Projects\AURA-Atlas\scripts\verify-live-api-gate.js`

Read-only discovery checks:

```powershell
rg --files F:\Projects\AURA-Atlas\scripts
rg -n "preload|service|smoke|window|drag|live gate|evidence|discovery|assessment|queue.selection|visual-smoke" F:\Projects\AURA-Atlas\src F:\Projects\AURA-Atlas\scripts F:\Projects\AURA-Atlas\docs
```

## Atlas Current Rigging Summary

Atlas already has a substantial Electron application shell. The renderer runs behind `contextIsolation: true` and `nodeIntegration: false`, with a preload bridge exposing `window.atlasServices` and `window.atlasWindow`. Renderer code calls service commands through `atlas:service:list` and `atlas:service:invoke`; it does not import backend modules directly.

The service registry is explicit and classification-aware. Commands are labeled `read-only`, `metadata-only`, `evidence-creating`, `exclusive`, or destructive/retention preflight-adjacent through dedicated services. This gives Atlas a stronger action grammar than Aura Lab currently needs.

The Operator Investigation Desk is already oriented around the accepted path:

```txt
Discovery -> Evidence -> Observation -> Assessment
```

The current renderer opens on Investigation, routes validated leads into Scopes, Actions, Queue / Watches, and Reports, and repeatedly states passive startup and evidence boundaries. HS24 has also added validated-lead Queue / Enrich context and clearer Enrich selected preflight wording.

Atlas visual smoke is real Electron smoke, not browser-only HTML inspection. It uses a disposable `.tmp` DB, captures screenshots, verifies service/window bridges, checks no renderer Node/Electron globals, asserts passive startup, and has a rugged operator path that exercises synthetic fixture data, refusal paths, queue context, reports, assessment save/review, and narrow-window capture.

## Lab Rigging Candidates Considered

- Bridge-aware state grammar from M00/M01: normal, empty, stale, failed, partial.
- Trust/freshness/source/certainty language before diagnostics.
- Deterministic bridge test modes for UI review without live behavior.
- Visual smoke result shape with mode coverage and project-local `.tmp` artifacts.
- Electron shell controls, drag/no-drag regions, always-on-top/minimize/close behavior.
- Launch/runtime hygiene, especially local runtime resolution and project-local smoke artifacts.
- First-screen briefing hierarchy: identity, posture, trust band, needs-attention slice, coordination facts, secondary diagnostics.
- Open-source presentation intake from UIUXHS16 as future aesthetic context, not a stack migration or redesign mandate.

## Fit Matrix

| Candidate | Fit Label | Engineering Read |
| --- | --- | --- |
| Bridge-aware UI state grammar | Atlas-adaptable | Useful if translated into Atlas states such as no stored evidence, possible refs available, live gate blocked, metadata-only, evidence-creating, stale readiness, failed service, and partial report. Do not copy Lab's generic `partial`/`failed` wording without Atlas layer names. |
| Trust/freshness/source/certainty language | Atlas-adaptable | Strong fit for reports and preflights, but Atlas should express source as zKill discovery, expanded ESI evidence, local SDE metadata, cached labels, support diagnostics, or operator assessment. |
| Deterministic test modes | Core-suitable-after-neutralization | Lab's test modes are valuable as a neutral harness idea. Atlas already uses synthetic fixture DBs and smoke paths; future reusable packaging should be test-mode infrastructure, not fake Atlas states. |
| Visual smoke JSON/screenshot convention | Lab-proven | Lab proved mode-based smoke; Atlas already has stronger app-level smoke. A neutral pack could standardize result metadata, screenshot names, checked states, and `.tmp` locality across Aura apps. |
| Electron preload/service bridge discipline | Atlas-already-has | Atlas already has a more mature bridge and service registry than Lab. Lab should learn from Atlas here rather than propose replacing it. |
| Service classification grammar | Atlas-already-has | Atlas's classifications are a prime candidate for future Lab/Core learning, but not a Lab-origin pattern. |
| Frameless shell controls and drag/no-drag zones | Atlas-already-has | Atlas and Lab both prove the general pattern. A neutral Core pack could later define acceptance checks for drag regions, no-drag controls, and persisted shell state. |
| Launch/runtime hygiene | Atlas-already-has | Atlas has project-local `.tmp`, smoke DB, cache, SDE cache, settings path, and Electron runtime verification. Lab's local runtime lesson reinforces this but does not add much to Atlas. |
| First-screen briefing hierarchy | Atlas-adaptable | Atlas already opens to Investigation. Lab's trust-first hierarchy can help make the first screen less service-console-like, but Atlas's first screen must remain operator investigation, not project coordination briefing. |
| Needs Attention slice | Do-not-port | Lab's Needs Attention derives from project-packet coordination. Atlas should not inherit this as a product widget unless Atlas defines an operator-specific equivalent through its own roadmap. |
| Generic "source/certainty" labels | Do-not-port | Too vague for Atlas unless mapped to exact evidence layer. Atlas needs source/proof terms to preserve evidence doctrine. |
| UIUXHS16 presentation-kit aesthetic direction | Core-suitable-after-neutralization | Useful later as visual vocabulary. Not a mandate to redesign Atlas, migrate stack, add sci-fi ornament, or weaken dense workbench ergonomics. |

## Bridge-Aware State Grammar For Atlas

The portable idea is not Lab's exact state list; it is the rule that bridge-fed UI must make state, source, freshness, and action effect visible before diagnostics.

Atlas-compatible grammar should be layered:

- `read-only`: readiness, reports, queue previews, watch schedules, task lists, corpus health.
- `metadata-only`: watch authoring, label hydration, assessment memory, debug trace packs, runtime path preparation.
- `evidence-creating`: manual discovery, manual expansion, actor/system watch execution, watch executor arm/tick.
- `possible-leads`: zKill discovery refs and queue previews.
- `stored-evidence`: expanded ESI killmails and normalized activity events.
- `observation`: report-rendered patterns from stored evidence.
- `assessment`: deliberate operator memory, with citation status where applicable.
- `gated`: live API disabled, confirmation missing, or action blocked by scope/preflight.
- `partial`: bounded sample, capped queue, cached/expanded/skipped refs, incomplete metadata labels, warnings.
- `failed`: service/preflight/action failure with no hidden mutation implied.
- `stale`: readiness/freshness/report windows where Atlas can name actual timestamp basis.

This grammar should live as copy/IA guidance or verification assertions first. A durable bridge/data contract remains deferred by Aura Lab and should not be forced into Atlas from this review.

## Risks And Doctrine Boundaries

- Discovery/evidence drift: Lab's generic "data available" or "attention" language could accidentally make queued zKill refs sound like evidence. Atlas must keep queued refs as possible leads until ESI expansion succeeds.
- Observation/assessment drift: Lab's first-screen summary patterns could imply conclusions. Atlas observations should describe stored-evidence patterns without claiming intent, ownership, staging, affiliation, or threat status unless the evidence and accepted terms support it.
- Passive side effects: Lab bridge test modes are harmless in Lab, but Atlas must not introduce passive startup discovery, ESI expansion, metadata hydration, assessment creation, watch execution, SDE download, or evidence mutation.
- Live gate erosion: Any packaged "retry", "refresh", "hydrate", or "enrich" control must respect Atlas's explicit gate and confirmation behavior. Convenience UI must not bypass `AURA_ATLAS_LIVE_API` or service preflights.
- Source/proof language: Lab's broad source/freshness/certainty labels need Atlas-specific mapping. `SDE metadata`, `cached label`, `zKill discovery`, `ESI evidence`, `support/debug`, and `operator assessment` are not interchangeable.
- Renderer authority creep: Lab patterns should not encourage renderer-side report inference. Atlas renderer should continue presenting structured backend report responses.
- Fixture/test-mode confusion: Atlas synthetic demo DB and smoke fixtures must remain test/demo evidence, not live evidence or product state.
- Stack migration pressure: UIUXHS16 is useful design context only. Atlas should not absorb a React/Tailwind/Shadcn migration or ornamental sci-fi system from this review.

## Candidate Package Shape

The most useful Aura Lab next package would be a neutral `Aura Bridge State And Smoke Rigging Candidate`, not an Atlas-specific implementation patch.

Suggested contents:

- State grammar guide: loading, empty, populated, stale, failed, partial, gated, blocked, metadata-only, evidence-creating, read-only.
- Source/freshness/certainty placement rules with project-specific term mapping hooks.
- Boundary-copy examples with placeholders such as `{source_layer}`, `{action_effect}`, `{writes}`, `{gate_state}`, and `{freshness_basis}`.
- Deterministic UI-mode guidance for offline review, explicitly separate from product data semantics.
- Visual smoke result convention: `status`, `checked_at`, `output_dir`, screenshots/views/modes checked, bridge checks, passive-startup checks, and failure diagnostics.
- Electron shell checklist: preload bridge, context isolation, no Node renderer globals, drag/no-drag zones, window-control IPC, project-local settings path, project-local smoke artifacts.
- Adoption warning section for evidence-bound apps like Atlas.

This should be packaged from Aura Lab as advisory material. Atlas adoption should happen only through an Atlas-owned UI/UX or Engineering packet.

## Recommended Next Aura Lab Packet

Recommend: package a neutral rigging candidate in Aura Lab, but do not request Atlas implementation until Atlas's active HS24 packet is reviewed/accepted by Atlas Overseer.

Reasoning:

- Atlas already has the active implementation lane for Queue / Enrich preflight. A cross-project adoption request now would create scheduling and authority noise.
- The highest-value Lab output is a neutral state/smoke/shell candidate that can be reviewed by Atlas, Sense, or Core without dragging Lab's project-briefing semantics into them.
- Atlas should receive a separate Atlas-owned prompt later, after HS24 closure, if the Human/Overseer wants an adapter review.

Suggested next Lab artifact:

```txt
workspace/EngineeringHS19-neutral-bridge-state-smoke-pack.md
```

or, if UI/UX leads the next step:

```txt
workspace/UIUXHS19-neutral-presentation-rigging-pack.md
```

## Should Atlas Receive A Separate Prompt Later?

Yes, but later and Atlas-owned.

Recommended future prompt shape:

```txt
You are the Atlas Engineering/UIUX Specialist.
Start in F:\Projects\AURA-Atlas.
Read Atlas AGENTS.md, workspace/current.md after HS24 closure, Operator Investigation Desk roadmap, current IPC/UI preparation doc, and the Aura Lab neutral rigging candidate.
Review only whether the neutral state/smoke/shell pack can improve Atlas without violating discovery/evidence/observation/assessment boundaries.
Do not implement unless Atlas current.md explicitly asks for implementation.
```

## Remaining Uncertainty

- Atlas HS24 appears implemented in the currently read `workspace/current.md`, but this Lab review did not inspect an Atlas Overseer acceptance artifact for HS24. Treat HS24 closure as pending Atlas-owned review unless Atlas confirms otherwise.
- Atlas's future visual direction remains a Human/Atlas UI decision. This review can recommend state/smoke/shell rigging, not whether Atlas should become more visually "ship systems" or stay closer to a restrained workbench.
- The neutral package name and exact artifact type should be chosen by Aura Lab Overseer. Engineering can shape the pack, but acceptance into Lab/Core/Atlas remains outside this advisory artifact.
- A durable bridge/data contract is still intentionally deferred. The review identifies grammar candidates, not a stable schema.
- Licensing/dependency questions from UIUXHS16 are not central yet because no external UI library adoption is recommended here.

## Non-Goals And Deferrals

- No Atlas implementation.
- No Aura Lab implementation beyond this advisory artifact.
- No Atlas file edits.
- No live API checks.
- No private-state actions.
- No destructive actions.
- No git actions.
- No visual redesign.
- No stack migration.
- No durable bridge/data contract.
- No Aura Core transfer.
- No recommendation to copy Lab UI directly into Atlas.
- No product decision about Atlas terms such as Record, Intelligence, Finding, region support, relationship graph, battle timeline, or fight clustering.

## Verification

No code verification was required or run for this advisory packet.

Read-only checks run:

```powershell
rg --files F:\Projects\AURA-Atlas\scripts
rg -n "preload|service|smoke|window|drag|live gate|evidence|discovery|assessment|queue.selection|visual-smoke" F:\Projects\AURA-Atlas\src F:\Projects\AURA-Atlas\scripts F:\Projects\AURA-Atlas\docs
```

Result: source inventory gathered successfully for review. No Atlas runtime behavior was executed.
