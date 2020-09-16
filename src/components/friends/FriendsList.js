import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import { UserContext } from "../users/UserProvider";
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = props => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users } = useContext(UserContext)

    // const [filteredFriends, setFiltered] = useState([])
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)

    // Initialization effect hook -> Go get fight data
    const [friend, setFriend] = useState({})
    const [user, setUser] = useState({})
    // const [currentUser, setCurrentUser] = useState({})

    // console.log(filteredFriends)

    useEffect(() => {
        getFriends().then(getUsers)
    }, [])


    useEffect(() => {
        setUser(users)
    }, [users])

    useEffect(() => {
        setFriend(friends)
    }, [friends])

    return (
        
            <div className="friends">
                { 
                    filteredFriends.map(friend => {
                        return <Friends key={friend.id} friend={friend} user={user} />
                    })
                }
            </div>
        
    )
}