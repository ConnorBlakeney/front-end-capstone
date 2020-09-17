import React, { useState, useContext, useEffect } from "react"
import { FriendContext } from "../friends/FriendsProvider"
import { UserContext } from "../users/UserProvider";
import User from "../users/User"
import "./User.css"

export const UserList = props => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users } = useContext(UserContext)
    const { getCurrentUser } = useContext(UserContext)
    const { addFriend } = useContext(FriendContext)


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
        // console.log(currentUserId)
    }, [])

    useEffect(() => {
        setUser(users)
    }, [users])

    useEffect(() => {
        // filteredFriends = friends.filter(f => f.userId === user.id) || {}
        setFriend(friends)
        console.log(friends)
    }, [friends])

    const newFriend = () => { addFriend({
                    id: user.id,
                    userId: currentUserId
                    
                })
                    .then(() => props.history.push("/friends"))

    }

    return (
        <>
            <div className="users">
                {
                    users.map(user => {
                        return (
                        <>
                            <User key={user.id} friend={friend} user={user} />
                                
                        
                        
                            <button
                                // onClick={
                                //     () => 
                                // }
                            >Add</button>
                        </>
                        )
                    })
                    
                }
            </div>
        </>
        
    )
}