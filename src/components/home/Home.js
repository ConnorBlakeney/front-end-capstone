import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"

export default ({ fight }) => (
    <section className="fight">
        <h3 className="fight__name">
            <Link to={`/fights/${fght.id}`}>
                { fight.R_fighter }
            </Link>
        </h3>
        {/* <div className="animal__breed">{ animal.breed }</div> */}
    </section>
)