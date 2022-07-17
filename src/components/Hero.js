import HeroImg from "../images/hero.png"
import React from "react"
function Hero(){
    return(
        <div className="hero">
            <img src={HeroImg} className="image"/>
            <h1 className="title">Online Expreiences</h1>
            <small className="smallText">
                Join Uniqe interactive activites led by
                One-of-a-kind hosts-all without leaving 
                home
            </small>
        </div>
    )
}
export default Hero
