import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import { Form } from 'reactstrap';
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

    const fightId = useRef(0)
    // const fightId = parseInt(fight.current.value)
    // console.log(fight)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId)
    // const foundFight = fights.find(f => f.id === document.getElementsByClassName('fight__option').value,) || {}
    // const foundFriend = filteredFriends.find(f => user.id === f.userFriendId)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
    console.log(fights.map(f => f.id))

    const handleSubmit = (e) => {
        // addScore ({
        //             userId: currentUserId,
        //             roundOneRed: parseInt(document.getElementById('roundOneRed').value),
        //             roundOneBlue: parseInt(document.getElementById('roundOneBlue').value),
        //             roundTwoRed: parseInt(document.getElementById('roundTwoRed').value),
        //             roundTwoBlue: parseInt(document.getElementById('roundTwoBlue').value),
        //             roundThreeRed: parseInt(document.getElementById('roundThreeRed').value),
        //             roundThreeBlue: parseInt(document.getElementById('roundThreeBlue').value),
        //             roundFourRed: parseInt(document.getElementById('roundFourRed').value),
        //             roundFourBlue: parseInt(document.getElementById('roundFourBlue').value),
        //             roundFiveRed: parseInt(document.getElementById('roundFiveRed').value),
        //             roundFiveBlue: parseInt(document.getElementById('roundFiveBlue').value),
        //             // scoreFightId: fightId 
        //         })
        e.preventDefault()
    }

    const prevent = e => {
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

        <div className="filteredFriends">
            
                
            

        {
            scores.map(score => {
                            return (
                                <ScoresUser className="score__option" key={score.id} id={score.id} score={score} {...props} /> 
                                
                                       
                                                                
                            )
                        })
        }
        </div>
       
    </div>
    )
}

