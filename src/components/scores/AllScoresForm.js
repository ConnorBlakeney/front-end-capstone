import { AverageScoresList } from "./AverageScoresList";
import React from "react"
import "./Scores.css"
import { FriendScoresList } from "./FriendScoresList";
import { OldScoresList } from "./OldScoresList";



export default () => {
    
    return (  
      
        <section className="all__scores form">

            <OldScoresList/>
            <FriendScoresList/>
            <AverageScoresList/>
            
        </section>
    )
}
 
