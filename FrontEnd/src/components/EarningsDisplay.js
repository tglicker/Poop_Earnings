import React from "react";

const EarningsDisplay = ({ totalEarnings }) => {
  return (
    <div>
      <h2>Total Earnings</h2>
      <p>You have earned: ${totalEarnings.toFixed(2)} while pooping!</p>
    </div>
  );
};

export default EarningsDisplay;
