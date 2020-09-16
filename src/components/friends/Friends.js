import React, { useEffect } from "react"
import "./Friends.css"


export default ({ friend, user }) => {

    const currentUserId = parseInt(localStorage.getItem("current_user"))

    return (    

    <section key={friend.id} className="friend">
        <div className="friend__name">
            {user.id !== currentUserId ? user.name : ""}
        </div>
    </section>
    )
}