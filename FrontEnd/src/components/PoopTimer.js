import React, { useState, useEffect } from "react";

const PoopTimer = ({ salary, logPoopSession }) => {
  const [isPooping, setIsPooping] = useState(false);
  const [poopTime, setPoopTime] = useState(0); // Seconds

  useEffect(() => {
    let timer;
    if (isPooping) {
      timer = setInterval(() => {
        setPoopTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPooping]);

  const startPooping = () => {
    setPoopTime(0);
    setIsPooping(true);
  };

  const endPooping = () => {
    setIsPooping(false);
    logPoopSession(poopTime);
  };

  return (
    <div className="poop-timer">
      <button className="start-poop" onClick={startPooping} disabled={isPooping}>
        Start Poop 🚽
      </button>
      <button className="end-poop" onClick={endPooping} disabled={!isPooping}>
        End Poop ✅
      </button>
      <p>Current Session: {Math.floor(poopTime / 60)}m {poopTime % 60}s</p>
    </div>
  );
};

export default PoopTimer;
