import React from "react";
import heroImage from "../../assets/images/Credit.png";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
import "./Services.css";
import { FaBriefcase, FaWallet, FaGlobe } from "react-icons/fa";
const services = () => {
  return (
    <div>
      <div className="services container-fluid py-5">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>Our Services</h3>
              <img className="about_icon" src={elipse} alt="" />
            </div>

            <h1 className="tagline2 text-black">
              EXPLORE THE RANGE OF CREDSETTLE'S DEBT SETTLEMENT SERVICES
            </h1>
          </div>

          {/* Second Column - Image */}
          <div className="col-md-6 text-end">
            <p>
              Enim augue integer facilisi et urna diam pellentesque lectus. Odio
              at nunc sit facilisis enim viverra dictum arcu sed. Risus
              hendrerit ultrices amet sem lacus a ac
            </p>
            <button className="btn btn-primary get-started-btn">
              See All Services
            </button>
          </div>

          <div className="loan-cards-section py-2">
            <div className="container">
              <div className="row justify-content-center py-2">
                {/* Card 1 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaBriefcase className="card-icon" />
                    <h3 className="card-title">Business Loan</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaWallet className="card-icon" />
                    <h3 className="card-title">Personal Loan</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaGlobe className="card-icon" />
                    <h3 className="card-title">Online Loans</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center py-2">
                {/* Card 1 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaBriefcase className="card-icon" />
                    <h3 className="card-title">Business Loan</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaWallet className="card-icon" />
                    <h3 className="card-title">Personal Loan</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4">
                  <div className="card-container text-center">
                    <FaGlobe className="card-icon" />
                    <h3 className="card-title">Online Loans</h3>
                    <p className="card-text">
                      Enim augue integer facilisi et urna diam pellentesque
                      lectus. Odio at nunc sit facilisis enim.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default services;
