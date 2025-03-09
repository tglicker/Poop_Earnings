import React from 'react';

const EarningsDisplay = ({ totalEarnings, currentSessionEarnings }) => {
  return (
    <div className="earnings-display">
      <h2>Total Earned While Pooping</h2>
      <p>${(totalEarnings || 0).toFixed(2)}</p>

      <h2>Current Session Earnings</h2>
      <p>${(currentSessionEarnings || 0).toFixed(2)}</p>
    </div>
  );
};

export default EarningsDisplay;
