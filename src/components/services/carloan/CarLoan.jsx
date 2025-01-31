import React from "react";
import "../personalloan/personalloan.css";
import serviceImage1 from "../../../assets/images/3.png";
import serviceImage2 from "../../../assets/images/services1.png";
import banner from "../../../assets/images/banner.png"

const CarLoan = () => {
  return (
    <div>
      <div>
        {/* Banner Section */}
        <div
          className="service-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-overlay">
            <h1 className="service-heading">Car Loan Settlement</h1>
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
                Is It Possible to Settle a Car Loan?
              </h3>
              <p className="service-description">
                Yes, car loan settlement is possible, but since it is a secured
                loan, the process differs from unsecured loans like credit cards
                or personal loans. In a secured loan, the lender has the right
                to seize the vehicle if you default. However, if you're facing
                financial distress, you can negotiate a car loan settlement to
                avoid repossession, reduce your debt, and prevent legal action
                by loan recovery agents.
              </p>
              <h3 className="service-title">
                What to Do If You Can’t Repay Your Car Loan?
              </h3>
              <p className="service-description">
                If you're struggling with EMI payments, take immediate action to
                avoid vehicle repossession: Contact Your Lender – Request a
                repayment plan modification to lower your EMI or extend the loan
                tenure. Explore Refinancing Options – If your interest rate is
                high, refinancing with another lender could help reduce your
                financial burden. Negotiate a Car Loan Settlement – If
                refinancing isn’t an option, you can negotiate a car loan
                settlement to clear the dues and avoid loan recovery agent
                harassment.
              </p>
              <h3 className="service-title">Ways to Settle a Car Loan</h3>
              <p className="service-description">
                Since a car loan is secured, settlement options depend on the
                lender’s policies and your financial position: Voluntary
                Surrender & Settlement – You can voluntarily return the car to
                the lender in exchange for a loan settlement at a reduced
                amount. This prevents repossession proceedings and lowers the
                impact on your credit report. Lump-Sum Settlement – If you can
                arrange funds, negotiating a one-time settlement at a lower
                amount can help you close the loan faster. Resale & Loan
                Adjustment – You may be able to sell the car, use the proceeds
                to pay off part of the loan, and negotiate the remaining
                balance.
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
                How to Negotiate a Car Loan Settlement?
              </h3>
              <p className="service-description">
                Assess Your Financial Standing – Gather details of your
                outstanding dues, loan agreement, and repayment history.
                Negotiate a Fair Deal – Request a lower settlement amount based
                on your financial hardship. If the lender fears complete
                default, they may be willing to negotiate. Document the
                Settlement Agreement – Ensure you get a written confirmation of
                the settlement terms to avoid future disputes.
              </p>
              <h3 className="service-title">Benefits of Car Loan Settlement</h3>
              <p className="service-description">
                Avoids Vehicle Repossession – Settling the loan prevents the
                lender from seizing and auctioning your car. Reduces Outstanding
                Debt – You can resolve the debt at a lower amount rather than
                continuing high-interest payments. Protects Your Credit Score –
                A settled loan is better than a loan default, which severely
                impacts your credit report. Prevents Recovery Agent Harassment –
                Settling your dues legally protects you from aggressive loan
                recovery agents.
              </p>
              <h3 className="service-title">
                Need Help with Car Loan Settlement?
              </h3>
              <p className="service-description">
                If you're facing recovery agent harassment or legal threats due
                to a car loan default, professional assistance can help. Firms
                like CredSettle.com specialize in car loan settlements, helping
                borrowers negotiate favorable terms while avoiding repossession
                and financial distress. Act Now! Don’t wait for
                repossession—explore your car loan settlement options today and
                take back control of your finances!
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
    </div>
  );
};

export default CarLoan;
