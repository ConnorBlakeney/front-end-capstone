import React from "react"
import { Route } from "react-router-dom"
import { HomeForm } from "./home/HomeForm";
import { FightProvider } from "./fights/FightProvider";
import { HomeDetail } from "./home/HomeDetail";
import { FriendProvider } from "./friends/FriendsProvider";
import { FriendForm } from "./friends/FriendsForm";

export const ApplicationViews = (props) => {
    return (
        <>
            
         <FightProvider>
            <Route exact path="/">
                    <HomeForm />
            </Route>   
            <Route path="/fights/:fightId(\d+)" render={
                    props => <HomeDetail {...props} />
                } />
        </FightProvider>

         <FriendProvider>
            <Route path="/scores">
                    <FriendForm />
            </Route>   
            
        </FriendProvider>


            

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("current_user")
                    props.history.push("/login")
                }
            } />

            
        </>
    )
}