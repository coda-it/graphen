# AGENTS.md

## Scope

These rules apply to the whole Graphen repository. Graphen is a reusable React and SCSS UI library, so changes should preserve the public component API, exported styles, and downstream compatibility unless a breaking change is explicit.

## Branches

Name branches after their Jira ticket key, e.g. `CODA-31`. The PR's Business justification link below is derived from this name, so non-ticket names like `chore/foo` produce broken links.

## Pull Requests

PR titles must follow the pattern `<JIRA ticket number> - <JIRA Title>`, e.g. `CODA-31 - Remove Flop type`. Use the ticket key from the branch name and the summary from the Jira ticket.

PR bodies must follow the repo's template at `docs/PULL_REQUEST_TEMPLATE.md`, using its exact headings in order:

- **Business justification:** - link to the Jira ticket: `https://codait.atlassian.net/browse/<branch-name>` (substitute the current branch name).
- **Description:** - what changed and why. Call out public API changes, style contract changes, dependency changes, and compatibility notes.
- **Visual overview:** - screenshots or recordings for component, style, documentation, or example-page changes; otherwise `N/A`.

GitHub does not auto-apply the template to `gh pr create --body`, so fill these fields in manually on every PR.

Before opening a PR, check `git status` and include only intentional changes. Generated `public/`, `docs/public/`, `dist/`, and changelog artifacts should be committed only when the release or documentation workflow intentionally regenerates them.

## Architectural Decisions

Record decisions that affect Graphen's public API, styling conventions, package structure, build process, or compatibility expectations as ADRs in `docs/adr`.

Use numbered filenames with a short kebab-case title, e.g. `docs/adr/0002-component-style-ownership.md`. Each ADR should include Status, Date, Context, Decision, and Consequences.

## Coding Standards

### General

* Check the existing components, variables, mixins, and mix classes before adding a new public primitive.
* Prefer extending Graphen's established conventions over adding one-off patterns.
* Preserve backwards compatibility for component props, exported symbols, CSS class names, SCSS variables, mixins, and generated assets unless the ticket explicitly allows a breaking change.
* Do not add comments unless they clarify non-obvious behavior or a compatibility constraint.
* Keep public components small, focused, and easy to compose.
* Avoid product-specific copy or application-specific behavior in library components.
* Cover changes with the relevant checks: `make lint` for TypeScript, ESLint, Prettier, and stylelint; `make example` for example/documentation updates; `make integration-test` for behavior that should be verified through the example app; `npm run build:prod` for package build changes.

### React / TypeScript

* Use full descriptive variable, prop, and type names.
* Keep component props explicit and typed in the component file unless a shared exported type is genuinely reused.
* Export new public components from `src/index.ts` and add declaration coverage in `src/index.d.ts` when needed.
* Use `classNames` for conditional classes.
* Keep accessibility attributes and keyboard behavior in mind for interactive primitives.
* Do not couple library components to the example app.

### Stylesheets

* Use BEM for class names.
* Public component classes use the `gc-` prefix.
* Branding variables use the `gb-` prefix; existing global responsiveness variables use `g-`; mix classes use `gm-`; shared mixins use `gx-`; component-local mixins may use the established `cx-` pattern.
* Reuse existing variables, shadows, sizes, typography, responsiveness mixins, and component mixins before introducing new design tokens.
* Put component styles under `src/components/<Component>/styles/` and import them from `src/style.scss`.
* Use SCSS `&` and nesting instead of repeating names, e.g. `.gc-btn { &__icon {} }`.
* Keep skinning and layout concerns separated where practical: base block styles should be stable, modifiers should express variants.

### Documentation and Examples

* Update the example app when adding or changing a user-visible component state, modifier, or usage pattern.
* Update README or docs when installation, customization, release, or public usage changes.
* Include visual evidence in the PR for visual changes, preferably from the example app.
