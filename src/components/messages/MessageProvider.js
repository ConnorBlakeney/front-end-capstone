import React, { useState } from "react"

export const MessageContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [searchTerms, setTerms] = useState("")


    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    const getMessageById = (id) => {
        return fetch(`http://localhost:8088/messages/${id}?_expand=scorecard&_expand=userFriends`)
            .then(res => res.json())
    }

    const addMessage = message => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const editMessage = message => {
        return fetch(`http://localhost:8088/messages/${message.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(getMessages)
    }

    const deleteMessage = (messageId) => {
        return fetch(`http://localhost:8088/messages/${messageId}`, {
            method: "DELETE"
        })
            .then(getMessages)
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages, getMessageById,
            searchTerms, setTerms, addMessage, editMessage, deleteMessage
        }}>
            {props.children}
        </MessageContext.Provider>
    )
}