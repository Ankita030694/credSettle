import React, { useState, useEffect } from "react";
import "./calculator.css";

const Calculator = ({
  setwithCredSettle,
  setwithoutCredSettle,
  setSavings,
}) => {
  const [creditCardDebt, setCreditCardDebt] = useState(0);
  const [personalLoanDebt, setPersonalLoanDebt] = useState(0);
  const [missedPayment, setMissedPayment] = useState("yes");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const totalDebt = creditCardDebt + personalLoanDebt;
    const withoutCredSettle = totalDebt * 2.48; 
    const withCredSettle = totalDebt * 0.5; 
    setwithCredSettle(withCredSettle);
    setwithoutCredSettle(withoutCredSettle);
    const savings = totalDebt - withCredSettle;
    setSavings(savings);
    const savingsPercentage = ((savings / withoutCredSettle) * 100).toFixed(2);
    setResult({
      withoutCredSettle,
      withCredSettle,
      savings,
      savingsPercentage,
    });
  }, [creditCardDebt, personalLoanDebt]);

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 className="calc_head">DEBT FREE, STRESS FREE</h1>
      <p className="calc_txt">
        This tool will help you calculate how much you can save with{" "}
        <span className="sub_txt">CredSettle</span>
      </p>
      <span>Credit Card Debt: </span>
      <span className="data"> ₹{creditCardDebt.toLocaleString("en-IN")}</span>
      <input
        type="range"
        min="0"
        max="10000000"
        step="5000"
        value={creditCardDebt}
        onChange={(e) => setCreditCardDebt(Number(e.target.value))}
      />
      {/* <span>Credit Card Debt: ₹{creditCardDebt.toLocaleString("en-IN")}</span> */}
      <br />
      <span>Personal Loan Debt: </span>
      <span className="data"> ₹{personalLoanDebt.toLocaleString("en-IN")}</span>
      <input
        type="range"
        min="0"
        max="10000000"
        step="5000"
        value={personalLoanDebt}
        onChange={(e) => setPersonalLoanDebt(Number(e.target.value))}
      />
      {/* <br /> */}
      <br />
      <div className="switch-section">
        <label>Missed any payments in last 30 days?</label>
        <br />
        <div className="missedEMI">
          <div className="form-check form-check-inline activeInput">
            <input
              id="yes"
              type="radio"
              value="yes"
              checked={missedPayment === "yes"}
              onChange={() => setMissedPayment("yes")}
              className="form-check-input"
            />
            <label className="form-check-label text-primary-color">Yes</label>
          </div>
          <div className="form-check form-check-inline activeInput">
            <input
              id="no"
              type="radio"
              value="no"
              checked={missedPayment === "no"}
              onChange={() => setMissedPayment("no")}
              className="form-check-input"
            />
            <label className="form-check-label text-primary-color">No</label>
          </div>
        </div>
        <button className="btn btn-primary get-started-btn mt-4">
          Register Now
        </button>
        {/* <br /> */}
        {/* <br /> */}
      </div>

      {/* {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Results</h2>
          <p>Without CredSettle: ₹{result.withoutCredSettle.toLocaleString()}</p>
          <p>With CredSettle: ₹{result.withCredSettle.toLocaleString()} or less</p>
          <p>Total Savings: ₹{result.savings.toLocaleString()} or more</p>
          <p>You can save up to 50% to 65%</p>
          <p>Debt-Free in: 9 months</p>
        </div>
      )} */}
    </div>
  );
};

export default Calculator;
