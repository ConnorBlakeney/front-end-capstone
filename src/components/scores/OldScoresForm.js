import React from "react"
import "./Scores.css"
import { OldScoresList } from "./OldScoresList";


export default () => {
   
    // jsx for user scores to render to DOM
    return (  
           
        <section className="old__scores form">
            <h2 className="friendForm__title">Friends and Previous Scores</h2>

            <OldScoresList/>
            
        </section>
    )
}
            