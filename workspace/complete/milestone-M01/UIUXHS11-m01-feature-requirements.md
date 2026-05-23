# UIUXHS11: M01 Feature Requirements

Date: 2026-05-23
Role: UI/UX
Project: Aura Lab
Milestone: M01 - Feature Requirements
Sequence: HS11
Status: Advisory, pending Human/Overseer acceptance

## Scope

This artifact recommends UI/UX feature requirements for Aura Lab's next milestone after accepted M00 closure.

It is advisory only. It does not implement code, write a Dev runway, create durable docs, define a binding bridge contract, or make archived M00 handshakes active again.

## Source Files Read

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/current.md`
- `workspace/00-dot-protocol.md`
- `docs/README.md`
- `docs/current-state/m00-boot-current-state.md`
- `workspace/complete/milestone-M00/UIUXHS01-presentation-layer-intent.md`
- `workspace/complete/milestone-M00/OverseerHS10-m00-closure.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\README.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\roles\ui-ux\prompt.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\workspace-structure-authority.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\terms.md`
- Supplemental implementation context: `src/renderer/index.html`, `src/renderer/app.js`, `src/renderer/styles.css`, local `rg` search for bridge/state terms under `src` and `scripts`

## Recommended M01 Feature Goal

M01 should turn the accepted M00 briefing prototype into a clearer "project state briefing" that helps the user decide what attention the project needs next.

Recommended goal:

Make the first screen a compact, bridge-aware project briefing that separates project meaning, action posture, bridge health, and development diagnostics while preserving explicit loading, empty, populated, stale, failed, and partial states.

This is primarily a feature-shaping and usability milestone, not a bridge-contract milestone. The bridge can remain provisional as long as the UI tells the truth about source, freshness, and certainty.

## Target User / Job-To-Be-Done

Target user:

The Human, Overseer, or specialist who opens Aura Lab to quickly understand an Aura project's current coordination state without manually reading workspace files first.

Job-to-be-done:

When I open Aura Lab, I want to immediately know what project state the app can prove, what needs review or decision, whether the view is fresh and source-backed, and whether any bridge/data issue limits trust in what I am seeing.

Secondary user:

Dev or Overseer using local bridge test modes to verify that UI state grammar is honest and legible before broader product work continues.

## First-Screen Information Architecture

Recommended first viewport order:

1. Project identity and action posture
   Show the project name, active milestone/current state, and a short action posture line such as "Waiting for M01 direction" or "Current packet ready for Dev."

2. Primary briefing facts
   Show the highest-value coordination facts: active milestone, current executor, current focus, expected output, latest accepted handshake, and current packet path.

3. Trust band
   Keep bridge state, freshness, certainty, and source labels visible near the top. These are not diagnostics; they are part of whether the briefing can be trusted.

4. Decision / attention area
   Add a small area for "Needs attention" or "Open questions" when provided by bridge data. For M01 this can be read-only and source-labeled.

5. Secondary diagnostics
   Move runtime readiness, command count, registered services, and development-only bridge test mode controls below the primary briefing or into a visually quieter diagnostics area.

The first screen should remain usable at narrow widths. The current grid is useful, but M01 should prioritize reading order over equal card weight: action posture and trust should be faster to parse than service inventory.

## Feature Requirements

Must:

- Present a clear action posture above or beside the main project title.
- Keep source, freshness, certainty, and bridge state visible without requiring scrolling on normal desktop view.
- Preserve explicit UI handling for loading, empty, populated, stale, failed, and partial states.
- Distinguish project state from bridge/runtime diagnostics.
- Keep the development-only test mode control available but visually secondary.
- Revise long-title behavior so large headings do not dominate, wrap awkwardly, or crowd trust/status controls.
- Use plain trust language that does not overclaim approval, completeness, liveness, or durable source-of-truth status.
- Show missing/unavailable fields as intentional UI states, not as empty visual holes.

Should:

- Add a read-only "Needs attention" area when bridge data can provide open questions, deferrals, blocked status, or next decision prompts.
- Group coordination facts into fewer, more meaningful clusters instead of presenting every field with equal visual weight.
- Make "Last read" and stale/partial/failed status visually scannable at a glance.
- Provide a concise source details affordance or secondary list for users who need to inspect what files contributed to the briefing.
- Use more compact typography for title and summary copy so the briefing feels operational rather than hero-like.
- Treat "M00 closed / M01 not started" as a first-class populated state, not an empty state.

Could:

- Add a subtle "Review posture" label such as "Advisory pending acceptance", "Human direction needed", or "Dev runway ready" if the bridge can provide it.
- Add a user-visible retry control for failed bridge reads if Overseer accepts that as M01 scope.
- Add a compact mode for narrow windows where diagnostics collapse below the briefing.
- Add visual grouping for accepted state, deferred items, and open questions if bridge data can supply them without a contract expansion.

## Required States And Trust/Certainty Language

Required states:

- Loading: "Reading project state..." with stable layout and no false success message.
- Empty: "No presentation data available" only when the bridge succeeds but finds no presentable project facts.
- Populated: "Verified from local workspace sources" or equivalent source-backed language.
- Stale: "Showing last successful read; source may have changed" with visible last-read time.
- Failed: "Project briefing unavailable" with the failed source or bridge operation when safe.
- Partial: "Partial view; available facts are source-labeled" with missing fields named.

Recommended action posture language:

- "Human direction needed" for idle or decision-needed packets.
- "Pending acceptance" for specialist artifacts or handoffs not yet accepted.
- "Accepted current state" for durable accepted state, such as M00 closure.
- "Dev runway ready" only when `workspace/current.md` actually contains an executable Dev packet.
- "Unavailable" for data that could not be read.
- "Not provided" for optional fields absent from a successful bridge response.

Avoid:

- "Live" unless refresh cadence and live behavior are real.
- "Synced" unless synchronization is actually implemented.
- "Approved" unless Human or Overseer acceptance is recorded.
- "Complete" unless all required sources and fields were read successfully.
- "Source of truth" for provisional bridge output.

## Current M00 UI: Keep, Revise, Remove

Keep:

- The bridge-aware briefing as the primary surface.
- The six-state grammar: loading, empty, populated, stale, failed, partial.
- Source, freshness, certainty, and bridge state visibility.
- The local `aura.projectBriefing` service as a provisional read-only bridge.
- Bridge test modes for review and smoke coverage.
- Quiet Electron frame controls.

Revise:

- The long title sizing and wording. Large `h1` treatment should be more compact and resilient.
- The equal-weight grid. M01 should elevate action posture, milestone/current state, and next decision above lower-priority fields.
- The placement of diagnostics and service inventory. These should not compete with project meaning.
- The test-mode bar. Keep it, but label it clearly as development/review support and give it less first-screen weight.
- The freshness display. Make stale/partial/failed more immediately legible than a small timestamp alone.

Remove or demote:

- Any service registry details from the primary reading path unless they directly affect trust in the briefing.
- Any copy that implies the bridge response is a durable contract.
- Any visual treatment that makes the app look like a generic service monitor rather than a project-state briefing.

## Bridge / Data Implications

These are UI implications, not a binding contract:

- The UI benefits from an action posture field or derivable value, but M01 should not require a stable schema unless Overseer accepts contract work.
- The UI benefits from open questions, deferrals, and accepted-state summaries, but those can be provisional fields or fixture-backed review data for M01.
- Freshness should remain visible. If a real freshness rule is not accepted, the UI should label freshness as "Last read" rather than pretending to know whether source state is current.
- Missing field names should remain available for partial state display.
- Source labels should stay human-readable. Full source details can be secondary.
- Bridge test modes should continue to exercise all state grammar, but should not become product semantics.

Do not define a durable bridge/data contract inside M01 UI/UX acceptance unless Human/Overseer explicitly chooses that as the milestone direction.

## Non-Goals For M01

- No code implementation from this advisory artifact.
- No Dev runway.
- No durable docs or bridge contract creation.
- No broad multi-project dashboard.
- No editing workflow, task queue, automation control, or agent command surface.
- No Aura Core seed-readiness transfer inside Aura Lab product scope.
- No live file watching or sync claims unless accepted separately.
- No visual redesign that hides source, freshness, certainty, or failure state in favor of polish.

## Acceptance Checks For Overseer

- The proposed M01 direction is clearly a feature goal, not a hidden implementation runway.
- Requirements preserve M00 accepted capabilities while naming specific UX revisions.
- First-screen IA separates project meaning, trust band, action posture, and diagnostics.
- Must/should/could requirements are bounded enough for Overseer to convert into a later Dev packet.
- Required states and trust language preserve loading, empty, populated, stale, failed, and partial behavior.
- Bridge/data implications remain provisional and do not define a binding contract.
- Non-goals exclude durable docs, implementation, broad dashboarding, and Aura Core transfer.

## Questions For Human / Overseer

- Should M01 prioritize the "project state briefing" feature goal, or should it instead choose durable bridge/data contract work first?
- What action posture labels should the Human recognize immediately: "Human direction needed", "Dev runway ready", "Pending acceptance", "Accepted", or a different set?
- Should open questions and deferrals appear on the first screen in M01, or wait until a later milestone?
- Should the development-only bridge test mode remain visible in the app, or move behind a diagnostics/details affordance?
- Should M01 include a user-visible retry control for failed bridge reads?
- How much path detail should the first screen show: short source labels only, full local paths, or expandable full paths?

## Recommended Overseer Integration

Overseer should treat this artifact as advisory input for selecting and shaping M01.

Recommended integration:

- Accept "project state briefing" as the likely M01 product goal unless the Human chooses contract-first work.
- Convert only the accepted `Must` items into a bounded Dev runway.
- Keep `Should` and `Could` items available for scope shaping or deferral.
- Preserve the bridge as provisional unless M01 is explicitly redirected into contract work.
- Keep this artifact in `workspace/` as the active specialist advisory record until accepted, archived, or superseded.

## Risks And Uncertainty

- M01 could drift into contract design if bridge/data implications are treated as requirements rather than UI needs.
- Visual polish could consume the milestone without improving decision usefulness.
- Keeping diagnostics too prominent may make Aura Lab feel like a service monitor instead of a project briefing.
- Hiding diagnostics too much may make bridge failures harder to trust and inspect.
- The Human may prefer a different M01 direction from the recommended project-state briefing goal.
