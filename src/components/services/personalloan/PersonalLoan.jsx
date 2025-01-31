import React from "react";
import "./personalloan.css";
import serviceImage1 from "../../../assets/images/services1.png";
import serviceImage2 from "../../../assets/images/7.png";
import banner from "../../../assets/images/banner.png"


const PersonalLoan = () => {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="service-banner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="banner-overlay">
          <h1 className="service-heading">Personal Loan Debt Settlement</h1>
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
              Can You Settle Your Personal Loan? Absolutely!
            </h3>
            <p className="service-description">
              Yes, settling a personal loan is possible because it is unsecured,
              meaning there is no collateral at stake. If you’re struggling with
              repayments, you can negotiate with the lender instead of
              defaulting. Unlike student loans, which often have guarantors,
              personal loans don’t, making loan settlement a feasible option.
            </p>
            <h3 className="service-title">
              What to Do If You Can’t Make Monthly Repayments?
            </h3>
            <p className="service-description">
              If you're unable to meet your EMIs, act fast: Inform your lender –
              Explain your financial situation and request a repayment plan that
              suits your capacity. Avoid default penalties – Missing payments
              can lead to added interest, late fees, and a negative impact on
              your credit report. Negotiate a loan settlement – If repayment
              restructuring isn’t an option, consider negotiating a loan
              settlement to avoid recovery agent harassment and legal
              complications.
            </p>
            <h3 className="service-title">Ways to Settle Your Personal Loan</h3>
            <p className="service-description">
              Understanding your options is key to avoiding financial stress.
              Here are two main loan settlement methods: Lump-Sum Settlement – A
              one-time reduced payment that clears your debt faster. Lenders may
              accept this to recover part of the outstanding amount, benefiting
              both parties. Monthly Settlement Plan – Smaller, structured
              payments over time. This may be less favorable for lenders but
              more manageable for borrowers.
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
              How to Successfully Negotiate a Loan Settlement?
            </h3>
            <p className="service-description">
              To improve your chances of a successful loan settlement, follow
              these steps: Assess Your Financial Standing – List your debts,
              income, and expenses to present a clear financial picture to the
              lender. Negotiate Smartly – Be firm in requesting a lower
              settlement amount. Lenders may agree if they see genuine financial
              hardship. Stay Persistent – Loan settlement discussions can take
              multiple attempts. Keep following up until you reach a favorable
              agreement.
            </p>
            <h3 className="service-title">Benefits of Loan Settlement</h3>
            <p className="service-description">
              Avoid Recovery Agent Harassment – Once settled, lenders stop
              sending recovery agents. Minimize Credit Damage – A settled loan
              is better than a written-off loan, which severely affects your
              credit score. Financial Freedom – Settling your loan allows you to
              move forward without the burden of debt.
            </p>
            <h3 className="service-title">
              Need Legal Help or Professional Assistance?
            </h3>
            <p className="service-description">
              If dealing with lenders and recovery agents feels overwhelming,
              seek professional help from debt settlement firms. Companies like
              CredSettle.com specialize in loan settlements, helping borrowers
              negotiate the best possible terms while protecting them from
              aggressive loan recovery agents. Don't let debt control your
              life—take action today and secure your financial future!
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
        </div>
      </div>
    </div>
  );
};

export default PersonalLoan;
