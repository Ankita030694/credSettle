import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import logo from "../../../assets/images/transparent.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
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
                  <Link to="/" style={{textDecoration: "none"}}>
                    <li className="nav-item links">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/"
                        style={{textDecoration: "none"}}
                      >
                        Home
                      </a>
                    </li>
                  </Link>
                  <Link to="/about" style={{textDecoration: "none"}}>
                    <li className="nav-item links">
                      <a
                        className="nav-link"
                        // onClick={() => scrollToSection("about")}
                        style={{textDecoration: "none"}}
                      >
                        About Us
                      </a>
                    </li>
                  </Link>
                  <Link to="/services" style={{textDecoration: "none"}}>
                    <li className="nav-item links">
                      <a
                        className="nav-link"
                        onClick={() => scrollToSection("services")}
                        style={{textDecoration: "none"}}
                      >
                        Services
                      </a>
                    </li>
                  </Link>
                  <Link to = "faq" style={{textDecoration: "none"}}>
                  <li className="nav-item links">
                    <a
                      className="nav-link"
                      onClick={() => scrollToSection("faq")}
                      style={{textDecoration: "none"}}
                    >
                      FAQ'S
                    </a>
                  </li>
                  </Link>
                  <Link to = "testimonials" style={{textDecoration: "none"}}>
                  <li className="nav-item links">
                    <a
                      className="nav-link"
                      onClick={() => scrollToSection("testimonials")}
                      
                    >
                      Blogs
                    </a>
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
