import React from "react";

const Button = (props) => {

    const buttonText = props.buttonText;

return (
    <div>
        <button
            className="new-expense button"
            type={ props.type }
            onClick={ props.onClick }
        >
            { buttonText }
        </button>
    </div>
    );
};

export default Button;