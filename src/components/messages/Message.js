import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../users/UserProvider";
import "./Message.css"

export default ({ props  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getMessages, messages } = useContext(MessageContext)
    const [user, setUser] = useState({})
    const [message, setMessage] = useState({})

    useEffect(() => {
        getUsers().then(getMessages)
    }, [])

    useEffect(() => {
        setUser(users)
    }, [users])

    useEffect(() => {
        setMessage(messages)
    }, [messages])

    return (   
        <section key={message.id} className="message">
            <p>{message.content}</p>
            {/* <p>{message.content}</p> */}
            <p>{message.timestamp}</p>
        </section>
    )


}

