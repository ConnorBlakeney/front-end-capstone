import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { MessageContext } from "../messages/MessageProvider"
import Message from "../messages/Message";
import "./Message.css"

export const MessageList = ({ history, props }) => {
    const { getUsers, users } = useContext(UserContext)
    const { getMessages, messages } = useContext(MessageContext)

    const [user, setUser] = useState({})

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getMessages().then(getUsers)
    }, [])
    
    useEffect(() => {
        setUser(users)
    }, [users])
    
    // jsx maps over message component to render individual messages by most recent
    return (
        
            <div className="message__list">
                {
                    messages.map(message => {

                        return <Message key={message.id} message={message} user={user} {...props}/>

                    }).reverse()
                    
                }
            </div>
        
    )
}