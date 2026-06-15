# Sense Advisory Disposition

Status: Advisory disposition
Source: `workspace/trace-impression/advisory-review-intake.md`
Reviewer input: AURA-Sense Overseer

## Purpose

This file distills Sense Overseer input into shared Trace Impression refinements, project-local guidance, and deferred pilot questions.

It does not deploy Trace Impression into Sense.

It does not make Sense terms or runtime meaning part of the Lab scaffold.

## Convergence

Sense input strongly agrees with the existing scaffold direction:

```txt
Missing links are findings.
Not-proven claims are findings.
Inferred steps must stay visibly inferred.
Weak maps are worse than no maps.
```

Sense also confirms the audience split:

- Project-Local Operational Map steers source-project work.
- Central Human Orientation Map supports Human vision and recovery.
- Neither output becomes project authority.

## Adopt Soon - Shared Scaffold Refinements

These are broadly useful and should be considered for the shared portable scaffold.

### Authority Label In Generated Maps

Every generated map should carry its own authority label, not rely only on surrounding docs.

Shared intent:

```txt
This map is an orientation aid, not project authority.
It does not authorize work, rename terms, accept recommendations, or define source-project meaning.
```

### Basis Mix

Generated maps should show what kind of basis they are standing on.

Useful shared shape:

```txt
Basis mix:
- code-observed:
- doc-stated:
- accepted-state:
- human-context:
- inferred:
- not-found:
- not-mapped:
- not-inspected:
```

The exact labels may still be refined during pilot.

### Confidence Ceiling

Generated maps should state what level of confidence their inspection supports.

Useful shared shape:

```txt
Confidence ceiling: source-map only.
No runtime execution, browser inspection, live/private path read, provider call, or manual flow validation was performed unless explicitly listed.
```

### Freshness Markers

Generated maps should show enough freshness to prevent stale-map confidence:

- generated date
- source commit
- active milestone at time of run
- `workspace/current.md` status at time of run
- whether this replaces a prior map or is a first run

### Context-Exposure Control

Trace Impression commands should be described as context-exposure controls.

Shared intent:

```txt
Trace Impression commands narrow the agent's input surface so Human discussion, preference, metaphor, future vision, and exploratory chat do not alter stateful observations.
```

This should be held for the next command wording pass.

## Project-Local - Sense Context Only

These Sense-specific points belong in Sense's eventual `workspace/trace-impression/context.md`, not in the shared Lab scaffold:

- Sense is a transient gameplay companion and tactical viewport, not historical evidence storage.
- Sense is log/API/clipboard/static-lookup fed, with backend-owned truth.
- I/O authority gates admission into ingest lanes.
- Parser output is not Human interpretation.
- Combat Witness is log-derived, not ship-state truth.
- Passive Telemetry is context texture, not Threat Intel.
- Clipboard Acquisition is operator-authorized acquisition, not always-on user intent.
- Lab glass/presentation terms are display material, not Sense runtime state.
- Atlas terms such as Evidence, Assessment, Watch, and Marked do not become Sense doctrine.
- Fixture/offline proof is not live/operator validation.
- Local glass trial is not product UI adoption.

Sense-local live/private boundaries also belong in Sense context:

- private EVE gamelog folders
- clipboard contents
- live provider/API calls
- manual shortcut validation
- real SDE refresh/download
- operator-local paths
- cross-project runtime dependencies

## Project-Local - Suggested Sense Pilot

Sense recommends Passive Telemetry as the best first pilot.

Reason:

- accepted adapter/local glass chain exists
- fixture/offline proof exists
- no live/manual/private input is needed
- boundary pressure is real but contained
- it can show source -> snapshot -> adapter -> local readout without implying product UI adoption

This is useful project-local guidance, not a shared Lab requirement.

## Deferred To Pilot

These ideas are valuable but should wait until a real first run shows the pressure.

### Expanded Provenance Labels

Sense suggests project-local and non-local variants such as:

- `project-local-code`
- `project-local-doc`
- `project-local-accepted-state`
- `non-local-scaffold`
- `non-local-advisory`
- `non-local-orientation`
- `non-local-template`

The concept is strong, but label expansion should be tested in a pilot before becoming shared default vocabulary.

Near-term shared stance:

```txt
Non-local can orient, but local must adopt before it can steer.
```

### Observed State Versus Inferred Sequence

Sense highlights an important distinction:

```txt
observed state != inferred sequence
```

This should be tested in the first real map before becoming a required section.

### Diff / Source-Changed Since Last Run

The desire to show whether source changed since the last map is valid.

Defer until current maps exist and the run-log has at least one useful comparison.

## Not Adopted As Shared Default

Do not add Sense-specific doctrine, lane terms, or pilot seam names to the shared scaffold.

Do not make Sense privacy/live boundaries universal.

Do not require central Human maps to carry source-project authority labels beyond the shared non-authority warning.

## Recommended Next Shared Refinement

Before a first pilot, update the shared templates with:

1. authority label
2. basis mix
3. confidence ceiling
4. freshness markers

Then pause for the command wording discussion around `\` and `|`.

