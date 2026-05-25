# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M31 - Display Material Repeat Cycle
Last completed milestone: M30 / HS122 - Reduced-Motion Gate Acceptance
Current executor: UI/UX
Current focus: Guided display-material expansion from gathered suggestions and references.
Expected artifact filename: `workspace/UIUXHS123-guided-display-material-expansion.md`

## Current State

Aura Lab has closed M29 and M30.

The presentation head is now hardened enough to support a broader material-library pass:

- loading state parity
- Summary / Basis / Details view intent
- basis/details emphasis
- presentation slot registry and view-intent slot policy
- detail hydration
- focus/reveal controller
- lazy visual slot
- row facets
- overflow sentinel
- reduced-motion gate

M31 should now grow the display-material library before opening another Dev prototype. This is a guided UI/UX pass, not a Dev implementation packet.

## Source Of Intent

Accepted source of intent:

- Human correction to do M31 guided rather than bounded
- Human direction that UX can build out gathered suggestions and get some into the library
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-materials/warning-gap-edge.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `workspace/complete/milestone-M30/OverseerHS122-hs121-reduced-motion-acceptance.md`
- `workspace/OverseerHS123-m31-guided-material-expansion-runway.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- all current files in `workspace/display-materials/`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- any gathered UX/reference material Human points to

## Ordered UI/UX Runway

1. Review the current material library and ledger.
2. Review gathered suggestions/references supplied by Human or already present in the workspace.
3. Propose 4 to 8 display material candidates.
4. For each candidate, state the display problem solved, slots, states, content lanes, interaction/reveal behavior, narrow behavior, likely fit, and risks.
5. Recommend disposition for each candidate: pending material page, workshop/reference note, parked, or reject.
6. If useful, create short pending material pages in `workspace/display-materials/` and add pending ledger rows.
7. Create `workspace/UIUXHS123-guided-display-material-expansion.md`.

## Acceptance Criteria

This runway is acceptable if:

- it expands Lab's material thinking beyond the current four accepted materials
- candidates are concrete display materials, not broad product features
- each candidate maps to Lab slots/content lanes
- dispositions are clear
- any created material pages are marked pending unless Human / Overseer accepts them
- source-project terms and meanings remain source-owned
- Lab slim language is used for Lab defaults
- no Dev implementation is authorized

## Guardrails And Non-Goals

Allowed:

- advisory artifact
- pending material pages
- pending ledger rows
- reference links or screenshots if already available locally

Not allowed:

- code implementation
- Dev runway creation
- target-project adapters
- source-project semantics
- export/seeding
- SmokeFlash split
- composed display output work
- product settings surface
- bridge payload, IPC, preload bridge, service command, or runtime contract changes
- live/private/network work unless Human explicitly asks
- destructive or git history operations

## Stop Conditions

Stop and return to Overseer if:

- Human reference material is missing and candidate selection would become invention
- source-project meaning is required to define a material safely
- a candidate is really a composed output, target adapter, or product feature
- the work would require code changes

## Required Verification

No code verification is required for advisory-only work.

If material pages, ledger, or durable docs change, run:

```powershell
npm.cmd run verify:all
```

Run shared terminology verification if terminology-sensitive copy changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Evidence

UI/UX should fill this:

- Files reviewed:
- Candidate materials proposed:
- Pending material pages created:
- Ledger rows added:
- Parked/rejected candidates:
- Verification commands and results, if run:

## Handoff

Expected output:

```txt
workspace/UIUXHS123-guided-display-material-expansion.md
```

The handoff must state which candidates are ready for Human / Overseer acceptance and which should stay parked or advisory-only.

## Advisory Disposition

- Opened: M31 Display Material Repeat Cycle.
- Opened: HS123 guided display-material expansion.
- Deferred: immediate Dev prototype for Expandable Status Card.
- Deferred: composed display output candidate.
- Parked: virtualized list helper until concrete list pressure exists.
- Parked: Lab fixture adapter.
- Deferred: renderer security review until closer to split/export readiness unless Human pulls it forward.
- Deferred: SmokeFlash split until export/seeding/target consumption under ADR 0001.
- Parked: target-project adapters and export/seeding under ADR 0002.

## Residual Risks

- Existing inherited naming tripwires remain.
- Material candidates are Lab-local until accepted.
- Pending material pages are not Dev authorization.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
