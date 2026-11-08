// Express server: the dynamic back end of the portfolio.
//  - GET /api/profile   -> profile + skills (JSON)
//  - GET /api/projects  -> projects & awards (JSON)
//  - GET /api/health    -> health check (Cloud Run reserves paths ending in 'z')
//  - everything else    -> the built React app from /dist
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { profile, skills } from '../src/data/profile.js';
import { projects } from '../src/data/projects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '..', 'dist');
const app = express();
const PORT = process.env.PORT || 8080; // Cloud Run provides PORT

app.disable('x-powered-by');

app.get('/api/profile', (_req, res) => {
  res.json({ profile, skills });
});

app.get('/api/projects', (_req, res) => {
  res.json({ projects });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(distDir, { maxAge: '1h', index: false }));
  // Single-page app: send index.html for any non-API route.
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
