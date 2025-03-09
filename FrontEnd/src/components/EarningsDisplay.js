import React from "react";

const EarningsDisplay = ({ salary = 0, totalPoopTime = 0 }) => {
  const earnings = (salary / 2080) * totalPoopTime; // Calculate earnings

  return (
    <div>
      <h2>Total Earnings: ${earnings.toFixed(2)}</h2>
    </div>
  );
};

export default EarningsDisplay;
