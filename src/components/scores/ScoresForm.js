import React, { useContext, useEffect, useState, useRef} from "react"
import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
import { ScoresDropDownFights, ScoresDropDownFriends } from "./ScoresDropDown";
import "./Scores.css"
import { ScoresList } from "./ScoresList";

export default ({ friend, image, title  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const [user, setUser] = useState({})


    useEffect(() => {
        setUser(users)
    }, [users])

    return (  
        <section className="scores">
            <h4> {title} </h4>
            {/* <ScoresDropDownFriends /> */}
            {/* <ScoresDropDownFights />  */}
            <ScoresList />
        </section>
    )


}
            // <ScoreCard />
            // <ScoreCard />