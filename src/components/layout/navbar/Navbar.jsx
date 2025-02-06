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
          <div className="row w-100 align-items-center justify-content-between">
            {/* First Column - Logo */}
            <div className="col-4 text-start">
              <Link className="navbar-brand" to="/">
                <img className="nav-logo" src={logo} alt="LOGO" />
              </Link>
            </div>

            {/* Second Column - Navigation Links (Desktop View) */}
            <div className="col-4 text-center d-none d-lg-block">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav justify-content-center">
                  {/* <Link to="/" className="nav-item links" style={{textDecoration: "none"}}> */}
                  <li className="nav-item dropdown links">
                    <a className="nav-link active" href="/">
                      Home
                    </a>
                  </li>
                  {/* </Link> */}
                  {/* <Link to="/about" className="nav-item links" style={{textDecoration: "none"}}> */}
                  <li className="nav-item dropdown links">
                    <a className="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  {/* </Link> */}

                  {/* Services Dropdown */}
                  <li
                    className="nav-item dropdown links"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a href="/services" className="nav-link">
                      Services
                    </a>

                    {dropdownOpen && (
                      <ul className="dropdown-menu show">
                        <li>
                          <a
                            className="dropdown-item"
                            href="/services/personalloan"
                          >
                            Personal Loan
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/services/creditloan"
                          >
                            Credit Card
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/services/businessloan"
                          >
                            Business Loan
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/services/carloan">
                            Car Loan
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/services/antiharassement"
                          >
                            Anti Harassment
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="/services/creditscore"
                          >
                            Credit Score Builder
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>

                  {/* <Link to="/faq" className="nav-item links" style={{textDecoration: "none"}}> */}
                  <li className="nav-item dropdown links">
                    <a className="nav-link" href="/faq">
                      FAQ'S
                    </a>
                  </li>
                  {/* </Link> */}
                  {/* <Link to="/blogs" className="nav-item links" style={{textDecoration: "none"}}> */}
                  <li className="nav-item dropdown links">
                    <a className="nav-link" href="/blogs">
                      Blogs
                    </a>
                  </li>
                  {/* </Link> */}
                </ul>
              </div>
            </div>

            {/* Third Column - Get Started Button (Desktop Only) */}
            <div className="col-4 text-end d-none d-lg-block">
              <a href="/form">
                <button className="btn btn-primary get-started-btn1">
                  Register Now
                </button>
              </a>
            </div>

            {/* Mobile View - Burger Menu */}
            <div className="col-4 text-end d-lg-none">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* Offcanvas Mobile Menu (Right to Left) */}
            <div
              className="offcanvas offcanvas-end custom-offcanvas"
              tabIndex="-1"
              id="mobileMenu"
              aria-labelledby="mobileMenuLabel"
            >
              <div className="offcanvas-header">
                <button
                  type="button"
                  className="btn-close text-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>

                  {/* Services Dropdown */}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      Services
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/personalloan"
                        >
                          Personal Loan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/creditloan"
                        >
                          Credit Card
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/businessloan"
                        >
                          Business Loan
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/services/carloan">
                          Car Loan
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/antiharassement"
                        >
                          Anti Harassment
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/services/creditscore"
                        >
                          Credit Score Builder
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/faq">
                      FAQ's
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/blogs">
                      Blogs
                    </Link>
                  </li>

                  {/* Register Now Button inside Mobile Menu */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
