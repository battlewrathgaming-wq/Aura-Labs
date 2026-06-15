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

