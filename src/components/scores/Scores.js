import React, { useState } from "react"
import "./Scores.css"

export default ({ fight, user, score }) => (
    <section key={score.id} className="score">
        <div className="score__fight">
                { score.rouneOneRed } - { score.rouneOneBlue }          
                { score.roundTwoRed } - { score.roundTwoBlue }          
                { score.roundThreeRed } - { score.roundThreeBlue }          
                { score.roundFourRed } - { score.roundFourBlue }          
                { score.roundFiveRed } - { score.roundFiveBlue }          
        </div>
    </section>
)