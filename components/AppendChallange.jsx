import React from 'react'
import ReactDOM from 'react-dom'
import './css/append-challange.css'

const thingsArray = ["Thing 1", "Thing 2"]
export default function AppendChallange(props) {

    function appendArray() {
        const holder = thingsArray.map(item => {
            return (
                <p>{item}</p>
            )
        })
        ReactDOM.render(<AppendChallange content={holder} />, document.getElementById('root'))
    }

    function addItem() {
        const newThing = `Thing ${thingsArray.length + 1}`
        thingsArray.push(newThing)
        console.log(thingsArray)
    }

    return (
        <div>
            <button onClick={appendArray}>Show Items</button>
            <button onClick={addItem}>Push to Array</button>
            <div className="append-container">{props.content}</div>
        </div>
    )
}
