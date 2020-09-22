import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export default ({ fight }) => (
    <section key={fight.id} className="fight">
        <h3 className="fight__name">
            <Link to={`/fights/${fight.id}`}   >
                { fight.R_fighter } vs { fight.B_fighter }
            </Link>
        </h3>
    </section>
)