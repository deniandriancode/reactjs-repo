import React from "react";

export default function Star(props) {

    return (
        <div className="wrapper">
            <button onClick={props.handleClick}>This is a star, click here</button>
        </div>
    )
}