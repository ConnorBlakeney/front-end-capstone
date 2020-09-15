import React, { useState, useEffect, useContext } from "react"
import { FightContext } from "../fights/FightProvider"
// import { ReactModal } from "react-modal";
import "./Home.css"

// ReactModal.setAppElement("#root");

export const HomeDetail = (props) => {
    const { fights, getFights } = useContext(FightContext)

    const [fight, setFight] = useState({})

    useEffect(() => {
        console.log("home detail")
        getFights()
    }, [])

    useEffect(() => {
        const fight = fights.find(f => f.id === parseInt(props.match.params.fightId)) || {}
        setFight(fight)
    }, [fights])


    return (
        <section className="fight">
            <h3>{fight.R_fighter}   Name    {fight.B_fighter}</h3>
            <div>{fight.R_age}   Age    {fight.B_age}</div>
            <div>{fight.R_wins}-{fight.R_losses}   UFC Record    {fight.B_wins}-{fight.B_losses}</div>
            {/* <div>{fight.R_fighter}   Name    {fight.B_fighter}</div> */}
            {/* <div>{fight.R_fighter}   Name    {fight.B_fighter}</div> */}
        </section>
    )
}

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="App">
//       <button onClick={toggleModal}>Open modal</button>

//       <ReactModal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//       >
//         <div>My modal dialog.</div>
//         <button onClick={toggleModal}>Close modal</button>
//       </ReactModal>
//     </div>
//   );
// }