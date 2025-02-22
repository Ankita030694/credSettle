import React from "react";
import heroImage from "../../assets/images/Credit.png";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/Icon.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
import "./Services.css";
import { FaBriefcase, FaWallet, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import ServicesMain from "./ServicesMain";
const services = () => {
  return (
    <div>
      <div className="services container-fluid py-5 ">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>Our Services</h3>
              <img className="about_icon" src={elipse} alt="elipse" />
            </div>

            <h1 className="tagline2 text-black">
              EXPLORE THE RANGE OF CREDSETTLE'S DEBT SETTLEMENT SERVICES
            </h1>
          </div>

          {/* Second Column - Image */}
          <div className="col-md-6 text-end serv_text ">
            <p className="text-danger">WE DO NOT PROVIDE ANY KIND OF LOAN*</p>
            <p>
              We help you settle them. Our expert services protect you legally,
              reduce harassment, and handle recovery agents, ensuring a
              stress-free path to financial freedom
            </p>
            <Link to="/services">
              <button className="btn btn-primary get-started-btn serv_btn">
                See All Services
              </button>
            </Link>
          </div>
        </div>

        <div className="loan-cards-section pt-5">
          <div className="container1">
            <div className="row justify-content-center py-5">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                  <Link to="/services/personalloan" style={{textDecoration: "none", color: "black"}}>
                    <FaBriefcase className="card-icon" />
                    <h3 className="card-title">Personal Loan</h3>
                    <p className="card-text">
                      We recognize that life’s financial challenges can be
                      unpredictable. If you're having trouble with personal loan
                      repayments, it’s important to know that settling your loan
                      is possible. Unlike secured loans, personal loans are
                      unsecured and can be negotiated with your lender
                    </p>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                <Link to="/services/creditloan" style={{textDecoration: "none", color: "black"}}>
                  <FaWallet className="card-icon" />
                  <h3 className="card-title">Credit Card</h3>
                  <p className="card-text">
                    Credit card debt can be overwhelming, especially with
                    interest rates reaching up to 40%. If you're struggling with
                    unmanageable debt, debt settlement could be a viable
                    solution. It has the potential to reduce your debt, save you
                    money, and improve your long-term financial outlook
                  </p>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                <Link to="/services/businessloan" style={{textDecoration: "none", color: "black"}}>
                  <FaGlobe className="card-icon" />
                  <h3 className="card-title">Business Loan</h3>
                  <p className="card-text">
                    Business loan debt can be challenging, particularly with
                    high interest rates and repayment pressures. Debt settlement
                    offers a practical solution by reducing your loan balance,
                    lowering interest costs, and easing cash flow, allowing your
                    business to regain stability and focus on growth
                  </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row justify-content-center md:py-5 py-0">
              {/* Card 1 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                <Link to="/services/carloan" style={{textDecoration: "none", color: "black"}}>
                  <FaBriefcase className="card-icon" />
                  <h3 className="card-title">Car Loan</h3>
                  <p className="card-text">
                    Car loans are secured loans, meaning the vehicle is at risk
                    if payments are not made. Debt settlement helps negotiate a
                    reduced balance, lower interest rates, and manageable
                    payments, easing the fear of losing your asset while
                    restoring financial stability
                  </p>
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                <Link to="/services/antiharassement" style={{textDecoration: "none", color: "black"}}>
                  <FaWallet className="card-icon" />
                  <h3 className="card-title">Anti-Harassement Services</h3>
                  <p className="card-text">
                    Anti-harassment services are designed to protect individuals
                    from aggressive debt collection tactics, providing a shield
                    against relentless calls and threats. These services help
                    stop harassment, restore peace of mind, and create a
                    structured plan for managing debt, allowing individuals to
                    regain control of their financial future.
                  </p>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-md-4">
                <div className="card-container text-center">
                  <Link to="/services/creditloan" style={{textDecoration: "none", color: "black" }}>
                  <FaGlobe className="card-icon" />
                  <h3 className="card-title">Credit Score Builder</h3>
                  <p className="card-text">
                    Our program helps clients improve their credit score by
                    providing tailored strategies to strengthen their financial
                    profile. With expert guidance, you can enhance your
                    creditworthiness, increasing your chances of securing loans
                    and better financial opportunities in the future
                  </p>
                  </Link>
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
