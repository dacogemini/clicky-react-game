import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
         <img className="clickImage" 
            alt={props.name} 
            src={props.image} 
            onClick={() => props.onClickHandler(props.id)} />
    </div>
  </div>
);

export default FriendCard;
