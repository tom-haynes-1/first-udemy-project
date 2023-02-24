import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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

  let expensesContent = `No expenses found for ${ filteredYear }`;

  if ( filteredExpensesByDate.length > 0 ) {
    expensesContent = filteredExpensesByDate.map((item) => ( 
      <ExpenseItem
        key={item.id}
        title={item.title} 
        amount={item.amount} 
        date={item.date} 
      />
  ))};

return (
    <div>
      <Card 
          className="expenses"
        >
        <ExpenseFilter
          selected={ filteredYear }
          onShowYearHandler={ filterChangeHandler }
        />
          {
            expensesContent
          }
    </Card>
  </div>
  );
};

export default Expenses;