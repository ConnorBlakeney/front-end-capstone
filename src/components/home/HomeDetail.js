import React, { useState, useEffect, useContext } from "react"
import { FightContext } from "../fights/FightProvider"
import "./Home.css"


export const HomeDetail = (props) => {
    const { fights, getFights } = useContext(FightContext)

    const [fight, setFight] = useState({})

    useEffect(() => {
        getFights()
    }, [])

    useEffect(() => {
        const fight = fights.find(f => f.id === parseInt(props.match.params.fightId)) || {}
        setFight(fight)
    }, [fights])


    return (
        <section className="fight">
            <h3>{fight.R_fighter}   Name    {fight.B_fighter}</h3>
            <div>{fight.R_age}   Age    {fight.B_age}</div>
            <div>{fight.R_wins}-{fight.R_losses}   UFC Record    {fight.B_wins}-{fight.B_losses}</div>
            <div>{fight.R_fighter}   Name    {fight.B_fighter}</div>
            <div>{fight.R_fighter}   Name    {fight.B_fighter}</div>
        </section>
    )
}