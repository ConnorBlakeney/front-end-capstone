import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendsProvider";
import "./Friends.css"

export const FriendForm = (props) => {
    // Use the required context providers for data
    const { friends, getFriends } = useContext(FriendContext)

    // Component state
    const [friend, setFriend] = useState({})

    
    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div>Hello</div>
    )
}