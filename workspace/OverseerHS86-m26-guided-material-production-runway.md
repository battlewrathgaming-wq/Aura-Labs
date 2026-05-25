# OverseerHS86 - M26 Guided Display Material Production Runway

Date: 2026-05-25
Project: Aura Lab
Milestone: M26 - Guided Display Material Production
Status: Runway opened

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/DisplayMaterialRequirementsHS84-m24-derived-materials.md`
- `workspace/display-schema-ledger.md`

## Decision

M26 is opened as a UI/UX display material production packet.

The next worker should produce individual reusable Lab material schemas from the accepted M25 requirements. This is the bridge between requirements and later Human-piloted feature delivery.

## Slim Language Confirmation

Slim language is already accepted as Lab's presentation posture. It does not need to become a separate workstream for M26.

For this packet:

- use Lab-owned product-agnostic default vocabulary
- preserve Atlas/Sense terms only as source-owned examples
- avoid terminology drift, but do not run a fresh terminology audit unless the artifact changes critical visible language

## Runway Summary

The expected artifact is:

```txt
workspace/DisplayMaterialSchemasHS86-guided-material-production.md
```

The artifact should expand the first three accepted M25 candidates into reusable material schemas:

1. `mat-authority-window-ttl-strip`
2. `mat-expandable-status-card`
3. `mat-table-row-detail-drawer`

It may include lighter near-next notes for:

- `mat-compact-status-plus-drawer`
- `mat-warning-gap-edge`

## Guardrail Summary

Do not implement code, start SmokeFlash, refactor workflow, create target-project features, edit target projects or orchestration records, or make source-project meaning decisions.

## Verification

Required for the documentation packet:

```powershell
npm.cmd run verify:all
```

Run the shared terminology check only if critical visible terminology changes:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```

Electron smoke is not required.

## Human / Overseer Notes

This packet is meant to give UI/UX enough runway to complete a useful output without three more coordination loops. It should create material schemas that can later be picked for small, pilot-driven feature delivery.
