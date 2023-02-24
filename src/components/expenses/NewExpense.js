import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../../styles/new-expense.css";

const NewExpense = (props) => {

    const [inEditMode, setInEditMode] = useState(false);
    
    const savedExpenseDataHandler = (enteredExpenseData) => {
       const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
       };

      props.onAddExpense(expenseData);
      setInEditMode(false); 
    };

    const formIsBeingEdited = () => {
        setInEditMode(true);
    };

    const formIsNotBeingEdited = () => {
        setInEditMode(false);
    };

return (
        <div className="new-expense">
            {
                !inEditMode && (
                <button
                    type="submit"
                    onClick={ formIsBeingEdited }
                >
                    Add New Expense
                </button>
            )}
            {
                inEditMode && (
                <ExpenseForm 
                    onSavedExpenseData={ savedExpenseDataHandler }
                    onCancel={ formIsNotBeingEdited }
                />
            )}
        </div>
    );
};

export default NewExpense;