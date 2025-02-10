import React from "react";
import "../personalloan/personalloan.css";
import serviceImage1 from "../../../assets/images/6.png";
import serviceImage2 from "../../../assets/images/7.png";
import banner from "../../../assets/images/banner.png"

const Antiharassement = () => {
    
  return (
    <div>
      <div>
        {/* Banner Section */}
        <div
          className="service-banner"
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className="banner-overlay">
            <h1 className="service-heading">Anti-Harassement Service</h1>
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
                Facing Harassment from Loan Recovery Agents? Here’s How to Stop
                It!
              </h3>
              <p className="service-description">
                If you're struggling with loan repayment and facing harassment
                from loan recovery agents, you have legal rights and options to
                protect yourself. Many borrowers experience aggressive calls,
                home visits, public shaming, and even threats from unregulated
                recovery agents. However, such actions violate RBI guidelines
                and consumer protection laws in India. At CredSettle.com, we
                offer anti-harassment services to safeguard you from unethical
                recovery practices and help you settle your loan legally and
                stress-free.
              </p>
              <h3 className="service-title">
                What Counts as Loan Recovery Harassment?
              </h3>
              <p className="service-description">
                Excessive Calls & Threats – Receiving repeated, threatening, or
                abusive calls from agents. Home & Workplace Visits – Recovery
                agents showing up unannounced at your home or office, causing
                embarrassment. Public Shaming – Informing your relatives,
                colleagues, or neighbors about your debt, which is illegal.
                Mental & Emotional Harassment – Using fear tactics to pressure
                you into repayment. Misuse of Social Media & WhatsApp – Sending
                threats, defamatory messages, or publicly disclosing your debt
                details.
              </p>
              <h3 className="service-title">
                Your Legal Rights Against Loan Recovery Harassment
              </h3>
              <p className="service-description">
                RBI Guidelines: Lenders and recovery agents must follow fair
                recovery practices. They cannot use abusive language, threats,
                or force. Consumer Protection Laws: You can file a complaint if
                agents violate your privacy or cause undue mental distress.
                Legal Recourse: You can report harassment to the police, RBI, or
                the banking ombudsman if agents are violating ethical practices.
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
                How Our Anti-Harassment Services Can Help You
              </h3>
              <p className="service-description">
                Legal Protection – We ensure lenders and agents follow legal
                recovery practices and help you take legal action if needed.
                Cease & Desist Notice – Our legal team sends a notice to lenders
                demanding an end to unlawful harassment. Loan Settlement
                Negotiation – We negotiate with your lender for a fair and
                reduced settlement to close your loan. Credit Report Assistance
                – We help minimize negative impacts on your credit score due to
                delayed payments or settlements. Peace of Mind – We handle the
                stress, allowing you to focus on financial recovery without fear
                or intimidation.
              </p>
              <h3 className="service-title">
                Take Action Against Loan Harassment Today!
              </h3>
              <p className="service-description">
                You don’t have to suffer in silence! If you’re being harassed by
                loan recovery agents, contact CredSettle.com today for
                professional assistance. Our anti-harassment experts will
                protect your rights and negotiate a solution that works for you.
                Regain Your Peace of Mind—Stop Loan Harassment Now!
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
            <div className="d-flex flex-direction-row align-items-center justify-content-center mt-5">
              <a href="/form" className="m-1">
                <button className="btn btn-primary get-started-btn1">
                  Register Now
                </button>
              </a>
              <a href="/services/creditscore" className="m-1">
                <button className="btn btn-primary get-started-btn1">
                  Credit Score Builder Service
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Antiharassement;
