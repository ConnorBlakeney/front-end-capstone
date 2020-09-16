import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "./FriendsProvider"
import { UserContext } from "./UserProvider";
import Friends from "./Friends"
import "./Friends.css"

export const FriendsList = props => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users } = useContext(UserContext)
    const { getCurrentUser } = useContext(UserContext)

    const [filteredFriends, setFiltered] = useState([])

    // const useLocalStateUser = () => {
    //     const [loc, setLoc] = useState(localStorage.getItem("current_user"))

    //     return [loc, setLoc]
    // }

    // Initialization effect hook -> Go get fight data
    const [friend, setFriend] = useState({})
    const [user, setUser] = useState({})
    const [currentUser, setCurrentUser] = useState({})

    const currentUserId = parseInt(localStorage.getItem("current_user"))

    useEffect(() => {
        getFriends().then(getUsers).then(getCurrentUser)
        console.log(currentUserId)
    }, [])

    useEffect(() => {
        setUser(users)
    }, [users])

    useEffect(() => {
        // filteredFriends = friends.filter(f => f.userId === user.id) || {}
        setFriend(friends)
        console.log(friends)
    }, [friends])



    return (
        
            <div className="friends">
                {
                    users.map(user => {
                        return <Friends key={user.id} friend={friend} user={user} />
                        // return currentUserId
                    })
                    
                }
            </div>
        
    )
}