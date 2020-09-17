import React, { useState } from "react"

export const ScoreContext = React.createContext()

export const ScoreProvider = (props) => {
    const [scores, setScores] = useState([])
    const [searchTerms, setTerms] = useState("")


    const getScore = () => {
        return fetch("http://localhost:8088/scores")
            .then(res => res.json())
            .then(setScores)
    }

    const getScoreById = (id) => {
        return fetch(`http://localhost:8088/scores/${id}?_expand=scorecard&_expand=userFriends`)
            .then(res => res.json())
    }

    const addScore = score => {
        return fetch("http://localhost:8088/scores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
        })
            .then(getScore)
    }

    const editScore = score => {
        return fetch(`http://localhost:8088/scores/${score.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(score)
        })
            .then(getScore)
    }

    const deleteScore = (scoreId) => {
        return fetch(`http://localhost:8088/scores/${scoreId}`, {
            method: "DELETE"
        })
            .then(getScore)
    }

    return (
        <ScoreContext.Provider value={{
            scores, getScore, getScoreById,
            searchTerms, setTerms, addScore, editScore, deleteScore
        }}>
            {props.children}
        </ScoreContext.Provider>
    )
}