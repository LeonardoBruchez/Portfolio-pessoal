import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'início', end: true },
  { to: '/projetos', label: 'projetos' },
  { to: '/curriculo', label: 'currículo' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell">
        <NavLink to="/" className="wordmark">
          Leonardo Bruchez
        </NavLink>
        <ul className="site-nav">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
