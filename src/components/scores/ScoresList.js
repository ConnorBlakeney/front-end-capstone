import React, { useState, useContext, useEffect, useRef } from "react"
import { UserContext } from "../users/UserProvider"
import { ScoreContext } from "./ScoresProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import "./Scores.css"

export const ScoresList = () => {

    //getting context from providers
    const { getUsers } = useContext(UserContext)
    const { getScore, addScore } = useContext(ScoreContext)
    const { getFights, fights } = useContext(FightContext)
    const { getFriends } = useContext(FriendContext)

    //setting state for score and friends
    const [ score ] = useState({})

    // getting ref from fight select option
    const fightId = useRef(0)

    const currentUserId = parseInt(localStorage.getItem("current_user"))
 

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getScore().then(getUsers).then(getFights).then(getFriends)
    }, [])
    
    // on click event for save scores button
    const handleSubmit = (e) => {

        const fightSelect = parseInt(fightId.current.value)
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
                    scoreFightId: fightSelect 
                })
            console.log(fightSelect)
        e.preventDefault()
    }

    return (

        <div key={score.id} className="live__scores live__card">
            
            <h3>Live Scores</h3>

            <select defaultValue="" name="fight__select" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                ))}
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
                </form>

            </section>

            <button onClick={
                handleSubmit
            } >Save Scores</button>

        </div>
       
    )
}


