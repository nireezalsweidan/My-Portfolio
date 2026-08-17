import { useEffect, useState } from 'react';
import { navLinks } from '../data/navigation';
import { profile } from '../data/profile';

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <>
          <path d="M5 5l14 14" />
          <path d="M19 5 5 19" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h10" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)} aria-label="Nireez Al Sweidan — home">
          <span className="nav-logo-mark">N</span>
          <span className="nav-logo-text">
            Nireez <span className="nav-logo-accent">Al Sweidan</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm nav-cta">
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
        <nav className="mobile-menu-links" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-menu-link"
              style={{ '--menu-i': i }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn btn-primary mobile-menu-cta"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
        <p className="mobile-menu-email">{profile.email}</p>
      </div>
    </header>
  );
}
