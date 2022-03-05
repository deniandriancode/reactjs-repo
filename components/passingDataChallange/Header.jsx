import React from "react";
import { useState } from "react";

export default function Header(props) {

    return (
        <header>
            <p onClick={props.handleClick}>Current user: {props.username}</p>
        </header>
    )
}