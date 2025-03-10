import React, { useState } from "react";

const SalaryInput = ({ onSalaryChange }) => {
  const [inputSalary, setInputSalary] = useState("");

  const handleChange = (e) => {
    setInputSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryValue = parseFloat(inputSalary);
    if (!isNaN(salaryValue) && salaryValue > 0) {
      onSalaryChange(salaryValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="salary-input-container">
      <input
        type="number"
        value={inputSalary}
        onChange={handleChange}
        placeholder="150000" // Ghost text added back
        className="salary-input"
      />
      <button type="submit" className="submit-salary-btn">Set Salary</button>
    </form>
  );
};

export default SalaryInput;
