import React from "react";
import icon from "./images/icon.png"



export default function Header(){
    return(
        <div className="header">
            <div className="left-header">
            <img src={icon} alt="meme logo" className="logo" />
            <h3>Meme Generator</h3>
            </div> 

            <div className="right-header">
                <h4>React Course - Project 3</h4>
            </div>
        </div>
    )
}