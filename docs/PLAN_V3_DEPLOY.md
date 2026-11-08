# Plan v3: Commit → GitHub → Cloud Run deploy

## Context
The user is happy with the site and wants to test it on their real phone and tablet by deploying it (Option 3). That means putting the project under git, pushing it to a new public GitHub repo, and deploying to Google Cloud Run so there's a public URL that works on any device. This is also the assignment's final hosting requirement.

Environment (checked read-only):
- **Git:** 2.53. Global user is `Andrew <marslenderandrew@gmail.com>`. The project isn't a git repo yet.
- **GitHub CLI:** logged in as `marslenderandrew-hub` (https).
- **gcloud:** account `standingchair5@gmail.com`, project `project-4ddc39ed-5f90-41a6-828` ("My First Project"). Billing is on, and the Run, Cloud Build and Artifact Registry APIs are already enabled.
- `Dockerfile`, `.dockerignore`, `.gcloudignore` and `.gitignore` already exist. The server listens on `$PORT` and has `/healthz`.

Decisions: repo **`fa26_ia3_amarsle`**, **public**. Cloud Run service **`portfolio`**, region **`us-central1`**, unauthenticated (public) access.

## Steps
1. **Pre-flight checks**
   - `npm run build` passes.
   - Scan for secrets and personal data. The phone number is already removed; confirm there are no `.env` files and no tokens.
   - Confirm `.gitignore` excludes `node_modules/` and `dist/`.
2. **Git, in small logical commits** (the assignment grades the process). Each message ends with the Co-Authored-By line.
   1. `chore: project setup (Vite, React, Tailwind, Express config)`: package files, configs, ignore files, `index.html`, favicon
   2. `docs: add CLAUDE.md rules, original plan, plan v2, and README`
   3. `feat: Express API server and content data`: `server/`, `src/data/`
   4. `feat: React pages, components, and routing`: rest of `src/`, `public/images/`
   5. `chore: Dockerfile for Cloud Run`
   6. `docs: prompt log` (appended with this session)

   Use the branch `main`.
3. **GitHub:** `gh repo create fa26_ia3_amarsle --public --source . --remote origin --push --description "Personal portfolio — React + Vite + Express on Google Cloud Run"`
4. **Deploy:** `gcloud run deploy portfolio --source . --region us-central1 --allow-unauthenticated --project project-4ddc39ed-5f90-41a6-828`. Cloud Build builds the Dockerfile, and the deploy prints the service URL. It takes about 3–5 minutes. If it asks to create an Artifact Registry repo, answer yes.
5. **Record results:**
   - Add the live URL and the GitHub link to `README.md`.
   - Log this exchange, the deploy result and the URL in `docs/PROMPT_LOG.md`.
   - Commit (`docs: add live URL`) and push.

## Verification
- `curl` the live URL: `/healthz` → `{"status":"ok"}`, and `/`, `/projects`, `/contact` → 200 HTML, `/api/profile` → JSON, `/images/headshot.png` → image/png.
- `gh repo view` confirms the repo is public and has all the files, including CLAUDE.md, docs/PLAN.md, docs/PLAN_V2.md and docs/PROMPT_LOG.md.
- The user opens the URL on their phone and tablet, checks all three pages, the ☰ menu and the photo, then fills in the README's responsive testing table.

## Notes
- Cloud Run scales to zero, so the cost at portfolio traffic levels is effectively $0 (free tier).
- Future updates: make edits → commit → `git push` → re-run the same `gcloud run deploy` command.
