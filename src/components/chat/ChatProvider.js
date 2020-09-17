import React, { useState } from "react"

export const ChatContext = React.createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    const [searchTerms, setTerms] = useState("")
    const [currentUser, setCurrentUser] = useState([])


    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
            .then(res => res.json())
            .then(setMessages)
    }

    const getCurrentUser = () => {
      const currentUserId = localStorage.getItem("current_user")
      const id = parseInt(currentUserId)
      return fetch(`http://localhost:8088/users/${id}`)
      .then(res => res.json())
      .then(setCurrentUser)
    }

    const getUserById = (id) => {
        return fetch(`http://localhost:8088/users/${id}?_expand=scorecard&_expand=userFriends`)
            .then(res => res.json())
    }

    return (
        <UserContext.Provider value={{
            users, getUsers, getUserById,
            searchTerms, setTerms, getCurrentUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}