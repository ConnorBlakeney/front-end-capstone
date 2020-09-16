import React from "react"
import "./Friends.css"


export default ({ friend, user }) => {

    return (    

    <section key={friend.id} className="friend">
        <div className="friend__name">
            {user.id === friend.userId ? user.name: ""}
        </div>
    </section>
    )
}