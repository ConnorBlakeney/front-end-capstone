import React from "react"
import { Route } from "react-router-dom"
import { HomeForm } from "./home/HomeForm";
import { FightProvider } from "./fights/FightProvider";
import { HomeDetail } from "./home/HomeDetail";
import { FriendProvider } from "./friends/FriendsProvider";
import { FriendForm } from "./friends/FriendsForm";
import { UserProvider } from "./users/UserProvider";
import { MessageProvider } from "./messages/MessageProvider";
import { UserForm } from "./users/UserForm";
import { MessageForm } from "./messages/MessageForm";
import { ScoreProvider } from "./scores/ScoresProvider";
import ScoresForm from "./scores/ScoresForm";
import OldScoresForm from "./scores/OldScoresForm";
import FriendScoresForm from "./scores/FriendScoresForm";
import AverageScoresForm from "./scores/AverageScoresForm";

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
                <ScoreProvider>
                    <FightProvider>
                            <Route path="/scores" render={
                                (props) => { 
                                    return (
                                        <>
                                        <OldScoresForm />
                                        <FriendScoresForm />
                                        <AverageScoresForm />
                                        <FriendForm />
                                        <UserForm history={props.history}/>
                                       </> 
                                    )
                                    }
                                }
                            />
                    </FightProvider>     
                </ScoreProvider>
            </FriendProvider>
        </UserProvider>



        <FriendProvider>
            <UserProvider>
                <MessageProvider>
                    <ScoreProvider>
                        <FightProvider>
                            <Route path="/chat" render={
                                (props) => { 
                                    return (
                                    <>
                                        <ScoresForm />
                                        <MessageForm history={props.history}/>
                                    </> 
                                    )
                                    }
                                }
                            />
                        </FightProvider>
                    </ScoreProvider>
                </MessageProvider>
            </UserProvider>
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


