# OverseerHS60 - Protected-Term Discovery Guardrail Scope

Status: Scope proposal accepted for review
Role: Overseer
Date: 2026-05-24

## Request Received

Human provided the full proposal for `Protected-Term Discovery And Local Word Checks` and asked for full scope for the guardrail.

This artifact scopes the work. It does not implement code, create shared files, rename terms, or open a Dev runway by itself.

## Current-State Understanding

Aura Lab is parked after M16. Existing terminology stabilization has:

- accepted cross-project authority rules
- Lab critical term files
- Lab-local vocabulary verification
- shared terminology resource verification and advisory tripwires

The missing layer is discovery. The current checks can catch known risky words, but they do not create a good review loop for newly introduced meaning-critical labels, commands, states, lanes, families, bridge-facing terms, or UI names.

## Accepted Intent

The proposed guardrail should help projects notice new meaningful terms early without creating a universal glossary or blocking normal work.

Core intent:

- discover candidate protected terms
- route candidates to the owning project
- preserve project-owned meaning
- keep Lab defaults product-agnostic
- treat reports as review evidence, not automatic enforcement

## Authority Model

Authority remains unchanged:

- Human owns acceptance and collision overrides.
- Atlas owns Atlas internal and Project -> Bridge meaning.
- Sense owns Sense internal and Project -> Bridge meaning.
- Lab owns Bridge -> Interface presentation language while preserving source-project meaning.
- Shared spelling does not imply shared meaning.
- Frequency, extraction, synthesis, verifier warnings, and discovery reports are evidence, not authority.

## Scope

### Shared Lookup Layer

Create, after explicit implementation approval, a shared lookup folder:

```txt
F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\
```

Suggested files:

- `README.md`
- `atlas-protected.json`
- `sense-protected.json`
- `lab-protected.json`
- `lab-quarantine.json`
- `shared-collisions.json`
- `pending-candidates.json`

Shared lookup files should be review inputs, not auto-mutated truth.

### Project-Local Verifier Layer

Each project owns its local verifier.

Atlas local check should:

- discover candidate Atlas-owned terms
- flag accidental borrowing of Sense/Lab protected words
- distinguish Atlas evidence, discovery, watch, marked, enrichment, and diagnostic language
- preserve Atlas meaning boundaries

Sense local check should:

- discover candidate Sense-owned terms
- flag accidental borrowing of Atlas/Lab protected words
- distinguish lanes, scoped samples, provider state, Live IO state, and clipboard authority language
- preserve transient tactical viewport doctrine

Lab local check should:

- discover candidate Lab presentation terms
- flag accidental borrowing of Atlas/Sense/Core/domain words as Lab defaults
- distinguish Lab default copy, source-owned pass-through, support-only text, internal identifiers, and bridge-facing terms
- preserve slim product-agnostic display language

### Existing Shared Verifier Layer

The current shared verifier should remain useful for:

- accepted ruleset presence
- critical file/resource integrity
- expanded-list link resolution
- obvious advisory warnings

It should not become the product direction, a hard glossary gate, or the only source of terminology truth.

## Required Report Shape

Local protected-term discovery reports should include:

- new candidate term
- likely owner
- file and location
- detection reason
- apparent layer: UI-facing, bridge-facing, source-owned, internal, support-only, or unresolved
- suggested disposition
- confidence or ambiguity note

Suggested dispositions:

- add to project protected list
- add to allowed/common list
- add to shared collision list
- leave as internal/support
- ask Human/Overseer

## Detection Categories

The first implementation should search for candidates in these categories:

- UI labels
- service commands
- bridge/preload APIs
- states and status labels
- report/readout/view names
- lane names
- mode names
- presentation family names
- fixture family names
- bridge-facing payload keys when they are meaning-bearing
- newly repeated title-case phrases
- risky source-project/domain words appearing in Lab default copy

The first implementation should avoid pretending it can perfectly classify all terms. Unknown or ambiguous terms should be reported as candidates, not failed.

## Guardrails

- Do not auto-update protected lists.
- Do not fail normal work on candidate terms.
- Do not rename code from this check.
- Do not make shared spelling mean shared meaning.
- Do not make Lab owner of Atlas or Sense meanings.
- Do not collapse source-owned terms into Lab defaults.
- Do not scan archives as active task queues unless the active packet references them.
- Do not treat generated output as authority.
- Do not require every internal identifier to become user-facing vocabulary.
- Do not block presentation work because terminology discovery found unresolved candidates.

## Cadence

Run during Overseer housekeeping:

- before accepting terminology, bridge-facing, or presentation-language work
- when a project is roughly 20 git changes ahead or has accumulated substantial copy/API churn
- before cross-project adoption of a presentation pattern
- after major UI label or bridge/preload/service-command additions

This cadence is advisory. It should prevent quiet drift without turning terminology review into a standing blocker.

## Recommended Implementation Sequence

Recommended sequence if Human accepts implementation:

1. Engineering/Test advisory:
   - review the existing shared verifier and Lab vocabulary check
   - propose a lightweight file format for protected words and pending candidates
   - identify false-positive risk and minimum useful scanner rules

2. Shared lookup scaffold:
   - create `protected-words/README.md`
   - create initial JSON files with empty or minimal accepted seed lists
   - document that files are manually reviewed and not auto-updated

3. Lab-local discovery check:
   - add warning-only candidate discovery to Lab first
   - use Lab as the proving bench because Lab is the presentation-language owner
   - report candidates without failing `verify:all` unless explicit protected/quarantine misuse is already accepted as a hard failure

4. Atlas/Sense adoption prompts:
   - ask each project to implement its own local checker using its own authority
   - keep source-project meaning local
   - do not make Lab responsible for Atlas/Sense candidate disposition

5. Shared verifier integration:
   - add resource-integrity checks for shared lookup files
   - optionally summarize pending candidate counts
   - do not auto-enforce candidate findings across projects

## Recommended First Bounded Packet

Do not start with full cross-project implementation.

Recommended next packet:

```txt
M17 - Protected-Term Discovery Feasibility
```

Recommended executor:

Engineering/Test specialist, not Dev.

Expected artifact:

```txt
workspace/EngineeringHS61-protected-term-discovery-feasibility.md
```

Expected output:

- inspect Lab vocabulary check and shared terminology verifier
- inspect existing terminology authority files
- propose the smallest warning-only discovery implementation
- define JSON shape for protected and pending terms
- identify which checks belong in Lab versus shared orchestration
- identify verification commands
- list false-positive risks
- recommend whether Dev should implement the Lab-local first slice

No source changes should be made in the feasibility packet.

## Minimum Future Dev Slice

If feasibility is accepted, the first Dev slice should be:

- add shared lookup file integrity checks only
- add Lab-local candidate discovery as warning/report output
- keep `verify:all` behavior stable unless the active packet explicitly accepts a hard-fail rule
- produce a DevHS with report examples and false positives

This should not edit Atlas or Sense.

## Parked

- Atlas implementation.
- Sense implementation.
- Automatic protected-list updates.
- Universal glossary.
- Broad code renames.
- Hard-failing candidate discovery.
- Cross-project adoption enforcement.
- Core ownership claims.

## Human / Overseer Decisions Still Needed

- Whether to open M17 as Engineering/Test feasibility.
- Whether shared lookup files may be created under `F:\Projects\Docs\Aura-Project-Orchestration`.
- Whether Lab-local discovery should be warning-only forever or allowed to hard-fail only on accepted quarantine misuse.
- Whether pending candidates should live only in shared lookup JSON or also be copied into project-local handoff artifacts.
