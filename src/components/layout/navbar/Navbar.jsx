import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../../assets/images/transparent.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  // A helper function to update the active nav item.
  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };
  const closeOffcanvas = () => {
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu) {
      const bsOffcanvas = Offcanvas.getInstance(mobileMenu);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };
  return (
    <div className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row w-100 align-items-center justify-content-between">
            {/* First Column - Logo */}
            <div className="col-4 text-start">
              <a className="navbar-brand" href="/">
                <img className="nav-logo" src={logo} alt="LOGO" />
              </a>
            </div>

            {/* Second Column - Navigation Links (Desktop View) */}
            <div className="col-5 text-center d-none d-lg-block">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav justify-content-center">
                  {/* <Link to="/" className="nav-item links" style={{textDecoration: "none"}}> */}
                  <li className="nav-item dropdown links">
                    <a className="nav-link" href="/">
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
                  <li className="nav-item dropdown links">
                    <a className="nav-link" href="/contact">
                      Contact
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
            <div className="col-3 text-end d-none d-lg-block">
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
                    <a className="nav-link" href="/" onClick={closeOffcanvas}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/about"
                      onClick={closeOffcanvas}
                    >
                      About Us
                    </a>
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
                        <a
                          className="dropdown-item"
                          href="/services/personalloan"
                          onClick={closeOffcanvas}
                        >
                          Personal Loan
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/services/creditloan"
                          onClick={closeOffcanvas}
                        >
                          Credit Card
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/services/businessloan"
                          onClick={closeOffcanvas}
                        >
                          Business Loan
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/services/carloan"
                          onClick={closeOffcanvas}
                        >
                          Car Loan
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/services/antiharassement"
                          onClick={closeOffcanvas}
                        >
                          Anti Harassment
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/services/creditscore"
                          onClick={closeOffcanvas}
                        >
                          Credit Score Builder
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/faq"
                      onClick={closeOffcanvas}
                    >
                      FAQ's
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/blogs"
                      onClick={closeOffcanvas}
                    >
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/contact"
                      onClick={closeOffcanvas}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="nav-item text-center mt-5">
                    <a href="/form">
                      <button className="btn btn-primary get-started-btn2">
                        Register Now
                      </button>
                    </a>
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
