import React, { useState, useContext, useEffect, useRef } from "react"
import { FriendContext } from "../friends/FriendsProvider"
import { UserContext } from "../users/UserProvider";
import { UserForm } from "./UserForm";
import User from "../users/User"
import "./User.css"

export const UserList = props => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users } = useContext(UserContext)
    const { getCurrentUser } = useContext(UserContext)
    const { addFriend } = useContext(FriendContext)

    // const [filteredFriends, setFiltered] = useState([])

    // const useLocalStateUser = () => {
    //     const [loc, setLoc] = useState(localStorage.getItem("current_user"))

    //     return [loc, setLoc]
    // }

    // Initialization effect hook -> Go get fight data
    const [friend, setFriend] = useState({})
    const [user, setUser] = useState({})


    const currentUserId = parseInt(localStorage.getItem("current_user"))
    // console.log(filteredFriends)

    useEffect(() => {
        getFriends().then(getUsers).then(getCurrentUser)
        // console.log(currentUserId)
    }, [])

    useEffect(() => {
        setUser(users)
        console.log(users)
    }, [users])

    useEffect(() => {
        setFriend(friends)
        console.log(friends)
    }, [friends])


    const newFriend = () => { 

            const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
            const userId = users.map(user => user.id)
            const friendId = friends.map(friend => friend.friendId)
            console.log(filteredFriends, userId, friendId)

            // const matchingIndex = () => {
            //     for (let i = 0; i < userId.length; i++) {
            //         for (let j = 0; j < friendId.length; i++) {
            //             if 
            //         }
            //     }
            // }

            function matchIndex (userId, friendId) {
                for (var i = 0; i < friendId.length; ++i) {
                    for (let j = 0; j < userId.length; i++)
                    if (userId[j] < friendId[i]) {
                    return j;
                }
             }
            }

            console.log(friendId[matchIndex(userId, friendId)])

            // const addBtn = document.querySelector(".add")
            // const addFriend = document.querySelectorAll(".user__name")
            // const matchingFriend = addFriend.find(f => f.friendId === addBtn.id) || {}

                addFriend({
                    userId: currentUserId,
                    friendId: friendId[matchIndex(userId, friendId)]
                })
                    .then(() => props.history.push("/scores"))

    }

    return (
        
            <div className="users">
                {
                    users.map(user => {
                        return (
                            
                        <div key={user.id} >
                            <User friend={friend} user={user} />

                            <button id={user.id} className="add btn"
                                onClick={
                                    evt => {
                                        evt.preventDefault()
                                        newFriend(friend)
                                }
                                }
                            >Add</button>
                        </div>
                        
                        )
                    })
                    
                }
            </div>
    )
    
}