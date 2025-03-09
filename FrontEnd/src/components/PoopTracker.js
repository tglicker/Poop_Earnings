import React, { useState } from "react";
import SalaryInput from "./SalaryInput";
import PoopLog from "./PoopLog";
import EarningsDisplay from "./EarningsDisplay";

const PoopTracker = () => {
  const [salary, setSalary] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  const logPoopSession = (minutes) => {
    if (salary > 0) {
      const earningsPerMinute = salary / (40 * 60); // Assuming 40-hour work week
      setTotalEarnings(totalEarnings + earningsPerMinute * minutes);
    }
  };

  return (
    <div>
      <h1>Poop Earnings Tracker</h1>
      <SalaryInput salary={salary} setSalary={setSalary} />
      <PoopLog logPoopSession={logPoopSession} />
      <EarningsDisplay totalEarnings={totalEarnings} />
    </div>
  );
};

export default PoopTracker;
