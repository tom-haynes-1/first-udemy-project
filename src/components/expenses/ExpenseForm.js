import React, { useState } from "react";
import "../../styles/expense-form.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [addExpense, setAddExpense] = useState();

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
        console.log('new Expense Added!');
    };
        
    return (
        <form>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input type="text" onChange={titleChangeHandler}/>
            </div>
          <div className="new-expense__control">
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input type="date" min="1900-01-01" step="2022-12-31" onChange={dateChangeHandler}/>
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={onClickHandler}>Add Expense</button>
          </div>
        </form>
    );
};

export default ExpenseForm;