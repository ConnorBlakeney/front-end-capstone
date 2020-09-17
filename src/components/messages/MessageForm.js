import React, { useContext, useEffect, useState, useRef} from "react"
import { MessageContext } from "./MessageProvider";

export const MessageForm = (props) => {
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
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="message__input" placeholder={"What do you think?"}></input>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>




        </div>
    )
}