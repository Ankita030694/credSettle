import React from "react";
import heroImage from "../../assets/images/Credit.png";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
import "./Testimonials.css";
import reviewCard from "../../assets/images/CardR.png";
import reviewCard2 from "../../assets/images/reviewCard2.png";
import reviews from "../../assets/images/reviews.png";
import trustpilot from "../../assets/images/trustpilot.png";
const Testimonials = () => {
  return (
    <div>
      <div className="testimonials container-fluid text-black py-5">
        <div className="row align-items-center hero-container text-start">
          <div className="col-md-6 text-content testim_cont marg">
            <div className="elipse mt-5">
              <h3>Testimonials</h3>
              <img className="about_icon" src={elipse} alt="elipse" />
            </div>
            <h1 className="tagline2 text-black mt-3">
              What our <br />
              Clients Say
            </h1>
            
            <div className="testi_img1 mt-5">
              <a href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9"><img src={reviews} alt="reviews" className="reviews_png1" /></a>
              <a href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9"><img src={trustpilot} alt="trustpilot" className="trustpilot_png1" /></a>
            </div>
            <a href="https://maps.app.goo.gl/NNM5pZCHRfrj3Fwy9">
            <button className="btn btn-primary get-started-btn mt-5">
              View More
            </button>
            </a>

            {/* <p className="">
              To view more testimonials click view more
            </p> */}
            {/* <button className="btn btn-primary get-started-btn my-3">
              See All
            </button> */}
          </div>
          <div className="col-md-6 text-content test_cont">
            <div className=" mb-4">
              {/* <h3>What our customers say about us</h3> */}
              {/* <img className="about_icon" src={elipse} alt="" /> */}
            </div>

            <div className="testi_img">
              <img src={reviewCard} alt="reviewcard1" />
              <img src={reviewCard2} alt="reviewcard2" />
              {/* <img src={reviewCard} alt="" /> */} 
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
