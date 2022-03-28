import { React, lazy, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Favoritos = lazy(() => import("../componentes/Favoritos"));
const Person = lazy(() => import("../componentes/Person"));

export const Navbar = ({ brand }) => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {brand}
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Personajes" className="nav-link">
                  Personajes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/favorito" className="nav-link">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/favorito" element={<Favoritos />} exact />
            </Routes>
            <Routes>
              <Route path="/personajes" element={<Person />} exact />
            </Routes>
          </Suspense>
        </div>
      </nav>
    </Router>
  );
};

export default Navbar;
