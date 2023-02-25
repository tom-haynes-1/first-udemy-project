import React from "react";
import ExpenseItem from "./ExpenseItem";
import '../../styles/expense-list.css';

const ExpensesList = (props) => {
    let expensesContent = `No expenses found`;

    if ( props.items.length === 0 ) {
        return (
            <h2 className="expenses-list__fallback">
                { expensesContent }
            </h2>
        );
    }

return (
    <div>
        <ul className="expenses-list">
            {props.items.map((item) => ( 
                <ExpenseItem
                key={item.id}
                title={item.title} 
                amount={item.amount} 
                date={item.date} 
                />
            ))}
        </ul>
    </div>
    );
};


export default ExpensesList;