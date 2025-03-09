import React, { useState } from "react";
import SalaryInput from "./SalaryInput";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";
import PoopLog from "./PoopLog";

const PoopTracker = () => {
  const [salary, setSalary] = useState(0);
  const [totalPoopTime, setTotalPoopTime] = useState(0); // Total minutes
  const [poopLog, setPoopLog] = useState([]); // Stores past poops

  const handleSalaryChange = (newSalary) => {
    setSalary(newSalary);
  };

  const logPoopSession = (minutes) => {
    const earnings = (salary / 2080) * minutes; // Calculate based on yearly salary & work hours
    setTotalPoopTime((prevTime) => prevTime + minutes);
    
    setPoopLog((prevLog) => [
      ...prevLog,
      { date: new Date().toLocaleString(), minutes, earnings },
    ]);
  };

  return (
    <div>
      <h1>Poop Earnings Tracker</h1>
      <SalaryInput onSalaryChange={handleSalaryChange} />
      <PoopTimer salary={salary} logPoopSession={logPoopSession} />
      <EarningsDisplay salary={salary} totalPoopTime={totalPoopTime} />
      <PoopLog log={poopLog} />
    </div>
  );
};

export default PoopTracker;
