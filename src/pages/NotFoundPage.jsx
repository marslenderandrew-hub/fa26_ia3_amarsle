import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle.js';

export default function NotFoundPage() {
  usePageTitle('Page Not Found');
  return (
    <section className="section">
      <div className="container-page flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">Error 404</p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-ink-100">Page Not Found</h1>
        <p className="mt-4 max-w-md text-ink-300">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
