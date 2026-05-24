# Current Workspace Packet

Status: Active
Updated: 2026-05-24
Owner: Overseer

## Coordination State

Active milestone: M13a - Presentation Vocabulary Inventory
Last completed milestone: M12 - Bridge State Readout Naming Alignment
Current executor: Dev / Engineering specialist
Current focus: inventory Lab-owned default presentation language before any replacement work
Expected DevHS filename: `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md`

## Purpose

Aura Lab is moving into terminology stabilization so its own presentation language becomes slim, product-agnostic, and display-scoped before Lab presents Atlas/Sense bridge-fed data.

This packet is an inventory and classification pass only. It does not authorize copy replacement, verifier creation, source-owned term changes, or implementation refactors.

## Source Of Intent

Accepted Human / Overseer direction:

- Lab should not use standard/source-project terms as default Lab voice.
- Lab should develop a bespoke slim presentation language that does not conflict with projects Lab applies faces to.
- Lab owns Bridge -> Interface human presentation language only after preserving source-project meaning.
- Atlas and Sense own what they emit and what those terms mean.
- Shared spelling does not imply shared meaning.

Accepted / active references:

- `AGENTS.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/critical/lab-vocabulary-instruction-packets.md`
- `F:\Projects\Docs\Aura-Agent-Coordination\relay\lab-terminology-stabilization-prompt.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`

Relevant accepted project state:

- M00 through M12 are complete and accepted.
- M11 accepted the neutral physical readout feature.
- M12 renamed that feature to `Bridge State Readout`.
- HS46 accepted the Bridge -> Interface authority boundary.
- Tactical/combat wording remains rejected as default reusable Lab language.
- Verification tooling remains support for presentation work, not the product direction.

## Ordered Runway

1. Read the source-of-intent files above, plus `package.json`, `src/renderer/`, `src/services/`, `scripts/verify-services.js`, and `scripts/verify-renderer-shell.js`.
2. Inventory visible or review-facing Lab copy that may be Lab-owned default language, including renderer labels, fixture text, visible state labels, smoke-visible strings, and behavior-facing docs that feed UI meaning.
3. Classify each risky occurrence as one of: `Lab display`, `source-owned`, `internal/support`, `replace candidate`, or `archive/historical`.
4. Build a proposed replacement table using slim Lab language such as `Readout`, `Readout basis`, `Readout age`, `State`, `Surface`, `Coverage`, `Gaps`, `Warnings`, `Freshness`, and `Availability`.
5. Mark which replacements appear safe now and which need Human / Overseer or source-project owner decision.
6. Create `workspace/LabVocabularyInventoryHS48-presentation-vocabulary-inventory.md` with the required sections below.

## Required Artifact Sections

The inventory artifact must include:

- Request Received
- Files inspected
- Short current-state understanding
- Risky term occurrence table
- Proposed replacement table
- Safe-now replacements
- Needs Human / Overseer decision
- Source-owned terms intentionally preserved
- Internal/support terms intentionally left alone
- Recommended next packet

The replacement table must include:

- current string
- file/location
- risk category
- why risky
- proposed Lab wording
- safe now: yes/no
- owner/decision needed

## Guardrails

- Do not change source code, UI copy, docs, tests, package scripts, or verification behavior in this packet except for the expected inventory artifact.
- Do not add a copy registry yet.
- Do not add or modify a vocabulary verifier yet.
- Do not rename IPC channels, service commands, schemas, payload fields, CSS compatibility names, or internal identifiers.
- Do not rename Atlas/Sense emitted terms.
- Do not decide final preserve-exact status for Atlas or Sense.
- Do not treat frequency, extraction, or audits as authority.
- Do not create shared Aura doctrine or a universal glossary.
- Do not run GUI/Electron smoke, live network, private-state, destructive, or cross-project actions from this packet.

## Stop Conditions

Stop and hand back to Overseer if:

- The inventory requires deciding whether to change an Atlas/Sense-owned emitted term.
- A term cannot be classified without source-project authority.
- The work appears to require implementation instead of artifact-only inventory.
- The active files contradict the accepted authority model.
- You need GUI/Electron smoke, live network, private-state access, destructive action, or cross-project edits.

## Verification

This is an artifact-only inventory packet. No code verification is required if no files are changed except the expected inventory artifact.

If the executor changes anything beyond the expected artifact, stop and explain why before proceeding.

## Evidence

Record:

- Files inspected.
- Search patterns or commands used.
- Risky strings found.
- Why each replacement is or is not safe now.
- Any terms left untouched because they are source-owned or internal/support.

## Dev Handoff

In the handoff, state:

- Whether the inventory completed.
- Whether any safe-now replacements are ready for Overseer acceptance.
- Which terms require Human / Overseer or Atlas/Sense owner decision.
- Whether M13b - Presentation Vocabulary Replacement is ready to be written as the next packet.
- Any residual risk in running a replacement pass.
