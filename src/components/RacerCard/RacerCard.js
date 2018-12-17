import React from "react";
import "./RacerCard.css";

const RacerCard = props => (

      <img alt={props.name} src={props.image} class="img-thumbnail" onClick={()=>props.handleIncrement()}/>

);

export default RacerCard;
