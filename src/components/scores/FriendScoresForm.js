import React, { useContext, useEffect, useState, useRef} from "react"
import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import { ScoreContext } from "./ScoresProvider";
import "./Scores.css"
import { FriendScoresList } from "./FriendScoresList";


export default ({ friend, image, title, props  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)
    const { getScores, scores } = useContext(ScoreContext)
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 
    const [user, setUser] = useState({})

    // const fightId = useRef(0)

    // const handleSubmit = (e) => {
    //     const fightSelect = parseInt(fightId.current.value)
    //     const fightFind = scores.find(s => s.scoreFightId === fightSelect) || {}
    //     // if (currentUserId === fightFind.userId && fightSelect === fightFind.scoreFightId) {
    //     //    return <OldScoresList />

    //     // }

    //     console.log(fightSelect, fightFind)
    //     e.preventDefault()
    // }
    
    // useEffect(() => {
    //     console.log(fightId.current.value)
    // }, [fightId.current.value])

    useEffect(() => {
        setUser(users)
    }, [users])

    return (  
    
        
        <section className="old__scores form">

            

            {/* <select defaultValue="" name="fight" ref={fightId} id="" className="form__control">
                <option value="0">Select a fight</option>
                {fights.map((e) => (
                    
                    <option key={e.id} value={e.id}>
                        { e.R_fighter } vs { e.B_fighter }
                    </option>
                    
                ))}
            </select> */}
            {/* <button onClick={(e) => {
                handleSubmit(e)
                if (1 === 1) {
                    return <OldScoresList/>
                }
            }}>Show Scores</button> */}
            {/* {currentUserId === fightFind.userId && fightSelect === fightFind.scoreFightId ? <OldScoresList /> : ""}  */}
            <FriendScoresList/>
            
        </section>
    )
}
            // <select onChange={console.log(document.querySelector('#select option:checked'))} id="select">
            //         {
            //             fights.map(fight => {
            //                 return (
            //                     <option className="fight__option" key={fight.id} id={fight.id} }> { fight.R_fighter } vs { fight.B_fighter }
                                
            //                             {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
            //                         {fight.id} */}
            //                     </option>                                
            //                 )
            //             })
            //         }
                       
            //     </select>