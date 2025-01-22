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

const Footer = () => {
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
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a href="#about-us" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mt-3">
                <a href="#services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#contact-us"
                  className="text-light text-decoration-none"
                >
                  Contact Us
                </a>
              </li>
              <li className="mt-3">
                <a href="#blog" className="text-light text-decoration-none">
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mt-3">
                <a
                  href="#business-loan"
                  className="text-light text-decoration-none"
                >
                  Business Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#personal-loan"
                  className="text-light text-decoration-none"
                >
                  Personal Loan
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#financial-planning"
                  className="text-light text-decoration-none"
                >
                  Financial Planning
                </a>
              </li>
              <li className="mt-3">
                <a
                  href="#consultation"
                  className="text-light text-decoration-none"
                >
                  Consultation
                </a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3">Contact Us</h5>
            <p className="mt-4">
              Our support team is <br></br>here to help you 24/7
            </p>
            <p className="mt-4">
              <a className="text-white"href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9">
              <FaMapMarkerAlt /> Location
              </a>
              
            </p>
            <p className="mt-4">
              <FaPhone /> Register Now
            </p>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row className="align-items-center justify-content-between mb-5 credits">
          <Col md={6}>
            <p className="mb-0">&copy; 2025 AMA</p>
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
