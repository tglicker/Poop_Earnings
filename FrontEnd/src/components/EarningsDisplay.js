import React from "react";

const EarningsDisplay = ({ totalTime, totalEarnings }) => {
  return (
    <div className="earnings-display">
      <h2>Total Earned While Pooping: ${totalEarnings.toFixed(2)}</h2>
      <p>Total Time: {Math.floor(totalTime / 60)}m {totalTime % 60}s</p>
    </div>
  );
};

export default EarningsDisplay;
