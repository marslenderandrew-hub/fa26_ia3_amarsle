import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects & Skills' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar({ name }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [firstName, ...rest] = name.split(' ');
  const close = () => setOpen(false);

  // NavLink adds aria-current="page" to the active link automatically.
  const desktopClass = ({ isActive }) =>
    `text-sm font-medium transition hover:text-gold-400 ${
      isActive ? 'text-gold-500 underline decoration-2 underline-offset-8' : 'text-ink-300'
    }`;
  const mobileClass = ({ isActive }) =>
    `block rounded-md px-3 py-3 hover:bg-navy-800 hover:text-gold-400 ${
      isActive ? 'bg-navy-800 text-gold-500' : 'text-ink-100'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-navy-700 bg-navy-900/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="font-serif text-xl font-bold text-ink-100" onClick={close}>
          {firstName}
          <span className="text-gold-500"> {rest.join(' ')}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={desktopClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-ink-100 hover:bg-navy-800 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="container-page flex flex-col gap-1 pb-4 md:hidden">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={mobileClass} onClick={close}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
