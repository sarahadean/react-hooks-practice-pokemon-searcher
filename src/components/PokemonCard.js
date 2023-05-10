import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, frontSprite, backSprite}) {
//on click added to image to reveal backSprite?
const [cardState, setCard] = useState(true)

function toggleCard(){
 setCard(prevCard => !prevCard)
  }

  // let currentCard = cardState ? src={frontSprite} : src={backSprite}

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={() => toggleCard()} 
          src={cardState? frontSprite:backSprite} 
          alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
