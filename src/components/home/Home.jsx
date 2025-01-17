import React from "react";
import "./home.css";
import Navbar from "../layout/navbar/Navbar";
import heroImage from "../../assets/images/Credit.png";
import Footer from "../layout/footer/Footer";
import strap from "../../assets/images/2IconBox.png";
import About from "../about us/About";
const Home = () => {
  return (
    <div>
      <div className="hero container-fluid">
        <div className="row align-items-center hero-container">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content">
            <p className="welcome-text">WELCOME TO CREDSETTLE</p>
            <h1 className="tagline">SEAMLESS LOANS, BRIGHTER FUTURES</h1>
            <button className="btn btn-primary get-started-btn">
              Get Started
            </button>
          </div>

          {/* Second Column - Image */}
          <div className="col-md-6 text-center">
            <img
              src={heroImage}
              alt="Credsettle Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="hero container-fluid">
        <div className="row align-items-center hero-container">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content bg-translucent">
            <p>.</p>
            <p>.</p>
            <br />
            <p>.</p>
            <br />
            <p>.</p>
            <br />
            <p>.</p>
            <br />
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <br />
          </div>

          {/* Second Column - Details */}
          <div className="col-md-6 bg-white py-5 text-start">
            {/* Buttons */}
            <div className="btns d-flex gap-2 mx-4">
              <button className="btn btn-primary get-started-btn">2004</button>
              <button className="btn btn-warning text-dark">
                <span className="me-1">Insert</span>
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>

            {/* Heading */}
            <h2 className="my-5 mx-4">
              For Nearly 20 Years, People Have Chosen CredSettle To Help Fund
              Their Dreams
            </h2>

            {/* Horizontal Line */}
            <hr className="my-3 mx-4" />

            {/* Paragraph */}
            <h5 className="mx-4">See our 12,353 reviews</h5>
          </div>
        </div>
      </div>
      <div className="strap container-fluid text-start mb-5">
        <div className="row align-items-center hero-container">
          <img src={strap} alt="" />
          {/* <div className="col-md-3 text-white">PERSONAL LOAN</div>
          <div className="col-md-3 text-white">CREDIT CARD</div>
          <div className="col-md-3 text-white">HOME EQUITY</div>
          <div className="col-md-3 text-white">INVESTMENTS</div> */}

         
       
       
            
        </div>
      </div>
      <About/>
    </div>
  );
};

export default Home;
