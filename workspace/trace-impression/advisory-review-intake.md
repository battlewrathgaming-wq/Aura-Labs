# Trace Impression Advisory Review Intake

Status: Advisory input request

## Why This Exists

Trace Impression is a portable workflow scaffold for reducing repeated audit noise.

Instead of asking each Overseer, Engineer, or data-trace pass to rediscover the same source/data path from scratch, a project keeps one current source-cited orientation map and a compact run log.

The goal is not to replace code review, architecture review, or project authority.

The goal is to give agents and the Human a shared map before deeper work begins.

## Value Add

Trace Impression helps answer:

- What is the current seam or pipeline?
- Where does it start?
- What changes the data?
- Where does it cross boundaries?
- What is shown, stored, logged, or verified?
- What is source-cited?
- What is inferred?
- What is not proven?
- Where could boundary bleed happen?

For Overseers, it should make runway shaping and handoff review lighter.

For the Human, it should make project growth, drift, and boundary pressure easier to see across time.

## Core Split

Project-local:

```txt
Project-Local Operational Map
```

This steers work inside the source project.

Central:

```txt
Central Human Orientation Map
```

This supports Human vision and recovery. It does not become project authority.

Core rule:

```txt
Project-local maps steer work.
Central human maps support vision and recovery.
Source citations support trust.
Owning projects decide meaning.
```

## Command Model

When locally initialized:

```txt
\
```

Runs local-map mode. Project-local only.

```txt
|
```

Runs human-sync mode. Requires a current local map and may update the Central Human Orientation Map from cited local basis only.

These commands are factual orientation commands, not fuzzy discussion.

## Guardrail Summary

Trace Impression must not:

- edit source code
- create Dev runways
- decide source-project meaning
- claim architecture approval
- become a broad audit by default
- rewrite `workspace/current.md`
- treat generated maps as accepted truth
- sync the Human map from a blocked or weak local run

## What We Want From You

Please review as a source-project Overseer or specialist.

Focus on whether this would help or burden your project.

Do not treat this as deployment authority.

Do not implement it in your project from this file alone.

## Constructive Input Advisory

### 1. Fit

Would this reduce repeated audit/source-trace work for your project?

Answer:

```txt
TODO
```

### 2. Local Context Needs

What would your project need in `workspace/trace-impression/context.md` for this to work safely?

Answer:

```txt
TODO
```

### 3. Useful Seam Or Pipeline

What is one seam/pipeline that would make a good first pilot?

Answer:

```txt
TODO
```

### 4. Boundary Risks

What would this tool need to avoid in your project?

Consider source meaning, live/private data, runtime behavior, adapters, bridge contracts, and product doctrine.

Answer:

```txt
TODO
```

### 5. Output Shape

Is the Project-Local Operational Map / Central Human Orientation Map split useful?

What would you change?

Answer:

```txt
TODO
```

### 6. Rerun Discipline

Would the baseline/rerun rule prevent audit ritual, or does your project need different triggers?

Answer:

```txt
TODO
```

### 7. Stop Conditions

What stop condition should be added before this is piloted in your project?

Answer:

```txt
TODO
```

### 8. Recommendation

Choose one:

```txt
usable as-is / usable with cautions / needs revision / not suitable yet
```

Reason:

```txt
TODO
```

---

## Advisory Input - AURA-Sense Overseer

Status: Advisory input only, not deployment authority
Reviewer: AURA-Sense Overseer
Perspective: Source-project Overseer reviewing whether Trace Impression would help or burden AURA-Sense

### 1. Fit

Trace Impression would likely reduce repeated source-trace and audit work for Sense if it stays factual, local, and citation-led.

The useful shape is not a broad project essay. It is a current, source-cited seam map that shows:

- what source code and accepted state currently prove
- where the pipeline starts
- what transforms or carries data
- where boundaries are crossed
- what is shown, stored, logged, or verified
- what is inferred, not found, not mapped, or not inspected
- where boundary bleed could happen

For Sense, this is useful because recent work has repeatedly returned to the same seams: Passive Telemetry adapter readiness, I/O authority, gamelog ingest, provider results, Lab presentation glass, and bridge/display boundaries.

The strongest value is that gaps remain visible. Trace Impression should not smooth uncertainty into a complete diagram.

Recommended principle:

```txt
A missing link is a finding.
A not-proven claim is a finding.
A boundary without cited ownership is a finding.
An inferred step must stay visibly inferred.
```

### 2. Local Context Needs

The portable scaffold is useful, but `workspace/trace-impression/context.md` is the real safety layer. Sense should not use Trace Impression seriously until that file is filled with Sense-local purpose, terms, boundaries, proof expectations, and must-never-infer rules.

Sense-local context should include:

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

Sense `context.md` should also name live/private boundaries explicitly:

- private EVE gamelog folders
- clipboard contents
- live provider/API calls
- manual shortcut validation
- real SDE refresh/download
- operator-local paths
- cross-project runtime dependencies

### 3. Useful Seam Or Pipeline

Best first Sense pilot: Passive Telemetry.

Reason:

- it already has an accepted adapter/local glass chain
- fixture/offline proof exists
- no live/manual/private input is needed
- boundary pressure is real but contained: Sense meaning versus Lab presentation
- it can show source -> snapshot -> adapter -> local readout without implying product UI adoption

Good candidate seam:

```txt
Passive fixture snapshot
-> mapPassiveTelemetryAdapter(snapshot)
-> mapPassiveStaticHeadTrial(adapter)
-> sense-trial-readouts.json
-> trials/passive-local-glass/inspect-head.html
```

