# Aura Lab Workspace Overview

Status: Active
Last reviewed: 2026-05-25

## Vision Statement

Aura Lab is a light Aura workspace for shaping portable post-bridge display mapping and presentation tooling.

It should use the inherited Aura Core scaffold lightly while proving whether bridge-shaped data can be rendered into the desired desktop style across real/fixture data, empty/loading states, stale or failed bridge states, partial readout basis, long text, narrow layouts, and clear source/freshness/basis language.

Aura Lab does not primarily own what each Aura product presents. It owns the Lab proving bench for everything past the bridge: display mapping, state grammar, typography, containment, shell verification, and visual smoke evidence.

Authority clarification: individual projects own internal-to-Bridge mappings. Bridge-to-Interface terminology should be preserved unless there is conflict or Human override; in those cases, Aura Lab owns shared user-facing terminology for the presentation layer.

## Coordination Model

- `workspace/current.md` is the only active executable work packet.
- `workspace/overseer.md` guides Overseer milestone/runway shaping and acceptance criteria.
- Handshake files in `workspace/` are active-milestone transaction notes.
- Completed milestone handshakes move in batch to `workspace/complete/milestone-XX/`.
- `docs/` starts lean and grows durable records only when real product or architecture truth exists.
- Deprecated per-task gap folders are not part of the active Aura Lab workflow.
- Git is not assumed for this project unless the human explicitly asks.

## Milestone Plan

| Milestone | Roadmap Source | Status | Notes |
| --- | --- | --- | --- |
| M00 | None yet | Complete | Booted Aura Lab, accepted briefing prototype, bridge test modes, visual smoke, and local Electron runtime readiness. |
| M01 | None yet | Complete | Accepted project-state briefing IA, trust band, Needs Attention slice, six bridge states, and visual smoke coverage. |
| M02 | Human direction after M01 closure | Complete | Accepted Atlas rigging review and neutral bridge-state, visual-smoke, and shell-rigging advisory candidate. |
| M03 | Human direction, UIUXHS16, UIUXHS21 | Complete | Accepted Aura Presentation Kit visual concept pack with typography/text containment first. |
| M04 | Accepted M03 visual concept pack | Complete | Accepted one-screen Aura Lab visual prototype with typography, containment, and restrained sci-fi surface treatment. |
| M05 | M04 closure residual risks | Complete | Accepted project-local Electron smoke wrapper and dedicated long-text visual smoke mode. |
| M06 | UIUXHS27 accepted advisory | Complete | Accepted Engineering feasibility review for fixture-backed presentation families. |
| M07 | M06 Engineering feasibility | Complete | Accepted UI/UX spec for Briefing plus Neutral Seed fixture-backed presentation family proof. |
| M08 | M07 UI/UX spec | Complete | Accepted Dev prototype for Briefing plus Neutral Seed family/state proof. |
| M09 | Human direction after M08 closure | Complete | Accepted packaging classification for Lab-local, Core-neutral candidate, target-adaptable, and do-not-port outputs. |
| M10 | Post-M09 UI/UX advisory | Complete | Accepted implemented Briefing plus Neutral Seed screenshot review. |
| M11 | Human terminology correction, Overseer HS41 | Complete | Accepted neutral Presentation State Readout with physical/HUD-like theme and no default tactical/combat wording. |
| M12 | UIUXHS43 naming feedback | Complete | Renamed accepted readout feature to Bridge State Readout without behavior, state, or doctrine changes. |
| M13 | Human terminology authority correction | Complete | Accepted Lab presentation vocabulary inventory, replacement, and local vocabulary guardrail. |
| M14 | M13 residual terminology/smoke risks | Complete | Accepted readout-basis correction and visual-smoke honesty checks. |
| M15 | Post-M14 UI/UX review | Complete | Accepted naming polish recommendation for Readout Detail and Neutral Sample. |
| M16 | M15 naming recommendation | Complete | Accepted visible readout naming polish while preserving internals. |
| M17 | Human protected-term guardrail proposal | Complete | Accepted shared protected-word lookup scaffold and Lab warning-only discovery check. |
| M18 | Presentation concept runway | Complete | Accepted Instrument Status Band as the smallest safe next prototype and kept references advisory. |
| M19 | M18 accepted Instrument Status Band concept | Complete | Accepted visible Instrument Status Band prototype on the existing Bridge State Readout, with compact state slots, readout basis, age, gaps/warnings marker, detail reveal, and verified renderer/Electron smoke. |
| M20 | Human direction after M19 and display asset owner contract | Complete | Accepted terminology-to-slot taxonomy and initial Lab display slot vocabulary for future asset inventory and material-bench work. |
| M21 | Human direction after M20 | Complete | Accepted display type library research mapped to M20 slot vocabulary, with material-bench candidates and parked higher-risk types. |
| M22 | M21 accepted display type library | Complete | Accepted display material bench with Material Set Formation, Material class lane, staged-ingest shape, and pressure cases for near-term display types. |
| M23 | Human direction after M22 | Complete | Accepted display use-case capture with Atlas 3 active requests and Sense 1 active request, mapped to request_display intake, slots, display types, material sets, and candidate methods. |
| M24 | M23 accepted request capture | Complete | Accepted advisory comparison for the four active Atlas/Sense display requests and prepared Human/source-project relay. |
| M25 | Human correction after M24 | Complete | Accepted requirements for individual reusable Lab display materials and recommended prototype candidates. |
| M26 | Human direction after M25 | Complete | Accepted individual reusable display material schemas and divided them into material library pages with the ledger as index. |
| M27 | Human direction after M26 and HS88 | Complete | Accepted SmokeFlash boundary hardening with normal launch isolated from visible workshop controls and split-before-export noted as residual risk. |
| M28 | Human direction after M27 controls | Complete | Accepted first Lab-local visible material prototype for Authority Window TTL Strip using ADR-controlled SmokeFlash workshop path. |
| M29 | Presentation Head Improvement Rail | Active | HS114 lazy-loaded visual slot accepted; HS116 active for row facets. |

