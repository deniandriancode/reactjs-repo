import React, { useState } from "react";
import Star from "./Star";

export default function StartFavorite() {
    let [data, setData] = useState({
        name: "John Doe",
        hobby: "swimming",
        job: "Ethical Hacker",
        isFavorite: true
    })

    function favorite() {
        setData(prevData => {
            return {
                ...prevData,
                isFavorite: !prevData.isFavorite
            }
        })
    }

    return (
        <div className="star">
            <h1>Name: John Doe</h1>
            <h3>{data.isFavorite? "Yeah, favorite" : "I don't think so"}</h3>
            <div>
                <Star handleClick={favorite}/>
            </div>
        </div>
    )
}