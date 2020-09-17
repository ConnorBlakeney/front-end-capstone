import React, { useContext, useEffect, useState, useRef} from "react"
import { UserContext } from "../users/UserProvider";
import { FriendContext } from "./FriendsProvider";
import "./Friends.css"


export default ({ friend  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const [user, setUser] = useState({})


    useEffect(() => {
        setUser(users)
    }, [users])

    return (   
    <section key={friend.id} className="friend">
        <div className="friend__name">
            {currentUserId === friend.userId ? users.map(user => user.id === friend.id ? user.name: "") : ""}
        </div>
    </section>
    )


}

