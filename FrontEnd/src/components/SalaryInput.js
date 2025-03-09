import React, { useState } from "react";

const SalaryInput = ({ onSalaryChange, submitSalary }) => {
  const [inputSalary, setInputSalary] = useState("");

  const handleChange = (e) => {
    setInputSalary(e.target.value);
  };

  const handleSubmit = () => {
    const salaryNumber = parseFloat(inputSalary);
    if (!isNaN(salaryNumber) && salaryNumber > 0) {
      onSalaryChange(salaryNumber);
      submitSalary();
    }
  };

  return (
    <div className="salary-input">
      <label>Enter Your Annual Salary:</label>
      <input 
        type="number" 
        value={inputSalary} 
        onChange={handleChange} 
        placeholder="200000"
      />
      <button className="save-button" onClick={handleSubmit}>Save Salary</button>
    </div>
  );
};

export default SalaryInput;
