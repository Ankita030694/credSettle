import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhone, FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import logo from "../../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer className="text-light pt-4">
      <div className="footerCont">
        <Row className="justify-content-between">
          <Col md={3}>
            <img className = "nav-logo"src={logo} alt="LOGO" />
            <p className="mt-4">Line of text 1</p>
            <p className="mt-4">Line of text 2</p>
            <p className="mt-4">Line of text 3</p>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mt-2"><a href="#about-us" className="text-light text-decoration-none">About Us</a></li>
              <li className="mt-2"><a href="#services" className="text-light text-decoration-none">Services</a></li>
              <li className="mt-2"><a href="#contact-us" className="text-light text-decoration-none">Contact Us</a></li>
              <li className="mt-2"><a href="#blog" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mt-2"><a href="#business-loan" className="text-light text-decoration-none">Business Loan</a></li>
              <li className="mt-2"><a href="#personal-loan" className="text-light text-decoration-none">Personal Loan</a></li>
              <li className="mt-2"><a href="#financial-planning" className="text-light text-decoration-none">Financial Planning</a></li>
              <li className="mt-2"><a href="#consultation" className="text-light text-decoration-none">Consultation</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="mb-3">Contact Us</h5>
            <p>Our support team is <br></br>here to help you 24/7</p>
            <p>
              <FaMapMarkerAlt /> Location
            </p>
            <p>
              <FaPhone /> Phone Number
            </p>
          </Col>
        </Row>

        {/* <hr className="border-light" />
        <Row className="align-items-center justify-content-between">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 AMA</p>
          </Col>
          <Col md={6} className="text-end">
            <FaTwitter className="me-3 text-light" />
            <FaInstagram className="me-3 text-light" />
            <FaFacebook className="me-3 text-light" />
            <FaLinkedin className="me-3 text-light" />
          </Col>
        </Row> */}
      </div>
    </footer>
  );
};

export default Footer;
