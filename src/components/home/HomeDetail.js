import React, { useState, useEffect, useContext } from "react"
import { FightContext } from "../fights/FightProvider"
import "./Home.css"

export const HomeDetail = (props) => {
    // context to use api info
    const { fights, getFights } = useContext(FightContext)

    // set state of individual fights
    const [fight, setFight] = useState({})

    useEffect(() => {
        getFights()
    }, [])

    // sets state of fights depending on the url
    useEffect(() => {
        const fight = fights.find(f => f.id === parseInt(props.match.params.fightId)) || {}
        setFight(fight)
    }, [])

    // jsx for home page links, shows fight stats per fight
    return (

        <section className="fight__stats">

            <h3>Fight Stats</h3>

            <div>{fight.R_fighter}   <span>vs</span>    {fight.B_fighter}</div>

            <div>Location: {fight.location}</div>

            <div>Date: {fight.date}</div>

            <div>Rounds: {fight.no_of_rounds}</div>

            <div>{fight.R_age}   <span>Age</span>    {fight.B_age}</div>

            <div>{fight.R_wins}-{fight.R_losses}   <span>UFC Record</span>    {fight.B_wins}-{fight.B_losses}</div>

            <div>{fight.weight_class}   <span>Weight Class</span>    {fight.weight_class}</div>

            <div>{fight.R_Stance}   <span>Style</span>   {fight.B_Stance}</div>

            <div>{Math.round(fight.R_Reach_cms *0.39370)} in   <span>Reach</span>   {Math.round(fight.B_Reach_cms *0.39370)} in</div>

        </section>
    )
}