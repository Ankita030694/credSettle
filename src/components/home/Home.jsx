import React from 'react';
import "./home.css";
import Navbar from '../layout/navbar/Navbar';
import heroImage from "../../assets/images/Credit.png"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero container-fluid">
        <div className="row align-items-center hero-container">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content">
            <p className="welcome-text">WELCOME TO CREDSETTLE</p>
            <h1 className="tagline">SEAMLESS LOANS, BRIGHTER FUTURES</h1>
            <button className="btn btn-primary get-started-btn">Get Started</button>
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
    </>
  );
}

export default Home;
