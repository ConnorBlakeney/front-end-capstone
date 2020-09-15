import React from "react"
import "./Home.css"
import { FriendContext } from "./FriendsProvider";
import { Link } from "react-router-dom"

export default ({ friend }) => (
    
    <section key={friend.id} className="friend">
        <h3 className="friend__name">
            hello
        </h3>
    </section>
)