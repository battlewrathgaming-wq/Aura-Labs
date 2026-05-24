# Current Workspace Packet

Status: Active Dev runway
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M12 - Bridge State Readout Naming Alignment
Roadmap source: Accepted UI/UX naming feedback
Sequence: HS44
Previous accepted handshake: `workspace/complete/milestone-M11/OverseerHS42-m11-presentation-state-readout-acceptance.md`
Current executor: Dev
Current focus: rename the accepted readout feature from Presentation State Readout to Bridge State Readout without changing behavior
Expected DevHS filename: `workspace/DevHS44-bridge-state-readout-naming-alignment.md`
Archive target on milestone completion: `workspace/complete/milestone-M12/`

## Purpose

This is the only active executable work packet for Aura Lab.

M11 accepted the neutral readout feature as `Presentation State Readout`. UI/UX HS43 recommends renaming it to `Bridge State Readout` because that name better matches Aura Lab's post-bridge presentation boundary.

This packet asks Dev to perform only the naming alignment.

## Source Of Intent

Accepted into this packet:

- `workspace/UIUXHS43-bridge-state-readout-naming-feedback.md`
- `workspace/OverseerHS44-bridge-state-readout-naming-acceptance.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `docs/statements/post-bridge-presentation-boundary.md`

Accepted:

- Rename visible and verification terminology from `Presentation State Readout` to `Bridge State Readout`.
- Preserve neutral state labels: `CURRENT`, `UPDATING`, `AGED`, `PARTIAL`, `UNAVAILABLE`, `FALLBACK`, and `NO DATA`.
- Preserve the physical/HUD-like visual treatment.
- Preserve Source Detail, source coverage, readout age, basis, gaps, warnings, fallback posture, and secondary diagnostics.
- Update durable docs only where the accepted name is recorded.

Rejected:

- tactical/combat wording as default Lab copy
- source-truth ownership claims
- durable bridge schema or contract claims
- target-project adoption claims
- Aura Core ownership claims
- Atlas evidence doctrine
- Sense tactical doctrine

Deferred:

- deeper terminology audit
- broader UI/UX visual quality review
- fallback fixture coverage
- Core-neutral transfer prompt
- target-owned adoption review

## Required Reading

Dev must read:

- `AGENTS.md`
- `workspace/README.md`
- `workspace/overview.md`
- `workspace/00-dot-protocol.md`
- `workspace/current.md`
- `workspace/UIUXHS43-bridge-state-readout-naming-feedback.md`
- `workspace/OverseerHS44-bridge-state-readout-naming-acceptance.md`
- `docs/index.md`
- `docs/README.md`
- `docs/statements/post-bridge-presentation-boundary.md`
- `docs/current-state/m11-presentation-state-readout-current-state.md`
- `src/renderer/index.html`
- `src/renderer/app.js`
- `src/renderer/styles.css`
- `src/main/main.js`
- `scripts/verify-renderer-shell.js`
- `scripts/verify-services.js`
- `package.json`

## Ordered Dev Runway

1. Confirm cwd is `F:\Projects\AURA- Lab`, read required sources, and inspect current readout naming.
2. Rename user-facing `Presentation State Readout` copy to `Bridge State Readout`.
3. Rename code-facing helper/test identifiers only where it improves consistency and stays low risk.
4. Update verification/smoke observation wording so checks protect `Bridge State Readout`.
5. Update durable docs/current-state references from M11 where they describe the accepted feature name.
6. Do not alter behavior, layout, state mapping, fixture shape, or visual treatment except for terminology.
7. Run required verification, update Evidence / Dev Handoff below, and create `workspace/DevHS44-bridge-state-readout-naming-alignment.md`.

## Guardrails And Non-Goals

- Do not change state labels.
- Do not change source/freshness/certainty behavior.
- Do not add fallback fixture coverage.
- Do not broaden visual smoke.
- Do not add or change presentation families.
- Do not define a durable bridge contract.
- Do not rename `aura.projectBriefing` or `aura.presentationFixture`.
- Do not import Atlas, Sense, or Core doctrine.
- Do not run live/private/destructive actions.
- Do not stage `.tmp`, screenshots, result JSON, cache, dependency artifacts, or generated smoke output.

## Stop Conditions

Stop and report back if:

- renaming requires behavior changes
- code-facing rename risk becomes broader than expected
- durable docs conflict on whether this is a feature name or contract name
- verification requires broad smoke expansion
- target-project or Core ownership questions become necessary

## Required Verification

Run:

```powershell
npm.cmd run verify:all
```

Run Electron smoke only if renderer markup, smoke capture terms, or shell-visible copy changed:

```powershell
npm.cmd run smoke:electron
Get-Process electron -ErrorAction SilentlyContinue
```

Minimum expected evidence:

- `verify:all` passes.
- If smoke runs, it passes and no Electron process remains.
- `Bridge State Readout` is visible or captured where `Presentation State Readout` was previously used.
- rejected tactical/combat wording remains absent from default Lab UI copy.
- M11 behavior remains otherwise unchanged.

## Evidence

Dev updates this section before handoff.

Verification run:

```txt
Not yet run.
```

Files changed:

```txt
Not yet recorded.
```

Findings:

```txt
Not yet recorded.
```

Deferrals:

```txt
Not yet recorded.
```

## Dev Handoff

Dev must complete this section before returning:

Summary of rename:

```txt
Not yet recorded.
```

Exact files changed:

```txt
Not yet recorded.
```

Verification commands and results:

```txt
Not yet recorded.
```

Remaining risks or recommended Overseer action:

```txt
Not yet recorded.
```

Expected handoff file:

```txt
workspace/DevHS44-bridge-state-readout-naming-alignment.md
```
