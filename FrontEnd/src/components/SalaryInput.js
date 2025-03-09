import React, { useState } from 'react';

const SalaryInput = ({ setSalary }) => {
  const [inputSalary, setInputSalary] = useState('');

  const handleSubmit = () => {
    const parsedSalary = parseFloat(inputSalary);
    if (!isNaN(parsedSalary) && parsedSalary > 0) {
      setSalary(parsedSalary);
    }
  };

  return (
    <div className="salary-input">
      <label>Enter Your Annual Salary:</label>
      <input 
        type="number" 
        value={inputSalary} 
        onChange={(e) => setInputSalary(e.target.value)} 
        placeholder="e.g. 200000"
      />
      <button onClick={handleSubmit}>Save Salary</button>
    </div>
  );
};

export default SalaryInput;
