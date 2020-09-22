import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import ReactDOM from "react-dom"
import "./Scores.css"
import ScoresUser from "./ScoresUser";

export const FriendScoresList = ({ history, props }) => {


    const { getUsers, users } = useContext(UserContext)
    const { getScore, scores, addScore } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [score, setScore] = useState({})
    // const [fight, setFight] = useState({})
    const [friend, setFriend] = useState({})
    const [filteredScores, setFilteredScores] = useState([])
    const [filteredFriendScores, setFilteredFriendScores] = useState([])
    const [friendSelected, setFriendSelected] = useState(false)
    const [fightSelected, setFightSelected] = useState(false)

    // const fightId = parseInt(fight.current.value)
    // console.log(fight)
    const fightId = useRef(0)
    const friendId = useRef(0)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
    const friendsToUser = users.map(user => user.id === friend.userFriendId)
    // console.log(friendsToUser)

    // const friendsToUser = filteredFriends.filter(friend => friend.userId === user.id)
    // const fightSelect = parseInt(fightId.current.value)
    // const filteredScoresForCurrentUser = scores.filter(s => s.userId === currentUserId)
    // console.log(filteredScores)
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
            // console.log(filteredFriends)
            const otherUsers = users.filter(user => user.id !== currentUserId)
            // console.log(otherUsers)


            const filteredScoresForOtherUsers = scores.filter(s => s.userId !== currentUserId)
            const filteredScoresForCard = filteredScoresForOtherUsers.filter(s => s.scoreFightId === fightSelect)

            // const filteredScoresForCurrentUser = filteredScoresForCard.filter(s => s.userId === currentUserId)
            // const scoreFind = filteredScoresForCurrentUser.find(s => s.scoreFightId === fightSelect) || {}
            // if (currentUserId === scoreFind.userId && fightSelect === scoreFind.scoreFightId) {
            //    return <OldScoresList />
            console.log(fightSelect, filteredScoresForCard)
            // const scoreEl = document.querySelector("#filtered__scores")
            // scoreEl.innerHTML = ""
            // if (fightSelect === scoreFind.scoreFightId) {
            //                           console.log(scores, scoreFind.roundOneBlue, fightId, fightSelect)                                                          
                setFilteredScores(filteredScoresForCard.map(score => {
                                    
                                return ( 
                                
                                    <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                )
                        }) )  

                                                                                                
                            
            // }

            // for(key in scoreFind) {
            //     if (key.scoreFightId === fightSelect) {
                
            //     }
            // }
            // }
            
            e.preventDefault()
    }

        const handleSubmitFriend = (e) => {
            const fightSelect = parseInt(fightId.current.value)
            // console.log(fightSelect)
            const friendSelect = parseInt(friendId.current.value)
            const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 
            const friendFind = filteredFriends.find(f => f.userFriendId === friendSelect) || {}
            console.log(filteredFriends, friendFind)
            // const otherUsers = users.filter(user => user.id !== currentUserId)


            const filteredScoresForOtherUsers = scores.filter(s => s.userId !== currentUserId)
            // const filteredScoreCardForParticularFriend = filteredScoresForOtherUsers.filter(s => s.userId === user.id)
            console.log(friendSelect)
            const filteredScoresForCard = filteredScoresForOtherUsers.filter(s => s.userId === friendSelect)

            // const filteredScoresForCurrentUser = filteredScoresForCard.filter(s => s.userId === currentUserId)
            // const scoreFind = filteredScoresForCurrentUser.find(s => s.scoreFightId === fightSelect) || {}
            // if (currentUserId === scoreFind.userId && fightSelect === scoreFind.scoreFightId) {
            //    return <OldScoresList />
            // console.log(fightSelect, filteredScoresForCard)
            // const scoreEl = document.querySelector("#filtered__scores")
            // scoreEl.innerHTML = ""
            // if (fightSelect === scoreFind.scoreFightId) {
            //                           console.log(scores, scoreFind.roundOneBlue, fightId, fightSelect)                                                          
                setFilteredFriendScores(filteredScoresForCard.map(score => {
                                    
                                return ( 
                                
                                    <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                )
                        }) )  

                                                                                                
                            
            // }

            // for(key in scoreFind) {
            //     if (key.scoreFightId === fightSelect) {
                
            //     }
            // }
            // }
            
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

    

        <select onChange={(e) => { handleSubmitFriend(e) }} defaultValue="" name="friends" id="" className="form__control" ref={friendId}>
                <option value="0">Select a friend</option>
                {filteredFriends.map((friend) => (
                    
                    <option key={friend.userFriendId} value={friend.userFriendId}>
                        { users.map(user => user.id === friend.userFriendId ? user.name : "")}
                    </option>
                    
                ))}
        </select>
    
                
            

        <h3>Friend's Scorecard</h3>

        
        <div id="filtered__friend__scores">

                { 
                    // console.log(filteredScores)
                    
                    filteredScores && filteredFriendScores
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
