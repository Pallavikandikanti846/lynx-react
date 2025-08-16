import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="header">
      <h1 id="logoHeading">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>Lynx</Link>
      </h1>
      <nav id="navItems">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/products" className="nav-link">Products</NavLink>
        <NavLink to="/categories" className="nav-link">Categories</NavLink>
      </nav>
    </header>
  );
}
