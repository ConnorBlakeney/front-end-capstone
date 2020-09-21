import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "./FriendsProvider";
import { UserContext } from "../users/UserProvider";
import { FriendsList } from "./FriendsList";
import "./Friends.css"

export const FriendForm = (props) => {
    // Use the required context providers for data
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 


    // Component state
    const [friend, setFriend] = useState({})

    
    useEffect(() => {
        getFriends().then(getUsers)
    }, [])

    return (
            <form className="friendForm">
            <h2 className="friendForm__title">Friends and Previous Scores</h2>
            <label>
                <select className="filtered__friends">
                    {
                        filteredFriends.map(friend => {
                            return (
                                
                                <option key={friend.id} id={friend.id}> { users.map(user => user.id === friend.userFriendId ? user.name : "") }
                                        {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                    {fight.id} */}
                                </option>
                                
                            )
                        })
                        
                    }
                </select>
            </label>
            <div className="friend__cards">
                <fieldset className="friend card">
                    <h3 className="friends_header">Friends</h3>
                    <FriendsList/>
                </fieldset>
            </div>
            
            </form>
    )
}
