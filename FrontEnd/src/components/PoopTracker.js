import React, { useState, useEffect } from "react";
import SalaryInput from "./SalaryInput";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";
import PoopLog from "./PoopLog";

const PoopTracker = () => {
  const [username, setUsername] = useState(""); // Store username
  const [salary, setSalary] = useState(null); // Store salary per user
  const [totalPoopTime, setTotalPoopTime] = useState(0); // Total time in minutes
  const [poopLog, setPoopLog] = useState([]); // Stores past poops
  const [isSalarySet, setIsSalarySet] = useState(false); // Track if salary was submitted

  useEffect(() => {
    // Load user data from localStorage
    const savedUsername = localStorage.getItem("username") || "";
    const savedSalary = localStorage.getItem("salary");
    const savedPoopTime = localStorage.getItem("totalPoopTime");
    const savedPoopLog = localStorage.getItem("poopLog");

    setUsername(savedUsername);
    if (savedSalary) setSalary(parseFloat(savedSalary));
    if (savedPoopTime) setTotalPoopTime(parseFloat(savedPoopTime));
    if (savedPoopLog) setPoopLog(JSON.parse(savedPoopLog));

    setIsSalarySet(!!savedSalary); // Hide salary input if already set
  }, []);

  const handleSalaryChange = (newSalary) => {
    setSalary(newSalary);
    localStorage.setItem("salary", newSalary);
    setIsSalarySet(true); // Hide input after setting salary
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const saveUsername = () => {
    localStorage.setItem("username", username);
  };

  const logPoopSession = (minutes) => {
    const earnings = (salary / 2080) * minutes;
    const newTotalTime = totalPoopTime + minutes;
    const newLog = [
      ...poopLog,
      { date: new Date().toLocaleString(), minutes, earnings },
    ];

    setTotalPoopTime(newTotalTime);
    setPoopLog(newLog);

    // Save in localStorage per user
    localStorage.setItem("totalPoopTime", newTotalTime);
    localStorage.setItem("poopLog", JSON.stringify(newLog));
  };

  return (
    <div className="tracker-container">
      <h1>Poop Earnings Tracker</h1>

      {!username && (
        <div className="username-container">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <button onClick={saveUsername}>Set Username</button>
        </div>
      )}

      {username && !isSalarySet && (
        <SalaryInput onSalaryChange={handleSalaryChange} />
      )}

      {username && isSalarySet && (
        <>
          <button onClick={() => setIsSalarySet(false)} className="edit-salary-btn">
            Edit Salary
          </button>
          <PoopTimer salary={salary} logPoopSession={logPoopSession} />
          <EarningsDisplay salary={salary} totalPoopTime={totalPoopTime} />
          <PoopLog log={poopLog} />
        </>
      )}
    </div>
  );
};

export default PoopTracker;
