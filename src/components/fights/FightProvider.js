import React, { useState } from "react"

export const FightContext = React.createContext()

export const FightProvider = (props) => {
    const [fights, setFights] = useState([])
    const [searchTerms, setTerms] = useState("")

    const getFights = () => {
        return fetch("http://localhost:8088/recentFights")
            .then(res => res.json())
            .then(setFights)
    }

    const getFightById = (id) => {
        return fetch(`http://localhost:8088/recentFights/${id}?_expand=scorecard&_expand=user`)
            .then(res => res.json())
    }

    const addFight = fight => {
        return fetch("http://localhost:8088/fights", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fight)
        })
            .then(getFights)
    }

    const updateFight = fight => {
        return fetch(`http://localhost:8088/fights/${fight.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fight)
        })
            .then(getFights)
    }

    const deleteFight = (fightId) => {
        return fetch(`http://localhost:8088/fights/${fightId}`, {
            method: "DELETE"
        })
            .then(getFights)
    }

    return (
        <FightContext.Provider value={{
            fights, addFight, getFights, getFightById,
            searchTerms, setTerms, deleteFight, updateFight
        }}>
            {props.children}
        </FightContext.Provider>
    )
}