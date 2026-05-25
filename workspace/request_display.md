# request_display

Status: Advisory request schema
Date: 2026-05-25
Owner: Aura Lab Overseer

## Purpose

`request_display` is the lightweight intake shape for projects that want Aura Lab presentation help.

It lets Atlas, Sense, Core, or another Aura project describe a current presentation use case without giving Lab ownership of source-project meaning.

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

## Request Workflow

1. The requesting project identifies a current presentation surface or planned presentation use case.
2. The requesting project fills one `request_display` entry using the schema below.
3. The requesting project keeps source-owned terms qualified and names any terms Lab must preserve.
4. Lab uses the request as advisory input for M23 use-case capture.
5. Lab maps the request to M20 slots, M21 display types, and M22 material sets.
6. Lab proposes three distinct display methods where useful.
7. The requesting project reviews adoption under its own authority before implementation.

Do not treat a `request_display` entry as implementation approval.

## Schema

Use this shape in Markdown, YAML-like text, JSON, or a table. Keep the meaning the same.

```yaml
request_display:
  id: project-short-name.surface-or-use-case
  project: Atlas | Sense | Core | Lab | other
  status: proposed | active-review | accepted-input | parked
  requester_role: Human | Overseer | UIUX | Engineering | Dev | other
  source_owner: project or lane that owns the meaning
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
| Surface / use case |  |
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
