import { Link } from "react-router-dom";
import React from "react";

function OldCardsDisplay(props) {
  // console.log('OldCardsDisplay', props);

  return (
    <section>
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/card/${card.set.id.toLowerCase()}/${card.name.toLowerCase()}`}>
              <img className="card-Pokemon" src={card.images.small} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default OldCardsDisplay;
