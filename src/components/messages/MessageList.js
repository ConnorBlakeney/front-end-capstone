import React, { useState, useContext, useEffect } from "react"
import { UserContext } from "../users/UserProvider"
import { MessageContext } from "../messages/MessageProvider"
import Message from "../messages/Message";
import { Collapse, Button } from "reactstrap";
import "./Message.css"

export const MessageList = ({ props }) => {
    const { getUsers, users } = useContext(UserContext)
    const { getMessages, messages } = useContext(MessageContext)

    const [user, setUser] = useState({})
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => setIsOpen(!isOpen)

    // Initialization effect hook -> Go get fight data
    useEffect(() => {
        getMessages().then(getUsers)
    }, [])
    
    useEffect(() => {
        setUser(users)
    }, [users])
    
    // jsx maps over message component to render individual messages by most recent
    return (
        
        // <Collapse isOpen={isOpen}>
            <div className="message__list">
                {/* <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button> */}
                    {
                        messages.map(message => {

                            return <Message key={message.id} message={message} user={user} {...props}/>

                        }).reverse()
                        
                    }
            </div>
        // </Collapse>
    )
}