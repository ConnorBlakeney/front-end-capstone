import React from "react"
import { Route } from "react-router-dom"
import { HomeList } from "./home/HomeList";

export const ApplicationViews = (props) => {
    return (
        <>
            
           <HomeList />


            

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("current_user")
                    props.history.push("/login")
                }
            } />

            
        </>
    )
}