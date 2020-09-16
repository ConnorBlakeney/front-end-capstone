import React, { useState } from "react"

export const UserContext = React.createContext()

export const UserProvider = (props) => {
    const [users, setUsers] = useState([])
    const [searchTerms, setTerms] = useState("")
    const [currentUser, setCurrentUser] = useState([])


    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
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