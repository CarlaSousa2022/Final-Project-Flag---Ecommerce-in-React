import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            Store Fashion Online
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="btnHome slide_right">
                <NavLink className="nav-link" to="/productlist">
                  Home <span className="sr-only"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
