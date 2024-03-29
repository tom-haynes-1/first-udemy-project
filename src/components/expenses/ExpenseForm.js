import React, { useState } from "react";
import "../../styles/expense-form.css";

const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [addExpense, setAddExpense] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        console.log(enteredAmount);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        console.log(enteredDate);
    };

    const onClickHandler = () => {
        setAddExpense(addExpense);
        console.log('New expense added!');
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // method on the event object that cancels the event of the default request being sent 
        // preventing page reload before the default action occurs (in this case, the form submitting before handling the JavaScript)

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSavedExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };
        
    return (
        <form 
            onSubmit={ onSubmitHandler }
        >
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input 
                type="text" 
                value={ enteredTitle }  
                onChange={ titleChangeHandler }
               />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input 
                type="number"
                min="0.01" 
                step="0.01"
                value={ enteredAmount }
                onChange={ amountChangeHandler } 
               />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input 
                type="date" 
                min="2015-01-01" 
                step="2022-12-31"
                value={ enteredDate }
                onChange={ dateChangeHandler }
               />
            </div>
          </div>
          <div className="new-expense__actions">
            <button 
              type="button" 
              onClick={ props.onCancel }
            >
              Cancel
              </button>
              <button 
                type="submit" 
                onClick={ onClickHandler }
              >
                Add Expense
              </button>
           </div>
        </form>
    );
};

export default ExpenseForm;