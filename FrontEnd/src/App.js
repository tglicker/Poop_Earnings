import React, { useState } from 'react';
import SalaryInput from './SalaryInput';
import PoopTimer from './PoopTimer';
import EarningsDisplay from './EarningsDisplay';
import './App.css';

function App() {
  const [salary, setSalary] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [currentSessionEarnings, setCurrentSessionEarnings] = useState(0);

  const handleEndSession = (minutes) => {
    if (!salary || minutes <= 0) return;

    // Corrected Earnings Calculation
    const hourlyRate = salary / 2080; // 2080 work hours in a year
    const earningsForSession = (hourlyRate / 60) * minutes; // Earnings per minute

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
