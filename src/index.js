import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() 
{
    return (
        <div>
            <Header/>
            <MainContent/>
           <Footer/>
        </div>
    )  
}

ReactDom.render
(
    <App/>, document.getElementById("root")
)