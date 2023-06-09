import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import "../scss/styles.scss";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="transparent">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" >
            <img
              src="/src/assets/propertygo.png"
              height="40"
              alt="PropertGo logo"
              
              
            />
            PropertyGo
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/index">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/buyerdash">
                  Buyer Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sellerdash">
                  Seller Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link login" href="/buyerlogin">
                  Already have an account? Log in.
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}