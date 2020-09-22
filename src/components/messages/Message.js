import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";
import { UserContext } from "../users/UserProvider";
import ContentEditable from 'react-contenteditable'
import "./Message.css"

export default ({ message, user  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getMessages, messages, deleteMessage, editMessage } = useContext(MessageContext)
    // const [user, setUser] = useState({})
    // const [ currentUser, setCurrentUser] = useState({})
    // const editMode = props.match.params.hasOwnProperty("messageId")
    const currentUser = users.find(u => u.id === message.userId) || {}
    const [input, setInput] = useState('')

    // const message = useRef(null)
    // console.log(currentUser)

    // const [message, setMessage] = useState({})

    const handleSubmit = (e) => {

        // const fightSelect = parseInt(fightId.current.value)
        // editMessage({
        //             id: message.id,
        //             userId: currentUserId,
        //             content: message.content,
        //             timestamp: new Date(),
                   
        //         })
            console.log(input)
        e.preventDefault()
    }

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

    // function constructor() {
    // super()
    // this.contentEditable = React.createRef();
    // this.state = {html: "<b>Hello <i>World</i></b>"};
    // };

    return (   
        <section key={message.id} className="message">
            {/* <p>{currentUserId === message.userId ? users.map(u=> user.id === message.userId ? user.name : "") : ""}</p> */}
            {/* <p>{message.userId === currentUserId ? users.find(u => u.id === currentUserId ? u.name: "") : ""} </p> */}
            <p>{currentUser.name} </p>
            {/* <p>{message.content}</p> */}

            {currentUserId === message.userId ?
            <ContentEditable onChange={(e) => handleSubmit(e)} value={input} id={message.id} html={message.content} /> : message.content}

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