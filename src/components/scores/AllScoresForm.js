import { AverageScoresList } from "./AverageScoresList";
import React from "react"
import "./Scores.css"
import { FriendScoresList } from "./FriendScoresList";
import { UserScoresList } from "./UserScoresList";



export default () => {
    
    return (  
      
        <section className="all__scores form">

            <UserScoresList/>
            <FriendScoresList/>
            <AverageScoresList/>
            
        </section>
    )
}
 
