import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick = {startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseHandler} />}
        </div>
    )
}

export default NewExpense;