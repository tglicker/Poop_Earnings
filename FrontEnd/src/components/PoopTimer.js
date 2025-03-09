import React, { useState } from 'react';

const PoopTimer = ({ onEndSession }) => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPooping, setIsPooping] = useState(false);

  const startPoop = () => {
    setStartTime(Date.now());
    setIsPooping(true);
  };

  const endPoop = () => {
    if (!isPooping) return;
    
    const endTime = Date.now();
    const minutes = (endTime - startTime) / 60000; // Convert ms to minutes
    
    setElapsedTime(minutes.toFixed(2));
    setIsPooping(false);
    setStartTime(null);

    onEndSession(minutes);
  };

  return (
    <div className="poop-timer">
      <button className="start-btn" onClick={startPoop} disabled={isPooping}>
        Start Poop 🚽
      </button>
      <button className="end-btn" onClick={endPoop} disabled={!isPooping}>
        End Poop ✅
      </button>
    </div>
  );
};

export default PoopTimer;
