# CLAUDE.md — Rules for AI assistants working on this repo

## Project
Personal portfolio for **Andrew Marslender**: a React + Vite front end served by a Node/Express server, deployed to **Google Cloud Run**. It must stay a dynamic app: the React app loads its content from the Express API (`/api/profile`, `/api/projects`).

## Commands
- `npm install`: install dependencies
- `npm run dev`: local development (Vite on http://localhost:5173, API on :8080)
- `npm run preview`: production build + server on http://localhost:8080 (same as Cloud Run)
- Deploy: `gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated`

## Structure
- `src/data/profile.js`: name, bio, contact, skills (single source of truth)
- `src/data/projects.js`: Projects & Awards list (the user edits this)
- `src/pages/`: one file per route, registered in `src/App.jsx`:
  - `/` → `HomePage` (Hero)
  - `/projects` → `ProjectsPage` (Projects + Skills)
  - `/contact` → `ContactPage`
  - `*` → `NotFoundPage`
- `src/components/`: reusable sections (Navbar, Hero, Projects, ProjectCard, Skills, Contact, Footer, SectionHeading, ScrollToTop)
- `src/hooks/usePageTitle.js`: sets the browser tab title per page
- `server/server.js`: Express API + serves `dist/` in production
- `docs/PLAN.md`: original AI plan · `docs/PROMPT_LOG.md`: prompt log

## Rules
1. **Content lives in `src/data/`.** Never hard-code personal details in components.
2. **Styling:** Tailwind utility classes only. Use the theme tokens in `tailwind.config.js` (navy, gold, ink) and don't add raw hex colors in components.
3. **Responsive:** every change must work at 375px (mobile), 768px (tablet) and 1440px (desktop).
4. **No broken links or images:** images need a fallback; external links use `target="_blank" rel="noopener noreferrer"`.
5. **Professional copy:** check spelling and grammar, and don't invent facts about Andrew (no fake employers, grades or awards).
6. **Accessibility:** semantic HTML, alt text, visible focus states, sufficient contrast.
7. **Pages and navigation:** new pages go in `src/pages/` and are registered in `App.jsx` and in `navLinks` in `Navbar.jsx`. Use React Router `Link`/`NavLink` for internal links, never `<a href="#...">`. Copy uses American English with the serial (Oxford) comma and Title Case for headings and buttons.
8. **Keep it simple:** no new dependencies without a clear reason. Plain JavaScript (no TypeScript).
9. **Run `npm run build`** before saying a change is done; it must pass with no errors.
10. **Log prompts:** append each new user prompt and a short summary of the AI's response to `docs/PROMPT_LOG.md`.
11. **Git:** small commits with clear messages. Never commit secrets or `.env` files. Ask before pushing or deploying.
