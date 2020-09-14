import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Capstone } from "./components/main";
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Capstone />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)