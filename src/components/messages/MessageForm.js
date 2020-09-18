import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";
import { MessageList } from "./MessageList";
import { UserContext } from "../users/UserProvider"
import "./Message.css"



export const MessageForm = ({  timestamp, props  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const { getUsers, users } = useContext(UserContext)
    const { getMessages, messages } = useContext(MessageContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [message, setMessage] = useState({})
    const { addMessage } = useContext(MessageContext)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getMessages().then(getUsers)
    }, [])
    
    useEffect(() => {
        setUser(users)
    }, [users])
    
    useEffect(() => {
        setMessage(messages)
    }, [messages])


    const [input, setInput] = useState('')

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
        <div className="message">
            <div className="message__top">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="message__input" placeholder={"What do you think?"}></input>
                    <button id={currentUserId} onClick={
                            handleSubmit
                        
                            } >Submit</button>
                </form>
            </div>
            <div className="message__bottom">
               <MessageList {...props}/>
                
            </div>




        </div>
    )
}