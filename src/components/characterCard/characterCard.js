import React from "react";
import "./characterCard.css";

const characterCard = prps => (
    <div className = "card">
        <div className = "img-container">
            <a onClick = {() => props.selectCharacter(props.characters)}
                className = {props.currScore === 0 ?}
                >
                
                <img alt = {props.characters} src={props.image} />

                </a>
        
        </div>
    
    </div>
);

export default characterCard;