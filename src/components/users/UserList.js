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


            // filteredFriends filters for user specific friends. userId and friendId 
            // gets the two in integer form 

            const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
            const userId = users.map(user => user.id)
            const friendId = friends.map(friend => friend.friendId)
            const foundId = friendId.find(friend => friend.friendId === user.id)
            console.log(filteredFriends, userId, friendId, foundId)

            // const matchingIndex = () => {
            //     for (let i = 0; i < userId.length; i++) {
            //         for (let j = 0; j < friendId.length; i++) {
            //             if 
            //         }
            //     }
            // }

            // matching index takes friendId, currently an array, and matches it with
            // the index of the userId to find which user to add
            // doesnt work yet because it doesnt check for unique values

            // function matchIndex (userId, friendId) {
            //     for (var i = 0; i < friendId.length; ++i) {
            //         for (let j = 0; j < userId.length; i++)
            //         if (userId.inclues(friendId[i])) {
            //         return userId;
            //     }
            //  }
            // }

            // console.log(friendId[matchIndex(userId, friendId)])

            // const addBtn = document.querySelector(".add")
            // const addFriend = document.querySelectorAll(".user__name")
            // const matchingFriend = addFriend.find(f => f.friendId === addBtn.id) || {}


        // running matchindex down here. will work if i can filter for existing friends
                    // maybe try something with includes? find isnt working
                addFriend({
                    userId: currentUserId,
                    friendId: friendId[0]
                })
                    // friendId: friendId[matchIndex(userId, friendId)]
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