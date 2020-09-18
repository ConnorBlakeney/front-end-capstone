import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../users/UserProvider";
import "./Message.css"

export default ({ props, message, user  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getMessages, messages, deleteMessage, editMessage } = useContext(MessageContext)
    // const [user, setUser] = useState({})
    // const [ currentUser, setCurrentUser] = useState({})
    // const editMode = props.match.params.hasOwnProperty("messageId")
    const currentUser = users.find(u => u.id === message.userId) || {}

    // console.log(currentUser)

    // const [message, setMessage] = useState({})

    useEffect(() => {
        getUsers().then(getMessages)
    }, [])

    // useEffect(() => {
    //     setUser(users)
    //     // console.log(users.find(u => u.id === currentUserId))
    // }, [users])

    // useEffect(() => {
    //     // const currentUser = users.find(u => u.id === currentUserId)
    //     setCurrentUser(currentUser)
    //     console.log(currentUser)
    // }, [users])

    // useEffect(() => {
    //     setMessage(messages)
    // }, [messages])

    return (   
        <section key={message.id} className="message">
            {/* <p>{currentUserId === message.userId ? users.map(u=> user.id === message.userId ? user.name : "") : ""}</p> */}
            {/* <p>{message.userId === currentUserId ? users.find(u => u.id === currentUserId ? u.name: "") : ""} </p> */}
            <p>{currentUser.name} </p>
            <p>{message.content}</p>
            {/* <p>{message.content}</p> */}
            <p>{message.timestamp.toLocaleString()}</p>
            {currentUserId === message.userId ? 
            <button id={message.id} className="del btn"
                    onClick={
                        () => {
                                deleteMessage(message.id)                                   
            }}>Delete</button>
            : ""}
            {currentUserId === message.userId ? 
            <button id={message.id} className="del btn"
                    onClick={
                        () => {
                                editMessage({
                                id: message.id,
                                userId: currentUserId,
                                content: message.content,
                                timestamp: new Date() 
                                     
                })                                   
            }}>Edit</button>
            : ""}
        </section>
    )


}