## Current Direction

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS114 - Lazy-Loaded Visual Slot
Roadmap source: Human direction after M20 and `workspace/display-asset-documentation-owner-contract.md`
Current packet: `workspace/current.md`
Current sequence: HS116
Latest accepted handshake: workspace/OverseerHS115-hs114-lazy-loaded-visual-slot-acceptance.md
Latest scope proposal: workspace/complete/milestone-M17/OverseerHS60-protected-term-guardrail-scope.md
Active runway: workspace/current.md
Housekeeping: active root cleaned on 2026-05-25; M19-M28 handoffs moved to `workspace/complete/`, M29 remains active in root, Atlas/Sense relay advisories remain in `workspace/archive/cross-project-relay/`.
Remote consumer conformance: workspace/LabRemoteConsumerConformanceHS66.md

## Durable Record Index

### Docs

- `docs/index.md`
- `docs/README.md`
- `docs/roadmap/README.md`
- `docs/roadmap/future-candidate-bank.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/m30-display-material-repeat-cycle.md`
- `docs/roadmap/m31-composed-display-output.md`
- `docs/roadmap/m32-export-boundary-review.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m00-boot-current-state.md`
- `docs/current-state/m01-project-state-briefing-current-state.md`
- `docs/current-state/m04-visual-prototype-current-state.md`
- `docs/current-state/m05-visual-smoke-hardening-current-state.md`
- `docs/current-state/m06-fixture-backed-presentation-family-feasibility-current-state.md`
- `docs/current-state/m07-fixture-backed-presentation-family-spec-current-state.md`
- `docs/current-state/m08-fixture-backed-presentation-family-prototype-current-state.md`
- `docs/current-state/m09-packaging-review-current-state.md`
- `docs/current-state/m10-implemented-family-screenshot-review-current-state.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`

### References

- `workspace/reference/README.md`

### Shared Coordination Authority

- `F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\agent-coordination-contract.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\project-root-agent-startup-and-permissions.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\agent-chat-retirement-process.md`

### Verification

- `package.json`
- `scripts/verify-all.js`

### Critical Vocabulary References

- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/critical/lab-vocabulary-instruction-packets.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`

### Transaction Records

Active milestone handshakes:

- `workspace/LabRemoteConsumerConformanceHS66.md`
- `workspace/request_display.md`
- `workspace/OverseerHS93-m29-loading-state-parity-runway.md`
- `workspace/DevHS93-loading-state-parity.md`
- `workspace/OverseerHS94-h02-loading-state-acceptance.md`
- `workspace/OverseerHS95-m29-view-intent-axis-runway.md`
- `workspace/DevHS95-view-intent-axis.md`
- `workspace/OverseerHS96-h03-view-intent-acceptance.md`
- `workspace/OverseerHS97-m29-basis-first-expressive-view-runway.md`
- `workspace/DevHS97-basis-first-expressive-view.md`
- `workspace/OverseerHS98-hs97-basis-view-acceptance.md`
- `workspace/UIUXHS99-hs97-view-polish-advisory.md`
- `workspace/OverseerHS99-m29-basis-rail-polish-runway.md`
- `workspace/DevHS99-basis-rail-polish.md`
- `workspace/OverseerHS100-hs99-basis-rail-polish-acceptance.md`
- `workspace/OverseerHS101-m29-next-slice-security-sequence.md`
- `workspace/OverseerHS102-m29-details-view-inspection-runway.md`
- `workspace/DevHS102-details-view-inspection.md`
- `workspace/OverseerHS103-hs102-details-view-acceptance.md`
- `workspace/OverseerHS104-immediate-scope-lane-reset.md`
- `workspace/OverseerHS105-follow-on-feature-candidates.md`
- `workspace/DevHS105-presentation-slot-registry.md`
- `workspace/OverseerHS106-hs105-presentation-slot-registry-acceptance.md`
- `workspace/DevHS107-view-intent-slot-policy.md`
- `workspace/OverseerHS108-hs107-view-intent-slot-policy-acceptance.md`
- `workspace/DevHS109-detail-hydration.md`
- `workspace/OverseerHS110-hs109-detail-hydration-acceptance.md`
- `workspace/DevHS111-focus-reveal-controller.md`
- `workspace/OverseerHS112-hs111-focus-reveal-correction.md`
- `workspace/DevHS112-focus-reveal-controller-correction.md`
- `workspace/OverseerHS113-hs112-focus-reveal-acceptance.md`
- `workspace/DevHS114-lazy-loaded-visual-slot.md`
- `workspace/OverseerHS115-hs114-lazy-loaded-visual-slot-acceptance.md`

Accepted authority records:

- `workspace/OverseerHS46-bridge-interface-authority-decision.md`

Completed milestone handshakes:

- `workspace/complete/`
- `workspace/complete/milestone-M00/`
- `workspace/complete/milestone-M01/`
- `workspace/complete/milestone-M02/`
- `workspace/complete/milestone-M03/`
- `workspace/complete/milestone-M04/`
- `workspace/complete/milestone-M05/`
- `workspace/complete/milestone-M06/`
- `workspace/complete/milestone-M07/`
- `workspace/complete/milestone-M08/`
- `workspace/complete/milestone-M09/`
- `workspace/complete/milestone-M10/`
- `workspace/complete/milestone-M11/`
- `workspace/complete/milestone-M12/`
- `workspace/complete/milestone-M13/`
- `workspace/complete/milestone-M14/`
- `workspace/complete/milestone-M15/`
- `workspace/complete/milestone-M16/`
- `workspace/complete/milestone-M17/`
- `workspace/complete/milestone-M18/`
- `workspace/complete/milestone-M19/`
- `workspace/complete/milestone-M20/`
- `workspace/complete/milestone-M21/`
- `workspace/complete/milestone-M22/`
- `workspace/complete/milestone-M23/`
- `workspace/complete/milestone-M24/`
- `workspace/complete/milestone-M25/`
- `workspace/complete/milestone-M26/`
- `workspace/complete/milestone-M27/`
- `workspace/complete/milestone-M28/`

### Historical Archives

- `workspace/archive/` stores inactive workspace records only when useful. It is not an active work queue.
- `workspace/archive/cross-project-relay/` stores Atlas/Sense relay advisories created from Lab context.

## Open Questions

- Should the next Lab milestone review Bridge State Readout use-case clarity across states?
- Should Aura Lab park until a target project asks to adapt a presentation pattern?
- Should the next Lab packet explore a new visible presentation feature prototype?
- Should Atlas and Sense receive project-local protected-term checker adoption prompts?
- Should Lab refine protected-term discovery output after a few review cycles?
- Should Sense now perform its local adoption review using accepted M19 as advisory input?
- Where should the future use-case comparison landing zone live after material bench shape is clearer?
- Should SmokeFlash become the first tooling packet after material and inventory are accepted?
