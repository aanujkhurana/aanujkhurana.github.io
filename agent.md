# Agent Guide

## Project Overview

This repository hosts Anuj Khurana's static portfolio site for GitHub Pages.

- `index.html` is the live entry point. It mounts a bundled Vue app into `#app`.
- `assets/` contains the live hashed build output: minified JS/CSS plus images/icons.
- `old/` contains an older hand-written portfolio version with HTML, CSS, JS, images, and a resume PDF.
- `README.md` currently only points to `https://github.com/aanujkhurana/cardProfile`.

There is no committed `package.json`, lockfile, source `src/` directory, or build command in this repo. Treat the root site as deployed/static output unless source files are restored or supplied separately.

## Repository Map

- `index.html`: live GitHub Pages shell. It loads `/assets/index-CXVqRd0T.js`, `/assets/index-D2iSkFT_.css`, Google Fonts, Ionicons, and favicon assets.
- `assets/index-CXVqRd0T.js`: minified Vue bundle. Contains the portfolio UI, profile/project data, contact form behavior, theme logic, and chatbot code.
- `assets/index-D2iSkFT_.css`: minified stylesheet for the live Vue portfolio, including dark/light theme variables, responsive layout, project cards, contact form, and chatbot styling.
- `assets/*.svg`, `assets/*.png`, `assets/*.gif`: live visual assets referenced by the bundle.
- `old/index.html`: legacy static portfolio with sections for home, projects, contact, and about.
- `old/CSS/style.css`: legacy light theme stylesheet.
- `old/CSS/styleDark.css`: legacy dark theme stylesheet.
- `old/JS/script.js`: legacy DOM interactions, smooth scrolling, project toggles, Formspree submit, theme stylesheet switching, clock, and resume download.
- `old/img/`: legacy image assets.
- `old/resume/anujkhurana.pdf`: legacy resume PDF.
- `.vscode/settings.json`: empty settings object.
- `.gitignore`: ignores `.DS_Store` files.

## How To Run Locally

This is a static site. Use a local HTTP server from the repo root so absolute `/assets/...` paths resolve correctly:

```sh
python3 -m http.server 4178
```

Then open `http://localhost:4178/`.

The legacy site can be checked at `http://localhost:4178/old/`.

## Validation Checklist

After edits, verify the affected pages in a browser:

- Root site loads without a blank `#app`.
- `assets/` URLs resolve from the site root.
- Navigation between About, Projects, Experience, and Contact still works.
- Sidebar contact toggle works on small screens.
- Project filtering works on desktop and mobile select controls.
- Contact form validation and disabled submit state still behave as expected.
- Theme toggle still applies the `light-theme` variables where applicable.
- Chatbot button/window still renders on desktop. If testing messages, expect network dependency on the configured proxy endpoint.
- Legacy `old/` page still loads its relative `CSS/`, `JS/`, `img/`, and `resume/` paths if those files are touched.

## Editing Guidance

- Prefer editing original source files if they are reintroduced. The current live JS/CSS files are minified build artifacts and are awkward to modify safely.
- If changing the live root site with only this repo available, keep edits small and targeted. Update `index.html` or narrowly patch the minified assets only when necessary.
- If replacing hashed files in `assets/`, also update `index.html` to point to the new filenames.
- Preserve absolute root paths in the live `index.html` for GitHub Pages deployment unless there is a deliberate routing change.
- Keep binary assets compressed and avoid unnecessary churn in generated filenames.
- Do not remove `old/` unless explicitly asked; it is the only readable source-like version in this repo.
- Avoid committing `.DS_Store`; it is already ignored.

## Live Bundle Notes

The root bundle appears to include:

- Vue runtime/application code mounted with `mount("#app")`.
- Profile data for Anuj Khurana, skills, projects, experience, education, and certifications.
- A contact form that currently logs form data, alerts success, resets the form, and does not submit to Formspree.
- A chatbot that calls `https://openai-proxy-mujovdlo3-anuj-khuranas-projects.vercel.app/api/chat`.
- A desktop-only chatbot UI hidden on small screens by CSS.
- Theme CSS variables under `:root` and `:root.light-theme`.

Because these are bundled/minified, prefer regenerating from the source project when possible.

## Legacy Site Notes

The legacy site in `old/` is easier to edit directly:

- Light/dark mode swaps between `./CSS/style.css` and `./CSS/styleDark.css`.
- The contact form posts to Formspree endpoint `https://formspree.io/f/mqkrewbn`.
- The resume download script points to `https://aanujkhurana.github.io/resume/anujkhurana.pdf`, while the committed PDF is under `old/resume/anujkhurana.pdf`.
- Some markup has minor legacy quirks, including duplicated `id="overlay"` and a referenced `error-overlay` id that may not match the HTML.

## Deployment Notes

This repo is suitable for GitHub Pages static hosting. There is no build step here. A deployment is effectively the committed contents of the repository root.

If a future task needs modern source changes, first locate or restore the source project referenced by the README, build it there, and copy the generated static output into this repository.
