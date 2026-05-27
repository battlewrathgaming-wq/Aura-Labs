# Aura Wayfinder Main Tooling

Status: scaffold only
Boundary: Lab-only tooling

## Purpose

Aura Wayfinder is a proposed Lab-local coordination visibility tool.

Its job is to help the Human see the current picture across Aura projects: project state, next gates, advisory work, and seed cases. It is an orientation surface, not an authority layer.

## Boundary

This folder is reserved for future main-process code if Wayfinder becomes an executable Lab tool.

Wayfinder must stay separate from:

- the clean presentation head
- Pane Board implementation
- project `workspace/current.md` authority
- source-project meanings
- prompt garden contents
- Relay / input-output firewall concepts

## Allowed Future Responsibilities

Future main-process code may support:

- explicit Lab-only Wayfinder launch
- read-only project file checks
- file-backed Wayfinder state
- local capture or snapshot records
- safe path opening when explicitly requested

## Not Allowed By Default

Wayfinder main-process code must not:

- edit project `current.md` files automatically
- run agent prompts
- mutate Atlas, Sense, Core, or Orchestration state
- ingest or merge the prompt garden
- become an agent runner
- create authority decisions
- create bridge/runtime contracts

## Current State

No runtime code lives here yet.

