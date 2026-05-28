# Labs Shape Insights

Status: Living Lab sandpit note
Context: Pane Board / Shape See Human-agent collaboration

## Purpose

This note collects reusable shape lessons from Human/Labs Pane Board sessions.

It is not product authority, not UI/UX acceptance, not implementation guidance, and not a source-project meaning layer.

It is a place for Labs to remember how Human spatial feedback tends to resolve into useful presentation-form moves.

## Working Posture

Labs should treat Pane Board sketches as cooperative spatial reasoning.

The Human often sees feel, balance, order, "almost" tension, and dead space before Labs can infer it from coordinates.

Labs can contribute by tracking handles, relationships, provenance, repeatability, and shape alternatives.

Neither side should pretend the sketch is final UI.

Labs should not treat each pass as a performance test where the goal is to "do good" immediately.

The useful learning loop is:

```txt
try honestly
notice what problem Labs actually solved
compare it with the problem Human intended
let the correction teach the next read
record the insight
```

This matters because engineered Human tasks may be teaching perception, not requesting a clean layout. A rough or wrong pass can still be valuable if it reveals the inference gap.

## Shape See / Material Feedback Loop

Labs can make shape or material attempts to express how it reads a surface.

This is a no-fail creative calibration loop. The goal is not to be right on the first pass. The goal is to make the current read visible enough that Human feedback can calibrate it.

Human feedback should be read as sensory correction, not punishment. If Human says a pass feels wrong, too flat, too merged, too spacious, too cramped, too literal, or missing the intended material, that is useful evidence about the gap between Labs' inference and Human read.

Mismatch is valuable because it shows what problem Labs thought it was solving, what problem Human was actually posing, and which visual/material relationship needs a better handle.

Portable lessons should be recorded as small reusable observations:

- what Labs tried to express
- what Human saw instead
- what relationship or material was clarified
- what future pass should preserve, avoid, or test

These lessons are not product authority. They are not final UI, source-project adoption, implementation requirements, bridge/runtime contracts, or UI/UX acceptance. They are workshop memory for improving how Labs and Human reason together through Shape See.

## Current Lessons

### Meaning Stays Elsewhere

Use `#NN` handles on the board when source meaning needs protection.

The source project artifact owns the meaning. Pane Board arranges relationships.

### Place The Read, Then Wrap The Frame

Do not start by inventing a large outer box and forcing pieces to fit.

First let the active parts find their relationship. Then wrap the context frame around the settled form.

### Trim Means Fit, Not Delete

When Human says "trim," first look for dead space and over-large envelopes.

Do not assume the Human wants the context object removed.

### Context Frames Should Back The Read

A context frame such as `#01` may need to sit behind the active parts.

If it is visually foregrounded, it can compete with the read instead of documenting the boundary.

### Scale Is Data-Form, Not Pixel Commitment

Pane Board size can represent relative data form:

- long value slots may need more width
- compact numeric values can be smaller
- derived values can be quieter
- shadow/context panes can be lower weight

This is not production dimension, responsive behavior, or component scale.

### Parent And Support

A subject part can act as a parent for support values.

For the Sense Passive Telemetry test, the stronger shape was:

```txt
#02 as wide subject parent
#05 and #06 as compact support values
#07 smaller/quieter as derived support
```

This reads better than a flat row when the subject gives meaning to the support values.

### Quiet Does Not Mean Exiled

A quiet or derived value does not always belong at the end or outside the group.

It can sit smaller inside the support cluster so it remains related without becoming dominant.

### Almost Is A Signal

Humans notice near-alignment, near-symmetry, and almost-right spacing strongly.

If the board feels wrong but not obviously broken, check:

- mismatched centers
- uneven group rhythm
- an envelope with too much dead space
- a support row too detached from its parent
- a frame competing with its contents

### Motion Creates Attention

Recently moved parts are attention-hot.

When Human gives a short instruction after moving something, bias toward the recently moved object as the referent.

### Notes Belong Beside Shapes

Use the screen note to record current questions, shape intent, or why a sketch matters.

Do not turn every thought into a pane.

### Lead With Cooperative Visual Audit

Before interpreting a mismatch, describe the whole visible read and ask Human intent.

Useful pattern:

```txt
I see [whole arrangement].
[Specific part] reads [tension].
Was that intentional, or should we adjust it?
```

This keeps Labs from turning a simple spatial issue into an unnecessary theory.

Treat Human placement as intentional, but not infallible. The point is not to correct the Human or defend the agent. The point is to observe objectively, surface possible read mismatches, and solve together.

If the pieces are not enough to know, say so. "I do not know yet" is a stabilizer in Shape See, not a failure state.

Discussion should lead into action, but through a cooperative audit first:

```txt
describe the whole
name the visible tension
ask whether it is intentional
then adjust, capture requirement, or park the lesson
```

## Suggested Record For A Useful Sketch

When a sketch seems useful, preserve:

- source meaning artifact path
- Pane Board JSON state
- screenshot path
- `#NN` handles used
- Human liked/adapted/parked/rejected signal
- one short note on what relationship the shape proved
- one short note on what Labs learned

## Current Formula Candidate

For a first Shape See pass:

```txt
1. Use source-owned #NN handles.
2. Place the primary subject first.
3. Add support values near it.
4. Reduce derived or risky values until they support without leading.
5. Check for flat-row behavior.
6. Let Human adjust for feel.
7. Wrap or trim the context frame after the active group settles.
8. Record the shape, not as UI, but as relationship evidence.
```

This formula is provisional. Update it as Human and Labs find better moves.
