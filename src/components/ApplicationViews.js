import React from "react"
import { Route } from "react-router-dom"
import { HomeList } from "./home/HomeList";
import { HomeForm } from "./home/HomeForm";
import { FightProvider } from "./fights/FightProvider";

export const ApplicationViews = (props) => {
    return (
        <>
         <FightProvider>   
            <HomeList />
            <HomeForm />
        </FightProvider>


            

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("current_user")
                    props.history.push("/login")
                }
            } />

            
        </>
    )
}