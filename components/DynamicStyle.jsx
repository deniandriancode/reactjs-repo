import React from "react";
import { useState } from "react";
import boxes from "./boxes";
import MainContent from "./MainContent";

export default function DynamicStyle() {
    const [squares, setSquares] = useState(boxes)

    function doToggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }

    const squareElement = squares.map(square => {
        return (<MainContent 
                        key={square.id} 
                        on={square.on} 
                        handleClick={() => doToggle(square.id)}
            />)
    })

    return (
        <main>
            {squareElement}
        </main>
    )
}