import { Link } from "react-router-dom";
import pokemon from 'pokemontcgsdk'
import React from "react";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

function NewCardsDisplay(props) {
  //   console.log('NewCardsDisplay', props);

  return (

    <section>
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/set/${card.name.toLowerCase()}`}>
              <img className="card-Pokemon" src={card.images.small} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default NewCardsDisplay;