Avoid as first pilots:

- Clipboard Acquisition, because privacy/listening authority is sharper.
- Combat Witness, because log-derived versus ship-state truth needs careful modeling.
- live API/provider paths, unless explicitly scoped and authorized.

### 4. Boundary Risks

Trace Impression must avoid:

- treating Lab scaffold/glass as Sense authority
- mapping Lab display labels into Sense runtime states
- treating Passive Telemetry as Threat Intel
- treating Combat Witness as advice, recommendation, or ship telemetry
- turning Human vision/mockups into accepted UI direction
- treating fixture tests as live/operator validation
- treating I/O authority as proven across all lanes unless gates are traced
- reading private EVE logs or clipboard state
- opening Dev work from a map finding
- using central Human maps as project authority

Project-local versus non-local basis should be first-class.

Recommended rule:

```txt
Anything outside the current project root is non-local basis.

Non-local basis may provide process context, scaffold origin, advisory input,
or Human orientation, but it must not be treated as project authority unless
the current project explicitly adopts it in local project files.
```

Suggested provenance labels:

- `project-local-code`
- `project-local-doc`
- `project-local-accepted-state`
- `non-local-scaffold`
- `non-local-advisory`
- `non-local-orientation`
- `non-local-template`
- `human-context`
- `inferred`
- `not-found`
- `not-mapped`
- `not-inspected`

Core boundary line:

```txt
Non-local can orient, but local must adopt before it can steer.
```

### 5. Output Shape

The Project-Local Operational Map / Central Human Orientation Map split is useful and should remain.

Project-local maps should steer project discussion from cited source basis.

Central Human maps should support Human orientation, recovery, and cross-project dashboarding. They should not become project state, project authority, or a second `workspace/current.md`.

Every generated map should include an authority label inside the output, not only in surrounding docs.

Suggested local map label:

```md
## Authority Label

This map is an orientation aid, not project authority.

Project authority remains local to:
- AGENTS.md
- workspace/current.md
- accepted project docs and handoffs
- source code and verification evidence

This map may summarize cited local basis, but it does not authorize work,
rename terms, accept recommendations, or define source-project meaning.
```

Suggested central map label:

```txt
Central Human Orientation Maps support vision and recovery.
They are not project state.
Verify against the source project before opening work.
```

Add a visible basis mix near the top of each map:

```txt
Basis mix:
- project-local-code: 8
- project-local-doc: 4
- project-local-accepted-state: 3
- non-local-scaffold: 1
- inferred: 2
- not-mapped: 3
- not-inspected: 1
```

Add a confidence ceiling:

```txt
Confidence ceiling: source-map only.
No runtime execution, browser inspection, live API, private path read,
or manual flow validation was performed.
```

Add freshness markers:

- generated date
- source commit
- active milestone at time of run
- `workspace/current.md` status at time of run
- whether this replaces a prior map or is a first run
- whether source changed since last run, if known

### 6. Rerun Discipline

The baseline/rerun rule is strong and should prevent audit ritual if followed.

Keep:

- default replacement, not accumulation
- rerun only for material source/focus change, stale/disputed map, material source gap, Human/Overseer refresh request, or Human sync basis
- investigation mode only when an active packet explicitly needs repeated focused traces
- history only when it explains change, risk, growth, or regression

Add one rerun trigger:

- rerun when a map is about to be used to justify a Dev runway and source/current state may have changed since generation

Add one anti-trigger:

- do not rerun because Human vision discussion happened unless that discussion led to accepted local state or changed the seam focus

### 7. Stop Conditions

For Sense, stop before piloting if:

- `workspace/trace-impression/context.md` is not filled with Sense-local boundaries
- the seam cannot be named from `workspace/current.md` or explicit Human/Overseer instruction
- tracing would require private EVE log inspection, clipboard capture, live provider calls, manual shortcut validation, real SDE refresh, or cross-project runtime dependency
- the output would rely on Lab, Orchestration, central docs, or Human maps as proof of Sense runtime behavior
- the trace cannot distinguish code-observed, accepted-state, inferred, not-mapped, not-inspected, and non-local basis
- the trace cannot distinguish observed state from inferred sequence

If the trace cannot distinguish observed state from inferred sequence, it should write blocked output instead of forcing a weak map.

Weak maps are worse than no maps because they create false continuity.

### 8. Recommendation

```txt
usable with cautions
```

Reason:

Trace Impression is worth piloting if deployed locally with project-specific context filled before use. Its strongest value is reducing repeated audit rediscovery while preserving uncertainty. It should be treated as a source-cited orientation map, not project authority, not architecture approval, and not Dev authorization.

The main required improvement before deployment is making context-exposure control, non-local basis labeling, authority labeling, basis mix, freshness, and confidence ceiling explicit in generated outputs.

### Additional Recommendation: Context-Exposure Control

The command symbols should be documented as context-exposure controls.

Recommended wording:

```txt
Trace Impression commands are context-exposure controls.

They narrow the agent's input surface so Human discussion, preference,
metaphor, future vision, and exploratory chat do not alter stateful
observations.

\ uses cited project-local basis only.
| syncs from the current local map only.
```

This matters because the Human should be able to think aloud without contaminating factual source maps.

### Tone And UX

Keep the output boring and stable.

Useful output should be scan-friendly:

- tables
- short claims
- citations
- visible gaps
- confidence labels
- next questions

Avoid rich prose by default. Avoid broad project-understanding essays. The usefulness comes from repeatability, not novelty.
