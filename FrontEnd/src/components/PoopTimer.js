import React, { useState, useEffect } from "react";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [realTimeEarnings, setRealTimeEarnings] = useState(0);

  useEffect(() => {
    const savedStartTime = localStorage.getItem("poopStartTime");
    const savedElapsedTime = localStorage.getItem("poopElapsedTime");

    if (savedStartTime) {
      const previousStart = parseInt(savedStartTime, 10);
      const now = Date.now();
      const timeDiff = Math.floor((now - previousStart) / 1000);
      setElapsedTime(parseInt(savedElapsedTime, 10) + timeDiff);
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
    
    // Calculate real-time earnings
    if (salary) {
      const hourlyRate = salary / 2080; // Assume 40 hours/week, 52 weeks
      setRealTimeEarnings(((hourlyRate / 3600) * elapsedTime).toFixed(2));
    }
  }, [elapsedTime, salary]);

  const startTimer = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setIsRunning(false);
    logPoopSession(elapsedTime / 60);
    setElapsedTime(0);
    localStorage.removeItem("poopElapsedTime");
    setRealTimeEarnings(0);
  };

  return (
    <div className="timer-container">
      <h2>Current Poop Session</h2>
      <p>{Math.floor(elapsedTime / 60)} min {elapsedTime % 60} sec</p>
      <p>Real-Time Earnings: ${realTimeEarnings}</p>
      {!isRunning ? (
        <button onClick={startTimer} className="start-btn">Start</button>
      ) : (
        <button onClick={stopTimer} className="stop-btn">Stop</button>
      )}
    </div>
  );
};

export default PoopTimer;

