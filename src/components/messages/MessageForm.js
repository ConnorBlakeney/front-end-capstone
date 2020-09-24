import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageList } from "./MessageList"
import { UserContext } from "../users/UserProvider"
import { ScoresList } from "../scores/ScoresList";
import "./Message.css"



export const MessageForm = ({ props }) => {

    // grabbing api fetches and currentuser
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const { getUsers } = useContext(UserContext)
    const { getMessages } = useContext(MessageContext)

    const { addMessage } = useContext(MessageContext)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getMessages().then(getUsers)
    }, [])
    
    // setting input var in input jsx, using that to send content to api and
    // reset state to empty string
    const [input, setInput] = useState('')

    // on click event, adds message on submit
    const handleSubmit = (e) => {

        addMessage({
                userId: currentUserId,
                content: input,
                timestamp: new Date()
            })

        setInput("")

        e.preventDefault()
    }

    return (

        // jsx for messages

        <div className="message__form">

            <ScoresList />

            <div className="message__both">

            <h3>Chat</h3>

            <span className="chat__submit">
                <input value={input} onChange={(e) => setInput(e.target.value)} className="message__input" placeholder={"What do you think?"}></input>

                <button id={currentUserId} className="submit btn" onClick={
                        handleSubmit
                        
                        } >Submit</button>



                <MessageList {...props} />
            </span>        

            </div>
        </div>
    )
}