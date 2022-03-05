import React, {useState} from "react"

export default function ConditionalRendering() {
    const [messages, setMessages] = useState(["a"])
    let info = ""
    if (messages.length > 1) {
        info = `You have ${messages.length} unread messages`
    } else if (messages.length == 1) {
        info = `You have ${messages.length} unread message`
    } else {
        info = "You are all caught up!"
    }

    return (
        <div>
            <h1>{info}</h1>
        </div>
    )
}