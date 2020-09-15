import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import { HomeDetails } from "./HomeDetail";

export default ({ fight }) => (
    <section className="fight">
        <h3 className="fight__name">
            <Link key={fight.id} to={`/fights/${fight.id}`}   >
                { fight.R_fighter } vs { fight.B_fighter }
            </Link>
        </h3>
    </section>
)