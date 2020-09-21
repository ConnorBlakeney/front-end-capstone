import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import Scores from "./Scores";
import { Form } from 'reactstrap';
import "./Scores.css"

export const ScoresList = ({ history, props }) => {
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
        addScore ({
                    userId: currentUserId,
                    roundOneRed: parseInt(document.getElementById('roundOneRed').value),
                    roundOneBlue: parseInt(document.getElementById('roundOneBlue').value),
                    roundTwoRed: parseInt(document.getElementById('roundTwoRed').value),
                    roundTwoBlue: parseInt(document.getElementById('roundTwoBlue').value),
                    roundThreeRed: parseInt(document.getElementById('roundThreeRed').value),
                    roundThreeBlue: parseInt(document.getElementById('roundThreeBlue').value),
                    roundFourRed: parseInt(document.getElementById('roundFourRed').value),
                    roundFourBlue: parseInt(document.getElementById('roundFourBlue').value),
                    roundFiveRed: parseInt(document.getElementById('roundFiveRed').value),
                    roundFiveBlue: parseInt(document.getElementById('roundFiveBlue').value),
                    // scoreFightId: fightId 
                })
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
            
                <select onChange={console.log(document.querySelector('#select option:checked'))} id="select">
                    {
                        fights.map(fight => {
                            return (
                                <option className="fight__option" key={fight.id} id={fight.id} {...props}> { fight.R_fighter } vs { fight.B_fighter }
                                
                                        {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                    {fight.id} */}
                                </option>                                
                            )
                        })
                    }
                       
                </select>
            

        <section className="card__form">    
                <form className="round__form red">
                    <input id="roundOneRed" className="round__one red" placeholder="Round 1 Red" type="number"></input>
                    <input id="roundTwoRed" className="round__two red" placeholder="Round 2 Red" type="number"></input>
                    <input id="roundThreeRed" className="round__three red" placeholder="Round 3 Red" type="number"></input>
                    <input id="roundFourRed" className="round__four red" placeholder="Round 4 Red" type="number"></input>
                    <input id="roundFiveRed" className="round__five red" placeholder="Round 5 Red" type="number"></input>
                </form>
                <form className="round__form red">
                    <input id="roundOneBlue" className="round__one blue" placeholder="Round 1 Blue" type="number"></input>
                    <input id="roundTwoBlue" className="round__two blue" placeholder="Round 2 Blue" type="number"></input>
                    <input id="roundThreeBlue" className="round__three blue" placeholder="Round 3 Blue" type="number"></input>
                    <input id="roundFourBlue"className="round__four blue" placeholder="Round 4 Blue" type="number"></input>
                    <input id="roundFiveBlue" className="round__five blue" placeholder="Round 5 Blue" type="number"></input>
                    <button onClick={
                        handleSubmit
                    }>Save Scores</button>
                </form>
            </section>
        </div>
       
    </div>
    )
}

