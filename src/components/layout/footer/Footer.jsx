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
  return (
    <footer className="text-light pt-4">
      <div className="footerCont">
        <Row className="justify-content-between align-items-stretch">
          <Col md={3} className="foot_col1">
            <img className="nav-logo1" src={logo} alt="LOGO" />
            <p className="logo_txt">
              Settle your loans and credit card debt easily with CredSettle. Get
              debt relief, loan waivers & protection from harassment by recovery
              agents in India.
            </p>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Company</h5>
            <ul className="list-unstyled">
              {/* <Link to="/about"> */}
              <li className="mt-3">
                <a
                  href="/about"
                  className="text-light text-decoration-none foot_txt"
                >
                  About
                </a>
              </li>
              {/* </Link> */}

              {/* <Link to="/services"> */}
              <li className="mt-3">
                <a
                  href="/services"
                  className="text-light text-decoration-none foot_txt"
                >
                  Services
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/faq"> */}
              <li className="mt-3">
                <a
                  href="/faq"
                  className="text-light text-decoration-none foot_txt"
                >
                  FAQ'S
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/blogs"> */}
              <li className="mt-3">
                <a
                  href="/blogs"
                  className="text-light text-decoration-none foot_txt"
                >
                  Blogs
                </a>
              </li>
              {/* </Link> */}
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Services</h5>
            <ul className="list-unstyled">
              {/* <Link to="/services/personalloan"> */}
              <li className="mt-3">
                <a
                  href="/services/personalloan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Personal Loan
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/services/creditloan"> */}
              <li className="mt-3">
                <a
                  href="/services/creditloan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Credit Loan
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/services/businessloan"> */}
              <li className="mt-3">
                <a
                  href="/services/businessloan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Business Loan
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/services/carloan"> */}
              <li className="mt-3">
                <a
                  href="/services/carloan"
                  className="text-light text-decoration-none foot_txt"
                >
                  Car Loan
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/services/antiharassement"> */}
              <li className="mt-3">
                <a
                  href="/services/antiharassement"
                  className="text-light text-decoration-none foot_txt"
                >
                  Anti Harassement
                </a>
              </li>
              {/* </Link> */}
              {/* <Link to="/services/creditscore"> */}
              <li className="mt-3">
                <a
                  href="/services/creditscore"
                  className="text-light text-decoration-none foot_txt"
                >
                  Credit Score Improvement
                </a>
              </li>
              {/* </Link> */}
            </ul>
          </Col>
          <Col md={3} className="foot_col">
            <h5 className="mb-3 foot_head">Contact Us</h5>
            <p className="mt-4 foot_txt">
              Our support team is <br></br>here to help you 24/7
            </p>
            <p className="mt-4 foot_txt">
              <a
                className="text-white "
                href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9"
                style={{ textDecoration: "none" }}
              >
                <FaMapMarkerAlt /> Location
              </a>
            </p>
            {/* <Link to="/form" style={{ textDecoration: "none" }}> */}
            <a href="/form">
              <p className="mt-4 foot_txt " style={{ color: "white" }}>
                <FaPhone /> Register Now
              </p>
            </a>
            <a href="/t&c">
              <p className="mt-4 foot_txt " style={{ color: "white" }}>
                Terms & Conditions
              </p>
            </a>
            <a href="/privacypolicy">
              <p className="mt-4 foot_txt " style={{ color: "white" }}>
                 Privacy Policy
              </p>
            </a>

            {/* </Link> */}
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
        <Row className="align-items-start justify-content-between mb-5 credits disclaimer container-fluid">
          <p>
            Disclaimer: Loan Settlement is at the discretion of the lenders and
            only they can issue settlement letters. We provide legal support and
            do not have any authority to issue such letters. Not all debts are
            eligible for loan settlement. You should consider loan settlement
            only if you are in financial distress and unable to pay your loan
            EMIs. CredSettle.com is committed to following the highest standards
            of governance in managing client information and providing
            professional support to our clients. In this endeavour, we work with
            several organizations to meet globally recognised norms. These
            include: MSME | Credit Information - Experian |
          </p>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
