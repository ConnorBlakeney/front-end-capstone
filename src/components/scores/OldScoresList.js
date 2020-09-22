import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import ReactDOM from "react-dom"
import "./Scores.css"
import ScoresUser from "./ScoresUser";


export const OldScoresList = ({ history, props }) => {


    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores, addScore } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [score, setScore] = useState({})
    const [fight, setFight] = useState({})
    const [friend, setFriend] = useState({})

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
    


    const handleSubmit = (e) => {
        const fightSelect = parseInt(fightId.current.value)
        const fightFind = scores.find(s => s.scoreFightId === fightSelect) || {}
        // if (currentUserId === fightFind.userId && fightSelect === fightFind.scoreFightId) {
        //    return <OldScoresList />
        const scoreEl = document.querySelector("#filtered__scores")
        scoreEl.innerHTML = ""
        if (fightSelect === fightFind.scoreFightId) {
            scoreEl.innerHTML = scores.map(score => {
                            return ( 
                            
                                 <ScoresUser className="score__option" key={score.id} id={score.id} ref={fightId} score={score} {...props} /> 
                                                                                            
                            )
                    })
        }
        // }
        
        console.log(fightSelect === fightFind.scoreFightId, scores.map(s => s.roundOneBlue))
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

    <div className="scores" key={score.id}> 
        <select onChange={(e) => { handleSubmit(e) }} defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
        </select>
        <div id="filtered__scores">
        
                {
                    
                    //   scores.map(score => {
                    //         return ( 
                            
                    //              <ScoresUser className="score__option" key={score.id} id={score.id} ref={fightId} score={score} {...props} /> 
                                                                                            
                    //         )
                    // }) 
                }
            
            

        </div>
       
    </div>
    )
}


         {/* {currentUserId === score.userId && score.scoreFightId === fightSelect ? scores.map(score => {
                            return (
                            <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                
                                       
                                                                
                            )
                        }) : ""}   

        {console.log(currentUserId, score.userId, score.scoreFightId, fightSelect)} */}
