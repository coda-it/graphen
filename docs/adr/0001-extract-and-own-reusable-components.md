# ADR 0001: Extract and own reusable Graphen components

## Status

Accepted

## Date

2026-07-12

## Context

Graphen is a shared UI library. Component changes can affect multiple downstream applications through React exports, CSS class names, SCSS variables, mixins, bundled assets, and generated documentation.

Reusable UI can become harder to maintain when behavior, styles, example-only markup, and public exports are changed without a clear ownership boundary. A component may start as a small addition to the example app or as repeated markup inside another component, but once it represents a reusable UI primitive it needs the same structure and compatibility expectations as the rest of the library.

## Decision

Reusable UI primitives should be extracted into named components under `src/components/<Component>`.

Each public component should keep its React implementation in `src/components/<Component>/index.tsx`. Component styles should live under `src/components/<Component>/styles/` and be imported from `src/style.scss`.

Public component classes use BEM with the `gc-` prefix. Variants should be represented as modifiers such as `gc-btn--primary` rather than unrelated class names. Component-specific styles should reuse existing branding variables, mixins, shadows, sizes, typography, and responsiveness helpers before adding new tokens.

When a component becomes part of the public package API, export it from `src/index.ts` and update TypeScript declaration coverage in `src/index.d.ts` when needed. New or changed public usage patterns should be represented in the example app so they can be reviewed visually and exercised by integration tests.

Extract a component when a UI section has one or more of these properties:

- It is reused or likely to be reused by downstream applications.
- It has meaningful variants, state, accessibility behavior, or event handling.
- It owns a stable BEM block and style contract.
- It would otherwise add unrelated complexity to another component or the example app.

Do not extract tiny one-off markup that has no independent behavior, style contract, or reuse value. Do not move application-specific workflows, product copy, routing, data fetching, or business rules into Graphen components.

## Consequences

Graphen components keep a predictable structure, making exports, styles, examples, and generated package output easier to review.

The public CSS and React API remain visible during review, which reduces accidental downstream breaking changes.

Some additions require updates in multiple places: component implementation, styles, `src/style.scss`, exports, declarations, examples, and tests. That cost is acceptable for reusable primitives because it keeps package behavior explicit.

Refactors should preserve existing component props, exported symbols, CSS class names, SCSS variables, mixins, and generated assets unless the change is intentionally breaking and documented in the PR.
