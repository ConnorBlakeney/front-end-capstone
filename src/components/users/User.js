import React, { useContext } from "react"
import { FriendContext } from "../friends/FriendsProvider";
import "./User.css"


export default ({ user }) => {

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const { addFriend } = useContext(FriendContext)
 
    // logic checks to see if the user is the currentuser or not, if so it renders
    // that person's name and an add button
    return (    

    <section key={user.id} className="user">

        <div id={user.id} className="user__name" >

            {user.id !== currentUserId ? user.name : ""} 

            {user.id !== currentUserId ? 

            <button id={user.id} className="add btn"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        addFriend({
                                             userId: currentUserId,
                                             userFriendId: user.id
                                        })
                                }
                                }
            >Add</button>
             : ""}

        </div>

    </section>
    )
}