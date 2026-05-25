# request_display

Status: Advisory request schema
Date: 2026-05-25
Owner: Aura Lab Overseer

## Purpose

`request_display` is the lightweight intake shape for projects that want Aura Lab presentation help.

It lets Atlas, Sense, Lab, or another Aura project describe a current presentation use case without giving Lab ownership of source-project meaning.

This is not:

- a bridge contract
- a runtime payload schema
- a target-project adapter
- a shared glossary
- product direction by itself
- permission for Lab to rename project-owned terms

## Authority

The requesting project owns:

- internal -> Bridge meaning
- source terms and lane semantics
- what data exists and what it means
- whether a Lab presentation idea is acceptable in that project

Aura Lab owns:

- Bridge -> Interface display vocabulary after source meaning is preserved
- display type suggestions
- material pressure mapping
- visual/presentation options
- portability notes

Human override can resolve conflicts.

## Active Request Limit

Each project should keep no more than five active `request_display` entries in Lab review at one time.

This is a cooperative throttle to keep requests from becoming automatic backlog churn.

Active statuses:

- `submitted`
- `active-review`
- `accepted-input`

Non-active statuses:

- `draft`
- `queued`
- `returned-to-project`
- `parked`
- `superseded`

Human / Overseer may explicitly allow more than five active requests for a project.

## Request Workflow

1. The requesting project identifies a current presentation surface or planned presentation use case.
2. The requesting project adds a clear project header.
3. The requesting project defines limited scope and product attachment.
4. The requesting project fills one `request_display` entry using the schema below.
5. The requesting project keeps source-owned terms qualified and names any terms Lab must preserve.
6. Lab uses the request as advisory input for M23 use-case capture.
7. Lab maps the request to M20 slots, M21 display types, and M22 material sets.
8. Lab proposes up to three distinct display methods where useful.
9. The requesting project reviews adoption under its own authority before implementation.

Do not treat a `request_display` entry as implementation approval.

## Schema

Use this shape in Markdown, YAML-like text, JSON, or a table. Keep the meaning the same.

Recommended header:

```md
# request_display: [Project] - [Surface / Use Case]

Status: submitted
Project: Atlas | Sense | other
Source owner: project, lane, or surface owner
Request owner: Human / Overseer / UIUX / Engineering / Dev
Date: YYYY-MM-DD
Lab intake state: not-yet-reviewed
```

```yaml
request_display:
  id: project-short-name.surface-or-use-case
  project: Atlas | Sense | Lab | other
  status: draft | queued | submitted | active-review | accepted-input | returned-to-project | parked | superseded
  requester_role: Human | Overseer | UIUX | Engineering | Dev | other
  source_owner: project or lane that owns the meaning
  product_attachment:
    product_area: product area, lane, page, or feature
    surface: specific surface or component
    user_task: what the human needs to understand or decide
    owning_milestone_or_packet: optional
    priority: low | medium | high
    decision_needed: choose display method | gather options | pressure-test existing display | park
  scope:
    boundary: one surface | one card | one row type | one state family | one flow slice
    included:
      - what Lab should consider
    excluded:
      - what Lab must not consider
    max_candidate_methods: 3
    source_project_acceptance_needed: true
  surface_or_use_case: current presentation surface or task
  current_presentation: how it is shown today
  user_goal: what the human needs to understand or decide
  data_origin: bridge snapshot | renderer state | report output | local state | source-owned placeholder | other
  source_terms_to_preserve:
    - term
  source_terms_to_avoid_or_qualify:
    - term
  known_fields:
    - field or displayable fact
  gaps_or_unknowns:
    - missing field, uncertain meaning, or owner question
  state_cases:
    - loading
    - empty
    - partial
    - stale
    - blocked
    - unavailable
    - failed
  freshness_or_age_needs: what timing must be shown, if any
  basis_or_source_needs: what the readout is based on
  warning_or_gap_needs: what cautions must be visible
  density_or_layout_constraints: narrow overlay, full page, table row, etc.
  interaction_needs: reveal, route, hover, select, compare, step-through, none
  candidate_display_methods_requested: 3 preferred options if already known
  lab_material_sets_relevant:
    - detail-long-basis
    - availability-distinction
  verification_or_review_needs: visual review, renderer smoke, terminology review, etc.
  non_goals:
    - what Lab must not imply or change
  notes: freeform context
```

## Minimal Table Form

| Field | Value |
| --- | --- |
| Request ID |  |
| Project |  |
| Status |  |
| Source owner |  |
| Request owner |  |
| Product area |  |
| Surface / use case |  |
| Scope boundary |  |
| In scope |  |
| Out of scope |  |
| Current presentation |  |
| User goal |  |
| Source terms to preserve |  |
| Source terms to avoid or qualify |  |
| Known fields |  |
| Gaps / unknowns |  |
| State cases |  |
| Freshness / age needs |  |
| Basis / source needs |  |
| Warning / gap needs |  |
| Layout constraints |  |
| Interaction needs |  |
| Candidate display methods requested |  |
| Relevant Lab material sets |  |
| Verification / review needs |  |
| Non-goals |  |

## Archive / Inventory

Completed requests should eventually be archived with their final filled request and Lab response.

Suggested future archive shape:

```txt
workspace/archive/display-requests/
  README.md
  schema.md
  atlas/
  sense/
  lab/
```

Archived requests should include:

- original `request_display`
- limited scope
- product attachment
- Lab comparison response
- selected or parked disposition
- source-project review result if known
- links to follow-up packets if any

Do not treat archived requests as active task queues.

## Lab M23 Use

M23 should use incoming `request_display` entries to create a use-case comparison table with:

- one current presentation or use case per row
- source owner and terms to preserve
- applicable M20 slots
- applicable M21 display types
- applicable M22 material sets
- three distinct candidate display methods
- risks and parked notes
- recommended next action

The comparison is advisory only until the owning project accepts a follow-up packet.
