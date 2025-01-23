import React from "react";
import "./home.css";
import Navbar from "../layout/navbar/Navbar";
import heroImage from "../../assets/images/Credit.png";
import Footer from "../layout/footer/Footer";
import strap from "../../assets/images/bank-strap.png";
import About from "../about us/About";
import Services from "../services/Services";
import Whyus from "../Whyus/Whyus";
import Testimonials from "../testimonials/Testimonials";
import reviews from "../../assets/images/reviews.png";
import trustpilot from "../../assets/images/trustpilot.png";
// import Banks from "../layout/banks";
const Home = () => {
  return (
    <div>
      <div className="hero container-fluid">
        <div className="row align-items-center hero-container">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content">
            <p className="welcome-text">WELCOME TO CREDSETTLE</p>
            <h1 className="tagline">
              SETTLE YOUR LOANS AND STOP YOUR HARASSEMENT IN 24 HOURS
            </h1>
            <button className="btn btn-primary get-started-btn mt-4">
              Register Now
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
        <div className="row align-items-center hero-container align-items-stretch">
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
          <div className="col-md-6 bg-white pt-5 pb-2 text-start ">
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
              Take the first step toward a<br/> debt-free future! Calculate your
              settlement amount and the time it will take to achieve financial
              freedom today
            </h2>

            {/* Horizontal Line */}
            <hr className="my-3 mx-4" />

            {/* Paragraph */}
            <img className="reviews_png" src={reviews} alt="" />
            <img className="trustpilot_png" src={trustpilot} alt="" />
            {/* <h5 className="mx-4">See our 12,353 reviews</h5> */}
          </div>
        </div>
      </div>
      <div className="strap container-fluid text-start mb-5">
        <div className="row align-items-center hero-container">
          <h3 className="bank_head text-white text-center mt-5">We have effectively assisted our clients in achieving settlements from</h3>
          {/* <marquee
            behavior=""
            direction="left"
            className="bank_marq"
            loop="infinite"
            scrollamount="10"
          >
           

          </marquee> */}
          <div className="marquee-container">
            <div className="marquee-content">
            <img src={strap} alt="" />
            <img src={strap} alt="" />
            </div>
          </div>

          {/* <div className="col-md-3 text-white">PERSONAL LOAN</div>
          <div className="col-md-3 text-white">CREDIT CARD</div>
          <div className="col-md-3 text-white">HOME EQUITY</div>
          <div className="col-md-3 text-white">INVESTMENTS</div> */}
        </div>
      </div>
      {/* <Banks/> */}
      <About />
      <Services />
      <Whyus />
      <Testimonials />
    </div>
  );
};

export default Home;
