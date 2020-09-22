import React, { useState } from "react"
import "./Scores.css"

export default ({ fight, user, score }) => (
    <section key={score.id} className="score">
        <div className="score__card">
            <div className="score__fight red">
                    <p className="round__one red">Round 1: { score.roundOneRed }</p>           
                    <p className="round__two red">Round 2: { score.roundTwoRed }</p>         
                    <p className="round__three red">Round 3: { score.roundThreeRed } </p>         
                    <p className="round__four red">Round 4: { score.roundFourRed } </p>       
                    <p className="round__five red">Round 5: { score.roundFiveRed } </p>        
            </div>
            <div className="score__fight blue">
                    <p className="round__one blue"> - { score.roundOneBlue }</p>         
                    <p className="round__one blue"> - { score.roundTwoBlue }</p>        
                    <p className="round__one blue"> - { score.roundThreeBlue }</p>         
                    <p className="round__one blue"> - { score.roundFourBlue }</p>         
                    <p className="round__one blue"> - { score.roundFiveBlue }</p>         
            </div>
        </div>
    </section>
)

// if currentuserid === scores.userid && scores.scorefightid === fightselect then render 