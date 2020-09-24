import React, { useContext, useEffect } from "react"
import { FriendContext } from "../friends/FriendsProvider"
import { UserContext } from "../users/UserProvider";
import User from "../users/User"
import "./User.css"

export const UserList = () => {

    // usecontext to grab api fetches
    const { getFriends } = useContext(FriendContext)
    const { getUsers, users, getCurrentUser } = useContext(UserContext)

    useEffect(() => {
        getFriends().then(getUsers).then(getCurrentUser)
    }, [])

    // maps over and renders user component    
    return (
        
            <div className="users">

                {

                    users.map(user => {
                        return (
                            
                        <div key={user.id} >

                            <User user={user} />    

                        </div>
                        
                        )
                    })
                    
                }
            </div>
    )
    
}