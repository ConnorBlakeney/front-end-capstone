import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "./UserProvider";
import { FriendsList } from "./FriendsList";
import "./Friends.css"

export const FriendForm = (props) => {
    // Use the required context providers for data
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    // Component state
    const [friend, setFriend] = useState({})

    
    useEffect(() => {
        getFriends().then(getUsers)
    }, [])

    return (
            <form className="friendForm">
            <h2 className="friendForm__title">Previous Scores and Friends</h2>
            <div className="friend__cards">
                <fieldset className="friend card">
                    <h3>Friends</h3>
                    <FriendsList />
                </fieldset>
            </div>
            
        </form>
    )
}
