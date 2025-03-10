import React from "react";

const EarningsDisplay = ({ salary, totalPoopTime, currentSessionEarnings }) => {
  const totalEarnings = salary ? ((salary / 2080) * totalPoopTime).toFixed(2) : "0.00";

  return (
    <div>
      <h2>Earnings</h2>
      <p>Current Session Earnings: ${currentSessionEarnings.toFixed(2)}</p>
      <p>Total Earned While Pooping: ${totalEarnings}</p>
    </div>
  );
};

export default EarningsDisplay;
