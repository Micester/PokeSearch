import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
import pokemon from 'pokemontcgsdk'
import React, { useState, useEffect } from "react";

pokemon.configure({ apiKey: '7f99b83a-cdb8-4c0d-8523-1bd9286a9b14' })

function CurrentCard() {

  const [cardData, setCardData] = useState({})

  // Grab url Id /set/{ID}
  const { id } = useParams();
  console.log('we are in side component did update', id);

  useEffect(() => {
    axios.get(`https://api.pokemontcg.io/v2/cards/${id}`)
      .then(result => {
        console.log('current Set', result)
        setCardData(result.data.data)
      })
  }, [])

  return (
    <section className="Cards-Set">
{/* 
      <img src={cardData.images.small}/>
      <h1> {cardData.name}</h1>  */}

      <button>
        Add to Card
      </button>
    </section>
  );
}
export default CurrentCard;





