import React from "react";

const EarningsDisplay = ({ salary, totalPoopTime }) => {
  if (!salary || isNaN(salary)) {
    return <p>Please enter a valid salary to calculate earnings.</p>;
  }

  const totalEarnings = ((salary / 2080) * totalPoopTime).toFixed(2);

  return (
    <div className="earnings-container">
      <h2>Poop Earnings</h2>
      <p>Total Earned: ${totalEarnings}</p>
    </div>
  );
};

export default EarningsDisplay;
