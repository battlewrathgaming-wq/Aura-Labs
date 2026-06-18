# Trace Impression Quality Indicators

Status: Overseer-only review aid

Stop here if you are not acting as Project Overseer.

This file is not part of the normal Trace Impression operator read path.

Do not use this file while performing a blind or fresh-agent behavior test.

Do not use this file to improve a map during generation.

Return to your expected workflow.

## Purpose

This file helps Overseers review Trace Impression outputs after a run.

It names common quality signals, where to inspect them, and which local surfaces usually improve future trace behavior.

This is not ritual, an expected verification pass, or routine runtime.

Use it as quality assurance when the accuracy of Trace Impression is in question.

It is not governance, a Dev runway, a required operator input, or a map template.

## Review Posture

Review the output after it exists.

Do not ask whether the map is perfect.

Ask:

- did the agent preserve the seam?
- did confidence match inspected basis?
- did gaps stay visible?
- did the output avoid claiming authority?
- did it show where calibration should improve?

## Healthy Signals

Healthy Trace Impression behavior usually includes:

- seam is named from `workspace/current.md` or explicit Human / Overseer instruction
- context names enough local purpose and source boundaries
- claims carry source basis or clear confidence labels
- gaps remain visible
- confidence ceiling matches inspected material
- output does not create work, authority, target adoption, or Dev authorization
- run log records the run shape and limitation

Review surfaces:

- `workspace/current.md`
- `workspace/trace-impression/context.md`
- output map or frame
- `workspace/trace-impression/current/run-log.md`

## Limited But Usable Signals

Limited but usable behavior usually includes:

- context is thin but seam and safe local source folders are clear
- output lowers confidence instead of over-claiming
- output is limited or gap-labeled
- source inspection is required before stronger claims
- target/runtime/adoption claims remain excluded

Review surfaces:

- `workspace/trace-impression/context.md`
- `workspace/current.md`
- output confidence ceiling
- output source basis appendix or source basis notes
- `workspace/trace-impression/current/run-log.md`

Possible Overseer calibration:

- strengthen `context.md` with project purpose, preferred sources, avoid areas, must-never-infer rules, and validation owner
- clarify the current seam in `workspace/current.md`
- leave the output limited if the limitation is acceptable

## Stop / Block Signals

Stop or block behavior is appropriate when:

- seam conflicts with `workspace/current.md`
- context contradicts inspected source
- no safe local source path is named
- target-project inspection would be required without authority
- archived docs are needed as active truth
- output would require guessing project meaning
- Human chat is the only basis for project state

Review surfaces:

- `workspace/current.md`
- operator request or handoff prompt
- `workspace/trace-impression/context.md`
- output blocked note
- source paths named by the output

Possible Overseer calibration:

- repair `workspace/current.md` if the seam is stale or unclear
- repair `context.md` if local trace behavior is under-specified
- ask the Human for the missing seam or authority boundary
- keep the blocked output instead of forcing a weak map

## Low Confidence Review

Low confidence is not failure.

It is useful when the map clearly names what basis is missing.

Review points:

- `context.md`: does it name local purpose, seam boundaries, preferred sources, avoid areas, and must-never-infer guidance?
- `current.md`: is the seam actually named or inferable from active state?
- output map: did it lower confidence correctly?
- source citations: are claims backed by inspected source, or only docs/inference?
- run log: did it record the limitation?

Possible Overseer calibration:

- fill minimal local context
- narrow the seam
- request a focused source trace
- accept the lower confidence if it is sufficient for orientation

## Mismatch Review

Mismatch appears when the operator request, current packet, context, and inspected source do not point to the same seam.

Review points:

- `workspace/current.md`: does the requested seam match current focus?
- operator prompt/request: did it ask for something else?
- `workspace/trace-impression/context.md`: does local trace behavior conflict with the request?
- output: did the agent stop, narrow, or invent?

Possible Overseer calibration:

- update `current.md` if the project focus changed
- provide explicit Human / Overseer seam instruction
- reject or archive an output that mapped the wrong seam

## Boundary Bleed Review

Boundary bleed appears when the map starts treating another project, runtime, adapter, or source meaning as if it belongs to the current project.

Review points:

- output map: did target-project terms become local claims?
- source citations: did the map inspect target projects without authority?
- `context.md`: are avoid areas or must-never-infer rules missing?
- `current.md`: was cross-project scope explicitly opened?

Possible Overseer calibration:

- add avoid areas to `context.md`
- strengthen must-never-infer rules
- clarify target-owned terms in local critical terms
- keep cross-project material as non-local reference only

## Archive / History Review

Archive drift appears when old handoffs, historical maps, or previous frames start competing with current state.

Review points:

- output map: did it treat archive/history as active truth?
- `workspace/current.md`: does current state actually reopen that material?
- trace history: was a previous frame used only for comparison and recovery?
- current output: are movement classes separated from interpretation changes?

Possible Overseer calibration:

- mark old frames as comparison-only
- move stale outputs into history
- repair `current.md` if it references an old state ambiguously
- use comparison classes: `source-body-change`, `support-context-change`, `interpretation-change`, `map-framing-change`, `unknown-change`

## Surfaces That Improve Trace Quality

When a trace struggles, improve the smallest relevant surface:

| Surface | Improves |
| --- | --- |
| `workspace/current.md` | seam focus, active state, stop conditions |
| `workspace/trace-impression/context.md` | local trace behavior, project terms, source boundaries, avoid areas |
| trace templates | repeatable output structure |
| run log | audit trail and rerun discipline |
| local critical terms | terminology boundaries and protected meanings |
| project overview | surrounding terrain, not primary proof |
| accepted docs/statements | stable project context |

Do not improve every surface at once.

Calibrate the surface that caused the observed weakness.
