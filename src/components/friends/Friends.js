import React from "react"
import "./Friends.css"


export default ({ friend, user, friendName }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))



    return (    

    <section key={friend.id} className="friend">
        <div className="friend__name">
            {currentUserId === friend.userId ? friend.id : ""}
        </div>
    </section>
    )
}