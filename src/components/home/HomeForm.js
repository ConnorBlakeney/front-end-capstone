import React, { useContext, useState, useEffect } from "react"
import { FightContext } from "../fights/FightProvider";
import "./Home.css"

export const HomeForm = (props) => {
    // Use the required context providers for data
    const { fights, getFights } = useContext(FightContext)

    // Component state
    const [fight, setFight] = useState({})

    
    useEffect(() => {
        getFights()
    }, [])

    return (
        <form className="homeForm">
            <h2 className="homeForm__title">Home Page</h2>
            <div className="fight__cards">
                <fieldset className="form__upcoming card">
                    <h3>Upcoming Fights: </h3>
                </fieldset>
                <fieldset className="form__previous card">
                    <h3>Previous Card Fights: </h3>
                </fieldset>
            </div>
            
        </form>
    )
}