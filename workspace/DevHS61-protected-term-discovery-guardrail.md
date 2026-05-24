# DevHS61 - Protected-Term Discovery Guardrail

Status: Complete
Role: Dev
Date: 2026-05-24

## Request Received

Implement the first bounded slice of the protected-term discovery guardrail now, using Aura Lab as the proving bench and keeping candidate discovery warning-only.

## Files Changed

Lab project:

- `scripts/verify-lab-vocabulary.js`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/OverseerHS60-protected-term-guardrail-scope.md`
- `workspace/DevHS61-protected-term-discovery-guardrail.md`
- `workspace/OverseerHS62-m17-acceptance.md`

Shared orchestration:

- `F:\Projects\Docs\Aura-Project-Orchestration\scripts\verify-terminology.js`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\README.md`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\atlas-protected.json`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\sense-protected.json`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\lab-protected.json`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\lab-quarantine.json`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\shared-collisions.json`
- `F:\Projects\Docs\Aura-Project-Orchestration\terminology\protected-words\pending-candidates.json`

## Implementation

Added shared protected-word lookup scaffolding with initial seed lists:

- Atlas protected terms
- Sense protected terms
- Lab protected/default terms
- Lab quarantine terms
- shared collision terms
- empty pending candidates list

Updated Lab's vocabulary verifier so it still hard-fails only the existing accepted Lab-owned copy surface rules, then adds a warning-only protected-term discovery report.

The discovery report currently classifies copy-surface terms by:

- likely owner
- apparent layer
- file
- detection reason
- suggested disposition

Updated the shared terminology verifier so resource integrity checks include the new protected-word lookup files.

## Guardrails Preserved

- Candidate discovery does not fail `verify:all`.
- Protected lists are not auto-updated.
- No Atlas or Sense files were edited.
- No code, payload, command, IPC, schema, CSS, or fixture ids were renamed.
- Shared lookup files do not create a universal glossary.
- Lab does not claim ownership of Atlas or Sense meaning.

## Verification

Ran:

```powershell
npm.cmd run verify:vocabulary
npm.cmd run verify:all
npm.cmd run verify:renderer-shell
```

Shared verifier command:

```powershell
npm.cmd run verify:terminology
```

from:

```txt
F:\Projects\Docs\Aura-Project-Orchestration
```

Results:

```txt
verify:vocabulary passed with 27 warning-only discovery candidates.
verify:all passed.
verify:renderer-shell passed.
Terminology verification: 53/53 resource checks passed.
22 shared advisory warnings remained for existing compatibility/source-code names.
```

## Discovery Output Notes

The Lab verifier now reports 27 warning-only candidates from existing copy surfaces. Current candidates include shared collision words such as `source`, `sample`, and `state`, plus Lab-owned candidate/support phrases that may later be protected, allowed, or marked support-only.

These are not failures. They are review evidence for Overseer housekeeping.

## Parked

- Atlas-local protected-term checker.
- Sense-local protected-term checker.
- Automatic protected-list updates.
- Hard-failing discovery candidates.
- Broad terminology or code renames.
- Universal glossary.

## Residual Risks

- The first candidate scanner is intentionally simple and will produce false positives.
- The initial seed lists are small and should be refined by each owning project.
- Lab still has older compatibility/source-code names flagged by the shared terminology verifier; those require a separate accepted cleanup packet.
