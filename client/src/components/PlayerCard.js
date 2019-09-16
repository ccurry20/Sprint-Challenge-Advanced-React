import React from "react";


export default function PlayerCard(props) {
  return <div>
     
      <h2>{props.player.name}</h2>
       <p>{props.player.country}</p>

    
    </div>
}