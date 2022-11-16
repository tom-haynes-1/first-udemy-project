import React from "react";
import "../../styles/card.css";

const Card = (props) => {
    const cardWrapperClass = 'card ' + props.className;

    return <div className={cardWrapperClass}>{props.children}</div>
};

export default Card;