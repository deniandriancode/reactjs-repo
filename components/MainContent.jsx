import React from "react";
import './css/boxes.css';

export default function MainContent(props) {
    const boxStyle = {
        backgroundColor: props.on ? "#004171" : "#dfdfdf"
    }

    return (
        <div style={boxStyle} onClick={props.handleClick} className="box"></div>
    )
}