import React, { useState, useContext, useEffect } from "react"
import { FightContext } from "../fights/FightProvider"
import Home from "./Home"
import "./Home.css"

export const HomeList = ({ history }) => {
    const { getFights, fights } = useContext(FightContext)

    const [filteredFights, setFiltered] = useState([])

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getFights()
    }, [])

    useEffect(() => {
        setFiltered(fights)
    }, [fights])


    return (
        
            <div className="fights">
                {
                    filteredFights.map(animal => {
                        return <Animal key={animal.id} animal={animal} />
                    })
                }
            </div>
        
    )
}