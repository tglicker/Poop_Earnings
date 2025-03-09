import React from "react";

const SalaryInput = ({ salary, setSalary }) => {
  return (
    <div>
      <label>Enter Your Salary:</label>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
      />
    </div>
  );
};

export default SalaryInput;
