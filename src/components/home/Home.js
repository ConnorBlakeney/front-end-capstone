import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export default ({ recentFight }) => (
    <section className="fight">
        <h3 className="fight__name">
            <Link to={`/recentFights/${recentFight.id}`}>
                { recentFight.R_fighter }
            </Link>
        </h3>
        {/* <div className="animal__breed">{ animal.breed }</div> */}
    </section>
)