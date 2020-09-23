import React from "react"
import "./Scores.css"
import { ScoresList } from "./ScoresList";


export default () => {

    return (  
    
        // rendering scores form
        
        <section className="scores form">
            
            <h2>Live Scores and Chat</h2>
            <ScoresList />
            
        </section>
    )


}
           