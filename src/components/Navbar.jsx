import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current route

  const handleNavClick = () => {
    // Close the navbar on mobile after clicking a link
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          My App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/help-center", label: "Help Center" },
              { path: "/registration", label: "Registration" },
              { path: "/userinfo", label: "Userinfo" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link
                  to={path}
                  className={`nav-link ${
                    location.pathname === path ? "active" : ""
                  }`}
                  aria-current={location.pathname === path ? "page" : undefined}
                  onClick={handleNavClick}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
