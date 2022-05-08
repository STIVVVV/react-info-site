import React from "react"
import ReactDom from "react-dom"

function Header()
{
    return(
        <header>
            <nav className="nav">
                <img src="/logo192.png" width="40px" alt=""/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() 
{
    return(
        <>
            <h1> I am happy to learn react</h1>
            <ol>
                <li>It is fun to learn</li>
                <li>Making over 6 figures looks pretty nice</li>
                <li>learning this will further improve my coding skills</li>
            </ol>
        </>
    )
    
}

function Footer() 
{
    return (
        <footer>
            <small>Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function Page() 
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
    <Page/>, document.getElementById("root")
)