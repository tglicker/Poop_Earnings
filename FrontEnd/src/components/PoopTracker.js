import React, { useState } from "react";
import SalaryInput from "./SalaryInput";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";

const PoopTracker = () => {
  const [salary, setSalary] = useState(null);
  const [totalPoopTime, setTotalPoopTime] = useState(0); // Total seconds
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [showSalaryInput, setShowSalaryInput] = useState(true);

  const handleSalaryChange = (newSalary) => {
    setSalary(newSalary);
    setShowSalaryInput(false);
  };

  const editSalary = () => {
    setShowSalaryInput(true);
  };

  const logPoopSession = (seconds) => {
    const earnings = ((salary / 2080) / 3600) * seconds; // Calculate per second
    setTotalPoopTime((prevTime) => prevTime + seconds);
    setTotalEarnings((prevEarnings) => prevEarnings + earnings);
  };

  return (
    <div className="poop-tracker">
      <h1>Poop Earnings Tracker 💩💰</h1>

      {showSalaryInput ? (
        <SalaryInput onSalaryChange={handleSalaryChange} />
      ) : (
        <div className="salary-display">
          <p>Annual Salary: ${salary.toLocaleString()} / yr</p>
          <button className="edit-btn" onClick={editSalary}>Edit Salary ✏️</button>
        </div>
      )}

      <PoopTimer salary={salary} logPoopSession={logPoopSession} />
      <EarningsDisplay totalPoopTime={totalPoopTime} totalEarnings={totalEarnings} />
    </div>
  );
};

export default PoopTracker;
