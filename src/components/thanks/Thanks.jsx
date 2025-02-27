import React from "react";
import affStrap from "../../assets/images/affStrap.png";
import strap from "../../assets/images/strapw.png";
import "./Thanks.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import midday from "../../assets/banks/midday.jpg";
import medium from "../../assets/banks/Medium.png";
import mint from "../../assets/banks/mint.jpg";
import yourstory from "../../assets/banks/media4.png";
import msme from "../../assets/banks/msme.png"
import nhrc from "../../assets/banks/nhrc.png"
import barcouncil from "../../assets/banks/barcouncil.png"
import trai from "../../assets/banks/trai.jpg"
import bcsbi from "../../assets/banks/bcsbi.jpg"
import mlj from "../../assets/banks/mlj.png"
const Thanks = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh", backgroundColor: "#f8f9fa" }}
    >
      {/* <div className="card shadow-lg" style={{ maxWidth: "500px", width: "100%" }}> */}
      <div className="card-body text-center">
        <h1
          className="card-title m-3"
          style={{ color: "#070030", fontSize: "50px" }}
        >
          Thank You for Submitting the form
        </h1>
        <p
          className="card-text text-secondary "
          style={{ color: "#070030", fontSize: "20px" }}
        >
          We have received your form, and our team is currently reviewing the{" "}
          <br />
          information provided. Our team will connect with you within 24 hours.
        </p>
        <a href="/" className="btn btn-primary get-started-btn1">
          Go to Homepage
        </a>
        <div className="row2">
          <a href="https://x.com/Credsettle">
            <FaXTwitter className="me-3 text-dark" />
          </a>

          <a href="https://www.instagram.com/credsettle/">
            <FaInstagram className="me-3 text-dark" />
          </a>
          <a href="https://www.facebook.com/share/12DnnQSV4iP/?mibextid=wwXIfr">
            <FaFacebook className="me-3 text-dark" />
          </a>
          <a href="https://www.linkedin.com/company/credsettle">
            <FaLinkedin className="me-3 text-dark" />
          </a>
        </div>
        <div className="row mx-5">
          <div className="col-md-6">
            <div>
              <h3 className="text-center">We work with guidelines of:</h3>
                          <div className="marquee-container2">
                            <div className="marquee-content2">
                              <a href="https://msme.gov.in/">
                                <img src={msme} alt="msme" className="backshots" />
                              </a>
                              <a href="https://nhrc.nic.in/">
                                <img src={nhrc} alt="nhrc" className="backshots" />
                              </a>
                              <a href="https://www.barcouncilofindia.org/home">
                                <img src={barcouncil} alt="barcouncil" className="backshots" />
                              </a>
                              <a href="http://www.trai.gov.in/">
                                <img src={trai} alt="trai" className="backshots" />
                              </a>
                              <a href="https://www.iba.org.in/index.html">
                                <img src={bcsbi} alt="bcsbi" className="backshots" />
                              </a>
                              <a href="https://lawmin.gov.in/">
                                <img src={mlj} alt="mlj" className="backshots" />
                              </a>
              
                              {/* <img src={strap} alt="Media Strap" /> */}
                            </div>
                          </div>
            </div>
            </div>
            <div className="col-md-6 aff_Cont">
              <div>
                <h3 className="text-center">Our media coverages:</h3>
                <div className="marquee-container2">
                  <div className="marquee-content2">
                    <a href="https://medium.com/@credsettle">
                      <img src={medium} alt="medium" className="backshots" />
                    </a>
                    <a href="https://www.mid-day.com/">
                      <img src={midday} alt="midday" className="backshots" />
                    </a>
                    <a href="https://yourstory.com/">
                      <img src={yourstory} alt="yourstory" className="backshots" />
                    </a>
                    <a href="https://www.livemint.com/">
                      <img src={mint} alt="mint" className="backshots" />
                    </a>

                    {/* <img src={strap} alt="Media Strap" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Thanks;
