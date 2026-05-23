# UIUXHS14: M01 Closure Check

Date: 2026-05-23
Role: UI/UX
Project: Aura Lab
Milestone: M01 - Project State Briefing
Sequence: HS14
Status: Advisory, pending Human/Overseer acceptance

## Source Files Read

- `workspace/overview.md`
- `workspace/current.md`
- `workspace/UIUXHS11-m01-feature-requirements.md`
- `workspace/DevHS12-project-state-briefing.md`
- `workspace/OverseerHS13-project-state-briefing-acceptance.md`
- `docs/current-state/m00-boot-current-state.md`

## 1. Close M01 Now / One More Slice Recommendation

Recommendation: one more small M01 slice before closure.

The accepted project-state briefing pass is solid and satisfies the M01 Must requirements. However, M01's stated user job is not only "show current state"; it is to help the user understand what attention the project needs next. The current action posture and trust band provide the right top-level frame, but they do not yet expose the specific open questions, deferrals, or attention items that make the briefing truly decision-useful.

This should be a narrow final slice, not a redesign.

## 2. Reasoning

The action posture + trust band is sufficient as the top-level status system.

It already tells the user:

- what the app thinks the project posture is
- whether the bridge read is populated, stale, failed, partial, or unavailable
- when data was last read
- what source labels support the displayed state

That is enough for trust. It is not quite enough for next-step understanding.

A "Needs Attention / Open Questions / Deferrals" area is necessary for M01 if Aura Lab is meant to become a project-state briefing surface rather than a prettier status grid. Without it, the user sees that direction is needed but must still go read `workspace/current.md` to understand what kind of decision is needed.

Source details should mostly stay as-is for M01. The current visible source labels are useful and should not become a large source inspector yet. A minimal affordance is enough: either a small secondary "Details" area or compact source-details row that can show source labels, unavailable optional sources, and missing fields when the bridge provides them.

## 3. Exact Feature Requirements If One More Slice

Must:

- Add a compact read-only attention area below the trust band and above or adjacent to the coordination fact grid.
- Use one of these headings: `Needs Attention`, `Open Questions`, or `Deferrals`; prefer `Needs Attention` if multiple item types are summarized together.
- Show no more than three visible items by default.
- Support an empty/success copy state such as `No attention items reported` or `No open questions reported`.
- Preserve loading, empty, populated, stale, failed, and partial states.
- Preserve the current action posture and trust band placement.
- Keep diagnostics and registered services secondary.
- Keep all copy advisory/provisional; do not imply acceptance, approval, completion, or a durable contract.

Should:

- Source attention items from already available briefing/current-packet style data if practical, such as open questions, deferrals, or current decision-needed text.
- Show missing attention data as `Not provided`, not as a blank panel.
- Add a minimal source-details affordance only if it can stay compact, such as `Sources: workspace/current.md, package.json` with missing/unavailable source labels included when relevant.
- Keep the source affordance secondary to the trust band; do not create a full source inspector in M01.

Could:

- Group items by `Open questions` and `Deferrals` if the data already separates them cleanly.
- Show an item source label for each attention item if available without defining a new bridge contract.

## 4. Non-Goals

- Do not redesign the whole UI.
- Do not add editing, task queue, automation, retry, or command controls.
- Do not define a durable bridge/data contract.
- Do not create durable docs.
- Do not add a full source inspector.
- Do not make bridge test modes product semantics.
- Do not promote UIUXHS12 cross-project packaging into M01.
- Do not import Atlas, Sense, or AURA-7 doctrine.

## 5. Acceptance Checks

- The first screen shows action posture, trust band, and a compact attention/open-question/deferral summary without visual crowding.
- If no attention items are available, the UI shows intentional empty copy rather than a blank area.
- Partial and failed modes remain honest about unavailable or missing information.
- Source labels remain visible; any added source detail is compact and secondary.
- Diagnostics and registered services remain below the primary project-state reading path.
- Verification still covers loading, empty, populated, stale, failed, and partial modes.
- The implementation does not define or require a binding bridge contract.

## Closure Guidance

If this final slice is accepted and verified, M01 should close afterward.

If Human/Overseer prefers not to spend one more slice on attention items, M01 can close now without violating the accepted Must requirements. The tradeoff is that the briefing remains a trustworthy state surface, but not yet a fully helpful decision surface.
