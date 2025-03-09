import React, { useState } from "react";

const SalaryInput = ({ onSalaryChange }) => {
  const [salary, setSalary] = useState("");

  const handleSubmit = () => {
    const parsedSalary = parseFloat(salary);
    if (!isNaN(parsedSalary) && parsedSalary > 0) {
      onSalaryChange(parsedSalary);
    }
  };

  return (
    <div className="salary-input-container">
      <label>Enter Your Annual Salary:</label>
      <input 
        type="number" 
        value={salary} 
        onChange={(e) => setSalary(e.target.value)} 
        placeholder="$150000" 
      />
      <button className="save-button" onClick={handleSubmit}>Save Salary 💾</button>
    </div>
  );
};

export default SalaryInput;
