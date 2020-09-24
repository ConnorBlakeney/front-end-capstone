import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import { UserContext } from "../users/UserProvider";
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = () => {

    // use context to grab api info
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers } = useContext(UserContext)

    // get current user id
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 

    // set user state
    const [ user ] = useState({})


    useEffect(() => {
        getFriends().then(getUsers)
    }, [])

    // renders friends component to DOM
    return (
                
        <div className="friends">

            { 
                filteredFriends.map(friend => {
                    
                    return (
                        
                        <Friends key={friend.id} friend={friend} user={user}/>
                            
                    )
                })
            }

        </div>
         
    )
}

