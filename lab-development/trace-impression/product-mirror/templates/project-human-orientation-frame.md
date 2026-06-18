# [Project] Human Orientation Frame

Status: draft
Audience: Human
Map type: Project Human Orientation Frame
Mode: human-orientation-sync (`|`)
Updated: TODO
Source project: TODO
Based on local map: TODO
Generated from: TODO
Replaces: TODO
Previous frame used: TODO

## Current Project Impression

TODO: One short Human-readable paragraph describing the current project shape and what this map helps the Human steer from.

`|` maps are orientation frames. The current frame supports steering; older frames support comparison and recovery.

This map should answer, at Human steering resolution:

- what major parts exist
- how those parts connect
- what currently appears cohesive
- where drift, tangles, or gaps are visible
- what area is currently under focused inspection

## Project Structure

Use this section as the broad project body view. Keep it readable and do not turn it into a file inventory.

| Area | What Exists | How It Relates | Current Shape | Gap / Unknown | Basis | Resolution |
| --- | --- | --- | --- | --- | --- | --- |
| Product / purpose | TODO | TODO | TODO | TODO | TODO | TODO |
| Main systems / tools | TODO | TODO | TODO | TODO | TODO | TODO |
| Presentation / output surfaces | TODO | TODO | TODO | TODO | TODO | TODO |
| Data / packet movement | TODO | TODO | TODO | TODO | TODO | TODO |
| Source boundaries | TODO | TODO | TODO | TODO | TODO | TODO |
| Verification / assurance | TODO | TODO | TODO | TODO | TODO | TODO |
| Deferred / parked terrain | TODO | TODO | TODO | TODO | TODO | TODO |

## Source Code Inspection Body

Use this section to name the files, folders, scripts, and local code paths directly inspected for the current focus. Keep supporting docs, shelves, concepts, and adjacent products out of this section unless they contain source code for the inspected body.

| Body Part | Direct Source Path | Role In Current Focus | What Was Inspected | What Was Not Inspected | Basis | Resolution |
| --- | --- | --- | --- | --- | --- | --- |
| entry points | TODO | TODO | TODO | TODO | TODO | TODO |
| renderer / transform | TODO | TODO | TODO | TODO | TODO | TODO |
| styles / presentation behavior | TODO | TODO | TODO | TODO | TODO | TODO |
| data/example input | TODO | TODO | TODO | TODO | TODO | TODO |
| verifier / support script | TODO | TODO | TODO | TODO | TODO | TODO |
| package / local trial files | TODO | TODO | TODO | TODO | TODO | TODO |

## Supporting Context

Use this section for docs, shelves, accepted statements, packages, or concepts that explain the inspected body but are not themselves the source-code body.

| Context Item | Path | Why It Is Included | What It Must Not Be Mistaken For | Basis | Resolution |
| --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO |

## Cohesion / Drift Markers

Use this section to make visual or structural drift detectable. This is a state display, not a judgment.

| Marker | Where Seen | Current Read | Why It Matters | Basis | Resolution |
| --- | --- | --- | --- | --- | --- |
| cohesive | TODO | TODO | TODO | TODO | TODO |
| drift? | TODO | TODO | TODO | TODO | TODO |
| tangled? | TODO | TODO | TODO | TODO | TODO |
| boundary pressure | TODO | TODO | TODO | TODO | TODO |

## Pipeline / Limb Views

Use this section for individual limbs: inputs, code/helper movement, flattened data shape, boundary crossing, packet movement, and endpoint.

| Limb / Pipeline | Input | Code / Helper Path | Flattened Shape | Boundary Crossed | Packet / Handoff Movement | Endpoint | Gap | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## Boundary Movement

Use this section to show how source, packet, schema, helper, display, verification, and handoff boundaries are crossed.

| Boundary | Enters From | Changes Into | Leaves As | Owner / Layer | Source Basis | Gap / Unknown | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## Per-Seam Boundary Mapping

