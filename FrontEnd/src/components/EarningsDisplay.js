import React from 'react';

const EarningsDisplay = ({ totalEarnings, currentSessionEarnings }) => {
  return (
    <div className="earnings-display">
      <h2>Current Session Earnings: ${currentSessionEarnings.toFixed(2)}</h2>
      <h2>Total Earned While Pooping: ${totalEarnings.toFixed(2)}</h2>
    </div>
  );
};

export default EarningsDisplay;
