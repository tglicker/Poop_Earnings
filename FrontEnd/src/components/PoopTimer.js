import React, { useState, useEffect } from "react";
import "./PoopTimer.css";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [realTimeEarnings, setRealTimeEarnings] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    const savedStartTime = localStorage.getItem("poopStartTime");
    const savedElapsedTime = localStorage.getItem("poopElapsedTime");

    if (savedStartTime) {
      const previousStart = parseInt(savedStartTime, 10);
      const now = Date.now();
      const timeDiff = Math.floor((now - previousStart) / 1000); // Time since last session
      setElapsedTime((prev) => (savedElapsedTime ? parseInt(savedElapsedTime, 10) + timeDiff : timeDiff));
      setStartTime(previousStart);
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1);
      }, 1000);
      localStorage.setItem("poopStartTime", startTime || Date.now());
    } else {
      clearInterval(interval);
      localStorage.removeItem("poopStartTime");
    }

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  useEffect(() => {
    localStorage.setItem("poopElapsedTime", elapsedTime);
    
    if (salary) {
      const hourlyRate = salary / 2080;
      setRealTimeEarnings(((hourlyRate / 3600) * elapsedTime).toFixed(2));
    }
  }, [elapsedTime, salary]);

  const startTimer = () => {
    const now = Date.now();
    setIsRunning(true);
    setStartTime(now);
    localStorage.setItem("poopStartTime", now);
  };

  const stopTimer = () => {
    setIsRunning(false);
    logPoopSession(elapsedTime / 60);
    setElapsedTime(0);
    localStorage.removeItem("poopStartTime");
    localStorage.removeItem("poopElapsedTime");
    setRealTimeEarnings(0);
  };

  return (
    <div className="timer-container">
      <h2 className="title">🚽 Current Poop Session 💩</h2>
      <p className="timer-text">{Math.floor(elapsedTime / 60)} min {elapsedTime % 60} sec</p>
      <p className="earnings-text">💰 Earnings: <strong>${realTimeEarnings}</strong></p>
      {!isRunning ? (
        <button onClick={startTimer} className="start-btn">🚀 Start Pooping</button>
      ) : (
        <button onClick={stopTimer} className="stop-btn">⏹ Stop Poop</button>
      )}
    </div>
  );
};

export default PoopTimer;




