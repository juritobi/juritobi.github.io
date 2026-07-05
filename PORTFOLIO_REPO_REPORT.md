# Portfolio Repository Report

## Executive Summary

This repository is a static portfolio site built with Vue 3 and Vite, styled with Bootstrap plus a large custom CSS layer, and deployed like a GitHub Pages site. The main portfolio content is mostly data-driven from local JSON files, but several parts are still hard-coded in components and views.

The biggest maintenance opportunity is to centralize content into one clean data model, stop mutating imported JSON inside components, and replace index-based references with stable IDs or slugs.

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

The site does not appear to use a backend API or a live database. The content is stored in local files and rendered at runtime.

- `src/assets/portfolio.json` stores project metadata for the portfolio cards.
- `src/assets/db.json` stores work experience / timeline entries.
- `Texts.MD` contains longer text blocks for project/experience descriptions.
- Individual view files such as `src/views/KattoView.vue` and `src/views/CopperfieldView.vue` also contain large amounts of prose directly in the component template.

## What The Data Flow Looks Like

### Portfolio section

`src/components/Containers/ExperienceTabs.vue` imports `src/assets/portfolio.json`, groups records by `type`, and filters by `display`.

`src/components/Cards/ProjectCard.vue` receives each project entry as props and renders links based on optional fields such as `codeLink`, `VideoLink`, and `downloadLink`.

### Experience section

`src/components/Sections/ExperienceSection.vue` imports `src/assets/db.json`, calculates timeline positions from dates, and injects derived fields such as:

- `length`
- `tlSrtart`
- `color`
- `markerClass`
- `yPos`

`src/components/Containers/ExperienceGroup.vue` then filters the same dataset again by `Role` and renders cards for each category.

## Maintenance Risks And Technical Debt

### 1. Imported JSON is mutated in components

The experience and project data are imported directly from JSON and then augmented with extra properties inside component logic.

Why this is risky:

- It mixes raw content with view-only derived state.
- It makes the same source object behave differently depending on component lifecycle.
- It becomes harder to validate, test, or reuse the data elsewhere.

### 2. Some content depends on hard-coded array indexes

`src/components/Containers/ExperienceTabs.vue` uses fixed positions like `json[2]` and `json[3]` for highlight cards.

Why this is risky:

- Reordering the JSON changes the UI.
- Adding or removing records can silently break featured project selection.
- The code does not express intent as clearly as ID-based selection.

### 3. There are several naming inconsistencies and typos

Examples include:

- `Descirption`
- `pFisrtDate`
- `pColot`
- `tlSrtart`
- `HighLight`

Why this is risky:

- It makes the data model harder to remember.
- It increases the chance of bugs when updating content.
- It makes future refactors more expensive.

### 4. Lifecycle cleanup is inconsistent

`src/components/Headers/NavBar.vue` adds a scroll listener on mount but tries to remove it in `onBeforeMount`, which is the wrong lifecycle moment for cleanup. That should be `onBeforeUnmount`.

Why this is risky:

- The listener may remain attached longer than intended.
- It is easy to accidentally create duplicate listeners in future edits.

### 5. Internal navigation is a little brittle

`src/components/Cards/ProjectCard.vue` calls `router.push(props.pLink)` for internal project links, while the route table in `src/router/index.js` uses lowercase paths like `/katto` and `/copperfield`.

Why this is risky:

- If the prop value does not exactly match a valid route path, navigation breaks.
- String-based route pushes are easier to mistype than named routes.

### 6. There is duplicated narrative content

Long-form copy exists in multiple places:

- `Texts.MD`
- the detailed route components
- data files

Why this is risky:

- Updating a project description may require touching multiple files.
- Copy can drift out of sync over time.

### 7. The repository contains legacy or unused material

Why this is risky:

- It makes the repo harder to understand at a glance.
- It increases noise when searching for the active site code.

## Recommended Improvements

### Highest priority

1. Create a single content source for portfolio data.
   - Move projects, experience, skills, and detailed descriptions into one structured content layer, such as JSON with a stable schema or markdown files with frontmatter.
   - Keep components focused on rendering only.

2. Stop mutating imported data in components.
   - Build computed view models instead of writing derived fields back into the imported arrays.
   - Use `computed()` or `watchEffect()` for render-ready data.

3. Replace hard-coded indexes with stable IDs or slugs.
   - Select featured projects by `id` or `slug`.
   - Filter experiences by explicit category fields.

4. Normalize the data schema.
   - Fix typos in field names.
   - Use consistent casing across all content files.
   - Prefer one naming convention for all records.

5. Move long text out of route components.
   - Put detailed page copy into markdown files or a single content JSON file.
   - This will make editing and proofreading much easier.

### Medium priority

6. Use named routes and `<router-link>` for internal navigation.
   - This will make route changes safer and more self-documenting.

7. Fix lifecycle cleanup and listener management.
   - Use `onBeforeUnmount` for cleanup.
   - Keep scroll/resize logic inside composables where possible.

8. Split legacy apps out of the main portfolio repo.
   - If old experimental app code is no longer needed, remove it after confirming it is not still deployed.

9. Reduce content duplication.
   - Store each project description in one place.
   - Reference that content from both the card view and the detail page.

### Lower priority but valuable

10. Add data validation.
    - A simple schema check or lint script for portfolio JSON would catch typos like `Descirption` before they reach the site.

11. Add a small test or build-time check for critical data.
    - For example, verify that all featured projects have valid image paths and routes.

12. Clean up old assets and dead files.
    - Remove unused binaries, duplicate screenshots, and legacy placeholders if they are no longer referenced.

## Suggested Future Shape

If the goal is to make the site easy to update often, the cleanest long-term structure would be:

- `content/projects/*.md` for project writeups
- `content/experience.json` or `content/experience/*.md` for work history
- `content/skills.json` for skills and tools
- `content/profile.json` for header/contact details
- Vue components that render those files without mutating them

That would let you update the portfolio by editing content files rather than touching the component tree.

## Short Verdict

The portfolio is well on its way to being data-driven, but it is currently a hybrid of content files, hard-coded text, and runtime data mutation. The fastest path to maintainability is to centralize content, remove array-index assumptions, and keep components purely presentational.
