import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = ({ props }) => {
    const { getFriends, friends } = useContext(FriendContext)

    const [filteredFriends, setFiltered] = useState([])


    // Initialization effect hook -> Go get fight data
    const [friend, setFriend] = useState({})

    useEffect(() => {
        console.log("friends list")
        getFriends()
    }, [])

    useEffect(() => {
        const friend = friends.find(f => f.id === parseInt(props.match.params.friendId)) || {}
        setFriend(friend)
        console.log(friend)
    }, [friends])



    return (
        
            <div className="friends">
                {
                    <Friends/>
                    
                }
            </div>
        
    )
}