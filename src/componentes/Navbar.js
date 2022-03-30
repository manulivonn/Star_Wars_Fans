import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {brand}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item" name="people">
              <NavLink exact to="/person" className="nav-link">
                Personajes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/favoritos" className="nav-link">
                Favoritos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
