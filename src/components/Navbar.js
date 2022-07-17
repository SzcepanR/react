import React from "react"
import Img from "../images/airbnb.jpg"
function Navbar(){
    return(
    <nav className="navbar">
        <img src={Img} className="logo"/>
        <h1 className="airbnb">airbnb</h1>
    </nav>
    )
}
export default Navbar 