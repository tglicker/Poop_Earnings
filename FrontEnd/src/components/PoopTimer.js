import React, { useState, useEffect } from 'react';

const PoopTimer = ({ onEndSession, isPooping, setIsPooping }) => {
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (!isPooping) {
      setIsPooping(true);
      setSeconds(0);
      const id = setInterval(() => setSeconds((prev) => prev + 1), 1000);
      setIntervalId(id);
    }
  };

  const handleEnd = () => {
    clearInterval(intervalId);
    onEndSession(seconds / 60);
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div className="poop-timer">
      {isPooping ? (
        <>
          <p>Current session time: {seconds} seconds</p>
          <button onClick={handleEnd}>End Poop Session 🚽</button>
        </>
      ) : (
        <button onClick={handleStart}>Start Poop Session 💩</button>
      )}
    </div>
  );
};

export default PoopTimer;
