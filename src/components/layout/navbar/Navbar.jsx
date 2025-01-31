import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../../assets/images/transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row w-100 align-items-center justify-content-around">
            {/* First Column - Logo */}
            <div className="col-4 text-center">
              <a className="navbar-brand" href="#">
                <img className="nav-logo" src={logo} alt="LOGO" />
              </a>
            </div>

            {/* Second Column - Navigation Links */}
            <div className="col-4 text-center">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav justify-content-center">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li className="nav-item links">
                      <a className="nav-link active" href="/">
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/about" style={{ textDecoration: "none" }}>
                    <li className="nav-item links">
                      <a className="nav-link">About Us</a>
                    </li>
                  </Link>
                  
                  {/* Services Dropdown */}
                  <li 
                    className="nav-item dropdown links"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a className="nav-link dropdown-toggle" href="#">
                      Services
                    </a>
                    {dropdownOpen && (
                      <ul className="dropdown-menu show">
                        <li>
                          <Link className="dropdown-item" to="/services/personalloan">Personal Loan</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/services/creditloan">Credit Card</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/services/businessloan">Business Loan</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/services/carloan">Car Loan</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/services/antiharassement">Anti Harassement</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/services/creditscore">Credit Score Builder</Link>
                        </li>
                        
                      </ul>
                    )}
                  </li>
                  
                  <Link to="/faq" style={{ textDecoration: "none" }}>
                    <li className="nav-item links">
                      <a className="nav-link">FAQ'S</a>
                    </li>
                  </Link>
                  <Link to="/testimonials" style={{ textDecoration: "none" }}>
                    <li className="nav-item links">
                      <a className="nav-link">Blogs</a>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            {/* Third Column - Get Started Button */}
            <div className="col-4 text-center">
              <Link to="/form">
                <button className="btn btn-primary get-started-btn1">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
