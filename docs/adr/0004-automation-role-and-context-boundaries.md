# ADR 0004 - Automation Role And Context Boundaries

Date: 2026-05-27
Status: Accepted

## Context

Aura Lab briefly tested a Codex heartbeat automation for Pane Board correspondence.

The intended behavior was small and bounded:

```txt
Every few minutes, check Pane Board state.
If a Human note or board command changed, write a Labs note.
Otherwise stay quiet.
```

The automation stayed within the requested file boundary, but it still exposed a larger workflow problem:

- it triggered inside the active Overseer thread
- it pulled the current assistant posture toward the Pane Board Labs helper role
- it wrote heartbeat memory as a background action
- it could have polluted context for the Overseer conversation
- it acted on a schedule rather than a clear Human-triggered event

This makes the issue larger than file safety. The risk is role/context contamination.

## Decision

Do not run role-specific work heartbeats in the main Overseer thread.

Scheduled or proactive automations may be used later, but only when they are:

- role-isolated
- explicitly triggered or clearly scoped
- cheap and quiet by default
- unable to mutate project authority
- unable to confuse the current thread role
- easy for the Human to pause or delete

The paused Pane Board Labs heartbeat is not accepted as a durable workflow.

## Automation Classes

### Allowed With Strong Gates

- reminder-style Human prompts
- read-only status checks
- terminology assurance checks over named files
- explicit board-local response checks in a dedicated thread
- manual "check now" workflows

### Not Allowed By Default

- role-specific work inside another role's thread
- background writes to active project state
- scheduled Dev-like work
- automatic `workspace/current.md` updates
- automatic prompt dispatch
- automatic cross-project scanning
- prompt garden ingestion
- anything that can change project authority or role posture

## Acceptance Criteria For Future Automation

Before opening or enabling a future automation, the owning Overseer should be able to answer yes to all of these:

- The automation has one named role and cannot masquerade as another role.
- It runs in a dedicated thread or context when role contamination is possible.
- It has an explicit trigger, such as Human request, `@role`, named command, or manual "check now".
- It has a clear no-op path that performs no writes.
- It names the exact files or folders it may read.
- It names the exact files or folders it may write.
- It cannot edit `workspace/current.md` unless the Human explicitly opens that as the task.
- It cannot create Dev runways.
- It cannot run git, live, private, destructive, or network actions unless explicitly authorized.
- It reports when it writes.
- It is easy to pause or delete.
- It has a stale/obsolete condition so it does not keep running after its purpose ends.

## Preferred Future Pattern

For Pane Board:

```txt
Human writes @labs or creates a board-local command.
Labs helper checks only when explicitly requested or in a dedicated helper thread.
Labs helper writes only to board-local note lanes or command status.
```

For Wayfinder:

```txt
Human requests a role lane.
Wayfinder shows the request and current picture.
Role-specific helper responds in its own lane or thread.
Human decides whether anything becomes project work.
```

For terminology assurance:

```txt
Human or Overseer names the project/files.
Automation reads current state and terminology references.
It produces advisory synthesis only.
No automatic renames or protected-word updates.
```

## Consequences

Accepted:

- The Pane Board Labs heartbeat was paused.
- Stale heartbeat-local memory should not be treated as durable project state.
- Wayfinder may later explore role-request lanes, but only behind explicit user-driven gates.

Required:

- keep Overseer threads clean from role-specific work heartbeats
- prefer manual or event-driven checks over scheduled background action
- treat automation as a helper, not an agent runner

## Non-Goals

- Do not ban all automations.
- Do not block future Wayfinder role lanes.
- Do not prevent Human-requested reminders or monitors.
- Do not create a universal automation framework from this ADR.

## Related Decisions

- `docs/adr/0003-shared-visual-thinking-surfaces.md`

