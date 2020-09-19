import React, { useState } from "react"
import "./Scores.css"

export default ({ fight, user, score }) => (
    <section key={score.id} className="score">
        <h3 className="score__fight">
                { fight.R_fighter } vs { fight.B_fighter }          
        </h3>
    </section>
)