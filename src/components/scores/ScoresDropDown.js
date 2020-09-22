// import React, { useState, useContext, useEffect } from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { FightContext } from "../fights/FightProvider";
// import { ScoresList } from "./ScoresList";

// // export const ScoresDropDownFights = (props) => {
// // //   const [dropdownOpen, setDropdownOpen] = useState(false);
// // const { getFights, fights } = useContext(FightContext)

// // const [fight, setFight] = useState({})

// // useEffect(() => {
// //     getFights()
// // }, [])



// // //   const toggle = () => setDropdownOpen(prevState => !prevState);

// // useEffect(() => {
// //     setFight(fights)
// // }, [fights])

// //   return (
// //       <div>
// //         <label for="fights">Choose a fight:</label>

// //         <select name="fights" id="fights">
// //             <option value="fights">
                
// //             </option>
            
// //         </select>
// //       </div>
// //   );
// // }

// export const ScoresDropDownFriends = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggle = () => setDropdownOpen(prevState => !prevState);

//   return (
//     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle caret>
//         Friends
//         </DropdownToggle>
//       {/* <DropdownMenu>
//         <DropdownItem></DropdownItem>
        
//       </DropdownMenu> */}
//     </Dropdown>
//   );
// }