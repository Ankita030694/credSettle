import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import logo from "../../../assets/images/transparent.png"
const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-body-tertiary">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row w-100 align-items-center justify-content-around">
            {/* First Column - Logo */}
            <div className="col-4 text-center">
              <a className="navbar-brand" href="#">
                <img className = "nav-logo"src={logo} alt="LOGO" />
              </a>
            </div>

            {/* Second Column - Navigation Links */}
            <div className="col-4 text-center">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav justify-content-center">
                  <li className="nav-item links">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item links">
                    <a className="nav-link"  onClick={() => scrollToSection('about')}>About Us</a>
                  </li>
                  <li className="nav-item links">
                    <a className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
                  </li>
                  <li className="nav-item links">
                    <a className="nav-link" onClick={() => scrollToSection('faq')}>Faq's</a>
                  </li>
                  <li className="nav-item links">
                    <a className="nav-link" onClick={() => scrollToSection('testimonials')}>Why Us</a>
                  </li>
                 
                </ul>
              </div>
            </div>

            {/* Third Column - Get Started Button */}
            <div className="col-4 text-center">
              <button className="btn btn-primary nav-btn">Register Now</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
