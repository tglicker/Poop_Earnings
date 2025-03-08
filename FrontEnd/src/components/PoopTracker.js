import React, { useState } from "react";

function PoopTracker() {
  const [salary, setSalary] = useState("");
  const [earnings, setEarnings] = useState(0);
  const [sessionTime, setSessionTime] = useState("");

  const handleCalculate = () => {
    const hourlyRate = salary / 2080; // Assuming 40hrs/week, 52 weeks
    const sessionMinutes = parseFloat(sessionTime);
    const earningsFromPoop = (hourlyRate / 60) * sessionMinutes;
    setEarnings(earningsFromPoop.toFixed(2));
  };

  return (
    <div>
      <h2>Track Your Poop Earnings</h2>
      <label>
        Annual Salary: $
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Enter salary"
        />
      </label>
      <br />
      <label>
        Poop Time (minutes):
        <input
          type="number"
          value={sessionTime}
          onChange={(e) => setSessionTime(e.target.value)}
          placeholder="Enter minutes"
        />
      </label>
      <br />
      <button onClick={handleCalculate}>Calculate Earnings</button>
      <h3>You earned: ${earnings} while pooping!</h3>
    </div>
  );
}

export default PoopTracker;
