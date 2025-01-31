import React from "react";
import "../personalloan/personalloan.css";
import serviceImage1 from "../../../assets/images/3.png";
import serviceImage2 from "../../../assets/images/4.png";
import banner from "../../../assets/images/banner.png"

const CreditLoan = () => {
  
  return (
    <div>
      <div>
        {/* Banner Section */}
        <div
          className="service-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-overlay">
            <h1 className="service-heading">Credit Debt Settlement</h1>
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
                Drawbacks of Taking a Credit Card Loan
              </h3>
              <p className="service-description">
                A credit card loan may seem like a convenient solution in times
                of financial distress, but it comes with serious risks. While it
                requires no application process and provides quick access to
                funds, experts recommend using it only as a last resort. Key
                Risks: High Credit Utilization – Taking a credit card loan
                increases your credit utilization ratio, which can significantly
                lower your credit score if it exceeds 50%. Debt Trap – If you’re
                already struggling with repayments, a credit card loan may
                worsen your financial burden. High Interest Rates – Credit card
                loans often carry higher interest rates compared to personal
                loans, making them costly in the long run.
              </p>
              <h3 className="service-title">
                What to Do If You Can’t Repay Your Credit Card Loan?
              </h3>
              <p className="service-description">
                If you’re unable to meet your credit card repayment schedule,
                take immediate action: Contact Your Credit Card Issuer – Explain
                your situation and request a revised repayment plan to avoid
                late fees and penalties. Avoid Late Payment Charges – Missing
                due dates can lead to increased interest and negative remarks on
                your credit report. Negotiate a Credit Card Settlement – If you
                can’t afford the revised plan, consider a credit card settlement
                to resolve the debt before it escalates to loan recovery agents.
              </p>
              <h3 className="service-title">
                Ways to Settle Your Personal Loan
              </h3>
              <p className="service-description">
                Understanding your options is key to avoiding financial stress.
                Here are two main loan settlement methods: Lump-Sum Settlement –
                A one-time reduced payment that clears your debt faster. Lenders
                may accept this to recover part of the outstanding amount,
                benefiting both parties. Monthly Settlement Plan – Smaller,
                structured payments over time. This may be less favorable for
                lenders but more manageable for borrowers.
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
                Ways to Settle Your Credit Card Loan
              </h3>
              <p className="service-description">
                There are two common methods for credit card debt settlement:
                Lump-Sum Settlement – A one-time payment at a reduced amount.
                This is ideal if the debt is small and you want to close the
                account quickly. Monthly Installments – If the debt is larger,
                some lenders allow settlements through structured monthly
                payments over an agreed period.
              </p>
              <h3 className="service-title">
                How to Successfully Settle Your Credit Card Loan?
              </h3>
              <p className="service-description">
                Assess Your Financial Position – Gather all financial records
                and calculate what you can realistically offer. Negotiate
                Strategically – Request a lower settlement amount and provide a
                valid reason. Lenders may agree if they see a genuine repayment
                intent. Stay Persistent – It may take multiple attempts to reach
                an agreement, but perseverance pays off.
              </p>
              <h3 className="service-title">
                Benefits of Credit Card Loan Settlement
              </h3>
              <p className="service-description">
                Debt-Free Faster – Clears outstanding balances and helps you
                move towards financial stability. Saves Money – Paying a settled
                amount is better than accumulating high interest over time.
                Minimizes Credit Damage – A settled account is better than a
                written-off account, which severely impacts your credit score.
                Prevents Harassment – Anti-harassment services can protect you
                from aggressive loan recovery agents during the settlement
                process.
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

export default CreditLoan;
