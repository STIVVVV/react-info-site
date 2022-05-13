import React from "react"
import logo from "../images/reactjs-icon.png"

export default function Navbar() 
{
    return (
        <nav>
            <img src={logo} alt="logo" className="nav--icon"></img>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">It's a good day</h4>
        </nav>
    )
}