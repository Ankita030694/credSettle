import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/images/Credit.png";
import "./About.css";
import partners from "../../assets/images/partners.png";
import Card from "../../assets/images/Card.png";
import icon from "../../assets/images/rupee.png";
import icon1 from "../../assets/images/hammer.png";
import elipse from "../../assets/images/Elipse.png";
import image from "../../assets/images/Image.png";
import video from "../../assets/videos/video.mp4";
import affStrap from "../../assets/images/affStrap.png";
import strap from "../../assets/images/strapw.png";

const about = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .catch((error) => console.log("Autoplay blocked:", error));
      setIsPlaying(true);
    }
  };
  return (
    <div>
      <div className="about container-fluid bg-white mb-5 ">
        <div className="row align-items-center hero-container text-start">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>About Us</h3>
              <img className="about_icon" src={elipse} alt="" />
            </div>

            <h1 className="tagline2 text-black">
              EMPOWERING LIVES, BUILDING FUTURES
            </h1>
            <p className="mt-5">
              We specialize in debt settlement, helping individuals and
              businesses reduce their financial burdens. Our expert team
              negotiates with creditors to secure affordable repayment plans,
              offering tailored solutions to achieve financial freedom and
              restore peace of mind.
            </p>
            {/* <h4 className="mt-5">Our Affiliations:</h4> */}
            <div className="marq_cont mt-5"></div>
            <h3 className="text-center">We work with guidelines of:</h3>
            <div className="marquee-container1">
              <div className="marquee-content1">
                <img src={affStrap} alt="" /> 
                <img src={affStrap} alt="" />
              </div>
            </div>
            <h3 className="text-center">Our media coverages:</h3>
            <div className="marquee-container2">
              <div className="marquee-content2">
                <img src={strap} alt="" />
                <img src={strap} alt="" />
              </div>
            </div>
          </div>

          {/* Second Column - Image */}
          <div className="col-md-6 text-center vid_margin"> 
            <div onClick={handlePlayVideo}>
              <video
                ref={videoRef}
                src={video}
                width="700"
                height="577"
                controls
                autoPlay
                loop
                muted
                className="vid"
              />
              {/* <p>Click anywhere to play video with sound</p> */}
            </div>
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
              className="hero-image revealing-image"
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
                <h5>Save 50% or more on your outstandings</h5>
              </div>

              <div className="icon_text">
                <img
                  src={icon1}
                  alt="Time Saving Convenience Icon"
                  className="icon-img1"
                />
                <h5>We keep you legally protected</h5>
              </div>
            </div>

            <p className="mt-5 mb-5">
              Settle your loans for 50% or less! Save big, stay legally
              protected, avoid harassment, and regain financial freedom with
              expert negotiation and professional guidance
            </p>
            <button className="btn btn-primary get-started-btn">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
