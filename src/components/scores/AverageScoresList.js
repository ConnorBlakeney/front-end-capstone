import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import "./Scores.css"

export const AverageScoresList = () => {

    // using content to grab api fetches
    const { getUsers } = useContext(UserContext)
    const { getScore, scores } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends } = useContext(FriendContext)

    // setting state variables
    const [ score ] = useState({})
    const [filteredScores, setFilteredScores] = useState([])

    // useref to grab current value of selected fight
    const fightId = useRef(0)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
    // on change event for fight select to trigger rendering of average score cards
    const handleSubmit = (e) => {
        const fightSelect = parseInt(fightId.current.value)

        // map over filtered scores, map to individual round scores
        // save scores as array of scores, reduce to add all together
        // divide by array.length
        const scoreFind = scores.find(s => s.scoreFightId === fightSelect) || {}
        const scoreFilter = scores.filter(s => s.scoreFightId === fightSelect) || {}
        const averageScoreOneBlue = scoreFilter.map(s => s.roundOneBlue).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreTwoBlue = scoreFilter.map(s => s.roundTwoBlue).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreThreeBlue = scoreFilter.map(s => s.roundThreeBlue).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreFourBlue = scoreFilter.map(s => s.roundFourBlue).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreFiveBlue = scoreFilter.map(s => s.roundFiveBlue).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreOneRed = scoreFilter.map(s => s.roundOneRed).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreTwoRed = scoreFilter.map(s => s.roundTwoRed).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreThreeRed = scoreFilter.map(s => s.roundThreeRed).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreFourRed = scoreFilter.map(s => s.roundFourRed).reduce((a, b) => a + b, 0) / scoreFilter.length
        const averageScoreFiveRed = scoreFilter.map(s => s.roundFiveRed).reduce((a, b) => a + b, 0) / scoreFilter.length

            // if selected fight is equal to the found score id then this component renders
            setFilteredScores( fightSelect ===  scoreFind.scoreFightId  
                ? <section key={score.id} className="score__card">

                    <div className="score__fight red">
                            <p className="round__one red">Round 1: { averageScoreOneRed }</p>           
                            <p className="round__two red">Round 2: { averageScoreTwoRed }</p>         
                            <p className="round__three red">Round 3: { averageScoreThreeRed } </p>         
                            <p className="round__four red">Round 4: { averageScoreFourRed } </p>       
                            <p className="round__five red">Round 5: { averageScoreFiveRed } </p>        
                    </div>

                    <div className="score__fight blue">
                            <p className="round__one blue"> - { averageScoreOneBlue }</p>         
                            <p className="round__one blue"> - { averageScoreTwoBlue }</p>        
                            <p className="round__one blue"> - { averageScoreThreeBlue }</p>         
                            <p className="round__one blue"> - { averageScoreFourBlue }</p>         
                            <p className="round__one blue"> - { averageScoreFiveBlue }</p>         
                    </div>
    
                </section> 
                : "" )

        e.preventDefault()
    }

    // jsx that returns fight scroll, when fight is selected renders average of 
    // all user scores for particular fight
    return (

    <div className="scores card" key={score.userId}> 

        <h3>Average User Scores</h3>
        <select onChange={(e) => { handleSubmit(e) }} defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
        </select>

        
        <div id="filtered__average__scores">
        
                {
                    filteredScores
                    
                }
                                                                                                  
        </div>
       
    </div>
    )
}