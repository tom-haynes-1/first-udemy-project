import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../global/Card";
import '../../styles/expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here are my expenses from ${ newYear }`);
  };

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
          props.expenseItems.map((item) => ( 
            <ExpenseItem
              key={item.id}
              title={item.title} 
              amount={item.amount} 
              date={item.date} 
            />
      ))}
    </Card>
  </div>
  );
};

export default Expenses;