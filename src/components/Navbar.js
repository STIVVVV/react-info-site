import React from "react"
import logo from "../images/reactjs-icon.png"

export default function Navbar() 
{
    return (
        <nav>
            <img src={logo} alt="logo"></img>
            <h3>React Facts</h3>
            <h4>It's a good day</h4>
        </nav>
    )
}