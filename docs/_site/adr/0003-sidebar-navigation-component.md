# ADR 0003: Sidebar navigation component family

## Status

Accepted

## Date

2026-07-26

## Context

`Navigation` and `NavigationOption` cover horizontal, top-of-page navigation. Application shells built on Graphen increasingly need a vertical, left-hand navigation rail: grouped sections, per-item icons, counts and badges, an active state, a bottom-pinned footer, and an optional collapsed icons-only mode.

Reusing `Navigation` was rejected — it is a single `white-space: nowrap` row whose submenu positioning (ADR 0002) is specific to horizontal, scrollable headers, and stretching it to a vertical rail would overload its API and markup.

## Decision

Add a dedicated, composable `Sidebar` family that mirrors the `Navigation` / `NavigationOption` split and shares a single BEM block (`gc-sidebar`), the same convention `NavigationOption` uses against `gc-navigation`:

- `Sidebar` — the `<nav>` rail container. `isCollapsed` toggles `gc-sidebar--collapsed`, which shrinks the rail, hides group labels and item text/counts/badges, and reveals a hover tooltip per item.
- `SidebarGroup` — a titled section (`gc-sidebar__group`, `gc-sidebar__group-label`).
- `SidebarOption` — an item (`gc-sidebar__option`). Renders an `<a>` when `href` is set, otherwise a `<button type="button">`. Supports `icon`, `isActive` (adds the accent bar and `aria-current="page"`), `count`, `badge`, and `onClick`.
- `SidebarFooter` — a bottom-pinned section (`gc-sidebar__footer`, pushed down with `margin-top: auto`).

Styling reuses existing Graphen tokens (`$gb-color-primary`, `$gb-color-info-soft`, `$gb-color-component`, `$gb-color-separator`, `$gb-color-success`, spacing/radius/shadow/mono-font variables) rather than introducing new design tokens; only the two rail widths are component-local SCSS values. All four components are exported from `src/index.ts` and their styles imported from `src/style.scss`.

## Consequences

Graphen gains a reusable left-sidebar primitive that composes like the rest of the library and inherits brand tokens automatically. The public surface grows by four exports and one new `gc-sidebar` class namespace, all additive — no existing component, class, or variable changes, so downstream compatibility is preserved.

Collapse is a presentational prop only; consumers own active state and any responsive show/hide of the rail. Because the collapsed tooltip and active accent bar are plain CSS (no fixed positioning), the ADR 0002 containing-block constraint does not apply here.
