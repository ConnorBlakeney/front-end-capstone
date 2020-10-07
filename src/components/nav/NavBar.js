import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/chat">Live Scoring/Chat</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/scores">Friends/Previous Scores</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/logout">Logout</Link>
            </li>
            <div id="indicator"></div>
        </nav>
    )
}