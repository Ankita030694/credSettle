import React from 'react'
import heroImage from "../../assets/images/Credit.png";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
const Whyus = () => {
  return (
    <div>
          <div className="whyus container-fluid py-5 bg-white">
            <div className="row align-items-center hero-container text-start">
              {/* First Column - Text Content */}
              <div className="col-md-6 text-content about_cont">
                <div className="elipse mb-4">
                  <h3>Why Us</h3>
                  <img className="about_icon" src={elipse} alt="" />
                </div>
    
                <h1 className="tagline2 text-black">
                  THE CREDSETTLE DIFFERENCE
                </h1>
                <p>
                Quisque accumsan placerat malesuada gravida non. Malesuada cursus ac et amet.
                </p>
              </div>
    
              {/* Second Column - Image */}
              <div className="col-md-6 text-end">
                <button className="btn btn-primary get-started-btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Whyus
