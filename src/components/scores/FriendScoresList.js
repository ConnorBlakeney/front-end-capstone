import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import "./Scores.css"
import ScoresUser from "./ScoresUser";

export const FriendScoresList = ({ props }) => {

    // using context and grabbing info from api with providers
    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)

    // setting state variables
    const [ score ] = useState({})
    const [ filteredScores, setFilteredScores ] = useState([])
    const [ filteredFriendScores, setFilteredFriendScores ] = useState([])

    // setting refs to find values of fight selected and friend selected
    const fightId = useRef(0)
    const friendId = useRef(0)


    // grab current user and then filter for that user's friends
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
 
    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
        // change event for fight select that grabs value of fight selected
        // then renders that fight to the DOM
        const handleSubmit = (e) => {
            const fightSelect = parseInt(fightId.current.value)
            const filteredScoresForCard = filteredFriends.filter(s => s.scoreFightId === fightSelect)

            setFilteredScores(filteredScoresForCard.map(score => {
                                
                return ( 
                
                        <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 

                    )
                }) )  
            
            e.preventDefault()
    }

        // change event for friend select that grabs value of friend selected
        const handleSubmitFriend = (e) => {
            const friendSelect = parseInt(friendId.current.value)
            const filteredScoresForOtherUsers = scores.filter(s => s.userId !== currentUserId)
            const filteredScoresForCard = filteredScoresForOtherUsers.filter(s => s.userId === friendSelect)

                setFilteredFriendScores(filteredScoresForCard.map(score => {
                                    
                    return ( 
                    
                        <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                    )
            }) )                                                                                               
            
            e.preventDefault()
    }

    // jsx that renders both fight and friend select options as well as the selected scorecard
    return (
    
    <div className="scores card" key={score.id}> 

        <h3>Friend's Scorecard</h3>

        <select onChange={(e) => { handleSubmit(e) }} defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
        </select>

    

        <select onChange={(e) => { handleSubmitFriend(e) }} defaultValue="" name="friends" id="" className="form__control" ref={friendId}>
                <option value="0">Select a friend</option>
                {filteredFriends.map((friend) => (
                    
                    <option key={friend.userFriendId} value={friend.userFriendId}>
                        { users.map(user => user.id === friend.userFriendId ? user.name : "")}
                    </option>
                    
                ))}
        </select>
    
 
        <div id="filtered__friend__scores">

                { 
                    filteredScores && filteredFriendScores
                }
                                                                                            
        </div>
       
    </div>
    )
}
