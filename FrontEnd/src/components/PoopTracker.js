import React, { useState, useEffect } from "react";
import PoopTimer from "./PoopTimer";
import EarningsDisplay from "./EarningsDisplay";
import PoopLog from "./PoopLog";

const PoopTracker = () => {
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const [salary, setSalary] = useState("");
  const [isSalarySet, setIsSalarySet] = useState(false);
  const [totalPoopTime, setTotalPoopTime] = useState(0);
  const [poopLog, setPoopLog] = useState([]);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username") || "";
    const savedSalary = localStorage.getItem("salary");
    const savedPoopTime = localStorage.getItem("totalPoopTime");
    const savedPoopLog = localStorage.getItem("poopLog");

    if (savedUsername) {
      setUsername(savedUsername);
      setIsUsernameSet(true);
    }
    if (savedSalary) {
      setSalary(savedSalary);
      setIsSalarySet(true);
    }
    if (savedPoopTime) setTotalPoopTime(parseFloat(savedPoopTime));
    if (savedPoopLog) setPoopLog(JSON.parse(savedPoopLog));
  }, []);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const saveUsername = () => {
    if (username.trim() !== "") {
      localStorage.setItem("username", username);
      setIsUsernameSet(true);
    }
  };

  const handleSalaryChange = (e) => setSalary(e.target.value);
  const submitSalary = (e) => {
    e.preventDefault();
    if (salary > 0) {
      localStorage.setItem("salary", salary);
      setIsSalarySet(true);
    }
  };

  const logPoopSession = (minutes) => {
    const earnings = Number(((salary / 2080 /60) * minutes).toFixed(2));
    const newTotalTime = totalPoopTime + minutes;
    const newLog = [
      ...poopLog,
      { date: new Date().toLocaleString(), minutes, earnings },
    ];

    setTotalPoopTime(newTotalTime);
    setPoopLog(newLog);
    localStorage.setItem("totalPoopTime", newTotalTime);
    localStorage.setItem("poopLog", JSON.stringify(newLog));
  };

  return (
    <div className="tracker-container">
      <h1>Poop Earnings Tracker</h1>

      {/* Username Input */}
      {!isUsernameSet ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
            className="input-field"
          />
          <button onClick={saveUsername} className="submit-btn">
            Set Username
          </button>
        </div>
      ) : null}

      {/* Salary Input */}
      {isUsernameSet && !isSalarySet ? (
        <form onSubmit={submitSalary} className="input-container">
          <input
            type="number"
            placeholder="100000"
            value={salary}
            onChange={handleSalaryChange}
            className="input-field"
          />
          <button type="submit" className="submit-btn">Set Salary</button>
        </form>
      ) : null}

      {/* Main UI (only visible after salary is set) */}
      {isUsernameSet && isSalarySet && (
        <>
          <div className="salary-display">
            <span>Salary: ${salary}</span>
            <button onClick={() => setIsSalarySet(false)} className="edit-btn">
              Edit Salary
            </button>
          </div>
          <PoopTimer salary={salary} logPoopSession={logPoopSession} />
          <EarningsDisplay salary={salary} totalPoopTime={totalPoopTime} />
          <PoopLog log={poopLog} />
        </>
      )}
    </div>
  );
};

export default PoopTracker;
