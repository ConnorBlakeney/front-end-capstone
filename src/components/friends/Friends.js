import React from "react"
import "./Friends.css"

export default ({ friend, user }) => (
    
    <section key={friend.id} className="friend">
        <h3 className="friend__name">
            {}
        </h3>
    </section>
)