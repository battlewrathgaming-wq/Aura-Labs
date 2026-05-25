# Current Workspace Packet

Status: Active
Updated: 2026-05-25
Owner: Overseer

## Coordination State

Active milestone: M29 - Presentation Head Improvement Rail
Last completed milestone: M29 / HS102 - Details View Inspection
Current executor: Security specialist / Reviewer
Current focus: Renderer security review after the final bounded M29 presentation slice.
Expected artifact filename: `workspace/SecurityHS104-renderer-security-review.md`

## Current State

Aura Lab is in M29, the Presentation Head Improvement Rail.

Accepted M29 slices:

- H02 Loading State Parity.
- H03 View Intent Axis.
- HS97 Basis-First Expressive View.
- HS99 Basis Rail Polish.
- HS102 Details View Inspection.

Accepted HS102 result:

- The Briefing `Details` view now brings the existing Readout Detail drawer into the first Details flow before the Bridge State Readout band.
- The drawer is styled as a calm inspection surface for readout age/timing, state summary, basis, known fields, band marker, source paths, gaps, and warnings.
- `Summary`, `Basis`, and `Details` remain the only visible view options.
- Summary remains default.
- The HS99 Basis rail placement and polish are preserved.
- Diagnostics remain secondary and are not promoted into Details.
- Targeted smoke captures `summary-first`, `basis`, and `details` on `briefing` / `partial`.
- No target-project adapter, source-project meaning, export/seeding, renderer split, durable bridge/runtime contract, IPC channel, network path, or dependency was introduced.

Accepted sequence:

- One bounded presentation-head slice after HS99.
- Then renderer security review.

The bounded slice is now accepted. Open the renderer security review.

## Source Of Intent

Accepted source of intent:

- Human direction to do one bounded presentation slice, then a renderer security review.
- Human direction to focus this phase on presentation improvements.
- `workspace/OverseerHS101-m29-next-slice-security-sequence.md`
- `workspace/OverseerHS102-m29-details-view-inspection-runway.md`
- `workspace/DevHS102-details-view-inspection.md`
- `workspace/OverseerHS103-hs102-details-view-acceptance.md`

Read first:

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `workspace/OverseerHS101-m29-next-slice-security-sequence.md`
- `workspace/OverseerHS103-hs102-details-view-acceptance.md`
- `src/main/main.js`
- `src/main/preload.js`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/services/serviceRegistry.js`
- `scripts/electron-visual-smoke.ps1`
- `scripts/verify-renderer-shell.js`
- `package.json`

## Ordered Review Runway

1. Review renderer and Electron boundary assumptions in the listed files.
2. Review DOM insertion/text handling and whether bridge/fixture strings are treated as text rather than HTML.
3. Review preload, IPC, service access, and renderer command exposure for unnecessary authority.
4. Review SmokeFlash/workshop gating and normal launch isolation.
5. Review whether recent M29 view-intent, Basis rail, and Details inspection changes introduced renderer risk.
6. Review Electron window/shell assumptions relevant to renderer safety.
7. Run lightweight verification only if useful for confirming current state.
8. Create `workspace/SecurityHS104-renderer-security-review.md`.

## Acceptance Criteria

This review is acceptable if it:

- identifies whether the renderer is acceptable for continued Lab-local presentation work
- lists concrete findings by severity, with file references
- distinguishes blocker, fix-before-export, and acceptable-Lab-local risks
- reviews DOM/text handling, preload/IPC exposure, workshop gating, and normal launch isolation
- calls out any impact from HS102 or the current M29 view work
- does not implement code
- does not open target-project adapters, export/seeding, renderer split, or live/private/network work
- recommends the next move after review

## Guardrails And Non-Goals

Allowed:

- read files
- inspect current smoke result files
- run local verification commands if useful
- write the expected security review artifact

Not allowed:

- code changes
- dependency changes
- target-project adapters
- export/seeding
- renderer split implementation
- live/private/network work
- GUI/manual smoke unless Human explicitly asks
- destructive or git history operations

## Stop Conditions

Stop and return to Human / Overseer if:

- a possible critical security issue needs immediate Human review
- review requires live/private/network data
- review requires changing code to continue
- the renderer boundary depends on target-project adapter assumptions
- Electron runtime/install issues become the main work

## Required Verification

No verification is strictly required for a read-only security review.

If useful, run:

```powershell
npm.cmd run verify:renderer-shell
npm.cmd run verify:all
```

Do not run Electron smoke unless Human or Overseer asks for GUI/smoke confirmation.

## Evidence

Security reviewer should fill this after work:

- Files reviewed:
- Commands run:
- Findings:
- Blockers:
- Fix-before-export risks:
- Acceptable Lab-local risks:
- Recommended next move:

## Review Handoff

Expected output:

```txt
workspace/SecurityHS104-renderer-security-review.md
```

The handoff must state whether the renderer can continue Lab-local presentation work and whether any fix runway is needed before split/readiness review.

## Advisory Disposition

- Accepted: HS102 Details View Inspection.
- Accepted: open renderer security review after HS102.
- Deferred: split-readiness review until after security review.
- Parked: target-project adapters and export/seeding.

## Residual Risks

- Existing inherited naming tripwires remain.
- `viewIntent` is local renderer/test state only, not a durable bridge/runtime contract.
- M29 presentation-head work is proven only on the Briefing family.
- SmokeFlash/material harness code remains in the renderer bundle under ADR 0001 Lab-local allowance.
- SmokeFlash must still be split before export, seeding, or target-project consumption.
