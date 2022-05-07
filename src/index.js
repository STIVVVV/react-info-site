function MainContent()
{
    return (
        <h1>I am learning react</h1>
    )
    
}
/*
ReactDOM.render (
    <div>
        <MainContent/>
    </div>,

    document.getElementById("root")
)
*/
const h1 = document.createElement("h1")
h1.textContent = "carl"
h1.className = "header"
document.getElementById('root').appendChild(h1)