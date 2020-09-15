import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = ({ history }) => {
    const { getFriends, friends } = useContext(FriendContext)

    const [filteredFriends, setFiltered] = useState([])

    // const sortedFights = [...filteredFights].sort((a, b) => {
    //     return b.date - a.date;
    // })


    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
        setFiltered(friends)
    }, [friends])


    return (
        
            <div className="friends">
                {

                    
                }
            </div>
        
    )
}