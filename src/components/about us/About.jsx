import React from "react";
import heroImage from "../../assets/images/Credit.png";
import "./About.css"
import partners from "../../assets/images/partners.png";
const about = () => {
  return (
    <div>
      <div className="about container-fluid bg-white mb-5">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <p className="welcome-text text-black">About Us</p>
            <h1 className="tagline2 text-black">EMPOWERING LIVES, BUILDING FUTURES</h1>
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
              src={heroImage}
              alt="Credsettle Illustration"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
