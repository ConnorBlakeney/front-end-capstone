import React, { useContext } from "react"
import { UserContext } from "../users/UserProvider";
import { FriendContext } from "./FriendsProvider";
import "./Friends.css"

export default ({ friend }) => {
    // grab current user id 
    const currentUserId = parseInt(localStorage.getItem("current_user"))

    // use context to grab api calls
    const { users } = useContext(UserContext)
    const { deleteFriend } = useContext(FriendContext)

    return (   

        // jsx that returns individual friends
        <section key={friend.id} className="friend">

            <div className="friend__name">
                {currentUserId === friend.userId 
                ? users.map(user => user.id === friend.userFriendId 
                ? user.name 
                : "") 
                : ""}

                <button className="del btn"
                        onClick={
                            () => {
                                    deleteFriend(friend.id)                                   
                }}>Delete</button>

            </div>

        </section>
    )


}

