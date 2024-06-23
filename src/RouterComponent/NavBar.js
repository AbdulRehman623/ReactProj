import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul className="navv">
        <li>
          <NavLink className="nav-bar-link" style={{ color: "red" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/filter">
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/user/ar">
            AR
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/user/mani">
            mani
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
