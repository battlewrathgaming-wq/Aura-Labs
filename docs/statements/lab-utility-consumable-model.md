# Lab Utility Consumable Model

Status: Accepted project outline
Date: 2026-06-15

## Purpose

This page defines how Aura Lab should think about reusable utilities and shelf-stable outputs.

It applies to Lab-built tools and packages such as presentation glass, future trace/source-map workbenches, and other local utilities that may be useful across Aura projects.

It is not a Dev runway, target adoption record, universal contract, source-project doctrine, or promise that Lab will maintain every consumed output.

## Core Model

```txt
Lab builds reusable local utilities.
Projects consume a useful version when ready.
The consumed version runs locally.
The project owns any output it generates.
```

The short rule:

```txt
A Lab utility travels as a consumable version, not as a continuing Lab-owned service.
```

## Ownership

Lab owns:

- development of the utility while it is being shaped
- the reusable reference package or shelf-stable version
- Lab-local documentation, boundaries, and verification expectations
- future improvements as new offers

The consuming project owns:

- whether to consume the utility
- local setup and local use
- any generated project-local artifacts
- artifact freshness, acceptance, parking, refresh, or retirement
- all source meaning, product meaning, adapter behavior, runtime behavior, and project doctrine

Lab does not automatically own project-local generated outputs after a utility is consumed.

## Use

A safe consumption flow is:

1. Lab makes a utility or package shelf-stable enough to offer.
2. A project chooses whether the utility helps.
3. The project runs or imports the consumed version locally.
4. The utility produces local output, examples, references, or pressure evidence.
5. The project reviews the output under its own authority.
6. The project accepts, adapts, parks, refreshes, or discards the output.

Future Lab updates are offers, not obligations. A target project may stay on a useful version, adapt it locally, or decline the next offer.

## Examples

Presentation glass:

```txt
Lab provides the window.
The project owns what it shows.
```

Trace/source-map workbench:

```txt
Lab provides the lens.
The project owns the trace it produces.
```

## Trace Workbench Shape

A future trace/source-map utility should follow this shape:

```txt
bounded source question
-> source-cited trace impression
-> durable project-local reference
-> owning project review
```

It should help answer:

- Where does this start?
- What calls what?
- What changes the data?
- Where is it stored?
- What is derived or rebuilt?
- What is shown?
- What is logged?
- What is not proven from source?

Trace for understanding. Cite source for trust. Return meaning to the owning project.

## Shelf-Stable Criteria

A Lab utility is ready to offer only when it has:

- a clear local launch or use path
- a named purpose and non-goals
- no hidden target-project authority claim
- no source-project meaning claim
- output ownership stated plainly
- bounded verification or smoke expectations
- a known disposable/generated-output policy, if it writes files
- a version or reference path that can be named in handoff

## Non-Goals

This model does not create:

- a Lab-owned service desk
- a central maintenance obligation
- target-project authority
- source-project doctrine
- universal adapter behavior
- universal bridge/runtime schema
- automatic adoption
- a hidden backlog from generated outputs

Generated utility output is evidence for review. It is not accepted project truth until the owning project says so.

