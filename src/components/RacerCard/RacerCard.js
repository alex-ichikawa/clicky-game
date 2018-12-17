import React from "react";
import "./RacerCard.css";

const RacerCard = props => (

      <img alt={props.name} src={props.image} class="img-thumbnail" daata-id={props.id} onClick={()=>props.handleIncrement(props.id)}/>

);

export default RacerCard;
