# Future Candidate Bank

Status: Staged candidate notes
Last reviewed: 2026-05-25

## Purpose

This file stores named future candidates for Aura Lab without making them active work.

Use it as a staged word pad for ideas that may later become roadmap milestones, runways, specialist prompts, or parked records. It is not a backlog, not executable authority, and not permission to implement.

`workspace/current.md` remains the only active executable packet.

## Reading Guidance

These candidates are grouped by lane:

- **T-lane:** Lab workshop and coordination tooling.
- **H-lane:** product-facing presentation head work.
- **I-lane:** integration readiness and target-owned adapter work.

The H-lane is the current strategic rail for the next Lab phase. The T-lane supports productivity and review. The I-lane stays gated until the clean presentation head is ready enough to offer.

## T-Lane: Workshop And Coordination Tooling

| Candidate | Name | Limited Description | Initial Disposition |
| --- | --- | --- | --- |
| T01 | Pane Board Layout Capture | Build a separate Lab-only Electron tool where ID panes can be dragged, resized, snapped to grid, saved as JSON, and captured as OCR-friendly screenshots. Used for layout blocking before real content work. | Park until layout friction is high enough. |
| T02 | OCR-Friendly Review Screenshots | Standardize board screenshots with clean background, visible pane IDs, coordinates, viewport, layout ID, timestamp, and high-contrast labels so humans and agents can review layouts from images. | Park as support tooling. |
| T03 | Scenario Pack Runner | Add reusable pressure scenarios such as source-heavy, long copy, missing critical field, stale with newer diagnostic, narrow pressure, and failed-primary/partial-secondary. Used to test layouts without product doctrine. | Candidate support if M29 needs richer capability pressure. |
| T04 | Screenshot Review Workbench | Show saved layout/screenshots side by side for human and agent review. Helps compare normal, long-text, narrow, failed, and partial states without opening raw files. | Park until review cost is visible. |
| T05 | Candidate Sheet Generator | Generate a review sheet for each layout/material: what it proves, states covered, portable structure, Lab-local content, do-not-port semantics, screenshots, overflow notes, and known risks. | Candidate once material output volume grows. |
| T06 | Gate-Aware Board / Continue Gates | Create a structured planning board where cards move through gates like Candidate, Needs Human Decision, Ready For Overseer, Prompt Ready, In Current.md, Review, Closed, Parked. Board is coordination only, not execution authority. | Park; avoid creating a second work authority. |
| T07 | Prompt Card Generator | Let board cards generate role-ready prompts with start folder, required reads, task, guardrails, output, and authority status. Reduces chat ambiguity. | Park until prompt churn becomes a real bottleneck. |

## H-Lane: Presentation Head Candidates

| Candidate | Name | Limited Description | Initial Disposition |
| --- | --- | --- | --- |
| H01 | Clean Renderer Baseline | Preserve the product-facing presentation renderer as a clean slim-envelope consumer. No SmokeFlash, workshop DOM, layout capture, or board tooling inside the exportable head. | Important before export or major head growth. |
| H02 | Loading State Parity | Add loading as a first-class presentation state alongside populated, empty, stale, failed, partial, and long-text. Verify through smoke. | Strong near candidate after M29/M30. |
| H03 | View Intent Axis | Add `viewIntent` as a third axis after family and state. Start with `summary-first` as default and prepare for alternate readings. | Strong near candidate before multiple views. |
| H04 | Confidence View | Implement the first new view intent: confidence-first. Prioritize known, partial, stale, missing, unavailable, and unverified information. | Candidate after H03. |
| H05 | Source-First View | Add a view that prioritizes source stack, freshness, readout basis, and then derived facts. Useful for inspectability without target doctrine. | Candidate after H03. |
| H06 | Attention Triage View | Add a view organized around review-needed, blocked, missing input, stale source, and partial result. Keep labels Lab-neutral. | Candidate after H03. |
| H07 | Comparison / Delta View | Render previous/current fixture reads and show what changed, disappeared, became stale, became available, or changed basis. | Candidate after stable fixture history shape. |
| H08 | Presentation Readiness Split | Before export/seeding, split SmokeFlash/material harness/workshop tooling out of the offered renderer bundle. The clean head becomes safe for Atlas/Sense adapter trials. | Candidate export gate; aligns with ADR 0001. |
| H09 | Presentation Slot Registry | Add a small renderer-local registry for Lab presentation slots, so slot purpose, state, render entry, and verification hints are addressable without source-project meaning. | Accepted next bounded candidate after HS104. |
| H10 | Lazy-Loaded Visual Slot | Add one deferred visual slot pattern that can load heavier visual treatment only when requested or visible, without changing bridge meaning. | Candidate after H09 proves the registry shape. |
| H11 | Virtualized List Helper | Add a renderer helper for long readout/list surfaces so dense bridge-fed rows stay fast, contained, and readable. | Candidate after H09/H10 or when list pressure is concrete. |

## I-Lane: Integration Readiness Candidates

| Candidate | Name | Limited Description | Initial Disposition |
| --- | --- | --- | --- |
| I01 | Slim Envelope Readiness | Define the minimum display-safe envelope the presentation head consumes: family, state, viewIntent, source, freshness, readout basis, summary, sections, actions, diagnostics. | Park until H01-H03 are clearer. |
| I02 | Adapter Ownership ADRs | Record that Atlas owns its adapter, Sense owns its adapter, Lab owns fixture adapter and renderer. Adapters translate for display but do not create meaning. | Mostly covered by ADR 0002; revisit only if needed. |
| I03 | Atlas Adapter Readiness | Atlas maps one accepted project-owned snapshot into the slim envelope without leaking doctrine into Lab renderer code. | Target-owned future work. |
| I04 | Sense Adapter Readiness | Sense maps one accepted tactical snapshot into the slim envelope without exporting Sense tactical meaning as shared doctrine. | Target-owned future work. |
| I05 | First Recoupling Trial | Attach clean presentation head to one body project through a project-owned adapter and verify renderer, smoke, and authority boundaries. | Park until clean head and adapter ownership are ready. |

## Suggested Sequencing

Near path:

1. Use M29 to improve the presentation head through H02, H03, and bounded visible presentation capability.
2. Keep material proving as support for the presentation head, not the main road.
3. Build H09 before H10/H11 so later slot behavior has a clear local address.
4. Consider H01 before the head grows too much or before export/readiness work.
5. Explore H04-H07 as actual presentation modes.
6. Use H08/M32 as the export-readiness gate.
7. Open I-lane work only after the clean head and adapter boundaries are strong enough.
8. Open T-lane tooling only when workflow friction slows product work.

## Vocabulary Notes

Use Lab-owned slim language by default:

- review screenshots, not evidence screenshots
- readout basis, not certainty, for Lab-owned display language
- gate-aware board, not authority-aware board, unless the card is explicitly about permission or ownership
- overflow notes or review notes, not evidence, unless a source project owns that term

Preserve source-project terms only when they are clearly source-owned and contextualized.

## Guardrails

- Do not treat this file as a task queue.
- Do not create Dev runways from this file alone.
- Do not make T-lane tooling the Lab product direction.
- Do not open I-lane adapter work from Lab without source-project ownership.
- Do not use this file to create shared doctrine.
- Do not bypass `workspace/current.md`.
