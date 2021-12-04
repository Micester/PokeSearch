import { Link } from "react-router-dom";
import React from "react";

function OldCardsDisplay(props) {
  return (
    <section className="Home-Fossil-Cards-Box">
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="Home-Fossil-Cards-Box-Card" key={card.id}>
            <Link to={`/card/${card.name.toLowerCase()}/${card.set.name.toLowerCase()}/${card.set.ptcgoCode.toLowerCase()}/${card.number.toLowerCase()}`}>
              <img className="Home-Fossil-Cards-Box-Card-image" src={card.images.small} />
              <div className="Home-Fossil-Cards-Box-Card-title">#{card.number} - {card.name}</div>
            </Link>
          </div>
        ))}
    </section>
  );
}
export default OldCardsDisplay;
