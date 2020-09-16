import React, { useContext, useState, useEffect } from "react"
import { FriendContext } from "../friends/FriendsProvider";
import { UserContext } from "../users/UserProvider";
import { UserList } from "./UserList";
import "./User.css"

export const UserForm = (props) => {
    // Use the required context providers for data
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    // Component state
    const [friend, setFriend] = useState({})

    
    useEffect(() => {
        getFriends().then(getUsers)
    }, [])

    return (
            <form className="userForm">
            <div className="user__cards">
                <fieldset className="user card">
                    <h3 className="users_header">Users</h3>
                    <UserList />
                </fieldset>
            </div>
            
        </form>
    )
}
