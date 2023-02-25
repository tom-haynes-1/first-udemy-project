import React from "react";

const Button = (props) => {
    const buttonText = props.buttonText;
    
    const clickHandler = () => {
        props.clickHandler();
    };

return (
    <div className="new-expense button">
        <button
            onClick={ clickHandler }
        >
            { buttonText }
        </button>
    </div>
    );
};

export default Button;