import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import ReactDOM from "react-dom"
import "./Scores.css"
import ScoresUser from "./ScoresUser";


export const AverageScoresList = ({ history, props }) => {


    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores, addScore } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [score, setScore] = useState({})
    const [fight, setFight] = useState({})
    const [friend, setFriend] = useState({})
    const [filteredScores, setFilteredScores] = useState([])


    // const fightId = parseInt(fight.current.value)
    // console.log(fight)
    const fightId = useRef(0)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
    const fightSelect = parseInt(fightId.current.value)
    // console.log(fightSelect)

    // const foundFight = fights.find(f => f.id === document.getElementsByClassName('fight__option').value,) || {}
    // const foundFriend = filteredFriends.find(f => user.id === f.userFriendId)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
    // console.log(scores)

    const handleSubmit = (e) => {
        const fightSelect = parseInt(fightId.current.value)

        // map over users, . to scores, save scores as array of scores
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
        // const filteredScoresForCard = filteredScoresForCurrentUser.filter(s => s.scoreFightId === fightSelect)

        // if (currentUserId === scoreFind.userId && fightSelect === scoreFind.scoreFightId) {
        //    return <OldScoresList />
        console.log(scoreFilter, averageScoreOneBlue, averageScoreTwoBlue, averageScoreThreeBlue, averageScoreFourBlue, averageScoreFiveBlue)
        // const scoreEl = document.querySelector("#filtered__average__scores")
        // scoreEl.innerHTML = ""
        // if (fightSelect === scoreFind.scoreFightId) {
        //                           console.log(scores, scoreFind.roundOneBlue, fightId, fightSelect)                                                          



            setFilteredScores( fightSelect ===  scoreFind.scoreFightId  
                ? <section key={score.id} className="score">
                    <div className="score__card">
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
                    </div>
                </section> 
                : "" )
                    //            setFilteredScores( scoreFilter.map(score => {
                    //         return ( 
                    //                console.log(score)
                            
                    //             //  <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                                                                            
                    //         )
                    // }) 
                                 
                            
                    
                                                                                            
                          
        

        // for(key in scoreFind) {
        //     if (key.scoreFightId === fightSelect) {
            
        //     }
        // }
        // }
        
        // console.log(fightSelect === scoreFind.scoreFightId, scores.map(s => s.roundOneBlue), scores, fightSelect)
        e.preventDefault()
    }

    
    // useEffect(() => {
    //     setUser(users)
    // }, [users])
    // useEffect(() => {
    //     setFight(fight)
    //     console.log(fight)
    // }, [fight])

    // useEffect(() => {
    //     setScore(scores)
    // }, [scores])

    useEffect(() => {
        setFriend(friends)
    }, [friends])

    return (

    <div className="scores" key={score.userId}> 
        <select onChange={(e) => { handleSubmit(e) }} defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
        </select>

            <h3>Average User Scores</h3>
        

        <div id="filtered__average__scores">
        
                {
                    filteredScores
                    //   scores.map(score => {
                    //         return ( 
                            
                    //              <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                                                                            
                    //         )
                    // }) 
                            // fightSelect === scoreFind.scoreFightId 

                            // ? scores.find(score => {
                            //     score.scoreFightId === fightSelect
                            // }) 
                }
            
                                                                                            
                          
        

        </div>
       
    </div>
    )
}