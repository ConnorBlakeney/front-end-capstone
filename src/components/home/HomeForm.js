import React from "react"
import { UpcomingList, RecentList } from "./HomeList";
import "./Home.css"

export const HomeForm = () => {

    // jsx that renders home page
    return (

        <form className="home__form">

            <h2 className="home__form__title">Home Page</h2>

            <div className="fight__cards">

                <fieldset className="form__upcoming card">

                    <h3>Upcoming Main Card Fights</h3>

                    <UpcomingList/>

                </fieldset>

                <fieldset className="form__previous card">

                    <h3>Previous Main Card Fights</h3>

                    <RecentList/>

                </fieldset>

            </div>
            
        </form>
    )
}