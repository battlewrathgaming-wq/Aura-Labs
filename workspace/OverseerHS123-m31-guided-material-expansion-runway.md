# Overseer HS123 - M31 Guided Material Expansion Runway

Status: Opened
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `workspace/current.md`
- `workspace/overview.md`
- `workspace/display-schema-ledger.md`
- `workspace/display-materials/README.md`
- `workspace/display-materials/authority-window-ttl-strip.md`
- `workspace/display-materials/expandable-status-card.md`
- `workspace/display-materials/table-row-detail-drawer.md`
- `workspace/display-materials/warning-gap-edge.md`
- `docs/roadmap/display-material-repeat-cycle-candidate.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`
- `docs/roadmap/composed-display-output-candidate.md`

## Decision

Open M31 as a guided UI/UX display-material expansion pass, not an immediate Dev prototype.

The reason is simple: Lab has done a lot of renderer hardening. Before another implementation slice, UX should use the gathered references and suggestions to expand the material library in a guided way.

## Expected UI/UX Output

`workspace/UIUXHS123-guided-display-material-expansion.md`

## UI/UX Runway Summary

UI/UX should review the existing accepted material library and propose a guided expansion set.

The work should:

- build from gathered reference/suggestion material
- identify new display material candidates
- describe what each material displays
- map each material to Lab slots/content lanes
- recommend whether it should become a pending material page now, stay as workshop/reference, or be parked
- keep source-project terms source-owned
- keep Lab language slim and product-agnostic

## Suggested Scope

Target 4 to 8 candidate materials.

For each candidate, include:

- material name
- purpose
- display problem solved
- slots
- states
- content lanes
- interaction/reveal behavior
- narrow behavior
- where it might fit later
- risks / do-not-import semantics
- recommended disposition: pending material page, workshop note, parked, or reject

## Guardrails

- Advisory / library-shaping only.
- Do not implement code.
- Do not create Dev runways.
- Do not update target projects.
- Do not create target adapters.
- Do not create composed outputs yet.
- Do not turn gathered references into product doctrine.
- Do not make source-project terms Lab-owned.
- Do not treat the ledger as a backlog.
- Do not promote candidates to accepted status; acceptance remains Human / Overseer.

## Optional Library Work

If useful, UI/UX may create short pending material pages in `workspace/display-materials/` and update `workspace/display-schema-ledger.md` with `pending` rows.

If a candidate is speculative, leave it in the advisory artifact instead of forcing it into the library.

## Verification Required

No code verification is required for advisory-only work.

If UI/UX edits durable docs, material pages, or the ledger, run:

```powershell
npm.cmd run verify:all
```

Run shared terminology verification if terminology-sensitive copy changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

## Acceptance Checks For Overseer

- guided material expansion is concrete enough to shape future Dev work
- candidates are display materials, not product features or target adapters
- suggested materials map to slots/content lanes
- dispositions are clear
- accepted/source-owned project meanings are preserved
- ledger/material page updates, if any, are marked pending unless separately accepted
- no implementation is authorized
