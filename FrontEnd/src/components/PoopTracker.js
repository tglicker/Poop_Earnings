import React, { useState } from "react";
import SalaryInput from "./SalaryInput";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";
import PoopLog from "./PoopLog";

const PoopTracker = () => {
  const [salary, setSalary] = useState(null);
  const [totalPoopTime, setTotalPoopTime] = useState(0); // Total minutes
  const [currentSessionEarnings, setCurrentSessionEarnings] = useState(0);
  const [poopLog, setPoopLog] = useState([]);
  const [salarySubmitted, setSalarySubmitted] = useState(false);

  const handleSalaryChange = (newSalary) => {
    setSalary(newSalary);
  };

  const submitSalary = () => {
    setSalarySubmitted(true);
  };

  const editSalary = () => {
    setSalarySubmitted(false);
  };

  const logPoopSession = (minutes) => {
    if (salary) {
      const earnings = (salary / 2080) * minutes;
      setTotalPoopTime((prevTime) => prevTime + minutes);
      setCurrentSessionEarnings(earnings);
      setPoopLog((prevLog) => [
        ...prevLog,
        { date: new Date().toLocaleString(), minutes, earnings },
      ]);
    }
  };

  return (
    <div className="poop-tracker">
      <h1>Poop Earnings Tracker 💩💰</h1>

      {!salarySubmitted ? (
        <SalaryInput onSalaryChange={handleSalaryChange} submitSalary={submitSalary} />
      ) : (
        <div>
          <button className="edit-button" onClick={editSalary}>Edit Salary</button>
        </div>
      )}

      <PoopTimer salary={salary} logPoopSession={logPoopSession} />
      <EarningsDisplay 
        salary={salary} 
        totalPoopTime={totalPoopTime} 
        currentSessionEarnings={currentSessionEarnings} 
      />
      <PoopLog log={poopLog} />
    </div>
  );
};

export default PoopTracker;
