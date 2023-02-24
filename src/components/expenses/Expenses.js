import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../global/Card";
import '../../styles/expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here are my expenses from ${ newYear }`);
  };

  const filteredExpensesByDate = props.expenseItems.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredExpensesByDate);
  console.log(filteredYear);

return (
    <div>
      <Card 
          className="expenses"
        >
        <ExpenseFilter
          selected={ filteredYear }
          onShowYearHandler={ filterChangeHandler }
        />
        <ExpensesList 
          items={ filteredExpensesByDate }
        />
    </Card>
  </div>
  );
};

export default Expenses;