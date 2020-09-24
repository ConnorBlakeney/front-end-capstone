import React, { useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/UserProvider";
import { FriendsList } from "./FriendsList";
import "./Friends.css"

export const FriendForm = () => {
    // Use the required context providers for data
    const { getFriends } = useContext(FriendContext)
    const { getUsers } = useContext(UserContext)

    // Component state
    
    useEffect(() => {
        getFriends().then(getUsers)
    }, [])


    // jsx for friends form
    return (
                       
            <div className="friend__cards">

                <h3 className="friends_header">Friends</h3>

                <FriendsList/>

            </div>
            
    )
}
