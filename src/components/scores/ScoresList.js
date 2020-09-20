import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import Scores from "./Scores";
import Dropdown from 'react-dropdown';
import "./Scores.css"

export const ScoresList = ({ history, props }) => {
    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [score, setScore] = useState({})
    const [fight, setFight] = useState({})


    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights)
    }, [])
    
    useEffect(() => {
        setUser(users)
    }, [users])

    useEffect(() => {
        setFight(fights)
        console.log(fights)
    }, [fights])

    useEffect(() => {
        setScore(scores)
    }, [scores])

    



    return (

        
    <div key={score.id} className="fights">
        <label>
            <select>
                {
                    fights.map(fight => {
                        return (
                            
                            <option key={fight.id}> { fight.R_fighter } vs { fight.B_fighter }
                                    {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                {fight.id} */}
                            </option>
                            
                        )
                    })
                    
                }
            </select>
        </label>
    </div>
    
        
    )
}
