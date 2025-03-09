import React, { useState } from 'react';
import SalaryInput from './components/SalaryInput';  // <-- Adjusted path
import PoopTimer from './components/PoopTimer';
import EarningsDisplay from './components/EarningsDisplay';
import './App.css';

function App() {
  const [salary, setSalary] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [currentSessionEarnings, setCurrentSessionEarnings] = useState(0);

  const handleEndSession = (minutes) => {
    if (!salary || minutes <= 0) return;

    const hourlyRate = salary / 2080;
    const earningsForSession = (hourlyRate / 60) * minutes;

    setCurrentSessionEarnings(earningsForSession);
    setTotalEarnings((prev) => prev + earningsForSession);
  };

  return (
    <div className="app-container">
      <h1>Poop Earnings Tracker 💩💰</h1>

      {!salary ? (
        <SalaryInput setSalary={setSalary} />
      ) : (
        <>
          <PoopTimer onEndSession={handleEndSession} />
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
