import React, { useContext, useEffect, useState, useRef} from "react"
import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
import { FightContext } from "../fights/FightProvider";
import { FriendContext } from "../friends/FriendsProvider";
import "./Scores.css"
import { OldScoresList } from "./OldScoresList";


export default ({ friend, image, title  }) => {
    const currentUserId = parseInt(localStorage.getItem("current_user"))
    const {getUsers, users } = useContext(UserContext)
    const {getFights, fights } = useContext(FightContext)
    const { getFriends, friends } = useContext(FriendContext)
    const filteredFriends = friends.filter(friend => friend.userId === currentUserId) 
    const [user, setUser] = useState({})


    useEffect(() => {
        setUser(users)
    }, [users])

    return (  
    
        
        <section className="old__scores form">
            <h2 className="friendForm__title">Friends and Previous Scores</h2>

            <label>
                <select className="filtered__friends">
                    {
                        filteredFriends.map(friend => {
                            return (
                                
                                <option key={friend.id} id={friend.id}> { users.map(user => user.id === friend.userFriendId ? user.name : "") }
                                        {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                    {fight.id} */}
                                </option>
                                
                            )
                        })
                        
                    }
                </select>
            </label>

            <select onChange={console.log(document.querySelector('#select option:checked'))} id="select">
                    {
                        fights.map(fight => {
                            return (
                                <option className="fight__option" key={fight.id} id={fight.id}> { fight.R_fighter } vs { fight.B_fighter }
                                
                                        {/* <Scores key={score.id} score={score} user={user} fight={fight} {...props}/>
                                    {fight.id} */}
                                </option>                                
                            )
                        })
                    }
                       
                </select>

            <OldScoresList />
            
        </section>
    )


}