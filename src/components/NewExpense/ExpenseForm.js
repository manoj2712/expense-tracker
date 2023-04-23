import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" steps="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min="01-01-2019" max="31-12-2023" />
        </div>
          </div>
          <div className="new-expense__action">
              <button type="submit">Add Expense</button>
          </div>
    </form>
  );
};

export default ExpenseForm;
