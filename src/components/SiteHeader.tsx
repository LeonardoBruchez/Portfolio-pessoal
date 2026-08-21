import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

const links = [
  { to: '/', label: 'início', end: true },
  { to: '/projetos', label: 'projetos' },
  { to: '/curriculo', label: 'currículo' },
];

export function SiteHeader() {
  const { pathname } = useLocation();

  return (
    <header className="site-header">
      <div className="shell">
        <NavLink to="/" className="wordmark">
          Leonardo Bruchez
        </NavLink>
        <ul className="site-nav">
          {links.map((link) => {
            const isActive = link.end ? pathname === '/' : pathname.startsWith(link.to);
            return (
              <li key={link.to} className="site-nav-item">
                <NavLink to={link.to} end={link.end} className={isActive ? 'active' : undefined}>
                  {link.label}
                </NavLink>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="site-nav-underline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
