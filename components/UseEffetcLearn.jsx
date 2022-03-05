import React, {useState, useEffect} from 'react'

export default function UseEffectLearn() {
    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(0)

    console.log("hai up")

    useEffect(() => {
        console.log("wow down")
    }, [count])

    return (
        <div>
            <p>{JSON.stringify(starWarsData)}</p>
            <h3>The count is {count}</h3>
            <p>
                <button onClick={() => setCount(prevValue => prevValue + 1)}>Add</button>
            </p>
        </div>
    )
}