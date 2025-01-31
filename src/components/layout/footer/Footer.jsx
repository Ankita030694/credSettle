import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../../../assets/images/whitelogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <footer className="text-light pt-4">
      <div className="footerCont">
        <Row className="justify-content-between align-items-stretch">
          <Col md={3} className="foot_col1">
            <img className="nav-logo1" src={logo} alt="LOGO" />
            <p className="logo_txt">
              We specialize in debt settlement, helping individuals and
              businesses reduce their financial burdens. 
            </p>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Company</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a href="#about-us" className="text-light text-decoration-none foot_txt" onClick={() => scrollToSection('about')}>
                  About Us
                </a>
              </li>
              <li className="mt-3">
                <a href="#services" className="text-light text-decoration-none foot_txt" onClick={() => scrollToSection('services')}>
                  Services
                </a> 
              </li>
              <li className="mt-3">
                <a
                  href="#contact-us"
                  className="text-light text-decoration-none foot_txt"
                  onClick={() => scrollToSection('faq')}
                >
                  Faq's
                </a>
              </li>
              <li className="mt-3">
                <a href="#blog" className="text-light text-decoration-none foot_txt" onClick={() => scrollToSection('testimonials')}>
                  Testimonials
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Services</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a
                  href="#business-loan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Personal Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#personal-loan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Credit Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#financial-planning"
                  className="text-light text-decoration-none foot_txt"
                >
                  Business Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#consultation"
                  className="text-light text-decoration-none foot_txt"
                >
                  Car Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#consultation"
                  className="text-light text-decoration-none foot_txt"
                >
                  Online Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#consultation"
                  className="text-light text-decoration-none foot_txt"
                >
                  Credit Score Improvement
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Contact Us</h5>
            <p className="mt-4 foot_txt">
              Our support team is <br></br>here to help you 24/7
            </p>
            <p className="mt-4 foot_txt" >
              <a className="text-white "href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9" style={{textDecoration: "none"}}>
              <FaMapMarkerAlt /> Location
              </a>
              
            </p>
            <Link to = "/form" style={{textDecoration: "none"}}>
            <p className="mt-4 foot_txt " style={{color: "white"}}>
              <FaPhone /> Register Now
            </p>
            </Link>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row className="align-items-center justify-content-between mb-5 credits">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 CredSettle</p>
          </Col>
          <Col md={6} className="socials">
            <FaTwitter className="me-3 text-light" />
            <FaInstagram className="me-3 text-light" />
            <FaFacebook className="me-3 text-light" />
            <FaLinkedin className="me-3 text-light" />
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
