import React, { useContext } from "react"
import { FriendContext } from "./FriendsProvider";
import "./Friends.css"


export default ({ friend, user }) => {
    const { deleteFriends } = useContext(FriendContext)
    const currentUserId = parseInt(localStorage.getItem("current_user"))



    return (    

    <section key={friend.id} className="friend">
        <div className="friend__name">
            {currentUserId === friend.userId ? user.name : ""} <button onClick={deleteFriends}>Delete</button>
        </div>
    </section>
    )
}