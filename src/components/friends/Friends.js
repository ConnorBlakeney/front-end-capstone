import React from "react"
import "./Friends.css"

export default ({ userFriend, user }) => (
    
    <section key={userFriend.id} className="friend">
        <h3 className="friend__name">
            {userFriend.find(friend => {
                return friend.id === user.id
        }).map()

}
        </h3>
    </section>
)