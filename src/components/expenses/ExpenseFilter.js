import React from "react";
import "../../styles/expense-filter.css";

const ExpenseFilter = (props) => {

    const selectYearHandler = (event) => {
        const yearData = event.target.value;

        props.onShowYearHandler(yearData);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>
                    Filter by Year
                </label>
                <select
                    value={ props.selected }
                    onChange={ selectYearHandler }
                >
                    <option 
                        value='2022'
                    >
                        2022
                    </option>
                    <option 
                        value='2021'
                    >
                        2021
                    </option>
                    <option 
                        value='2020'
                    >
                        2020
                    </option>
                    <option 
                        value='2019'
                    >
                        2019
                    </option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

