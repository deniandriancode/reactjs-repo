import React from 'react'
import './css/event-learn.css'

export default function EventLearn() {
    function sendAlert() {
        window.alert("Wow you clicked the button!!!")
    }

    function darken() {
        document.querySelector('img').style.filter = 'brightness(.5)'
        console.log("Mouse Over")
    }

    function normalize() {
        document.querySelector('img').style.filter = 'brightness(1)'
    }

    return (
        <>
            <img src="./img/fuji-yama.jpg" alt="Picture of Mount Fuji" onMouseEnter={darken} onMouseLeave={normalize} /><br />
            <button onClick={sendAlert}>Click Me</button>
        </>
    )
}