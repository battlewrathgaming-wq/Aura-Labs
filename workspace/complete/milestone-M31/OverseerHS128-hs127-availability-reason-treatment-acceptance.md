# OverseerHS128 - HS127 Availability Reason Treatment Acceptance

Status: Accepted
Role: Overseer
Date: 2026-05-25

## Review Scope

Reviewed `workspace/DevHS127-availability-reason-treatment-prototype.md` and the HS127 implementation for the Lab-local Availability Reason Treatment material.

Files reviewed:

- `workspace/current.md`
- `workspace/DevHS127-availability-reason-treatment-prototype.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `workspace/display-materials/availability-reason-treatment.md`
- `workspace/display-materials/README.md`
- `workspace/display-schema-ledger.md`
- `docs/roadmap/m31-display-material-repeat-cycle.md`

## Acceptance Decision

Accepted.

HS127 delivers a bounded Lab-local prototype for `mat-availability-reason-treatment` without opening target adapters, source-project semantics, export/seeding, composed outputs, bridge contracts, IPC, preload, service command, or runtime contract changes.

The material now demonstrates:

- compact parent state/reason display
- non-color-only status marker
- distinct no-data, unavailable, blocked, failed, fallback, aged, and source-owned no-scan cases
- restrained absence/warning treatment
- one-line parent reason
- detail rows for reason, basis, owner/layer notes, fallback notes, warning notes, or age where relevant
- no fake primary value for unavailable/no-data/blocked/failed cases
- narrow containment with detail open

## Terminology And Authority

The prototype keeps Lab wording slim and presentation-local.

`blocked`, `failed`, and `source-no-scan` are treated as Lab display cases or source-owned placeholders with owner/layer qualification, not as shared Aura meaning and not as Sense/Atlas contract terms.

No Lab state label is promoted into source-project enums, bridge payload shape, or durable shared doctrine.

## Verification Re-Run By Overseer

Ran:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run smoke:electron
```

Results:

- `verify:renderer-shell` passed.
- `verify:vocabulary` passed with 39 warning-only protected-term discovery candidates.
- `verify:all` passed.
- `smoke:electron` passed.
- `.tmp/electron-visual-smoke/visual-smoke-result.json` reported `status: passed` and `blocking_failures: []`.
- Smoke captured all seven `mat-availability-reason-treatment` states and the narrow `source-no-scan` case.
- Availability observations reported `availability_detail_open: true` and `overflowing: []`.

Also ran from `F:\Projects\Docs\Aura-Project-Orchestration`:

```powershell
npm.cmd run verify:terminology
```

Result:

- Passed 53/53 resource checks.
- Existing inherited Lab warning tripwires remain; HS127 did not introduce a new blocking terminology issue.

## M31 Closure

M31 acceptance criteria are met:

- two non-TTL material prototypes are accepted:
  - `workspace/display-materials/long-text-detail-block.md`
  - `workspace/display-materials/availability-reason-treatment.md`
- accepted prototypes remain tied to canonical material pages
- the ledger points future workers to the material pages and prototype evidence
- workshop tooling remains support-only
- no target adapter, source-project meaning, export/seeding, or bridge/runtime contract was introduced

M31 is closed as accepted.

## Parked Or Deferred

- Source / Basis Coverage Marker remains pending.
- Compact Value Rail remains pending.
- Composed display outputs remain future work.
- Target adapters remain parked under ADR 0002.
- SmokeFlash split remains deferred until export/seeding/target consumption pressure under ADR 0001.
- Renderer security review remains deferred until closer to split/export readiness unless Human pulls it forward.
