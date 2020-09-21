import React, { useContext, useEffect, useState, useRef} from "react"
import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
import { FightContext } from "../fights/FightProvider";
import "./Scores.css"
import { ScoresList } from "./ScoresList";


export default ({ friend, image, title  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getFights, fights } = useContext(FightContext)
    const [user, setUser] = useState({})


    useEffect(() => {
        setUser(users)
    }, [users])

    return (  
    
        
        <section className="scores form">
            
            {/* <ScoresDropDownFights />  */}

            <ScoresList />
            
        </section>
    )


}
            // <ScoreCard />
            // <ScoreCard />