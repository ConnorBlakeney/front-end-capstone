import React, { useEffect, useRef } from "react"
import "./User.css"


export default ({ friend, user }) => {

    const currentUserId = parseInt(localStorage.getItem("current_user"))

    return (    

    <section key={user.id} className="user">
        <div id={user.id} className="user__name" >
            {/* {user.id !== currentUserId ? user.name : ""}  */}
            {user.name}
        </div>
    </section>
    )
}