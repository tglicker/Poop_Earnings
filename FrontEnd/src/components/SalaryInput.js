import React, { useState } from 'react';

const SalaryInput = ({ setSalary }) => {
  const [inputSalary, setInputSalary] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const salaryValue = parseFloat(inputSalary);
    if (!isNaN(salaryValue) && salaryValue > 0) {
      setSalary(salaryValue);
      setSubmitted(true);
    }
  };

  return (
    <div className="salary-input">
      {!submitted ? (
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
        <p>Salary set successfully! 💰</p>
      )}
    </div>
  );
};

export default SalaryInput;
