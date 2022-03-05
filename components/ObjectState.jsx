import React, {useState} from 'react'

export default function ObjectState() {
    const [myobj, setMyobj] = useState({
        name: "John",
        age: "34",
        isHome: true
    })

    function toggleHome() {
        setMyobj(prevMyobj => {
            return {
                ...prevMyobj,
                isHome: !prevMyobj.isHome
            }
        })
    }

    return (
        <div className="container">
            <p>Name : {myobj.name}</p>
            <p>Age : {myobj.age}</p>
            <button onClick={toggleHome}>Go Home?</button>
            <h3>{myobj.isHome? "Yes, Go Home" : "No, I still need to work"}</h3>
        </div>
    )
}