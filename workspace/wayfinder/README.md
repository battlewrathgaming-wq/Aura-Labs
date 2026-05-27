# Aura Wayfinder Workspace

Status: scaffold only
Owner: Human / Overseer direction
Boundary: Lab-local coordination visibility concept

## Purpose

Aura Wayfinder is a proposed Lab-local visual orientation tool for the Human.

It should make the agent-supported Aura ecosystem easier to understand at a glance without becoming an authority system.

First useful questions:

- Where are the projects right now?
- What needs a decision?
- What specialist advice exists?
- What is active, parked, or historical?
- What current picture should the Human see before asking for the next move?

## Early V1 Shape

The likely first useful shape is a Coordination Glance Board:

- Current State Strip
- Next Gate Queue
- Specialist Advice Tracker
- Seed Case Collector

## Source Of Truth

Wayfinder may later read or reference:

- project `workspace/current.md`
- project handoff artifacts
- project roadmap files
- Orchestration workflow records
- Human or Overseer-authored summary notes

Wayfinder does not own those sources.

## Prompt Garden Boundary

The prompt garden should stay siloed.

Wayfinder may later show prompt pack names, paths, metadata, or short Human-authored summaries. It must not bulk-ingest prompt bodies, merge prompts, rewrite prompts, or treat prompts as current project truth by default.

## Authority Boundary

Wayfinder is not:

- a project authority
- a replacement for Overseer
- a replacement for `workspace/current.md`
- a Dev runway
- an agent runner
- an automatic project editor
- a universal doctrine source
- Relay / input-output firewall ownership

## Draft Folder Shape

Future work may add:

```txt
workspace/wayfinder/
  current-picture/
  seed-cases/
  captures/
  notes/
```

Do not create these folders until a packet needs them.

## Current State

This folder only records the concept boundary. No active Wayfinder task is open.

