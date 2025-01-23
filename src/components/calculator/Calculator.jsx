import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [creditCardDebt, setCreditCardDebt] = useState(0);
  const [personalLoanDebt, setPersonalLoanDebt] = useState(0);
  const [missedPayment, setMissedPayment] = useState('yes');
  const [result, setResult] = useState(null);

  useEffect(() => {
    const totalDebt = creditCardDebt + personalLoanDebt;
    const withoutFREED = totalDebt * 0.9;  // Assumed multiplier
    const withFREED = totalDebt * 0.5;     // FREED program reduces to 45%
    const savings = totalDebt - withFREED;
    const savingsPercentage = ((savings / withoutFREED) * 100).toFixed(2);
    setResult({ withoutFREED, withFREED, savings, savingsPercentage });
  }, [creditCardDebt, personalLoanDebt]);

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Debt Calculator</h1>
      <label>Credit Card Debt: </label>
      <input
        type="range"
        min="0"
        max="1000000"
        step="5000"
        value={creditCardDebt}
        onChange={(e) => setCreditCardDebt(Number(e.target.value))}
      />
      <span> ₹{creditCardDebt.toLocaleString()}</span>
      <br /><br />
      <label>Personal Loan Debt: </label>
      <input
        type="range"
        min="0"
        max="1000000"
        step="5000"
        value={personalLoanDebt}
        onChange={(e) => setPersonalLoanDebt(Number(e.target.value))}
      />
      <span> ₹{personalLoanDebt.toLocaleString()}</span>
      <br /><br />
      <label>Missed any payments in last 30 days?</label><br/>
      <input
        type="radio"
        value="yes"
        checked={missedPayment === 'yes'}
        onChange={() => setMissedPayment('yes')}
      /> Yes
      <input
        type="radio"
        value="no"
        checked={missedPayment === 'no'}
        onChange={() => setMissedPayment('no')}
      /> No
      <br /><br />
      {result && (
        <div style={{ marginTop: '20px' }}>
          <h2>Results</h2>
          <p>Without CredSettle: ₹{result.withoutFREED.toLocaleString()}</p>
          <p>With CredSettle: ₹{result.withFREED.toLocaleString()} or less</p>
          <p>Total Savings: ₹{result.savings.toLocaleString()}</p>
          <p>You can save up to 50% to 65%</p>
          <p>Debt-Free in: 9 months</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
