import React from 'react';

const EarningsDisplay = ({ totalEarnings, currentSessionEarnings }) => {
  return (
    <div className="earnings-display">
      <h2>Current Session Earnings</h2>
      <p>${currentSessionEarnings.toFixed(2)}</p>

      <h2>Total Earned While Pooping</h2>
      <p>${totalEarnings.toFixed(2)}</p>
    </div>
  );
};

export default EarningsDisplay;
