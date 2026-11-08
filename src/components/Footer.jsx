import { Link } from 'react-router-dom';
import { navLinks } from './Navbar.jsx';

export default function Footer({ name }) {
  return (
    <footer className="border-t border-navy-700 py-8">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-ink-500 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="hover:text-gold-400">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="hover:text-gold-400"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top &uarr;
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}
