import React, {useState} from "react"

export default function AddItemChallange() {
    const [content, setContent] = useState(["Thing 1", "Thing 2"])

    function addItem() {
        setContent(prevContent => {
            return [...prevContent, `Thing ${prevContent.length + 1}`]
        })
    }

    const result = content.map(item => <p>{item}</p>)

    return (
        <div className="appender">
            <div className="appender--button">
                <button onClick={addItem}>Add Item</button>
            </div>
            <div className="appender--content">
                {result}
            </div>
        </div>
    )
}