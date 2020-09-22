import React, { useState, useContext, useEffect, useRef } from "react"
import { FriendContext } from "../friends/FriendsProvider"
import { UserContext } from "../users/UserProvider";
import User from "../users/User"
import "./User.css"

export const UserList = props => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getUsers, users, getCurrentUser } = useContext(UserContext)
    // const { addFriend, getFriendById } = useContext(FriendContext)

    const [filteredFriends, setFiltered] = useState([])

    // const useLocalStateUser = () => {
    //     const [loc, setLoc] = useState(localStorage.getItem("current_user"))

    //     return [loc, setLoc]
    // }

    // Initialization effect hook -> Go get fight data
    // const [friend, setFriend] = useState({})
    // const [user, setUser] = useState({})


    const currentUserId = parseInt(localStorage.getItem("current_user"))
    // console.log(filteredFriends)

    useEffect(() => {
        getFriends().then(getUsers).then(getCurrentUser)
        // console.log(currentUserId)
    }, [])

    // useEffect(() => {
    //     setUser(users)
    //     console.log(users)
    // }, [users])

    // useEffect(() => {
    //     setFriend(friend)
    //     // console.log(users)
    // }, [friends])


    useEffect(() => {
        const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
        setFiltered(filteredFriends)
    }, [friends])

    // const newFriend = () => { 


    //         // filteredFriends filters for user specific friends. userId and friendId 
    //         // gets the two in integer form 

    //         const userIds = users.map(user => user.id)
    //         const friendIds = filteredFriends.map(friend => friend.friendId)
    //         // const mappedFriends = filteredFriends.map(f => f.friendId)
    //         const foundFriend = friendIds.map(f => {
    //             console.log(f, "string")
    //             return userIds.find(u => u === f)
    //         })
    //         console.log(userIds, friendIds, foundFriend)

            // for (let i = 0; i < filteredFriends.length; i++) {
            //     if (userId === friendId) {
            //         console.log(userId)
            //     }
            // }

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
                // addFriend({
                //     userId: currentUserId,
                //     friendId: foundFriend[0]
                // })
                    // friendId: foundId.friendId
                    // matchIndex(userId, friendId)
                    // .then(() => props.history.push("/scores"))



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