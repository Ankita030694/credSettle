import React, { useState } from "react";
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
import Calculator from "../calculator/Calculator";
import Graph from "../barChart/Graph";
import { BarChart } from "@mui/x-charts/BarChart";
import settLetters1 from "../../assets/images/1.png";
import settLetters2 from "../../assets/images/2.png";
import { styled } from "@mui/system";
import Blog from "../blog/Blog";

// import Banks from "../layout/banks";
// import Graph from "../barChart/Graph"
const Home = () => {
  const [withCredSettle, setwithCredSettle] = useState();
  const [withoutCredSettle, setwithoutCredSettle] = useState();
  const [savings, setSavings] = useState();
  const [result, setResult] = useState(null);
  // const [loading, setLoading] = useState(true);
  // if (withCredSettle > 0) {
  //   setLoading(false);
  
  // }
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
            {/* <button className="btn btn-primary get-started-btn mt-4">
              Register Now
            </button> */}
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
      <div className="herox container-fluid">
        <div className="row align-items-center heroc-container align-items-stretch graphCont">
          {/* First Column - Text Content */}
          <div className="col-md-6 text-content1 bg-translucent w-full">
            <div className="calc_comp">
              <Calculator
                setwithCredSettle={setwithCredSettle} 
                setwithoutCredSettle={setwithoutCredSettle}
                result={result}
                setResult={setResult}
                setSavings={setSavings}
              />
            </div>
          </div>

          {/* Second Column - Details */}
          <div className="col-md-6 bg-white pb-2 text-center w-full graphCont">
            <div className="graph_sub_cont">
              <BarChart
              className="custom-barchart"
                series={[
                  {
                    data: [withCredSettle, withoutCredSettle],
                    color: "white",
                    mark: {
                      data: [withCredSettle, withoutCredSettle],
                    },
                    // color: (d, i) => (i === 0 ? "#FFFFFF" : "#FFFFFF"),
                  },
                ]}
                height={290}
                width={400}
                // barWidth={5}
                leftAxis={null}
                xAxis={[
                  {
                    data: ["With CredSettle", "Without CredSettle"],
                    scaleType: "band",
                    // valueFormatter: () => "",
                  },
                ]}
                barLabel="value"
                yAxis={[
                  {
                    valueFormatter: () => "",
                  },
                ]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
            <div className="results">
              <div className="result1">
                <p>Settlement Amount</p>
                <div className="result2">
                  ₹{savings?.toLocaleString()} or less
                </div>
              </div>
              <div className="result1">
                <p>Debt Free in</p>
                <div className="result2">9 Months</div>
              </div>
            </div>
            <div className="helper_cont">
              <div className="debt_content">You can save upto</div>
              <span> </span>
              <span className="debt-helper-text-style">50%*</span>
              <span> </span>
              <span> on your debt</span>
              
            </div>
            {/* <div className="btns d-flex gap-2 mx-4">
              <button className="btn btn-primary get-started-btn">2004</button>
              <button className="btn btn-warning text-dark">
                <span className="me-1">Insert</span>
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div> */}

            {/* <h2 className="my-5 mx-4">
              Take the first step toward a<br /> debt-free future! Calculate
              your settlement amount and the time it will take to achieve
              financial freedom today
            </h2> */}

            {/* <hr className="my-3 mx-4" /> */}

            {/* <img className="reviews_png" src={reviews} alt="" /> */}
            {/* <img className="trustpilot_png" src={trustpilot} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="strap container-fluid text-start mb-5">
        <div className="row align-items-center hero-container">
          <h3 className="bank_head text-white text-center mt-5">
            We have effectively assisted our clients in achieving settlements
            from
          </h3>
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
      <div className="strap1 container-fluid text-start mb-5">
        <div className="row align-items-center hero-container">
          <h3 className="bank_head text-black text-center mt-5">
            Some Successful Letters Of Our Clients
          </h3>
          {/* <marquee
            behavior=""
            direction="left"
            className="bank_marq"
            loop="infinite"
            scrollamount="10"
          >
           

          </marquee> */}
          <div className="marquee-container5">
            <div className="marquee-content5">
              <img src={settLetters1} alt="" />
              <img src={settLetters2} alt="" />
            </div>
          </div>
          {/* <div className="col-md-3 text-white">PERSONAL LOAN</div>
          <div className="col-md-3 text-white">CREDIT CARD</div>
          <div className="col-md-3 text-white">HOME EQUITY</div>
          <div className="col-md-3 text-white">INVESTMENTS</div> */}
        </div>
      </div>
      {/* <Banks/> */}
      <div>
        <About />
      </div>

      <div>
        <Services />
      </div>
      <div>
        <Whyus />
      </div>
      <div >
        <Testimonials />
      </div>
      <div>
        <Blog />
      </div>
    </div>
  );
};

export default Home;
