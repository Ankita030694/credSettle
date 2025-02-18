import React, { useState, useEffect } from "react";
import "./calculator.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Calculator = ({
  setwithCredSettle,
  setwithoutCredSettle,
  setSavings,
}) => {
  const [creditCardDebt, setCreditCardDebt] = useState(0);
  const [personalLoanDebt, setPersonalLoanDebt] = useState(0);
  const [missedPayment, setMissedPayment] = useState("yes");
  const [result, setResult] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const withoutCredSettle = totalDebt * 2.48;
    const withCredSettle = totalDebt * 0.5;
    setwithCredSettle(withCredSettle);
    setwithoutCredSettle(withoutCredSettle);
    const savings = withoutCredSettle - withCredSettle;
    setSavings(savings);
    const savingsPercentage = ((savings / withoutCredSettle) * 100).toFixed(2);
    setResult({
      withoutCredSettle,
      withCredSettle,
      savings,
      savingsPercentage,
    });
  }, [creditCardDebt, personalLoanDebt]);
  const handleRegisterClick = () => {
    navigate("/form", { state: { creditCardDebt, personalLoanDebt } });
  };
  const totalDebt = creditCardDebt + personalLoanDebt;
  const formatIndianNumber = (num) => {
    if (num === undefined || num === null || isNaN(num)) {
      return "0"; // Return a default value or an empty string
    }
    return num.toLocaleString("en-IN");
  };
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1 className="calc_head">SETTLE IT, FORGET IT</h1>
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
        <label style={{fontSize: "20px", fontWeight: "100"}}><b>TOTAL DEBT</b></label>
        <br />
        <div className="missedEMI">
          {/* <div className="form-check form-check-inline activeInput text-center"> */}

            <label className="form-check-label text-primary-colo sub_txt container-fluid" style={{fontSize: "20px"}}>₹{formatIndianNumber(totalDebt)}</label>
          {/* </div> */}
          {/* <div className="form-check form-check-inline activeInput">
            <input
              id="no"
              type="radio"
              value="no"
              checked={missedPayment === "no"}
              onChange={() => setMissedPayment("no")}
              className="form-check-input"
            />
            <label className="form-check-label text-primary-color">No</label>
          </div> */}
        </div>
        <button
          className="btn btn-primary get-started-btn mt-4"
          onClick={handleRegisterClick}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Calculator;
