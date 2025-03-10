import React, { useState, useEffect } from "react";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";
import PoopLog from "./PoopLog";

const PoopTracker = () => {
  const [username, setUsername] = useState("");
  const [salary, setSalary] = useState(null);
  const [totalPoopTime, setTotalPoopTime] = useState(0);
  const [poopLog, setPoopLog] = useState([]);
  const [currentSessionEarnings, setCurrentSessionEarnings] = useState(0);
  const [isEditingSalary, setIsEditingSalary] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUsername(storedUser);
      loadUserData(storedUser);
    }
  }, []);

  const loadUserData = (user) => {
    const userData = JSON.parse(localStorage.getItem(user)) || {};
    setSalary(userData.salary || null);
    setTotalPoopTime(userData.totalPoopTime || 0);
    setPoopLog(userData.poopLog || []);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleUserSubmit = () => {
    localStorage.setItem("username", username);
    loadUserData(username);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const submitSalary = () => {
    if (salary) {
      const userData = { salary, totalPoopTime, poopLog };
      localStorage.setItem(username, JSON.stringify(userData));
      setIsEditingSalary(false);
    }
  };

  const logPoopSession = (minutes) => {
    const earnings = (salary / 2080) * minutes;
    setCurrentSessionEarnings(earnings);
    const newTotalTime = totalPoopTime + minutes;
    const newPoopLog = [...poopLog, { date: new Date().toLocaleString(), minutes, earnings }];

    setTotalPoopTime(newTotalTime);
    setPoopLog(newPoopLog);
    
    const updatedUserData = { salary, totalPoopTime: newTotalTime, poopLog: newPoopLog };
    localStorage.setItem(username, JSON.stringify(updatedUserData));
  };

  return (
    <div>
      <h1>Poop Earnings Tracker</h1>

      {!username ? (
        <div>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Enter your name" />
          <button onClick={handleUserSubmit}>Start</button>
        </div>
      ) : (
        <div>
          {isEditingSalary ? (
            <div>
              <input type="number" value={salary || ""} onChange={handleSalaryChange} placeholder="Enter your salary" />
              <button onClick={submitSalary}>Save Salary</button>
            </div>
          ) : (
            <div>
              <p>Salary set. <button onClick={() => setIsEditingSalary(true)}>Edit</button></p>
            </div>
          )}

          <PoopTimer salary={salary} logPoopSession={logPoopSession} />
          <EarningsDisplay currentSessionEarnings={currentSessionEarnings} totalPoopTime={totalPoopTime} salary={salary} />
          <PoopLog log={poopLog} />
        </div>
      )}
    </div>
  );
};

export default PoopTracker;
