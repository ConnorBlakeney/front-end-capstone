import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/UserProvider";
import { ScoreContext } from "../scores/ScoresProvider";
import { FriendsList } from "./FriendsList";
import Scores from "../scores/Scores";
import "./Friends.css"

export const FriendForm = (props) => {
    // Use the required context providers for data
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)
    const { scores, getScores } = useContext(ScoreContext)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 


    // Component state
    const [friend, setFriend] = useState({})

    
    useEffect(() => {
        getFriends().then(getUsers)
    }, [])

    return (
            <form className="friendForm">
            

            
            <div className="friend__cards">
                <fieldset className="friend card">
                    <h3 className="friends_header">Friends</h3>
                    <FriendsList/>
                </fieldset>
            </div>
            
            </form>
    )
}
