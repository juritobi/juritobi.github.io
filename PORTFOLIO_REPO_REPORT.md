# Portfolio Repository Report

## Executive Summary

This repository is a static portfolio site built with Vue 3 and Vite, styled with Bootstrap plus a large custom CSS layer, and deployed like a GitHub Pages site. The main portfolio content is now split between structured local data files and markdown content files, with the page components acting mostly as renderers.

The biggest maintenance gains already made are moving derived data into composables, normalizing field names, and replacing several hard-coded content blocks with markdown files. The remaining work is mostly about cleanup, consistency, and validation.

## How The Site Is Built

### Core stack

- Vue 3 (`vue`)
- Vue Router 4 (`vue-router`)
- Vite as the build tool
- Bootstrap 5 for layout and base components
- Font Awesome for icons
- ESLint + Prettier for formatting/linting

### App entry points

- `src/main.js` mounts the Vue app, registers Vue Router, registers Font Awesome, and loads Bootstrap JS/CSS.
- `src/App.vue` is very small and only renders `<router-view />`.
- `src/router/index.js` defines 3 routes:
  - `/` -> main portfolio page
  - `/katto` -> detailed Katto page
  - `/copperfield` -> detailed Copperfield page

### Page composition

The main landing page is assembled in `src/views/MainView.vue` from reusable sections:

- `MainHeader`
- `AboutSection`
- `ExperienceSection`
- `PortfolioSection`
- `SkillsSection`

The detailed project pages are separate Vue views:

- `src/views/KattoView.vue`
- `src/views/CopperfieldView.vue`

## Repository Layout

### Main portfolio app

- `src/components/Headers/` contains the top header, nav, and contact link UI.
- `src/components/Sections/` contains the page sections.
- `src/components/Containers/` contains higher-level layout/aggregation components.
- `src/components/Cards/` contains the reusable card-like presentation components.
- `src/components/layouts/` contains wrapper layouts for sections and detail pages.
- `src/components/TabsSystem/` implements the custom tab navigation used by the portfolio section.
- `src/assets/` contains the portfolio data, images, CSS, and PDF resume asset.

### Deployment files

- `deploy-gh-pages.sh` and `deploy-gh-paged.bat` are deployment helpers.
- `CNAME` suggests the site is configured for a custom domain.
- `vite.config.js` sets the Vite base to an empty string, which is suitable for root-based deployment.

## How Data Is Managed

### Main portfolio data

The site does not use a backend API or a live database. Structured metadata is maintained in `portfolio.db`, exported to local JSON during the build, and rendered at runtime.

- `src/assets/portfolio.json` stores project metadata for the portfolio cards.
- `src/assets/db.json` stores work experience / timeline entries.
- `src/content/sections/about.md` stores the About section copy.
- `src/content/views/katto.md` and `src/content/views/copperfield.md` store both long-form project writeups and optional featured-card sections.

## What The Data Flow Looks Like

### Portfolio section

`src/components/Containers/ExperienceTabs.vue` consumes normalized project data from a composable. Projects are grouped by `type`, filtered by `display`, and featured projects are sorted by `highlightOrder`.

`src/components/Cards/ProjectCard.vue` receives each project entry as props and renders links based on optional fields such as `codeLink`, `videoLink`, and `downloadLink`.

### Experience section

`src/components/Sections/ExperienceSection.vue` imports `src/assets/db.json` through a composable, calculates timeline positions from dates, and returns derived view data without mutating the source array.

`src/components/Containers/ExperienceGroup.vue` then filters the same dataset again by `role` and renders cards for each category.

## Maintenance Risks And Technical Debt

### 1. Scroll listener cleanup is still awkward

`src/components/Headers/NavBar.vue` adds a scroll listener on mount but removes it in `onBeforeMount`, which is the wrong lifecycle hook for cleanup.

Why this is risky:

- The listener may remain attached longer than intended.
- It is easy to introduce duplicate listeners if the component is refactored later.

### 2. Some navigation is still string-based

`src/components/Headers/NavBar.vue` still navigates by building hash strings directly.

Why this is risky:

- String navigation is easier to mistype than named routes.
- A future change to section IDs would require a matching manual update in the navbar.

### 3. The data schema is better, but still largely convention-driven

`src/assets/portfolio.json` and `src/assets/db.json` are cleaner now, but they are still plain local JSON files with no schema validation.

Why this is risky:

- A typo or missing field can still break the UI.
- The data model is enforced by convention rather than tooling.

### 4. Featured projects rely on slug conventions

Project and experience descriptions have been removed from `portfolio.db` and the generated JSON files. The Katto and Copperfield project narratives now live in their respective detail-page markdown files under `src/content/views/`, while timeline descriptions live in `src/content/experience.md`.

Featured-card copy now lives in an optional `section:highlight` inside the same project Markdown document. Project Markdown filenames and detail route names must match the database slug.

Why this is risky:

- A renamed slug must be updated consistently across the database, Markdown filename, and route name.
- These relationships are currently enforced by convention rather than a dedicated content validation command.

### 5. The repository still relies on human discipline for content updates

The content workflow is much better now, but it still depends on remembering where each kind of text lives.

Why this is risky:

- It is easy to edit the wrong file when updating content.
- New content contributors may need a short onboarding guide to avoid mistakes.

## Recommended Improvements

### Highest priority

1. Finish moving presentation logic out of UI components.
   - Keep derived data inside composables and keep the view components mostly declarative.
   - That pattern is already in place for experience and portfolio data, so the main work is extending it consistently.

2. Add lightweight validation for local content files.
   - A simple schema check would catch missing fields or broken references in `portfolio.json` and `db.json`.
   - This would make the current convention-driven workflow safer.

3. Keep using stable slugs and markdown sections for editable content.
   - The current project pages and About section are now markdown-backed, which is a good pattern to keep.
   - If more long-form content is added later, follow the same approach rather than embedding prose in templates.

4. Clean up remaining lifecycle and navigation details.
   - Move the NavBar listener cleanup to the correct unmount hook.
   - Consider using named routes or a small navigation helper if the app grows.

### Medium priority

5. Review featured copy when detail-page content changes.
   - The database no longer contains project or experience descriptions.
   - Featured copy shares the same project Markdown document, but remains an independent section for its shorter presentation context.

### Lower priority but valuable

6. Add a small build-time content check.
   - Verify slug/filename/route relationships and ensure `highlightOrder` values are valid.
   - This would protect the new markdown-based content workflow.

7. Document the content conventions for future edits.
   - `AGENTS.md` already helps with naming and formatting preferences.
   - It would be useful to keep that file updated as the content structure evolves.

## Suggested Future Shape

If the goal is to make the site easy to update often, the current direction is already much cleaner:

- keep long-form prose in markdown files
- keep structured project and experience data in local JSON
- use composables to derive render-ready state
- let Vue components stay focused on layout and presentation

That gives you a static, GitHub Pages-friendly setup while still making content easier to edit.

## Short Verdict

The portfolio is now much closer to a maintainable content-driven site than it was originally. The worst data-mutation and typo issues have been addressed, the key long-form pages now live in markdown, and the remaining debt is mostly around cleanup, validation, and a few brittle interaction details.
