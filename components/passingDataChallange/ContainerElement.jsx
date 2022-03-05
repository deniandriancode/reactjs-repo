import React from "react";
import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

export default function ContainerElement() {

    const [user, setUser] = useState("Joe")

    function changeUser(arg) {
        setUser(prevUser => {
            return prevUser = arg
        })
    }

    return (
        <div className="container--element">
            <Header handleClick={() => changeUser("Yuiga")} username={user}/>
            <Body username={user}/>
        </div>
    )
}