import React, { useState, useContext, useEffect } from "react"
import { FightContext } from "../fights/FightProvider"
import Home from "./Home"
import "./Home.css"

export const UpcomingList = ({ history }) => {
    const { getFights, fights } = useContext(FightContext)

    const [filteredFights, setFiltered] = useState([])

    const sortedFights = [...filteredFights].sort((a, b) => {
        return b.date - a.date;
    })


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

                    sortedFights.slice(5, 10).map(fight => {
                        return <Home key={fight.id} fight={fight} />
                    })
                }
            </div>
        
    )
}

export const RecentList = ({ history }) => {
    const { getFights, fights } = useContext(FightContext)

    const [filteredFights, setFiltered] = useState([])

    const sortedFights = [...filteredFights].sort((a, b) => {
        return b.date - a.date;
    })


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

                    sortedFights.slice(0, 5).map(fight => {
                        return <Home key={fight.id} fight={fight} />
                    })
                }
            </div>
        
    )
}