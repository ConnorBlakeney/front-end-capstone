import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import Scores from "./Scores";
import "./Scores.css"

export const ScoresList = ({ history, props }) => {
    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [score, setScore] = useState({})
    const [fight, setFight] = useState({})
    const [friend, setFriend] = useState({})

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
    // const foundFriend = filteredFriends.find(f => user.id === f.userFriendId)
    console.log(filteredFriends)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
    // useEffect(() => {
    //     setUser(users)
    // }, [users])

    // useEffect(() => {
    //     setFight(fights)
    // }, [fights])

    // useEffect(() => {
    //     setScore(scores)
    // }, [scores])

    useEffect(() => {
        setFriend(friends)
    }, [friends])

    return (

    <div key={score.id}>

        <div className="filteredFriends">
            <label>
                <select>
                    {
                        fights.map(fight => {
                            return (
                                
                                <option key={fight.id} id={fight.id}> { fight.R_fighter } vs { fight.B_fighter }
                                        {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                    {fight.id} */}
                                </option>
                                
                            )
                        })
                        
                    }
                </select>
            </label>
        </div>
    
       
    </div>
    )
}