import React, { useState } from "react";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isTiming, setIsTiming] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    setStartTime(Date.now());
    setIsTiming(true);
  };

  const stopTimer = () => {
    if (startTime) {
      const duration = Math.floor((Date.now() - startTime) / 60000); // Convert ms to minutes
      setElapsedTime(duration);
      logPoopSession(duration);
    }
    setIsTiming(false);
  };

  return (
    <div>
      <h2>Poop Timer</h2>
      {!isTiming ? (
        <button onClick={startTimer}>Start Pooping</button>
      ) : (
        <button onClick={stopTimer}>Stop Pooping</button>
      )}
      {elapsedTime > 0 && <p>Last session: {elapsedTime} minutes</p>}
    </div>
  );
};

export default PoopTimer;
