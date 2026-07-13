# ADR 0002: JS-anchored fixed positioning for the navigation submenu

## Status

Accepted

## Date

2026-07-13

## Context

`Navigation` renders a single horizontal row (`white-space: nowrap`), so consumers place it inside a horizontally scrollable header container on narrow viewports. The submenu opened by `NavigationOption` was styled with `position: absolute` and no offsets.

Two constraints shaped earlier iterations (CODA-79):

- The submenu must not have a positioned ancestor inside `gc-navigation`, because consumer headers with `overflow` would clip it.
- Submenu open state lives in JS (`NavigationOption`), not in CSS hover.

Without a positioned ancestor, an absolutely positioned submenu resolves to its static position. When the consumer scrolls the navigation row horizontally, the submenu renders where the parent option sits in the scrolled content and gets clipped at the viewport edge instead of staying visible under its parent.

## Decision

The submenu is anchored with JavaScript and rendered with `position: fixed`.

On open, `NavigationOption` measures the trigger with `getBoundingClientRect()` and applies inline `top`/`left` to `.gc-submenu`: `top` is the trigger's bottom edge, `left` is the trigger's left edge clamped to the viewport with a 10px margin (matching `$spacing-large`). While the submenu is open, the component listens to `resize` and capture-phase `scroll` events on `window` — the capture phase catches scrolling inside consumer overflow containers — and repositions the submenu.

The submenu stays in the DOM inside its `<li>` (no portal), so the existing blur-based focus containment and Escape handling keep working unchanged. The public component API, class names, and markup structure are unchanged.

## Consequences

The submenu follows its parent option in any scroll container and never overflows the viewport, because `position: fixed` positions against the viewport regardless of ancestor overflow.

The CODA-79 constraint still holds: `gc-submenu` must not gain a positioned ancestor inside `gc-navigation`, and its coordinates are owned by `NavigationOption`, so stylesheets must not set `top`/`left` on it.

New constraint for consumers: an ancestor with `transform`, `filter`, `backdrop-filter`, or similar properties becomes the containing block for `position: fixed` and breaks submenu positioning. Consumer headers wrapping `Navigation` must not apply such properties to ancestors of the navigation.
