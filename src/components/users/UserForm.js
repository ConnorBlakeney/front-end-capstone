import React from "react"
import { UserList } from "./UserList";
import "./User.css"

export const UserForm = (props) => {

    // jsx that renders users to DOM
    return (

            <div className="user__cards">

                <h3 className="users_header">Users</h3>

                <UserList {...props}/> 

            </div>
            
    )
}
