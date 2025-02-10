import React from "react";
import "../personalloan/personalloan.css";
import serviceImage1 from "../../../assets/images/7.png";
import serviceImage2 from "../../../assets/images/3.png";
import banner from "../../../assets/images/banner.png";
const CreditScore = () => {
  return (
    <div>
      <div>
        {/* Banner Section */}
        <div
          className="service-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-overlay">
            <h1 className="service-heading">Credit Score Builder</h1>
          </div>
        </div>

        {/* Two Columns Layout */}
        <div className="container7 py-5">
          <div className="row align-items-center">
            {/* Column 1 - Image */}
            <div className="col-md-6">
              <img
                src={serviceImage1}
                alt="Personal Loan Service"
                className="service-image img-fluid"
              />
            </div>

            {/* Column 2 - Text */}
            <div className="col-md-6 mt-3">
              <h3 className="service-title">
                Struggling with a Low Credit Score? Build It Back Fast!
              </h3>
              <p className="service-description">
                A good credit score is essential for securing loans, credit
                cards, and financial freedom. If your score has been affected
                due to missed payments, loan defaults, or settlements, don’t
                worry—you can rebuild it! At CredSettle.com, we specialize in
                credit score improvement services, helping you repair and
                enhance your credit profile legally and effectively.
              </p>
              <h3 className="service-title">
                Why is a Good Credit Score Important?
              </h3>
              <p className="service-description">
                Easier Loan Approvals – Banks and NBFCs offer better loan terms
                to borrowers with high credit scores. Lower Interest Rates – A
                higher score qualifies you for lower interest rates on loans and
                credit cards. Higher Credit Limits – Lenders trust borrowers
                with good scores and offer higher credit limits. Better
                Financial Opportunities – A strong credit score makes it easier
                to secure a home loan, car loan, or business loan.
              </p>
              <h3 className="service-title">
                Common Reasons for a Low Credit Score
              </h3>
              <p className="service-description">
                Missed or Late Payments – Defaulting or delaying EMI payments
                negatively impacts your score. Loan Write-Offs or Settlements –
                A written-off or settled loan can reduce your score
                significantly. High Credit Utilization – Using more than 50% of
                your credit limit increases risk perception. Too Many Loan
                Applications – Frequent loan rejections lower your score. Errors
                in Credit Report – Inaccurate information or outdated records
                can damage your credit profile.
              </p>
            </div>
          </div>
        </div>

        {/* Text and Image Reversed */}
        <div className="container7 py-5">
          <div className="row align-items-center">
            {/* Column 1 - Text */}
            <div className="col-md-6">
              <h3 className="service-title">
                How Our Credit Score Builder Services Work
              </h3>
              <p className="service-description">
                Credit Report Analysis – We analyze your CIBIL report and
                identify factors harming your score. Dispute & Rectify Errors –
                If incorrect information is affecting your score, we assist in
                correcting it. Structured Repayment Plans – We help you clear
                outstanding debts strategically to improve your score.
                Settlement Impact Management – If you've settled a loan, we work
                on minimizing its effect on your credit history. Credit
                Utilization Optimization – We guide you on managing your credit
                utilization ratio effectively. Financial Discipline Coaching –
                Our experts provide strategies to maintain a stable and
                increasing credit score.
              </p>
              <h3 className="service-title">
                How Long Does It Take to Improve a Credit Score?
              </h3>
              <p className="service-description">
                3-6 Months – If your score was impacted by missed payments or
                credit utilization issues. 6-12 Months – If you’ve settled
                loans, have high outstanding balances, or have multiple
                defaults. 12+ Months – If your loans were written off or your
                credit history is severely damaged.
              </p>
            </div>

            {/* Column 2 - Image */}
            <div className="col-md-6">
              <img
                src={serviceImage2}
                alt="Debt Settlement Service"
                className="service-image img-fluid"
              />
            </div>
            <div className="d-flex flex-direction-row">
              <a href="/form" className="m-1">
                <button className="btn btn-primary get-started-btn1">
                  Register Now
                </button>
              </a>
              <a href="/services/personalloan" className="m-1">
                <button className="btn btn-primary get-started-btn1">
                  Personal Loan Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScore;
