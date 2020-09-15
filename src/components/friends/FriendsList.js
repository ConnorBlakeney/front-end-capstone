import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import { UserContext } from "./UserProvider";
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = ({ props }) => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users } = useContext(UserContext)

    const [filteredFriends, setFiltered] = useState([])


    // Initialization effect hook -> Go get fight data
    const [friend, setFriend] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        console.log("friends list")
        getFriends().then(getUsers)
    }, [])

    useEffect(() => {
        const friend = friends.find(f => f.id === parseInt(props.match.params.friendId)) || {}
        setFriend(friend)
        console.log(friend)
    }, [friends])



    return (
        
            <div className="friends">
                {
                    filteredFriends.map(friend => {
                        return <Friends key={friend.id} friend={friend} />
                    })
                    
                }
            </div>
        
    )
}