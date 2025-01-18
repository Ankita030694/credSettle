import React from "react";
import heroImage from "../../assets/images/Credit.png";
import "./About.css";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png"
import image from "../../assets/images/Image.png"
const about = () => {
  return (
    <div>
      <div className="about container-fluid bg-white mb-5 ">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
            <h3 >About Us</h3>
            <img className = "about_icon"src={elipse} alt="" />
            </div>
          
            <h1 className="tagline2 text-black">
              EMPOWERING LIVES, BUILDING FUTURES
            </h1>
            <p className="mt-5">
              Enim augue integer facilisi et urna diam pellentesque lectus. Odio
              at nunc sit facilisis enim viverra dictum arcu sed. Risus
              hendrerit ultrices amet sem lacus a ac
            </p>
            <h4 className="mt-5">Trusted by global leading payment :</h4>
            <img
              src={partners}
              alt="Credsettle Illustration"
              className="hero-image mt-5"
            />
          </div>

          {/* Second Column - Image */}
          <div className="col-md-6 text-center">
            <img
              src={image}
              alt="Credsettle Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>
      <div className="about container-fluid bg-white mb-5 ">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Image */}
          <div className="col-md-6 ">
            <img
              src={Card}
              alt="Credsettle Illustration"
              className="hero-image"
            />
          </div>
          {/* Second Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <h3 className="tagline3 mb-4">Debt Settlement And Much More:</h3>
            <div className="icon_cont">
              <div className="icon_text">
                <img
                  src={icon}
                  alt="Effortless Settlement Icon"
                  className="icon-img"
                />
                <h5>Effortless Settlement</h5>
              </div>

              <div className="icon_text">
                <img
                  src={icon}
                  alt="Time Saving Convenience Icon"
                  className="icon-img"
                />
                <h5>Time Saving Convenience</h5>
              </div>
            </div>

            <p className="mt-5 mb-5">
              Enim augue integer facilisi et urna diam pellentesque lectus. Odio
              at nunc sit facilisis enim viverra dictum arcu sed. Risus
              hendrerit ultrices amet sem lacus a ac
            </p>
            <button className="btn btn-primary get-started-btn">
              Check Your Rate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
