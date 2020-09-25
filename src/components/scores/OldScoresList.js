import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import "./Scores.css"
import ScoresUser from "./ScoresUser";


export const OldScoresList = ({ props }) => {

    //grabbing context
    const { getUsers } = useContext(UserContext)
    const { getScore, scores } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends } = useContext(FriendContext)

    // setting state variables
    const [ score ] = useState({})
    const [ filteredScores, setFilteredScores ] = useState([])

    // setting ref to grab value of fight selected
    const fightId = useRef(0)

    const currentUserId = parseInt(localStorage.getItem("current_user"))

    // filtering to find score cards specific to the current user
    const filteredScoresForCurrentUser = scores.filter(s => s.userId === currentUserId)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    

        // change event for scores filter, grabs value for fight selected with ref 
        // then filters score cards for current user, then maps over to render to DOM
        // sets state then recalls in filtered__scores
        const handleSubmit = (e) => {
            const fightSelect = parseInt(fightId.current.value)
            const filteredScoresForCard = filteredScoresForCurrentUser.filter(s => s.scoreFightId === fightSelect)
            
                                                            
                setFilteredScores(filteredScoresForCard.map(score => {
                                    
                    return ( 
                    
                        <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                    )
                }) )  
                                                                                                          
            e.preventDefault()
        }
    
    // renders fight scroll that upon select renders related score card to DOM
    // also calls and renders filteredScores state variable set above
    return (
    
    <div className="scores card" key={score.id}> 

        <h3>Your Scorecard</h3>

        <select onChange={(e) => { handleSubmit(e) }} defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
        </select>

        <span></span>       

        <div className="filtered__scores">
                { 
                    filteredScores
                }
        </div> 
  
    </div>
            
                                                                                            
                          
        

    )
}
