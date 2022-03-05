import React, {useState} from 'react'
import './css/counter-state.css'
import Count from './Count'

export default function CounterState() {
    const [counter, setCounter] = useState(0)

    function plus() {
        setCounter(oldValue => oldValue + 1)
    }

    function minus() {
        setCounter(oldValue => oldValue - 1)
    }
    
    return (
        <div className="counter">
            <button onClick={minus} className="counter--minus">-</button>
            <Count number={counter} />
            <button onClick={plus} className="counter--plus">+</button>
        </div>
    )
}