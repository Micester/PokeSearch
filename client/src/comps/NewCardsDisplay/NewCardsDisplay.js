import { Link } from "react-router-dom";
import pokemon from 'pokemontcgsdk'
import React from "react";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

function NewCardsDisplay(props) {
  //   console.log('NewCardsDisplay', props);

  return (
    <section className="Home-Destiny-Cards-Box">
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="Home-Destiny-Cards-Box-Card" key={card.id}>
              <Link to={`/card/${card.name.toLowerCase()}/${card.set.name.toLowerCase()}/${card.set.ptcgoCode.toLowerCase()}/${card.number.toLowerCase()}`}>
              <img className="Home-Destiny-Cards-Box-Card-image" src={card.images.small} />
              <div className="Home-Destiny-Cards-Box-Card-title">#{card.number} - {card.name}</div>
            </Link>
          </div>
        ))}
    </section>
  );
}
export default NewCardsDisplay;



