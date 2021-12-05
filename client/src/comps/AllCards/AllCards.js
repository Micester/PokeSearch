import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import React from "react";
import './AllCards.scss';


function AllCards(props) {
  const {id} = useParams();
  console.log(props.cards.data);
  return (
    <section className="Home-About-Site">
      <section className="Home-About-Site-Top">
        <div className="Home-About-Site-Top-Heading">
          <h1 className="Home-About-Site-Top-Heading-Title">
            {id}
          </h1>
        </div>
      </section>

      <section className="Home-About-Site-Bottom">
        <div className="Home-About-Site-Bottom-Box">
          <p className="Home-About-Site-Bottom-Box__Text">
            Some Cool information about {id}, how many cards it has, and when it was released.
          </p>
        </div>
      </section>

      <section>
        {props.cards.length > 0 &&
         props.cards.map((card) => (
            <div className="card" key={card.id}>
              <Link to={`/set/${card.name.toLowerCase()}`}>
                <img className="card-Pokemon" src={data.data.set[id].images.logo} />
              </Link>
            </div>
          ))}
      </section>
    </section>
  );
}


export default AllCards;





