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
        <ExpenseItem
          title={ props.expenses[0].title }
          amount={ props.expenses[0].amount }
          date={ props.expenses[0].date }
        />
        <ExpenseItem
          title={ props.expenses[1].title }
          amount={ props.expenses[1].amount }
          date={ props.expenses[1].date }
        />
        <ExpenseItem
          title={ props.expenses[2].title }
          amount={ props.expenses[2].amount } 
          date={ props.expenses[2].date }
        />
        <ExpenseItem
          title={ props.expenses[3].title }
          amount={ props.expenses[3].amount }
          date={ props.expenses[3].date }
        />
      </Card>
    </div>
  );
};

export default Expenses;