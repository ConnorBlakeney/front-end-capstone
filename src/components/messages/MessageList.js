import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { MessageContext } from "../messages/MessageProvider"
import Message from "../messages/Message";
import "./Message.css"

export const MessageList = ({ history, props }) => {
    const { getUsers, users } = useContext(UserContext)
    const { getMessages, messages } = useContext(MessageContext)

    // const [filteredFights, setFiltered] = useState([])
    const [user, setUser] = useState({})
    const [message, setMessage] = useState({})


    // const sortedFights = [...filteredFights].sort((a, b) => {
    //     return b.date - a.date;
    // })


    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getMessages().then(getUsers)
    }, [])
    
    useEffect(() => {
        setUser(users)
    }, [users])
    
    useEffect(() => {
        setMessage(messages)
        // console.log(message)
    }, [messages])
    



    return (
        
            <div className="fights">
                {
                    messages.map(message => {
                        return <Message key={message.id} message={message} user={user}/>
                    })
                }
            </div>
        
    )
}