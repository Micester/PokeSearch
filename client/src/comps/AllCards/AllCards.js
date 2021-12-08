import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
import pokemon from 'pokemontcgsdk'
import React, {useState, useEffect} from "react";

import './AllCards.scss';


pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

function AllCards(props) {

  const  [ cardData, setCardData ] = useState([])

  // Grab url Id /set/{ID}
  const { id } = useParams();
  console.log('we are in side component did update', id);

  useEffect( () => {
    pokemon.card.all({ q: `set.id:${id}`, orderBy: '-set.releaseDate' })
    .then(result => {
      console.log('current Set', result)
      setCardData(result)
    })
  },[])
  
  console.log('all cards props', props.cards[id]);

  return (
    <section className="Cards-Set">
      <section className="Home-About-Site-Top">
        <div className="Home-About-Site-Top-Heading">
          <h1 className="Home-About-Site-Top-Heading-Title">
            Set: {id.toUpperCase()}
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


      {/* Grab cards by SetID and display cards based on ID */}

      <section className="Home-Destiny-Cards-Box">
      {cardData.length > 0 &&
        cardData.map((card) => (
          <div className="Home-Fossil-Cards-Box-Card" key={card.id}>
          <Link to={`/card/${card.id}`}>
              <img className="Home-Fossil-Cards-Box-Card-image" src={card.images.small} />
              <div className="Home-Fossil-Cards-Box-Card-title">#{card.number} - {card.name}</div>
            </Link>
          </div>
        ))}
            </section>
    </section>
  );
}


export default AllCards;





