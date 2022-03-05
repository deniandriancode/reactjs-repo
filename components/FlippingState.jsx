import React, {useState} from "react"

export default function FlippingState() {
    const [isGoingOut, setIsGoingOut] = useState(true)

    function check() {
        setIsGoingOut(initial => !initial)
    }

    return (
        <div className="flipping">
            <div onClick={check} className="flipping--question">
                <h1>Should I go?</h1>
            </div>
            <div className="flipping--answer">
                <h1>{isGoingOut ? "Yes": "No"}</h1>
            </div>
        </div>
    )
}