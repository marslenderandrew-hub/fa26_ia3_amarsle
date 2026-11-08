import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Content is loaded at runtime from the Express API, which is what
// makes this a dynamic app rather than a static page.
export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('/api/profile').then((r) => {
        if (!r.ok) throw new Error('profile');
        return r.json();
      }),
      fetch('/api/projects').then((r) => {
        if (!r.ok) throw new Error('projects');
        return r.json();
      }),
    ])
      .then(([profileRes, projectsRes]) =>
        setData({ ...profileRes, projects: projectsRes.projects }),
      )
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center text-ink-300">
        <p>Sorry, the portfolio could not be loaded. Please refresh the page.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Loading">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-navy-700 border-t-gold-500" />
      </div>
    );
  }

  const { profile, skills, projects } = data;

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar name={profile.name} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage profile={profile} />} />
          <Route path="/projects" element={<ProjectsPage projects={projects} skills={skills} />} />
          <Route path="/contact" element={<ContactPage profile={profile} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer name={profile.name} />
    </div>
  );
}
