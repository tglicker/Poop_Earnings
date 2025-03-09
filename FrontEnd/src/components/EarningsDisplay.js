import React from "react";

const EarningsDisplay = ({ earnings = 0 }) => {
  return (
    <div>
      <h2>Total Earnings: ${earnings.toFixed(2)}</h2>
    </div>
  );
};

export default EarningsDisplay;
