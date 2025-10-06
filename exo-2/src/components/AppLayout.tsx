import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  const active = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: isActive ? "underline" : "none",
  });

  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          <NavLink to="/" style={active}>
            Home
          </NavLink>
          <NavLink to="/tasks" style={active}>
            Tasks
          </NavLink>
          <NavLink to="/about" style={active}>
            About
          </NavLink>
          <NavLink to="/login" style={active}>
            Login
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default AppLayout;
