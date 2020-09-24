import React, { useContext, useEffect, useRef } from "react"
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../users/UserProvider";
import ContentEditable from 'react-contenteditable'
import "./Message.css"

export default ({ message }) => {
    // use content to get info from api
    const {getUsers, users } = useContext(UserContext)
    const {getMessages, deleteMessage, editMessage } = useContext(MessageContext)
    
    // getting current user and current user id
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const currentUser = users.find(u => u.id === message.userId) || {}

    // use ref to get message value
    const messageRef = useRef(null)

    // handles text edit on change and sends to api
    const handleSubmit = (e) => {

        editMessage({
                    id: message.id,
                    userId: currentUserId,
                    content: messageRef.current.textContent,
                    timestamp: new Date(),
                   
                })
    }

    useEffect(() => {
        getUsers().then(getMessages)
    }, [])

    // jsx that renders individual messages and its components
    return (   

        <section key={message.id} className="message">
            <hr/>

            <p>{currentUser.name} </p>

            {currentUserId === message.userId ?
            <ContentEditable innerRef={messageRef} onChange={(e) => handleSubmit(e)} id={message.id} html={message.content} /> : message.content}

            <p>{message.timestamp.toLocaleString()}</p>

            {currentUserId === message.userId 
            ? <button id={message.id} className="del btn"
                    onClick={
                        () => {
                                deleteMessage(message.id)                                   
              }}>Delete</button>
            : ""}
        </section>
    )


}