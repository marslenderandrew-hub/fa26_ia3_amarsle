# Plan: Andrew Marslender Portfolio (React + Vite → Google Cloud Run)

## Context
Class assignment: a personal portfolio website built by vibe coding in VS Code, kept on GitHub, and hosted on **Google Cloud Run**. It must be a dynamic web app, not a static site. It has to be testable locally before it's committed or deployed. The repo must contain a rules file (CLAUDE.md), this plan saved as markdown, and a prompt log of the chat.

Decisions: **Option A, React + Vite**, served by a small **Node/Express** server so it runs as a dynamic app on Cloud Run. **Dark navy + gold** theme. **Tailwind CSS** for responsive design.

Starting state: `/home/amarsle/projects/IA3-Personal_Site` is empty and isn't a git repo. Node.js isn't installed. gcloud SDK 592 is installed. Docker isn't installed, which is fine: Cloud Run can build from source.

## Content (from user)
- **Name/Title:** Andrew Marslender, Student Ambassador for Graduate Programs, Purdue University, Daniels School of Business
- **Value proposition:** Engineering background + Master's in Business & Technology, sitting at the intersection of business and tech, aiming for strategy consulting or corporate development / private equity
- **Email:** marslenderandrew@gmail.com · **LinkedIn:** https://www.linkedin.com/in/andrew-marslender
- **Skills:** AutoCAD (Advanced), C++ (Intermediate), Python (Beginner), Leadership (Intermediate), Public Speaking (Intermediate)
- **Projects:** 3 placeholder entries in one easy-to-edit data file, filled in later by the user
- **Photo:** placeholder at `public/images/headshot.jpg`, which the user replaces with a real photo

## Project structure
```
IA3-Personal_Site/
├── CLAUDE.md                 # rules file for AI assistant
├── docs/PLAN.md              # this plan (required)
├── docs/PROMPT_LOG.md        # full chat log (required)
├── README.md                 # run/deploy instructions
├── package.json              # scripts: dev, build, start
├── vite.config.js, tailwind config, index.html
├── server/server.js          # Express: serves /dist + /api/* routes (dynamic part)
├── src/
│   ├── main.jsx, App.jsx, index.css
│   ├── data/profile.js       # name, bio, contact, skills
│   ├── data/projects.js      # ← user edits projects here
│   └── components/
│       Navbar.jsx  Hero.jsx  Projects.jsx  ProjectCard.jsx
│       Skills.jsx  Contact.jsx  Footer.jsx
├── public/images/            # headshot + project screenshots
├── Dockerfile / .dockerignore / .gitignore
```

## Sections (all assignment requirements)
1. **Home / Hero:** professional intro, value-proposition headline, gold-accent gradient visual, CTA buttons, and a sticky navbar with smooth-scroll links to Projects / Skills / Contact plus a mobile hamburger menu.
2. **Projects & Awards:** responsive card grid (1/2/3 columns). Each card has a title, description, technology tags, a GitHub link (hidden if there isn't one), and an image (with a fallback).
3. **Skills:** proficiency bars or level badges (Beginner/Intermediate/Advanced), grouped as Technical vs. Professional, plus a "Tools & currently learning" list.
4. **Contact:** photo, name, email (mailto), and LinkedIn link.
5. **Dynamic piece:** the Express server provides `/api/profile` and `/api/projects` endpoints that the React app fetches, which meets the "dynamic app" requirement. A `/healthz` endpoint is included for Cloud Run.

## Design
- Colors: navy `#0B1426` background, card `#13203A`, gold `#C9A227` accent, light text `#E6E9EF`
- Typography: Inter (body) and a serif or display font for headings, via Google Fonts
- Tailwind breakpoints sm/md/lg; consistent spacing scale; accessible contrast

## Steps
1. Install Node.js LTS (via nvm) in WSL.
2. Scaffold Vite + React, add Tailwind and Express, and build the components and data files.
3. Write CLAUDE.md, docs/PLAN.md (copy of this plan), docs/PROMPT_LOG.md (the chat so far, appended to as we go), and README.md.
4. `git init`, commit in small steps with clear messages, then create and push to a GitHub repo (with user confirmation).
5. Deploy: `gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated` (with user confirmation, since it's outward-facing).

## Verification
- `npm run dev` gives the local Vite dev server with hot reload, proxied to Express for `/api`.
- `npm run build && npm start` runs the production server at http://localhost:8080, the same way Cloud Run runs it.
- Responsive check at **3 viewports**: 375px (mobile), 768px (tablet), 1440px (desktop), using browser DevTools device mode; record the results in the README.
- Check links and images: every nav link scrolls correctly, mailto and LinkedIn open, no broken images.
- Spell/grammar pass on all copy.
- After deploy: open the Cloud Run URL and repeat the checks.
