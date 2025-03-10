import React, { useState } from "react";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isPooping, setIsPooping] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startPoop = () => {
    setIsPooping(true);
    setElapsedTime(0);
    const id = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const endPoop = () => {
    setIsPooping(false);
    clearInterval(intervalId);
    
    const minutes = elapsedTime / 60; // Convert seconds to minutes
    logPoopSession(minutes);
  };

  return (
    <div>
      <h2>Poop Timer</h2>
      {isPooping ? (
        <div>
          <p>Time: {Math.floor(elapsedTime / 60)} min {elapsedTime % 60} sec</p>
          <button onClick={endPoop}>💩 End Poop Session</button>
        </div>
      ) : (
        <button onClick={startPoop}>🚽 Start Poop Session</button>
      )}
    </div>
  );
};

export default PoopTimer;