Use this section for the current or important individual seams. The first row should normally be the active focus from `workspace/current.md` and the latest local `\` map.

| Seam | Current Question | Owner / Layer | Supported Claim | Gap / Unknown | Must Not Claim | Open Edge | Resolution |
| --- | --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | TODO | TODO | TODO |

## Current Focus

Use this section to show the area currently being inspected.

| Field | Current Read |
| --- | --- |
| Focus source | TODO: `workspace/current.md`, latest `\` map, or explicit Human / Overseer request |
| Focus seam | TODO |
| What local map proved | TODO |
| What local map did not prove | TODO |
| Boundary under pressure | TODO |
| Current interpretation need | TODO |

## Full View With Visible Gaps

Use this as a compact local orientation slice. It should keep important unknowns visible without becoming an advisory next-action list.

| Area | What Is Visible | Gap / Unknown | Basis | Resolution |
| --- | --- | --- | --- | --- |
| Entry point | TODO | TODO | TODO | TODO |
| Transformation | TODO | TODO | TODO | TODO |
| Storage / state | TODO | TODO | TODO | TODO |
| Rendering / display | TODO | TODO | TODO | TODO |
| Logging / diagnostics | TODO | TODO | TODO | TODO |
| Verification | TODO | TODO | TODO | TODO |

## Open Edges

This map stops before proving:

- TODO

## Authority Label

This map is a Human-facing orientation display. It helps the Human see project shape, gaps, seams, and boundary pressure. It is not project authority, source meaning, architecture approval, Dev authorization, target adoption, or a replacement for project-local review.

The map's authority comes from accuracy of display, not decision power.

## Freshness

| Field | Value |
| --- | --- |
| Generated at | TODO |
| Source branch / revision | TODO |
| Local operational map used | TODO |
| Additional project-local sources used | TODO |
| Non-local orientation scaffolds used | TODO |
| Previous frame replaced | TODO |

## Resolution Labels

Use these labels in tables and notes so broad orientation does not strengthen certainty.

| Label | Meaning |
| --- | --- |
| `cited-seam-fact` | High-resolution local seam fact with source citation. |
| `project-doc-orientation` | Lower-resolution local project documentation context. |
| `domain-orientation` | Broad project/domain shape summarized for Human steering. |
| `structure-observed` | Project structure observed from files, docs, maps, or source layout. |
| `pipeline-inferred` | Pipeline or limb shape inferred from cited source movement, not fully proven end to end. |
| `non-local-reference` | External or orchestration scaffold used for orientation only. |
| `human-context` | Human vision or preference; useful context, not proof. |
| `inferred` | Reasoned connection that is not directly proven. |
| `not-mapped` | Known area not mapped in this pass. |
| `not-inspected` | Possible area outside this pass. |
| `not-proven` | Claim cannot be made from available source basis. |

## Basis Mix

| Basis | Used? | Resolution Label | Notes |
| --- | --- | --- | --- |
| Local operational map | TODO | `cited-seam-fact` | TODO |
| Source code citations | TODO | `cited-seam-fact` | TODO |
| Project docs | TODO | `project-doc-orientation` | TODO |
| Current packet | TODO | `project-doc-orientation` | TODO |
| Human context | TODO | `human-context` | Does not prove runtime behavior or accepted meaning. |
| Non-local scaffolds | TODO | `non-local-reference` | Must stay visibly non-local. |
| Inference | TODO | `inferred` | Must stay confidence-limited. |
| Not mapped / not inspected | TODO | `not-mapped` / `not-inspected` | Must stay visible. |

## Confidence Ceiling

Highest allowed certainty for this map: TODO

This map may broaden resolution for Human steering, but it must not promote conversation, non-local material, or inferred structure into project truth.

## Boundary Pressure

| Pressure | Signal | Source Basis | Current Read | Open Edge |
| --- | --- | --- | --- | --- |
| meaning pressure | TODO | TODO | TODO | TODO |
| authority pressure | TODO | TODO | TODO | TODO |
| implementation pressure | TODO | TODO | TODO | TODO |
| verification pressure | TODO | TODO | TODO | TODO |
| adoption pressure | TODO | TODO | TODO | TODO |

## Growth Marks

First run should use baseline / unknown. Do not assign maturity from a single impression.

| Area | Mark | Basis | Notes |
| --- | --- | --- | --- |
| TODO | baseline / new / changed / unclear / tangled / stable / parked / missing / watch / drift? | TODO | TODO |

## Fog Cleared

- TODO

## Fog Exposed

- TODO

## Frame Comparison

Use this section as the flip-book view. Compare against the previous Human orientation frame when one exists. Older frames inform comparison and recovery; they do not compete with the current frame.

Do not report interpretation changes as project movement. Separate source/body movement, support-context movement, interpretation movement, and map-framing movement.

| Field | Value |
| --- | --- |
| Current frame | TODO |
| Previous frame compared | TODO |
| Comparison basis | TODO |
| Comparison limit | TODO |

## Comparison Classification

Use this section to keep the flip book honest.

| Change Class | Definition | Example | Report As |
| --- | --- | --- | --- |
| `source-body-change` | Direct inspected code/files changed. | Entry file, renderer, CSS, JSON, verifier, package file changed. | Project movement |
| `support-context-change` | Docs, shelves, accepted statements, or package notes changed. | Handoff standard or selection shelf changed. | Project context movement |
| `interpretation-change` | The current frame explains the same facts differently. | A boundary is understood more clearly without source changes. | Interpretation movement |
| `map-framing-change` | The template or frame structure changed. | Adding `Source Code Inspection Body` separate from `Supporting Context`. | Map/tooling movement |
| `unknown-change` | The frame cannot tell whether the project or interpretation changed. | Previous frame lacks basis labels. | Flag as unclear |

## Movement Ledger

Track major movement since the previous frame. Keep this compact and useful for steering.

| Area | Previous State | Current State | Movement | Change Class | Basis | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | new / changed / clarified / parked / removed / split / merged / recurring gap / drift watch | `source-body-change` / `support-context-change` / `interpretation-change` / `map-framing-change` / `unknown-change` | TODO | TODO |

## Recurring Gaps

Use this for gaps that persist across frames or repeatedly affect steering.

| Gap | Seen In | Still Open? | Why It Matters | Current Basis |
| --- | --- | --- | --- | --- |
| TODO | TODO | yes / no / unclear | TODO | TODO |

## Cohesion Delta

Show what became more coherent, less coherent, or simply unchanged since the previous frame.

| Area | Direction | Why | Basis | Notes |
| --- | --- | --- | --- | --- |
| TODO | more coherent / less coherent / unchanged / unclear | TODO | TODO | TODO |

## Change Since Last Map

| Area | Previous Read | Current Read | Change Type | Change Class | Basis | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | new / changed / removed / clarified / still open | `source-body-change` / `support-context-change` / `interpretation-change` / `map-framing-change` / `unknown-change` | TODO | TODO |

## Interpretation Delta

Use this section when the map's understanding changes but the inspected project facts may not have changed.

| Area | Previous Interpretation | Current Interpretation | What Changed | Basis | Must Not Report As |
| --- | --- | --- | --- | --- | --- |
| TODO | TODO | TODO | TODO | TODO | project source movement unless source/body basis changed |

## Unresolved Questions

- TODO

## Source Basis Notes

- TODO
