import React from "react"
import { Route } from "react-router-dom"
import { HomeForm } from "./home/HomeForm";
import { FightProvider } from "./fights/FightProvider";
import { HomeDetail } from "./home/HomeDetail";
import { FriendProvider } from "./friends/FriendsProvider";
import { FriendForm } from "./friends/FriendsForm";
import { FriendsList } from "./friends/FriendsList";
import { UserProvider } from "./friends/UserProvider";

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

        <UserProvider>
            <FriendProvider>
                <Route path="/scores">
                        <FriendForm />
                        <Route path="/friends/:friendId(\d+)" render={
                            props => <FriendForm {...props} />
                        } />
                </Route>   
            </FriendProvider>
        </UserProvider>

            

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("current_user")
                    props.history.push("/login")
                }
            } />

            
        </>
    )
}