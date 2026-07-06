# Agent Notes

## Naming Conventions

- Use `lowerCamelCase` for JavaScript variables, functions, composables, and data object keys.
- Use descriptive names that reflect meaning, not implementation details.
- Avoid typo-prone names and mixed casing such as `HighLight`, `tlSrtart`, or `pFisrtDate`.
- Prefer singular, semantic names for props and helpers when possible, for example `title`, `subtitle`, `items`, `color`, `description`, `releaseYear`.
- Use kebab-case in Vue templates when binding props, for example `:detail-link="..."`.
- Keep derived UI state out of source content files. Normalize data in composables or helper modules.

## Formatting Preferences

- Use ASCII unless the file already depends on non-ASCII text.
- Prefer `const` and `let` over `var`.
- Keep components focused on rendering. Put filtering, mapping, grouping, and derivation into composables.
- Avoid mutating imported data directly.
- Keep template bindings readable and consistent.
- When renaming a field or prop, update all consumers in the same change.

## Content Rules

- Treat `portfolio.db` as the source of truth for structured project and experience metadata.
- Treat JSON files under `src/assets/` as generated output. Regenerate them with `npm run export:content` instead of editing them directly.
- Keep narrative content in Markdown files under `src/content/`.
- Use semantic slugs to associate database metadata with Markdown sections and for application lookups.
- Name project Markdown files after the matching database slug.
- Use an optional `section:highlight` section in project Markdown for featured-card copy.
- Use a positive `highlightOrder` to feature a project; leave it `NULL` otherwise.
- Name project detail routes after the matching database slug.
- Use `game`, `tool`, or `app` for project type values.
- If a legacy field name exists, normalize it when touching the file and update the code to match.
- Use one canonical field name for each concept across the repo.
