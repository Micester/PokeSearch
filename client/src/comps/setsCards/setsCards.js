import { Link } from "react-router-dom";
import React from "react";

function baseCards(props) {
  // console.log('baseCards', props);
  return (
    <section>
      {props.cards.length > 0 &&
        props.cards.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/set/base${card.set.name.toLowerCase()}/${card.name.toLowerCase()}`}>
              <img className="card-Pokemon" src={card.images.small} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default baseCards;
