import React, { useState } from 'react';
import SalaryInput from './components/SalaryInput';
import PoopTimer from './components/PoopTimer';
import EarningsDisplay from './components/EarningsDisplay';
import './App.css';

function App() {
  const [salary, setSalary] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [currentSessionEarnings, setCurrentSessionEarnings] = useState(0);
  const [isPooping, setIsPooping] = useState(false);

  const handleEndSession = (minutes) => {
    if (!salary || minutes <= 0) return;

    const hourlyRate = salary / 2080;
    const earningsForSession = (hourlyRate / 60) * minutes;

    setCurrentSessionEarnings(earningsForSession);
    setTotalEarnings((prev) => prev + earningsForSession);
    setIsPooping(false);
  };

  return (
    <div className="app-container">
      <h1>Poop Earnings Tracker 💩💰</h1>

      {/* Salary Input now stays on the same page and is always editable */}
      <SalaryInput salary={salary} setSalary={setSalary} />

      {/* Show Poop Timer and Earnings only after a salary is entered */}
      {salary && (
        <>
          <PoopTimer onEndSession={handleEndSession} isPooping={isPooping} setIsPooping={setIsPooping} />
          <EarningsDisplay 
            totalEarnings={totalEarnings} 
            currentSessionEarnings={currentSessionEarnings} 
          />
        </>
      )}
    </div>
  );
}

export default App;
