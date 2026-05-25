# Display Request Cooperation Contract

Status: Active advisory workflow contract
Date: 2026-05-25
Owner: Aura Lab Overseer

## Purpose

Define how Aura projects can ask Aura Lab for display-method comparison without transferring product meaning or implementation authority to Lab.

This contract supports `request_display` intake for M23 and later display work.

It is not:

- a bridge contract
- a runtime schema
- a target-project adapter
- a shared glossary
- a product roadmap
- implementation approval
- adoption approval

## Cooperation Model

The requesting project brings a scoped display problem.

Aura Lab responds with advisory Bridge -> Interface presentation options.

The requesting project decides whether to accept, reject, adapt, or ignore those options under its own authority.

## Authority Split

The requesting project owns:

- internal -> Bridge meaning
- source terms and lane semantics
- product doctrine
- available data and its meaning
- target implementation choices
- final adoption

Aura Lab owns:

- Bridge -> Interface display suggestions after source meaning is preserved
- Lab-owned display vocabulary
- slot/type/material mapping
- three-method comparison where useful
- portability notes
- presentation risks

Human override can resolve conflicts.

## Active Request Limit

Each project should keep no more than five active `request_display` entries in Lab review at one time.

This is a cooperative throttle, not a hard technical limit.

Statuses that count toward the active cap:

- `submitted`
- `active-review`
- `accepted-input`

Statuses that do not count:

- `draft`
- `queued`
- `returned-to-project`
- `parked`
- `superseded`

Human / Overseer may explicitly allow more than five active requests for a project, but Lab should not auto-expand beyond the cap.

## Required Project Header

Every request must clearly name the project at the top.

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

## Limited Scope

Every request should define a limited scope.

Scope should be small enough that Lab can compare display methods without designing a whole product face.

Recommended scope fields:

```yaml
scope:
  boundary: one surface | one card | one row type | one state family | one flow slice
  included:
    - what Lab should consider
  excluded:
    - what Lab must not consider
  max_candidate_methods: 3
  source_project_acceptance_needed: true
```

## Product Attachment

Requests may also act as internal product checklists for the requesting project.

Recommended product attachment fields:

```yaml
product_attachment:
  product_area: Atlas Overview | Passive Telemetry | other
  surface: specific surface or component
  user_task: what the human needs to understand or decide
  owning_milestone_or_packet: optional
  priority: low | medium | high
  decision_needed: choose display method | gather options | pressure-test existing display | park
```

This helps a project answer:

- what is the target surface?
- what is in scope?
- what is out of scope?
- what terms must survive?
- what states must be handled?
- what fields exist?
- what gaps are known?
- what counts as a good display?

## Request Workflow

1. Source project identifies a bounded presentation surface or use case.
2. Source project fills a `request_display` entry with project header, limited scope, and product attachment.
3. Source project keeps source-owned terms qualified and names terms Lab must preserve.
4. Source project submits the request to Lab or places it where Lab can review it.
5. Lab maps the request to M20 slots, M21 display types, and M22 material sets.
6. Lab proposes up to three display methods where useful.
7. Lab records risks, parked notes, and recommended next action.
8. Source project reviews the recommendation under its own authority before implementation.

## Lab Response Should Include

- request id
- source project / owner
- scope readback
- source terms to preserve
- relevant M20 slots
- relevant M21 display types
- relevant M22 material sets
- candidate display method A
- candidate display method B
- candidate display method C
- risks and non-goals
- recommended disposition

## Archive / Inventory

Completed requests should eventually be archived as a request inventory.

Recommended archive shape:

```txt
workspace/archive/display-requests/
  README.md
  schema.md
  atlas/
  sense/
  lab/
```

Each archived request should include:

- original `request_display`
- limited scope
- product attachment
- Lab comparison response
- selected / parked disposition
- source-project review result if known
- links to follow-up packets if any

Do not use the archive as an active task queue.

## Non-Goals

- Do not use requests as a hidden backlog.
- Do not let Lab auto-start implementation from a request.
- Do not make source-project terms into Lab defaults.
- Do not define bridge payloads or runtime schemas.
- Do not require every request to become a Lab display asset.
- Do not exceed the active request cap without explicit Human / Overseer direction.
