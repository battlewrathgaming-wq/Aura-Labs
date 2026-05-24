# Lab Vocabulary Instruction Packets

Status: Candidate instruction packets for Overseer adoption
Project: AURA-Lab
Purpose: stage the next Lab terminology/copy stabilization work without making it an active Dev runway.

These packets are not executable until the Lab Overseer or Human places one into `workspace/current.md`.

## Authority And Source Pointers

Read before using these packets:

- `F:\Projects\AURA- Lab\AGENTS.md`
- `F:\Projects\AURA- Lab\workspace\current.md`
- `F:\Projects\AURA- Lab\workspace\critical\README.md`
- `F:\Projects\AURA- Lab\workspace\critical\critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\TerminologyAuthorityRuleset-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\terminology-critical-cross-project-synthesis-2026-05-24.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Atlas\critical-terms.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Sense\critical-terms.md`

Authority rule:

- Lab owns Bridge -> Interface human presentation language.
- Lab should use product-agnostic default presentation vocabulary.
- Atlas owns what Atlas emits and what it means.
- Sense owns what Sense emits and what it means.
- Lab must not silently change source-project meaning.
- Shared spelling does not imply shared meaning.

## Packet M13a - Presentation Vocabulary Inventory

Recommended first packet.

Role:
Dev or Engineering specialist, as chosen by Overseer.

Goal:
Find Lab-owned default user-facing copy that borrows Atlas, Sense, Core, backend, proof, monitoring, or authority-heavy terms. Produce a replacement list before changing behavior.

Scope:

- Inspect active Lab renderer copy, fixture text, visible state labels, smoke-visible strings, and current behavior-facing docs if they feed UI meaning.
- Include source files, tests, and fixtures only where strings are visible to users or review surfaces.
- Avoid archives unless the active packet references them.

Classify each risky occurrence as:

- Lab-owned default copy: should replace.
- Source-owned Atlas/Sense term: preserve or source-qualify.
- Internal code identifier: leave alone.
- Test/smoke/support text: mark review-only unless user-facing.
- Archive/historical: ignore unless current packet references it.

Expected artifact:

`workspace/LabVocabularyInventoryHS##-presentation-vocabulary-inventory.md`

Artifact must include:

- Request Received.
- Files inspected.
- Risky term occurrence table.
- Proposed replacement table.
- Safe-now replacements.
- Needs Human/Overseer decision.
- Items intentionally left alone.
- Recommended next packet.

Replacement table columns:

- current string
- file/location
- risk category
- why risky
- proposed Lab wording
- safe now: yes/no
- owner/decision needed

Non-goals:

- Do not change source code unless Overseer explicitly makes this an implementation packet.
- Do not add a verifier yet.
- Do not rename IPC channels, service commands, schemas, payload fields, CSS compatibility names, or internal identifiers.
- Do not rename Atlas/Sense emitted terms.
- Do not decide preserve-exact status.

Verification:

- No code verification required if artifact-only.
- If the packet is converted into implementation, run the verification named in `workspace/current.md`.

## Packet M13b - Presentation Vocabulary Replacement

Use only after M13a exists and Overseer accepts the safe replacement list.

Role:
Dev.

Goal:
Apply safe Lab-owned default copy replacements so Lab uses product-agnostic presentation language without changing source-owned meaning.

Scope:

- Replace only Lab-owned default user-facing strings accepted from M13a.
- Prefer direct copy changes over broad abstractions.
- Add or update a small readable copy registry only if it reduces existing duplication or matches current Lab patterns.
- Keep source-owned Atlas/Sense terms pass-through or source-qualified.

Expected artifact:

`DevHS##-lab-presentation-vocabulary-replacement.md`

Implementation guidance:

- Prefer `Readout`, `Readout basis`, `Readout age`, `State`, `Surface`, `Coverage`, `Gaps`, `Warnings`, `Freshness`, and `Availability`.
- Avoid Lab-owned default use of `verified`, `trust`, `certainty`, `proof`, `truth`, `source of truth`, `evidence`, `intel`, `intelligence`, `tactical`, `combat`, `operator`, `watch`, `monitoring`, `listening`, `snapshot`, `report`, `record`, `finding`, `schema`, `Core`, and `Seed`.
- Preserve source-owned Atlas/Sense terms when they are presented as source-fed data.

Non-goals:

- Do not edit Atlas or Sense.
- Do not create a universal glossary.
- Do not rename schemas, IPC channels, service commands, DB fields, payload fields, or internal project terms for terminology preference.
- Do not change Lab product direction.
- Do not add a broad architecture abstraction.

Verification:

- Run `npm.cmd run verify:all`.
- If UI copy or rendered labels changed, run renderer/shell verification if available in package scripts.
- If visual layout changed, run Electron visual smoke if available and appropriate.
- Report commands run, results, skipped checks, and residual risks.

## Packet M13c - Vocabulary Guardrail Verification

Use only after M13b is accepted or after Overseer decides the copy surface is stable enough to guard.

Role:
Dev or Test/Verification specialist, as chosen by Overseer.

Goal:
Add a narrow vocabulary guardrail that catches regressions in Lab-owned default user-facing copy without blocking source-owned Atlas/Sense terms.

Scope:

- Start as a warning/report check unless Overseer explicitly asks for a hard-fail verifier.
- Check Lab-owned default user-facing copy.
- Allow source-owned Atlas/Sense terms when clearly contextualized as source-owned data.
- Ignore internal identifiers, compatibility names, archive files, generated output, CSS class names, comments, and source-owned emitted terms unless they are rendered as Lab default copy.

Expected artifact:

`DevHS##-lab-vocabulary-guardrail-verification.md`

Guardrail should flag:

- proof/authority wording in Lab defaults
- Atlas/Sense/Core/domain wording used as Lab default copy
- ambiguous use of evidence, source, report, snapshot, watch, monitoring, blocked, sample, gateway, seed, and Core

Guardrail should not:

- force broad renames
- treat frequency as authority
- fail source-owned terms merely because they appear
- become the primary product direction

Verification:

- Run `npm.cmd run verify:all`.
- Run the new vocabulary check directly if separate.
- If UI rendering changed, run renderer/shell or Electron visual smoke as appropriate.
- Report false positives, skipped areas, and whether the check is warning-only or hard-fail.

## Recommended Sequence

1. Run M13a first to produce the inventory and replacement list.
2. Overseer reviews M13a and accepts only safe replacements.
3. Run M13b for accepted copy changes.
4. Run M13c after copy changes are stable.

Do not start with hard-fail verification. Inventory first, replacement second, guardrail third.
