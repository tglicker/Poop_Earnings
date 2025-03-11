import React, { useState, useEffect } from "react";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const savedStartTime = localStorage.getItem("poopStartTime");
    const savedElapsedTime = localStorage.getItem("poopElapsedTime");

    if (savedStartTime) {
      const previousStart = parseInt(savedStartTime, 10);
      const now = Date.now();
      const timeDiff = Math.floor((now - previousStart) / 1000); // Convert ms to seconds
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
  }, [elapsedTime]);

  const startTimer = () => {
    setIsRunning(true);
    setStartTime(Date.now());
  };

  const stopTimer = () => {
    setIsRunning(false);
    logPoopSession(elapsedTime / 60); // Convert seconds to minutes
    setElapsedTime(0);
    localStorage.removeItem("poopElapsedTime");
  };

  return (
    <div className="timer-container">
      <h2>Current Poop Session</h2>
      <p>{Math.floor(elapsedTime / 60)} min {elapsedTime % 60} sec</p>
      {!isRunning ? (
        <button onClick={startTimer} className="start-btn">Start</button>
      ) : (
        <button onClick={stopTimer} className="stop-btn">Stop</button>
      )}
    </div>
  );
};

export default PoopTimer;

