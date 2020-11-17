import React from "react"
import "./Logo.css"
import logo from "./logo.png"


const Logo = () => {
    return (
        <div className="col  logo">
            <img src={logo} alt="menthhealth"/>
        </div>
    )
}
export default Logo