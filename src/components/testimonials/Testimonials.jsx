import React from "react";
import heroImage from "../../assets/images/Credit.png";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
import "./Testimonials.css";
const Testimonials = () => {
  return (
    <div>
      <div className="testimonials container-fluid text-black py-5">
        <div className="row align-items-center hero-container text-start">
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>Testimonials</h3>
              <img className="about_icon" src={elipse} alt="" />
            </div>

            <h1 className="tagline2 text-black">
              What our <br />Clients Say
            </h1>
            <p className="mt-5">
              Enim augue integer facilisi et urna diam pellentesque lectus. Odio
              at nunc sit 
            </p>
            <button className="btn btn-primary get-started-btn my-3">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
