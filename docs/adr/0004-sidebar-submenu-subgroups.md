# ADR 0004: Sidebar collapsible sub-groups

## Status

Accepted

## Date

2026-07-27

## Context

The `Sidebar` family (ADR 0003) is a flat list of `SidebarOption` items grouped
under titled `SidebarGroup` sections. Application shells built on Graphen now
need a second level of navigation: a parent item that expands to reveal its own
child items (e.g. "Posts" → All posts / Drafts / Scheduled), with the group
collapsing and expanding in place.

Reusing `SidebarGroup` was rejected — it is a static, always-open, label-only
section with no interactive header, active state, or collapse behaviour, and it
cannot host the accent/caret affordances a nested, toggleable parent needs.
Overloading `SidebarOption` with nested children was also rejected — an option
renders as a single `<a>`/`<button>`, so its expandable region has to live as a
sibling, not a descendant, of the clickable header.

## Decision

Add two additive, presentational components on the existing `gc-sidebar` block,
plus a small expansion affordance on `SidebarOption`:

- `SidebarOption` gains `isExpandable` and `isExpanded`. When `isExpandable` is
  set it always renders as a `<button>` (never a link), draws a rotating caret
  (`gc-sidebar__option-caret`, `--expanded` rotates it), suppresses its own
  `count`, and exposes `aria-expanded`. Existing options are unaffected.
- `SidebarSubmenu` — the `gc-sidebar__block` wrapper. It renders an expandable
  `SidebarOption` header and a `gc-sidebar__subnav` region (animated with a
  `grid-template-rows: 0fr → 1fr` transition) holding the children. Props:
  `label`, `icon`, `badge`, `isActive`, `hasActiveChild` (adds
  `gc-sidebar__option--branch`), `isExpanded`, `onToggle`, `children`.
- `SidebarSubOption` — a child item (`gc-sidebar__suboption`) with an indented
  left connector rail, `isActive`, optional `count`, and either an `href`
  (`<a>`) or `onClick` (`<button>`).

Expansion and active state stay presentational props owned by the consumer,
matching ADR 0003. Styling reuses existing tokens (`$gb-color-primary`,
`$gb-color-info-soft`, `$gb-color-separator`, `$gb-color-disabled`,
spacing/radius/mono-font variables); no new design tokens are introduced. In the
collapsed rail the caret and sub-navigation are hidden. All three exports live in
`src/index.ts` and reuse the single `gc-sidebar` style namespace.

## Consequences

Graphen gains a two-level sidebar without a new block namespace or any change to
existing components, classes, or variables — the surface grows by two exports
(`SidebarSubmenu`, `SidebarSubOption`) and two additive `SidebarOption` props, so
downstream compatibility is preserved.

Because the collapse animation relies on `grid-template-rows` interpolation, the
sub-navigation stays in the DOM when closed; the toggle exposes `aria-expanded`
so assistive tech still reports the collapsed/expanded state. Consumers own the
expanded and active state and decide when a parent reads as active
(`isActive`) versus merely containing the active child (`hasActiveChild`).
