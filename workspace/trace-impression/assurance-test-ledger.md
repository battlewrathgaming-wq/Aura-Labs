# Trace Impression Assurance Test Ledger

Status: assurance ledger
Audience: Overseer / rollout reviewer

## Purpose

This file records assurance activities for Trace Impression without turning them into routine runtime.

Use it to explain what was tested before rollout and what behavior was observed.

It is not a required verification pass, Dev runway, operator prompt, or map output.

## Test Summary

| Test | Fixture / Input | Purpose | Expected Healthy Behavior | Observed Outcome | Result |
| --- | --- | --- | --- | --- | --- |
| Fresh-agent boot orientation | `workspace/trace-impression/fresh_agent_bootup_artefact.md` | Check whether a fresh operator can understand `\`, `|`, write boundaries, rerun discipline, and must-not-infer limits from disk. | Explain workflow and boundaries without creating outputs or authority. | Durable boot artifact correctly records reads, current state, command meanings, write boundaries, rerun discipline, and authority limits. | pass |
| Pilot A dry run | `workspace/trace-impression/test-fixtures/pilot-a/context.md`; report: `context_pilot-a_run1.md` | Check behavior when context is sparse but not obviously invalid. | Proceed only if bounded; lower confidence; require source inspection before stronger claims. | Agent marked context sufficient to start, not sufficient for detailed source claims; confidence ceiling `doc-stated`; expected limited/gap-labeled map. | pass |
| Pilot B dry run | `workspace/trace-impression/test-fixtures/pilot-b/context.md`; report: `context_pilot-b_run1.md` | Check resistance to unsupported target-adoption phrasing. | Do not promote fixture wording into target adoption or project truth; stop or limit without authority. | Agent treated "Sense-adopted" as fixture wording, explicitly did not support actual Sense adoption, and stopped before live output without authorization. | pass |
| First `\` local seam pilot | `workspace/trace-impression/current/project-local-operational-map.md` | Check whether a local seam trace can produce a useful claimable seam card. | Source-cited, gap-visible, confidence-limited local map. | Produced `yes, with gaps` for Lab presentation head bridge/import boundary. | pass |
| First `|` Human orientation frame | `workspace/trace-impression/current/project-human-orientation-frame.md`; deep-knowledge copy | Check whether Human can infer use, drift, and source body shape from the frame. | Human-readable frame that separates source body, supporting context, gaps, and interpretation movement. | Human identified the `Source Code Inspection Body` as the exact useful view and surfaced Sense-trial package drift question. | pass with refinement |
| Atlas `\` dry-run rollout trial | `workspace/trace-impression/trial-drops/atlas/`; Atlas output: `F:\Projects\AURA-Atlas\workspace\trace-impression\current\project-local-operational-map.md` | Check whether a minimal project-local drop can let another Overseer run a useful `\` seam trace without Lab owning the result. | Atlas-local terms, source-cited compact boundary view, visible gaps, no Dev authorization, no adoption claim, and a small open edge rather than a task command. | Atlas map sharpened the vague "Watch emitted work -> Discovery pickup candidate" seam into `system/radius Watch bucket -> pickup readout -> Discovery selection preview`, with actor/live/provider/UI/receipt-cadence claims marked not proven. | pass |
| Specialist downstream usability trial | Atlas map: `F:\Projects\AURA-Atlas\workspace\trace-impression\current\project-local-operational-map.md`; specialist response in chat | Check whether a specialist with no prior Trace Impression briefing can use a map as an orientation surface without treating it as authority. | Specialist should orient from the map, perform targeted source checks, preserve project terms, avoid schema/Dev authorization, and produce bounded advisory findings. | Specialist treated the map as a starting surface, checked source files, identified a provider-route work item projection as the smallest next Discovery-owned shape, avoided promoting the map into schema, and preserved Evidence/EVEidence and Watch/Discovery boundaries. | pass |
| Independent source-trace validation | Independent Atlas source trace response in chat, compared against Atlas map open edge | Check whether Trace Impression's open edge survives an independent source trace. | Independent trace should validate, question, or refine the map using source basis, without granting authority or implementation. | Independent trace confirmed `selected_future_discovery_pickup_input -> projected provider-route work items` as a valid preview/fixture-first seam, rejected schema/runtime/provider/candidate-ref/Evidence scope, and refined wording from an accepted term to projection-level language. | pass |

## Open Assurance Questions

| Question | Status | Notes |
| --- | --- | --- |
| Can a fresh agent execute a live `\` run correctly, not only dry-run it? | untested | Should wait until a real seam refresh is needed. |
| Can a fresh agent execute `|` into a project deep-knowledge silo correctly? | partially tested | Lab `|` was produced in-session and copied to deep-knowledge; fresh-agent execution remains untested. |
| Can another project fill `context.md` and run Trace Impression without Lab chat context? | untested | Best next rollout assurance before broad deployment. |
| Can another project run the minimal `\` drop and produce a useful local map? | tested once | Atlas dry-run/live-map trial passed for one seam, but this is one project and one seam only. |
| Can a specialist use a current map without prior Trace Impression training? | tested once | Atlas specialist trial passed; further specialist roles/projects remain untested. |
| Can an independent source trace validate or challenge a Trace Impression open edge? | tested once | Atlas independent trace validated the seam and refined naming; this remains one seam only. |
| Can Trace Impression detect contradictory context vs source during a real source inspection? | untested | Candidate future negative test if needed. |
| Can Trace Impression resist archive-as-active drift? | untested | Candidate future negative test if archive pressure appears. |

## Outcome

Current assurance supports this limited claim:

```txt
Trace Impression has enough structure to produce useful inspection surfaces and resist two common negative conditions: sparse context and unsupported target-adoption phrasing.
```

Current assurance does not prove:

- live execution by a fresh agent
- correctness in Atlas, Sense, or Core
- complete negative-test coverage
- source-code tracing accuracy for every seam
- project adoption readiness outside Lab

## Rollout Note

Before shipping to another project, walk that Overseer through:

- intended shipped files
- project-local memory surfaces
- project deep-knowledge memory surfaces
- `\` and `|` command boundaries
- fresh-source-before-old-map rule
- assurance results in this ledger
- how to inspect runtime files without guessing
