import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1rem",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
          to="/usecontext"
        >
          🌐 useContext App
        </Link>

        <div style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link-inactive"
            }
            to="/usecontext"
            end
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              background: isActive ? "rgba(255,255,255,0.3)" : "transparent",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link-inactive"
            }
            to="/usecontext/about"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              background: isActive ? "rgba(255,255,255,0.3)" : "transparent",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link-inactive"
            }
            to="/usecontext/login"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              background: isActive ? "rgba(255,255,255,0.3)" : "transparent",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
