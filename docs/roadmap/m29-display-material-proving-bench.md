# M29 - Display Material Proving Bench

Status: Candidate

## Outcome

Prove that Aura Lab can turn accepted material schemas into polished, inspectable, reusable HTML presentation materials.

M29 should gather the M28 Authority Window TTL Strip result, choose the next one or two material candidates, and define a practical acceptance bar for future material work.

## Why This Is Milestone-Sized

M28 proved one material prototype. That was useful, but it was task-sized. M29 should frame the larger outcome: a repeatable proving bench for individual materials.

## Likely Runways

- Review the accepted TTL strip as the first material proof.
- Select the next material candidate from `workspace/display-materials/`.
- Prototype one additional material with visible states and narrow behavior.
- Capture material acceptance rules that can be reused.
- Decide whether the library is ready for a repeat-cycle milestone.

## Acceptance Criteria

M29 is complete when:

- at least one accepted material is reviewed as the first proving-bench example
- at least one next material is either prototyped or scoped with clear acceptance criteria
- Lab has a repeatable definition of "material is good enough"
- material pages and the display schema ledger remain aligned
- SmokeFlash remains hidden/gated workshop tooling
- no target-project adapter or source-project meaning is introduced

## Non-Goals

- export/seeding
- target-project adoption
- target-project adapters
- broad SmokeFlash split
- broad visual-smoke matrix
- durable bridge/runtime contracts

## Dependencies

- `workspace/display-materials/`
- `workspace/display-schema-ledger.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `workspace/OverseerHS92-m28-acceptance.md`

## Verification Shape

Use the normal Lab verification set for code work:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
npm.cmd run verify:vocabulary
```

Run Electron smoke when visible layout, material harness behavior, or capture flow changes:

```powershell
npm.cmd run smoke:electron
```

Run shared terminology verification when visible copy or durable docs change:

```powershell
cd F:\Projects\Docs\Aura-Project-Orchestration
npm.cmd run verify:terminology
```
