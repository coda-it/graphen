# CLAUDE.md

## Branches

Name branches after their Jira ticket key, e.g. `CODA-31`. The PR's Business justification link (below) is derived from this name, so non-ticket names like `chore/foo` produce broken links.

## Pull Requests

PR titles must follow the pattern `<JIRA ticket number> - <JIRA Title>`, e.g. `CODA-31 - Remove Flop type`. Use the ticket key from the branch name and the summary from the Jira ticket.

PR bodies must follow the repo's template at `docs/PULL_REQUEST_TEMPLATE.md`, using its exact headings in order:

- **Business justification:** — link to the Jira ticket: `https://codait.atlassian.net/browse/<branch-name>` (substitute the current branch name).
- **Description:** — what changed and why.
- **Visual overview:** — screenshots for UI changes, otherwise `N/A`.

GitHub does not auto-apply the template to `gh pr create --body`, so fill these fields in manually on every PR.

## Coding Standards

### General
* Before implementing a new component, check if it is already available in the [graphen](https://github.com/codait/graphen) library or within shared components.
* Don't comment unless there is a good reason to.
* Fallback translations should be in English.
* Always use localization for text.
* Always cover pull requests with relevant front-end, back-end and e2e tests.

### Stylesheets
* Use BEM for class names.
* Reuse [graphen](https://github.com/codait/graphen) styles unless there is a good reason not to.
* Local styles should be prefixed with `l-` (it applies to styles and CSS variables).
* Use SCSS `&` and nesting instead of repeating names (ex. `.mystyle &__child` instead of `.mystyle .mystyle__child`)

### JavaScript / TypeScript
* Use full descriptive variable names.

### Go
Controllers should be placed in the `controllers` package and each method should be in its own file (named after the method)
