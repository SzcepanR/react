import React from "react"
import Arnold from "../images/arnold.jpg"
import Ronie from "../images/a.jpg"
import Jey from "../images/j.jpg"
import Mariusz from "../images/hh.png"
import Star from "../images/star.png"
let x = 0

function Main(props){
let badgeText
if(props.tile.openSpots === 0){
    badgeText ="SOLD OUT"
}else if(props.tile.online === true ){
    badgeText ="ONLINE"
}
    return(
        
        <main className="main">
        {badgeText && <div className="cardBadge">{badgeText}</div>}
        <img src={props.tile.image} alt="sas bad img " className="arnold" />
        <div className="revew">
            <img src={Star} className="star"/>
            <small className="usa">{props.tile.rating}-{props.tile.country}</small>
        </div>
        <small className="opis">{props.tile.title}</small>
        <div className="textB">
            
            <h3 className="bold">{props.tile.price}$</h3>
            <h4 className="little">/pearson</h4>
        </div>
        </main>
        
    )
    
}
export default Main