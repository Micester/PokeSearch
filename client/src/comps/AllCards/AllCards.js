import { Link } from "react-router-dom";
import React from "react";
import './AllCards.scss';

function AllCards(props) {

  return (
    <section>
      {props.card.length > 0 &&
        props.card.map((card) => (
          <div className="card" key={card.id}>
            <Link to={`/card/${card.name.toLowerCase()}`}>
              <img className="card-Pokemon" src={card.images.logo} />
            </Link>
          </div>
        ))}
    </section>
  );
}
export default AllCards;





