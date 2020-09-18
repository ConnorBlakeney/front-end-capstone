import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";
// import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
// import "./Chat.css"

// export default ({ friend, props  }) => {
//     const currentUserId = parseInt(localStorage.getItem("current_user"))
//     const {getUsers, users } = useContext(UserContext)
//     const [user, setUser] = useState({})


//     useEffect(() => {
//         setUser(users)
//     }, [users])

//     return (   
//     <section className="chat">
        
//     </section>
//     )


// }

export default ({ props}) => {
    const { addMessage } = useContext(MessageContext)


    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        setInput("")
        e.preventDefault()
    }
    return (
        <div className="message">
            <div className="message__top">
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="message__input" placeHolder={"What do you think?"}></input>
                    <button onClick={() => { handleSubmit  }>Submit</button>
                </form>
            </div>




        </div>
    )
}