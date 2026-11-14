import { NavLink, Outlet } from "react-router-dom";
import { FiExternalLink, FiUser } from "react-icons/fi";
import { useAdminAuth } from "./useAdminAuth";
import "./admin.css";

const adminLinks = [
  { to: "/admin/team", label: "Team Management" },
  { to: "/admin/video", label: "About Farm Video" },
  { to: "/admin/contacts", label: "Contact Submissions" },
];

function AdminLayout() {
  const { signOut } = useAdminAuth();

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="admin-brand">
          <span className="admin-brand-mark">NF</span>
          <span className="admin-badge">ADMIN PORTAL</span>
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
          <span className="admin-user-icon" aria-label="Admin account">
            <FiUser aria-hidden="true" />
          </span>
          <button className="admin-sign-out" onClick={signOut} type="button">
            Sign out
          </button>
        </div>
      </header>
      <main className="admin-main">
        <Outlet />
      </main>
      <footer className="admin-footer">
        <span>Nico Farms administration</span>
        <span>Team, contact, and video tools connect to the API</span>
      </footer>
    </div>
  );
}

export default AdminLayout;
