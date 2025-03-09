import React, { useState } from 'react';

const SalaryInput = ({ salary, setSalary }) => {
  const [inputSalary, setInputSalary] = useState(salary || '');
  const [isEditing, setIsEditing] = useState(true); // Start in edit mode

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryValue = parseFloat(inputSalary);
    if (!isNaN(salaryValue) && salaryValue > 0) {
      setSalary(salaryValue);
      setIsEditing(false);
    }
  };

  return (
    <div className="salary-input">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Enter your annual salary:
            <input 
              type="number" 
              value={inputSalary} 
              onChange={(e) => setInputSalary(e.target.value)} 
              required 
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Salary: ${salary.toLocaleString()} 💰</p>
          <button onClick={() => setIsEditing(true)}>Edit Salary</button>
        </div>
      )}
    </div>
  );
};

export default SalaryInput;
