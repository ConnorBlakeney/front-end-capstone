import React from "react"
import { UserList } from "./UserList";
import "./User.css"

export const UserForm = (props) => {

    // jsx that renders users to DOM
    return (

        <form className="userForm">

            <div className="user__cards">

                <fieldset className="user card">

                    <h3 className="users_header">Users</h3>

                    <UserList {...props}/> 

                </fieldset>

            </div>
            
        </form>
    )
}
