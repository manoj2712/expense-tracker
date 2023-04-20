import React from "react";
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
    return (
      <div className="expenses">
        {props.items.map((item) => (
          <ExpenseItem
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </div>
    );
}

export default Expenses;