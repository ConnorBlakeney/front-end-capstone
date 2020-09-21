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
            
            {/* <ScoresDropDownFights />  */}
            <ScoresList />

            <section className="card__form">    
                <form className="round__form red">
                    <input className="round__one red" placeholder="Round 1 Red" type="number"></input>
                    <input className="round__two red" placeholder="Round 2 Red" type="number"></input>
                    <input className="round__three red" placeholder="Round 3 Red" type="number"></input>
                    <input className="round__four red" placeholder="Round 4 Red" type="number"></input>
                    <input className="round__five red" placeholder="Round 5 Red" type="number"></input>
                </form>
                <form className="round__form red">
                    <input className="round__one blue" placeholder="Round 1 Blue" type="number"></input>
                    <input className="round__two blue" placeholder="Round 2 Blue" type="number"></input>
                    <input className="round__three blue" placeholder="Round 3 Blue" type="number"></input>
                    <input className="round__four blue" placeholder="Round 4 Blue" type="number"></input>
                    <input className="round__five blue" placeholder="Round 5 Blue" type="number"></input>
                </form>
            </section>
        </section>
    )


}
            // <ScoreCard />
            // <ScoreCard />