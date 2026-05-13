import { useEffect, useState } from 'react';
import './Nav.scss';

type NavLink = {
  label: string;
  id: string;
};

const links: NavLink[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

/**
 * It renders a navigation bar with links to different sections of the page.
 * Highlights the active section based on scroll position.
 * @returns
 */
const Nav = () => {
  const [activeId, setActiveId] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    // Set up IntersectionObservers for each section to update the active link based on scroll position.
    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(section);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /**
   * Scrolls smoothly to the target section and closes the mobile menu.
   * @param {string} id - The id of the target section.
   */
  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-logo"
          aria-label="Gabriel Kažimír — Home"
          onClick={(event) => {
            event.preventDefault();
            scrollTo('home');
          }}
        >
          GK.
        </a>

        <nav
          id="nav-menu"
          className={`nav-links${menuOpen ? ' open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link${activeId === id ? ' active' : ''}`}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          <span className={`nav-ham${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  );
};

export default Nav;
