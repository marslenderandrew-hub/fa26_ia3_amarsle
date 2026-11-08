# Andrew Marslender — Portfolio

Personal portfolio web app built with **React + Vite**, **Tailwind CSS** and an **Express** API server, deployed on **Google Cloud Run**.

- **Live site:** https://portfolio-892552793261.us-central1.run.app
- **Repository:** https://github.com/marslenderandrew-hub/fa26_ia3_amarsle

## Pages
- **Home (`/`):** professional introduction, value proposition, and buttons to the other pages
- **Projects & Skills (`/projects`):** a responsive grid of projects and awards with descriptions, technologies, GitHub links, and images, followed by skill proficiency meters (Beginner / Intermediate / Advanced) and tools and technologies
- **Contact (`/contact`):** photo, name, email, and LinkedIn
- **Dynamic:** content is served by the Express API (`/api/profile`, `/api/projects`) and loaded by React at runtime; React Router handles navigation between pages

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # development with hot reload → http://localhost:5173
npm run preview    # production build + server   → http://localhost:8080
```

## Edit content
- Personal info and skills: `src/data/profile.js`
- Projects and awards: `src/data/projects.js`
- Images: `public/images/` (add `headshot.png` for the contact photo)

## Deploy to Google Cloud Run
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated
```
Cloud Run builds the `Dockerfile`, starts the Express server on `$PORT`, and prints a public URL.

## Responsive testing
Tested in Chrome DevTools device mode:

| Viewport | Size | Result |
|---|---|---|
| Mobile (iPhone SE) | 375 × 667 | _to be filled in_ |
| Tablet (iPad) | 768 × 1024 | _to be filled in_ |
| Desktop | 1440 × 900 | _to be filled in_ |

## Repository documents
- `CLAUDE.md`: rules file for the AI assistant
- `docs/PLAN.md`: original plan produced by the AI assistant
- `docs/PROMPT_LOG.md`: prompt log of the vibe-coding session
