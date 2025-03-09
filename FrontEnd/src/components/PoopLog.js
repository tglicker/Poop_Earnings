import React, { useState } from "react";

const PoopLog = ({ logPoopSession }) => {
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (duration) {
      logPoopSession(Number(duration));
      setDuration("");
    }
  };

  return (
    <div>
      <h2>Log a Poop Session</h2>
      <form onSubmit={handleSubmit}>
        <label>Minutes Spent:</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Log</button>
      </form>
    </div>
  );
};

export default PoopLog;
