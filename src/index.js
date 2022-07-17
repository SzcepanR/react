import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Hero from "./components/Hero"
import "./style.css"

import Data from "./data"

function App(){
    const tileElement = Data.map(tile => {
        return <Main  key={tile.id}  tile={tile}/>
    })


    return(
    <div className="container">
    <Navbar/>
    <Hero/> 
        <div className="tiles">
            {tileElement}
        </div>
        
    </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))