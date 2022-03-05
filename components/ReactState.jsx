import React from 'react'

export default function ReactState() {
    const [isImportant, setIsImportant] = React.useState("Yes")

    function handleClick() {
        setIsImportant("No")
    }

    function rehandleClick() {
        setIsImportant("Yes")
    }

    return (
        <div className="state">
            <h1 onClick={rehandleClick} className="state--title">Is state important to learn?</h1>
            <div onClick={handleClick} className="state--value">
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}