// import React, { useContext, useEffect, useState, useRef} from "react"
// import { UserContext } from "../users/UserProvider";
// import { FriendContext } from "./FriendsProvider";
// import "./Scores.css"

// export default ({ friend, image, title  }) => {
//     const currentUserId = parseInt(localStorage.getItem("current_user"))
//     const {getUsers, users } = useContext(UserContext)
//     const [user, setUser] = useState({})


//     useEffect(() => {
//         setUser(users)
//     }, [users])

//     return (   
//         <section className="scores">
//             <h4> {title} </h4>
//             {/* <ScoreCard />
//             <ScoreCard />
//             <ScoreCard />
//             <ScoreCard />
//             <ScoreCard /> */}
//         </section>
//     )


// }