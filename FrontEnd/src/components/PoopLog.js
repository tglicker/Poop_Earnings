import React from "react";

const PoopLog = ({ log }) => {
  return (
    <div>
      <h2>Poop Log</h2>
      <ul>
        {log.map((session, index) => (
          <li key={index}>
            {session.date} - {session.minutes.toFixed(1)} min - ${session.earnings.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoopLog;
