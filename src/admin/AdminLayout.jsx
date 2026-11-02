import { NavLink, Outlet } from "react-router-dom";
import { FiExternalLink, FiUser } from "react-icons/fi";
import "./admin.css";

const adminLinks = [
  { to: "/admin/team", label: "Team Management" },
  { to: "/admin/video", label: "About Farm Video" },
  { to: "/admin/contacts", label: "Contact Submissions" },
];

function AdminLayout() {
  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-brand">
          <span className="admin-brand-mark">NF</span>
          <span className="admin-badge">ADMIN PREVIEW</span>
        </div>
        <nav className="admin-nav" aria-label="Admin pages">
          {adminLinks.map(({ to, label }) => (
            <NavLink
              className={({ isActive }) =>
                `admin-nav-link${isActive ? " is-active" : ""}`
              }
              key={to}
              to={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-topbar-actions">
          <a href="/" className="admin-public-link">
            Public site <FiExternalLink aria-hidden="true" />
          </a>
          <span className="admin-user-icon" aria-label="Admin preview account">
            <FiUser aria-hidden="true" />
          </span>
        </div>
      </header>
      <main className="admin-main">
        <Outlet />
      </main>
      <footer className="admin-footer">
        <span>Nico Farms administration</span>
        <span>Frontend preview · changes are not connected to a live service</span>
      </footer>
    </div>
  );
}

export default AdminLayout;
