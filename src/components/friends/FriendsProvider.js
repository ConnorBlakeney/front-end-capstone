import React, { useState } from "react"

export const FriendContext = React.createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
            .then(res => res.json())
            .then(setFriends)
    }

    const getFriendById = (friendId) => {
        return fetch(`http://localhost:8088/friends/${friendId}?_expand=scorecard&_expand=user`)
            .then(res => res.json())
    }

    const addFriend = friend => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friend)
        })
            .then(getFriends)
    }

    const editFriend = friend => {
        return fetch(`http://localhost:8088/friends/${friend.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friend)
        })
            .then(getFriends)
    }

    const deleteFriend = (id) => {
        return fetch(`http://localhost:8088/friends/${id}`, {
            method: "DELETE"
        })
            .then(getFriends)
    }

    return (
        <FriendContext.Provider value={{
            friends, addFriend, getFriends, getFriendById,
            searchTerms, setTerms, deleteFriend, editFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}