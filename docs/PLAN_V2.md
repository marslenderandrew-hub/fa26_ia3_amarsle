# Plan v2: Separate pages + grammar proofread

## Context
The user likes the site and asked for two changes:
1. **Fix the grammar:** proofread all site text. They also want the degree written as "master's degree in Business and Technology" instead of "Master of Science in Business and Technology".
2. **Split the site into separate pages:** Home, Projects & Skills (Skills stays together with Projects), and Contact. Today everything is one long scrolling page with `#anchor` links.

Current state: Node v26 is installed, `node_modules` exists, and `react-router-dom@6.28.0` is already installed (in package.json devDependencies, like react). There's no git repo yet. The original plan stays in `docs/PLAN.md`.

## 1. Routing (React Router)
| Route | Page | Contents |
|---|---|---|
| `/` | `HomePage` | `Hero` (intro, value proposition, CTA buttons → `/projects` and `/contact`) |
| `/projects` | `ProjectsPage` | `Projects` grid, then `Skills` |
| `/contact` | `ContactPage` | `Contact` card |
| `*` | `NotFoundPage` | "Page not found" + link home (prevents dead-end URLs) |

- **New** `src/pages/HomePage.jsx`, `ProjectsPage.jsx`, `ContactPage.jsx`, `NotFoundPage.jsx`: thin wrappers that compose the existing section components and set the page title.
- **New** `src/hooks/usePageTitle.js`: sets `document.title` (e.g. "Projects & Skills | Andrew Marslender").
- **New** `src/components/ScrollToTop.jsx`: scrolls to the top when the route changes.
- `src/main.jsx`: wrap `<App />` in `<BrowserRouter>`.
- `src/App.jsx`: keep the single API fetch (`/api/profile` + `/api/projects`) and its loading/error states. Render the layout `div.min-h-screen.flex.flex-col` → `Navbar`, `<main className="flex-1">` with `<Routes>`, and `Footer`, so the footer sits at the bottom on short pages like Contact.
- `src/components/Navbar.jsx`: replace the `<a href="#...">` links with `NavLink` (Home / Projects & Skills / Contact), add an active-link gold style plus `aria-current`, and keep the mobile hamburger, which closes on navigation.
- `src/components/Hero.jsx`: CTAs become `<Link to="/projects">` and `<Link to="/contact">`. The `-mt-16` glow-behind-navbar effect stays.
- `src/components/Footer.jsx`: "Back to top" becomes a button that calls `window.scrollTo({ top: 0 })`, and footer links go to the pages.
- `server/server.js`: no change needed. The existing `app.get('*')` SPA fallback already serves `index.html` for `/projects` and `/contact` in production, and Vite does the same in dev.

## 2. Grammar / copy proofread
Use the **serial (Oxford) comma** throughout, turn sentence fragments into full sentences (the headline tagline is left as a deliberate exception), and keep capitalization consistent (Title Case for buttons and headings).
- `src/data/profile.js` intro: "…pursuing a **master's degree in Business and Technology** at Purdue University. As a Student Ambassador for Graduate Programs at **the** Daniels School of Business, I represent the school to prospective students and help them find their path."
- `profile.js` valueProposition: "…strategy consulting, corporate development**,** or private equity…"
- `Projects.jsx` subtitle: "These projects and achievements show how I approach problems across engineering and business."
- `Skills.jsx` subtitle: "Each skill is rated Beginner, Intermediate, or Advanced." Tools subtitle: "Tools I use today and technologies I am currently learning."
- `Contact.jsx` subtitle: "…strategy, technology, or graduate programs at Purdue."
- `index.html` meta description and the placeholder text in `projects.js`: same comma and fragment fixes.
- Final pass: re-read every string in `src/` for spelling.

## 3. Docs
- `CLAUDE.md`: update the Structure section (`src/pages/`, routes) and add a rule: "new pages go in `src/pages/` and are registered in `App.jsx`".
- `README.md`: update Features to list the three pages.
- `docs/PLAN_V2.md`: save this plan, leaving the original `docs/PLAN.md` unchanged as required.
- `docs/PROMPT_LOG.md`: add Prompt 6 (this request, the two questions and the answers) and a summary of the changes.

## Verification
1. `npm run build`: must pass with no errors.
2. `npm run preview`, then curl `/`, `/projects`, `/contact` and `/nonexistent`: each returns 200 HTML. `/api/profile` and `/api/projects` return JSON, and `/images/headshot.png` returns a PNG.
3. `grep` `src/` for leftover `href="#` links and the old "Master of Science" wording.
4. User check in the browser (`npm run dev` → http://localhost:5173): click every nav link on desktop and mobile (DevTools at 375 / 768 / 1440 px), check that the active link is highlighted, refresh on `/projects` to confirm deep links work, and check that the photo shows on `/contact`.
